# ThePOS.co.uk — Lead-Gen Tracking & Klaviyo Spec

The technical blueprint for turning the site into a measurable lead-gen machine:
**GA4 event taxonomy**, **GTM wiring**, **Klaviyo CRM/email infrastructure**, and the
**quiz + calculator lead magnets**.

All client events flow through one helper — `track(event, props)` in `lib/analytics.tsx`
— which pushes to **`window.dataLayer`** (GTM picks them up and forwards to GA4). So we
instrument once and route anywhere from GTM.

---

## 1. GA4 event taxonomy

### Primary conversions — mark these as **Key Events** in GA4
| Event | Fires when | Key params |
| --- | --- | --- |
| `affiliate_click` | User clicks out to a provider via an affiliate link | `provider`, `source`, `page`, `value` (est. commission) |
| `lead_submit` | Quote/“Get matched” form completed | `lead_source`, `business_type`, `monthly_turnover`, `priority`, `value` (est. lead value) |
| `quiz_complete` | Quiz finishes (results shown) | `business_type`, `top_match` |
| `calculator_lead` | Email captured on the calculator | `monthly_turnover`, `cheapest_provider` |
| `newsletter_signup` | Newsletter/PDF opt-in | `source` |
| `phone_click` | Tap on a phone number | `page` |

### Secondary / engagement events
| Event | Fires when | Key params |
| --- | --- | --- |
| `provider_cta_click` | Any provider CTA (incl. non-affiliate) | `provider`, `source` |
| `lead_form_start` | First interaction with the lead form | — |
| `lead_form_step` | Each multi-step advance | `step` (1–4) |
| `quiz_start` | First quiz answer | `source` |
| `quiz_question_answered` | Each quiz answer | `step`, `question`, `answer` |
| `calculator_start` | First input change | — |
| `calculator_completed` | Results computed | `monthly_turnover`, `cheapest_provider`, `effective_rate` |
| `comparison_filter_used` | Filter toggled | `filter`, `source` |
| `comparison_sort_used` | Sort changed | `sort` |
| `magnet_view` | Lead-magnet capture form shown | `magnet` (quiz/calculator) |
| `magnet_submit` | Lead-magnet form completed | `magnet`, `business_type` |
| `content_view` | Guide / blog / review viewed | `content_type`, `slug` |
| `email_click` | Tap on an email link | `page` |
| `quote_page_view` | `/get-pos-quotes` viewed | — |
| `scroll_depth` | 25/50/75/100% | `percent`, `page` |

### Lead-value model (for GA4 `value` + Klaviyo scoring)
Assign an estimated £ value per conversion so GA4/Ads can optimise to revenue:
- `affiliate_click`: provider-specific (e.g. SumUp/Square ~£10–30 EPC, Dojo/quote-based ~£40–80).
- `lead_submit`: by turnover band (e.g. <£2k = £8, £2–10k = £20, £10–30k = £40, £30k+ = £70).
Keep these in one config (`lib/leadValue.ts`) so they're tunable as real EPC data arrives.

### GTM → GA4 setup (one-time, in GTM UI)
1. **GA4 Configuration tag** (your GA4 Measurement ID) on All Pages.
2. A **GA4 Event tag per event** (or one generic tag using `{{Event}}` + a Data Layer
   Variable for each param), triggered by a **Custom Event** trigger matching the names above.
3. Mark the six primary events as **Key Events** in GA4 → Admin → Events.
4. Link **Google Ads** → import Key Events as conversions for Smart Bidding to lead value.

---

## 2. Klaviyo infrastructure

### Integration approach (two layers)
- **Onsite JS** (`klaviyo.js` with your **Company/Site ID**) — active-on-site tracking,
  embedded/popup forms, and `identify`.
- **Server-side** (in `app/api/leads/route.ts`, using the **Private API key**) — the source
  of truth. On every lead we:
  1. **Create/update profile** (Klaviyo Profiles API) with properties below.
  2. **Subscribe** to the Leads list *with consent* (Subscribe Profiles API) — respects the
     consent checkbox; supports double opt-in if enabled.
  3. **Track a metric event** (Events API): `Completed Quiz`, `Used Fee Calculator`, or
     `Requested POS Quotes`, with full properties → triggers flows.

