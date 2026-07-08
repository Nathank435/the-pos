#!/usr/bin/env python3
"""Generate thepos-search-campaigns-v2.csv - the 'scalpel' campaigns:
provider-brand-modified, vs-matrix, calculator intent, switching intent.
Validates RSA limits (H<=30, D<=90, Path<=15) and fails loudly on violations."""
import csv

ACCOUNT = "156-199-1288"
BASE = "https://thepos.co.uk"

HEADER = ["Account", "Campaign", "Campaign Type", "Campaign Daily Budget", "Networks",
          "Ad Group", "Max CPC", "Keyword", "Match Type", "Ad Type"] + \
         [f"Headline {i}" for i in range(1, 16)] + \
         [f"Description {i}" for i in range(1, 5)] + \
         ["Path 1", "Path 2", "Final URL", "Status"]

# Shared asset banks (angles: A=review/comparison, B=trust/independence, C=tool/CTA)
TRUST_H = [
    "Independent UK Review",        # 22
    "Real Fees, No Waffle",         # 20
    "We Don't Sell Card Machines",  # 27
    "Honest Verdict Inside",        # 21
    "Read Before You Sign",         # 20
    "UK Small Business Focus",      # 23
]
TOOL_H = [
    "Free Fee Calculator",          # 19
    "No Email Needed",              # 15
    "See What You'd Really Pay",    # 25
    "Compare 12 UK Providers",      # 23
    "Takes About Ten Seconds",      # 23
]
TRUST_D = [
    "We don't sell card machines - we review them. Independent verdicts in plain English.",
    "Prices verified against provider pricing pages. They can't pay to change our verdicts.",
    "Compare fees, contracts and payout speed across every big UK provider. No sales calls.",
]
TOOL_D = [
    "Free calculator shows your true monthly cost at your turnover. Ten seconds, no email.",
    "Enter turnover and average sale - see monthly cost and all-in rate for every provider.",
]

def rsa(headlines, descriptions, path1, path2, url):
    h = (headlines + [""] * 15)[:15]
    d = (descriptions + [""] * 4)[:4]
    return h, d, path1, path2, url

# --- Campaign definitions -------------------------------------------------
# group = (name, max_cpc, final_url, path1, path2, keywords[(kw, match)], specific_H, specific_D)

def provider_group(name, slug, brand, extra_kws, specific_h, specific_d, cpc="1.20"):
    kws = [(k, m) for k, m in extra_kws]
    return (name, cpc, f"{BASE}/reviews/{slug}", "reviews", slug[:15], kws, specific_h, specific_d)

