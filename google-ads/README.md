# ThePOS.co.uk — Google Ads: 3 lead-gen search campaigns

**File to import:** `thepos-search-campaigns.csv`
**Account:** every row is tagged with customer ID **156-199-1288 (Thepos.co.uk)**, so Google Ads Editor maps the import to the right account automatically — just make sure that account is downloaded in Editor first (signed in as hello@nathankeeble.com).
**Goal:** leads (Get Matched quiz + fee-calculator captures) and affiliate clicks.
**Structure:** 3 campaigns · 11 ad groups · 59 keywords · **33 responsive search ads (3 per ad group)**. All copy is within Google's limits (headlines ≤30, descriptions ≤90, paths ≤15).

**The 3 ads per group test different angles** (all keep the keyword in the headlines for relevance): **A** = comparison/brand, **B** = trust/independence ("we don't sell card machines"), **C** = offer/CTA (free calculator, 60-second quiz, no monthly fee). Let them run, then pause the weakest once one clearly wins on conversions.

> The CSV imports **campaigns, ad groups, keywords and ads**. Budgets, bidding, locations, negatives, ad extensions and conversion tracking are **not** in the CSV (they import unreliably) — set them per the steps below. It's 15 minutes.

---

## 0. Do this FIRST (before importing)
1. Create the Google Ads account (skip the "Smart campaign" express setup — click **Switch to Expert mode** so you get proper search campaigns).
2. **Set up conversion tracking before you spend a penny** (see §3). Smart bidding is blind without it.

## 1. Import the CSV (Google Ads Editor)
1. Download and install **Google Ads Editor** (free desktop app).
2. **Add account** → sign in → download your (empty) account.
3. **Account → Import → From file…** → choose `thepos-search-campaigns.csv`.
4. Review the proposed changes (green = new). Fix any warnings.
5. **Post** to push it live. It uploads as **Paused** by default in some versions — check statuses before enabling.

## 2. Campaign settings (set on all 3 after import)
- **Networks:** Search only. **Turn OFF** Search Partners and the Display Network (protects Quality Score + spend early on).
- **Locations:** United Kingdom. Set location option to **"Presence: people in your target locations"** (not "interest") to avoid wasted spend.
- **Language:** English.
- **Budget:** start ~**£15–25/day per campaign**. If budget is tight, launch **Campaign 1 (Card Machines)** first — highest intent.
- **Ad schedule:** all hours to start; refine once you have data.
- **Devices:** all; mobile usually dominates for this audience.
- **Ad rotation:** Optimise for best-performing ads.

## 3. Conversion tracking (CRITICAL — the site already fires the events)
The site already pushes these to **GA4 via GTM**: `lead_submit`, `quiz_complete`, `calculator_lead`, `affiliate_click`, `newsletter_signup`.

Easiest path:
1. **Link GA4 to Google Ads** (Google Ads → Tools → Data manager → link GA4).
2. **Import GA4 key events** as conversions: mark `lead_submit`, `quiz_complete`, `calculator_lead` as **Primary** conversions (these are the leads). Set `affiliate_click` as **Secondary** (observe only).
3. In each campaign, set the conversion goal to those primary lead actions.

(Alternative: create a Google Ads conversion action and fire it from GTM on the same dataLayer events. GA4 import is simpler to start.)

**Assign lead values** so smart bidding optimises for quality: e.g. quiz/quote = £25, calculator = £10 (matches the site's internal `lead_value`). Adjust as real EPC/lead-sale data comes in.

## 4. Bidding (new account = no data yet)
- **Weeks 1–2:** **Maximise clicks** with a **max CPC cap of ~£2.00** (gather clicks + data cheaply), OR Manual CPC if you want tight control. The CSV pre-sets Max CPC £2.50 per keyword as a starting cap.
- **After ~15–30 conversions:** switch to **Maximise conversions**, then add a **target CPA** once stable (start tCPA ~£15–25 and loosen if volume dies).
- Never start on tCPA with zero data — it will barely spend.

## 5. Negative keywords (add as a shared list applied to all 3 campaigns)
"Card" is ambiguous, so negatives matter a lot here. Add these as a **shared negative list** (Tools → Shared library → Negative keyword lists) and apply to all campaigns:

```
free, atm, cash machine, cashpoint, sd card, memory card, graphics card, gift card,
sim card, id card, birthday card, greeting card, christmas card, playing cards, tarot,
report, repair, faulty, refurbished, second hand, jobs, job, vacancy, salary, career,
course, training, wiki, meaning, definition, "what is a", clip art, template, game,
crypto, business cards (printing), loyalty card, prepaid card, travel card, oyster
```
Review the **Search terms report** weekly for the first month and keep adding negatives — this is where you save the most money.

## 6. Ad extensions / assets (add these — they lift Ad Rank directly)
Extensions improve Ad Rank and CTR, so add all of them.

**Sitelinks** (link + short description):
- **Fee Calculator** → `/card-machine-fee-calculator` — "See what you'd actually pay."
- **Compare Card Machines** → `/compare-card-machines` — "Fees, contracts and payouts."
- **60-Second Quiz** → `/get-pos-quotes` — "Get matched to your best fit."
- **No Monthly Fee Readers** → `/card-readers-no-monthly-fee` — "Pay only per sale."
- **By Business Type** → `/pos-systems` — "Cafés, shops, salons, market stalls."
- **Reviews** → `/reviews` — "Honest verdicts, real fees."

**Callouts:** Independent · No Sales Calls · Real Fee Notes · No Monthly Fee Options · UK-Focused · Compare in 60 Seconds · Plain English

**Structured snippets:**
- Header **Brands:** SumUp, Square, PayPal Zettle, Dojo, myPOS, Worldpay
- Header **Types:** Card readers, Card machines, POS systems, EPOS tills

**Call asset:** only if you can answer the phone — this is a comparison site, so probably skip and keep them on-site.

## 7. How we get excellent Ad Rank (Quality Score)
Ad Rank = your bid × Quality Score (+ ad assets + context). QS = expected CTR + ad relevance + landing-page experience. This build is designed for all three:
- **Tight ad groups** (each ad group = one theme), with the **keyword in the headlines** → high ad relevance + CTR.
- **Matched landing pages** (card-machine ads → `/compare-card-machines`, café ads → `/pos-systems/cafes`, etc.) → strong landing-page experience.
- **Fast, mobile-first site** (~22 KB, 0 CLS) → landing-page experience is already excellent.
- **All ad assets on** → extensions boost Ad Rank and can lower CPC.
Result: better positions at lower CPCs than bidding harder alone.

## 8. Suggested launch plan
- Start with **Campaign 1 (Card Machines)** + **Campaign 3 (By Business Type)** — highest intent, best CVR.
- Add **Campaign 2 (POS & EPOS)** once conversions are flowing (broader, pricier terms).
- Total starter budget ~**£30–50/day**; scale the ad groups that convert.

## 9. First-month optimisation checklist
- [ ] Conversions recording correctly (test a quiz + calculator submit → see it in Google Ads).
- [ ] Search terms report reviewed weekly → add negatives, harvest new exact keywords.
- [ ] Pause keywords with clicks but zero conversions after enough spend.
- [ ] Check each RSA shows "Good/Excellent" Ad Strength; add headlines if "Poor".
- [ ] Move to Maximise Conversions once you have ~15–30 conversions.
- [ ] Watch Quality Score column; fix any keyword <5 (usually relevance or LP mismatch).

---

*Fees quoted in ads (from 0.99%, from £19) match the site data and are caveated on-site. Provider pricing changes — glance over the ad copy before it ages, and keep it truthful for Google's policies + ASA.*