### Lists & segments
- **Master list:** `Leads — ThePOS`.
- **Segments** (built in Klaviyo from profile props): by `business_type`, `lead_source`
  (quiz / calculator / quote), `monthly_turnover` band, `priority`, and `needs_full_pos`.

### Profile properties (collected → Klaviyo)
`first_name`, `organization` (company name), `phone_number` (optional), `email`,
plus customs: `business_type`, `monthly_turnover`, `priority`, `needs_card_machine`,
`needs_full_pos`, `current_provider`, `lead_source`, `quiz_top_match`,
`est_monthly_fee`, `cheapest_provider`, `utm_source`, `utm_medium`, `utm_campaign`, `gclid`.

### Klaviyo metric events (power the flows)
- `Completed Quiz` — props: business_type, top_match, priority.
- `Used Fee Calculator` — props: monthly_turnover, cheapest_provider, est_monthly_fee.
- `Requested POS Quotes` — props: business_type, priority, needs_full_pos, turnover.

### Flows to build (Klaviyo UI — marketing side)
1. **Lead welcome / results delivery** (triggered by each magnet event): deliver the
   personalised result (top match / fee breakdown) + the affiliate links → drives revenue.
2. **Quiz → nurture**: 3–5 emails educating + nudging toward the top-matched provider.
3. **Calculator → nurture**: “here’s how to cut your fees” + provider CTAs.
4. **Abandoned magnet** (started, not submitted — onsite tracking).
5. **Weekly tips newsletter** (“small-business payment tips without the fintech nonsense”).
6. **Provider-specific** sequences keyed off `quiz_top_match` / `cheapest_provider`.

### Env vars (add in Netlify)
```
KLAVIYO_PRIVATE_API_KEY=pk_xxx          # server-side (Profiles/Events/Subscribe)
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=XXXXXX   # onsite klaviyo.js + forms
KLAVIYO_LEADS_LIST_ID=XXXXXX            # master Leads list
```
Without these set, lead capture still works (stored + logged); Klaviyo calls no-op.

### Consent / compliance
- Explicit consent checkbox → only then `subscribed` (marketing). Store consent + timestamp.
- Honour UK GDPR/PECR; double opt-in recommended for cold capture.

---

## 3. Lead magnets — quiz & calculator

**Fields collected (all magnets):** First name · Company name · Company phone (optional) · Email · consent.

**Recommended UX — “value gate at the result”:**
- **Quiz:** user answers freely → before revealing full matched results + “personalised
  quotes”, show the capture form (“Where should we send your matches?”). Submitting fires
  `magnet_submit` + `quiz_complete` + Klaviyo `Completed Quiz`, then reveals results.
- **Calculator:** user sees their headline result, with the **full per-provider breakdown +
  “email me a copy / get matched quotes”** behind the capture. Submitting fires
  `magnet_submit` + `calculator_lead` + Klaviyo `Used Fee Calculator`.
- **Quote form** (`/get-pos-quotes`): already collects richer data → `lead_submit`.

This balances capture rate with UX (tool is usable; the *enhanced* value is gated). The
alternative — hard-gating before any result — captures more emails but hurts UX/SEO and
bounce; recommend A/B testing later.

---

## Build status
- [x] All events route through `track()` → `dataLayer` → GTM (GA4-ready).
- [x] Core events instrumented (affiliate_click, lead_form_*, quiz_*, calculator_completed, comparison_filter_used, quote_page_view).
- [ ] Add remaining event fires (scroll_depth, content_view, sort, phone/email click, lead_form_step, calculator_start, quiz_question_answered).
- [ ] Lead-magnet capture component + gate on quiz & calculator (4 fields).
- [ ] Klaviyo server-side integration in `/api/leads` + onsite `klaviyo.js`.
- [ ] `lib/leadValue.ts` value model + GA4 `value` params.
- [ ] GTM tags/triggers + GA4 Key Events + Google Ads conversion import (in-platform).