CAMPAIGNS = [
    ("ThePOS | Provider Brand", "15", [
        provider_group("Dojo", "dojo", "Dojo", [
            ("dojo card machine", "Exact"), ("dojo card machine", "Phrase"),
            ("dojo fees", "Exact"), ("dojo pricing", "Exact"),
            ("dojo card machine review", "Exact"), ("dojo reviews", "Exact"),
            ("dojo card machine cost", "Exact"), ("is dojo any good", "Exact"),
            ("dojo payments review", "Exact"),
        ], [
            "Dojo Review 2026",              # 16
            "Dojo Fees Explained",           # 19
            "What Dojo Actually Costs",      # 24
            "Dojo Contract: The Catches",    # 26
            "Is Dojo Any Good? Our Verdict", # 29
        ], [
            "What Dojo really costs, what's in the contract, and who should walk away.",
            "Dojo doesn't publish pricing. We explain the quotes, terms and exit clauses.",
        ]),
        provider_group("SumUp", "sumup", "SumUp", [
            ("sumup review", "Exact"), ("sumup review", "Phrase"),
            ("sumup fees", "Exact"), ("sumup charges", "Exact"),
            ("is sumup any good", "Exact"), ("sumup card reader review", "Exact"),
            ("sumup solo review", "Exact"),
        ], [
            "SumUp Review 2026",             # 17
            "SumUp Fees Explained",          # 20
            "Is SumUp Any Good?",            # 18
            "SumUp: Who It's Really For",    # 26
            "SumUp vs The Rest",             # 17
        ], [
            "SumUp reviewed on real fees, payouts and limits - and who should pick Square instead.",
            "1.69% flat, PS19 reader, no contract. The catches and the verdict, in plain English.",
        ]),
        provider_group("Square", "square", "Square", [
            ("square card reader review", "Exact"), ("square reader uk", "Exact"),
            ("square fees uk", "Exact"), ("square pos review", "Exact"),
            ("is square good for small business", "Exact"),
        ], [
            "Square UK Review 2026",         # 20
            "Square Fees Explained",         # 21
            "Square Reader: Our Verdict",    # 25
            "Square: Who It Suits",          # 20
            "Square vs SumUp vs Zettle",     # 25
        ], [
            "Square reviewed for UK small businesses: fees, free POS software and the catches.",
            "1.75% flat with genuinely free software. Where Square wins and where it doesn't.",
        ]),
        provider_group("Zettle", "zettle", "Zettle", [
            ("zettle review", "Exact"), ("zettle fees", "Exact"),
            ("paypal zettle review", "Exact"), ("paypal card reader", "Exact"),
            ("zettle card reader review", "Exact"),
        ], [
            "Zettle Review 2026",            # 17
            "PayPal Zettle: Our Verdict",    # 25
            "Zettle Fees Explained",         # 20
            "Zettle vs SumUp vs Square",     # 24
            "Is Zettle Any Good?",           # 19
        ], [
            "PayPal Zettle reviewed: fees, payouts into PayPal and who it actually suits.",
            "1.75% flat, PS29 reader. Strong if you live on PayPal - the catches if you don't.",
        ]),
        provider_group("myPOS", "mypos", "myPOS", [
            ("mypos review", "Exact"), ("mypos fees", "Exact"),
            ("is mypos any good", "Exact"), ("mypos card machine", "Exact"),
        ], [
            "myPOS Review 2026",             # 16
            "myPOS Fees Explained",          # 19
            "myPOS: Instant Settlement",     # 24
            "Is myPOS Any Good?",            # 17
            "myPOS: The Catches",            # 17
        ], [
            "myPOS reviewed: instant settlement, low rates and the small print worth reading.",
            "From 1.1% + 7p with instant payouts. Who myPOS suits and who should look elsewhere.",
        ]),
        provider_group("Worldpay", "worldpay", "Worldpay", [
            ("worldpay review", "Exact"), ("worldpay fees", "Exact"),
            ("worldpay cancellation fee", "Exact"), ("worldpay exit fee", "Exact"),
            ("how to cancel worldpay", "Exact"), ("worldpay alternatives", "Exact"),
            ("worldpay alternatives", "Phrase"),
        ], [
            "Worldpay Review 2026",          # 19
            "Worldpay Fees Explained",       # 22
            "Leaving Worldpay? Read This",   # 26
            "Worldpay Alternatives 2026",    # 25
            "Worldpay: Contract Catches",    # 25
        ], [
            "Worldpay reviewed: quote-based fees, contract terms and the exit costs to check.",
            "Thinking of leaving? Compare what you'd pay elsewhere before your renewal date.",
        ]),
    ]),
    ("ThePOS | Vs Comparisons", "10", [
        ("SumUp vs Square", "0.90", f"{BASE}/compare/sumup-vs-square", "compare", "sumup-vs-square",
         [("sumup vs square", "Exact"), ("square vs sumup", "Exact"), ("sumup or square", "Exact")],
         ["SumUp vs Square (2026)", "One Clear Winner For You", "Fees & Features Compared", "Which Suits Your Business?"],
         ["SumUp vs Square compared on fees, payouts, software and hardware - with a straight answer."]),
        ("Square vs Zettle", "0.90", f"{BASE}/compare/square-vs-zettle", "compare", "square-zettle",
         [("square vs zettle", "Exact"), ("zettle vs square", "Exact")],
         ["Square vs Zettle (2026)", "One Clear Winner For You", "Fees & Features Compared", "Which Suits Your Business?"],
         ["Square vs PayPal Zettle on fees, software and payouts - with a straight answer."]),
        ("SumUp vs Zettle", "0.90", f"{BASE}/compare/sumup-vs-zettle", "compare", "sumup-zettle",
         [("sumup vs zettle", "Exact"), ("zettle vs sumup", "Exact")],
         ["SumUp vs Zettle (2026)", "One Clear Winner For You", "Fees & Features Compared", "Which Suits Your Business?"],
         ["SumUp vs Zettle on fees, readers and payouts - which one fits how you trade."]),
        ("SumUp vs Dojo", "0.90", f"{BASE}/compare/sumup-vs-dojo", "compare", "sumup-vs-dojo",
         [("sumup vs dojo", "Exact"), ("dojo vs sumup", "Exact")],
         ["SumUp vs Dojo (2026)", "Flat Rate vs Quote-Based", "Fees & Contracts Compared", "Which Suits Your Business?"],
         ["Flat-rate SumUp vs quote-based Dojo - where the crossover point sits for your volume."]),
        ("Dojo vs Square", "0.90", f"{BASE}/compare/dojo-vs-square", "compare", "dojo-vs-square",
         [("dojo vs square", "Exact"), ("square vs dojo", "Exact")],
         ["Dojo vs Square (2026)", "Flat Rate vs Quote-Based", "Fees & Contracts Compared", "Which Suits Your Business?"],
         ["Dojo vs Square on real fees, contracts and payouts - with a straight answer."]),
    ]),
    ("ThePOS | Fee Calculator", "12", [
        ("Fee Calculator", "1.50", f"{BASE}/card-machine-fee-calculator", "fee", "calculator",
         [("card machine fee calculator", "Exact"), ("card payment fee calculator", "Exact"),
          ("card processing fee calculator", "Exact"), ("card machine fees calculator", "Exact"),
          ("card reader fee calculator", "Exact"), ("card machine fees", "Phrase")],
         ["Card Machine Fee Calculator", "Your Real Cost In Seconds", "Every UK Provider Compared", "Free - No Email Needed", "Enter Turnover, See Costs"],
         ["Two numbers, ten seconds: your true monthly cost on every big UK provider. Free."]),
        ("Card Machine Costs", "1.30", f"{BASE}/card-machine-fee-calculator", "card-machine", "costs",
         [("how much does a card machine cost", "Exact"), ("card machine cost", "Exact"),
          ("card machine prices", "Exact"), ("card machine costs uk", "Exact"),
          ("average card machine fees uk", "Exact")],
         ["Card Machine Costs (2026)", "What You'd Actually Pay", "Calculate Your Real Cost", "PS19 Reader To Full EPOS", "Every Fee Explained"],
         ["Real UK card machine costs at your turnover - hardware, fees and monthly charges."]),
    ]),
    ("ThePOS | Switching", "10", [
        ("Switching Provider", "1.40", f"{BASE}/compare-card-machines", "compare", "switch",
         [("switch card machine provider", "Exact"), ("switching card payment provider", "Exact"),
          ("change card machine provider", "Exact"), ("best card machine deals", "Exact"),
          ("compare card machine providers", "Exact"), ("compare card machines", "Exact"),
          ("compare card machines", "Phrase")],
         ["Switching Card Providers?", "Compare Before You Sign", "12 UK Providers Compared", "Check Your Exit Fees First", "Paying Too Much? Check Now"],
         ["Compare every big UK provider on fees, contracts and payouts before you switch."]),
    ]),
]

