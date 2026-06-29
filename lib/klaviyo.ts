/* Server-side Klaviyo integration.
 * Env-gated and fail-safe: if keys are missing or a call fails, it logs and
 * returns - lead capture must never break because of Klaviyo.
 *
 * Env:
 *   KLAVIYO_PRIVATE_API_KEY   (pk_...)
 *   KLAVIYO_LEADS_LIST_ID     (master Leads list)
 */

// .trim() guards against a trailing newline/space when the value is pasted into
// a hosting dashboard - that silently corrupts the Authorization header.
const KEY = process.env.KLAVIYO_PRIVATE_API_KEY?.trim();
const LIST_ID = process.env.KLAVIYO_LEADS_LIST_ID?.trim();
const REVISION = "2024-10-15";

export type KlaviyoProfile = {
  email: string;
  firstName?: string;
  company?: string;
  /** Custom properties stored on the profile (snake_case keys recommended). */
  properties?: Record<string, string | number | boolean | undefined>;
};

function headers() {
  return {
    Authorization: `Klaviyo-API-Key ${KEY}`,
    "Content-Type": "application/json",
    accept: "application/json",
    revision: REVISION,
  };
}

function cleanProps(props: Record<string, unknown> = {}) {
  return Object.fromEntries(Object.entries(props).filter(([, v]) => v !== undefined && v !== ""));
}

/** Create or update the full profile (name, company, custom properties).
 *  The subscription endpoint only accepts email/phone/subscriptions, so profile
 *  attributes have to be written here. Returns true if the profile now exists. */
async function upsertProfile(profile: KlaviyoProfile): Promise<boolean> {
  const attributes = cleanProps({
    email: profile.email,
    first_name: profile.firstName,
    organization: profile.company,
    properties: cleanProps(profile.properties),
  });
  const body = JSON.stringify({ data: { type: "profile", attributes } });

  let res = await fetch("https://a.klaviyo.com/api/profiles/", { method: "POST", headers: headers(), body });

  // 409 = profile already exists; Klaviyo returns its id so we can PATCH it.
  if (res.status === 409) {
    const dup = await res.json().catch(() => null);
    const id = dup?.errors?.[0]?.meta?.duplicate_profile_id as string | undefined;
    if (!id) {
      console.error("[klaviyo] 409 without duplicate id", JSON.stringify(dup));
      return false;
    }
    res = await fetch(`https://a.klaviyo.com/api/profiles/${id}/`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({ data: { type: "profile", id, attributes } }),
    });
  }

  if (!res.ok) {
    console.error("[klaviyo] profile upsert failed", res.status, await res.text().catch(() => ""));
    return false;
  }
  return true;
}

/** Create/update the profile and subscribe it (with consent) to the Leads list. */
export async function klaviyoSubscribe(profile: KlaviyoProfile): Promise<boolean> {
  if (!KEY || !LIST_ID) return false;
  try {
    // 1. Write the full profile (name, company, properties).
    const profileOk = await upsertProfile(profile);
    if (!profileOk) return false;

    // 2. Subscribe with consent. This endpoint only takes email + subscriptions.
    const res = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            custom_source: "Website lead",
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: {
                    email: profile.email,
                    subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } },
                  },
                },
              ],
            },
          },
          relationships: { list: { data: { type: "list", id: LIST_ID } } },
        },
      }),
    });
    // Profile exists either way; a subscribe hiccup shouldn't drop the lead marker.
    if (!res.ok) console.error("[klaviyo] subscribe failed", res.status, await res.text().catch(() => ""));
    return true;
  } catch (err) {
    console.error("[klaviyo] subscribe error", err);
    return false;
  }
}

/** Track a metric event against the profile (powers Klaviyo flows). */
export async function klaviyoTrack(
  metricName: string,
  email: string,
  properties: Record<string, unknown> = {},
): Promise<boolean> {
  if (!KEY) return false;
  try {
    const res = await fetch("https://a.klaviyo.com/api/events/", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            properties: cleanProps(properties),
            metric: { data: { type: "metric", attributes: { name: metricName } } },
            profile: { data: { type: "profile", attributes: { email } } },
          },
        },
      }),
    });
    if (!res.ok) console.error("[klaviyo] event failed", res.status, await res.text().catch(() => ""));
    return res.ok;
  } catch (err) {
    console.error("[klaviyo] event error", err);
    return false;
  }
}

export const klaviyoEnabled = Boolean(KEY && LIST_ID);
