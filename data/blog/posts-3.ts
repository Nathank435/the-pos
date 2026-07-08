/* Blog posts, part 3 of 3 - assembled and type-checked in data/blog.ts.
 * Plain data on purpose: the BLOG_POSTS assembly enforces the BlogPost type. */
import type { BlogPost } from "./types";

export const POSTS_3: BlogPost[] = [
{
  "slug": "can-a-business-refuse-cash-uk",
  "title": "Can a Business Legally Refuse Cash in the UK? (Going Cashless in 2026)",
  "excerpt": "Yes - UK businesses can legally refuse cash, and 'legal tender' doesn't mean what most people think. What the law says, and whether going card-only is actually a good idea.",
  "category": "How-to",
  "author": "Nathan Keeble",
  "date": "2026-07-05",
  "readMinutes": 5,
  "featuredImage": "/images/blog/can-a-business-refuse-cash-uk.webp",
  "featuredAlt": "Business owner counting cash takings at a desk",
  "intro": "Yes - a UK business can legally refuse cash. 'Legal tender' is one of the most misunderstood phrases in British life, and it does not force any shop to accept notes and coins. But whether you legally can go cashless and whether you commercially should are two different questions. Here are both answers.",
  "sections": [
    {
      "heading": "The law: you can refuse cash",
      "paragraphs": [
        "There is no UK law requiring a business to accept cash. A shop sale is a contract, and you're free to set the terms - including 'card only'. Refusing cash before a sale happens is entirely legal, the same way a vending machine legally refuses £50 notes.",
        "'Legal tender' has a narrow technical meaning: it's about settling a court-recognised debt - if you owe money and offer legal tender, you can't then be sued for non-payment. Buying a coffee isn't a debt; you're negotiating a sale, and the seller sets the terms. That's why 'but it's legal tender!' has no force at the till."
      ]
    },
    {
      "heading": "Why businesses go card-only",
      "paragraphs": [
        "The case for cashless is mostly about time and risk, and it's stronger than most owners expect once they cost it honestly:"
      ],
      "bullets": [
        "Cashing up, floats, change runs and banking visits: typically 3-5 hours a week for a busy counter. That's paid time.",
        "Banks increasingly charge small businesses to deposit cash - often 0.5%-1% of the amount. Cash has a processing fee too; it's just hidden.",
        "Theft and shrinkage risk drops to near zero - no till skimming, no closing-time walk to the bank.",
        "Every sale lands in reports automatically, which makes VAT, reconciliation and staffing decisions cleaner."
      ]
    },
    {
      "heading": "Why you might keep taking cash anyway",
      "paragraphs": [
        "Cash still matters to real customers: older people, kids, anyone budgeting hard, and anyone whose bank is having a bad day. Roughly one in five UK payments is still cash, and it skews towards exactly the local, habitual customers a small business lives on. A pub or cafe that goes card-only is quietly telling some regulars they're not welcome.",
        "There's also resilience: when the internet fails or a provider has an outage, cash is the payment method that still works. Plenty of card-only businesses discovered this the hard way during past outages. If you do go cashless, have an offline plan - even if it's just a notebook and trust."
      ]
    },
    {
      "heading": "If you go card-only, do it properly",
      "paragraphs": [
        "Signage before the order, not at the till - 'Card payments only' at the door and on the menu removes the awkward moment entirely. Make sure your setup can actually carry the load: a [reader with a backup](/compare-card-machines), Tap to Pay on a phone as the emergency fallback, and payouts fast enough that going cashless doesn't create a cash-flow gap - see [which providers pay out same-day](/blog/same-day-payouts-providers).",
        "And if the maths is the deciding factor, run it: cashless means every sale carries a card fee, so a business moving £3,000 of monthly cash sales onto cards adds roughly £50/month in fees at typical rates - against the hours and deposit charges saved. The [fee calculator](/card-machine-fee-calculator) gives you your number in two minutes."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is it discrimination to refuse cash?",
      "a": "It's not unlawful discrimination in the legal sense - payment method isn't a protected characteristic. But it does exclude some customers in practice, which is a commercial decision worth making deliberately rather than by default."
    },
    {
      "q": "Can a pub or restaurant refuse cash after I've eaten?",
      "a": "This is the interesting edge case - once you've consumed the meal, a debt arguably exists, and refusing legal tender for a debt gets murky. In practice businesses displaying 'card only' clearly before you order avoid the problem entirely."
    },
    {
      "q": "Do market traders have to take cash?",
      "a": "No - same rules. Though in practice most market traders find refusing cash costs real sales; a £19 card reader alongside the cash tin covers both crowds."
    },
    {
      "q": "Can I refuse £50 notes but take other cash?",
      "a": "Yes. You can set any payment terms you like before the sale - card only, no £50s, exact change after 9pm. Clarity beats confrontation: put it on a sign."
    }
  ],
  "relatedPosts": [
    "same-day-payouts-providers",
    "do-you-need-a-card-machine",
    "how-to-take-card-payments-uk"
  ],
  "relatedLinks": [
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    },
    {
      "label": "Get matched in 60 seconds",
      "href": "/get-pos-quotes"
    }
  ]
},
{
  "slug": "card-reader-vs-card-machine",
  "title": "Card Reader vs Card Machine: What's the Difference (and Which Do You Need)?",
  "excerpt": "Card reader, card machine, terminal, PDQ - the industry uses four names for two products. What each one actually is, the real price difference, and which fits your counter.",
  "category": "Comparisons",
  "author": "Nathan Keeble",
  "date": "2026-07-05",
  "readMinutes": 5,
  "featuredImage": "/images/blog/card-reader-vs-card-machine.webp",
  "featuredAlt": "Close-up of a compact contactless card reader",
  "intro": "Card reader vs card machine sounds like a distinction invented to confuse you, and honestly - it half is. They both take card payments at the same rates. The real differences are size, independence and price: one needs your phone, one doesn't. Here's the plain-English split and which one your business actually needs.",
  "sections": [
    {
      "heading": "The two products behind the four names",
      "paragraphs": [
        "A card reader is the small, pocketable device (SumUp Air, Square Reader, Zettle Reader) that pairs with the app on your phone or tablet. The phone provides the screen, the internet and the receipt; the reader just handles the card. Typically £19-£40 one-off.",
        "A card machine (also called a card terminal or, if your rep is over 50, a PDQ) is the standalone unit with its own screen, SIM/WiFi connection and often a receipt printer - SumUp Solo, Square Terminal, Dojo Go, the classic pub Ingenico. It works without a phone. Typically £99-£300 to buy, or rented into a contract."
      ]
    },
    {
      "heading": "What actually differs day to day",
      "paragraphs": [
        "Same fees, same taps, same banks - the differences are practical:"
      ],
      "bullets": [
        "Independence: a machine works if your phone dies, gets left in the van, or is busy taking a booking. A reader is hostage to the phone it's paired with.",
        "Speed at a busy counter: a machine is one-device muscle memory. Reader-plus-phone means two things to charge, hold and not drop into a sink.",
        "Receipts: machines often print; readers email or text. Trades and cafes rarely miss paper, restaurants and older customers sometimes do.",
        "Price: £19 vs £150+ buys a lot of flat whites. If cash flow is tight, the reader wins and can be upgraded later - most providers let you keep the same account.",
        "Battery and signal: machines with their own SIM keep working when the venue WiFi is rubbish - worth real money at markets and festivals."
      ]
    },
    {
      "heading": "Which one for which business",
      "paragraphs": [
        "Get a reader if you're mobile, low-volume or starting out: market stalls, mobile hairdressers, tradespeople invoicing at the door, weekend sellers. The £19 [no-monthly-fee readers](/card-readers-no-monthly-fee) are genuinely all most one-person businesses need - and [Tap to Pay on your phone](/blog/tap-to-pay-iphone-worth-it) can even replace the reader itself for the lightest use.",
        "Get a machine if you run a fixed, busy counter: cafes at rush hour, pubs, shops with staff. The £150 one-off disappears against the time saved not faffing with Bluetooth pairing mid-queue. And if you're taking serious volume, the machine decision usually arrives bundled with the [POS system question](/blog/what-is-an-epos-system) anyway."
      ]
    },
    {
      "heading": "The catch to watch: 'free' machines on contracts",
      "paragraphs": [
        "The £0-upfront card machine usually comes attached to a 12-48 month contract with monthly fees - by month 18 you've paid for that 'free' terminal several times over. It can still be worth it when it comes with genuinely lower rates at high volume, but do the full-term maths before signing. Our piece on [no-contract card machines](/blog/no-contract-card-machines-catch) covers the trade-off properly.",
        "Rule of thumb: buy hardware outright when you can, and make monthly fees earn their keep through lower percentage rates - which you can check against your own numbers in the [fee calculator](/card-machine-fee-calculator)."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are the transaction fees different between readers and machines?",
      "a": "Usually no - SumUp, Square and Zettle charge the same rate whichever device you use. Contracted machines from acquirers can come with negotiated (often lower) rates, but that's the contract, not the hardware."
    },
    {
      "q": "What does PDQ stand for?",
      "a": "'Process Data Quickly' - 1990s banking jargon for a card terminal. If a salesperson says PDQ, they mean a standalone card machine, usually the contracted kind."
    },
    {
      "q": "Can I start with a reader and upgrade to a machine later?",
      "a": "Yes, and it's the sensible path - SumUp, Square and Zettle all let you add or swap hardware on the same account, so your reporting and payouts don't change."
    },
    {
      "q": "Do card readers work without internet?",
      "a": "They need the paired phone's data or WiFi. Standalone machines with a SIM are the answer for bad-signal venues - some also queue offline payments, but check the provider's rules on offline limits and liability first."
    }
  ],
  "relatedPosts": [
    "card-machine-for-sole-traders",
    "how-much-does-a-card-machine-cost-uk",
    "no-contract-card-machines-catch"
  ],
  "relatedLinks": [
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    },
    {
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
{
  "slug": "card-machine-for-sole-traders",
  "title": "The Best Card Machine for Sole Traders (UK 2026)",
  "excerpt": "Sole traders don't need contracts, monthly fees or a business bank account to take cards. The setups that fit one-person businesses, and the traps to skip.",
  "category": "By business",
  "author": "Nathan Keeble",
  "date": "2026-07-06",
  "readMinutes": 6,
  "featuredImage": "/images/blog/card-machine-for-sole-traders.webp",
  "featuredAlt": "Sole trader smiling at her market stall counter",
  "intro": "The best card machine for a sole trader is almost always the cheapest one with no strings: a £19-£40 reader, no monthly fee, no contract, paying a flat rate only when you actually sell. One-person businesses are exactly who the no-monthly-fee providers were built for - here's the setup that fits, and the sales pitches to walk past.",
  "sections": [
    {
      "heading": "What sole traders actually need (and don't)",
      "paragraphs": [
        "Your needs are gloriously simple: take the payment, see the money quickly, keep records tidy for the tax return. You do not need stock modules, staff logins, table maps or a 'merchant services relationship' - you need a reader that works and a fee you understand."
      ],
      "bullets": [
        "No monthly fee: pay per transaction only. A quiet January costs you nothing.",
        "No contract: if the provider annoys you, leave. This keeps everyone honest.",
        "Flat, published rate: 1.69%-1.75% you can see on a pricing page beats a 'custom quote' you can't.",
        "Fast payouts: next-day as standard; same-day options exist if cash flow is tight.",
        "Works where you work: van, doorstep, stall, kitchen table - phone pairing or built-in SIM."
      ]
    },
    {
      "heading": "The three to shortlist",
      "paragraphs": [
        "For most sole traders the honest shortlist is three names, and you'd be fine with any of them:"
      ],
      "bullets": [
        "[SumUp](/reviews/sumup) - cheapest entry (£19 reader, 1.69%), dead-simple app, the default for market traders and mobile hairdressers. Payments Plus drops the rate further if you're doing volume.",
        "[Square](/reviews/square) - same idea (£19, 1.75%) with the strongest free extras: invoicing, a free online store, appointments. Best if you invoice or want to sell online too.",
        "[PayPal Zettle](/reviews/zettle) - £29 reader, 1.75%, takings land in your PayPal balance. The pick if your business already lives on PayPal."
      ]
    },
    {
      "heading": "Do you need a business bank account?",
      "paragraphs": [
        "Legally, no - sole traders can trade through a personal account (limited companies can't). Practically, most card providers' terms want an account in the name you trade under, and a separate account makes your Self Assessment dramatically less painful. The free business accounts (Starling, Monzo, Tide) take minutes to open and keep card takings cleanly separated from your groceries.",
        "One habit worth building from day one: let the card takings tell the story. Every payment through the reader is a dated, amounted record HMRC can follow - which is exactly what you want when the tax return lands, and it pairs neatly with [how to take card payments as a small business](/blog/how-to-take-card-payments-uk)."
      ]
    },
    {
      "heading": "The traps aimed at sole traders",
      "paragraphs": [
        "You're the target market for two bad deals. First, the contracted terminal: a rep offers a 'free' machine and lower headline rate, attached to an 18-month term with monthly fees, PCI charges and an exit clause - at sole-trader volumes the maths almost never works; [here's the catch explained](/blog/no-contract-card-machines-catch). Second, the POS upsell: you don't need £30/month of till software to sell at a stall.",
        "Run your real numbers - even £800 of card sales a month costs about £14 in fees at 1.69% - through the [fee calculator](/card-machine-fee-calculator) before believing any pitch. And if your volume genuinely grows to the point where quotes beat flat rates, congratulations: that's a nice problem, and the switch takes an afternoon."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I take card payments as a sole trader without registering a company?",
      "a": "Yes - SumUp, Square and Zettle all onboard sole traders with your name, address and basic ID. No limited company needed, and setup is same-day."
    },
    {
      "q": "What's the cheapest way for a sole trader to take cards?",
      "a": "Tap to Pay on the phone you already own (no hardware at all), or a £19 SumUp/Square reader with no monthly fee. Beyond that, cheapest depends on volume - run your numbers through the calculator."
    },
    {
      "q": "Do I have to declare card takings to HMRC?",
      "a": "Yes - card takings are income like any other, and providers report to HMRC under UK rules for payment platforms. The upside: your reader's records basically write that part of your tax return for you."
    },
    {
      "q": "What if I only sell occasionally - weekends and fairs?",
      "a": "No-monthly-fee is built for exactly this: zero sales, zero cost. Keep the reader charged in a drawer and it costs nothing until the next fair."
    }
  ],
  "relatedPosts": [
    "card-reader-vs-card-machine",
    "best-card-readers-market-traders",
    "cheapest-way-to-take-card-payments"
  ],
  "relatedLinks": [
    {
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    },
    {
      "label": "SumUp review",
      "href": "/reviews/sumup"
    }
  ]
},
{
  "slug": "pci-compliance-fees-uk",
  "title": "PCI Compliance Fees Explained: The Sneaky Charge on Your Card Machine Bill",
  "excerpt": "PCI DSS fees add £30-£500 a year to many UK card machine bills - and the 'non-compliance' version is pure penalty. What PCI actually is, who charges for it, and how to stop paying.",
  "category": "Fees & saving",
  "author": "Nathan Keeble",
  "date": "2026-07-06",
  "readMinutes": 6,
  "featuredImage": "/images/blog/pci-compliance-fees-uk.webp",
  "featuredAlt": "Business owner checking a card statement at a laptop",
  "intro": "Somewhere on many UK card machine statements sits a line like 'PCI DSS compliance: £4.95' - and next to it, on the unlucky ones, 'PCI non-compliance: £30'. Most owners pay both for years without knowing what they are. Here's what PCI actually is, why some providers charge for it and some don't, and the ten-minute job that stops the penalty version dead.",
  "sections": [
    {
      "heading": "What PCI DSS actually is",
      "paragraphs": [
        "PCI DSS (Payment Card Industry Data Security Standard) is the card schemes' security rulebook - Visa and Mastercard's requirements for anyone who handles card payments, covering things like not writing card numbers down and keeping terminals physically secure. Every business taking cards has to comply with it. That part is not optional and not a scam.",
        "For a typical small shop using a modern terminal, 'complying' mostly means answering an annual self-assessment questionnaire (SAQ) honestly - your terminal does the heavy cryptographic lifting. The standard is real; what varies wildly is whether you're charged for the paperwork."
      ]
    },
    {
      "heading": "The two fees hiding on your statement",
      "paragraphs": [
        "Traditional acquirers (the contracted-terminal world: Worldpay, Barclaycard, takepayments and friends) typically charge two distinct things:"
      ],
      "bullets": [
        "PCI compliance fee: £2.50-£6 a month just for administering the programme - the portal, the questionnaire, sometimes scanning tools. £30-£70 a year for a form.",
        "PCI NON-compliance fee: £15-£40+ a month charged when you haven't completed that questionnaire. This is the expensive one - it's a penalty dressed as a service, and plenty of businesses pay it for years simply because nobody told them the form existed.",
        "Modern flat-rate providers (SumUp, Square, Zettle, Dojo) roll PCI into the headline rate: no separate fee, no questionnaire chasing, nothing to forget. It's one of the quiet reasons their pricing is easier to trust."
      ]
    },
    {
      "heading": "The ten-minute fix if you're being charged",
      "paragraphs": [
        "First, read your last statement and find both lines - many owners discover the non-compliance fee only when they go looking. If it's there, log into your provider's PCI portal (the name is on the statement - commonly Sysnet/VikingCloud or similar), complete the SAQ, and the penalty fee stops from the next cycle. It genuinely takes about ten minutes for a standard terminal setup.",
        "Then diarise it annually - the questionnaire expires every 12 months and the fee quietly returns when it does. If your provider charges a compliance fee AND makes the portal miserable, add it to the evidence pile for switching: our [switching checklist](/blog/switching-card-machine-checklist) covers exit timing, and the [fee calculator](/card-machine-fee-calculator) will tell you whether a flat-rate provider beats your all-in cost once PCI, terminal rental and minimum monthly service charges are counted."
      ]
    },
    {
      "heading": "Can you avoid PCI fees entirely?",
      "paragraphs": [
        "Yes - by using a provider that absorbs them. None of the major no-monthly-fee providers charge separate PCI fees, which changes the comparison maths more than people realise: a 'cheap' 1.2% contracted rate plus £5 PCI plus £15 terminal rental can cost a low-volume business more than a flat 1.69% with nothing else on the bill. This is exactly the [hidden-fees pattern](/guides/card-machine-fees-explained) that makes headline rates so misleading.",
        "To be clear: you can't avoid PCI compliance - handling cards safely is the deal. You can absolutely avoid paying £200 a year in fees and penalties for it. If your statement says otherwise, that's a provider choice, not an industry requirement."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is a PCI compliance fee a scam?",
      "a": "It's legal and disclosed in contracts - but it's a fee for administering a form, and plenty of providers manage without charging it. The non-compliance penalty version is the one to attack immediately: complete the SAQ and it stops."
    },
    {
      "q": "Do SumUp, Square and Zettle charge PCI fees?",
      "a": "No separate PCI fees - compliance is handled within their flat rate. It's one of the genuine advantages of the no-monthly-fee providers for small businesses."
    },
    {
      "q": "What happens if I just ignore PCI completely?",
      "a": "You'll pay non-compliance fees indefinitely, and if card data is ever compromised your liability is far worse without compliance in place. Ten minutes on the questionnaire is the cheap side of that trade in every scenario."
    },
    {
      "q": "How do I know if I'm paying PCI fees now?",
      "a": "Check a recent monthly statement for lines containing 'PCI', 'DSS', 'compliance' or 'data security'. Contracted terminals: probably yes. Flat-rate readers: no. If you can't tell, that itself is a statement about your provider's transparency."
    }
  ],
  "relatedPosts": [
    "how-to-cut-card-processing-fees",
    "can-you-charge-for-card-payments",
    "switching-card-machine-checklist"
  ],
  "relatedLinks": [
    {
      "label": "Card machine fees explained",
      "href": "/guides/card-machine-fees-explained"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    },
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    }
  ]
},
{
  "slug": "card-tips-uk-law",
  "title": "Card Tips and the UK Tipping Law: What Your Business Must Do",
  "excerpt": "Since October 2024, 100% of tips must reach your staff - and you can't deduct card fees from them. What the Employment (Allocation of Tips) Act means for your till setup.",
  "category": "How-to",
  "author": "Nathan Keeble",
  "date": "2026-07-07",
  "readMinutes": 6,
  "featuredImage": "/images/blog/card-tips-uk-law.webp",
  "featuredAlt": "Waitress serving a customer at a restaurant table",
  "intro": "Since 1 October 2024, the Employment (Allocation of Tips) Act has made one thing unambiguous: 100% of tips belong to your staff, however they're paid. And here's the bit that catches card-heavy businesses out - you cannot deduct the card processing fee from a card tip. If your POS prompts for tips (and it should), here's what the law requires and how to set it up properly.",
  "sections": [
    {
      "heading": "What the law actually says",
      "paragraphs": [
        "The Employment (Allocation of Tips) Act 2023 came into force on 1 October 2024 across England, Scotland and Wales. It covers tips, gratuities and service charges - cash and card alike - wherever the employer controls them."
      ],
      "bullets": [
        "100% to workers: every penny of tips must be passed on, with no deductions. Card fees, admin costs, breakage charges - none of it can come out of the tip.",
        "Fair allocation: tips must be shared fairly and transparently, following the statutory Code of Practice. 'The manager keeps the card tips' is now a legal problem, not just a morale one.",
        "Paid promptly: tips must reach workers by the end of the month following the month they were received.",
        "Written policy + records: if your business takes tips more than occasionally, you need a written tips policy staff can see, and three years of records of how tips were allocated. Workers have the right to request those records.",
        "Agency staff count too: agency workers get the same treatment as employees."
      ]
    },
    {
      "heading": "The card-fee trap",
      "paragraphs": [
        "Before the Act, some businesses knocked the ~1.7% processing fee off card tips - a £10 tip arrived as £9.83. That's now explicitly not allowed: the worker must receive the full £10, and the business absorbs the card fee as a cost of trading.",
        "It's a small number per tip and a real number per year, so account for it: a venue processing £2,000 of card tips a month eats roughly £34/month in fees on tips alone at a flat 1.69% rate. If that stings, the answer is [negotiating your overall card rate](/blog/how-to-cut-card-processing-fees) - not clipping tips, which now carries employment-tribunal risk."
      ]
    },
    {
      "heading": "Setting up tipping on your POS properly",
      "paragraphs": [
        "Card tips only work if the till asks. The mainstream systems - Square, SumUp, Zettle, Dojo and the restaurant platforms - all support tip prompts on the payment screen, and pay-at-table devices lift tips measurably because the prompt appears at the natural moment.",
        "Configuration that works in practice: percentage options (10%/12.5%/15%) rather than fixed amounts for table service, a custom-amount option, and 'no tip' visible without shame-scrolling. Make sure tips are recorded separately from sales in your reports - you need that split for the allocation records the law requires, and your accountant needs it because tips aren't your revenue."
      ]
    },
    {
      "heading": "Distributing fairly: the tronc question",
      "paragraphs": [
        "For pubs, restaurants and salons with teams, a tronc - an arrangement where an independent 'troncmaster' allocates tips by agreed rules - remains the cleanest way to comply. Run properly, a tronc also keeps tips free of employer and employee National Insurance (income tax still applies via PAYE), which means more of the tip lands in pockets.",
        "Smaller teams don't need the formality, but they do need the written policy: who shares (kitchen included?), in what proportions, and when it's paid. Write it down, share it, keep the records. If you're choosing a till for a tips-heavy business, our [pub POS guide](/blog/best-pos-system-for-pubs-uk) and [salon POS guide](/blog/pos-system-for-salons-uk) cover the systems that handle tip reporting well."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I deduct card processing fees from card tips?",
      "a": "No. Since 1 October 2024 tips must be passed to workers in full - the business absorbs the card fee. Deducting it risks an employment tribunal claim, and tribunals can order compensation."
    },
    {
      "q": "Does the tipping law cover service charges?",
      "a": "Yes - discretionary and mandatory service charges controlled by the employer are treated like tips: 100% to workers, allocated fairly. If you add a 12.5% service charge, it belongs to the team."
    },
    {
      "q": "Do card tips get taxed?",
      "a": "Tips are taxable income for the worker. Paid through payroll they go through PAYE; through a properly run independent tronc, income tax applies but National Insurance generally doesn't - which is why bigger venues use one. Take payroll advice on your specific setup."
    },
    {
      "q": "Do I need a written tips policy?",
      "a": "If your business receives tips more than occasionally, yes - a written policy available to all staff, plus records of how every tip was allocated, kept for three years. A one-page policy covers most small venues."
    }
  ],
  "relatedPosts": [
    "best-pos-system-for-pubs-uk",
    "pos-system-for-salons-uk",
    "how-to-cut-card-processing-fees"
  ],
  "relatedLinks": [
    {
      "label": "POS systems for pubs & bars",
      "href": "/pos-systems/pubs-bars"
    },
    {
      "label": "POS systems for restaurants",
      "href": "/pos-systems/restaurants"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
{
  "slug": "chargebacks-uk-small-business",
  "title": "Chargebacks: What UK Small Businesses Actually Need to Know",
  "excerpt": "A chargeback claws the money back out of your account first and asks questions later. How the process works, what it costs, and the habits that stop most of them.",
  "category": "How-to",
  "author": "Nathan Keeble",
  "date": "2026-07-07",
  "readMinutes": 6,
  "featuredImage": "/images/blog/chargebacks-uk-small-business.webp",
  "featuredAlt": "Business owner checking a card payment dispute on his phone",
  "intro": "A chargeback is a card payment pulled back out of your account by the customer's bank - money you thought was yours, gone while the dispute is decided. For most small businesses they're rare, which is exactly why the first one is so disorienting. Here's how the process actually works in the UK, what it costs, and the unglamorous habits that prevent most of them.",
  "sections": [
    {
      "heading": "What a chargeback is (and isn't)",
      "paragraphs": [
        "A chargeback is the card schemes' dispute process: the customer goes to their bank claiming a transaction was fraudulent, wrong, or not what they paid for; the bank reverses the payment while the claim is examined; your provider passes the debit - and usually an admin fee - to you. You then get a window to submit evidence ('representment') if you want to fight it.",
        "It is not the same as a refund (which you control), and it's not Section 75 (a separate legal claim against credit card issuers for purchases over £100). Customers typically have up to 120 days from the transaction - or from when they expected delivery - to dispute, so a chargeback can land months after you banked the money."
      ]
    },
    {
      "heading": "What it costs you",
      "paragraphs": [
        "Three costs stack up, and only the first one is obvious:"
      ],
      "bullets": [
        "The transaction amount - clawed back immediately, before any decision. If you lose, it's gone; win, and it's returned.",
        "The admin fee - traditional acquirers commonly charge £15-£45 per chargeback, win or lose. Some flat-rate providers are kinder (Square, notably, doesn't charge chargeback fees) - check your provider's rate card before you need to.",
        "The pattern penalty - the one that really matters. A high chargeback ratio (roughly above 1% of transactions) gets you flagged by the schemes, and providers respond with held funds, higher rates or closed accounts. One chargeback is a Tuesday; a pattern is a threat to your ability to take cards."
      ]
    },
    {
      "heading": "How to win the ones you fight",
      "paragraphs": [
        "For in-person payments you hold the strongest card there is: chip-and-PIN and contactless transactions shift fraud liability to the bank in most cases, so 'I didn't make this payment' disputes on tapped transactions rarely stick. Respond to the evidence request with the receipt data from your POS and let the process work.",
        "For online, phone and invoice payments the burden is on you, so the evidence is the business model: proof of delivery with signature, the customer's order confirmation, your refund policy as shown at checkout, and any correspondence. Submit inside the deadline - a strong case filed late is a lost case. And pick your battles: fighting a £12 dispute costs more attention than it returns; fighting a £600 one with delivery proof is usually worth the twenty minutes."
      ]
    },
    {
      "heading": "The habits that prevent most chargebacks",
      "paragraphs": [
        "Most disputes aren't fraud - they're confusion or frustration taking the path of least resistance. Which means they're preventable:"
      ],
      "bullets": [
        "Fix your billing descriptor: if your card statements say your Ltd company name instead of your trading name, customers genuinely don't recognise the charge. This single fix prevents a surprising share of disputes.",
        "Make refunds easy and fast: a customer who can get a refund from you in one message has no reason to call their bank. Being difficult about refunds is how you convert £20 refunds into £45 chargeback fees.",
        "Issue receipts every time - digital or paper. The receipt is both the customer's memory and your evidence.",
        "For deliveries: tracked shipping on anything you'd mind losing, and keep the proof for six months.",
        "Answer your phone and emails. 'Couldn't reach the merchant' appears in dispute reasons constantly."
      ]
    }
  ],
  "faqs": [
    {
      "q": "How long does a customer have to raise a chargeback?",
      "a": "Typically up to 120 days under scheme rules - from the transaction date, or from when goods/services were expected. In practice most land within a few weeks; budget mentally for the stragglers."
    },
    {
      "q": "Can I refuse a refund and just fight the chargeback instead?",
      "a": "You can, and you'll usually regret it - the chargeback costs you the amount, possibly an admin fee, and a mark on your ratio, even when you win. A refund you control is nearly always cheaper than a dispute you don't."
    },
    {
      "q": "Do chargebacks apply to contactless and chip-and-PIN payments?",
      "a": "They can be raised, but fraud-based disputes on chip/PIN and contactless usually fail because liability sits with the bank once the card was verified in person. Card-present businesses see far fewer successful chargebacks than online sellers."
    },
    {
      "q": "What's an acceptable chargeback rate?",
      "a": "As close to zero as possible; the schemes start caring around 1% of transactions. A typical small shop sees a handful a year at most - if you're seeing several a month, treat it as a process problem, not bad luck."
    }
  ],
  "relatedPosts": [
    "can-you-charge-for-card-payments",
    "pci-compliance-fees-uk",
    "same-day-payouts-providers"
  ],
  "relatedLinks": [
    {
      "label": "Card machine fees explained",
      "href": "/guides/card-machine-fees-explained"
    },
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
{
  "slug": "are-card-machine-fees-tax-deductible",
  "title": "Are Card Machine Fees Tax Deductible in the UK? (Yes - Here's How)",
  "excerpt": "Card processing fees are an allowable business expense - but the VAT picture surprises people. What you can deduct, what you can reclaim, and the records HMRC wants.",
  "category": "Fees & saving",
  "author": "Nathan Keeble",
  "date": "2026-07-07",
  "readMinutes": 5,
  "featuredImage": "/images/blog/are-card-machine-fees-tax-deductible.webp",
  "featuredAlt": "Tax paperwork, receipts and a calculator on a desk",
  "intro": "Yes - card machine fees are tax deductible in the UK. Processing fees, monthly terminal charges and the reader itself are all allowable business expenses, which softens the sting of that 1.69% a little. The part that trips people up is VAT, where card fees behave differently from most business costs. Here's the plain-English picture (with the obvious caveat: your accountant knows your situation, we don't).",
  "sections": [
    {
      "heading": "What you can deduct against your profits",
      "paragraphs": [
        "Card costs pass HMRC's 'wholly and exclusively for business' test easily - taking payments is about as core to trading as it gets. That goes for sole traders on Self Assessment and limited companies alike."
      ],
      "bullets": [
        "Transaction fees: the 1.4%-1.75% skimmed off every sale. Your provider's monthly statement is the record.",
        "Monthly charges: terminal rental, POS software subscriptions, minimum service charges, PCI fees (though read our [PCI piece](/blog/pci-compliance-fees-uk) before accepting you should be paying those).",
        "Hardware: the £19 reader is a straightforward expense; bigger till setups are typically claimed via capital allowances - in practice the Annual Investment Allowance usually gives full relief in year one anyway.",
        "Related costs: receipt paper, spare chargers, even the chargeback admin fees nobody enjoys."
      ]
    },
    {
      "heading": "The VAT quirk that surprises everyone",
      "paragraphs": [
        "Here's the one worth knowing before your first VAT return: card processing fees are generally exempt from VAT, because payment processing is a financial service. Your SumUp or Worldpay statement doesn't have VAT hiding in it - which means there's no input VAT to reclaim on the fees, even if you're VAT-registered. People go hunting for a VAT receipt for their card fees; there isn't one, and that's normal.",
        "Hardware and software are different: the card reader, the till, and POS software subscriptions are standard-rated, so VAT-registered businesses can reclaim the VAT on those in the usual way. Keep the invoices - the reader's VAT invoice from the provider, not just the payment confirmation."
      ]
    },
    {
      "heading": "The records that make this painless",
      "paragraphs": [
        "Your card provider is quietly generating most of your evidence: monthly statements itemise fees to the penny, and every transaction is dated and logged. Download the statements monthly (don't rely on the provider keeping years of history in your dashboard), and make sure your bookkeeping records gross sales and fees separately - sales of £5,000 with £85 of fees, not net takings of £4,915. That split matters for both accuracy and VAT.",
        "If you're doing your own books, the accounting integrations on modern POS systems push this automatically - one of the genuine arguments for [proper EPOS](/blog/what-is-an-epos-system) once you're VAT-registered and inside Making Tax Digital. And if your fees feel big enough to notice at tax time, that's your cue to check you're not overpaying in the first place: two minutes in the [fee calculator](/card-machine-fee-calculator) tells you."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I claim card fees if I'm a sole trader using the trading allowance?",
      "a": "Not both - the £1,000 trading allowance replaces claiming actual expenses. Once your costs (card fees included) exceed £1,000, claiming actual expenses is usually better. Compare both ways or ask your accountant."
    },
    {
      "q": "Is there VAT on SumUp, Square or Zettle fees?",
      "a": "Transaction processing fees are generally VAT-exempt financial services - no VAT charged, nothing to reclaim. Hardware and paid software subscriptions do carry VAT, which VAT-registered businesses can reclaim with a proper invoice."
    },
    {
      "q": "Can I put my card reader through the business if I also use the account for personal sales?",
      "a": "The business proportion, yes. But mixing business and personal through one card account creates exactly the muddle HMRC dislikes - a separate account for the business costs nothing and makes every claim cleaner."
    },
    {
      "q": "Do I need to keep card machine statements for HMRC?",
      "a": "Yes - normally at least 5 years after the 31 January deadline for sole traders, 6 years for companies. Download monthly PDFs rather than trusting the provider's portal to hold history forever."
    }
  ],
  "relatedPosts": [
    "pci-compliance-fees-uk",
    "how-to-cut-card-processing-fees",
    "card-machine-for-sole-traders"
  ],
  "relatedLinks": [
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    },
    {
      "label": "Card machine fees explained",
      "href": "/guides/card-machine-fees-explained"
    },
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    }
  ]
},
{
  "slug": "free-pos-software-uk",
  "title": "Free POS Software: What You Actually Get (UK 2026)",
  "excerpt": "Square, SumUp and Zettle all give away genuinely capable till software. What free really includes, where the paid tiers start, and who never needs to upgrade.",
  "category": "Comparisons",
  "author": "Nathan Keeble",
  "date": "2026-07-07",
  "readMinutes": 6,
  "featuredImage": "/images/blog/free-pos-software-uk.webp",
  "featuredAlt": "Cashier using a point of sale system at a cafe counter",
  "intro": "Free POS software in the UK is genuinely free and genuinely good - Square, SumUp and Zettle all give away till software that would have cost £50 a month a decade ago. The catch isn't hidden; it's structural: they make their money on the 1.69%-1.75% per transaction, so the software is the shop window. Here's exactly what free gets you, where the paywalls sit, and who genuinely never needs to pay.",
  "sections": [
    {
      "heading": "What the free tiers actually include",
      "paragraphs": [
        "All three of the big free systems cover the fundamentals properly - this isn't crippleware:"
      ],
      "bullets": [
        "[Square](/reviews/square) POS: the most complete free till in the UK - unlimited products, basic inventory with low-stock alerts, digital receipts, refunds, reporting, plus a free online store and invoicing. Free versions of its Restaurants, Retail and Appointments apps too.",
        "[SumUp](/reviews/sumup) POS app: product catalogue, variations, receipts, sales reports and VAT rates - everything a stall, cafe or salon chair needs on a phone or tablet.",
        "[Zettle](/reviews/zettle) POS: solid product library, stock tracking, staff via PayPal integration, decent reporting. The natural pick if your money already lives in PayPal.",
        "The honourable mention: [Shopify POS](/reviews/shopify-pos) Lite comes bundled with any Shopify subscription - not standalone-free, but effectively free for existing Shopify merchants selling in person."
      ]
    },
    {
      "heading": "Where the paywalls actually sit",
      "paragraphs": [
        "The upgrade lines are consistent across providers, and they're drawn where businesses stop being simple:"
      ],
      "bullets": [
        "Advanced inventory: multi-location stock, purchase orders, supplier management - paid (Square for Retail Plus, and the point where many shops jump to Epos Now or Lightspeed).",
        "Staff controls: individual logins, permissions and timecards beyond the basics - paid tiers, typically per-till or per-location pricing.",
        "Hospitality depth: coursing, kitchen displays, floor plans and menu engineering - free tiers take orders; paid tiers run a kitchen (Square for Restaurants Plus, or the dedicated platforms like Toast).",
        "Serious reporting: comparative periods, category margins, API access - paid everywhere."
      ]
    },
    {
      "heading": "Who never needs to upgrade (and who's kidding themselves)",
      "paragraphs": [
        "Never need to pay: market traders, mobile hairdressers, tradespeople, coffee vans, small cafes with simple menus, and anyone whose till mostly rings sales and takes payments. The free tiers were built for you, and the providers earn plenty from your transaction fees. Pair one with a [£19 reader](/card-readers-no-monthly-fee) and stop reading pricing pages.",
        "Kidding themselves: shops that count stock weekly by hand while refusing a £30/month plan that would automate it, and food-led venues running a kitchen off a free order-taking app. The test isn't turnover, it's friction - the moment you build a spreadsheet to compensate for the free tier, the paid tier has become the cheaper option. Our [POS cost breakdown](/blog/how-much-does-a-pos-system-cost-uk) prices the upgrade paths honestly."
      ]
    },
    {
      "heading": "The 'free' that isn't: trials and bundled hardware",
      "paragraphs": [
        "Be careful with two lookalikes. 'Free trial' EPOS (Epos Now, Lightspeed and friends) is paid software with a fortnight's grace - fine products, but you're choosing a subscription, so evaluate them as one. And 'free terminal included' offers from contracted providers bake the hardware into a 12-48 month agreement - the terminal is free the way a phone is free on a £60/month contract.",
        "Genuinely free means: download the app today, pay only when you sell. If a rep needs your phone number before you can see the price, it isn't this category. When you're weighing free against paid for your specific setup, the [comparison table](/compare-pos-systems) shows every system's real all-in costs side by side."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What's the best free POS software in the UK?",
      "a": "Square, for most businesses - its free tier is the deepest (inventory, online store, invoicing, industry-specific apps). SumUp wins on simplicity and reader price; Zettle if you're PayPal-centric. All three are legitimate, not trials."
    },
    {
      "q": "How do free POS providers make money?",
      "a": "Transaction fees - typically 1.69%-1.75% per card payment - plus paid software tiers and hardware. The model is honest: free software brings you in, your card volume pays for it."
    },
    {
      "q": "Can I use free POS software without their card reader?",
      "a": "Mostly the software and payments come as a pair - that's the deal that makes it free. You can usually record cash sales regardless, but card payments route through the provider's own processing."
    },
    {
      "q": "Is free POS software good enough for a shop with staff?",
      "a": "For two or three trusted staff and a simple range, often yes. Once you need individual logins, permissions and multi-location stock, you're in paid-tier territory - roughly £25-£70 a month depending on the system."
    }
  ],
  "relatedPosts": [
    "what-is-an-epos-system",
    "how-much-does-a-pos-system-cost-uk",
    "epos-vs-traditional-till"
  ],
  "relatedLinks": [
    {
      "label": "Compare POS systems",
      "href": "/compare-pos-systems"
    },
    {
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Square review",
      "href": "/reviews/square"
    }
  ]
},
{
  "slug": "epos-systems-sheffield",
  "title": "EPOS & POS Systems in Sheffield: A Local's Guide (2026)",
  "excerpt": "The POS is based in Sheffield, so this one's personal: what Steel City businesses actually need from an EPOS system, and why buying local rarely beats buying right.",
  "category": "Comparisons",
  "author": "Nathan Keeble",
  "date": "2026-07-08",
  "readMinutes": 6,
  "featuredImage": "/images/blog/epos-systems-sheffield.webp",
  "featuredAlt": "Independent shops along a UK high street",
  "intro": "Looking for an EPOS system in Sheffield? Declaration of interest: The POS is a Sheffield business - we're registered on Ecclesall Road South - so this guide is written from inside the city, not from a London content farm. The short version: the best EPOS for a Sheffield business is almost never a 'Sheffield EPOS supplier'; it's the right national system set up well for how you trade, from Kelham Island to Crystal Peaks.",
  "sections": [
    {
      "heading": "The Sheffield EPOS market, honestly",
      "paragraphs": [
        "Search 'EPOS Sheffield' and you'll find a mix of local resellers, national dealers with a Sheffield landing page, and the big self-serve systems. The resellers sell hardware bundles with support contracts; the dealers sell whatever earns the best margin that quarter; and the self-serve systems (Square, SumUp, Zettle, Epos Now) sell direct with published pricing.",
        "Our honest take as locals: the self-serve route wins for most of the city's independents. Modern EPOS is installed by unboxing it - there's no engineer visit to justify a reseller markup, support is remote for everyone anyway, and published pricing beats a quote you can't compare. The exceptions are complex hospitality fits-outs and multi-site operations, where a specialist installer earns their fee."
      ]
    },
    {
      "heading": "What Sheffield businesses actually run",
      "paragraphs": [
        "Walk the independent quarters and you'll see the same handful of systems on counters. Around Division Street, Abbeydale Road and Sharrow Vale it's overwhelmingly iPad-and-reader setups - [Square](/reviews/square) and [SumUp](/reviews/sumup) dominate cafes and indie retail. Kelham Island's food-and-drink operators skew to hospitality systems with kitchen screens, and the city's pubs split between iPad tills and contracted packages from [Dojo](/reviews/dojo) and the banks.",
        "That pattern isn't fashion - it's the fee maths working itself out. Low-to-mid volume independents do best on no-monthly-fee flat rates; the busy food-led venues justify subscriptions and negotiated card rates. Run your own numbers through our [fee calculator](/card-machine-fee-calculator) and you'll land in the right camp in two minutes."
      ]
    },
    {
      "heading": "Choosing by trade, Sheffield edition",
      "paragraphs": [
        "The right system depends on what you do, not what postcode you do it in - but here's the local shortcut by trade:"
      ],
      "bullets": [
        "Cafes and coffee shops (Ecclesall Road, Division Street, Abbeydale Road): iPad EPOS + fast reader - [our Sheffield cafe guide](/blog/pos-sheffield-cafes) covers it.",
        "Market and street traders (Moor Market, Sharrow Vale, Peddler): no-monthly-fee reader, offline-tolerant - [Sheffield market trader guide](/blog/card-machine-sheffield-market-traders).",
        "Salons and barbers (Ecclesall Road, West Street, Hillsborough): booking-integrated POS beats a bare till - [Sheffield salon guide](/blog/card-payments-sheffield-salons-barbers).",
        "Street food and events (Peddler Night Market, Tramlines, the food halls): battery, signal and speed decide everything - [street food guide](/blog/sheffield-street-food-card-payments).",
        "Restaurants and food-led pubs: hospitality-grade systems with kitchen screens - see our [restaurant hub](/pos-systems/restaurants) and [pub POS guide](/blog/best-pos-system-for-pubs-uk)."
      ]
    },
    {
      "heading": "Does 'local support' matter?",
      "paragraphs": [
        "It's the reseller pitch: 'we're Sheffield-based, we'll come out to you.' Worth something for a six-till venue with kitchen printers and a cellar full of cabling - genuinely. Worth very little for a cafe with an iPad and a reader, where every mainstream provider's support is a phone app and a replacement device in the post, and the 'local' support contract costs more per year than the hardware.",
        "The better local advantage is knowing how Sheffield trades: quiet Mondays, student-calendar swings, match days at Bramall Lane and Hillsborough, festival spikes in July. Pick a system with no monthly fee or a rolling contract and those rhythms cost you nothing in the slow weeks. That flexibility - not an engineer's van - is what actually protects a Sheffield independent."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Who supplies EPOS systems in Sheffield?",
      "a": "A mix of local resellers, national dealers and the self-serve systems (Square, SumUp, Zettle, Epos Now) that ship direct. For most independents the self-serve route is cheaper and just as capable - resellers earn their keep mainly on complex multi-till hospitality installs."
    },
    {
      "q": "What do Sheffield market traders use to take cards?",
      "a": "Mostly no-monthly-fee readers - SumUp and Square dominate. A £19-£40 reader with a flat rate suits stall volumes, and there's nothing to pay in quiet months."
    },
    {
      "q": "Is there an EPOS showroom in Sheffield I can visit?",
      "a": "Some resellers demo hardware, but honestly the fastest way to trial modern EPOS is a free app on an iPad today - Square, SumUp and Zettle all let you build your product list and mock-sell before spending anything."
    },
    {
      "q": "Are you actually based in Sheffield?",
      "a": "Yes - The POS is operated by Cracked Media Ltd, registered on Ecclesall Road South, Sheffield S11. We compare national providers because that's what wins for local businesses, but we're writing from inside the city."
    }
  ],
  "relatedPosts": [
    "card-machine-sheffield-market-traders",
    "pos-sheffield-cafes",
    "what-is-an-epos-system"
  ],
  "relatedLinks": [
    {
      "label": "Compare POS systems",
      "href": "/compare-pos-systems"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    },
    {
      "label": "Get matched in 60 seconds",
      "href": "/get-pos-quotes"
    }
  ]
},
{
  "slug": "card-machine-sheffield-market-traders",
  "title": "Card Machines for Sheffield Market Traders: Moor Market to Sharrow Vale",
  "excerpt": "What actually works on a Sheffield stall: readers that survive a full day, signal realities indoors at the Moor Market, and why no-monthly-fee is non-negotiable for traders.",
  "category": "By business",
  "author": "Nathan Keeble",
  "date": "2026-07-08",
  "readMinutes": 5,
  "featuredImage": "/images/blog/card-machine-sheffield-market-traders.webp",
  "featuredAlt": "Fresh fruit and vegetables on a market stall",
  "intro": "If you trade at the Moor Market, Sharrow Vale's street markets or any of Sheffield's pop-ups, the card machine question has a short answer: a no-monthly-fee reader, fully charged, with a backup plan for bad signal. Cash-only stalls in this city are leaving money on the table - here's the setup that works for Sheffield traders, from a comparison site based up the road.",
  "sections": [
    {
      "heading": "Why no-monthly-fee is the only sane choice for a stall",
      "paragraphs": [
        "Market trading is seasonal, weather-dependent and honest about it. A contracted terminal with a monthly fee charges you the same in a rained-off January as a heaving December - a no-monthly-fee reader charges you only when you sell. For typical stall volumes the maths isn't close: £1,500 of card sales a month costs about £25 in flat-rate fees and nothing else.",
        "The shortlist is the familiar one: [SumUp](/reviews/sumup) (£19 reader, 1.69%) is the market-trader default for a reason, [Square](/reviews/square) matches it with stronger free software, and [Zettle](/reviews/zettle) suits PayPal households. Any of the three will do a Sheffield stall proud - the full comparison is on our [no-monthly-fee page](/card-readers-no-monthly-fee)."
      ]
    },
    {
      "heading": "The indoor-market signal problem",
      "paragraphs": [
        "Phone-paired readers depend on your phone's data, and big indoor market halls - steel-framed buildings with thick walls - are exactly where data gets patchy. Traders at indoor markets everywhere know the mid-transaction spinner of doom.",
        "Three fixes, in order of cost: check whether the market's public or trader WiFi is usable and pair to that; try a different network (coverage varies wildly by operator inside big buildings - ask the stall next door what they're on); or spend on a standalone reader with its own SIM (SumUp Solo, from around £79) which picks the strongest network itself. If you're taking hundreds of pounds a day, the SIM reader pays for itself the first time the queue doesn't walk."
      ]
    },
    {
      "heading": "A Sheffield trader's practical kit list",
      "paragraphs": [
        "What the well-run stalls actually carry:"
      ],
      "bullets": [
        "The reader, charged the night before - and a power bank; a full market day outlasts most reader batteries when it's busy.",
        "A visible 'cards welcome' sign - it measurably lifts spend because browsers don't have to check their pockets first.",
        "The cash tin anyway: roughly one in five UK payments is still cash, and market crowds skew higher. Take both.",
        "A price point that survives fees: at 1.69%, a £3 item gives up 5p - price with that in mind rather than resenting it.",
        "Your reader's app reports at the end of each market - takings by day tells you which pitches earn their fee."
      ]
    },
    {
      "heading": "Weekend and seasonal traders: your costs are zero until you sell",
      "paragraphs": [
        "Sharrow Vale's markets, Christmas markets and one-off pitches suit occasional traders, and this is where no-monthly-fee genuinely shines: the reader sits in a drawer costing nothing between events. There's no minimum usage, no dormancy fee, nothing to cancel.",
        "If you're weighing up whether card acceptance is worth it at all for a few markets a year, our [sole trader guide](/blog/card-machine-for-sole-traders) runs the numbers - but the short answer is that a £19 one-off has usually repaid itself by the second market. Want a shortlist matched to how you trade? The [60-second quiz](/get-pos-quotes) does exactly that."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What card machine do traders at the Moor Market use?",
      "a": "Predominantly no-monthly-fee readers - SumUp and Square are everywhere on UK indoor markets. Traders in patchy-signal spots inside the hall tend to upgrade to SIM-equipped standalone readers."
    },
    {
      "q": "Do I need a different card machine for outdoor markets?",
      "a": "No - the same reader works. Outdoors your phone signal is usually better than inside a market hall; your real enemies are battery and rain. Power bank, zip-lock bag, done."
    },
    {
      "q": "What happens if the signal dies mid-payment?",
      "a": "The payment either fails cleanly (customer retries) or queues, depending on the provider's offline rules. Know your provider's policy before you rely on it, and check offline-payment liability - if it later declines, that's usually on you."
    },
    {
      "q": "Is it worth taking cards for a £2.50 average sale?",
      "a": "Yes - the fee on £2.50 at 1.69% is about 4p, and the sales you'd lose by being cash-only cost far more. Consider a modest minimum card spend if tiny transactions genuinely bother you; that's legal."
    }
  ],
  "relatedPosts": [
    "epos-systems-sheffield",
    "best-card-readers-market-traders",
    "card-machine-for-sole-traders"
  ],
  "relatedLinks": [
    {
      "label": "POS for market stalls",
      "href": "/pos-systems/market-stalls"
    },
    {
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
{
  "slug": "pos-sheffield-cafes",
  "title": "POS Systems for Sheffield Cafes: What the Indies Actually Run",
  "excerpt": "Sheffield's independent coffee scene runs on iPad tills and flat-rate readers. What to copy, what to skip, and the fee maths at real cafe volumes.",
  "category": "By business",
  "author": "Nathan Keeble",
  "date": "2026-07-08",
  "readMinutes": 5,
  "featuredImage": "/images/blog/pos-sheffield-cafes.webp",
  "featuredAlt": "Barista preparing coffee behind a cafe counter",
  "intro": "Sheffield's independent cafe scene - Division Street through Sharrow Vale to Abbeydale Road - has quietly standardised its tills: an iPad running free POS software, a flat-rate card reader, and not much else. That's not laziness; it's the right answer for most counters. Here's what the city's indies actually run, and when a cafe genuinely needs more.",
  "sections": [
    {
      "heading": "The standard Sheffield indie setup (and why it won)",
      "paragraphs": [
        "The typical setup: [Square](/reviews/square) or [SumUp](/reviews/sumup) on an iPad, a reader beside the machine, digital receipts, done. Software cost: £0. Card cost: 1.69%-1.75% flat. It won because cafes are high-frequency, low-ticket businesses where speed and simplicity beat features - and because nobody opening a cafe has spare capital for a £2,000 till.",
        "At typical volumes the flat rate is liveable: a cafe doing £8,000 a month on cards pays roughly £135-£140 in fees. When card volume grows well past £10k/month, negotiated rates start beating flat pricing - that's the point to get quotes and run them through the [fee calculator](/card-machine-fee-calculator), not before."
      ]
    },
    {
      "heading": "Where free stops being enough",
      "paragraphs": [
        "Three growth points push Sheffield cafes off the free tier, usually in this order:"
      ],
      "bullets": [
        "Staff you don't watch: individual logins and permissions live on paid plans (~£25-£40/month). Worth it the week you stop being behind the counter every shift.",
        "Food beyond toasties: proper kitchen tickets, modifiers and coursing want a hospitality plan - Square for Restaurants, or a dedicated system if the kitchen is the business.",
        "A second site: multi-location stock and reporting is paid-tier everywhere. (It's also the moment contracted card rates become negotiable - use the leverage.)"
      ]
    },
    {
      "heading": "Sheffield-specific realities",
      "paragraphs": [
        "Two local rhythms worth planning around. First, the student calendar: cafes near the universities and along Ecclesall Road live and die by term time, which is another argument for costs that flex with revenue - no-monthly-fee setups don't punish the summer trough. Second, match days and events: if you're anywhere near Bramall Lane, Hillsborough or a Tramlines route, your Saturday can double - make sure your reader isn't the bottleneck (a backup reader is £19 of insurance).",
        "And learn from the city's food halls: the vendors at Kommune and Cambridge Street Collective run lean, fast, card-first counters because throughput is everything. A cafe till should pass the same test - if ringing a flat white and a bake takes more than three taps, the setup is wrong. Our [cafe hub](/pos-systems/cafes) goes deeper on the full stack."
      ]
    },
    {
      "heading": "Our recommendation, plainly",
      "paragraphs": [
        "Opening or running a straightforward Sheffield cafe: Square on an iPad with a Square reader - the free tier's inventory, reporting and (free) online ordering cover an independent completely, and you can add the Restaurants app later without changing provider. If every pound of setup cost matters, SumUp gets you trading for £19.",
        "Already trading and suspicious of your costs? Check your effective rate against the [comparison table](/compare-card-machines) - cafes that signed a contracted terminal deal in a hurry are the businesses we most often see overpaying, and [switching](/blog/switching-card-machine-checklist) is less painful than the rep implied."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What POS do most Sheffield cafes use?",
      "a": "Independents overwhelmingly run Square or SumUp on iPads - the same pattern as indie cafes across the UK. Food-led spots and multi-site operators graduate to paid hospitality plans."
    },
    {
      "q": "How much should a cafe pay in card fees per month?",
      "a": "At a flat 1.69%-1.75%: roughly £85-£90 per £5,000 of card sales. If your statement says meaningfully more per pound of sales, something (PCI fees, terminal rental, minimum charges) is stacking on top - worth an audit."
    },
    {
      "q": "Do I need a till drawer if I'm mostly card?",
      "a": "Sheffield cafes still see real cash, especially from older regulars. A basic drawer paired to your iPad till covers it - going fully cashless is legal but costs you some customers."
    },
    {
      "q": "What about tips on card?",
      "a": "Turn tip prompts on - card tips are found money for staff. Remember 100% must reach the team with no card-fee deduction; our tipping-law guide covers the rules."
    }
  ],
  "relatedPosts": [
    "epos-systems-sheffield",
    "card-tips-uk-law",
    "cafe-overpaying-card-fees"
  ],
  "relatedLinks": [
    {
      "label": "POS for cafes",
      "href": "/pos-systems/cafes"
    },
    {
      "label": "Square review",
      "href": "/reviews/square"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
{
  "slug": "card-payments-sheffield-salons-barbers",
  "title": "Card Payments for Sheffield Salons & Barbers (Ecclesall Road to Hillsborough)",
  "excerpt": "Sheffield's salons and barbershops are booking-first businesses. The card machine is the easy bit - the diary, deposits and no-show protection are where the money is.",
  "category": "By business",
  "author": "Nathan Keeble",
  "date": "2026-07-08",
  "readMinutes": 5,
  "featuredImage": "/images/blog/card-payments-sheffield-salons-barbers.webp",
  "featuredAlt": "Client having a haircut in a barbershop chair",
  "intro": "From the salons of Ecclesall Road to the barbershops of Hillsborough and London Road, Sheffield's hair and beauty trade shares one economic truth: the chair only earns when someone's in it. That makes your payment setup a booking problem first and a card machine problem second - and it changes what you should buy.",
  "sections": [
    {
      "heading": "The no-show maths, Sheffield rates",
      "paragraphs": [
        "At Sheffield prices - call it £15-£25 barber cuts, £40-£80 salon services - three no-shows a week is £2,500-£8,000 a year of empty-chair time. That dwarfs anything you'll ever pay in card fees, which is why the right question isn't 'cheapest reader' but 'which system stops the no-shows'.",
        "The fix is boring and proven: online booking with automatic reminders, card-on-file deposits for longer appointments, and a cancellation policy the software enforces politely so you don't have to. Our [full salon POS guide](/blog/pos-system-for-salons-uk) covers the systems; the short version is Square Appointments for most shops, a dedicated booking platform for diary-heavy salons."
      ]
    },
    {
      "heading": "Barbershop vs salon: different right answers",
      "paragraphs": [
        "Sheffield's barbershops largely run walk-in-plus-app models: a [SumUp](/reviews/sumup) or [Square](/reviews/square) reader at the counter and a lightweight booking app covers a two-chair shop completely, for £19-£40 of hardware and no subscription. Contactless suits the price point - a £18 cut is one tap - and the queue keeps itself honest.",
        "Salons carry more complexity: colour appointments that need deposits, patch-test records, retail shelves, stylist columns and commission splits. That's [Square](/reviews/square) Appointments territory (free for one calendar, sensible with staff), or Fresha if the diary is the whole business. Either way the card processing rides along at the same flat rates as everyone else."
      ]
    },
    {
      "heading": "Chair renters: keep the money separate",
      "paragraphs": [
        "A lot of Sheffield salons run self-employed stylists renting chairs - and the payment setup should reflect the legal reality. Each renter taking payments on their own reader, under their own name, keeps everyone's turnover, tips and VAT position clean. Readers are £19; blurred finances at tax time cost considerably more.",
        "For the salon owner, that also simplifies the tipping-law position: tips paid directly to a self-employed stylist are theirs, no allocation policy needed. Where you employ staff, remember [card tips must reach them in full](/blog/card-tips-uk-law) - no card-fee deductions."
      ]
    },
    {
      "heading": "Setting up: the one-afternoon version",
      "paragraphs": [
        "For a new Sheffield barbershop or one-chair salon: order a Square or SumUp reader (next-day delivery), download the app, load your services as products, turn on tip prompts, and connect a booking app with SMS reminders. Total cost: the reader. Total setup: an afternoon between clients.",
        "For an established salon ready to graduate: pick the booking-integrated system first, migrate the client book carefully (export contacts, colour notes and histories), and only then worry about the card hardware - it's the interchangeable part. The [60-second quiz](/get-pos-quotes) will shortlist against your setup, or browse the [salon hub](/pos-systems/salons) for the deeper comparison."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What card machine do Sheffield barbers use?",
      "a": "Mostly SumUp and Square readers - no monthly fee, flat rates, ideal for £15-£25 transactions. The busier shops pair them with booking apps for the appointment side."
    },
    {
      "q": "Should a salon take deposits for appointments?",
      "a": "For anything over an hour, yes - card-captured deposits at booking are the single best no-show fix. Booking-integrated systems automate it so it never feels awkward."
    },
    {
      "q": "Can chair renters share one card machine?",
      "a": "They can, but shouldn't - separate readers keep each self-employed stylist's income, tips and tax cleanly apart. At £19 a reader there's no economic argument for sharing."
    },
    {
      "q": "Do card tips work for barbers?",
      "a": "Yes - turn on the tip prompt; contactless customers tip more than cash-only shops expect. If you employ staff, 100% of those tips must reach them with no deductions under the tipping law."
    }
  ],
  "relatedPosts": [
    "pos-system-for-salons-uk",
    "card-tips-uk-law",
    "epos-systems-sheffield"
  ],
  "relatedLinks": [
    {
      "label": "POS for salons",
      "href": "/pos-systems/salons"
    },
    {
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Get matched in 60 seconds",
      "href": "/get-pos-quotes"
    }
  ]
},
{
  "slug": "sheffield-street-food-card-payments",
  "title": "Taking Card Payments at Sheffield's Street Food Markets & Events",
  "excerpt": "Peddler, the food halls, Tramlines weekend: Sheffield street food is card-first now. The setup that survives a festival crowd - battery, signal, speed and a backup.",
  "category": "By business",
  "author": "Nathan Keeble",
  "date": "2026-07-08",
  "readMinutes": 5,
  "featuredImage": "/images/blog/sheffield-street-food-card-payments.webp",
  "featuredAlt": "Street food vendor serving orders from a food truck hatch",
  "intro": "Sheffield's street food scene - Peddler Night Market in Kelham Island, the city's food halls, festival pitches at Tramlines - is effectively cashless already. Young crowds tap; queues punish anyone who can't. If you're trading food from a truck, gazebo or food-hall unit in this city, your card setup is core kit, and it has to survive conditions a shop till never faces.",
  "sections": [
    {
      "heading": "What event trading does to a card setup",
      "paragraphs": [
        "A busy service at a night market is hundreds of small transactions in a few hours, outdoors or in a packed industrial building, with everyone else's phones fighting for the same signal. The failure modes are predictable: reader battery dies mid-rush, venue WiFi collapses, phone data crawls exactly when the queue is longest.",
        "So the spec writes itself: a reader with its own SIM (it hunts the strongest network itself), enough battery for a full service plus margin, and a charged backup. The SumUp Solo (~£79) and Square's standalone options are the street-food workhorses for exactly these reasons - the £19 phone-paired readers are fine for quiet pitches and brutal at festivals."
      ]
    },
    {
      "heading": "Speed is revenue",
      "paragraphs": [
        "At £8-£12 a head, your ceiling on a good night is set by how fast the queue moves. Card helps rather than hurts here - a tap is faster than change from a twenty - but only if the setup cooperates:"
      ],
      "bullets": [
        "One-tap menu buttons for your five bestsellers, not typed amounts - typing £8.50 four hundred times is how errors and seconds compound.",
        "Contactless-first: don't ask, just present the reader. Sheffield event crowds expect it.",
        "Tip prompts on - event customers tip generously at the moment of tap, and [100% goes to your team](/blog/card-tips-uk-law).",
        "Digital receipts only; nobody at Peddler wants paper, and printers are one more thing to fail.",
        "Check your provider's offline-payment rules before you need them - queued offline taps are a lifesaver with liability small print."
      ]
    },
    {
      "heading": "Festival economics and the fee line",
      "paragraphs": [
        "A strong festival weekend can put thousands through the reader - at 1.69% flat, £6,000 of Tramlines-weekend takings costs about £101 in fees. That's real money, but it's proportionate: it scales with the good weekend and disappears in the quiet weeks, which is exactly what a seasonal trade needs. Contracted terminals with monthly fees suit street food badly for the same reason they suit market stalls badly.",
        "If you're doing serious volume across a summer of events, run the numbers on SumUp's Payments Plus tier (lower rate for a monthly fee) in the [fee calculator](/card-machine-fee-calculator) - there's a crossover point where it wins, and it's lower than most vendors think."
      ]
    },
    {
      "heading": "The food-hall unit: halfway to a restaurant",
      "paragraphs": [
        "A permanent unit at a Sheffield food hall changes the brief: you've got mains power, venue WiFi, repeat trade and (usually) higher volume. That justifies a proper counter setup - iPad till with menu management, kitchen ticket printing or a screen, and it's worth asking the hall what systems integrate with any shared ordering they run.",
        "It's the natural stepping stone: plenty of Sheffield food businesses have gone truck → food hall → bricks and mortar, and the nice thing about starting on Square or SumUp is the account travels with you - same reporting, same rates, bigger till each time. When the bricks-and-mortar move comes, the [restaurant hub](/pos-systems/restaurants) covers the full-fat systems."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What card reader is best for street food in Sheffield?",
      "a": "A standalone reader with its own SIM - SumUp Solo or Square Terminal - plus a charged backup. Phone-paired £19 readers work for quiet pitches but struggle with festival-crowd signal congestion."
    },
    {
      "q": "Can I trade card-only at Sheffield events?",
      "a": "Yes, legally and increasingly practically - night-market and festival crowds are heavily cashless. Keep a plan for the customer with only cash (a nearby vendor who'll swap, or just take it) and signal your card-only status clearly."
    },
    {
      "q": "What happens when the signal dies at a festival?",
      "a": "SIM readers hop networks automatically, which solves most of it. For total dead zones, some providers queue offline payments with limits and liability rules - know yours before the weekend, not during it."
    },
    {
      "q": "Do I need a different setup for Peddler vs a festival pitch?",
      "a": "Same core kit. Peddler's indoor-industrial setting is kinder on power and shelter; big outdoor festivals are harsher on battery and signal - hence the power bank and backup reader that experienced vendors never travel without."
    }
  ],
  "relatedPosts": [
    "card-machine-sheffield-market-traders",
    "card-machine-for-food-truck",
    "epos-systems-sheffield"
  ],
  "relatedLinks": [
    {
      "label": "POS for mobile businesses",
      "href": "/pos-systems/mobile-businesses"
    },
    {
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
];