rows = [HEADER]
violations = []

for camp_name, budget, groups in CAMPAIGNS:
    rows.append([ACCOUNT, camp_name, "Search", budget, "Google search"] + [""] * (len(HEADER) - 6) + ["Enabled"])
    for g in groups:
        gname, cpc, url, p1, p2, kws, spec_h, spec_d = g
        # keywords
        for kw, match in kws:
            r = [ACCOUNT, camp_name, "", "", "", gname, cpc, kw, match, ""] + [""] * 19 + ["", "", "", "Enabled"]
            rows.append(r)
        # 3 RSAs per group: A=specific, B=trust, C=tool - each mixes banks differently
        variants = [
            (spec_h + TRUST_H[:5] + TOOL_H[:5], (spec_d + TRUST_D)[:4]),
            (spec_h[:3] + TRUST_H + TOOL_H[:4], ([TRUST_D[0]] + spec_d + [TOOL_D[0]])[:4]),
            (spec_h[:3] + TOOL_H + TRUST_H[:4], (TOOL_D + [spec_d[0], TRUST_D[1]])[:4]),
        ]
        for h_list, d_list in variants:
            # de-dup while preserving order, cap 15
            seen, H = set(), []
            for h in h_list:
                if h not in seen:
                    seen.add(h); H.append(h)
            H = H[:15]
            seen, D = set(), []
            for d in d_list:
                if d not in seen:
                    seen.add(d); D.append(d)
            D = D[:4]
            for h in H:
                if len(h) > 30: violations.append(f"H>{30}: '{h}' ({len(h)}) in {gname}")
            for d in D:
                if len(d) > 90: violations.append(f"D>{90}: '{d}' ({len(d)}) in {gname}")
            for p in (p1, p2):
                if len(p) > 15: violations.append(f"Path>15: '{p}' in {gname}")
            r = [ACCOUNT, camp_name, "", "", "", gname, "", "", "", "Responsive search ad"] + \
                (H + [""] * 15)[:15] + (D + [""] * 4)[:4] + [p1, p2, url, "Enabled"]
            rows.append(r)

if violations:
    print("VIOLATIONS:")
    for v in violations:
        print(" ", v)
    raise SystemExit(1)

# GBP sign: Ads Editor CSVs are fine with the pound sign; we wrote PS placeholders to
# keep this file ASCII-safe in generation - swap to real character on write.
out = []
for r in rows:
    out.append([c.replace("PS19", "£19").replace("PS29", "£29") if isinstance(c, str) else c for c in r])

with open("google-ads/thepos-search-campaigns-v2.csv", "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows(out)

n_camp = len(CAMPAIGNS)
n_groups = sum(len(g) for _, _, g in CAMPAIGNS)
n_kws = sum(len(g[5]) for _, _, gs in CAMPAIGNS for g in gs)
n_ads = n_groups * 3
print(f"OK: {n_camp} campaigns, {n_groups} ad groups, {n_kws} keywords, {n_ads} RSAs, 0 violations")
