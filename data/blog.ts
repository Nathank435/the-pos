/* Blog posts - /blog and /blog/[slug].
 * Body text supports inline markdown links: [label](/internal-path).
 * Keep internal links pointing at commercial pages (reviews, comparisons,
 * hubs, calculator, quotes) and other posts - that's the whole point. */

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Optional in-content image (WebP), rendered as a captioned figure. */
  image?: { src: string; alt: string; caption?: string };
};

export type BlogPost = {
  slug: string;
  /** If set, canonical URL points here instead of self (de-dupe vs a money/guide page). */
  canonicalUrl?: string;
  title: string;
  excerpt: string;
  category: "Comparisons" | "Fees & saving" | "How-to" | "By business";
  author: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  /** Optional real photo. If omitted, an on-brand cover is auto-generated at
   *  /blog/<slug>/cover (see blogCover()). */
  featuredImage?: string; // /images/blog/<slug>.jpg
  featuredAlt?: string;
  intro: string;
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
  /** Other post slugs to cross-link. */
  relatedPosts: string[];
  /** Commercial/internal pages to link in the sidebar + CTA. */
  relatedLinks: { label: string; href: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
{
  "slug": "how-to-take-card-payments-uk",
  "title": "How to Take Card Payments as a Small Business (UK 2026)",
  "excerpt": "How to take card payments as a UK small business in 2026, with the main options, real fees, setup times and a plain recommendation for most starters.",
  "category": "How-to",
  "author": "The POS editorial team",
  "date": "2026-06-30",
  "readMinutes": 6,
  "featuredImage": "/images/blog/how-to-take-card-payments-uk.webp",
  "featuredAlt": "How to Take Card Payments as a Small Business (UK 2026)",
  "intro": "Learning how to take card payments UK-side is simpler than most people think. You need a device and an account, and you can be taking cards the same week. This guide covers the real options, honest fees and a plain recommendation, so you can accept card payments without overpaying.",
  "sections": [
    {
      "heading": "How to take card payments UK: the four main options",
      "paragraphs": [
        "When you start to take card payments as a small business, you are really choosing between four setups. Most sole traders and market traders do not need anything fancy. Pick the one that matches how you actually trade, not the flashiest kit in the shop window.",
        "Here is the honest rundown of each, with the catch spelled out so nothing surprises you later."
      ],
      "bullets": [
        "Card reader: a small handheld device that pairs with your phone or works on its own. Cheap, portable, ideal for cafes, stalls and tradespeople.",
        "Tap to Pay on phone: turn your own iPhone or Android into a contactless reader with no extra hardware. Handy, but check your phone is supported and there is often a per-transaction limit.",
        "Full POS or till: a proper till system with a screen, receipts and stock tracking. Great for a busy shop or salon, overkill for a one-person stall.",
        "Virtual terminal or pay-by-link: take payments over the phone or by sending a payment link. Good for tradespeople invoicing customers, but rates are usually higher for keyed-in payments."
      ]
    },
    {
      "heading": "What you actually need to start",
      "paragraphs": [
        "Ignore the noise. To accept card payments you need two things: a device to read the card, and a merchant account to move the money to your bank. With the popular pay-as-you-go providers, the account and the device come together, so it is one signup and one box.",
        "You will need proof of ID and your bank details to hand. If you are a sole trader, you do not need a registered company to accept cards. Most people are approved quickly, though the provider may ask for a little extra paperwork if your expected takings are high. A reader itself is a one-off cost of usually somewhere between free on offer and a couple of tens of pounds, so there is no big upfront outlay to worry about. Do not buy more kit than you need on day one. You can always add a receipt printer, a stand or a second reader once you know the business needs it."
      ],
      "image": {
        "src": "/images/blog/how-to-take-card-payments-inline.webp",
        "alt": "A UK small business owner taking a contactless card payment on a card reader",
        "caption": "A UK small business owner taking a contactless card payment on a card reader."
      }
    },
    {
      "heading": "How the fees actually work",
      "paragraphs": [
        "This is where people overpay, so read carefully. There are broadly two pricing models. The first is pay-as-you-go: no monthly fee, and you pay a percentage of each sale. The second is a monthly contract with a lower per-sale rate, which only pays off once your card takings are high enough to cover the standing cost.",
        "For pay-as-you-go, SumUp runs around 0.99 to 1.69%, while Square and PayPal Zettle both sit at about 1.75% for in-person payments, and none of them charge a monthly fee. myPOS uses a slightly different model at roughly 1.10% plus 7p per transaction. Dojo is quote-based and aimed more at established shops with steady volume. Always check current terms, as providers tweak rates.",
        "The rule of thumb: if you are just starting or your card takings are modest, a no monthly fee option almost always wins. Do not sign a monthly contract to save a fraction of a percent unless the sums genuinely add up for your volume. If you want to run the numbers properly, our [fee calculator](/card-machine-fee-calculator) does it in seconds."
      ],
      "bullets": [
        "No monthly fee, percentage per sale: best for starters and low-to-medium takings. Try [SumUp](/reviews/sumup), [Square](/reviews/square) or [PayPal Zettle](/reviews/zettle).",
        "Monthly fee plus lower rate: only worth it at higher, steady volume. Get a quote and do the maths first.",
        "Watch the extras: keyed-in and pay-by-link payments usually cost more than a straightforward tap or chip and PIN."
      ]
    },
    {
      "heading": "How fast you get set up and paid",
      "paragraphs": [
        "Setup is quick. Order a reader, download the app, sign up with your ID and bank details, and you can often be taking cards within a day or two of the device arriving. Tap to Pay is faster still, since there is no hardware to wait for.",
        "Getting paid is the part people forget to check. With most pay-as-you-go providers the money lands in your bank in one to three working days as standard. Some offer faster or next-day payouts, occasionally for a small fee, and some tie the quickest payouts to using their own business account. If cash flow is tight, check the standard payout speed before you commit, because a few days can matter when you are just starting and every sale counts. It is worth a two-minute read of the payout terms rather than a nasty surprise in your first busy week."
      ]
    },
    {
      "heading": "A plain recommendation for most starters",
      "paragraphs": [
        "If you are a sole trader, cafe, stall, salon or tradesperson taking cards for the first time, keep it simple. Go with a pay-as-you-go reader from [SumUp](/reviews/sumup), [Square](/reviews/square) or [PayPal Zettle](/reviews/zettle). No monthly fee, low upfront cost for the device, and you only pay when you actually make a sale.",
        "SumUp tends to have the lowest headline rates and the cheapest reader, so it is a strong default for the smallest traders. Square is the pick if you think you will grow into a fuller till and want the software to grow with you. Zettle suits you if you already live in the PayPal world. Any of the three will do the job well.",
        "Only look at Dojo or a monthly contract once you are established and turning over enough card sales that a lower per-sale rate clearly beats the monthly cost. Until then, do not tie yourself down."
      ],
      "bullets": [
        "Smallest traders and tightest budgets: SumUp.",
        "Planning to grow into a proper till: Square.",
        "Already using PayPal: PayPal Zettle.",
        "Established with high, steady volume: get a Dojo or contract quote and compare."
      ]
    },
    {
      "heading": "Compare it properly before you buy",
      "paragraphs": [
        "Do not just grab the first reader you see at the counter. The gap between providers is small on paper but adds up over a year of trading. Ten minutes now can save you real money later.",
        "Browse the [card readers with no monthly fee](/card-readers-no-monthly-fee) if you want to keep things cheap and simple, run your expected takings through the [fee calculator](/card-machine-fee-calculator) to see the true cost, or [get matched to a provider](/get-pos-quotes) if you would rather answer a few questions and let us point you to the right fit."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the cheapest way to take card payments as a small business?",
      "a": "For most small businesses the cheapest way is a pay-as-you-go card reader with no monthly fee, such as SumUp, Square or PayPal Zettle. You pay a percentage of each sale, roughly 0.99 to 1.75%, and nothing when you are not selling. Check current terms, as rates change."
    },
    {
      "q": "Can I take card payments on my phone without a card reader?",
      "a": "Yes. Tap to Pay lets you accept contactless payments straight on a supported iPhone or Android with no extra hardware. It is quick to set up, though there may be a per-transaction limit and your phone model needs to be supported by the provider."
    },
    {
      "q": "Do I need a business bank account to accept card payments?",
      "a": "Not necessarily. Sole traders can often use a personal account with pay-as-you-go providers, and you do not need a registered company. You will need your ID and bank details to sign up. A separate business account is still tidier for bookkeeping if you can open one."
    },
    {
      "q": "How long does it take to start taking card payments?",
      "a": "Usually a day or two. Once you have signed up and your reader arrives, you download the app, log in and start taking cards. Tap to Pay on a phone can be even faster since there is no device to wait for. Payouts to your bank then take about one to three working days."
    }
  ],
  "relatedPosts": [
    "cheapest-way-to-take-card-payments",
    "do-you-need-a-card-machine"
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
      "label": "Card readers with no monthly fee",
      "href": "/card-readers-no-monthly-fee"
    },
    {
      "label": "Get matched to a provider",
      "href": "/get-pos-quotes"
    }
  ]
},
{
  "slug": "card-machine-fees-compared",
  "title": "Card Machine Fees Compared: SumUp vs Square vs Zettle vs Dojo (2026)",
  "excerpt": "Card machine fees compared for UK small businesses: SumUp, Square, Zettle and Dojo side by side, plus the sneaky extras that decide who's actually cheapest for you.",
  "category": "Fees & saving",
  "author": "The POS editorial team",
  "date": "2026-06-30",
  "readMinutes": 7,
  "featuredImage": "/images/blog/card-machine-fees-compared.webp",
  "featuredAlt": "Card Machine Fees Compared: SumUp vs Square vs Zettle vs Dojo (2026)",
  "intro": "Card machine fees compared properly means looking past the headline rate. SumUp, Square, PayPal Zettle and Dojo all shout a percentage, but monthly costs, PCI charges and payout speed decide who's actually cheapest. Here's the honest breakdown for UK small businesses in 2026.",
  "sections": [
    {
      "heading": "Card machine fees compared: what each one actually charges",
      "paragraphs": [
        "Let's start with the headline numbers, because that's what every provider leads with. These are the rates you'll see plastered across their homepages. Just remember: a percentage on a website is a starting point, not the full bill.",
        "Two of these are pay-as-you-go with no monthly fee. One is quote-based with a contract. That difference matters more than the decimal points, so keep it in mind as you read."
      ],
      "bullets": [
        "[SumUp](/reviews/sumup): 1.69% per transaction standard, or from 0.99% on the Payments Plus plan (which carries a monthly fee). No monthly fee on the standard plan. Check current terms.",
        "[Square](/reviews/square): 1.75% per in-person transaction, no monthly fee. Online and keyed-in rates differ.",
        "[PayPal Zettle](/reviews/zettle): 1.75% per transaction, no monthly fee. Simple and flat.",
        "[Dojo](/reviews/dojo): quote-based, tailored rates depending on your turnover and card mix. Monthly fee from around £15, and you're on a contract. Check current terms."
      ]
    },
    {
      "heading": "Why the cheapest headline rate isn't always the cheapest",
      "paragraphs": [
        "Here's the bit providers gloss over. A 1.69% rate looks better than 1.75%, but the headline percentage rarely tells you what leaves your account each month. The gap between two providers on rate alone is often pennies. The gap on everything else can be real money.",
        "Things that quietly change the maths: monthly hardware or software fees, PCI compliance charges, chargeback fees, higher rates on premium and commercial cards (business cards and rewards cards usually cost you more), and how fast you get paid. A provider that's 0.1% cheaper but holds your money for three working days can hurt cash flow more than the saving is worth.",
        "Pay-as-you-go providers like SumUp, Square and Zettle keep it simple: you pay per transaction and that's largely it. Quote-based providers like Dojo can undercut them on rate, but you have to weigh the monthly fee and contract against that lower percentage. The honest answer is: it depends on your volume. So let's put numbers on it."
      ]
    },
    {
      "heading": "Worked example: £5,000 a month vs £8,000 a month",
      "paragraphs": [
        "Let's run two realistic UK small businesses through the flat-rate providers. We'll use the standard headline rates and ignore extras for a moment, just to show how volume changes the picture. These are illustrative - always check current terms and run your own mix.",
        "At £5,000 a month, the difference between providers is small in cash terms. At £8,000 a month it grows, but it's still modest between the flat-rate options. Where it gets interesting is when a quote-based provider like Dojo offers you a rate well under 1.5%. On higher volume, a lower percentage plus a £15 monthly fee can beat a slightly higher pay-as-you-go rate. On lower volume, that monthly fee eats the saving alive."
      ],
      "bullets": [
        "£5,000/mo at 1.69% (SumUp standard): about £84.50 in fees.",
        "£5,000/mo at 1.75% (Square or Zettle): about £87.50 in fees. Difference: £3.",
        "£8,000/mo at 1.69%: about £135.20. At 1.75%: £140. Difference: £4.80.",
        "£8,000/mo at a hypothetical Dojo 1.4% + £15 monthly: about £127. That can win at higher volume - but only if the quoted rate is genuinely low. Get the quote in writing.",
        "Lesson: at low volume, flat-rate wins on simplicity. At higher volume, a good quote-based deal can pull ahead. The crossover point depends entirely on your quoted rate."
      ],
      "image": {
        "src": "/images/blog/card-machine-fees-compared-inline.webp",
        "alt": "A calculator and receipts used to compare UK card machine fees",
        "caption": "A calculator and receipts used to compare UK card machine fees."
      }
    },
    {
      "heading": "The sneaky extra fees that don't make the homepage",
      "paragraphs": [
        "This is where businesses get caught out. Two providers can quote near-identical rates and still leave you paying wildly different amounts, because the extras aren't in the headline. We've written a full breakdown on [hidden card machine fees](/guides/hidden-card-machine-fees), but here are the usual suspects to interrogate before you sign anything."
      ],
      "bullets": [
        "Monthly or minimum service fees, common on contract providers.",
        "PCI compliance charges (some providers bake this in, some bill it separately).",
        "Chargeback fees when a customer disputes a payment.",
        "Higher rates on premium, commercial and international cards - these can be noticeably above the headline.",
        "Payout speed: next-day is normal, but some hold funds longer or charge for instant payout.",
        "Hardware costs and early-termination fees if you're on a contract."
      ]
    },
    {
      "heading": "The verdict by volume",
      "paragraphs": [
        "There's no single winner, and anyone who tells you otherwise is selling something. The right choice depends almost entirely on how much you turn over and whether you value simplicity or a sharpened rate.",
        "If you're low-volume, seasonal, a market stall, a pop-up or just starting out, go pay-as-you-go. SumUp, Square or Zettle. No monthly fee means you pay nothing on a quiet month, and the rate difference between them is small enough that hardware, app features and payout speed should decide it for you.",
        "If you're higher-volume and consistent, it's worth getting a quote from Dojo (and other quote-based providers). A tailored rate under 1.5% plus a monthly fee can genuinely beat pay-as-you-go once your turnover is high enough. Just get the rate in writing, read the contract length, and check the exit terms before you commit."
      ],
      "bullets": [
        "Low or unpredictable volume: pay-as-you-go (SumUp, Square, Zettle). No monthly fee, no contract.",
        "Steady high volume: get a quote-based deal (Dojo) and compare it against your current flat rate.",
        "Not sure where you sit: run your actual numbers rather than guessing off the headline percentages."
      ]
    },
    {
      "heading": "Run your own numbers before you decide",
      "paragraphs": [
        "Every example above is illustrative. Your card mix, your monthly turnover and the extras you get charged will shift the answer. The only way to know who's genuinely cheapest for your business is to plug in your real figures.",
        "Use our [fee calculator](/card-machine-fee-calculator) to run your actual monthly turnover against each provider's rates and see the real cost, extras included. Then [compare all card machines](/compare-card-machines) side by side to check features, contracts and payout speeds in one place. Five minutes now can save you a few hundred quid a year."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Which card machine has the lowest fees in the UK?",
      "a": "On headline rate, SumUp's 1.69% standard is lower than Square and Zettle at 1.75%, and SumUp's Payments Plus can drop to 0.99% (with a monthly fee). But quote-based providers like Dojo can beat all of them at higher volume. The lowest fee for you depends on your turnover, card mix and the extras. Run your figures through our fee calculator and check current terms."
    },
    {
      "q": "Are there card machines with no monthly fee?",
      "a": "Yes. SumUp (standard plan), Square and PayPal Zettle are all pay-as-you-go with no monthly fee - you only pay per transaction. Dojo, by contrast, charges a monthly fee from around £15 and puts you on a contract. No monthly fee suits low or seasonal volume; a contract can work out cheaper at high, steady volume."
    },
    {
      "q": "Why is my card machine rate higher than advertised?",
      "a": "Usually because the headline rate only covers standard consumer debit and credit cards. Premium, commercial and international cards are often charged at a higher rate. Add PCI compliance charges, chargeback fees or a monthly service fee and your effective cost climbs above the advertised percentage. Always ask for the full fee schedule - see our guide to hidden card machine fees."
    },
    {
      "q": "Is Dojo cheaper than SumUp or Square?",
      "a": "It can be, at higher volume. Dojo's rates are quote-based and tailored to your business, so a steady high-turnover shop might be offered a rate well under 1.5% that beats pay-as-you-go even after the monthly fee. For low or unpredictable volume, the monthly fee and contract usually make SumUp or Square the cheaper, simpler choice. Get Dojo's quote in writing and compare."
    }
  ],
  "relatedPosts": [
    "cheapest-way-to-take-card-payments",
    "how-much-does-a-card-machine-cost-uk"
  ],
  "relatedLinks": [
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    },
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    },
    {
      "label": "Hidden card machine fees",
      "href": "/guides/hidden-card-machine-fees"
    },
    {
      "label": "Get matched to a provider",
      "href": "/get-pos-quotes"
    }
  ]
},
{
  "slug": "cheapest-way-to-take-card-payments",
  "title": "The Cheapest Way to Take Card Payments (UK 2026)",
  "excerpt": "The cheapest way to take card payments in the UK depends on your volume. We rank the cheapest card readers and show the true all-in cost.",
  "category": "Fees & saving",
  "author": "The POS editorial team",
  "date": "2026-06-30",
  "readMinutes": 7,
  "featuredImage": "/images/blog/cheapest-way-to-take-card-payments.webp",
  "featuredAlt": "The Cheapest Way to Take Card Payments (UK 2026)",
  "intro": "The cheapest way to take card payments in the UK is rarely the one with the lowest headline rate. It comes down to your sales volume, whether you pay a monthly fee, and the sneaky extras nobody mentions. Here is the blunt truth on cheap card payments for small businesses.",
  "sections": [
    {
      "heading": "The cheapest way to take card payments starts with all-in cost, not the headline rate",
      "paragraphs": [
        "When people search for the cheapest way to take card payments, they fixate on the transaction percentage. That is only half the story. The real cost is buy-once hardware plus the percentage you pay on every sale, plus any monthly fee, plus the fees hiding in the small print.",
        "A pay-as-you-go card reader is the classic cheap setup: you buy the reader once, then pay a flat percentage per sale with no monthly fee. That is why it suits low or seasonal volume so well. You only pay when you actually sell something.",
        "To work out your genuine cost, add the hardware, multiply your expected monthly card takings by the percentage rate, then add any monthly fee. That total, not the headline rate, tells you what is really cheapest for your business. Our [fee calculator](/card-machine-fee-calculator) does the maths for you in seconds."
      ],
      "bullets": [
        "Hardware: a one-off cost, often £19 plus VAT for a basic reader.",
        "Transaction fee: a percentage taken from every card sale.",
        "Monthly fee: zero on pay-as-you-go plans, which is the point.",
        "Hidden extras: refunds, payouts, currency conversion and PCI charges."
      ]
    },
    {
      "heading": "The cheapest card readers in the UK, ranked",
      "paragraphs": [
        "For most small businesses and sole traders, the cheapest card reader is a no-monthly-fee, pay-as-you-go device. Here is how the main players stack up. Rates change, so check current terms before you buy.",
        "[SumUp](/reviews/sumup) is usually the cheapest entry point. The reader starts from £19 plus VAT with no monthly fee. Standard pay-as-you-go is 1.69% per transaction, and its Payments Plus plan drops to 0.99% if you have steadier volume and are happy with a small monthly cost.",
        "[Square](/reviews/square) is the close rival, with a reader from £19, no monthly fee, and 1.75% per in-person card sale. It bundles in decent free software, which matters if you want basic stock and sales reporting thrown in.",
        "Zettle by PayPal sits at 1.75% per transaction, again with no monthly fee. It is a sensible pick if you already live in the PayPal ecosystem, though the rate is not the lowest on the list."
      ],
      "bullets": [
        "SumUp: reader from £19 plus VAT, 1.69% standard or from 0.99% on Payments Plus, no monthly fee.",
        "Square: reader from £19, 1.75% per sale, no monthly fee, free software included.",
        "Zettle by PayPal: 1.75% per sale, no monthly fee, handy if you use PayPal already."
      ],
      "image": {
        "src": "/images/blog/cheapest-way-inline.webp",
        "alt": "Coins and a card reader representing the cheapest way to take card payments",
        "caption": "Coins and a card reader representing the cheapest way to take card payments."
      }
    },
    {
      "heading": "When a monthly-fee plan actually beats pay-as-you-go",
      "paragraphs": [
        "Pay-as-you-go wins on cost right up until it does not. Once you take enough card payments, a lower percentage on a monthly plan can save you real money, even after paying the monthly fee.",
        "The logic is simple. A monthly plan trades a fixed cost for a cheaper per-sale rate. If your card takings are high enough, the saving on every transaction more than covers the fee. If they are low or lumpy, the fixed cost just eats your margin for no reason.",
        "As a rough rule, if you are turning over a few thousand pounds a month on cards, every month, it is worth pricing up a lower-rate plan. If your takings swing wildly or you only trade part of the year, stick with no monthly fee. Run both scenarios through the [fee calculator](/card-machine-fee-calculator) before deciding, because the crossover point depends entirely on your numbers."
      ],
      "bullets": [
        "Steady, high monthly card volume: a lower-rate monthly plan usually wins.",
        "Low, new or seasonal volume: pay-as-you-go with no monthly fee wins.",
        "Unsure: model both against your real takings, do not guess."
      ]
    },
    {
      "heading": "Tap to Pay on a phone: the near-free way to start",
      "paragraphs": [
        "If you want the absolute cheapest start, you might not need to buy anything. Tap to Pay lets you accept contactless cards and mobile wallets straight on your phone, using the same pay-as-you-go apps from SumUp, Square and Zettle.",
        "There is no reader to buy, so your only cost is the transaction percentage, which is typically the same as the physical reader rate. For a market trader testing an idea, a mobile business, or anyone who takes the odd card payment, it is hard to beat on upfront cost.",
        "The catch is your phone. Tap to Pay needs a fairly recent handset with the right hardware, and it only takes contactless, so no chip and PIN. For low-value, occasional sales that is fine. For busy trading you will still want a proper reader."
      ],
      "bullets": [
        "No hardware to buy: you use the phone you already own.",
        "Same pay-as-you-go rate as the physical reader in most cases.",
        "Contactless only, and needs a compatible, recent smartphone."
      ]
    },
    {
      "heading": "The hidden costs that catch people out",
      "paragraphs": [
        "A low percentage means nothing if the provider claws it back elsewhere. This is where a headline-cheap deal quietly turns expensive, and it is exactly what to check before you commit.",
        "Watch how and when you get paid. Some providers pay out the next working day for free, others charge for instant payouts or hold your money longer. Refunds can cost you the original transaction fee, and taking payments in foreign currencies often adds a conversion charge on top.",
        "Then there are the contract nasties: monthly minimums, PCI compliance fees, statement charges and early exit penalties on longer tie-ins. Pay-as-you-go readers largely dodge these, which is another reason they are cheap. Read our full guide to [hidden card machine fees](/guides/hidden-card-machine-fees) so none of them surprise you."
      ],
      "bullets": [
        "Payout delays or fees for getting your money faster.",
        "Refund fees, where you lose the original transaction charge.",
        "Currency conversion charges on non-sterling payments.",
        "Monthly minimums, PCI fees and early-exit penalties on contracts."
      ]
    },
    {
      "heading": "So what is genuinely the cheapest?",
      "paragraphs": [
        "For most new businesses, sole traders and market traders, the cheapest way to take card payments is a pay-as-you-go reader with no monthly fee, or Tap to Pay on your phone if you take card payments only now and then.",
        "SumUp tends to be the cheapest on the headline rate for casual use, Square throws in the best free software, and Zettle earns its place if you already use PayPal. None lock you into a monthly fee, so your risk is low.",
        "Once your card takings are consistently high, revisit the sums, because a lower-rate monthly plan may then beat pay-as-you-go. Compare current deals on our list of [card readers with no monthly fee](/card-readers-no-monthly-fee), and run your own numbers through the [fee calculator](/card-machine-fee-calculator) before you sign up to anything."
      ],
      "bullets": [
        "Low or seasonal volume: pay-as-you-go reader or Tap to Pay wins.",
        "High, steady volume: price up a lower-rate monthly plan.",
        "Always compare all-in cost, never the headline rate alone."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the cheapest way to take card payments in the UK?",
      "a": "For most small businesses it is a pay-as-you-go card reader with no monthly fee, such as SumUp from 1.69%, or Tap to Pay on your phone if you only take the odd card payment. The cheapest option always depends on your sales volume, so compare the all-in cost, not just the headline rate."
    },
    {
      "q": "What is the cheapest card reader for a small business?",
      "a": "SumUp and Square both sell a reader from around £19 with no monthly fee. SumUp usually has the lower headline rate for casual use, while Square includes better free software. For low or seasonal volume, either is a cheap, low-risk choice. Check current terms before buying."
    },
    {
      "q": "Is it cheaper to take card payments with no monthly fee?",
      "a": "Usually, yes, if your card takings are low, new or seasonal. No monthly fee means you only pay when you sell. But once your volume is consistently high, a lower-rate monthly plan can work out cheaper overall, even after the fee. Run both through a fee calculator to see your crossover point."
    },
    {
      "q": "Can I take card payments without buying a card machine?",
      "a": "Yes. Tap to Pay lets you accept contactless cards and mobile wallets straight on a compatible smartphone using apps from SumUp, Square or Zettle, with no hardware to buy. You pay only the per-transaction rate. It is contactless only, so for chip and PIN or busy trading you will still want a physical reader."
    }
  ],
  "relatedPosts": [
    "card-machine-fees-compared",
    "how-to-take-card-payments-uk"
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
    },
    {
      "label": "Compare card machines",
      "href": "/compare-card-machines"
    }
  ]
},
{
  "slug": "card-machine-for-food-truck",
  "title": "Best Card Machine for a Food Truck or Street Food Business (UK 2026)",
  "excerpt": "Choosing a card machine for a food truck? We cut through the sales patter and pick the best mobile card readers for UK street food traders in 2026.",
  "category": "By business",
  "author": "The POS editorial team",
  "date": "2026-06-30",
  "readMinutes": 7,
  "featuredImage": "/images/blog/card-machine-for-food-truck.webp",
  "featuredAlt": "Best Card Machine for a Food Truck or Street Food Business (UK 2026)",
  "intro": "A card machine for a food truck needs to do three things brilliantly: work on mobile data with no wifi, survive a full day's trading, and take contactless fast when there's a queue out the door. Here are our honest UK 2026 picks.",
  "sections": [
    {
      "heading": "What a card machine for a food truck actually needs",
      "paragraphs": [
        "Forget the marketing. A card machine for a food truck lives a hard life: rain, cold, a battered service hatch and a queue that doesn't wait. The kit that works for a shop often falls over on a pitch. Get the basics right and the rest is detail.",
        "The non-negotiables are simple. It has to run on mobile data because festival and market wifi is a myth. It has to last a full shift without dying. And it has to take Apple Pay and Google Pay in a tap, because most of your customers won't be carrying cash."
      ],
      "bullets": [
        "Works on mobile data (built-in SIM), not just wifi",
        "All-day battery, or a power bank to top it up",
        "Fast contactless and Apple Pay for queue speed",
        "No monthly fee, so quiet days don't cost you",
        "Quick payouts to keep cash flow healthy",
        "Rugged enough to live in a van and get rained on"
      ]
    },
    {
      "heading": "Best card machine for a food truck: our top picks",
      "paragraphs": [
        "There's no single winner for every trader, so we've split it by what you care about most: cheapest and simplest, fastest payouts, or a proper screen. All three take contactless, all three skip the monthly fee, and all three are genuinely usable at a busy hatch.",
        "If you sell across markets and events, it's also worth reading our guide to the [best card readers for market traders](/pos-systems/market-stalls), which overlaps heavily with street food kit."
      ]
    },
    {
      "heading": "SumUp Solo: cheapest and simplest",
      "paragraphs": [
        "The [SumUp](/reviews/sumup) Solo is the easy answer for most food trucks. It's a standalone card reader with its own mobile data connection, so you don't need to pair it with a phone or find wifi. It costs from around £79 plus VAT, has no monthly fee, and charges a flat 1.69% per transaction (dropping from 0.99% on the Payments Plus plan). Check current terms before you buy.",
        "Standalone matters. When your hands are covered in kebab grease and your phone battery is at 4%, you don't want to be faffing with Bluetooth pairing. The Solo just works. If you're on a shoestring, the [SumUp](/reviews/sumup) Air from £19 pairs with your phone instead, but for a busy van the extra spend on the Solo is worth it."
      ],
      "bullets": [
        "Standalone reader with built-in mobile data",
        "From ~£79+VAT, no monthly fee",
        "1.69% per transaction (from 0.99% on Payments Plus)",
        "Dead simple, nothing to pair"
      ],
      "image": {
        "src": "/images/blog/food-truck-inline.webp",
        "alt": "A street food trader taking a card payment at an outdoor market stall",
        "caption": "A street food trader taking a card payment at an outdoor market stall."
      }
    },
    {
      "heading": "myPOS Go: best for instant payouts",
      "paragraphs": [
        "Cash flow is what kills small food businesses, not profit. The [myPOS](/reviews/mypos) Go is built around that problem: it settles your takings instantly to a free myPOS account, so the money is there the moment the customer taps. No waiting two or three working days for a payout to land.",
        "It runs on mobile data too, and card-present rates start from around 1.10% plus 7p. Check current terms, because rates vary by card type. If you're stocking up on ingredients between events and every day of cash matters, instant settlement is a genuinely useful edge over the competition."
      ],
      "bullets": [
        "Instant settlement to a free myPOS account",
        "Built-in mobile data, no wifi needed",
        "Card-present from ~1.10% + 7p (check current terms)",
        "Great for tight cash flow between events"
      ]
    },
    {
      "heading": "Square Terminal: best if you want a screen",
      "paragraphs": [
        "The [Square](/reviews/square) Terminal is an all-in-one handheld with a proper touchscreen, at around £149. If you're doing more than tap-and-go, it earns its price: you can build a menu, add modifiers (extra cheese, no onions), print receipts and see your sales without squinting at a tiny reader.",
        "It's the pick for coffee vans and food trucks with a real menu, or anyone who wants their till and card machine in one device. The trade-off is the higher upfront cost. For a bare-bones burger van, it's overkill. For a growing operation, it's tidy. Square also has no monthly fee on the basic plan."
      ],
      "bullets": [
        "All-in-one handheld with touchscreen",
        "Menu, modifiers and receipts built in",
        "Around £149 upfront, no monthly fee on basic plan",
        "Best for coffee vans and menu-led trucks"
      ]
    },
    {
      "heading": "Connectivity, battery and queue speed",
      "paragraphs": [
        "This is where cheap decisions come back to bite you. On a festival pitch or a packed market, wifi is either absent or crawling under the weight of ten thousand phones. A reader with its own SIM and mobile data is not a luxury for a food truck, it's the whole point. All three of our picks have it.",
        "Battery is the other silent killer. A dead reader at 7pm on a Saturday is lost sales you never get back. Carry a power bank, charge overnight, and test how long yours actually lasts before your first big event. For queue speed, contactless and Apple Pay are king: a tap clears in seconds, chip and PIN doesn't. Prompt customers to tap and you'll move the line twice as fast."
      ]
    },
    {
      "heading": "Fees, payouts and the verdict",
      "paragraphs": [
        "Transaction fees on these look small but add up over a season, so run your real numbers through our [fee calculator](/card-machine-fee-calculator) before committing. On low margins, the difference between 1.10% and 1.69% is real money across a summer of trading.",
        "The verdict: for most UK food trucks, the [SumUp](/reviews/sumup) Solo is the best all-rounder, cheap, standalone and simple. Pick the [myPOS](/reviews/mypos) Go if instant payouts and cash flow are your priority. Choose the [Square](/reviews/square) Terminal if you want a screen and a proper menu. For a wider look across pitches, vans and pop-ups, see our guide to card machines for [mobile businesses](/pos-systems/mobile-businesses)."
      ],
      "bullets": [
        "SumUp Solo: best all-rounder, cheap and simple",
        "myPOS Go: best for instant payouts and cash flow",
        "Square Terminal: best if you want a screen and menu",
        "Always run your numbers through the fee calculator first"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I need wifi to use a card machine on a food truck?",
      "a": "No. The best card readers for street food have a built-in SIM and run on mobile data, so they work on festival pitches and markets where wifi is absent or unusable. The SumUp Solo, myPOS Go and Square Terminal all connect on mobile data."
    },
    {
      "q": "What is the cheapest card machine for a food van?",
      "a": "The SumUp Air from around £19 is the cheapest way in, but it pairs with your phone. For a busy food van we'd spend a bit more on the standalone SumUp Solo from around £79 plus VAT, which needs no phone and has no monthly fee."
    },
    {
      "q": "Which card machine has the fastest payouts for street food traders?",
      "a": "The myPOS Go offers instant settlement to a free myPOS account, so your takings land the moment a customer taps rather than after two or three working days. That's a real advantage for cash flow between events. Check current terms before buying."
    },
    {
      "q": "Is there a card machine for a market food stall with no monthly fee?",
      "a": "Yes. The SumUp Solo, myPOS Go and Square Terminal all work on a pay-as-you-go basis with no monthly fee, so quiet trading days don't cost you a fixed charge. You only pay a percentage per transaction when you actually make a sale."
    }
  ],
  "relatedPosts": [
    "best-card-readers-market-traders",
    "how-to-take-card-payments-uk"
  ],
  "relatedLinks": [
    {
      "label": "SumUp review",
      "href": "/reviews/sumup"
    },
    {
      "label": "myPOS review",
      "href": "/reviews/mypos"
    },
    {
      "label": "Best card readers for market traders",
      "href": "/pos-systems/market-stalls"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
{
  "slug": "do-you-need-a-card-machine",
  "title": "Do You Need a Card Machine? Card vs Cash for UK Small Businesses (2026)",
  "excerpt": "Wondering if you need a card machine? For most UK small businesses in 2026 the answer is yes, but here's the honest cash vs card breakdown before you commit.",
  "category": "How-to",
  "author": "The POS editorial team",
  "date": "2026-06-30",
  "readMinutes": 7,
  "featuredImage": "/images/blog/do-you-need-a-card-machine.webp",
  "featuredAlt": "Do You Need a Card Machine? Card vs Cash for UK Small Businesses (2026)",
  "intro": "\"Do I need a card machine?\" is the question most UK sole traders and small businesses ask before their first busy weekend. Short answer: probably yes, but not always. Here's the blunt, honest breakdown of card vs cash so you can decide without wasting money.",
  "sections": [
    {
      "heading": "Do I need a card machine? The honest answer",
      "paragraphs": [
        "Do I need a card machine? For the vast majority of UK small businesses in 2026, yes. Cash use has fallen off a cliff, and a growing number of customers simply do not carry notes anymore. If you only take cash, every one of those people is a lost sale, and you will rarely even know it happened because they just walk off.",
        "But this is not a blanket rule. There are genuine cases where cash-only is fine, and we'll cover those honestly further down. The point is to make the decision on the numbers, not on habit or on a vague fear that card fees will eat you alive. They usually don't."
      ]
    },
    {
      "heading": "The real case for taking cards",
      "paragraphs": [
        "Three things push most businesses towards accepting card payments, and they are all backed by how people actually behave, not marketing fluff.",
        "First, people spend more on card. When someone isn't counting physical notes, the psychological brake comes off and average transaction values go up. Second, you stop losing sales. \"Sorry, cash only\" at a market stall or a café counter sends people to the business next door, or to the cashpoint they never come back from. Third, in 2026 taking card is simply expected. Turning up cash-only can make a new business look amateur or unprepared, which is the last impression you want."
      ],
      "bullets": [
        "Higher average spend: card customers tend to spend more per visit than cash-only ones.",
        "Fewer walk-aways: no lost sales from people who assumed they could tap.",
        "Looks professional: card acceptance is the baseline expectation, not a bonus.",
        "Faster queues: contactless is quicker than counting change at busy periods."
      ]
    },
    {
      "heading": "The real cost of taking cards vs cash",
      "paragraphs": [
        "Card acceptance costs a small percentage per sale. To put real numbers on it, [SumUp](/reviews/sumup) charges from around 0.99% to 1.69% per transaction depending on your setup, and [Square](/reviews/square) is around 1.75%, both with no-monthly-fee options. Always check current terms before you sign up, as rates and plans change. On a £10 sale, that is somewhere between roughly 10p and 18p. That is the whole cost of the fee people worry so much about.",
        "Now weigh that against cash, which is not free either. Cash means trips to the bank, some banks charging business customers to deposit takings, time spent counting a till and cashing up, the risk of theft or simple miscounting, and float management. Once you add the hours and the banking costs, the \"free\" option often isn't cheaper at all. Run your own figures through our [fee calculator](/card-machine-fee-calculator) to see what card fees would actually cost your business per month."
      ],
      "bullets": [
        "Card: a per-sale % (roughly 1-1.75%), no-monthly-fee plans available.",
        "Cash: banking or deposit fees, time cashing up, theft and error risk.",
        "On a £10 sale, a card fee is usually 10p to 18p, not the disaster people imagine.",
        "One lost £30 sale from turning someone away costs more than fees on dozens of card payments."
      ],
      "image": {
        "src": "/images/blog/do-you-need-card-machine-inline.webp",
        "alt": "A card machine and cash on a counter, weighing up card versus cash",
        "caption": "A card machine and cash on a counter, weighing up card versus cash."
      }
    },
    {
      "heading": "When cash-only actually makes sense",
      "paragraphs": [
        "We're not going to pretend everyone needs a card machine. There are real situations where cash-only is perfectly sensible, and pushing a reader into fees they don't need would be dishonest.",
        "If your sales are very low value and you'd rather not lose 1p on a 50p item, or you trade so rarely that the setup isn't worth it, cash-only can be the right call. Same if your customers are overwhelmingly cash-based and never ask to pay by card. The test is simple: are you actually losing sales or annoying customers by not taking card? If the honest answer is no, you're fine as you are."
      ],
      "bullets": [
        "Very low-value items where fees genuinely eat the margin.",
        "Occasional or one-off trading, like a rare car boot sale.",
        "A customer base that reliably pays cash and never asks to tap.",
        "No evidence you're losing sales by staying cash-only."
      ]
    },
    {
      "heading": "The cheapest, low-commitment way to start",
      "paragraphs": [
        "If you've decided to take cards, you do not need to commit to a contract or expensive kit. The whole point of modern card acceptance is that it's cheap and low-risk to try.",
        "Card readers start from around £19 as a one-off buy, with pay-as-you-go fees and no monthly contract, so your only real cost is the per-sale percentage. Cheaper still, if you have a fairly recent smartphone you can use [Tap to Pay on your phone](/guides/what-is-tap-to-pay) and take contactless payments with no hardware at all. That means you can start accepting card for effectively nothing up front and see whether it lifts your takings before spending a penny on a reader."
      ],
      "bullets": [
        "Buy a basic reader from around £19, one-off, no monthly fee.",
        "Or use Tap to Pay on a compatible phone with zero hardware cost.",
        "Pay-as-you-go pricing means no commitment if it doesn't work out.",
        "Test it for a few weeks and check whether your average sale goes up."
      ]
    },
    {
      "heading": "The verdict: should you accept card payments?",
      "paragraphs": [
        "For most UK small businesses in 2026, the answer is yes, take card. The fees are small, genuinely a few pence on a typical sale, while the upside is higher spend, fewer lost customers and looking like a proper business. Cash isn't free either once you count banking and your own time, so the gap is far narrower than the \"card fees are a rip-off\" crowd claim.",
        "Stay cash-only only if your sales are tiny in value, rare, or your customers genuinely never want to pay by card. Everyone else is very likely leaving money on the table. Start cheap with Tap to Pay or a sub-£20 reader, test it, and let your takings tell you the truth. If you want a shortcut, we can [get matched to a provider](/get-pos-quotes) that suits your trade and turnover."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I legally need a card machine in the UK?",
      "a": "No. There is no law forcing UK businesses to accept card, and equally none forcing you to accept cash. It is a commercial decision. Most small businesses choose card because refusing it loses sales, but you are free to trade cash-only if you prefer."
    },
    {
      "q": "How much does it cost to take card payments?",
      "a": "You pay a small percentage per sale, roughly 0.99% to 1.75% with providers like SumUp and Square, often with no monthly fee. Readers start from around £19, or you can use Tap to Pay on a compatible phone for no hardware cost. Always check current terms before signing up."
    },
    {
      "q": "Is it worth taking card payments for a small business?",
      "a": "For most, yes. Customers tend to spend more on card and you stop losing sales from people who don't carry cash. On a £10 sale the fee is usually 10p to 18p, which is easily outweighed by a single sale you'd otherwise have turned away."
    },
    {
      "q": "Can I take card payments without buying a machine?",
      "a": "Yes. If you have a fairly recent smartphone, Tap to Pay lets you accept contactless card and mobile payments with no extra hardware. It is the cheapest, lowest-commitment way to start taking card and see whether it lifts your takings."
    }
  ],
  "relatedPosts": [
    "how-to-take-card-payments-uk",
    "cheapest-way-to-take-card-payments"
  ],
  "relatedLinks": [
    {
      "label": "SumUp review",
      "href": "/reviews/sumup"
    },
    {
      "label": "Square review",
      "href": "/reviews/square"
    },
    {
      "label": "Get matched to a provider",
      "href": "/get-pos-quotes"
    },
    {
      "label": "Fee calculator",
      "href": "/card-machine-fee-calculator"
    }
  ]
},
  {
    slug: "card-machine-mistakes",
    title: "5 Mistakes UK Businesses Make When Choosing a Card Machine",
    excerpt:
      "From chasing the lowest headline rate to ignoring the contract, here are the five traps that cost UK businesses money - and how to dodge them.",
    category: "How-to",
    author: "The POS editorial team",
    date: "2026-06-24",
    readMinutes: 6,
    featuredImage: "/images/blog/card-machine-mistakes.jpg",
    featuredAlt: "Close-up of a card machine on a shop counter",
    intro:
      "Picking a card machine looks simple until the first statement lands. Here are the five mistakes we see most often - and the quick checks that save you money.",
    sections: [
      {
        heading: "1. Chasing the lowest headline rate",
        paragraphs: [
          "A 1.5% rate with a £25 monthly fee can cost more than a 1.75% rate with no monthly fee - it depends entirely on your volume. Run your real numbers through our [card machine fee calculator](/card-machine-fee-calculator) before you sign anything.",
        ],
      },
      {
        heading: "2. Ignoring the contract",
        paragraphs: [
          "Pay-as-you-go providers like [SumUp](/reviews/sumup) and [Square](/reviews/square) have no contract. Quote-based providers can tie you in for years with exit fees. If you're not sure you'll stick around, favour a [no-contract option](/guides/no-contract-card-machines).",
        ],
      },
      {
        heading: "3. Forgetting about payout speed",
        paragraphs: [
          "If your cash flow is tight, waiting 2–3 days for your money hurts. Some providers settle next-day or even same-day - see our roundup of [same-day payout providers](/blog/same-day-payouts-providers).",
        ],
      },
      {
        heading: "4. Buying more POS than you need",
        paragraphs: [
          "A sole trader rarely needs a full till system. Match the kit to the job using our [POS vs card reader guide](/guides/pos-system-vs-card-reader), or compare the lot on the [main comparison page](/compare-pos-systems).",
        ],
      },
      {
        heading: "5. Not checking the hidden fees",
        paragraphs: [
          "Chargebacks, PCI charges, authorisation fees - the bits that don't make the homepage. We list them all in [hidden card machine fees](/guides/hidden-card-machine-fees).",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the most important thing when choosing a card machine?",
        a: "Your total cost at your real monthly volume - not the headline rate. A no-monthly-fee provider usually wins at lower volumes; a quote-based provider can win at higher ones. Use a fee calculator to check.",
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "no-contract-card-machines-catch"],
    relatedLinks: [
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get matched to a provider", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "sumup-vs-square-2026",
    canonicalUrl: "https://thepos.co.uk/compare/sumup-vs-square",
    title: "SumUp vs Square in 2026: Which Should Your Small Business Pick?",
    excerpt:
      "Two of the UK's most popular no-monthly-fee options, head to head. We break down fees, hardware and who each one actually suits.",
    category: "Comparisons",
    author: "The POS editorial team",
    date: "2026-06-20",
    readMinutes: 7,
    featuredImage: "/images/blog/sumup-vs-square-2026.jpg",
    featuredAlt: "Contactless card payment on a reader",
    intro:
      "SumUp and Square are the default picks for UK small businesses that want card payments without a contract. They look similar on the surface - here's how to choose.",
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "Choose [SumUp](/reviews/sumup) if you want the simplest, cheapest way to take a card. Choose [Square](/reviews/square) if you want a genuinely good free POS app with inventory, online ordering and room to grow. Our full [SumUp vs Square breakdown](/compare/sumup-vs-square) has the side-by-side table.",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "SumUp is 1.69% standard (from 0.99% on Payments Plus); Square is a flat 1.75% in person. Neither has a monthly fee on its standard plan. Which is cheaper depends on your volume - run it through the [fee calculator](/card-machine-fee-calculator).",
        ],
      },
      {
        heading: "Who each one suits",
        paragraphs: ["A rough rule of thumb:"],
        bullets: [
          "Market stall, tradesperson, mobile seller → SumUp (see [best for market stalls](/pos-systems/market-stalls))",
          "Café, small retail, service business → Square (see [best for cafés](/pos-systems/cafes))",
          "Selling online and in person → Square's free online store edges it",
        ],
      },
    ],
    faqs: [
      {
        q: "Is SumUp or Square better for a café?",
        a: "Square, usually - its free POS app handles menus, tipping and reporting better. SumUp is the better pick if you only need simple card payments with the lowest possible cost.",
      },
    ],
    relatedPosts: ["card-machine-mistakes", "cafe-overpaying-card-fees"],
    relatedLinks: [
      { label: "SumUp vs Square - full comparison", href: "/compare/sumup-vs-square" },
      { label: "SumUp review", href: "/reviews/sumup" },
      { label: "Square review", href: "/reviews/square" },
    ],
  },
  {
    slug: "how-to-cut-card-processing-fees",
    title: "How to Cut Your Card Processing Fees (Without Switching to a Worse Provider)",
    excerpt:
      "Seven practical ways UK businesses can shave money off card fees - from renegotiating to picking the right plan for your volume.",
    category: "Fees & saving",
    author: "The POS editorial team",
    date: "2026-06-16",
    readMinutes: 6,
    featuredImage: "/images/blog/how-to-cut-card-processing-fees.jpg",
    featuredAlt: "Calculator and banknotes on a desk",
    intro:
      "Card fees quietly eat into every sale. The good news: most businesses are leaving money on the table, and fixing it doesn't mean dropping to a dodgy provider.",
    sections: [
      {
        heading: "Know your real effective rate",
        paragraphs: [
          "Add up everything you paid last month - transaction fees, monthly fees, hardware - and divide by your card turnover. That's your true cost. Our [fee calculator](/card-machine-fee-calculator) does it for you, and our [fees explained guide](/guides/card-machine-fees-explained) decodes the line items.",
        ],
      },
      {
        heading: "Match the plan to your volume",
        paragraphs: [
          "Low volume? A no-monthly-fee provider like [SumUp](/reviews/sumup) or [Zettle](/reviews/zettle) almost always wins. Doing serious volume? A quote-based provider like [Dojo](/reviews/dojo) may beat a flat rate - but only if the monthly fee and contract stack up.",
        ],
      },
      {
        heading: "The quick wins",
        paragraphs: [""],
        bullets: [
          "Avoid paying for instant payouts you don't need",
          "Buy your reader outright instead of renting where it's cheaper",
          "Watch premium/commercial card surcharges",
          "Re-compare every 12 months - see the [full comparison](/compare-pos-systems)",
        ],
      },
    ],
    relatedPosts: ["card-machine-mistakes", "same-day-payouts-providers"],
    relatedLinks: [
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
    ],
  },
  {
    slug: "best-card-readers-market-traders",
    title: "The Best Card Readers for Market Traders",
    excerpt:
      "Market stalls need a reader that works on mobile data, lasts all day and costs nothing when you're not trading. Here's what to look for.",
    category: "By business",
    author: "The POS editorial team",
    date: "2026-06-12",
    readMinutes: 5,
    featuredImage: "/images/blog/best-card-readers-market-traders.jpg",
    featuredAlt: "Customer paying with a bank card at a stall",
    intro:
      "On a market stall you want a reader in your apron, not a contract on your desk. Here's what actually matters when you trade outdoors.",
    sections: [
      {
        heading: "What to prioritise",
        paragraphs: ["For market trading, the order of importance is usually:"],
        bullets: [
          "Works on its own mobile data (don't rely on market WiFi)",
          "No monthly fee - you shouldn't pay for the weeks you don't trade",
          "All-day battery",
          "Cheap to buy outright",
        ],
      },
      {
        heading: "Our picks",
        paragraphs: [
          "The [SumUp](/reviews/sumup) Solo and [Zettle](/reviews/zettle) Terminal are standalone, SIM-connected and pay-as-you-go - ideal for stalls. If you want instant access to your takings, [myPOS](/reviews/mypos) is worth a look. See the full shortlist on our [best POS for market stalls](/pos-systems/market-stalls) page.",
        ],
      },
    ],
    faqs: [
      {
        q: "What card reader works without WiFi?",
        a: "Standalone readers with a built-in SIM - like the SumUp Solo, Zettle Terminal or myPOS Go - work on mobile data, so you don't need WiFi. Perfect for markets and events.",
      },
    ],
    relatedPosts: ["sumup-vs-square-2026", "tap-to-pay-iphone-worth-it"],
    relatedLinks: [
      { label: "Best POS for market stalls", href: "/pos-systems/market-stalls" },
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "SumUp review", href: "/reviews/sumup" },
    ],
  },
  {
    slug: "tap-to-pay-iphone-worth-it",
    title: "Tap to Pay on iPhone: Is It Good Enough to Ditch the Card Machine?",
    excerpt:
      "Take contactless payments on your phone with no extra hardware. We look at who it suits - and where you'll still want a proper reader.",
    category: "How-to",
    author: "The POS editorial team",
    date: "2026-06-08",
    readMinutes: 5,
    featuredImage: "/images/blog/tap-to-pay-iphone-worth-it.jpg",
    featuredAlt: "Person tapping a phone on a payment terminal",
    intro:
      "Tap to Pay turns your phone into a contactless reader - no separate machine. It's brilliant for some businesses and not enough for others.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "With a supported app - [SumUp](/reviews/sumup), [Square](/reviews/square) and [Zettle](/reviews/zettle) all offer it - customers tap their card, phone or watch on your phone. There's nothing else to buy. Our [Tap to Pay guide](/guides/what-is-tap-to-pay) covers the basics.",
        ],
      },
      {
        heading: "Who it's great for",
        paragraphs: [
          "Tradespeople, mobile sellers and pop-ups love it as a zero-hardware option - see [best card readers for tradespeople](/pos-systems/tradesmen). It's also a handy backup even if you own a reader.",
        ],
      },
      {
        heading: "Where you'll still want a reader",
        paragraphs: [
          "Busy counters, tipping prompts and standalone use (no phone tied up) are still better on a dedicated machine. Compare both on the [card machine page](/compare-card-machines).",
        ],
      },
    ],
    relatedPosts: ["best-card-readers-market-traders", "no-contract-card-machines-catch"],
    relatedLinks: [
      { label: "What is Tap to Pay?", href: "/guides/what-is-tap-to-pay" },
      { label: "Best for tradespeople", href: "/pos-systems/tradesmen" },
      { label: "Compare card machines", href: "/compare-card-machines" },
    ],
  },
  {
    slug: "no-contract-card-machines-catch",
    canonicalUrl: "https://thepos.co.uk/guides/no-contract-card-machines",
    title: "No-Contract Card Machines: What's the Catch?",
    excerpt:
      "No-contract sounds like a no-brainer - but there are trade-offs. Here's when pay-as-you-go wins and when a contract is genuinely cheaper.",
    category: "Fees & saving",
    author: "The POS editorial team",
    date: "2026-06-04",
    readMinutes: 5,
    featuredImage: "/images/blog/no-contract-card-machines-catch.jpg",
    featuredAlt: "Person reviewing costs with a calculator",
    intro:
      "Nobody enjoys being tied into a multi-year deal to take a card. But 'no contract' isn't automatically the cheapest - here's the honest trade-off.",
    sections: [
      {
        heading: "The no-contract options",
        paragraphs: [
          "[SumUp](/reviews/sumup), [Square](/reviews/square) and [Zettle](/reviews/zettle) all let you buy a reader and pay only per transaction. No monthly fee, no commitment. Our [no-contract guide](/guides/no-contract-card-machines) lists them all.",
        ],
      },
      {
        heading: "When a contract is actually cheaper",
        paragraphs: [
          "If you're high-volume, a quote-based provider like [Dojo](/reviews/dojo) might offer a low enough rate that even with a monthly fee, you come out ahead. Just check the maths with the [fee calculator](/card-machine-fee-calculator) and read the exit terms.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are no-contract card machines worth it?",
        a: "For low or variable volume, yes - you avoid commitment and only pay when you sell. For high, steady volume, a contracted provider with a lower rate can work out cheaper overall.",
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "card-machine-mistakes"],
    relatedLinks: [
      { label: "No-contract card machines", href: "/guides/no-contract-card-machines" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
    ],
  },
  {
    slug: "cafe-overpaying-card-fees",
    title: "Why Your Café Might Be Overpaying on Card Fees",
    excerpt:
      "Lots of small coffees means lots of tiny transactions - and that's exactly where the wrong setup quietly costs you. Here's how to fix it.",
    category: "By business",
    author: "The POS editorial team",
    date: "2026-05-30",
    readMinutes: 5,
    featuredImage: "/images/blog/cafe-overpaying-card-fees.jpg",
    featuredAlt: "Customer paying by card at a café counter",
    intro:
      "A café lives on small, frequent transactions - flat whites, not furniture. That changes which provider is cheapest for you.",
    sections: [
      {
        heading: "Why small tickets matter",
        paragraphs: [
          "Providers that charge a flat percentage suit cafés well; ones that add a fixed pence-per-transaction fee can sting when your average sale is £3. Check your effective rate with the [fee calculator](/card-machine-fee-calculator).",
        ],
      },
      {
        heading: "What works for cafés",
        paragraphs: [
          "[Square](/reviews/square) is the popular all-rounder - free POS, tipping and quick menus. [SumUp](/reviews/sumup) is great if you just want simple, cheap payments. The full shortlist is on [best POS for cafés](/pos-systems/cafes).",
        ],
      },
    ],
    relatedPosts: ["sumup-vs-square-2026", "how-to-cut-card-processing-fees"],
    relatedLinks: [
      { label: "Best POS for cafés", href: "/pos-systems/cafes" },
      { label: "Square review", href: "/reviews/square" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
    ],
  },
  {
    slug: "restaurant-pos-what-matters",
    title: "Restaurant POS in 2026: What Actually Matters",
    excerpt:
      "Tables, tabs, tips and a kitchen that's already on fire at 8pm. Here's what to prioritise in a restaurant POS - and what to ignore.",
    category: "By business",
    author: "The POS editorial team",
    date: "2026-05-26",
    readMinutes: 6,
    featuredImage: "/images/blog/restaurant-pos-what-matters.jpg",
    featuredAlt: "Customer paying at a restaurant counter",
    intro:
      "A restaurant POS has a harder job than a shop till. Reliability and speed beat shaving 0.1% off the rate - here's the priority order.",
    sections: [
      {
        heading: "What to prioritise",
        paragraphs: [""],
        bullets: [
          "Table and tab management that staff can learn fast",
          "Rock-solid reliability during service",
          "Fast payouts for cash flow",
          "Tipping and tronc-friendly reporting",
        ],
      },
      {
        heading: "Our picks",
        paragraphs: [
          "[Dojo](/reviews/dojo) is popular for reliable card machines and fast payouts; pair it with a hospitality POS for table service. See the full shortlist on [best POS for restaurants](/pos-systems/restaurants), or compare everything on the [main comparison](/compare-pos-systems).",
        ],
      },
    ],
    relatedPosts: ["same-day-payouts-providers", "switching-card-machine-checklist"],
    relatedLinks: [
      { label: "Best POS for restaurants", href: "/pos-systems/restaurants" },
      { label: "Dojo review", href: "/reviews/dojo" },
      { label: "Get matched", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "same-day-payouts-providers",
    title: "Getting Paid Faster: Which Providers Offer Same-Day Payouts?",
    excerpt:
      "Standard settlement is 1–2 working days. If cash flow is tight, here are the providers that get your money to you sooner.",
    category: "Comparisons",
    author: "The POS editorial team",
    date: "2026-05-20",
    readMinutes: 5,
    featuredImage: "/images/blog/same-day-payouts-providers.jpg",
    featuredAlt: "British pound banknotes",
    intro:
      "You took the payment - so where's the money? Settlement speed varies a lot, and faster payouts can be worth paying for when cash flow is tight.",
    sections: [
      {
        heading: "The fast movers",
        paragraphs: ["If quick access to funds matters, look at:"],
        bullets: [
          "[myPOS](/reviews/mypos) - instant settlement to a built-in account",
          "[Dojo](/reviews/dojo) - next-day, with as-fast-as same-day options",
          "[Square](/reviews/square) - next working day, instant transfer for a fee",
        ],
      },
      {
        heading: "Is it worth paying for?",
        paragraphs: [
          "If you rely on daily takings for stock or wages, yes. If not, standard free payouts are fine. Our guide on [how long card payments take to clear](/guides/how-long-do-card-payments-take-to-clear) has the detail, and you can filter for fast payouts on the [comparison page](/compare-pos-systems).",
        ],
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "restaurant-pos-what-matters"],
    relatedLinks: [
      { label: "How long payments take to clear", href: "/guides/how-long-do-card-payments-take-to-clear" },
      { label: "myPOS review", href: "/reviews/mypos" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
    ],
  },
  {
    slug: "switching-card-machine-checklist",
    title: "Switching Card Machine Providers: A Stress-Free Checklist",
    excerpt:
      "Thinking of moving provider? Work through this checklist first so you don't get caught by exit fees, downtime or a worse rate.",
    category: "How-to",
    author: "The POS editorial team",
    date: "2026-05-14",
    readMinutes: 6,
    featuredImage: "/images/blog/switching-card-machine-checklist.jpg",
    featuredAlt: "Writing a checklist on a notepad",
    intro:
      "Switching provider can save you real money - but only if you avoid the obvious traps. Run through this before you commit.",
    sections: [
      {
        heading: "Before you switch",
        paragraphs: [""],
        bullets: [
          "Check your current contract for notice periods and exit fees",
          "Work out your true effective rate with the [fee calculator](/card-machine-fee-calculator)",
          "Compare like-for-like on the [main comparison](/compare-pos-systems)",
          "Confirm the new provider supports how you actually trade",
        ],
      },
      {
        heading: "Making the move",
        paragraphs: [
          "Order the new reader before cancelling the old one to avoid downtime. If you're unsure which to pick, our [60-second quiz](/get-pos-quotes#quiz) narrows it down, or get [tailored quotes](/get-pos-quotes). For the full decision framework, see [how to choose a card machine](/guides/how-to-choose-a-card-machine).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I switch card machine providers easily?",
        a: "Pay-as-you-go providers have no contract, so switching is simple. Contracted providers may have notice periods and exit fees - always check before you cancel, and order the new reader first to avoid downtime.",
      },
    ],
    relatedPosts: ["card-machine-mistakes", "no-contract-card-machines-catch"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "How to choose a card machine", href: "/guides/how-to-choose-a-card-machine" },
      { label: "Get matched", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "best-card-machine-small-business-uk",
    title: "Best Card Machine for Small Business UK (2026)",
    excerpt:
      "The best UK card machines for small businesses in 2026 - by need, not by who pays us most. Fees, hardware, contracts and payouts compared in plain English.",
    category: "Comparisons",
    author: "The POS editorial team",
    date: "2026-06-29",
    readMinutes: 10,
    featuredImage: "/images/blog/best-card-machine-small-business-uk.jpg",
    featuredAlt: "Customer tapping a card on a card machine at a shop counter",
    intro:
      "There's no single best card machine for every UK small business - the right one depends on what you sell, how much you take and whether you want a contract. This guide picks the strongest option for each common scenario, with the fees and catches spelled out, so you can match a reader to your business in a couple of minutes.",
    sections: [
      {
        heading: "How we picked",
        paragraphs: [
          "We compare on the things that actually move the cost and hassle for a small business: transaction rate, monthly fee, hardware price, contract length, payout speed and the software you get. Every figure is publicly advertised UK pricing and dated on each provider's page - see our [methodology](/methodology). Some links earn us a commission, but that never changes the verdicts.",
        ],
      },
      {
        heading: "The short answer",
        paragraphs: ["If you want the quick version:"],
        bullets: [
          "**Best all-rounder:** [Square](/reviews/square) - free POS app, no monthly fee, room to grow.",
          "**Cheapest, simplest:** [SumUp](/reviews/sumup) - from a £19 reader, no contract, from 0.99% on Payments Plus.",
          "**Busy hospitality / fast payouts:** [Dojo](/reviews/dojo) - reliable machines, as-fast-as same-day settlement.",
          "**Instant access to funds:** [myPOS](/reviews/mypos) - money lands in a built-in account in real time.",
          "**PayPal sellers:** [PayPal Zettle](/reviews/zettle) - takings flow into your PayPal balance.",
        ],
      },
      {
        heading: "Best all-rounder: Square",
        paragraphs: [
          "Square is the card machine we recommend most for small UK businesses, because it's the best free POS *and* a card reader in one. There's no monthly fee on the standard plan, a flat 1.75% in-person rate, and the app handles items, inventory, an online store and basic reporting out of the box.",
          "Readers start at £19 + VAT, with the all-in-one Square Terminal (£149 + VAT) for table-side or counter use. It's especially good for [cafés](/pos-systems/cafes) and [small retail](/pos-systems/retail). Full detail in our [Square review](/reviews/square).",
        ],
      },
      {
        heading: "Cheapest & simplest: SumUp",
        paragraphs: [
          "If you just want to take a card with the least cost and commitment, [SumUp](/reviews/sumup) is the classic pick - a £19 reader, no monthly fee, no contract, plus invoices and Tap to Pay. It's the go-to for [market stalls](/pos-systems/market-stalls), [tradespeople](/pos-systems/tradesmen) and mobile sellers. See also our roundup of the [best card readers for market traders](/blog/best-card-readers-market-traders).",
        ],
      },
      {
        heading: "Busy hospitality & fast payouts: Dojo",
        paragraphs: [
          "For a busy [restaurant](/pos-systems/restaurants), pub or higher-volume shop, [Dojo](/reviews/dojo) is built for reliability and quick cash flow - next-day, even as-fast-as same-day payouts. Pricing is quote-based, so read the contract terms, but at volume a tailored rate can beat a flat one.",
        ],
      },
      {
        heading: "What to look for (and the catches)",
        paragraphs: ["Whatever you pick, sanity-check these before you commit:"],
        bullets: [
          "Your **all-in cost at your real volume** - run it through the [fee calculator](/card-machine-fee-calculator).",
          "**Contract and exit fees** - pay-as-you-go (SumUp/Square/Zettle) means no lock-in.",
          "**Payout speed** - standard is 1–2 working days; instant usually costs extra.",
          "**Hidden fees** - chargebacks, PCI, authorisation; see [hidden card machine fees](/guides/hidden-card-machine-fees).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best card machine for a small business in the UK?",
        a: "For most UK small businesses, Square is the best all-rounder - a free POS app with no monthly fee at 1.75% per transaction. SumUp is best if you want the cheapest, simplest pay-as-you-go reader, and Dojo suits busy hospitality wanting fast payouts.",
      },
      {
        q: "What's the cheapest card machine for a small business?",
        a: "SumUp and Square readers start around £19 + VAT with no monthly fee, so they're cheapest to start. On rate, SumUp's Payments Plus plan starts from 0.99% for domestic cards. The cheapest overall depends on your volume - use a fee calculator to compare.",
      },
      {
        q: "Do small businesses need a full POS or just a card reader?",
        a: "Many sole traders and market sellers only need a simple reader. Cafés, shops and restaurants usually benefit from a fuller POS (stock, tables, reporting). Square and Zettle start as readers but include free POS software you can grow into.",
      },
    ],
    relatedPosts: ["sumup-vs-square-2026", "how-much-does-a-card-machine-cost-uk"],
    relatedLinks: [
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get matched to a provider", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "how-much-does-a-card-machine-cost-uk",
    title: "How Much Does a Card Machine Cost in the UK? (2026)",
    excerpt:
      "A full breakdown of UK card machine costs in 2026 - hardware, transaction fees, monthly charges and the hidden extras - with worked examples by turnover.",
    category: "Fees & saving",
    author: "The POS editorial team",
    date: "2026-06-28",
    readMinutes: 9,
    featuredImage: "/images/blog/how-much-does-a-card-machine-cost-uk.jpg",
    featuredAlt: "Shop owner at the counter with a POS system",
    intro:
      "A card machine's price tag is only part of the story. The real cost is three things stacked together - the hardware, the per-transaction fee and any monthly charge - plus a few extras providers don't put on the homepage. Here's what a card machine actually costs a UK business in 2026, with examples you can map onto your own numbers.",
    sections: [
      {
        heading: "The three costs that make up a card machine",
        paragraphs: ["Every card machine bill comes down to:"],
        bullets: [
          "**Hardware** - buy a reader outright (£19–£599) or hire/finance it monthly.",
          "**Transaction fee** - a % (and sometimes a few pence) of every card sale, typically 1.4%–1.75% in person.",
          "**Monthly fee** - £0 on pay-as-you-go providers, or a subscription on quote-based ones.",
        ],
      },
      {
        heading: "Typical UK prices in 2026",
        paragraphs: ["As a rough guide (always check current terms):"],
        bullets: [
          "[SumUp](/reviews/sumup): reader from £19 + VAT, 1.69% standard (from 0.99% on Payments Plus), no monthly fee.",
          "[Square](/reviews/square): reader from £19 + VAT, 1.75% in person, no monthly fee.",
          "[PayPal Zettle](/reviews/zettle): reader ~£29 + VAT, 1.75%, no monthly fee.",
          "[myPOS](/reviews/mypos): device from ~£19, card-present from 1.10% + 7p, instant settlement.",
          "[Dojo](/reviews/dojo): quote-based - typically a monthly element plus a tailored rate.",
        ],
      },
      {
        heading: "Buy outright or rent?",
        paragraphs: [
          "Buying a reader once (the pay-as-you-go model) is usually cheaper over time and keeps you contract-free. Renting/financing a terminal spreads the cost but often ties you into a term with exit fees - common with quote-based acquirers. If you're not sure you'll stick with a provider, favour a [no-contract option](/guides/no-contract-card-machines).",
        ],
      },
      {
        heading: "Worked examples by turnover",
        paragraphs: [
          "Say you take **£5,000/month** at 1.75% with no monthly fee - that's about **£87.50/month** in processing, plus a one-off ~£19 reader. On a quote-based provider at 1.4% + a £15 monthly fee, the same £5,000 is £70 + £15 = **£85/month** - so close it barely matters, and the no-contract option is the safer bet.",
          "At **£30,000/month**, that 0.35% rate gap is worth ~£105/month - now the lower quote-based rate can clearly win, even with a monthly fee. The crossover depends entirely on your volume, which is exactly what our [fee calculator](/card-machine-fee-calculator) works out for you.",
        ],
      },
      {
        heading: "The hidden costs to check",
        paragraphs: ["Beyond the headline price, watch for:"],
        bullets: [
          "Chargeback fees (often £10–£20 per dispute)",
          "PCI compliance / non-compliance charges (more common with traditional acquirers)",
          "Per-authorisation fees on some merchant accounts",
          "Fees for instant payouts, and minimum monthly service charges",
          "Higher rates on premium, commercial and international cards",
        ],
      },
      {
        heading: "How to keep the cost down",
        paragraphs: [
          "Know your true effective rate (total paid ÷ card turnover), match the plan to your volume, buy hardware outright where it's cheaper, and re-compare every year. Our guide on [how to cut your card processing fees](/blog/how-to-cut-card-processing-fees) goes deeper, and [card machine fees explained](/guides/card-machine-fees-explained) decodes every line item.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a card machine cost per month in the UK?",
        a: "On a pay-as-you-go provider (SumUp, Square, Zettle) there's no monthly fee - you only pay a percentage per transaction, plus a one-off reader from about £19 + VAT. Quote-based providers (e.g. Dojo) often charge a monthly fee plus terminal hire, typically from around £15/month.",
      },
      {
        q: "Is it cheaper to buy or rent a card machine?",
        a: "Buying a reader outright is usually cheaper long-term and keeps you contract-free. Renting spreads the cost but commonly ties you into a contract with exit fees, so weigh the total cost of ownership.",
      },
      {
        q: "What's the average card machine transaction fee in the UK?",
        a: "In-person rates are usually around 1.4%–1.75%. Pay-as-you-go providers sit near 1.69%–1.75%; quote-based acquirers can be lower at higher volumes but add monthly and hardware costs.",
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "best-card-machine-small-business-uk"],
    relatedLinks: [
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" },
      { label: "Compare card machines", href: "/compare-card-machines" },
    ],
  },
  {
    slug: "square-vs-zettle",
    canonicalUrl: "https://thepos.co.uk/compare/square-vs-zettle",
    title: "Square vs Zettle: Which Is Better for UK Small Businesses? (2026)",
    excerpt:
      "Square vs PayPal Zettle compared for UK small businesses - fees, hardware, POS software and payouts, with a clear verdict on who each one suits.",
    category: "Comparisons",
    author: "The POS editorial team",
    date: "2026-06-27",
    readMinutes: 8,
    featuredImage: "/images/blog/square-vs-zettle.jpg",
    featuredAlt: "Customer paying by card at a small business counter",
    intro:
      "Square and PayPal Zettle are two of the most popular no-monthly-fee card readers in the UK - both let small businesses take card payments cheaply with no contract. They look similar, but they're built for slightly different owners. Here's how they compare on fees, hardware, software and payouts, and which one to pick.",
    sections: [
      {
        heading: "Quick verdict",
        paragraphs: [
          "Choose [Square](/reviews/square) if you want the stronger free POS ecosystem - better inventory, a free online store and room to grow. Choose [PayPal Zettle](/reviews/zettle) if you already use PayPal and want your takings to flow neatly into your PayPal balance. For most growing businesses, Square edges it; for committed PayPal sellers, Zettle is the natural fit.",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "Both are pay-as-you-go with no monthly fee on their standard plans. Square is a flat **1.75%** in person; Zettle is **1.75%** on card and contactless too - so on rate alone they're level. The difference is what you get around it. Run your real numbers through the [fee calculator](/card-machine-fee-calculator) to see your all-in cost.",
        ],
      },
      {
        heading: "Hardware",
        paragraphs: [
          "Square's reader starts at £19 + VAT, with a Terminal (£149 + VAT) and full Register if you grow. Zettle's Reader 2 is around £29 + VAT, with a standalone Zettle Terminal option. Square's range scales further, which matters if you expect to add a proper till station.",
        ],
      },
      {
        heading: "POS software",
        paragraphs: [
          "This is where Square pulls ahead. Its free POS app includes solid inventory, a free online store, invoicing and loyalty, plus paid Restaurant and Retail tiers. Zettle's free app covers the basics well - items, basic inventory and reporting - but its wider ecosystem is less ambitious. If software matters, Square wins; if you only need simple payments, both are fine.",
        ],
      },
      {
        heading: "Payouts & ecosystem",
        paragraphs: [
          "Square pays out next working day (instant transfer for a fee). Zettle settles in 1–2 working days, with the bonus that funds can land in your PayPal balance - handy if you already run money through PayPal. If fast access matters more, see our roundup of [same-day payout providers](/blog/same-day-payouts-providers).",
        ],
      },
      {
        heading: "Who each one suits",
        paragraphs: [""],
        bullets: [
          "**Café / small retail / service business** → Square (see [best POS for cafés](/pos-systems/cafes) and [retail](/pos-systems/retail)).",
          "**Existing PayPal seller** → Zettle.",
          "**Wants room to grow into a full till** → Square.",
          "**Just wants simple, cheap card payments** → either; pick by hardware preference.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Square or Zettle cheaper?",
        a: "They're level on rate - both 1.75% per in-person transaction with no monthly fee. Square's reader starts slightly cheaper (£19 vs ~£29 + VAT). The better value depends on whether you'll use Square's stronger free software.",
      },
      {
        q: "Is Square better than Zettle?",
        a: "For most growing businesses, yes - Square's free POS, online store and inventory are more capable. Zettle is the better choice if you're committed to PayPal and want takings in your PayPal balance.",
      },
      {
        q: "Can I use Zettle without a PayPal account?",
        a: "You sign up through PayPal and it integrates closely with your PayPal account - that integration is the main reason to choose Zettle over Square.",
      },
    ],
    relatedPosts: ["sumup-vs-square-2026", "best-card-machine-small-business-uk"],
    relatedLinks: [
      { label: "Square review", href: "/reviews/square" },
      { label: "Zettle review", href: "/reviews/zettle" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Featured image for a post: its real photo, or the auto-generated brand cover. */
export function blogCover(post: BlogPost): { src: string; alt: string } {
  if (post.featuredImage) return { src: post.featuredImage, alt: post.featuredAlt ?? post.title };
  return { src: `/blog/${post.slug}/cover`, alt: post.title };
}

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

/** Newest first. */
export function postsByDate(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
