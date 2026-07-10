/* Blog posts, part 4 - assembled and type-checked in data/blog.ts. */
import type { BlogPost } from "./types";

export const POSTS_4: BlogPost[] = [
{
  slug: "card-machine-for-tradesmen",
  title: "Card Machines for Tradesmen: Plumbers, Electricians & Builders (UK 2026)",
  excerpt: "Stop chasing invoices: the best card machines for plumbers, electricians and builders, with real fee maths on a £280 job and no monthly contracts.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-for-tradesmen.webp",
  featuredAlt: "Electrician repairing a socket with pliers",
  intro: "A card machine for tradesmen solves the oldest problem in the trade: finishing the job, sending the invoice, then spending three weeks chasing the money. Take payment on the doorstep before you pack the van and that problem disappears. This guide covers the readers that actually work for plumbers, electricians and builders, what a £280 job really costs you in fees, and how to take deposits for materials without any awkwardness.",
  sections: [
    {
      heading: "Why tradesmen should take card payments on the doorstep",
      paragraphs: [
        "The single biggest reason to carry a card reader is not convenience. It is that 'I'll do a bank transfer tonight' sometimes means tonight, sometimes means next month, and occasionally means never. A tap on a reader before you leave the job means the money is already on its way to your account.",
        "There is also a quieter benefit: customers who pay on the spot rarely dispute the bill later. The work is fresh, they have seen it done, and the transaction is closed. Chasing an invoice six weeks on, when the memory of the leaking pipe has faded, is a much harder conversation.",
        "And the cash-in-hand era is genuinely winding down. Plenty of customers simply do not carry £280 in notes anymore, and HMRC's appetite for digital records grows every year. Card payments create a clean trail that makes your bookkeeping and VAT returns easier, not harder."
      ]
    },
    {
      heading: "The best card machine for tradesmen: what to look for",
      paragraphs: [
        "You need three things in a van: a reader that works without Wi-Fi, no monthly contract, and a fee you can actually calculate. That points squarely at pay-as-you-go readers rather than rented terminals with 18-month agreements.",
        "The main contenders look like this:"
      ],
      bullets: [
        "SumUp: £19 reader, 1.69% flat per transaction, no contract. Pairs with your phone for connectivity.",
        "SumUp Solo (~£79): has its own SIM, so it works on any job with mobile signal even if your phone battery dies.",
        "Square: £19 reader, 1.75% flat, plus free invoicing software that suits quoted work.",
        "Zettle: £29 reader, 1.75%, pays into a PayPal account, which suits you only if you already live in PayPal.",
        "Dojo, Worldpay and Tyl: quote-based contracts, generally aimed at busier fixed premises. Get a written quote and check the exit terms before signing anything."
      ]
    },
    {
      heading: "The fee maths on a £280 job",
      paragraphs: [
        "Say you charge £280 to replace a consumer unit. On SumUp at 1.69%, the fee is £4.73, so you keep £275.27. On Square at 1.75%, it is £4.90. Either way, you have given up less than a fiver to be paid before you have even started the van.",
        "Compare that to the real cost of an unpaid invoice: the second visit to drop a reminder through the door, the awkward phone calls, the hour of admin. If chasing money costs you even one billable hour a month, the card fees have paid for themselves several times over. Run your own numbers through our [card machine fee calculator](/card-machine-fee-calculator) with your actual job values.",
        "One caveat: if you regularly take very large payments, say £3,000 for a bathroom refit, flat-rate fees start to sting. £3,000 at 1.69% is £50.70. At that level it is worth comparing providers properly on our [card machine comparison](/compare-card-machines), or splitting the job into a deposit and balance."
      ]
    },
    {
      heading: "Pay-by-link for invoiced work",
      paragraphs: [
        "Not every job ends with the customer standing next to you. For commercial work, landlords, or jobs where you invoice after the fact, a payment link does the same job as the reader: you text or email a link, they tap it, they pay by card from wherever they are. Most of the app-based providers include this at no extra monthly cost.",
        "Some providers also offer a [virtual terminal](/guides/what-is-a-virtual-terminal), which lets you type a customer's card details into your phone or laptop while they read them out over the phone. Handy for deposits from customers who will not touch a link. Note that card-not-present payments usually carry a slightly higher fee than tapping the reader, because the fraud risk is higher.",
        "The trick is to put the payment link on the invoice itself. An invoice with a 'pay now' button gets settled faster than one ending with sort code and account number, because you have removed every excuse to put it off until payday."
      ]
    },
    {
      heading: "Taking deposits for materials",
      paragraphs: [
        "If you are fronting £600 of boiler before you have earned a penny, a deposit is not cheeky, it is basic cash flow. A card deposit taken at the quote stage, by link or over the phone, commits the customer and funds the merchant's trip.",
        "Keep it simple and in writing: state the deposit amount, what it covers, and when the balance is due. A short line on the quote is enough. If the customer pushes back on a reasonable materials deposit, treat that as useful information about how the final invoice might go.",
        "Card deposits also give the customer some protection, since card payments carry dispute rights that a bag of cash does not. That cuts both ways, so do the work you quoted and keep photos. Check your provider's current terms on how deposits and disputes are handled."
      ]
    },
    {
      heading: "Records, VAT and keeping the taxman happy",
      paragraphs: [
        "Every card payment lands in your account with a timestamp, an amount and a paper trail. Come January, your accountant reconciles a clean statement instead of deciphering a glovebox full of receipts. If you are VAT registered, or heading toward the threshold, that record-keeping stops being a nice-to-have and becomes essential.",
        "Most reader apps also produce simple sales reports, and providers like Square bundle free invoicing that keeps quotes, invoices and payments in one place. See our [tradesmen POS guide](/pos-systems/tradesmen) for how far you can get without paying for software.",
        "Yes, card income is visible income. If your business model depends on it not being visible, a card reader is the least of your problems."
      ]
    },
    {
      heading: "Who should buy what: the short version",
      paragraphs: [
        "Sole trader doing domestic jobs: buy a SumUp or Square reader for £19, pay the flat rate, done. If you work in areas with patchy phone reception or you are hard on phone batteries, the SumUp Solo with its own SIM is worth the extra. Browse the full field of [no-monthly-fee card readers](/card-readers-no-monthly-fee) before you buy.",
        "Bigger outfits with several vans and £20,000+ a month going through cards: a quote-based provider like Dojo or Worldpay may undercut the flat rates, but only with volume, and only if the contract terms suit you. Never sign without knowing the exit fee. Check your agreement carefully.",
        "Who should walk away from card payments entirely? Almost nobody, honestly. The only tradesperson who does not benefit is one whose every customer is a builder's merchant account or a commercial client on 30-day terms, and even then a payment link on the invoice speeds things up."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best card machine for tradesmen in the UK?",
      a: "For most sole traders, a SumUp reader (£19, 1.69% per transaction, no contract) or Square reader (£19, 1.75%, free invoicing included) covers everything. If you work in areas with poor phone signal, the SumUp Solo at around £79 has its own SIM card and works independently of your phone."
    },
    {
      q: "How much does a card machine cost a plumber or electrician per job?",
      a: "On a £280 job, a 1.69% flat fee costs £4.73 and 1.75% costs £4.90. There are no monthly fees on pay-as-you-go readers, so quiet months cost you nothing. On very large jobs the percentage adds up, so compare providers if you regularly take £2,000+ in one payment."
    },
    {
      q: "Can tradesmen take card payments without a card machine?",
      a: "Yes. Payment links sent by text or email let customers pay by card remotely, and a virtual terminal lets you key in card details given over the phone. Both suit invoiced and deposit work, though card-not-present rates are usually slightly higher than in-person taps."
    },
    {
      q: "Should tradesmen take deposits by card?",
      a: "Yes, especially when you are buying materials upfront. A card deposit taken by payment link commits the customer and protects your cash flow. Put the deposit amount and what it covers in writing on the quote, and check your provider's current terms on deposits."
    }
  ],
  relatedPosts: ["card-machine-for-sole-traders", "taking-deposits-small-business", "invoice-payments-vs-card-machine"],
  relatedLinks: [
    { label: "POS and payments for tradesmen", href: "/pos-systems/tradesmen" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ]
},
{
  slug: "card-payments-for-window-cleaners",
  title: "Card Payments for Window Cleaners & Round-Based Trades",
  excerpt: "Card payments for window cleaners: payment links by text, Direct Debit for the round, and Tap to Pay at the door. Honest fee maths on a £15 clean.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 7,
  featuredImage: "/images/blog/card-payments-for-window-cleaners.webp",
  featuredAlt: "Window cleaner using a squeegee on a large pane",
  intro: "Card payments for window cleaners are a different problem to card payments for a shop. Your customers are rarely home, the amounts are small and repeat every four weeks, and knocking back round on a Friday night to collect £15 a door is dead time you never get back. This guide compares the three honest options: payment links by text, Direct Debit for the round, and a tap on the reader when someone actually answers the door.",
  sections: [
    {
      heading: "The round-based collection problem",
      paragraphs: [
        "Window cleaning, gutter rounds, bin cleaning and similar trades share one awkward feature: you do the work whether or not the customer is standing there. That breaks the normal payment moment. There is no counter, no doorstep handover, just a note through the letterbox and hope.",
        "The traditional fix, collecting cash on a second visit, is quietly brutal. If your round is 60 houses and a third pay on the knock-back, you are burning an evening a week acting as your own debt collector. That evening is worth more than any card fee ever charged.",
        "So the question is not 'card reader or cash'. It is 'which remote payment method fits a repeat £15 job', and there are two serious answers: payment links and Direct Debit."
      ]
    },
    {
      heading: "Payment links by text: the flexible option",
      paragraphs: [
        "A payment link is a one-tap card payment sent by text or WhatsApp. Clean the windows, send the link from the pavement, and most customers pay from the sofa the same day. Providers like SumUp and Square include payment links with no monthly fee, so your only cost is the transaction percentage.",
        "The strength of links is flexibility. One-off jobs, first cleans, gutter extras and conservatory roofs all fit, because you set the amount each time. The weakness is that the customer still has to act. A link is politer than a knock, but it can still be ignored, and you will need a system for chasing the stragglers.",
        "A simple routine works: send the link when you finish, one reminder after three days, and a conversation before the next clean if it is still unpaid. Most window cleaners find link payment rates settle high once customers get used to the rhythm."
      ]
    },
    {
      heading: "Direct Debit: the round-trade standard, honestly compared",
      paragraphs: [
        "GoCardless-style Direct Debit has become the default for established rounds, and for good reason: the customer authorises once, then you pull the payment after each clean. No knocking, no chasing, no link to ignore. For a fixed four-weekly round, it is the closest thing to payroll a window cleaner can get.",
        "The honest trade-offs: Direct Debit takes a few working days to land rather than next-day, the customer can cancel the mandate at any time, and you need them to fill in a form once, which some older customers resist. Fees are typically a small percentage plus pence per collection, and several round-management apps bundle it in. Check the current pricing of whichever service you use, as structures vary.",
        "Compared with a card reader, Direct Debit wins on repeat collection and loses on immediacy and one-off jobs. Most rounds end up hybrid: Direct Debit for the regulars, [payment links or a reader](/card-readers-no-monthly-fee) for everyone else. If someone insists on cash, take the cash. This is not a religion."
      ]
    },
    {
      heading: "Tap to Pay when they are home",
      paragraphs: [
        "When the customer does answer the door, take the money there and then. A £19 SumUp or Square reader lives in the van pocket, and increasingly you do not even need that: [Tap to Pay](/guides/what-is-tap-to-pay) turns a recent iPhone or Android into the card machine, with the customer tapping their card or phone on yours.",
        "Remember the contactless card cap is £100 per tap, though phone wallets like Apple Pay and Google Pay have no cap, which matters for bigger one-offs like a full soffit and gutter job. For a £15 clean, any contactless method is instant.",
        "Doorstep card acceptance also quietly upsells. 'While I'm here, want the conservatory roof done for £40?' converts far better when the customer does not have to find cash."
      ]
    },
    {
      heading: "Pricing a £15 clean against the fees",
      paragraphs: [
        "Here is the maths that worries people, done properly. A £15 clean on SumUp at 1.69% costs 25p in fees. At 1.75% it is 26p. Over a 60-house round, if every single house paid by card, you would pay roughly £15 in fees per full round, about the price of one house.",
        "Now price the alternative. If knock-backs cost you two hours a week and your working rate is £30 an hour, cash collection costs £60 a week, or roughly £240 a month, in unbillable time. The fees are not the expensive option. Plug your own round size into our [fee calculator](/card-machine-fee-calculator) if you want the exact figure.",
        "Should you put prices up to cover fees? A blanket 25p rise per clean covers card costs entirely and no customer will blink at it. Do not add a visible card surcharge, though. It irritates customers, and consumer card surcharges are banned in the UK anyway."
      ]
    },
    {
      heading: "Who should use what",
      paragraphs: [
        "New round, still growing: start with payment links only. No hardware, no monthly cost, and you learn which customers pay promptly. Add a cheap reader once you have enough doorstep encounters to justify it, and see our [mobile business payments guide](/pos-systems/mobile-businesses) for the wider kit question.",
        "Established round of 100+ regulars: Direct Debit for the core round, links for extras. The admin saving compounds every month, and your income becomes predictable enough to plan around.",
        "Who should walk away? If your round is genuinely all cash-happy pensioners who are always home, changing nothing is a legitimate choice for now. But every year a few of those customers are replaced by families who have not carried cash since 2019, so have a link option ready before you need it."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best way for window cleaners to take card payments?",
      a: "A hybrid works best: GoCardless-style Direct Debit for regular round customers, payment links by text for one-offs and extras, and Tap to Pay on your phone or a £19 reader for customers who are home. Direct Debit removes chasing entirely for repeat cleans."
    },
    {
      q: "How much do card fees cost on a £15 window clean?",
      a: "About 25p at SumUp's 1.69% flat rate, or 26p at 1.75% with Square or Zettle. Even if an entire 60-house round paid by card, fees total roughly £15, far less than the time cost of collecting cash on knock-backs."
    },
    {
      q: "Is Direct Debit better than a card reader for a cleaning round?",
      a: "For repeat round customers, usually yes: payment is pulled automatically after each clean with no chasing. It is slower to land than card payments and needs a one-off signup from the customer, so keep payment links or a reader for one-off jobs and new customers."
    },
    {
      q: "Can window cleaners charge customers extra for paying by card?",
      a: "No. Surcharges on consumer card payments are banned in the UK. If fees bother you, build them into your pricing; a 25p rise per clean more than covers the cost of a £15 job paid by card, and no customer will notice."
    }
  ],
  relatedPosts: ["card-machine-for-sole-traders", "invoice-payments-vs-card-machine", "tap-to-pay-iphone-worth-it"],
  relatedLinks: [
    { label: "Card readers with no monthly fee", href: "/card-readers-no-monthly-fee" },
    { label: "Payments for mobile businesses", href: "/pos-systems/mobile-businesses" },
    { label: "What is Tap to Pay?", href: "/guides/what-is-tap-to-pay" }
  ]
},
{
  slug: "card-machine-for-takeaways",
  title: "Card Machines & POS for Takeaways: Counter, Phone Orders and Delivery Apps",
  excerpt: "Card machines and POS for takeaways: faster counter payments, safer phone orders, and why your own card fees beat 15-30% delivery app commissions.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-for-takeaways.webp",
  featuredAlt: "Server at a fast food counter",
  intro: "Choosing a card machine for a takeaway is really three decisions in one: how you take money at the counter on a rammed Friday night, how you take phone orders without writing card numbers on a notepad, and how much of your margin you keep surrendering to delivery apps. Get all three right and the payment side of the business runs itself. This guide covers the kit, the fees, and the maths that makes own-channel orders worth pushing.",
  sections: [
    {
      heading: "Counter speed: surviving the Friday peak",
      paragraphs: [
        "At 7pm on a Friday, every second at the till is queue length. A contactless tap clears in a couple of seconds; fumbling for change does not. If your counter still runs cash-first, you are choosing slower service at exactly the moment demand peaks.",
        "For the hardware, a takeaway does not need much: a reader that never drops connection and a till that fires orders to the kitchen. Square's £19 reader with its free POS software is a strong starting point, and SumUp at 1.69% is the cheapest flat rate going. Quote-based providers like Dojo and Worldpay make sense at higher volumes, but get the full contract terms in writing first.",
        "Remember the £100 contactless cap applies to physical cards only; Apple Pay and Google Pay are uncapped, which covers even the heroic office-party order. Chip and PIN handles the rest."
      ]
    },
    {
      heading: "The best takeaway POS system: what actually matters",
      paragraphs: [
        "A takeaway POS earns its keep in three places: fast keys for your bestsellers, kitchen tickets that print or display the moment the order is taken, and end-of-day reports that tell you what sold. Anything beyond that is decoration for most shops.",
        "Kitchen tickets deserve emphasis. Verbal orders shouted through a hatch generate remakes, and remakes are pure margin loss: wasted food, wasted time, and a customer watching their kebab happen twice. A till that prints a clear ticket, or a cheap kitchen display, pays for itself in avoided mistakes.",
        "Free-tier software covers most independents. See our dedicated [takeaway POS guide](/pos-systems/takeaways) for setups by shop size, or [compare POS systems](/compare-pos-systems) side by side before committing to anything with a monthly fee."
      ]
    },
    {
      heading: "Phone orders: virtual terminals and pay-by-link",
      paragraphs: [
        "Phone orders are where takeaways get payments wrong most often. Writing a card number on the order pad is a genuine security problem and breaches card-handling rules. The proper tools are a [virtual terminal](/guides/what-is-a-virtual-terminal), where you key the customer's card details straight into a secure screen, or pay-by-link, where you text a payment link and cook once it is paid.",
        "Two honest caveats. Card-not-present transactions cost more than counter taps, because the fraud risk is higher, so expect a higher rate on phone orders than your in-person rate. And they carry more chargeback risk: 'I never received it' is easier to claim on a phone order than at the counter.",
        "Pay-by-link before cooking quietly kills the classic takeaway loss: the hoax order that nobody collects. If the link is not paid, the fryer stays off. That single change saves some shops more than their entire card fee bill."
      ]
    },
    {
      heading: "Delivery apps vs your own orders: the margin maths",
      paragraphs: [
        "Delivery platforms typically take 15-30% commission on each order. Your own card fees on a direct order are around 1.7%. On a £30 order, that is the difference between giving away £4.50-£9.00 and giving away about 51p. Same food, same driver problem, wildly different margin.",
        "This is not an argument for quitting the platforms; they bring you customers you would never reach. It is an argument for converting repeat customers to your own channel. A flyer in every delivery bag with a phone number, a direct-order link and a modest 'order direct' discount still leaves you miles ahead of the commission.",
        "Run the numbers on your own volume: 100 platform orders a month at £25 average and 25% commission is £625 in commission. The same orders direct, paid by card, cost about £42.50 in fees. That gap is a part-time wage."
      ]
    },
    {
      heading: "Minimum card spends: legal, but think twice",
      paragraphs: [
        "Yes, a minimum card spend is legal in the UK. Surcharging consumers extra for paying by card is banned, but 'card payments over £5 only' is allowed. Plenty of takeaways still run one from the fee-conscious old days.",
        "Whether it is wise is another matter. A £4.50 order at 1.69% costs you 8p in fees. Turning away or irritating that customer over 8p, when they might have added a drink and come back weekly, is small maths beating big maths. The stronger play is usually a low minimum or none at all.",
        "If you do keep a minimum, sign it clearly at the counter and keep it low. Springing it on someone at payment is how one-star reviews get written."
      ]
    },
    {
      heading: "What the fees look like across a real week",
      paragraphs: [
        "Take a shop doing £4,000 a week over the counter, 70% by card. That is £2,800 of card takings, which costs £47.32 a week at 1.69% or £49.00 at 1.75%. Against that, cash has its own costs: counting, banking runs, and shrinkage. Neither payment method is free; card costs are just the visible ones.",
        "At higher volumes, quote-based providers start competing hard with flat rates, and SumUp's Payments Plus tier from 0.99% changes the arithmetic too. Put your own weekly numbers through the [fee calculator](/card-machine-fee-calculator) before assuming the flat rate is cheapest.",
        "Who should walk away from pay-as-you-go? A takeaway consistently clearing £15,000+ a month in card sales should be getting quotes, because a sub-1% negotiated rate beats 1.69% comfortably at that scale. Everyone smaller should stay contract-free and flexible."
      ]
    },
    {
      heading: "The short version by shop type",
      paragraphs: [
        "Small independent, counter-led: Square reader plus free POS, kitchen printer, pay-by-link for phone orders. Total hardware outlay under £100, no monthly software fee.",
        "Busy multi-till shop with delivery apps: consider quote-based terminals for the counter volume, keep a virtual terminal for phone orders, and work the flyer-in-bag strategy relentlessly to shift volume off the platforms.",
        "New opening: start cheap and contract-free. You do not know your volumes yet, and an 18-month terminal contract signed in week one is the classic new-takeaway mistake. Upgrade once real numbers exist, and check any agreement's exit terms before signing."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best card machine for a takeaway?",
      a: "For most independents, a Square reader (£19, 1.75%, free POS software with kitchen ticket support) or SumUp (£19, 1.69% flat) covers the counter. High-volume shops taking £15,000+ a month in card sales should get quotes from Dojo, Worldpay or Tyl, as negotiated rates can beat flat pricing at scale."
    },
    {
      q: "How should takeaways take card payments over the phone?",
      a: "Use a virtual terminal to key card details into a secure screen, or send a pay-by-link by text and cook once it is paid. Never write card numbers down. Phone payments cost slightly more than counter taps and carry more chargeback risk, but pay-by-link eliminates hoax orders."
    },
    {
      q: "Is a takeaway POS system worth it over a basic card reader?",
      a: "Once you have more than a handful of orders in play at once, yes. Kitchen tickets cut remakes, fast keys speed up the Friday queue, and daily reports show what actually sells. Free-tier POS software bundled with readers like Square is enough for most independent takeaways."
    },
    {
      q: "Can a takeaway set a minimum card spend?",
      a: "Yes, minimum spends are legal in the UK, though adding a surcharge for paying by card is not. Weigh it up first: a £4.50 order costs about 8p in card fees, so a strict minimum often loses more goodwill than it saves in fees. If you keep one, display it clearly."
    }
  ],
  relatedPosts: ["restaurant-pos-what-matters", "can-you-charge-for-card-payments", "cheapest-way-to-take-card-payments"],
  relatedLinks: [
    { label: "POS systems for takeaways", href: "/pos-systems/takeaways" },
    { label: "Compare POS systems", href: "/compare-pos-systems" },
    { label: "What is a virtual terminal?", href: "/guides/what-is-a-virtual-terminal" }
  ]
},
{
  slug: "card-machine-for-butchers",
  title: "Card Machines for Butchers: Taking the Counter Cashless-Ready",
  excerpt: "Card machines for butchers: keep your cash regulars, add contactless at the counter, take Christmas order deposits and protect thin margins on fees.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-for-butchers.webp",
  featuredAlt: "Butcher standing behind a meat display counter",
  intro: "A card machine for butchers used to be an afterthought; the trade ran on cash and everyone liked it that way. That world is going, one retiring regular at a time. Younger customers walk in wanting four sausages and carrying nothing but a phone. This guide covers picking a reader that suits a wet counter, the truth about scale integration, Christmas deposits, and fee maths for a trade where margins are already thin.",
  sections: [
    {
      heading: "The cash counter is shifting, whether we like it or not",
      paragraphs: [
        "Butchery held out longer than almost any high-street trade on cash, and for rational reasons: small margins, fast queues, and a customer base that paid in notes for fifty years. But footfall surveys tell the same story everywhere; the customers you need to win next carry cards and phones, not change.",
        "The risk is invisible because it walks past the shop. Nobody comes in, discovers you are cash-only, and tells you about it. They just buy their mince at the supermarket, where a tap takes two seconds. Being cashless-ready is not about abandoning cash, it is about never losing a sale over the payment method.",
        "The good news: entry cost is trivial now. A £19 reader and a flat percentage gets you accepting cards this week, with no contract to regret. Our [card machine comparison](/compare-card-machines) covers the current field."
      ]
    },
    {
      heading: "Choosing a card machine for a butcher's counter",
      paragraphs: [
        "The practical requirements are speed, reliability at Saturday peak, and hardware that survives a working shop. The main pay-as-you-go options:"
      ],
      bullets: [
        "SumUp: 1.69% flat, £19 reader, no monthly fee. Cheapest flat rate for a small shop.",
        "Square: 1.75% flat, £19 reader, free POS software with item buttons and daily reports.",
        "Zettle: 1.75%, £29 reader, settles into PayPal, which suits some and annoys others.",
        "Dojo, Worldpay, Tyl: quote-based countertop terminals aimed at higher volume; worth pricing once card takings are established, and always check the agreement's length and exit terms."
      ]
    },
    {
      heading: "Weigh-and-price: the honest word on scale integration",
      paragraphs: [
        "In theory, your scale talks to your till, the price flies across, and the whole counter is one integrated system. In practice, integrated scale-and-EPOS setups are built for supermarkets and multi-site chains, and priced accordingly. For most independent butchers they are overkill.",
        "Here is what actually happens in most small shops: the scale shows £7.43, and someone types £7.43 into the card reader. That is the whole workflow, and it is fine. It adds perhaps two seconds per sale and costs nothing. Do not let a software salesman convince you that typing a number is a business crisis.",
        "Where a proper butcher shop EPOS starts earning its keep is multi-counter shops, deli sidelines with barcoded goods, or anyone doing serious volume in made-up products like pies and BBQ packs. At that point item-level reports become genuinely useful; our [retail POS guide](/pos-systems/retail-shops) territory covers the trade-offs, or see the options at [compare POS systems](/compare-pos-systems)."
      ]
    },
    {
      heading: "Keep the cash trade too",
      paragraphs: [
        "Your older regulars are not a problem to be migrated; they are the backbone of the till. Take both. A card reader next to the cash drawer is an addition, not a replacement, and no butcher should be nudging a forty-year customer into contactless against their will.",
        "Legally, you can run the counter however you like: businesses in the UK can refuse cash or refuse cards as they choose. But a butcher's trade is relationships, and the winning answer is almost always 'we take everything'. Cash for Ethel, tap for her grandson.",
        "There is one genuine cost to keeping cash: counting, banking and the trip to a branch that keeps moving further away. Factor that time in honestly when you compare it to card fees, because cash handling was never actually free."
      ]
    },
    {
      heading: "Christmas orders and deposits",
      paragraphs: [
        "December is the trade's Wembley final, and the turkey order book is a pile of promises. A deposit turns a promise into a commitment. Taking £20 down on a £90 turkey order, by card at the counter or by a payment link sent when the order is placed, filters out the no-shows before you have bought the birds.",
        "Payment links shine here: the customer orders by phone in November, you text a link for the deposit, and the balance settles on collection. No card details read out over the phone, no awkwardness. We cover the mechanics in our guide to [taking deposits](/blog/taking-deposits-small-business).",
        "Keep deposit terms short and written: amount, what it secures, and the collection date. Card deposits also leave a clean record if there is ever a dispute, which a scribbled order book does not."
      ]
    },
    {
      heading: "Hygiene, speed and the contactless bonus",
      paragraphs: [
        "There is a small, unglamorous benefit worth naming: contactless means no handling coins between serving cuts of meat. Gloves on, customer taps, nobody exchanges anything. Post-2020, plenty of customers quietly prefer it too.",
        "Speed matters at the Saturday queue just as it does in a takeaway. A tap is faster than change from a twenty, and the queue moving briskly is part of why people keep coming to a busy counter. The £100 contactless card cap rarely bites at a butcher's; a phone wallet covers the big Christmas order anyway, uncapped.",
        "None of this requires ripping out how the shop works. Reader by the till, prices typed in, cash drawer still there. Evolution, not renovation."
      ]
    },
    {
      heading: "Fee maths when margins are thin",
      paragraphs: [
        "Butchery margins are tight, so let us do the sums straight. On a £12 basket, 1.69% is 20p. On £800 of card takings a day, fees run £13.52 at 1.69% or £14.00 at 1.75%; call it roughly £80-£85 over a six-day week if virtually everything went to card, and in reality your cash trade keeps it lower.",
        "Against that, weigh the sales you stop losing. One extra £15 customer a day, won because you take cards, more than covers the day's fees on its own. And cash has carrying costs too: staff time counting, banking fees, and the occasional till discrepancy nobody can explain.",
        "If your card volume grows past a few thousand pounds a week, run the numbers again: SumUp's Payments Plus from 0.99% and quote-based providers can undercut flat rates at volume. Five minutes on the [fee calculator](/card-machine-fee-calculator) with your real takings settles it. Who should walk away from cards entirely? Only a butcher planning to retire before their customers do."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best card machine for a butcher's shop?",
      a: "For most independent butchers, a SumUp (1.69% flat, £19 reader) or Square (1.75%, £19, with free POS software and daily reports) covers the counter with no contract. Busier multi-counter shops with established card volume should also price quote-based terminals from Dojo or Worldpay."
    },
    {
      q: "Do butchers need a till that connects to the scales?",
      a: "Usually not. Integrated scale-and-EPOS systems are built and priced for supermarkets. Most independent butchers weigh the item, read the price off the scale and type it into the reader, which adds about two seconds per sale and costs nothing extra."
    },
    {
      q: "How much do card fees cost a butcher per day?",
      a: "On £800 of card takings, about £13.52 a day at 1.69% or £14.00 at 1.75%. A single extra customer a day won by accepting cards typically covers that. If weekly card volume grows large, quote-based rates or SumUp's Payments Plus from 0.99% can bring the percentage down."
    },
    {
      q: "Should butchers take deposits on Christmas orders by card?",
      a: "Yes. A card deposit, taken at the counter or by a payment link texted to the customer, commits them to the order before you buy stock. Keep terms simple and written: deposit amount, what it secures and the collection date. Card records also help if anything is disputed."
    }
  ],
  relatedPosts: ["taking-deposits-small-business", "true-cost-of-taking-cash", "can-a-business-refuse-cash-uk"],
  relatedLinks: [
    { label: "Compare card machines", href: "/compare-card-machines" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" }
  ]
},
{
  slug: "pos-system-for-bakeries",
  title: "POS Systems for Bakeries: Morning Rush, Wholesale and Counting the Trays",
  excerpt: "Bakery POS systems compared: one-tap speed for the 7am rush, fee maths on low-ticket sales, wholesale invoicing and end-of-day reports that cut waste.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/pos-system-for-bakeries.webp",
  featuredAlt: "Freshly baked bread on a sunlit bakery counter",
  intro: "A bakery POS system has one job above all others: keep the 7am queue moving while half your customers are still asleep on their feet. Bakeries are a strange retail case, with tiny ticket sizes, a brutal morning peak, a wholesale side nobody talks about, and stock that becomes worthless at closing time. This guide covers the till setup, the card fee maths on a £3.20 sale, and why the free software tier is usually all a bakery needs.",
  sections: [
    {
      heading: "The 7am rush: one-tap bestsellers or bust",
      paragraphs: [
        "Bakery trade is absurdly front-loaded. The commuters between 7am and 9am can be half the day's takings, and every one of them wants the same six things: a loaf, a croissant, a coffee, a bacon roll. Your till should sell those in one tap each.",
        "This is the real test of a bakery POS: how fast can a half-trained Saturday assistant ring up a sourdough and a flat white with a queue out the door? Big bright item buttons for your top sellers, a second page for everything else. If ringing up a sale takes more taps than making the coffee, the software has failed.",
        "Free POS apps handle this well now. Square's free software with a £19 reader gives you item grids, modifiers for the coffee orders, and daily reports, with no monthly fee. Start there before paying for anything; our roundup of [free POS software](/blog/free-pos-software-uk) covers the options."
      ]
    },
    {
      heading: "Low tickets and fee pennies: the honest maths",
      paragraphs: [
        "Bakery ticket sizes are small, so people worry the card fees eat them alive. Here is the actual arithmetic: a £3.20 croissant-and-coffee at SumUp's 1.69% costs 5p in fees. At Square's 1.75%, 6p. On £600 of card takings a day, you pay roughly £10.14-£10.50, and you can check your own volumes on the [fee calculator](/card-machine-fee-calculator).",
        "Now weigh the counter speed. Contactless taps clear in seconds and never need change from a fiver. At 8am, throughput is money: two more customers served per busy hour, at a £4 average, is £8 an hour, which dwarfs the fee bill for the whole morning.",
        "If your card volume grows serious, SumUp's Payments Plus tier from 0.99% cuts the percentage, and quote-based providers like Dojo compete at higher volumes. But for a single-counter bakery, flat-rate and no contract is the right starting shape."
      ]
    },
    {
      heading: "The wholesale side: cafes, invoices and pay-by-link",
      paragraphs: [
        "Plenty of bakeries quietly run a second business before the shop opens: trays of bread and pastries to the cafes and delis nearby. That is invoiced trade, not counter trade, and it needs different payment plumbing.",
        "The old pattern, monthly invoices settled by cheque or eventually-transfer, ties up your cash in other people's fridges. Better: invoices with a payment link attached, so the cafe owner pays by card in ten seconds, or a [virtual terminal](/guides/what-is-a-virtual-terminal) for taking a card payment over the phone. Square bundles invoicing free with its POS, which keeps shop and wholesale money in one set of reports.",
        "One honest note: card fees on invoiced wholesale trade are a real cost at scale, and long-standing accounts may be better on bank transfer or Direct Debit. Use payment links to kill late payment on the accounts that drag, not necessarily on the ones that pay like clockwork."
      ]
    },
    {
      heading: "Counting the trays: reports that cut waste",
      paragraphs: [
        "Unsold bread at 5pm is money in the bin, and waste is the bakery margin-killer nobody's till used to measure. A POS that tracks item-level sales changes that: the end-of-day report tells you that you sell 40 white bloomers on Fridays and 24 on Tuesdays, so you stop baking Friday quantities on a Tuesday.",
        "You do not need inventory software with batch tracking and supplier modules. You need two numbers per product: baked and sold. The till gives you sold; a pencil gives you baked. Compare them for a fortnight and your bake sheet almost writes itself.",
        "The same reports catch the quiet winners. If the till says cheese twists sell out by 10am every single day, that is not a stock problem, it is an underbaking problem wearing a disguise. Data from a free till, acted on weekly, is worth more than any premium software module."
      ]
    },
    {
      heading: "Market stalls and satellite pitches",
      paragraphs: [
        "Bakeries travel well: a Saturday farmers' market stall or a station pop-up can add a serious slice of weekly revenue with stock you were baking anyway. The payment kit just needs to be portable and independent of shop Wi-Fi.",
        "A second reader on the same account handles it. A standalone SIM reader like the SumUp Solo (~£79) works anywhere with mobile signal and does not care whose phone is at the stall. We have a full guide to [card readers for market traders](/blog/best-card-readers-market-traders) covering battery life and signal tactics.",
        "Keep the stall on the same POS account as the shop and your item reports merge, so you learn whether the market crowd buys the same things the shop crowd does. Spoiler from every baker we have compared notes with: they do not, and that is useful to know."
      ]
    },
    {
      heading: "What to buy, by bakery type",
      paragraphs: [
        "Single-counter high-street bakery: Square's free POS on a tablet with a £19 reader, or SumUp at 1.69% if the lowest flat rate matters more to you than software depth. No contracts, under £100 all-in, running this week. Browse [no-monthly-fee readers](/card-readers-no-monthly-fee) for the field.",
        "Bakery-cafe hybrid with tables and coffee volume: you are edging into cafe territory, where table management and modifiers matter more; our [cafe POS guide](/pos-systems/cafes) covers that shape of business properly.",
        "Who should pay for premium POS software? Multi-site bakeries, serious wholesale operations needing proper account management, and anyone whose stock and staff complexity has genuinely outgrown the free tiers. Everyone else is buying features they will never tap. Check the current terms of whatever tier you choose, as free-plan limits shift over time."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best POS system for a bakery?",
      a: "For most single-site bakeries, Square's free POS software with a £19 reader is the strongest start: one-tap item buttons for the morning rush, daily sales reports and free invoicing for wholesale accounts, with no monthly fee. SumUp at 1.69% flat is the pick if the cheapest rate is the priority."
    },
    {
      q: "Are card fees worth it on small bakery sales?",
      a: "Yes. A £3.20 sale costs 5-6p in fees at flat rates of 1.69-1.75%, and contactless keeps the morning queue moving faster than cash and change. Around £600 of daily card takings costs roughly £10 in fees, typically less than the value of the extra customers served at peak."
    },
    {
      q: "How should a bakery handle wholesale payments from cafes?",
      a: "Attach a payment link to every invoice so accounts can pay by card in seconds, and chase less. For reliable long-standing accounts, bank transfer or Direct Debit avoids card fees on volume. A virtual terminal covers card payments taken over the phone."
    },
    {
      q: "Can a bakery POS help reduce waste?",
      a: "Yes, through end-of-day item reports. Comparing what was baked against what the till says sold, per product and per weekday, shows exactly where you are overbaking. Two weeks of that data is usually enough to rewrite the bake sheet and cut binned stock noticeably."
    }
  ],
  relatedPosts: ["free-pos-software-uk", "best-card-readers-market-traders", "cafe-overpaying-card-fees"],
  relatedLinks: [
    { label: "POS systems for cafes", href: "/pos-systems/cafes" },
    { label: "Compare POS systems", href: "/compare-pos-systems" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" }
  ]
},
{
  slug: "card-machine-for-florists",
  title: "Card Machines for Florists: Shop, Weddings and Phone Orders",
  excerpt: "Card machines for florists: counter taps, phone orders for funeral and distance work, wedding deposits, and a backup reader plan for Valentine's Day.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-for-florists.webp",
  featuredAlt: "Florist arranging a bouquet in a flower shop",
  intro: "A card machine for florists has to cover three quite different businesses that happen to share a shop: walk-in counter sales, phone orders for funerals and far-away relatives, and wedding work with deposits and balances spread over months. Most payment advice treats florists like any other retailer and misses two of the three. This guide covers the right tool for each revenue stream, plus the backup plan for the two days a year that make your quarter.",
  sections: [
    {
      heading: "Three revenue streams, three payment modes",
      paragraphs: [
        "Counter sales want a fast contactless tap. Phone orders want a way to take a card you cannot see. Weddings want deposits, balances and a paper trail. No single gadget does all three, but one provider account with the right features does, which is the actual buying decision.",
        "Get this wrong and the failure is invisible: the funeral order that went to the florist who could take payment over the phone, the wedding enquiry that drifted because paying you was awkward. Flowers are distress-and-occasion purchases; the buyer rarely gives you a second chance to make paying easy.",
        "The good news is that the app-based providers bundle all three modes cheaply now. A £19 reader for the counter, payment links and a virtual terminal in the same account, no monthly fee. Compare the current options on our [card machine comparison](/compare-card-machines)."
      ]
    },
    {
      heading: "The counter: keep it simple and fast",
      paragraphs: [
        "For walk-in trade, a florist is a normal shop: a reader by the till, contactless for the £30 bouquet, chip and PIN or a phone wallet for anything over the £100 card cap. SumUp at 1.69% flat with a £19 reader is the cheapest simple setup; Square at 1.75% adds free POS software with item buttons and sales reports.",
        "Fee maths on a typical day: £500 of card takings costs £8.45 at 1.69% or £8.75 at 1.75%. On a £45 hand-tied bouquet, the fee is 76-79p. Nobody ever lost a florist business to 79p; they lose it to the customer who could not pay at all.",
        "Quote-based providers like Dojo or Worldpay only start making sense with serious volume, and their contracts deserve a careful read. For a single-shop florist, contract-free is the right default; see the [no-monthly-fee reader options](/card-readers-no-monthly-fee) before considering anything with a monthly bill."
      ]
    },
    {
      heading: "Phone orders: funerals, distance and the virtual terminal",
      paragraphs: [
        "A huge slice of florist trade arrives by phone from someone who will never enter the shop: the son in Australia ordering funeral flowers, the customer sending a birthday bouquet across town. You need to take their card without them present, and there are two proper tools for it.",
        "A [virtual terminal](/guides/what-is-a-virtual-terminal) lets you key the card details into a secure screen while the customer reads them out, which suits older callers and time-sensitive funeral orders where you want payment confirmed on the call. Pay-by-link, texted or emailed, lets them pay in their own time and works beautifully for the Australia case. Never write card numbers on the order pad; it breaches card-handling rules and it is how details get stolen.",
        "Be aware card-not-present payments carry a slightly higher fee than counter taps and a little more chargeback exposure. Keep the order details, delivery confirmation and a photo of the arrangement; for funeral and distance work, that small habit settles almost any dispute."
      ]
    },
    {
      heading: "Weddings: deposits, balances and not funding someone else's big day",
      paragraphs: [
        "Wedding work is quoted months ahead, with your money at risk in stock and time. The standard structure is a booking deposit on confirmation and the balance a couple of weeks before the day, and both legs work perfectly as payment links attached to the quote and the final invoice. Our guide to [taking deposits](/blog/taking-deposits-small-business) covers the terms to put in writing.",
        "Card payments suit both sides here. The couple gets dispute rights and a clean record; you get committed customers and money that arrives before the flower market does its damage to your float. Put the deposit amount, what it secures, and the cancellation terms in the written quote every single time, and check your provider's current terms on how larger payments and disputes are handled.",
        "One practical note: wedding balances often exceed £100, so a contactless card tap will not cover them in person. Chip and PIN, phone wallets (uncapped) or a payment link all will."
      ]
    },
    {
      heading: "Valentine's Day and Mother's Day: build in a backup",
      paragraphs: [
        "Two days a year, a florist does a normal week's trade before lunch. Peak-day resilience is not paranoia, it is planning: if your only reader dies or the shop internet drops at 11am on Valentine's Day, you are turning away your best hour of the year.",
        "The fix costs little. A second £19 reader on the same account sits in the drawer as a spare, and a SIM-equipped standalone reader like the SumUp Solo (~£79) keeps taking payments on mobile signal even if the broadband dies. If your phone supports Tap to Pay, that is a third fallback already in your pocket.",
        "Peak days also stress the queue, so borrow the takeaway trick: pre-made bouquets at set prices as one-tap till buttons, taps not cash, and one person dedicated to wrapping. The card machine is rarely the bottleneck; make sure it stays that way."
      ]
    },
    {
      heading: "Deliveries and payment links on the road",
      paragraphs: [
        "Florist delivery creates odd payment moments: the corporate account that wants a weekly invoice, the customer who adds a vase when the driver calls ahead. Payment links handle both without any hardware in the van, and an invoice with a pay-now link gets settled far faster than one ending in a sort code.",
        "For regular corporate work, hotels, restaurants, offices with weekly arrangements, links attached to invoices keep the cash coming without chasing. For genuinely reliable long-term accounts, bank transfer avoids fees on volume; save the links for the accounts that pay slowly.",
        "If you also sell at markets or wedding fairs, the same portable reader covers it. One account, every channel, one set of reports."
      ]
    },
    {
      heading: "Perishable stock: why the reports matter more than you think",
      paragraphs: [
        "Flowers are the most perishable stock on the high street; what does not sell this week is compost. That makes sales reports unusually valuable: knowing that lilies outsell freesias two-to-one in your shop, and that Tuesday is dead, directly changes what you buy at the market and how much of it.",
        "Free POS software gives you this for nothing. Ring sales in as items, not lump sums, and the end-of-week report becomes your buying list. It takes slightly more discipline at the till and pays for itself in the first month of less-binned stock. Our [retail POS guide](/pos-systems/retail) covers when a florist has outgrown the free tier.",
        "Who should walk away from all this? A florist doing purely cash-and-carry market trade with no phone or wedding work could survive on a bare reader alone. Everyone else, which is nearly everyone, should set up all three payment modes this month, because the next funeral order will not wait for you to get organised."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best card machine for a florist?",
      a: "A provider that covers all three florist revenue streams from one account: a £19 counter reader (SumUp at 1.69% flat or Square at 1.75% with free POS software), plus payment links and a virtual terminal for phone orders and wedding deposits. Single-shop florists rarely need a quote-based contract."
    },
    {
      q: "How can florists take payment for phone orders?",
      a: "Use a virtual terminal to key in card details the customer reads out, or send a payment link by text or email. Both are secure and included by most app-based providers. Never write card numbers down. Expect a slightly higher fee on card-not-present payments than on counter taps."
    },
    {
      q: "How should florists take wedding deposits?",
      a: "Take a booking deposit by payment link when the quote is confirmed and the balance by link two weeks or so before the wedding. Put the deposit amount, what it secures and the cancellation terms in the written quote, and check your provider's terms on handling larger payments."
    },
    {
      q: "What happens if a florist's card machine fails on Valentine's Day?",
      a: "Without a backup, you lose sales on the biggest trading day of the year, so plan for it: keep a spare £19 reader on the same account, or a SIM-based reader like the SumUp Solo (~£79) that works on mobile signal if the broadband fails. Tap to Pay on a phone is a third fallback."
    }
  ],
  relatedPosts: ["taking-deposits-small-business", "card-machine-for-hairdressers", "card-machines-seasonal-businesses"],
  relatedLinks: [
    { label: "Compare card machines", href: "/compare-card-machines" },
    { label: "What is a virtual terminal?", href: "/guides/what-is-a-virtual-terminal" },
    { label: "POS systems for retail shops", href: "/pos-systems/retail" }
  ]
},
{
  slug: "pos-system-for-retail-shops-uk",
  title: "POS Systems for Retail Shops: Stock, Staff and the Saturday Queue (UK 2026)",
  excerpt: "Retail POS is a stock decision first and a payments one second. What a small UK shop needs, how far free tiers go, and when paid retail POS earns its keep.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 9,
  featuredImage: "/images/blog/pos-system-for-retail-shops-uk.webp",
  featuredAlt: "Shop owner welcoming customers at her boutique doorway",
  intro: "A retail POS system for a UK shop is a stock decision first and a payments decision second. Any £19 reader can take the money; the real question is whether your till knows what's on the shelf, what's running low, and what walked out the door without being paid for. This guide covers what a small shop actually needs from a shop till system, how far free software stretches, and when paid retail tiers like Square for Retail, Epos Now or Lightspeed genuinely earn their monthly fee.",
  sections: [
    {
      heading: "Why a retail POS system is a stock decision first",
      paragraphs: [
        "In a cafe, the POS mostly needs to fire orders at the kitchen. In a shop, the POS is your stock brain: it should know you have four of that candle left, that the blue jumpers sell and the green ones don't, and that it's time to reorder before the weekend. Get that wrong and no amount of slick payment hardware saves you.",
        "The three features that separate a retail POS from a generic till are barcode scanning, low-stock alerts and purchase orders. Scanning makes the Saturday queue move and kills mis-keyed prices. Alerts and purchase orders mean you reorder from data rather than from squinting at a shelf.",
        "If you're comparing options, start from stock features and work backwards to price — not the other way round. Our [POS comparison](/compare-pos-systems) is built exactly that way."
      ]
    },
    {
      heading: "What a small shop actually needs from a shop till system",
      paragraphs: [
        "Be honest about your size. A shop with 80 product lines and one till has very different needs from one with 3,000 SKUs across two branches. Most small shops need less than the sales demos suggest.",
        "The genuinely useful core list looks like this:"
      ],
      bullets: [
        "Barcode scanning at the till, with a cheap USB or Bluetooth scanner",
        "A product catalogue with variants (size, colour) so one jumper isn't six separate products",
        "Live stock counts that fall when you sell and rise when you receive deliveries",
        "Low-stock alerts and simple reorder reports",
        "End-of-day sales reports by product, category and staff member",
        "Staff logins, so you know who rang what through"
      ]
    },
    {
      heading: "Free POS software: how far it gets a small shop",
      paragraphs: [
        "Further than you'd think. [Square](/reviews/square) gives you free POS software with a full product catalogue, basic stock counts, low-stock alerts and a free online store, and you only pay the 1.75% transaction fee — the reader itself is £19. SumUp's equivalent is leaner but its 1.69% flat rate is the cheapest headline fee going, with no contract.",
        "For a shop with a few hundred products, one till and no burning ambition to open a second branch, the free tier is not a compromise — it's the right answer. You'd be paying a monthly fee for features you'd never open.",
        "Who should walk away from free tiers: shops that need proper purchase ordering, supplier management, stocktake tools with variance reports, or multi-location stock transfers. That's where the paid products live."
      ]
    },
    {
      heading: "When paid retail POS earns its keep",
      paragraphs: [
        "Square for Retail (the paid tier), [Epos Now](/reviews/epos-now) and [Lightspeed](/reviews/lightspeed) all add the serious inventory layer: purchase orders sent straight to suppliers, cost-of-goods tracking so you know your real margin per product, barcode label printing, and stocktake tools that tell you what's missing rather than just what's there.",
        "The maths is simple enough. If a paid tier costs you £50-£70 a month, it needs to save you more than that in dead stock, missed reorders and time. For a shop turning over £15,000 a month with 1,500 SKUs, it usually does. For a shop turning over £4,000 a month with 200 SKUs, it usually doesn't.",
        "Lightspeed and Epos Now pricing varies by plan and hardware bundle, so treat any number you see online as a starting point and [get a current quote](/get-pos-quotes) — then check the contract length before you sign anything."
      ]
    },
    {
      heading: "Selling online too? Sync your stock or suffer",
      paragraphs: [
        "The moment you sell the same stock in-store and online, stock sync stops being a nice-to-have. Selling your last one twice — once over the counter, once on the website — means a refund, an apology email and a one-star review, all for one candle.",
        "Square's free online store shares stock with its POS automatically, which is the cheapest working version of this. If the website is the bigger half of your business, [Shopify POS](/reviews/shopify-pos) flips the logic: the ecommerce platform is the brain and the till is the accessory, which suits online-first brands opening a physical unit.",
        "Whichever way round you go, pick one system of record for stock. Two systems reconciled by hand every Sunday night is how errors breed."
      ]
    },
    {
      heading: "Shrinkage: the number you can't see without a POS",
      paragraphs: [
        "Shrinkage — stock that leaves without being paid for, whether by theft, breakage or till error — is invisible on a traditional till. A retail POS makes it visible: the system says you should have twelve, the shelf says nine, and now you have a number to investigate instead of a vague feeling.",
        "Regular partial stocktakes beat one heroic annual count. Count your highest-value or fastest-moving category each week and you'll spot patterns — a shelf near the door, a particular shift — while they're still cheap to fix.",
        "Staff logins matter here too, and not because you should assume the worst of anyone. Clear per-person records protect honest staff as much as they deter the other kind."
      ]
    },
    {
      heading: "The Saturday queue test — and what it all costs",
      paragraphs: [
        "Whatever you choose, apply the Saturday queue test: can a new Saturday member of staff scan, take payment and move to the next customer in under a minute without asking for help? If the answer is no, the software is too clever for your shop.",
        "On costs: a £19 Square reader and free software gets a small shop trading properly for under £25 all-in, then 1.75% per sale. A quote-based provider like Dojo or Worldpay may suit higher-volume shops, but never sign on the headline rate alone — run your own numbers through our [fee calculator](/card-machine-fee-calculator) first.",
        "For a deeper dive into which systems suit which kind of shop, our [retail POS guide](/pos-systems/retail) compares the main options side by side. Seasonal ranges are one more reason to care: a POS that shows last spring's sellers makes this spring's buying decisions for you."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best POS system for a small retail shop in the UK?",
      a: "For most small shops, Square's free POS with the £19 reader is the best starting point: full product catalogue, stock counts, low-stock alerts and a free online store, with 1.75% per transaction and no monthly fee. Move to a paid retail tier like Square for Retail, Epos Now or Lightspeed only when you need purchase orders, margin tracking or multi-site stock."
    },
    {
      q: "Do I need barcode scanning in my shop till system?",
      a: "If you have more than a few dozen product lines, yes. Scanning speeds up the queue, eliminates mis-keyed prices and keeps stock counts accurate, and a basic USB scanner costs very little. Shops selling a handful of unbarcoded items — a gallery, say — can manage fine with on-screen buttons."
    },
    {
      q: "How much does a retail POS system cost per month?",
      a: "Free tiers from Square and SumUp cost £0 a month — you pay only transaction fees of 1.75% or 1.69% plus the reader. Paid retail tiers typically run tens of pounds a month depending on plan and hardware, and quote-based providers like Epos Now vary widely, so always get a current quote and check the contract length."
    },
    {
      q: "Can a retail POS system reduce shrinkage?",
      a: "It can't stop theft, but it makes losses visible. Live stock counts plus regular partial stocktakes tell you exactly what's missing and when, and staff logins show who was on the till. That turns a vague suspicion into a specific, fixable problem."
    }
  ],
  relatedPosts: ["what-is-an-epos-system", "how-much-does-a-pos-system-cost-uk", "epos-vs-traditional-till"],
  relatedLinks: [
    { label: "POS systems for retail shops", href: "/pos-systems/retail" },
    { label: "Compare POS systems", href: "/compare-pos-systems" },
    { label: "Lightspeed review", href: "/reviews/lightspeed" }
  ],
},
{
  slug: "card-machine-for-dog-groomers",
  title: "Card Machines for Dog Groomers: Bookings, No-Shows and Muddy £45 Appointments",
  excerpt: "Dog groomers lose more to no-shows than to card fees. How deposits, card-on-file and a cheap reader protect £45 appointments — including in the van.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-for-dog-groomers.webp",
  featuredAlt: "Two golden retriever puppies sitting on the grass",
  intro: "Choosing a card machine for dog groomers is the easy bit — a £19 reader takes the money at pickup just fine. The expensive problem in grooming is the appointment that never turns up: an empty two-hour slot you can't resell at 9am. So this guide starts where the money leaks — bookings, deposits and no-shows — then covers the reader itself, mobile van setups, and taking payment with wet hands and a wriggling spaniel.",
  sections: [
    {
      heading: "Grooming is a booking problem before it's a card machine problem",
      paragraphs: [
        "Dog grooming is appointment trade, which means it has the same economics as hairdressing: your stock is time, and unsold time expires at the end of the day. The logic we set out for salons in our [salon POS guide](/blog/pos-system-for-salons-uk) applies almost word for word — swap highlights for a full groom and the maths is identical.",
        "That means the most valuable thing your payment setup can do isn't tap-to-pay at pickup. It's taking a deposit at the moment of booking, so the customer has skin in the game before they can forget about Tuesday.",
        "If you're picking software, look at booking systems with payments built in before you look at standalone readers — our [salon and grooming POS page](/pos-systems/salons) covers the options."
      ]
    },
    {
      heading: "The no-show maths at £40-60 a slot",
      paragraphs: [
        "Say a full groom is £50 and you get three no-shows a month. That's £150 a month, or £1,800 a year, gone — not discounted, gone, because a cockapoo slot at 2pm on a Tuesday cannot be resold at 1:55pm.",
        "Now compare that with card fees. Taking a £45 payment on SumUp at 1.69% costs you 76p; on Square or Zettle at 1.75% it's 79p. You'd need to take well over two thousand card payments to lose as much in fees as three no-shows a month cost you.",
        "Groomers who agonise over the 0.06% difference between providers while taking bookings on trust are guarding the wrong door. Fix no-shows first."
      ]
    },
    {
      heading: "Deposits and card-on-file for your regulars",
      paragraphs: [
        "A £15 deposit at booking transforms behaviour. People who've paid something show up, or at least cancel with enough notice for you to refill the slot. The card fee on that £15 is about 25p — cheap insurance on a £50 appointment.",
        "For regulars on six-weekly grooms, card-on-file is even smoother: the customer authorises you to store their card, and you charge it per visit or take a cancellation fee under your stated policy. Be upfront about the policy in writing when they book — a surprise charge is how you lose a good regular and gain a chargeback.",
        "Check your provider's current terms on stored cards and cancellation charges before relying on them, and always get the customer's clear agreement to the policy first."
      ]
    },
    {
      heading: "Mobile groomers: the van setup",
      paragraphs: [
        "If you groom from a van, your card machine has to work on a farm track with one bar of signal. Bluetooth readers that pair with your phone are fine most of the time, but a reader with its own SIM — like the SumUp Solo at around £79 — takes payment without your phone being involved at all, which is one less thing to fail at the end of a muddy day.",
        "Either way, avoid anything with a monthly rental. Mobile grooming rounds have quiet weeks, and a [no-monthly-fee reader](/card-readers-no-monthly-fee) means a quiet week costs you nothing in standing charges.",
        "Payment links are your dead-zone backup: if the reader can't connect at the gate, text the customer a link and they pay from their sofa. Same providers, same rough fees, zero signal required at your end."
      ]
    },
    {
      heading: "Retail add-ons: the £12 shampoo at pickup",
      paragraphs: [
        "Pickup is a selling moment. The dog looks magnificent, the owner is pleased, and the shampoo you used is sitting right there. A card reader with a simple product catalogue lets you add a £12 shampoo or a £6 brush to the groom in two taps instead of fumbling a separate cash transaction.",
        "The margins on retail add-ons are usually better than the margins on your labour, so this is genuinely worth setting up rather than a gimmick. Square's free POS handles a small product list well; [SumUp](/reviews/sumup) covers the basics too.",
        "Keep the list short — five products you believe in beat thirty gathering dust on a shelf."
      ]
    },
    {
      heading: "Wet hands, muddy dogs and contactless",
      paragraphs: [
        "Practical point that grooming shares with almost no other trade: your hands are wet half the day and occupied by an animal the other half. Contactless is not a luxury here — it's the difference between a ten-second payment and putting the dog down to type a PIN.",
        "Most grooms sit comfortably under the £100 contactless card cap, so a plain tap covers you. For anything bigger — a full groom plus a pile of retail, or a multi-dog household — phone wallets like Apple Pay and Google Pay have no cap at all, so the customer taps their phone and you're done.",
        "One dry tip: mount the reader somewhere the dog can't reach. Readers survive splashes better than they survive teeth."
      ]
    },
    {
      heading: "Which card machine should a dog groomer actually buy?",
      paragraphs: [
        "Salon-based groomer with regulars: a booking system that takes deposits, plus a £19 SumUp or Square reader for pickup. The booking software matters more than the reader — the reader is nearly a commodity at this level.",
        "Mobile groomer: SumUp Solo (around £79) for its own SIM, payment links as backup, and no monthly fees anywhere. Who should walk away from all of this: nobody, honestly — but if a sales rep is pushing a contracted terminal with monthly rental at your volume, walk away from them specifically.",
        "Run your own numbers through the [fee calculator](/card-machine-fee-calculator) with your real appointment values before deciding — at £45 a groom, the differences between flat-rate providers amount to pennies."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best card machine for dog groomers?",
      a: "For salon-based groomers, a £19 SumUp (1.69%) or Square (1.75%) reader paired with booking software that takes deposits covers everything. Mobile groomers should look at a SIM-equipped reader like the SumUp Solo at around £79 so payments don't depend on phone signal at the customer's gate."
    },
    {
      q: "Should dog groomers take deposits for bookings?",
      a: "Yes. A £15 deposit costs about 25p in card fees and dramatically cuts no-shows, which at £40-60 a slot are the biggest leak in a grooming diary. State the deposit and cancellation policy in writing at booking so there are no surprises."
    },
    {
      q: "Can mobile dog groomers take card payments without signal?",
      a: "A reader with its own SIM helps in weak-signal areas, but nothing works with zero connectivity. The practical backup is a payment link texted to the customer, which they pay from home on their own connection. Some readers can also queue transactions briefly — check your provider's current terms before relying on it."
    },
    {
      q: "How much are card fees on a £45 grooming appointment?",
      a: "On SumUp's 1.69% flat rate it's about 76p; on Square or Zettle at 1.75% it's about 79p. Over a full week of grooms that's a few pounds — far less than a single no-show costs you, which is why deposits matter more than shaving fractions off the rate."
    }
  ],
  relatedPosts: ["pos-system-for-salons-uk", "card-machine-for-hairdressers", "taking-deposits-small-business"],
  relatedLinks: [
    { label: "POS systems for salons and groomers", href: "/pos-systems/salons" },
    { label: "Card readers with no monthly fee", href: "/card-readers-no-monthly-fee" },
    { label: "SumUp review", href: "/reviews/sumup" }
  ],
},
{
  slug: "card-payments-bnb-guest-houses",
  title: "Card Payments for B&Bs and Guest Houses: Deposits, No-Shows and Checkout",
  excerpt: "How B&Bs and guest houses should take card payments: deposits and pre-auths, virtual terminals for phone bookings, and beating OTA commission on direct stays.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 9,
  featuredImage: "/images/blog/card-payments-bnb-guest-houses.webp",
  featuredAlt: "Host attending to guests at a small hotel",
  intro: "Card payments for a B&B or guest house are a different animal from a shop's. Your average transaction is £100-plus, half your bookings arrive by phone or through Booking.com, and your worst enemy isn't a slow checkout queue — it's the guest who never arrives. This guide covers deposits and card-on-file, virtual terminals for phone bookings, chargebacks on no-shows, and why taking direct bookings on your own card setup quietly pays for itself.",
  sections: [
    {
      heading: "OTA bookings vs direct: who takes the card matters",
      paragraphs: [
        "When a guest books through Booking.com or a similar site, the platform typically handles the card online and you receive a payout — convenient, but it comes bundled with commission that commonly runs around 15% or more of the booking value, depending on your agreement. On a £180 two-night stay, that's in the region of £27 gone before you've cooked a single breakfast.",
        "Take the same booking directly and your card fee at SumUp's 1.69% is £3.04, or £3.15 at Square's 1.75%. The gap between roughly £27 and £3 is the entire business case for having your own card setup and gently steering repeat guests to book direct.",
        "You'll never escape the OTAs entirely — they're your shop window — but every returning guest converted to direct booking is real money. Check your OTA agreement's terms on encouraging direct bookings before you get creative."
      ]
    },
    {
      heading: "Deposits and card-on-file: your no-show insurance",
      paragraphs: [
        "A no-show at a six-room guest house isn't an inconvenience, it's a sixth of your night's revenue. The fix is taking card details at booking — either charging a deposit immediately or securing the card against your cancellation policy.",
        "A one-night deposit on a £90 room costs you £1.52 in fees at 1.69% and changes guest behaviour completely: people who've paid something either turn up or cancel in time for you to resell the room. For card-on-file with a charge only if they no-show, your cancellation policy must be stated clearly at booking and ideally confirmed in writing.",
        "Check your provider's current terms on stored card details and delayed charges — the rules on what you can charge and when vary, and getting it wrong invites a dispute you'll lose."
      ]
    },
    {
      heading: "Phone bookings and the virtual terminal",
      paragraphs: [
        "Plenty of guest house bookings still arrive by phone, often from guests who don't do apps. For those, you need a way to take a card without the card being present — that's a [virtual terminal](/guides/what-is-a-virtual-terminal): a secure webpage where you type in the card details the guest reads out.",
        "Never write card numbers on paper or in a notebook, however temporarily. It breaks card-handling rules, and a notebook of card numbers by the phone is a burglary away from a very bad month.",
        "The tidier alternative is a payment link texted or emailed to the guest, who enters their own details. It's more secure, it's less awkward than reading digits down the line, and it works for deposits too."
      ]
    },
    {
      heading: "Checkout: speed matters less than you think",
      paragraphs: [
        "Unlike a cafe, you have no queue. Checkout is two guests at 10am with their bags by the door, so terminal speed is irrelevant — what matters is that the amount is right, extras are included, and the payment just works first time.",
        "A £19 reader from SumUp or Square is genuinely enough hardware for most B&Bs. Who should walk away from that advice: larger guest houses processing serious volume year-round, where a quote from Dojo or Worldpay might beat flat rates — but never sign a long contract for a seasonal trade, and [compare your options](/compare-card-machines) before any sales call.",
        "One practical note: stays over £100 exceed the contactless card cap, so guests will insert and PIN — or tap a phone wallet, which has no cap. Neither slows you down meaningfully at checkout volume."
      ]
    },
    {
      heading: "Chargebacks on no-shows: paperwork wins",
      paragraphs: [
        "Charge a no-show fee and some guests will dispute it with their bank. You can win those disputes, but only with evidence: the booking confirmation showing your cancellation policy, proof the guest saw and accepted it, and your records of the no-show.",
        "This is why policy-at-booking matters so much. A policy stated on the confirmation email the guest accepted is evidence; a policy that lives only on a laminated card by the kettle is not. We cover the mechanics in our [chargebacks guide](/blog/chargebacks-uk-small-business).",
        "Keep it proportionate too. Charging the full stay for a cancellation made a fortnight out may be legal under your terms but it invites disputes and one-star reviews — many hosts charge the first night only, which guests accept as fair."
      ]
    },
    {
      heading: "Seasonal cash flow and the breakfast-extras tab",
      paragraphs: [
        "Most B&Bs earn eight months of the year and hibernate for four. That's the argument for no-monthly-fee providers: a contracted terminal at £15-20 a month costs you £60-80 across a dead winter for the privilege of sitting in a drawer. SumUp and Square cost precisely nothing in months you don't trade.",
        "For extras — the cream tea, the packed lunch, the bottle of wine at dinner — run a simple tab per room and settle it at checkout rather than tapping cards all week. One payment, one fee, one line on the guest's statement.",
        "Whichever provider you pick, run a realistic season through our [fee calculator](/card-machine-fee-calculator) using your actual average booking value. At £150-plus per transaction, small percentage differences add up faster than they do in a coffee shop."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best way for a B&B to take card payments?",
      a: "A no-monthly-fee reader (SumUp at 1.69% or Square at 1.75%, both with £19 readers) for checkout, plus payment links or a virtual terminal for phone bookings and deposits. Avoid contracted terminals with monthly rental unless you trade at volume year-round — seasonal closures make standing charges pure waste."
    },
    {
      q: "Can a guest house charge for a no-show?",
      a: "Yes, if your cancellation policy was clearly stated and accepted at booking and your card setup supports it — check your provider's current terms on stored cards and delayed charges. Keep evidence of the policy and the acceptance, because that's what wins the chargeback if the guest disputes it."
    },
    {
      q: "How do I take card payments for phone bookings?",
      a: "Use a virtual terminal, where you type the guest's card details into a secure page, or send a payment link by text or email so they enter details themselves. Never write card numbers down on paper — it breaches card-handling rules and creates real liability."
    },
    {
      q: "Is it cheaper to take direct bookings than Booking.com?",
      a: "Dramatically. OTA commission commonly runs around 15% or more depending on your agreement — roughly £27 on a £180 stay — while your own card fee on the same booking is about £3 at flat rates. Converting repeat guests to direct booking is one of the highest-value habits a small guest house can build."
    }
  ],
  relatedPosts: ["taking-deposits-small-business", "chargebacks-uk-small-business", "invoice-payments-vs-card-machine"],
  relatedLinks: [
    { label: "What is a virtual terminal?", href: "/guides/what-is-a-virtual-terminal" },
    { label: "Compare card machines", href: "/compare-card-machines" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" }
  ],
},
{
  slug: "contactless-donations-charities",
  title: "Contactless Donations for Charities: Tap-to-Donate Boxes That Actually Work",
  excerpt: "Cash tins are emptying because pockets are. How UK charities set up tap-to-donate — fixed-amount boxes vs £19 readers, Gift Aid, and fees on a £5 donation.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/contactless-donations-charities.webp",
  featuredAlt: "Volunteers sorting donations into boxes",
  intro: "Contactless donations for charities have gone from novelty to necessity, for one blunt reason: the people rattling the tin are willing, but their pockets are empty. Cash has drained out of everyday life, and a collection tin can't take a tap. The good news is that tap-to-donate doesn't require expensive kit — a £19 reader and a card showing a suggested amount will do the job for most small charities. Here's how to set it up honestly and cheaply.",
  sections: [
    {
      heading: "The cash tin problem, in one sentence",
      paragraphs: [
        "People still want to give; they just don't carry anything to give with. A volunteer with a tin outside the supermarket now meets a stream of warm smiles and genuinely empty pockets, and no amount of enthusiasm fixes that.",
        "The shift isn't about generosity declining — it's about the payment method disappearing. The charities holding up best are simply the ones that put a tap target where the tin used to be.",
        "That target can be a purpose-built donation box or an ordinary card reader. Both work, and the right choice mostly comes down to whether a human is standing next to it."
      ]
    },
    {
      heading: "Fixed-amount tap boxes vs a standard £19 reader",
      paragraphs: [
        "Purpose-built donation boxes are preset to an amount — tap, done, no volunteer needed — which makes them ideal for unattended spots like a museum foyer or church entrance. The trade-off is cost: dedicated units and their service plans cost real money, which is exactly what a small charity is trying not to spend.",
        "The budget version works almost as well when someone's present: a standard £19 SumUp or Square reader with a printed card beside it — Tap to donate £5. The volunteer keys £5 (or whatever the donor prefers), the donor taps, done. Same tap, same receipt, a fraction of the cost.",
        "Who suits which: unattended locations justify a dedicated box; attended collections, events and fairs are perfectly served by a [no-monthly-fee reader](/card-readers-no-monthly-fee). Small charities should exhaust the £19 option before signing anything with a service plan."
      ]
    },
    {
      heading: "Fees on donations: the honest arithmetic",
      paragraphs: [
        "Card fees apply to donations like any other payment. At [SumUp's](/reviews/sumup) 1.69% flat rate, a £5 donation costs about 8p in fees, so £4.92 reaches the charity; at Square's 1.75% it's about 9p. On a £20 donation you're looking at 34-35p.",
        "Is that acceptable? Compare the alternative: the £5 the donor didn't give because they had no cash. Losing 8p of £5 beats losing 100% of nothing, every single time.",
        "Be transparent about it. A small line — card fees mean about 98p in every £1 reaches us — costs you nothing and builds trust. Some providers have offered charity pricing at times, so it's worth asking yours directly rather than assuming the standard rate is the only option."
      ]
    },
    {
      heading: "Gift Aid: the bit contactless can't do on its own",
      paragraphs: [
        "Gift Aid adds 25p to every eligible £1 donated, but it needs a declaration with the donor's name, address and confirmation they're a UK taxpayer — and a silent tap captures none of that. This is the genuine weakness of tap-to-donate, and it deserves a workaround rather than a shrug.",
        "The practical fixes: paper declaration forms on the table next to the reader for donors with a minute to spare, or a QR code linking to a short online Gift Aid form they can complete later. Neither captures everyone, but every completed declaration is worth 25% more donation.",
        "For larger sums, steer donors to your online donation page instead, where Gift Aid capture is built into the flow. The tap box is for the £5s; the website is for the £50s."
      ]
    },
    {
      heading: "Events, fairs and street collections",
      paragraphs: [
        "Events are where portable readers earn their keep — a summer fair, a sponsored walk finish line, a bake sale. Everything in our [market traders guide](/blog/best-card-readers-market-traders) applies: battery life, signal, and keeping the payment moment quick.",
        "For outdoor pitches with dodgy signal, a reader with its own SIM (the SumUp Solo runs about £79) beats one that leans on a volunteer's phone hotspot. Charge everything the night before and bring a power bank — a dead reader at 2pm on fair day is a preventable tragedy.",
        "Remember the £100 contactless card cap exists but is irrelevant here; phone wallets are uncapped anyway, and if someone insists on donating more than £100 by card you will find a way."
      ]
    },
    {
      heading: "Governance basics: accounts, permissions and volunteers",
      paragraphs: [
        "Donations must land in the charity's own bank account, never a trustee's or volunteer's personal one — that's basic governance, and it's also what payment providers expect. When you sign up, register as the charity with its charity number; providers verify organisations, and requirements for charity accounts vary, so check with your provider and follow your regulator's guidance on handling funds.",
        "Note that [Zettle](/reviews/zettle) settles into a PayPal account, which your treasurer may or may not want in the mix — SumUp and Square pay into an ordinary bank account, which keeps the books simpler.",
        "Keep the setup boring and auditable: one account, named access for whoever manages it, and the app's transaction record shared with the treasurer. Your future AGM will thank you."
      ]
    },
    {
      heading: "Getting a small charity tapping this month",
      paragraphs: [
        "The minimum viable setup: one £19 reader on a no-monthly-fee account in the charity's name, a printed suggested-amount card, a stand or table mount, and a QR code for Gift Aid follow-up. Total outlay: about £25 including the printing.",
        "Then measure it. Most small charities that add contactless find takings at attended collections rise simply because the payment method matches what people carry — and the reader's records give you clean numbers per event, which cash tins never did.",
        "If you're weighing up hardware beyond the basics, our [tap to pay guide](/guides/what-is-tap-to-pay) explains what the tap actually does — useful ammunition for the trustee meeting."
      ]
    }
  ],
  faqs: [
    {
      q: "How can a small charity accept contactless donations?",
      a: "The cheapest working setup is a £19 SumUp or Square reader on a no-monthly-fee account in the charity's name, with a printed card suggesting an amount. A volunteer keys the amount, the donor taps, and the money settles to the charity's bank account. Dedicated fixed-amount donation boxes are worth it mainly for unattended locations."
    },
    {
      q: "What fees do charities pay on contactless donations?",
      a: "Standard transaction fees apply: about 8p on a £5 donation at SumUp's 1.69%, or about 9p at Square's 1.75%. There are no monthly costs on these accounts, and it's worth asking providers directly whether any charity pricing is available. Being transparent with donors about the small fee builds trust rather than denting it."
    },
    {
      q: "Can you claim Gift Aid on contactless donations?",
      a: "Only with a declaration — the tap itself captures no donor details. Use paper forms beside the reader or a QR code to a short online Gift Aid form, and route larger donations to your website where declaration capture is built in. Every completed declaration adds 25% to the donation."
    },
    {
      q: "Do tap-to-donate boxes work at outdoor events?",
      a: "Yes, with two caveats: battery and signal. Charge everything beforehand, bring a power bank, and for weak-signal pitches consider a reader with its own SIM like the SumUp Solo at around £79. A payment reliant on a volunteer's phone hotspot fails exactly when the queue is longest."
    }
  ],
  relatedPosts: ["contactless-limit-uk", "best-card-readers-market-traders", "card-machines-seasonal-businesses"],
  relatedLinks: [
    { label: "Card readers with no monthly fee", href: "/card-readers-no-monthly-fee" },
    { label: "What is tap to pay?", href: "/guides/what-is-tap-to-pay" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ],
},
{
  slug: "card-machines-seasonal-businesses",
  title: "Card Machines for Seasonal Businesses: Christmas Markets to Summer Sites",
  excerpt: "Seasonal traders should never pay for a card machine in months they don't trade. Why no-monthly-fee readers win, plus cold-weather and staffing realities.",
  category: "By business",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machines-seasonal-businesses.webp",
  featuredAlt: "Visitors walking through a winter Christmas market",
  intro: "Picking a card machine for a seasonal business comes down to one rule: pay nothing in the months you don't trade. Christmas market stalls, summer campsites, ice cream kiosks and festival pitches all share the same shape — intense trading for weeks, then silence — and that shape makes monthly-fee terminals a quietly terrible deal. Here's the arithmetic, plus the practical stuff nobody mentions: frozen batteries, field signal, and temporary staff on your till.",
  sections: [
    {
      heading: "The seasonal rule: never pay in months you don't trade",
      paragraphs: [
        "A contracted terminal at £15 a month costs £180 a year whether you trade for fifty-two weeks or six. If your season is six weeks of Christmas markets, you're paying roughly £135 of that for a machine sitting in a cupboard — a standing charge on hibernation.",
        "No-monthly-fee readers invert this completely. A £19 SumUp reader charges 1.69% when you sell and precisely nothing when you don't; Square's £19 reader works the same way at 1.75%. Your dormant months cost £0.00, which is the correct price for not trading.",
        "This is the single biggest decision for seasonal traders, and it's why our [no-monthly-fee comparison](/card-readers-no-monthly-fee) should be your starting point. Quote-based providers like Dojo or Worldpay can suit year-round volume; for seasonal trade, check any proposed contract's monthly costs against your real trading calendar before signing anything."
      ]
    },
    {
      heading: "The arithmetic on a Christmas market season",
      paragraphs: [
        "Say you take £800 a weekend across six market weekends — £4,800 for the season. At SumUp's 1.69% your total card cost is about £81; at Square's 1.75% it's £84. That's the entire year's payment bill, because the other ten months cost nothing.",
        "The same season on a contracted terminal: £180 in rental across the year before a single transaction fee, plus whatever percentage the contract charges. Even a lower headline rate rarely claws back the standing charge at seasonal volume.",
        "Run your own season through the [fee calculator](/card-machine-fee-calculator) with real numbers. The break-even point where contracts beat flat rates sits far above what most seasonal stalls turn over."
      ]
    },
    {
      heading: "Hibernating your reader between seasons",
      paragraphs: [
        "Here's the quietly brilliant bit: with no-contract providers there's nothing to cancel in the off-season. The account stays open at no cost, the reader goes in a drawer, and next season you charge it up and carry on. No notice periods, no re-onboarding, no phone calls to a retention department.",
        "Two small bits of housekeeping: give the reader a charge every couple of months so the battery doesn't deep-discharge, and log into the app occasionally to keep your details current. Check your provider's current terms on dormancy — practices can change — but the design intent of these accounts is exactly this stop-start pattern.",
        "Compare that with cancelling and re-signing a contracted terminal every year, which is a part-time job in itself. The [no-contract route](/blog/no-contract-card-machines-catch) has its catches, but hibernation isn't one of them."
      ]
    },
    {
      heading: "Cold weather: batteries hate Christmas markets",
      paragraphs: [
        "Lithium batteries drain faster in the cold, and a December market is exactly the environment reader batteries were not dreamed up in. A reader that lasts all day in July can fade by mid-afternoon in freezing fog.",
        "The fixes are cheap and unglamorous: start every shift at 100%, keep a charged power bank in the cash box, and keep the reader in an inside pocket or under the counter between customers rather than lying on a frosty table. Cold fingers also fumble PINs — thankfully most market purchases sit under the £100 contactless cap, and phone wallets are uncapped anyway.",
        "If you trade long winter days regularly, a second reader is £19 of insurance. One charges while one works, and a dead reader never costs you the 4pm rush."
      ]
    },
    {
      heading: "Festivals and field sites: bring your own signal",
      paragraphs: [
        "Summer season means fields, and fields mean the same connectivity gamble that market traders and food trucks know well — everything in our [market traders guide](/blog/best-card-readers-market-traders) and [food truck guide](/blog/card-machine-for-food-truck) applies here.",
        "A reader with its own SIM, like the SumUp Solo at around £79, takes your phone out of the equation and usually finds signal better than a handset buried in your apron. At big festivals, be warned: forty thousand phones on one mast can choke data for everyone, so ask organisers about trader connectivity before pitch day.",
        "Backup plan for true dead zones: a note of the sale and a payment link sent when signal returns works for trusted repeat customers, though it's a judgement call on strangers. Cash as a fallback still has its place in a field."
      ]
    },
    {
      heading: "Temporary staff on a shared till, honestly",
      paragraphs: [
        "Seasonal trading means seasonal staff — often someone you hired a fortnight ago handling your takings. The honest answer is that cheap readers have basic controls, not full staff-management suites: Square's free POS supports team member logins, while simpler setups may mean everyone shares one app login.",
        "Mitigate with process rather than paranoia: one person owns the reader per shift, refunds require you, and you glance at the transaction list daily — flat-rate apps make that trivially easy from your phone. Most discrepancies turn out to be honest mistakes, and named shifts make them easy to unpick.",
        "If tips are part of your trade, remember UK law: 100% of tips go to staff, with no deductions for card fees. Seasonal staff know their rights, and so should you."
      ]
    },
    {
      heading: "Use the quiet months to read your numbers",
      paragraphs: [
        "One underrated perk of app-based readers: the data doesn't hibernate when you do. Every transaction from the season sits in your dashboard all year — takings by day, by hour, average sale — ready for planning the next one.",
        "That's how you learn that the second Saturday outsells the first by half, or that sales die after 7pm and the late pitch fee isn't worth it. Cash tins never told you any of that.",
        "It also makes January admin painless: export the season, hand it to your accountant, done. For choosing between the main contenders before next season, our [comparison tool](/compare-card-machines) lines them up side by side."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the best card machine for a seasonal business?",
      a: "A no-monthly-fee reader — SumUp (£19, 1.69%) or Square (£19, 1.75%) — because it costs nothing in the months you don't trade. Contracted terminals with monthly rental charge you all year for a machine that works six weeks, which is the wrong shape of deal for seasonal trading."
    },
    {
      q: "Do I need to cancel my card machine in the off-season?",
      a: "Not with no-contract providers — there's nothing to cancel. The account stays open at no cost and the reader hibernates in a drawer until next season. Just charge the battery every couple of months and check your provider's current terms on dormant accounts."
    },
    {
      q: "How do card machines cope at cold Christmas markets?",
      a: "Batteries drain noticeably faster in the cold, so start at full charge, carry a power bank, and keep the reader warm between customers. A £19 backup reader is cheap insurance for long winter days. Contactless helps too — cold customers tap faster than they type PINs."
    },
    {
      q: "Can I take card payments at a festival with poor signal?",
      a: "Usually, with the right kit: a reader with its own SIM like the SumUp Solo (around £79) beats one relying on your phone, and asking organisers about trader connectivity beforehand is worth the email. In true dead zones, payment links sent once signal returns are the fallback."
    }
  ],
  relatedPosts: ["best-card-readers-market-traders", "card-machine-for-food-truck", "no-contract-card-machines-catch"],
  relatedLinks: [
    { label: "Card readers with no monthly fee", href: "/card-readers-no-monthly-fee" },
    { label: "POS systems for market stalls", href: "/pos-systems/market-stalls" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ],
},
{
  slug: "accepting-foreign-cards-tourists",
  title: "Accepting Foreign Cards from Tourists: Fees, DCC and Why GBP Wins",
  excerpt: "Foreign cards can cost merchants more — unless you're on a flat rate. What tourist payments really cost, why DCC is a bad deal, and why charging in GBP wins.",
  category: "Fees & saving",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/accepting-foreign-cards-tourists.webp",
  featuredAlt: "Woman buying from a street vendor",
  intro: "Accepting foreign cards from tourists raises two questions most UK small businesses never get a straight answer on: does that German Visa card cost me more than a British one, and what is that currency-conversion prompt on my terminal actually doing? The short answers: sometimes, depending on your pricing model — and the prompt is usually a bad deal for your customer. Here's how tourist card payments really work, and why charging in plain GBP wins.",
  sections: [
    {
      heading: "What accepting foreign cards actually costs a UK merchant",
      paragraphs: [
        "Every card payment carries an interchange fee — a wholesale cost set by the card schemes that your provider pays and passes on to you one way or another. For UK consumer cards, that wholesale cost is capped at very low levels; our [interchange explainer](/blog/interchange-fees-explained) covers the plumbing.",
        "Cards issued outside the UK are a different story: interchange on many foreign-issued cards isn't capped the same way, so the wholesale cost of that transaction can be several times higher than a domestic one.",
        "Whether that higher cost reaches you depends entirely on how your provider charges — which is where the two pricing models split sharply."
      ]
    },
    {
      heading: "Traditional pricing: foreign cards cost you more",
      paragraphs: [
        "On interchange-plus or blended pricing — common with quote-based providers like Dojo, Worldpay or Tyl — higher wholesale costs typically flow through to you as higher rates on non-UK cards, or as a surcharge tucked into the fee schedule. The exact treatment varies by contract, so check your agreement and your monthly statements rather than assuming.",
        "This is one of the classic [hidden fee](/guides/hidden-card-machine-fees) locations: the headline rate quoted in the sales call is usually the UK consumer debit rate, and the foreign-card rate lives three pages deeper.",
        "If you trade in a tourist area and you're on traditional pricing, pull a summer statement and find what non-UK cards actually cost you. For some seaside businesses it's a meaningful line item hiding in plain sight."
      ]
    },
    {
      heading: "The flat-rate win: same rate whatever the card",
      paragraphs: [
        "Flat-rate providers do what the name says: SumUp charges 1.69% and Square charges 1.75% regardless of where the card was issued — a French Mastercard costs you the same as a Barnsley debit card. Check current terms, as pricing structures can change, but flat means flat as these products stand.",
        "This is a genuine structural advantage for tourist-heavy trades, not marketing fluff. The provider absorbs the higher wholesale cost on foreign cards; you get pricing you can predict in August as easily as February.",
        "Who should still look at quotes: very high-volume businesses where a negotiated rate beats 1.69% overall even after foreign-card surcharges. For everyone else near a beach, castle or cathedral, flat-rate simplicity wins — run your mix through our [fee calculator](/card-machine-fee-calculator) to see it in your own numbers."
      ]
    },
    {
      heading: "Dynamic currency conversion: the honest explanation",
      paragraphs: [
        "DCC is the terminal prompt offering to charge a foreign cardholder in their home currency — pay €58.40 instead of £50. It sounds helpful. It almost never is: the conversion uses an exchange rate set by the DCC operator that's typically markedly worse than the rate the customer's own bank would apply, and the difference is kept as margin.",
        "Part of that margin is sometimes shared with the merchant as a kickback, which is exactly why some terminals push the prompt so eagerly. So yes — you can occasionally make a few pence by nudging tourists into DCC. You'd be making it out of your customer's pocket via a worse exchange rate they didn't understand.",
        "Savvy travellers know the rule always pay in local currency, and they notice when a terminal tries to steer them. The pennies aren't worth looking like a tourist trap."
      ]
    },
    {
      heading: "Why GBP wins: our advice in one paragraph",
      paragraphs: [
        "Charge in pounds, every time. The customer's bank converts at a fair rate, your books stay in one currency, your refunds are simple, and nobody feels fleeced when they check their statement on the flight home. It's the honest route and — not coincidentally — the simpler one.",
        "The pleasant footnote: flat-rate readers from SumUp and Square just do this by default. Tap, GBP, done — no DCC prompt to decline, no decision for your staff to fumble in front of a queue.",
        "If a provider's sales pitch dwells on DCC rebate income as a benefit, treat it as a small red flag about whose interests the product serves. See how the main providers [compare](/compare-card-machines) on straightforward pricing instead."
      ]
    },
    {
      heading: "Amex, UnionPay and JCB: what's in tourists' wallets",
      paragraphs: [
        "Visa and Mastercard cover the overwhelming majority of tourist plastic, and any mainstream UK reader takes both. American Express is common with US visitors — acceptance depends on your provider, though flat-rate providers generally support it; some charge the same flat rate for Amex, but check current terms, and see our [Amex guide](/blog/accepting-amex-uk-small-business) for the detail.",
        "UnionPay (dominant in China) and JCB (Japan) are patchier: support varies by provider and setup, so check before assuming. In practice most visitors from those countries also carry a Visa or Mastercard, or pay through a phone wallet, so lost sales are rarer than you'd fear.",
        "Phone wallets deserve a mention of their own: Apple Pay and Google Pay work internationally, carry no £100 contactless cap, and are increasingly the tourist's default. If your reader takes contactless — and every modern one does — you're already covered."
      ]
    },
    {
      heading: "Tourist-heavy trades: the quick setup",
      paragraphs: [
        "B&Bs and guest houses feel foreign-card economics most, because transactions are large: on a £300 stay, a percentage point of foreign-card surcharge on traditional pricing is £3 per booking, silently, all season. Flat-rate pricing removes the ambiguity.",
        "Shops and stalls near attractions should optimise for speed and certainty instead: contactless-first, priced in GBP, no DCC prompts, no drama. A tourist queue moves at the speed of its most confused transaction.",
        "The boring summary: a £19 flat-rate reader handles tourist cards as well as a contracted terminal costing far more, and with fewer ways to accidentally overcharge anyone. For most small tourist-facing businesses, that's the whole answer."
      ]
    }
  ],
  faqs: [
    {
      q: "Do foreign cards cost UK merchants more to accept?",
      a: "On traditional quote-based pricing, often yes — interchange on many non-UK cards isn't capped like domestic cards, and that higher wholesale cost typically reaches you as a higher rate, so check your agreement. On flat-rate providers like SumUp (1.69%) or Square (1.75%), foreign cards cost exactly the same as UK ones."
    },
    {
      q: "Should I offer dynamic currency conversion to tourists?",
      a: "No. DCC charges the customer in their home currency at an exchange rate that's typically much worse than their own bank's, with the margin kept by the DCC operator and sometimes partly shared with the merchant. Charging in GBP is fairer, simpler, and what experienced travellers expect."
    },
    {
      q: "Can tourists pay more than £100 by contactless?",
      a: "Physical cards are capped at £100 per contactless tap in the UK, so bigger purchases need chip and PIN. Phone wallets like Apple Pay and Google Pay have no cap, work on international cards, and are increasingly how tourists prefer to pay — any modern reader handles them."
    },
    {
      q: "Do UK card readers accept UnionPay and JCB?",
      a: "It varies by provider and setup, so check before relying on it. In practice most visitors carrying those cards also have a Visa or Mastercard or use a phone wallet, so genuinely lost sales are uncommon. Amex is more widely supported, though terms differ by provider."
    }
  ],
  relatedPosts: ["interchange-fees-explained", "accepting-amex-uk-small-business", "average-card-machine-fees-uk"],
  relatedLinks: [
    { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ],
},
{
  slug: "what-is-a-merchant-id",
  title: "What Is a Merchant ID (MID)? Where to Find Yours and When You'll Need It",
  excerpt: "Your merchant ID is the account number behind every card payment you take. Here is where to find it, when you will need it, and what to do without one.",
  category: "How-to",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 7,
  featuredImage: "/images/blog/what-is-a-merchant-id.webp",
  featuredAlt: "Behind the counter of a coffee shop",
  intro: "What is a merchant ID? It is the unique account number your card processor assigns to your business, and it sits quietly behind every card payment you take. Most owners never think about it until a support agent, a bank, or a chargeback letter demands it. This guide explains what a MID number is, how it differs from a terminal ID, where to find yours, and why some modern card readers do not give you one at all.",
  sections: [
    {
      heading: "What is a merchant ID, in plain English?",
      paragraphs: [
        "A merchant ID, or MID, is the unique reference number an acquirer gives your business when it agrees to process your card payments. Think of it as your account number in the card system: when a customer taps their card, the money is routed to your MID before it lands in your bank account. Without one, the card networks would have no idea who to pay.",
        "It is issued by your acquirer, the company that actually holds your merchant account, not by Visa or Mastercard themselves. If you signed up through a traditional provider like Worldpay or Dojo, you have a MID of your own. If you use a flat-rate reader like SumUp or Square, things work a little differently, and we will get to that.",
        "The MID is boring right up until the moment it is essential. Support calls, chargeback disputes and switching providers all move faster when you can quote it, so it is worth knowing where yours lives before you need it in a hurry."
      ]
    },
    {
      heading: "MID vs TID vs account number: three numbers that get confused",
      paragraphs: [
        "People use these interchangeably and then wonder why the support agent sounds confused. They are three different things doing three different jobs.",
        "The short version: one business can have one MID but several TIDs. A pub with three card machines has one merchant account and three terminals, so one MID and three TIDs. Your bank account number is a fourth thing entirely, and the acquirer only uses it to pay you."
      ],
      bullets: [
        "Merchant ID (MID): identifies your business to the acquirer and card networks. One per merchant account.",
        "Terminal ID (TID): identifies a specific card machine. Each physical terminal gets its own, so a fault can be traced to one device.",
        "Bank account number: where your settlements are paid. It never appears in the card networks at all.",
        "Merchant number on receipts: usually the MID, sometimes truncated, occasionally the TID depending on the terminal. Check both if a dispute letter quotes one."
      ]
    },
    {
      heading: "Where to find your merchant ID",
      paragraphs: [
        "The easiest place is your monthly merchant statement: the MID is usually printed at the top, near your business name. It also appears on the paper receipts your terminal prints, often labelled MID, merchant number or merchant no. Your online dashboard will show it too, typically under account settings or business details.",
        "If you cannot find a statement, check the original welcome email or contract from your acquirer, because the MID is assigned at sign-up and quoted in the paperwork. Failing that, ring your provider with your business name and postcode and they will read it to you after security checks.",
        "One warning: your MID is not a secret in the way a password is, but do not publish it. Combined with other business details, it can be used in social engineering attempts against your acquirer, so treat it like you would treat your bank sort code and account number together."
      ]
    },
    {
      heading: "When you will actually need your MID",
      paragraphs: [
        "Support calls are the everyday case. Quote your MID at the start and the agent pulls up your account instantly, instead of you spelling your trading name three times. For faults, they will want the TID as well, which is why knowing the difference saves you ten minutes per call.",
        "Chargebacks are the serious case. When a customer disputes a payment, the paperwork identifies you by MID, and your response must reference it. If you run into one, our guide to [chargebacks for UK small businesses](/blog/chargebacks-uk-small-business) walks through the process. PCI compliance questionnaires ask for it too, and so do the [PCI fee letters](/blog/pci-compliance-fees-uk) some acquirers send.",
        "Switching providers is the third case. A new acquirer will ask for your current MID to check your processing history, and comparing quotes properly means matching statements to accounts. Our [switching checklist](/blog/switching-card-machine-checklist) covers what else to have ready."
      ]
    },
    {
      heading: "Why SumUp and Square users may not have a MID at all",
      paragraphs: [
        "Flat-rate providers like SumUp, Square and Zettle are payment facilitators, not traditional acquirers. They hold one giant master merchant account and process everyone underneath it as sub-merchants. You get a merchant code or account ID within their system, but not a classic acquirer-issued MID of your own.",
        "For most small businesses this is a feature, not a bug: no underwriting delays, no monthly minimums, and sign-up in a day. The difference between the two models is explained in our [merchant account vs payment facilitator guide](/guides/merchant-account-vs-payment-facilitator), and it is worth understanding before you pick a side.",
        "The trade-off appears at the edges. Some banks, insurers and enterprise clients ask for a MID on forms that assume everyone has one, and payment facilitator users can be left staring at an empty box. It is rarely fatal, but it is a genuine difference."
      ]
    },
    {
      heading: "Asked for a MID you do not have? Here is what to do",
      paragraphs: [
        "First, check whether the form actually needs a traditional MID or just an account reference. Nine times out of ten, the merchant code from your SumUp or Square dashboard does the job, because the person asking simply wants a unique identifier for your payment account. [SumUp](/reviews/sumup) shows yours in the account section of the app.",
        "If the requester genuinely requires an acquirer-issued MID, for example some trade bodies or specific insurance products, you have two options: ask the requester to accept payment facilitator documentation instead, or move to a traditional merchant account. The second is a big step, so [compare card machines](/compare-card-machines) and run the numbers before switching just to get a reference number.",
        "Whatever you do, never invent a number to fill the box. A made-up MID fails validation and makes you look like exactly the sort of merchant nobody wants to underwrite."
      ]
    },
    {
      heading: "The bottom line",
      paragraphs: [
        "Your merchant ID is your business's account number in the card system: dull, essential, and worth two minutes to locate now rather than twenty minutes mid-crisis. Find it on your statement, receipt footer or dashboard, note it somewhere safe, and note your TIDs while you are there.",
        "If you are on a flat-rate reader and have never seen a MID, that is normal, and for most micro businesses it will never matter. If it starts to matter, the fix is switching models, not panicking. Our [fee calculator](/card-machine-fee-calculator) will tell you what that switch would actually cost you."
      ]
    }
  ],
  faqs: [
    {
      q: "What is a merchant ID number?",
      a: "A merchant ID (MID) is the unique reference your acquirer assigns to your business for processing card payments. It identifies you to the card networks, appears on statements and receipts, and is needed for support calls, chargebacks and PCI paperwork."
    },
    {
      q: "Where do I find my merchant ID?",
      a: "Check the top of your monthly merchant statement, the footer of a printed card receipt, or the account settings in your provider's online dashboard. If none of those work, your original contract or a call to your provider will get it."
    },
    {
      q: "Is a merchant ID the same as a terminal ID?",
      a: "No. The MID identifies your business and merchant account, while the terminal ID (TID) identifies one specific card machine. A shop with three terminals has one MID and three TIDs, and support teams often need both."
    },
    {
      q: "Do SumUp and Square give you a merchant ID?",
      a: "Not a traditional acquirer-issued one. They are payment facilitators, so you operate as a sub-merchant under their master account and get an internal merchant code instead. For most purposes that code works fine wherever a MID is requested."
    }
  ],
  relatedPosts: ["chargebacks-uk-small-business", "pci-compliance-fees-uk", "switching-card-machine-checklist"],
  relatedLinks: [
    { label: "Merchant account vs payment facilitator", href: "/guides/merchant-account-vs-payment-facilitator" },
    { label: "Compare card machines", href: "/compare-card-machines" },
    { label: "Hidden card machine fees", href: "/guides/hidden-card-machine-fees" }
  ]
},
{
  slug: "card-machine-rental-vs-buying",
  title: "Card Machine Rental vs Buying: The Full-Term Maths",
  excerpt: "Renting a card machine at £20 a month costs more than buying one within a year. We run the full-term maths on rental vs buying so you do not overpay.",
  category: "Comparisons",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-rental-vs-buying.webp",
  featuredAlt: "A cafe counter ready for service",
  intro: "Card machine rental sounds cheap at £15 to £25 a month, until you notice a SumUp or Square reader costs £19 to own outright. On hardware alone, rental loses within weeks. But the honest answer is messier: rented terminals often come bundled with negotiated rates that can beat flat-rate pricing at higher volumes. This guide runs the full-term maths on renting versus buying a card machine, so you can decide on numbers rather than a salesperson's patter.",
  sections: [
    {
      heading: "Card machine rental vs buying: the short answer",
      paragraphs: [
        "If you only compare hardware costs, buying wins almost immediately. A £19 [SumUp](/reviews/sumup) or Square reader pays for itself against a £20-a-month rental in one month flat. Even a £150 full-size countertop terminal beats that rental inside eight months, and terminals routinely last five years or more.",
        "But hardware is the small number. A business taking £10,000 a month in card payments pays £2,028 a year in fees at 1.69%, so a rate difference of 0.3 percentage points dwarfs any rental charge. That is why the real question is never rent or buy in isolation; it is which total package costs least over the full contract term.",
        "Rule of thumb: below roughly £5,000 a month in card turnover, buy a flat-rate reader and be done. Above that, a rental-plus-negotiated-rate deal can win, but only if you make them show you the full-term figure in writing."
      ]
    },
    {
      heading: "What rental actually costs over a contract",
      paragraphs: [
        "A typical rental runs £15 to £25 a month, usually on an 18-month minimum term. Take £20 a month over 18 months and you have paid £360 for a terminal you could have bought for £19 to £150, and at the end of the term you still own nothing. Renew for another 18 months and you are at £720.",
        "Add the extras that cling to rental contracts: PCI compliance fees, minimum monthly service charges, paper roll charges, and sometimes a separate gateway fee. Our guide to [hidden card machine fees](/guides/hidden-card-machine-fees) lists the usual suspects. Individually they are a few pounds; together they can double the headline rental cost.",
        "None of this makes rental automatically wrong. It makes rental a cost that must be justified by something else in the deal, and that something is almost always the processing rate."
      ]
    },
    {
      heading: "Why rental still exists (and sometimes deserves to)",
      paragraphs: [
        "Rental persists because acquirers like Dojo, Worldpay and Tyl bundle it with individually negotiated processing rates, and for higher-volume businesses those rates can undercut the 1.69% to 1.75% flat rates by a wide margin. The rental is the visible cost; the rate saving is the invisible benefit. Both are real.",
        "Rental also buys service. If a rented terminal dies on a Saturday, a decent provider ships a replacement fast or supports you by phone, because the terminal is their property and your downtime is their churn risk. If your owned £19 reader dies, you buy another one, which is cheap but not instant.",
        "Who should rent: businesses over roughly £5,000 a month in card turnover that have negotiated a genuinely low rate and read the exit terms. Who should walk away: anyone offered rental with a rate no better than the flat-rate providers, because then you are paying £360 extra for nothing."
      ]
    },
    {
      heading: "The lease trap: the pattern that ruins people",
      paragraphs: [
        "The classic horror story is the separate terminal lease. A salesperson, historically prowling markets and small shops, signs you to a long lease for the hardware, sometimes four or five years, sold separately from your processing contract. The lease is often with a finance company, not the acquirer, so cancelling your card processing does not cancel the lease.",
        "Do the maths on a £25-a-month lease over 48 months: £1,200 for hardware worth perhaps £300 new, and the contract may be enforceable even if your business closes. It is the payments industry's answer to the gym membership, except the gym at least lets you visit.",
        "Protect yourself with one question: is the terminal agreement a separate contract from the processing agreement? If yes, and it runs longer than 18 months, walk away. Check current terms carefully, and if you have already been caught, get the paperwork in front of a professional before assuming you are stuck."
      ]
    },
    {
      heading: "Worked examples: the full-term numbers",
      paragraphs: [
        "Example one, a stallholder taking £2,000 a month by card. Flat-rate: £19 reader plus 1.69% is £33.80 a month, £626.60 in year one. Rental deal at 1.4% plus £20 a month: £28 in fees plus £20 rental is £48 a month, £576 a year, plus setup and PCI fees. Buying wins comfortably, and there is no contract to escape.",
        "Example two, a cafe taking £12,000 a month. Flat-rate at 1.69% is £202.80 a month, £2,433.60 a year. Rental at 1.4% plus £20 is £168 plus £20, £188 a month, £2,256 a year. The rental package wins by roughly £178 a year, provided the quoted rate holds across your card mix and the extras stay small.",
        "The crossover sits around £5,000 to £7,000 a month depending on the exact rates quoted. Do not trust our example rates for your decision: quote-based providers price individually, so put your own numbers into our [fee calculator](/card-machine-fee-calculator) and demand a full-term written quote before signing anything."
      ]
    },
    {
      heading: "A decision framework by volume",
      paragraphs: [
        "Here is the honest version of the decision, stripped of sales gloss.",
        "Whichever side you land on, re-run the numbers once a year. Volumes change, and a deal that was right at £3,000 a month is often wrong at £10,000. You can [compare card machines](/compare-card-machines) side by side when you do."
      ],
      bullets: [
        "Under £2,000 a month: buy a £19 reader with [no monthly fee](/card-readers-no-monthly-fee). Rental cannot be justified at this volume, full stop.",
        "£2,000 to £5,000 a month: buying still usually wins, but get one rental quote as a benchmark. Refuse anything longer than 18 months.",
        "£5,000 to £15,000 a month: genuine contest. Get quotes from two acquirers via [our quote service](/get-pos-quotes), compare full-term totals against flat-rate, and negotiate.",
        "Over £15,000 a month: negotiated rates almost certainly win, so the question becomes which acquirer, not whether to rent.",
        "Any volume: never sign a hardware lease that is separate from the processing contract."
      ]
    },
    {
      heading: "The bottom line",
      paragraphs: [
        "Buying wins on hardware maths in almost every case, and for small and seasonal traders it is barely a contest: £19 once beats £360 per term forever. The only thing that rescues rental is a genuinely lower processing rate, which is real money at higher volumes but must be proven, in writing, over the full term.",
        "So do not ask whether to rent or buy. Ask what the total cost of each package is over 18 months at your volume, and check current terms on exit fees before you commit. The provider that answers that question clearly and quickly is usually the one to pick."
      ]
    }
  ],
  faqs: [
    {
      q: "Is it better to rent or buy a card machine?",
      a: "For most small businesses, buying wins: a £19 reader beats a £20-a-month rental within one month, and even a £150 terminal wins inside eight. Rental only makes sense when it is bundled with a negotiated processing rate that saves more than the rental costs, which usually needs £5,000-plus of monthly card turnover."
    },
    {
      q: "How much does card machine rental cost in the UK?",
      a: "Typically £15 to £25 a month on an 18-month minimum term, so £270 to £450 per term before extras like PCI compliance and minimum monthly service charges. The processing rate attached to the deal matters far more than the rental figure itself."
    },
    {
      q: "What is the card machine lease trap?",
      a: "It is a long hardware lease, often four or five years, sold separately from your processing contract and usually held by a finance company. Cancelling your card processing does not cancel the lease, so you can end up paying £1,000-plus for a terminal worth a few hundred. Never sign hardware and processing as separate agreements."
    },
    {
      q: "When does renting a card machine make sense?",
      a: "When your card turnover is high enough that a negotiated rate saves more than the rental and extras cost, typically above £5,000 a month. Insist on a full-term written quote, an 18-month maximum term, and check current terms on exit fees before signing."
    }
  ],
  relatedPosts: ["how-much-does-a-card-machine-cost-uk", "no-contract-card-machines-catch", "card-machine-fees-compared"],
  relatedLinks: [
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Card readers with no monthly fee", href: "/card-readers-no-monthly-fee" },
    { label: "Get POS quotes", href: "/get-pos-quotes" }
  ]
},
{
  slug: "accepting-amex-uk-small-business",
  title: "Should Your Small Business Accept Amex? The 2026 Answer Is Probably Yes",
  excerpt: "Amex used to cost small businesses more. On flat-rate readers it now costs the same as Visa. Here is why the old advice is dead and how to switch it on.",
  category: "Fees & saving",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 7,
  featuredImage: "/images/blog/accepting-amex-uk-small-business.webp",
  featuredAlt: "Person holding a credit card at a laptop",
  intro: "Should your small business accept Amex? For decades the answer was a reflexive no, because American Express charged merchants noticeably more than Visa or Mastercard. That advice is now mostly out of date. On flat-rate providers like SumUp, Square and Zettle, an Amex payment costs you exactly the same as any other card, which quietly kills the main argument against it. Here is the full picture on Amex fees in the UK, and who should still think twice.",
  sections: [
    {
      heading: "Why small businesses learned to fear Amex",
      paragraphs: [
        "The old wisdom had a real basis. American Express runs its own card network end to end, issuing the cards and processing the payments itself, so it sits outside the Visa and Mastercard interchange system and sets its own merchant pricing. Historically that pricing ran noticeably higher than the equivalent Visa or Mastercard cost.",
        "On top of the cost, acceptance used to be a separate hassle: a separate agreement, sometimes separate settlement, and a separate line on the statement. For a busy shop owner, the rational response was a polite sign in the window and a suggestion to pay another way.",
        "That world shaped a generation of advice, and the advice outlived the world. The question worth asking in 2026 is not whether Amex used to be expensive, but what it costs on the machine sitting on your counter today."
      ]
    },
    {
      heading: "The flat-rate reality: Amex now costs the same as Visa",
      paragraphs: [
        "Here is the genuinely good news for small businesses. Flat-rate providers charge one rate for every card they accept: [SumUp](/reviews/sumup) at 1.69%, [Square](/reviews/square) and Zettle at 1.75%. That single rate applies to Amex just as it does to Visa and Mastercard, so a £100 Amex payment costs you £1.69 on SumUp, exactly the same as a £100 Visa debit tap.",
        "This is one of the few places where the flat-rate model quietly hands small merchants a win that big merchants do not automatically get. The provider absorbs the difference in underlying network costs and averages it across everyone, which means the historically priciest card arrives at your till costing nothing extra.",
        "The practical consequence: if you are on a flat-rate reader and still refusing Amex, you are turning away sales to avoid a surcharge that no longer exists. That is not thrift, it is habit."
      ]
    },
    {
      heading: "Who actually carries Amex, and why it matters",
      paragraphs: [
        "Amex cardholders skew towards higher spenders: rewards chasers, frequent travellers, and corporate cardholders whose company pays the bill. These are customers who tend to spend more per visit and think less about the total, which is precisely the customer most small businesses want more of.",
        "Corporate Amex cards deserve a special mention. If you sell to business customers, whether catering, trade supplies or client lunches, a chunk of your buyers may be reaching for a company Amex first. Refusing it introduces friction at the exact moment someone is trying to give you money.",
        "We will not invent statistics about how much more Amex holders spend, because the honest point does not need them: the card sits disproportionately in the wallets of people with money to spend, and accepting it removes a reason for them to walk out."
      ]
    },
    {
      heading: "Amex fees on traditional acquirers: still a separate conversation",
      paragraphs: [
        "If you are with a quote-based acquirer such as Dojo, Worldpay or Tyl, the old rules still partly apply. Amex acceptance is typically priced separately from your Visa and Mastercard rates, often via Amex's own small-merchant programme, and the rate you get depends on your business and your negotiation. We will not quote their rates because they genuinely vary; check current terms on your own agreement.",
        "That means traditional-acquirer merchants still need to do arithmetic. If your negotiated Visa rate is well under 1%, an Amex rate materially above it makes each Amex sale genuinely more expensive, and the question becomes whether the extra sales cover the extra margin. Our guide to [card machine fees](/guides/card-machine-fees-explained) covers how to read those statements.",
        "Settlement timing can also differ on separate Amex agreements, so if cash flow is tight, ask the question before signing rather than after. None of this is a reason to refuse Amex outright; it is a reason to price it knowingly."
      ]
    },
    {
      heading: "The no-Amex sign is a lost-revenue sign",
      paragraphs: [
        "Every payment method you refuse is a small tax on your own turnover. Some Amex customers carry a backup Visa and will grumble and pay; some will quietly buy less; a few, especially corporate spenders locked to a company card, simply cannot pay you at all. You never see the sales that do not happen, which is what makes the sign feel free.",
        "The cost-benefit has flipped on flat-rate readers. When Amex cost you visibly more per transaction, refusing it was a defensible margin decision. Now that it costs the same as Visa on SumUp, Square and Zettle, the sign in the window protects you from nothing and filters out your best-spending customers.",
        "Who should still say no: a traditional-acquirer merchant quoted a genuinely painful Amex rate on thin margins, selling to customers who rarely carry the card. That is a real case, and it is fine. It is also increasingly rare."
      ]
    },
    {
      heading: "How to switch on Amex acceptance",
      paragraphs: [
        "On flat-rate providers there is usually nothing to switch on: SumUp, Square and Zettle accept Amex out of the box at their standard rate, so your reader already takes it. If in doubt, run a test transaction or check the accepted-cards list in your dashboard.",
        "On a traditional acquirer, ask your provider to add Amex acceptance. Smaller merchants are typically set up through a programme where Amex payments arrive through your existing terminal and settlement, while larger ones may get a direct Amex agreement with its own MID and statement. Ask which you are getting and what the rate is, and check current terms.",
        "Then tell people. Put the Amex logo back on the door and by the till, because customers who have been refused before will not assume anything changed. If you are still choosing a provider, [compare card machines](/compare-card-machines) with Amex pricing as one of your columns."
      ]
    },
    {
      heading: "The verdict",
      paragraphs: [
        "For the large majority of UK small businesses on flat-rate readers, accepting Amex in 2026 is a no-brainer: same fee as Visa, higher-spending customers, zero extra admin. The old advice was right in its day, and its day is over.",
        "If you are on a negotiated acquirer deal, get the Amex rate in writing and do the sums against your average sale before deciding, using our [fee calculator](/card-machine-fee-calculator) if it helps. Refusing Amex should be the output of arithmetic, not a tradition inherited from 2009."
      ]
    }
  ],
  faqs: [
    {
      q: "Should a small business accept Amex in the UK?",
      a: "Usually yes. On flat-rate providers like SumUp, Square and Zettle, Amex costs exactly the same as Visa or Mastercard, so there is no fee penalty for accepting it. The main exception is a traditional-acquirer merchant quoted a high separate Amex rate on thin margins."
    },
    {
      q: "How much are Amex fees for UK small businesses?",
      a: "On flat-rate readers, the same as any other card: 1.69% on SumUp and 1.75% on Square and Zettle. On quote-based acquirers like Dojo or Worldpay, Amex is priced separately and varies by business, so check current terms on your own agreement."
    },
    {
      q: "Why do some businesses still not take Amex?",
      a: "Mostly habit from the era when Amex genuinely cost more, plus some traditional-acquirer merchants who still face a higher negotiated Amex rate. For anyone on a flat-rate reader, the cost argument no longer applies and refusal just turns away higher-spending customers."
    },
    {
      q: "How do I start accepting Amex payments?",
      a: "On SumUp, Square or Zettle it is already enabled at the standard flat rate, so your reader takes Amex today. On a traditional acquirer, ask your provider to add Amex acceptance, confirm the rate and settlement arrangements in writing, then display the Amex logo so customers know."
    }
  ],
  relatedPosts: ["interchange-fees-explained", "card-machine-fees-compared", "accepting-foreign-cards-tourists"],
  relatedLinks: [
    { label: "Compare card machines", href: "/compare-card-machines" },
    { label: "SumUp review", href: "/reviews/sumup" },
    { label: "Square review", href: "/reviews/square" }
  ]
},
{
  slug: "interchange-fees-explained",
  title: "Interchange Fees Explained: The Wholesale Cost Inside Every Card Payment",
  excerpt: "Interchange fees are the wholesale cost inside every card payment. We explain the UK caps, what is not capped, and why your rate is many times higher.",
  category: "Fees & saving",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/interchange-fees-explained.webp",
  featuredAlt: "Contactless payment being made with a credit card",
  intro: "Interchange fees are the wholesale cost buried inside every card payment you take, and understanding them changes how you read every quote a provider gives you. In the UK, interchange on consumer cards is capped by law at 0.2% for debit and 0.3% for credit, yet most small businesses pay 1.69% or more per transaction. This guide explains where the rest of your money goes, what escapes the caps, and what you can realistically do about it.",
  sections: [
    {
      heading: "What are interchange fees? The three-slice anatomy of a card payment",
      paragraphs: [
        "Every card fee you pay is really three fees wearing a trench coat. Interchange goes to the customer's bank, the one that issued the card. Scheme fees go to the network in the middle, Visa or Mastercard, for running the rails. The acquirer margin goes to your payment provider, and it is the only slice anyone competes on.",
        "Interchange is the biggest regulated slice and it flows away from you regardless of provider: on a £100 consumer debit payment, roughly 20p goes to the cardholder's bank before anyone else is paid. Scheme fees add a smaller, less transparent amount on top.",
        "Everything above those wholesale costs is your provider's margin, covering their hardware, support, fraud risk, and profit. When you compare providers, you are comparing that third slice, because the first two are essentially the same for everyone. Our [card machine fees guide](/guides/card-machine-fees-explained) shows how these slices appear, or fail to appear, on real statements."
      ]
    },
    {
      heading: "The UK interchange caps: 0.2% and 0.3%",
      paragraphs: [
        "Since regulation introduced under EU rules and retained in UK law, interchange on domestic consumer cards is capped at 0.2% for debit and 0.3% for credit. On a £10 coffee paid with a consumer debit card, interchange is about 2p. On a £100 credit card sale, it is about 30p. These are the wholesale numbers underneath everything you pay.",
        "The caps exist because interchange is a strange market: the merchant pays the fee, but the customer's bank receives it, so banks historically competed to issue cards with the highest interchange, funding rewards with merchants' money. Regulators concluded merchants had no way to escape and capped the rates.",
        "Two caveats worth flagging. The caps apply to consumer cards issued in the UK for domestic transactions, and regulatory details can shift, so check current terms if a precise figure matters to a decision you are making."
      ]
    },
    {
      heading: "What is NOT capped: commercial cards and foreign cards",
      paragraphs: [
        "The caps have holes, and the holes are where statements get ugly. Commercial and business cards, the ones issued to companies rather than consumers, are not covered by the caps at all, and their interchange runs meaningfully higher. If you sell to business customers, a slice of your card mix costs more at the wholesale level than any consumer card.",
        "Cards issued outside the UK are the other big exception: interchange on non-UK-issued cards can be substantially higher than the domestic caps, which is why businesses in tourist areas sometimes see nasty surprises on itemised statements. Our guide to [accepting foreign cards](/blog/accepting-foreign-cards-tourists) digs into that one.",
        "American Express sits outside the interchange system entirely, because it runs its own network and sets its own pricing. And on interchange-plus contracts, these uncapped cards are exactly where the extra cost lands on you rather than your provider."
      ]
    },
    {
      heading: "Why your 1.69% is many multiples of interchange",
      paragraphs: [
        "Here is the arithmetic that surprises people. On a £100 consumer debit payment, interchange is about 20p, yet SumUp charges £1.69 and Square £1.75. Your provider is charging roughly eight times the interchange cost on that transaction. Before you reach for a pitchfork, look at what the gap buys.",
        "The flat rate is an averaging machine. It covers cheap consumer debit taps and expensive commercial and foreign cards at the same price, absorbs scheme fees, funds the £19 reader, the app, the support desk, fraud screening and chargeback handling, and removes monthly fees, PCI charges and contracts. You are paying retail for a bundle, not wholesale for a wire.",
        "Whether the bundle is worth it depends entirely on volume. At £1,000 a month of card sales, the flat-rate premium costs you perhaps £15 a month over a hypothetical at-cost deal, which is trivially worth it for the simplicity. At £30,000 a month, the same premium is hundreds of pounds, which is why bigger merchants graduate to other pricing."
      ]
    },
    {
      heading: "Interchange-plus: buying closer to wholesale",
      paragraphs: [
        "Interchange-plus, sometimes written interchange++, is the pricing model where you pay the actual interchange and scheme fees for each transaction, plus a stated acquirer margin on top. Instead of one blended rate, your statement itemises the wholesale cost and the markup separately, so a consumer debit tap costs you far less than a commercial card payment.",
        "The upside is transparency and, at volume, real savings: the margin might be a fraction of a percent, and you benefit directly from every cheap consumer debit transaction. The downside is complexity, since statements become long and variable, monthly costs bounce around with your card mix, and comparing quotes takes actual work. It is typically offered by traditional acquirers, and typically to businesses processing serious volume.",
        "Who should chase it: merchants doing roughly £20,000-plus a month by card, with the patience to read statements. Who should not: small and seasonal traders, for whom the predictability of a flat rate is worth more than the theoretical saving. If you are near the boundary, [get quotes](/get-pos-quotes) and compare against your flat-rate total using our [fee calculator](/card-machine-fee-calculator)."
      ]
    },
    {
      heading: "How the caps changed the market",
      paragraphs: [
        "The interchange caps quietly reshaped UK card pricing. They squeezed the fee income that funded lavish credit card rewards, which is partly why UK cashback and points offers thinned out compared with the United States, where interchange remains uncapped and rewards remain rich. Merchants effectively stopped subsidising quite so many air miles.",
        "The caps also made the flat-rate reader business viable at scale. With wholesale costs on consumer cards pinned near 0.2%, providers like SumUp, Square and Zettle could set one simple retail rate with a workable margin for small merchants, which is a big part of why a £19 reader with [no monthly fee](/card-readers-no-monthly-fee) exists at all.",
        "What the caps did not do is push most small merchants' prices anywhere near 0.2%, because the acquirer margin and everything it funds still sits on top. The wholesale price was regulated; the retail price was left to competition, which is where you come in."
      ]
    },
    {
      heading: "What you can actually do with this knowledge",
      paragraphs: [
        "You cannot buy at wholesale: interchange is only accessible through an acquirer, and every acquirer adds a margin, so the game is minimising the margin for your volume. Under about £5,000 a month, a flat-rate provider is almost certainly right, and your only job is picking the cheapest one for your mix on our [comparison page](/compare-card-machines).",
        "Above that, use interchange as your negotiating floor. When a salesperson quotes you a rate, you now know that roughly 0.2% to 0.3% of a consumer transaction is unavoidable cost and the rest is negotiable margin plus scheme fees. Asking for interchange-plus pricing, or at least an itemised statement, signals you cannot be fobbed off with a blended number.",
        "And whenever a provider advertises rates from 0.99%, or similar, remember that the word from is doing heavy lifting: the low headline applies to capped consumer debit, while your commercial and foreign card payments cost more. The three-slice anatomy is the decoder ring for every quote you will ever receive."
      ]
    }
  ],
  faqs: [
    {
      q: "What are interchange fees in the UK?",
      a: "Interchange is the fee paid to the customer's card-issuing bank on every card transaction, forming the wholesale core of your card costs. In the UK it is capped at 0.2% for consumer debit and 0.3% for consumer credit on domestic transactions, with scheme fees and your provider's margin added on top."
    },
    {
      q: "Why do I pay 1.69% if interchange is only 0.2%?",
      a: "Because interchange is only one slice of the cost. Your flat rate also covers Visa and Mastercard scheme fees, the provider's hardware, support, fraud risk and profit, and it averages cheap consumer debit with expensive commercial and foreign cards. You are buying a retail bundle, not the wholesale rate."
    },
    {
      q: "Which cards are not covered by the interchange caps?",
      a: "Commercial and business cards are not capped, and cards issued outside the UK can carry significantly higher interchange. American Express sits outside the interchange system entirely because it runs its own network. These uncapped cards are where itemised statements get expensive."
    },
    {
      q: "What is interchange-plus pricing and should I ask for it?",
      a: "Interchange-plus passes the actual wholesale costs through to you plus a stated acquirer margin, itemised on your statement. It can save real money above roughly £20,000 a month in card turnover, but for smaller merchants the variable, complicated bills usually are not worth it compared with a simple flat rate."
    }
  ],
  relatedPosts: ["card-machine-fees-compared", "average-card-machine-fees-uk", "how-to-cut-card-processing-fees"],
  relatedLinks: [
    { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ]
},
{
  slug: "pay-by-bank-open-banking",
  title: "Pay by Bank: Is Open Banking About to Undercut Your Card Machine?",
  excerpt: "Pay by bank moves money account to account for a fraction of card fees. We weigh the savings against weaker protection and slow in-person adoption.",
  category: "Comparisons",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/pay-by-bank-open-banking.webp",
  featuredAlt: "Customer paying with a phone",
  intro: "Pay by bank is the open banking payment method that promises to move money straight from your customer's account to yours for a fraction of what your card machine charges. No card networks, no interchange, and no chargebacks. That last one is a feature and a warning at the same time. This guide explains how pay by bank works for UK small businesses, where the savings are real, where the trade-offs bite, and what, if anything, you should do about it now.",
  sections: [
    {
      heading: "What is pay by bank, in plain English?",
      paragraphs: [
        "Pay by bank is an account-to-account payment made through open banking, the UK framework that lets regulated third parties initiate payments from a customer's bank account with their approval. In practice, the customer scans a QR code or taps a payment link, their banking app opens with the amount pre-filled, they approve with face or fingerprint, and the money moves directly to you.",
        "The crucial difference from a card payment is what is missing: no card, no Visa or Mastercard network, no interchange, and no acquirer in the traditional sense. The payment travels over bank rails, typically arriving via Faster Payments, which means settlement can land in minutes rather than the next working day. Our guide on [how long card payments take to clear](/guides/how-long-do-card-payments-take-to-clear) shows what that is competing against.",
        "You will see it under many names: pay by bank, bank transfer at checkout, open banking payments, or a branded button inside an invoicing or payments app. Underneath, it is the same plumbing."
      ]
    },
    {
      heading: "The fee case: why merchants are paying attention",
      paragraphs: [
        "The economics are the whole reason this exists. A £100 card payment costs you £1.69 on [SumUp](/reviews/sumup) or £1.75 on Square. The same £100 by pay by bank typically costs pence, or a small fixed fee, because there is no interchange and no card network to feed. Pricing varies by provider, so check current terms, but the gap is structural, not promotional.",
        "Scale that up and it stops being pocket change. A business taking £10,000 a month by card pays roughly £169 to £175 a month in flat-rate fees, over £2,000 a year. Shift even half of that volume to account-to-account payments and you could keep four figures annually that currently goes to the payment industry.",
        "The bigger the transaction, the stronger the case. On a £2,000 invoice, a card payment costs about £34 in flat-rate fees while pay by bank costs pence, which is why the method is landing first where tickets are large. For everyday £4 coffees, the absolute saving per transaction is small enough that convenience still rules."
      ]
    },
    {
      heading: "No chargebacks: the double-edged trait",
      paragraphs: [
        "Pay by bank has no chargeback mechanism, because settlement is a push payment: the customer instructs their own bank to send the money, rather than authorising you to pull it. Once it arrives, there is no card scheme to claw it back through. For merchants who have suffered unfair chargebacks, this sounds like heaven, and our [chargebacks guide](/blog/chargebacks-uk-small-business) shows why.",
        "But be honest about the flip side: the chargeback system, for all its pain, is consumer protection. Card customers get dispute rights, and credit card purchases over £100 carry Section 75 protection. A pay-by-bank customer has neither, relying instead on your goodwill and narrower bank protections. The trade-off is real, not a rounding error.",
        "This shapes where the method fits. For invoices, deposits and trusted repeat trade, weaker buyer protection rarely matters. For a big one-off purchase from a business the customer has never met, plenty of people will rationally prefer a credit card, and you should not resent them for it."
      ]
    },
    {
      heading: "Where pay by bank is landing first",
      paragraphs: [
        "Adoption is following the money. Invoices are the beachhead: a pay-by-bank link on an invoice replaces the customer typing your sort code and account number, gets you paid faster, and saves serious fees versus [taking the invoice by card](/blog/invoice-payments-vs-card-machine). Trades, professional services and B2B suppliers are the natural early adopters.",
        "Big-ticket and online payments come next. Deposits on jobs, event bookings, furniture, car repairs: anywhere the amount is large and the payment is made from a phone anyway, a QR code or link fits naturally and the fee saving per transaction is visible to the merchant.",
        "Some card providers are hedging by bundling open banking payments alongside cards, letting merchants offer both from one account. If your provider adds a pay-by-bank option at low cost, that is the easy on-ramp: you get the savings where customers accept it without changing anything else."
      ]
    },
    {
      heading: "Why in-person adoption is still slow",
      paragraphs: [
        "At the counter, pay by bank fights human habit, and habit is winning. A contactless tap takes about a second and requires no thought; scanning a QR code, waiting for the bank app, and approving takes longer and demands attention. For queues of small transactions, the tap is close to unbeatable, which is why your [card machine](/compare-card-machines) is not going anywhere soon.",
        "There is also a cold-start problem. Customers will not look for pay by bank until they have used it somewhere, staff will not offer it until customers stop looking baffled, and merchants will not push it for a saving of a few pence on a coffee. Each side is waiting for the other, and that takes years to unwind.",
        "None of this makes the sceptics right forever. The same objections were made about contactless itself, which crawled for years and then became the default. But betting your checkout on customer behaviour changing next quarter is how businesses buy hardware they regret."
      ]
    },
    {
      heading: "What to do now: a sensible playbook",
      paragraphs: [
        "Do nothing rash. Do not rip out your card machine, and do not sign anything long-term with a pay-by-bank startup on the promise of the future. The technology is young, providers are consolidating, and your customers still expect to tap a card.",
        "Do take the cheap wins that exist today.",
        "And keep perspective: your biggest savings this year probably still come from getting your card fees right, so run your numbers through our [fee calculator](/card-machine-fee-calculator) before chasing new rails."
      ],
      bullets: [
        "If you send invoices, add a pay-by-bank link now. It is the mature use case and the fee saving is immediate.",
        "If you take deposits or large one-off payments, offer pay by bank alongside cards and let customers choose.",
        "Ask your current provider whether they offer open banking payments, and what they cost. Check current terms rather than assuming.",
        "Watch uptake for a year before investing in QR signage or staff training for counter payments.",
        "Never make it the only option: weaker consumer protection means some customers will reasonably insist on a card."
      ]
    },
    {
      heading: "The honest verdict",
      paragraphs: [
        "Pay by bank is a complement, not a replacement, at least for now. For invoices and big tickets, it is already the cheapest sensible way to get paid and you should be using it. At the counter, cards keep the crown, because a one-second tap beats a QR scan for a £5 sale and no fee saving changes that arithmetic today.",
        "The direction of travel still matters. Open banking payments give merchants their first real lever against card fees in decades, and the providers bundling both are making the hedge easy. Keep your card machine, add the bank rail where it fits, and revisit the question every year or so. The moment your customers start asking for it is the moment the answer changes."
      ]
    }
  ],
  faqs: [
    {
      q: "What is pay by bank in the UK?",
      a: "Pay by bank is an open banking payment where money moves directly from the customer's bank account to yours, approved in their banking app via a QR code or link. It skips the card networks entirely, which is why it costs a fraction of a card payment and often settles within minutes."
    },
    {
      q: "How much cheaper is pay by bank than card payments?",
      a: "Card payments cost roughly 1.69% to 1.75% on flat-rate readers, so £16.90 or more per £1,000. Pay by bank typically costs pence or a small fixed fee per transaction because there is no interchange or scheme fee, though pricing varies by provider, so check current terms."
    },
    {
      q: "Are there chargebacks with pay by bank?",
      a: "No. Settlement is a push payment from the customer's bank, so there is no card-scheme chargeback mechanism to reverse it. That protects merchants from unfair disputes but leaves customers with weaker protection than cards, which is why some buyers will still prefer to pay by credit card."
    },
    {
      q: "Should small businesses switch to open banking payments?",
      a: "Not switch, add. Use pay-by-bank links for invoices, deposits and large payments now, where the savings are big and buyer protection matters less. Keep your card machine for counter sales, because in-person adoption is still early and customers overwhelmingly expect to tap."
    }
  ],
  relatedPosts: ["same-day-payouts-providers", "invoice-payments-vs-card-machine", "cheapest-way-to-take-card-payments"],
  relatedLinks: [
    { label: "How long card payments take to clear", href: "/guides/how-long-do-card-payments-take-to-clear" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ]
},
{
  slug: "business-bank-accounts-card-payments",
  title: "Business Bank Accounts and Card Payments: What Pairs Well (UK 2026)",
  excerpt: "Which business bank account pairs best with card payments? Name-matching rules, sole trader nuances, free accounts and payout timing, all explained.",
  category: "How-to",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/business-bank-accounts-card-payments.webp",
  featuredAlt: "Business owner reviewing finances with a card and laptop",
  intro: "Choosing a business bank account for card payments sounds like admin, but get it wrong and your card machine provider can freeze payouts while it asks awkward questions. The account name needs to match your trading identity, the payout timing needs to suit your cash flow, and if you still take cash, the deposit fees need checking too. This guide walks through what actually pairs well, without trying to sell you a bank.",
  sections: [
    {
      heading: "Why your bank account and card machine need to get along",
      paragraphs: [
        "Every card payment you take ends up in a bank account, and providers care a great deal about which one. When you sign up with SumUp, Square, Zettle or a quote-based provider like Dojo, you nominate a settlement account, and that is where your money lands after each payout run.",
        "The pairing matters for three reasons: whether the provider will accept the account at all, how quickly you can actually use the money, and how much friction you add to your bookkeeping. Pick well and you never think about it again. Pick badly and you are on hold to a support line while this week's takings sit in limbo.",
        "If you have not chosen a card machine yet, it is worth sorting both together. Our [card machine comparison](/compare-card-machines) shows which providers pay out where and how fast, which makes the bank decision easier."
      ]
    },
    {
      heading: "The name-matching rule providers do not shout about",
      paragraphs: [
        "Here is the bit that catches people out. Most provider terms and conditions want the settlement account to match your trading identity: if you trade as Smith Plumbing Ltd, they want to pay Smith Plumbing Ltd, not your personal current account or your partner's account.",
        "This is anti-fraud plumbing, not pettiness. Providers have to show regulators that money goes to the business that earned it. Mismatched names are one of the most common reasons for payouts being held while a provider asks for proof of identity and bank statements.",
        "The fix is boring but effective: open the account in your exact trading name before you apply for the card machine, and use the same name on both applications. Five minutes of care up front saves a frozen payout later."
      ]
    },
    {
      heading: "Sole trader vs limited company: what the law actually says",
      paragraphs: [
        "Sole traders can legally use a personal bank account for business, because legally you and the business are the same person. Limited companies cannot: the company is a separate legal entity and its money must sit in its own account, full stop.",
        "But legal is not the same as sensible. Even as a sole trader, provider terms typically want an account that matches how you trade, most personal account terms prohibit business use, and mixing money makes your Self Assessment slower and messier. Separation costs nothing and makes tax season far less painful.",
        "If you are a sole trader weighing this up, our guide to [card machines for sole traders](/blog/card-machine-for-sole-traders) covers the whole setup, not just the banking."
      ]
    },
    {
      heading: "The free business accounts worth a look",
      paragraphs: [
        "The good news: you do not need to pay a monthly fee for a business account any more. Several UK providers offer free business current accounts with app-based banking that opens in days rather than weeks. We have no affiliation with any of them; they are simply the names that come up most.",
        "The main free options are:"
      ],
      bullets: [
        "Starling Bank: free business account with no monthly fee, full UK banking licence, and free electronic payments.",
        "Monzo Business: free Lite tier with a paid tier above it, strong app, quick setup for sole traders and limited companies.",
        "Tide: free basic tier with per-transaction charges on some payment types, popular with new limited companies for fast setup.",
        "Traditional high-street banks: often 12 to 30 months free then a monthly fee, but with branch access if you deposit cash regularly."
      ]
    },
    {
      heading: "Payout timing: where your money actually goes and when",
      paragraphs: [
        "A card payment is not money in your account; it is a promise of money. Most flat-rate providers pay out the next working day, some offer same-day for a fee, and weekends can add a delay. Our guide on [how long card payments take to clear](/guides/how-long-do-card-payments-take-to-clear) breaks down each provider's timings.",
        "One quirk worth knowing: Zettle pays into a PayPal balance rather than straight into your bank, and you then move it across. That suits people already living in the PayPal ecosystem and annoys everyone else.",
        "Match the timing to your cash flow reality. If you pay suppliers on Friday, a provider that pays out Monday to Friday only is fine; if your busiest trading is the weekend, check when weekend takings actually land."
      ]
    },
    {
      heading: "Bookkeeping integrations that save your Sunday nights",
      paragraphs: [
        "Modern business accounts and card providers both plug into bookkeeping software like Xero, QuickBooks and FreeAgent. When both sides feed the same ledger, reconciliation becomes ticking boxes rather than detective work with a highlighter.",
        "The trap is fees muddying the numbers. Flat-rate providers deduct their cut before paying out, so £100 of sales arrives as £98.31 with SumUp or £98.25 with Square. Good integrations record the fee separately; if yours does not, your turnover figure will quietly drift from reality.",
        "Before committing, run your monthly card takings through our [fee calculator](/card-machine-fee-calculator) so you know exactly what those deductions will look like across providers."
      ]
    },
    {
      heading: "Still taking cash? Watch the deposit fees",
      paragraphs: [
        "If some customers still pay cash, the bank account choice matters more than you think. Banks commonly charge roughly 0.5% to 1% to deposit business cash, and app-only banks route cash deposits through the Post Office or PayPoint with their own fees and limits.",
        "That changes the maths people assume about cash being free. Depositing £1,000 in cash at 0.7% costs £7 before you count the time spent cashing up and walking it to a branch, which is not far off what a card machine would have charged.",
        "The practical pairing: if cash is a big slice of your takings, favour an account with cheap, convenient cash deposits, even if it costs a small monthly fee. If cash is a rounding error, a free app-based account plus a no-contract card reader is the cleaner setup."
      ]
    }
  ],
  faqs: [
    {
      q: "Can I use a personal bank account for card payments as a sole trader?",
      a: "Legally, yes, because a sole trader and their business are the same legal person. In practice most card providers want the settlement account to match your trading name, and most personal account terms prohibit business use. A free business account sidesteps both problems and keeps your tax records clean."
    },
    {
      q: "What is the best bank account for a card machine?",
      a: "There is no single winner: the best account is one in your exact trading name, with payout-friendly clearing and cheap cash deposits if you still take cash. Starling, Monzo and Tide all offer free tiers that pair well with flat-rate card readers. If you deposit a lot of cash, a high-street account with branch access may be worth its fee."
    },
    {
      q: "Why is my card machine provider holding my payouts?",
      a: "The most common reasons are a settlement account name that does not match your trading identity, an unusual spike in takings, or missing verification documents. Contact the provider, supply what they ask for, and next time make sure the bank account and card machine application use identical names."
    },
    {
      q: "Do limited companies have to use a business bank account?",
      a: "Yes. A limited company is a separate legal entity, so its money must be kept in an account belonging to the company, not a director's personal account. Using a personal account muddles the company's finances and can create serious problems with HMRC and Companies House record-keeping."
    }
  ],
  relatedPosts: ["card-machine-for-sole-traders", "same-day-payouts-providers", "true-cost-of-taking-cash"],
  relatedLinks: [
    { label: "How long do card payments take to clear?", href: "/guides/how-long-do-card-payments-take-to-clear" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ]
},
{
  slug: "taking-deposits-small-business",
  title: "Taking Deposits as a Small Business: Card-on-File, Terms and Refund Rules",
  excerpt: "Taking deposits as a small business: when they are fair, card-on-file options, written terms, refund rules and how to handle disputes without drama.",
  category: "How-to",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/taking-deposits-small-business.webp",
  featuredAlt: "Close-up of a person signing an agreement",
  intro: "Taking deposits as a small business in the UK is completely normal, entirely sensible, and regularly done badly. A deposit protects you from no-shows, cancelled orders and wasted materials, but only if the terms are written down and the payment is taken properly. This guide covers when a deposit is justified, how to take one by card, what your written terms need to say, and where consumer cancellation rights fit in.",
  sections: [
    {
      heading: "When a deposit is fair enough, and when it is overkill",
      paragraphs: [
        "A deposit is justified whenever saying yes to one customer costs you the chance to say yes to another, or commits you to spending money before you are paid. Bespoke work, reserved appointment slots and materials bought for a specific job are the classic three.",
        "Where it tips into overkill is small, easily resold stuff. Demanding a deposit to hold a £15 haircut slot booked for tomorrow mostly irritates people; taking one for a £150 colour appointment that blocks out three hours is just sense.",
        "A reasonable rule of thumb: the deposit should roughly reflect what a cancellation actually costs you. For trades that is often the materials; for salons and venues it is the slot you can no longer sell."
      ]
    },
    {
      heading: "Card-on-file deposits vs invoiced deposits",
      paragraphs: [
        "Booking systems have quietly solved the deposit problem for appointment businesses. Most salon and venue booking platforms can take a card at booking, either charging a deposit immediately or storing the card so a no-show fee can be charged under terms the customer agreed to. The customer taps in their details once and nobody has an awkward money conversation.",
        "For trades and bespoke work, an invoiced deposit or a payment link usually fits better. You send a request for, say, 25% before materials are ordered, the customer pays remotely by card, and work starts when it lands. Our guide to [virtual terminals and remote payments](/guides/what-is-a-virtual-terminal) explains the options.",
        "One honest caveat: remote card payments typically cost more than in-person, often around 2% to 2.5% on flat-rate providers. On a £200 deposit that is roughly £4 to £5, which is cheap insurance against a £200 hole."
      ]
    },
    {
      heading: "Written terms beat verbal every single time",
      paragraphs: [
        "A deposit without written terms is a future argument with money attached. If a dispute lands, whether with the customer, a card provider or a small claims court, the written record is what gets read; nobody can adjudicate a conversation in a van six weeks ago.",
        "Your deposit terms do not need a lawyer, just clarity. Cover these points in plain English:"
      ],
      bullets: [
        "What the deposit covers: materials, a reserved date, design time, or simply securing the booking.",
        "When it is refundable, and in full or in part: for example, fully refundable with 48 hours notice, non-refundable inside 24 hours.",
        "What happens if you cancel: the customer should get the deposit back promptly if the failure is yours.",
        "How the balance is due and when: on completion, on the day, or in stages for bigger jobs.",
        "Get acknowledgement: a ticked box at booking, an email reply saying agreed, or a signature on the quote."
      ]
    },
    {
      heading: "Deposit refund rules: consumer cancellation rights",
      paragraphs: [
        "If a consumer books remotely, by phone, online or by email, distance-selling rules generally give them 14 days to cancel many contracts and get their money back, deposit included. Sector rules vary, and there are exceptions, notably services scheduled for a specific date and bespoke or personalised goods, so it is worth checking the rules for your trade rather than assuming.",
        "The key exception people trip on: if the customer asks you to start work within the 14 days and you do, they can lose the right to cancel or may owe you for work done. Say this in your terms and get their express agreement to start early.",
        "None of this stops you taking deposits. It just means non-refundable needs to be written honestly: a blanket no-refunds line that ignores statutory rights is unenforceable and looks bad in a dispute."
      ]
    },
    {
      heading: "Deposits and chargebacks: when the customer disputes",
      paragraphs: [
        "Pay by card and a customer who wants their deposit back can skip arguing with you and dispute the charge with their bank. Deposits are a common chargeback flashpoint precisely because the customer received no goods, only a promise.",
        "Your defence is the paper trail. Clear written terms shown before payment, the customer's acknowledgement, and evidence you held the slot or bought the materials will win most deposit chargebacks. A verbal agreement wins almost none.",
        "It is worth reading up on [how chargebacks work for UK small businesses](/blog/chargebacks-uk-small-business) before your first one arrives, because the response deadlines are short and missing them means losing by default."
      ]
    },
    {
      heading: "How deposits work by business type",
      paragraphs: [
        "The right deposit setup varies a lot by sector, so here is the short version:"
      ],
      bullets: [
        "Salons and barbers: card-on-file at booking with an automatic no-show fee; a deposit of 20% to 50% on long colour or treatment appointments. Booking-friendly [salon POS systems](/pos-systems/salons) handle this automatically.",
        "Trades: a materials deposit on bigger jobs, taken by payment link before ordering; staged payments on anything over a few thousand pounds.",
        "Venues and events: a fixed booking fee to hold the date, with a written sliding scale as the date approaches.",
        "Food businesses: deposits or pre-orders for large bookings and catering, taken through the booking system so terms are captured."
      ]
    },
    {
      heading: "Getting the deposit paid without awkwardness",
      paragraphs: [
        "The trick to painless deposits is making them part of the process rather than a special request. A booking page that takes the card as standard, or a quote that says 25% deposit secures your date on every job, removes the negotiation entirely.",
        "Practically, you want a provider that handles both in-person and remote payments, so the deposit arrives by link and the balance goes through the [card machine](/compare-card-machines) on the day. Most flat-rate providers, SumUp, Square and Zettle included, offer payment links at no monthly cost.",
        "And once the deposit lands, confirm it in writing with the terms attached. That one email is your receipt, your reminder and your chargeback evidence all at once."
      ]
    }
  ],
  faqs: [
    {
      q: "Can a small business legally take deposits in the UK?",
      a: "Yes, deposits are entirely legal and standard practice for bespoke work, reserved slots and materials. The requirements are honesty and clarity: written terms stating what the deposit covers and when it is refundable, and respect for consumer cancellation rights on remote sales. Problems almost always come from vague verbal arrangements, not from deposits themselves."
    },
    {
      q: "Are deposits refundable if the customer cancels?",
      a: "It depends on your written terms and how the sale was made. For many remote bookings consumers get a 14-day cancellation window, though services for a specific date and bespoke goods have exceptions, and sector rules vary. Outside statutory rights, a clearly agreed non-refundable deposit that reflects your genuine costs is usually enforceable."
    },
    {
      q: "How much deposit should a small business take?",
      a: "Enough to cover what a cancellation actually costs you, which for most businesses lands between 20% and 50%. Trades often peg it to materials, salons to the value of the blocked-out slot, venues to a fixed date-holding fee. A deposit wildly out of proportion to your real loss is harder to defend if disputed."
    },
    {
      q: "What is a card-on-file deposit?",
      a: "It is when a booking system securely stores the customer's card details at booking, so you can charge a deposit or a no-show fee under terms they agreed to. The card data is held by the payment provider, not scribbled in your diary, which keeps you on the right side of card security rules. Most modern salon and hospitality booking platforms support it."
    }
  ],
  relatedPosts: ["chargebacks-uk-small-business", "invoice-payments-vs-card-machine", "can-you-charge-for-card-payments"],
  relatedLinks: [
    { label: "What is a virtual terminal?", href: "/guides/what-is-a-virtual-terminal" },
    { label: "POS systems for salons", href: "/pos-systems/salons" },
    { label: "Compare card machines", href: "/compare-card-machines" }
  ]
},
{
  slug: "invoice-payments-vs-card-machine",
  title: "Invoice Payments vs a Card Machine: How Should Your Business Get Paid?",
  excerpt: "Invoice payments or a card machine? The real cost of waiting 30 days, pay-by-link as the middle path, and when proper invoicing still wins for UK firms.",
  category: "Comparisons",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/invoice-payments-vs-card-machine.webp",
  featuredAlt: "Tradesperson checking a payment on a laptop",
  intro: "Invoice vs card payment is really a question about when you want your money: now, or whenever the customer gets round to it. Invoices feel professional and cost nothing per transaction, but they turn you into an unpaid credit provider. Card machines cost a percentage but pay you before the van leaves the drive. This guide runs the actual numbers on both, plus the pay-by-link middle path most small firms overlook.",
  sections: [
    {
      heading: "The real question: when do you want the money?",
      paragraphs: [
        "Strip away the habit and the paperwork, and invoicing versus a card machine is a trade between cost and speed. An invoice paid by bank transfer costs you nothing in fees but arrives whenever the customer chooses. A card payment costs 1.69% to 1.75% on flat-rate providers and arrives in your account typically the next working day.",
        "On a £300 job, the card fee is about £5.10 with SumUp at 1.69% or £5.25 with Square at 1.75%. The invoice fee is £0, plus however many hours of your life you spend sending reminders, checking the bank app and composing polite chasers.",
        "Neither answer is wrong. The mistake is defaulting to one method for everything instead of matching the payment method to the job."
      ]
    },
    {
      heading: "What waiting for invoice payments actually costs",
      paragraphs: [
        "Late payment is a well-documented problem for UK small firms: surveys regularly find a large share of small businesses waiting beyond agreed terms, and chasing overdue invoices eats real working hours. The exact figures vary by survey, but the direction never does; small suppliers wait longest.",
        "The costs stack up in ways an invoice template never shows. There is the cash flow gap you bridge from your own pocket or an overdraft, the admin time spent chasing, and the awkwardness tax on customer relationships when you have to ring about money.",
        "And there is bad debt. An invoice that never gets paid costs you 100% of the job; a card fee of 1.75% starts to look like remarkably cheap insurance against that outcome."
      ]
    },
    {
      heading: "The card machine case: paid before you leave",
      paragraphs: [
        "For trades and anyone doing doorstep or on-site work, a pocket card reader changes the whole dynamic. The job finishes, the customer taps, and the money is settled before you have packed the tools; there is no invoice, no 30 days, no chasing.",
        "The entry cost is genuinely small: SumUp charges £19 for its reader with no contract and 1.69% per tap, and Square charges £19 with 1.75% and free POS software thrown in. There is no monthly fee on either, so a quiet month costs you nothing.",
        "We cover the full trades setup in our guide to [card machines for tradesmen](/pos-systems/tradesmen). The short version: for jobs up to a few hundred pounds, taking the payment on the spot beats invoicing on almost every measure except fees."
      ]
    },
    {
      heading: "Pay-by-link and virtual terminals: the middle path",
      paragraphs: [
        "There is a third option most small firms underuse: send the customer a payment link by text or email, or key their card into a [virtual terminal](/guides/what-is-a-virtual-terminal) over the phone. It keeps the pay-me-now speed of a card machine without you needing to be in the room.",
        "The catch is price. Card-not-present payments carry more fraud risk, so they typically cost around 2% to 2.5% on flat-rate providers rather than the in-person rate. On a £500 deposit that is roughly £10 to £12.50 instead of £8.45 to £8.75.",
        "That premium buys you certainty. A payment link on the quote or the completion photo gets settled in minutes, not weeks, and it beats a fourth reminder email every single time."
      ]
    },
    {
      heading: "When proper invoicing still wins",
      paragraphs: [
        "Invoicing is not the villain; it is simply a credit product, and credit has its place. For business-to-business work, invoices are often non-negotiable because your customer's accounts team physically cannot pay any other way.",
        "The clearest cases for sticking with invoices are:"
      ],
      bullets: [
        "B2B customers with formal purchase-order and payment-run processes.",
        "Big-ticket jobs where a 1.75% card fee becomes serious money: £175 on a £10,000 contract buys a lot of admin time.",
        "Repeat trade customers with a solid payment history, where terms are part of the relationship.",
        "Staged contracts where payments are tied to milestones and need a document trail.",
        "Anywhere you can negotiate a deposit up front, which removes most of the risk that makes invoicing painful."
      ]
    },
    {
      heading: "The hybrid setup most small businesses should run",
      paragraphs: [
        "The good news is you do not have to choose. A £19 reader, free payment links and your existing invoice template together cover every situation, and the reader earns its keep in the first week.",
        "A sensible split looks like this: card reader for consumer jobs and anything under a few hundred pounds, payment link for deposits and remote balances, invoices reserved for B2B and big tickets with agreed terms. Add a card payment button to the invoices themselves and even your slow payers get faster.",
        "Run your own mix of job sizes through our [fee calculator](/card-machine-fee-calculator) to see what the card fees would total, then weigh that against your current chasing time. For most small firms the arithmetic is not close.",
        "If same-day cash flow matters to you, check [which providers pay out fastest](/blog/same-day-payouts-providers) before picking a reader, because settlement speed varies more than fees do."
      ]
    }
  ],
  faqs: [
    {
      q: "Is it better to invoice or take card payments?",
      a: "For consumer work and smaller jobs, taking a card payment on completion is usually better: you pay roughly 1.7% in fees but eliminate chasing and bad debt. Invoicing still wins for B2B customers who pay through accounts departments and for big-ticket contracts where the percentage fee gets large. Most small businesses do best running both."
    },
    {
      q: "What is pay by link and how much does it cost?",
      a: "Pay by link is a payment request sent by text or email that the customer opens and pays by card. Because the card is not physically present, flat-rate providers typically charge around 2% to 2.5% rather than their in-person rate. It suits deposits, remote balances and phone orders where waiting on a bank transfer would hold up the job."
    },
    {
      q: "Do card payments arrive faster than invoice payments?",
      a: "Almost always. Card takings typically settle into your bank the next working day, and some providers offer same-day payouts. An invoice is only as fast as your customer chooses to be, and UK small firms routinely report waiting beyond agreed terms, so the practical gap is often weeks rather than days."
    },
    {
      q: "Can I add a card payment option to my invoices?",
      a: "Yes, most invoicing software and flat-rate card providers let you embed a pay-now button or payment link on the invoice itself. The card-not-present fee applies, typically around 2% to 2.5%, but customers with a one-click option pay noticeably faster. It is one of the easiest fixes for a slow-paying customer base."
    }
  ],
  relatedPosts: ["taking-deposits-small-business", "cheapest-way-to-take-card-payments", "same-day-payouts-providers"],
  relatedLinks: [
    { label: "What is a virtual terminal?", href: "/guides/what-is-a-virtual-terminal" },
    { label: "POS systems for tradesmen", href: "/pos-systems/tradesmen" },
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" }
  ]
},
{
  slug: "true-cost-of-taking-cash",
  title: "The True Cost of Taking Cash (It Isn't Free Either)",
  excerpt: "Cash is not free. Deposit fees, cashing-up time, banking runs and float errors all cost real money. Here is the honest arithmetic on taking cash in the UK.",
  category: "Fees & saving",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/true-cost-of-taking-cash.webp",
  featuredAlt: "Cashier serving a customer at the counter",
  intro: "The cost of taking cash in the UK is the number nobody writes down. Card fees arrive on a statement, itemised to the penny, so they feel expensive; cash costs arrive as bank deposit charges, unpaid cashing-up time and the occasional till that will not balance, so they feel like nothing. This guide puts honest numbers on both sides, without pretending cash is obsolete or that card providers are charities.",
  sections: [
    {
      heading: "The myth that cash costs nothing",
      paragraphs: [
        "Ask most business owners what cash costs them and the answer is nothing, because no invoice ever arrives for it. Card fees, by contrast, are printed on a statement every month, which makes them feel like the expensive option by default.",
        "That is an accounting illusion, not a fact. Cash has its own line items: bank deposit fees, staff time counting and reconciling it, trips to the branch, float errors and shrinkage. They are real, recurring and largely invisible because nobody itemises them.",
        "This is not propaganda for card providers. It is an argument for measuring both properly, because you cannot compare a visible cost with an invisible one and call it a decision."
      ]
    },
    {
      heading: "Cash handling costs: the hidden line items",
      paragraphs: [
        "Here is what taking cash actually involves once you list it out:"
      ],
      bullets: [
        "Bank deposit fees: banks commonly charge roughly 0.5% to 1% to deposit business cash, and app-based banks route deposits through the Post Office with their own charges.",
        "Cashing-up time: counting the till, reconciling against the day's sales and preparing the deposit, every trading day.",
        "Banking runs: someone walking or driving takings to a branch or Post Office, in work time, with cash on their person.",
        "Float errors: wrong change given and till discrepancies that get written off in the till, a few pounds at a time.",
        "Theft and shrinkage risk: cash is the only payment method that can physically disappear, whether to a break-in or a light-fingered till.",
        "Weaker records: cash sales that skip the till leave gaps HMRC does not enjoy, and neither will you at year end."
      ]
    },
    {
      heading: "The arithmetic: cash vs card on £1,000 of takings",
      paragraphs: [
        "Put £1,000 through a card machine and the fee is transparent: £16.90 at SumUp's 1.69% or £17.50 at Square's 1.75%, deducted before payout, with every transaction recorded automatically. You can check your own volumes on our [fee calculator](/card-machine-fee-calculator).",
        "Now take the same £1,000 in cash. A 0.5% to 1% deposit fee is £5 to £10 off the top. Add cashing-up at, say, 20 minutes a day and a weekly banking run, priced at whatever your time or your staff's wages cost, and the gap narrows fast; if you value the time at all realistically, cash is not obviously the cheap option.",
        "The honest conclusion is that both methods cost low single-digit percentages once everything is counted. Anyone telling you one is free is not counting."
      ]
    },
    {
      heading: "The costs you cannot see on any statement",
      paragraphs: [
        "Beyond the countable costs sit the quiet ones. A till that will not balance costs you an evening of recounting; a cash discrepancy between staff members costs you trust, which is more expensive than the missing tenner.",
        "Records matter too. Card takings reconcile themselves against your POS; cash relies on discipline, and gaps in cash records make your accountant's job slower and an HMRC enquiry more uncomfortable. Card fees, at least, are a clean, deductible business expense, as we cover in [are card machine fees tax deductible](/blog/are-card-machine-fees-tax-deductible).",
        "None of this makes cash wicked. It makes cash a payment method with real operating costs, which deserves the same scrutiny you give a card provider's rate card."
      ]
    },
    {
      heading: "When cash still earns its place",
      paragraphs: [
        "Cash is far from dead, and for some businesses dropping it would be self-harm. Plenty of customers, including many older people and those managing tight budgets, prefer or rely on cash, and turning them away has a cost no calculator captures.",
        "Cash also wins on resilience. When the broadband drops or the card network wobbles, cash keeps trading; a float in the drawer is the cheapest backup system ever invented. And for very small tickets, some owners simply prefer the certainty of coins to any percentage fee.",
        "Note that going card-only is legal in the UK, but that is a separate decision with its own trade-offs; our guide on [whether a business can refuse cash](/blog/can-a-business-refuse-cash-uk) walks through it properly."
      ]
    },
    {
      heading: "The honest verdict: take both, measure both",
      paragraphs: [
        "For most small businesses the right answer is boringly balanced: accept both, and know what each one costs you. Customers choose how they pay; your job is to make sure neither option quietly bleeds you.",
        "Three things worth doing this month: check your bank's cash deposit tariff, time one week of cashing up honestly, and compare the total against your card statement. If you take cards, a [no-monthly-fee reader](/card-readers-no-monthly-fee) keeps the card side lean while you measure.",
        "Whichever way your mix leans, revisit it yearly. Payment habits are shifting, bank tariffs change, and the right answer for your counter in 2026 may not be the right one in 2028."
      ]
    }
  ],
  faqs: [
    {
      q: "How much does it cost a business to take cash in the UK?",
      a: "More than zero, which is the number most people assume. Banks commonly charge around 0.5% to 1% to deposit business cash, and on top of that sit cashing-up time, banking runs, float errors and shrinkage risk. Counted honestly, cash typically costs a low single-digit percentage of takings, in the same territory as card fees."
    },
    {
      q: "Is taking cash cheaper than taking card payments?",
      a: "Often not, once you count everything. A card payment costs a visible 1.69% to 1.75% on flat-rate providers, while cash costs an invisible mix of deposit fees, staff time and errors that can add up to a similar figure. The fair comparison is your full cash-handling cost against your card statement, not card fees against zero."
    },
    {
      q: "Should my business stop accepting cash?",
      a: "Not automatically. Card-only is legal in the UK and simplifies operations, but some customers rely on cash, and cash keeps you trading through internet outages. The sensible move for most small businesses is to keep both, measure what each costs, and let your actual customer mix drive the decision."
    },
    {
      q: "Why do banks charge to deposit business cash?",
      a: "Handling cash costs banks money: counting, transporting, insuring and securing it all take labour and infrastructure. Business accounts typically pass that on at roughly 0.5% to 1% of the amount deposited, sometimes with a monthly free allowance. It is worth checking your tariff, because rates vary meaningfully between banks and account tiers."
    }
  ],
  relatedPosts: ["can-a-business-refuse-cash-uk", "are-card-machine-fees-tax-deductible", "card-machine-fees-compared"],
  relatedLinks: [
    { label: "Card machine fee calculator", href: "/card-machine-fee-calculator" },
    { label: "Card readers with no monthly fee", href: "/card-readers-no-monthly-fee" },
    { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" }
  ]
},
{
  slug: "pos-reports-small-business",
  title: "POS Reports: The 15 Minutes a Week That Run Your Business Better",
  excerpt: "The five POS reports worth your time: sales by hour, product, category, refunds and year-on-year. Fifteen minutes a week that genuinely run the business.",
  category: "How-to",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 7,
  featuredImage: "/images/blog/pos-reports-small-business.webp",
  featuredAlt: "Owner checking stock with a tablet",
  intro: "POS reports are the closest thing a small business gets to a free consultant. Every sale you ring through is already being recorded; the only question is whether anyone ever looks. You do not need dashboards, KPIs or a data hobby, just five reports and fifteen minutes a week. This guide covers which reports actually matter, what each one tells you, and how to turn one number into one decision every week.",
  sections: [
    {
      heading: "Why fifteen minutes of POS data beats gut feel",
      paragraphs: [
        "Most owners run on instinct, and instinct is decent at big things and terrible at slow ones. You will notice a dead Saturday; you will not notice that Tuesday afternoons have been quietly dying for six months, or that your third-best seller stopped selling in March.",
        "Your till already knows all of this. If you use a modern system, and our guide to [what an EPOS system is](/blog/what-is-an-epos-system) explains the basics, every transaction is timestamped, itemised and sitting in a report nobody opens.",
        "The habit that works is small and boring: same fifteen minutes, same day each week, five reports, one decision. That is the whole system."
      ]
    },
    {
      heading: "The five POS reports that actually matter",
      paragraphs: [
        "Ignore ninety percent of what the dashboard offers and start with these:"
      ],
      bullets: [
        "Sales by hour: shows when you are genuinely busy, which is what your staffing rota should be built on.",
        "Sales by product: shows what sells and what sits, which drives what you reorder and what you drop.",
        "Sales by category: shows where your margin actually comes from, not just where the volume is.",
        "Refunds and voids: your leak detector for errors, unhappy customers and, occasionally, staff fraud.",
        "Year-on-year comparison: the truth serum that separates real growth from a sunny bank holiday."
      ]
    },
    {
      heading: "Sales by hour: your staffing rota, written by data",
      paragraphs: [
        "Staffing is most small businesses' biggest controllable cost, and most rotas are folklore: we have always had two people in on Tuesdays. Sales by hour replaces folklore with a bar chart.",
        "Look for two things: hours where takings do not justify the staff on shift, and hours where you are visibly losing sales to queues. Shifting one shift by two hours is often worth more than any fee negotiation you will ever have.",
        "Do this check monthly rather than weekly; staffing patterns move with seasons, not days. A quarter of data is enough to justify changing a rota you have run for years."
      ]
    },
    {
      heading: "Products and categories: range decisions without sentiment",
      paragraphs: [
        "The product report is where sentiment goes to die. Every shop and cafe carries lines the owner likes that customers do not buy, and the report names them without embarrassment. If it has not sold in eight weeks, it is not stock, it is furniture.",
        "Category reports add the margin dimension. Volume is vanity if it all comes from your lowest-margin category; a cafe shifting mountains of £1.20 flat whites while the £4.50 lunches go unsold has a mix problem the till can see and the queue cannot.",
        "Pair the two monthly: kill or discount the dead lines, give shelf space and menu position to the high-margin movers, and let stock alerts reorder the rest. Retailers can go deeper with a dedicated [retail POS setup](/pos-systems/retail) that ties reports to stock levels."
      ]
    },
    {
      heading: "Refunds, voids and the leak report",
      paragraphs: [
        "The refunds and voids report is dull right up until it saves you. A slow rise in refunds flags a product or service problem; a cluster of voids on one staff member's shifts flags a training gap, or occasionally something worse.",
        "Check it weekly and look for patterns, not single events. One refund is a Tuesday; the same item refunded five times is a supplier conversation; refunds that cluster around one till login deserve a quiet look at the CCTV timestamps.",
        "This is also your early-warning system for card disputes, because most chargebacks start life as a refund request you never saw. Catching them at the till is far cheaper than fighting them at the bank."
      ]
    },
    {
      heading: "Free reporting vs paid: what you actually get",
      paragraphs: [
        "The free tiers are genuinely useful now. Square's free POS software includes sales by time, item and category plus basic staff reporting, and SumUp and Zettle cover similar ground; our roundup of [free POS software](/blog/free-pos-software-uk) compares them properly.",
        "Paid tiers mostly add depth rather than different truths: longer history, better stock control and alerts, staff performance breakdowns, multi-site views and accounting integrations. Worthwhile once you have staff and stock, unnecessary before.",
        "The honest advice: exhaust the free reports before paying for anything. If you are not acting on five free reports, a £40-a-month dashboard will not save you; if you are outgrowing them, [compare POS systems](/compare-pos-systems) before upgrading."
      ]
    },
    {
      heading: "One report, one decision: the weekly ritual",
      paragraphs: [
        "Data only earns its keep when it changes something, so end every weekly fifteen minutes with a single decision. Move a shift, reorder a winner, drop a dead line, ring the supplier about the refund cluster; small, concrete, done by Friday.",
        "A simple rotation keeps it fresh: hours one week, products the next, then categories, then refunds, with the year-on-year check monthly. Twelve weeks in you will have made a dozen small improvements that compound.",
        "And resist dashboard hoarding. Five reports read weekly beat fifty reports admired never; the till is there to answer questions, not to become a hobby."
      ]
    }
  ],
  faqs: [
    {
      q: "What POS reports should a small business look at?",
      a: "Five cover almost everything: sales by hour for staffing, sales by product for range decisions, sales by category for margin mix, refunds and voids for spotting leaks, and year-on-year comparisons for honest performance. Fifteen minutes a week on these beats any amount of dashboard browsing."
    },
    {
      q: "Are free POS reports good enough for a small business?",
      a: "Usually, yes. Free tiers from Square, SumUp and Zettle include sales by time, item and category, which covers the decisions most small businesses need to make. Paid tiers add longer history, stock alerts and staff breakdowns, which start to matter once you have employees and meaningful stock."
    },
    {
      q: "How do POS reports help with staffing?",
      a: "The sales-by-hour report shows exactly when revenue justifies staff and when it does not, replacing rota guesswork with evidence. Look for quiet hours that are overstaffed and busy hours where queues are costing sales. Reviewing a month of data each quarter is enough to keep the rota matched to reality."
    },
    {
      q: "Can POS reports detect staff theft?",
      a: "They can flag the patterns that warrant a closer look. Refunds or voids that cluster around one staff login, no-sale drawer openings and discounts outside policy are the classic signals. A single event means nothing; a repeating pattern on the refunds and voids report is worth investigating calmly and privately."
    }
  ],
  relatedPosts: ["what-is-an-epos-system", "free-pos-software-uk", "how-much-does-a-pos-system-cost-uk"],
  relatedLinks: [
    { label: "Compare POS systems", href: "/compare-pos-systems" },
    { label: "POS systems for retail", href: "/pos-systems/retail" },
    { label: "POS systems for restaurants", href: "/pos-systems/restaurants" }
  ]
},
{
  slug: "card-machine-security-tips",
  title: "Card Machine Security: The Scams That Actually Target Small Businesses",
  excerpt: "Skimming is rare on modern card machines. The real threats are staff refund fraud, upgrade phone scams and fake payment screens. Here is how to stop them.",
  category: "How-to",
  author: "Nathan Keeble",
  date: "2026-07-10",
  readMinutes: 8,
  featuredImage: "/images/blog/card-machine-security-tips.webp",
  featuredAlt: "A sturdy padlock on a dark background",
  intro: "Card machine security worries tend to focus on the wrong villain. Hollywood-style skimming is genuinely rare on modern encrypted terminals; the scams that actually cost UK small businesses are far more mundane. Staff processing refunds to their own cards, phone callers offering terminal upgrades, customers flashing fake payment screens and chargeback fraud do the real damage. This guide covers each one, with the practical fixes that stop them.",
  sections: [
    {
      heading: "The good news first: skimming is mostly yesterday's problem",
      paragraphs: [
        "Modern card machines encrypt card data from the moment of contact, and chip-and-PIN plus tokenised contactless leave very little for a criminal to skim. Attacks on the terminal hardware itself are rare and getting rarer, which is why the fraudsters moved on.",
        "Where they moved to is people. Every scam in this guide targets a human being, your staff, you, or your processes, rather than the electronics. That is oddly good news, because process problems are fixable for free.",
        "Basic hygiene still applies: buy terminals from the provider, not a marketplace bargain, keep software updated, and glance at the device occasionally for anything bolted on. Then spend your real attention on the four threats below."
      ]
    },
    {
      heading: "Threat one: refund fraud by your own staff",
      paragraphs: [
        "The most expensive card machine scam in most small businesses is an inside job: a staff member processes refunds to their own card. No sale is reversed on the shelf, the till balances at a glance, and the money leaves quietly in £20 and £40 increments.",
        "The fix is permissions, not paranoia. Most modern systems let you lock refunds behind a manager PIN or a named login, and every decent [card machine](/compare-card-machines) or POS has some version of this. If anyone on the shop floor can refund without a second pair of eyes, you are running an honesty system.",
        "Back it up with the refunds report. Refunds clustering on one login, or refunds processed outside trading hours, are the pattern to watch; review weekly and the window for quiet theft shrinks to days."
      ]
    },
    {
      heading: "Threat two: the terminal upgrade phone scam",
      paragraphs: [
        "A caller claims to be from your card provider: your terminal needs an urgent upgrade, or your account needs re-verifying, and they just need a merchant ID, some codes, or for you to key a few numbers into the machine. Some even send a courier to swap your terminal for a doctored one.",
        "The rule that defeats all versions of it: never act on an unsolicited call about your card machine. Hang up, find the provider's number from your statement or their website, and call back; a genuine provider will not mind, and a fraudster cannot survive it.",
        "Brief your staff specifically, because these callers deliberately ring at busy times and lean on urgency. A one-line policy, nobody touches the terminal or reads out codes on an incoming call, is enough."
      ]
    },
    {
      heading: "Threat three: the fake payment confirmation screen",
      paragraphs: [
        "This one is brazen and effective: a customer shows you their phone displaying a payment confirmation, a banking app screenshot or a bank-transfer-sent screen, and walks out with the goods. The screen was a screenshot, an app that generates fakes, or a payment they cancelled seconds later.",
        "The rule is simple: the sale is confirmed on your device, never theirs. Until your terminal shows approved or your POS logs the transaction, no payment has happened, however convincing the customer's screen looks.",
        "For bank transfers the same applies: money is real when it is in your account, not when a sending screen is waved at you. On big-ticket items, wait for the credit to land before goods leave; a genuine buyer will understand."
      ]
    },
    {
      heading: "Threat four: chargeback fraud",
      paragraphs: [
        "Chargeback fraud, sometimes politely called friendly fraud, is a customer disputing a genuine card payment with their bank: the classic claims are goods never arrived or transaction not recognised. Card-not-present sales are the main target, which is one reason [remote payments cost more](/guides/what-is-a-virtual-terminal) than in-person taps.",
        "Your defence is evidence, gathered before you need it: itemised receipts, delivery confirmation with signature or photo, written terms shown at purchase, and correspondence. In-person chip-and-PIN and contactless sales are hard to dispute; remote sales live and die on paperwork.",
        "Respond to every chargeback inside the deadline, because silence is an automatic loss. Our guide to [chargebacks for UK small businesses](/blog/chargebacks-uk-small-business) covers the process step by step."
      ]
    },
    {
      heading: "Reconciliation: the boring safety net that catches everything",
      paragraphs: [
        "End-of-day reconciliation, comparing what the terminal says you took against what the till says you sold, is the single habit that catches every scam above. Refund fraud, cancelled payments and missing transactions all surface as a mismatch between the two numbers.",
        "It takes five minutes: run the terminal's end-of-day total, run the POS sales total, and explain any gap before you lock up. A pound of drift is life; a recurring £40 gap on Thursdays is a pattern with a name attached.",
        "Do it daily even on quiet days, precisely because quiet days are when nobody is watching. Fraud survives on the assumption that no one checks."
      ]
    },
    {
      heading: "PCI basics without the panic",
      paragraphs: [
        "PCI DSS is the card industry's security standard, and for most small businesses using a modern provider it is far less scary than it sounds: the provider's hardware and software do the heavy lifting, and you complete a short annual self-assessment.",
        "The practical rules are the ones you would guess: never write card numbers down, never take card details by email, and use your provider's virtual terminal or payment links for remote orders rather than a notepad. Storing card numbers yourself is the one genuinely dangerous habit.",
        "Some traditional providers charge monthly PCI compliance or non-compliance fees, which flat-rate providers generally do not; our guide to [PCI compliance fees](/blog/pci-compliance-fees-uk) explains what is legitimate and what is padding."
      ]
    }
  ],
  faqs: [
    {
      q: "What are the most common card machine scams targeting small businesses?",
      a: "The big four are staff refund fraud, where refunds are processed to an employee's own card; the terminal upgrade phone scam, where callers extract codes or swap your machine; customers showing fake payment confirmation screens; and chargeback fraud on remote sales. Skimming of modern encrypted terminals is rare by comparison."
    },
    {
      q: "How do I stop staff processing fraudulent refunds on my card machine?",
      a: "Lock refunds behind a manager PIN or named login so no one can refund unsupervised, and review the refunds and voids report weekly. Watch for refunds clustering on one login or occurring outside trading hours. Daily reconciliation of terminal totals against POS sales closes the loop, because refund fraud shows up as a mismatch."
    },
    {
      q: "Is card machine skimming still a risk in the UK?",
      a: "It is rare on modern terminals, because card data is encrypted from the moment of contact and contactless payments are tokenised. The residual risks are buying second-hand terminals from unofficial sources or letting a stranger handle your machine. Buy from the provider, keep software updated, and focus your worry on the human scams instead."
    },
    {
      q: "Should I trust a payment confirmation shown on a customer's phone?",
      a: "No. Screenshots and fake banking apps are trivially easy to produce, and a shown screen is not a settled payment. The transaction is only real when your own terminal shows it as approved or the money is visible in your account. For high-value bank transfers, wait for the funds to land before handing over goods."
    }
  ],
  relatedPosts: ["chargebacks-uk-small-business", "pci-compliance-fees-uk", "card-machine-not-working"],
  relatedLinks: [
    { label: "Hidden card machine fees", href: "/guides/hidden-card-machine-fees" },
    { label: "Compare card machines", href: "/compare-card-machines" },
    { label: "Get POS quotes", href: "/get-pos-quotes" }
  ]
},
];
