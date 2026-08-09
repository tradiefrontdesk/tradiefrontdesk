export const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/case-studies/", label: "Proof" },
  { href: "/free-audit/", label: "Free Audit" },
];

export const footerLinks = [
  { href: "/whats-included/", label: "What's Included" },
  { href: "/why-were-different/", label: "Why Different" },
  { href: "/electricians/", label: "Electricians" },
  { href: "/plumbers-drainage/", label: "Plumbers / Drainage" },
  { href: "/roofers/", label: "Roofers" },
  { href: "/contact/", label: "Contact" },
];

// Regional pages. Footer-linked only, like the problem pages — the navbar
// stays clean. NZ first, then the Australian state pages.
export const locationLinks = [
  { href: "/auckland/", label: "Auckland" },
  { href: "/christchurch/", label: "Christchurch" },
  { href: "/nsw/", label: "New South Wales" },
  { href: "/queensland/", label: "Queensland" },
  { href: "/victoria/", label: "Victoria" },
];

// Problem-led pages. Kept out of navItems deliberately: the client's
// instruction is a clean navbar with discovery carried by the footer. The
// crawl weight the nav would have given these pages is carried instead by
// contextual body links — the problem pages link out to the trade pages, and
// the trade pages and homepage link back.
export const problemLinks = [
  { href: "/missed-calls/", label: "Missed Calls" },
  { href: "/quote-follow-up/", label: "Quote Follow-Up" },
  { href: "/after-hours-cover/", label: "After-Hours Cover" },
  { href: "/qualifying-enquiries/", label: "Qualifying Enquiries" },
];

export const brand = {
  name: "Tradie Front Desk",
  fullName: "The Tradie Front Desk System",
  byline: "by System Pros AI",
  logo: "/logo.png",
  trustLine:
    "Not shared leads. Not just ads. Not another app. A managed front desk built for trade businesses.",
};

// NAP consistency: `value` is the DISPLAY format and is deliberately uniform
// across all three regions — international prefix, then space-separated groups.
// Three different formats were rendering before (unspaced NZ, spaced AU, dashed
// US), which is precisely the inconsistency that undermines a citation profile.
// `href` stays unformatted because tel: URIs must not contain spaces.
export const contactDetails = {
  email: "tradie@tradiefrontdesk.ai",
  phones: [
    { region: "New Zealand", value: "+64 21 255 0493", href: "tel:+64212550493", available: true },
    { region: "Australia", value: "+61 2 3821 3526", href: "tel:+61238213526", available: true },
    { region: "United States", value: "+1 877 320 7259", href: "tel:+18773207259", available: true },
  ],
};

export const legalDetails = {
  effectiveDate: "7 May 2026",
  providerLabel: "System Pros AI, The AI and Automation Agency LTD, and Altcutm LLC",
  providerEntities: ["System Pros AI", "The AI and Automation Agency LTD", "Altcutm LLC"],
  contactEmail: contactDetails.email,
};

export const disclaimer =
  "Tradie Front Desk helps improve enquiry capture, response, follow-up, and organisation. Results depend on your market, services, pricing, availability, reputation, customer demand, ad budget, and how quickly your team responds to opportunities. We do not guarantee exact job numbers, revenue, profit, rankings, leads, bookings, or reviews.";

// Trust signals. Every item here is a fact the client supplied and confirmed;
// nothing is inferred or rounded up. Notes on what was deliberately NOT used
// are in docs/trust-signals-plan.md.
//
// The closing line is doing real work: these are IT and systems credentials,
// not trade qualifications, and saying so plainly is more credible than
// letting a reader assume otherwise and find out later.
export const trustSignals = {
  cap: "Fig. — who you are actually dealing with",
  title: "A small New Zealand outfit with a long IT background.",
  intro:
    "No testimonials yet, because we are not going to write our own. What we can tell you is who is behind this and what they have actually done.",
  items: [
    [
      "A registered business, in two countries",
      "Registered in New Zealand as The AI and Automation Agency LTD, and in the United States as Altcutm LLC. Both are on the public registers if you want to check before you talk to anyone.",
    ],
    [
      "Thirty years in IT",
      "Infrastructure, security and systems, since well before any of this was called a front desk. The reason that matters to you is uptime: the thing catching your enquiries is built by someone who has spent three decades on systems that are not allowed to fall over.",
    ],
    [
      "CompTIA Linux+ certified",
      "Plus ongoing training in Linux administration, networking and IT security. One named certification from a recognised body, rather than a long list — you can look up what it takes.",
    ],
    [
      "GoHighLevel award winner",
      "A gold-tier award in 2025 for the scale of client systems built and managed one-to-one. Thousands of client accounts set up and run over the years.",
    ],
    [
      "Verified team members",
      "We work with a small team of assistants, and each one is verified for the specific work they do before they touch a client account — not certified in the abstract, checked on the actual job.",
    ],
    [
      "We train other people in this work",
      "Alongside running front desks, we run a training operation teaching these systems to people who do this for a living. It is a fair test of whether you actually know something.",
    ],
  ] as [string, string][],
  close:
    "One thing worth being straight about: these are IT and systems credentials, not trade qualifications. You know your trade better than we ever will. What we know is the systems that stop enquiries going missing while you are on the tools.",
};

export const corePromise = "More booked jobs. Less chasing. No tech headaches.";
export const heroPromise =
  "Stop losing good jobs to missed calls, slow replies, and forgotten follow-up.";
export const mechanism = ["Capture", "Respond", "Qualify", "Book", "Follow Up"];

export const trustItems = [
  ["Missed-call recovery", "Miss a call on a roof at 2pm? The system texts the caller back and keeps the job alive."],
  ["Fast enquiry replies", "Website forms, texts, and campaign enquiries get a prompt, professional reply instead of silence."],
  ["Quote follow-up", "The quote you sent Friday gets chased properly instead of sitting in your sent folder."],
  ["Quote / site-visit booking", "Good-fit customers get moved toward a callback, quote, or site visit."],
  ["Clear owner handoff", "You keep control of pricing, promises, and which jobs you take on."],
];

export const processSteps = [
  {
    title: "Capture",
    text: "Calls, missed calls, forms, texts, social messages, Google messages, old leads, and campaign enquiries all land in one process.",
  },
  {
    title: "Respond",
    text: "The customer gets a fast, professional reply while you are still on the tools.",
  },
  {
    title: "Qualify",
    text: "The system collects job type, location, urgency, photos, service-area fit, and the next best step.",
  },
  {
    title: "Book",
    text: "Interested customers get moved toward a callback, quote request, site visit, or booking. You stay in control.",
  },
  {
    title: "Follow Up",
    text: "Quiet leads, sent quotes, and old enquiries get followed up. Nothing rides on your memory.",
  },
];

export const modules = [
  ["Missed Call Saver", "Miss a call and the system texts the caller straight back, so the job does not go to the next tradie."],
  ["Instant Enquiry Reply", "Website forms, campaign leads, and messages get a fast reply before the customer moves on."],
  ["Quote Request Form", "Collect job type, location, urgency, photos, and preferred callback time upfront."],
  ["Job Qualification Flow", "Ask the right questions so the jobs worth your time are easy to spot."],
  ["Callback / Site Visit Booking", "Move customers toward a callback, site visit, quote, or booking."],
  ["Follow-Up Engine", "Follow up when customers go quiet, without relying on your memory."],
  ["Quote Follow-Up", "Stop sending quotes and hoping. Every quote gets chased properly."],
  ["Simple Opportunity Pipeline", "See new enquiries, callbacks, quoted jobs, follow-ups, won jobs, and lost jobs at a glance."],
  ["Old Lead Reactivation", "Optional add-on: re-contact dormant quotes and past customers to surface hidden jobs."],
  ["Review Request Flow", "Ask happy customers for a Google review once the job is done."],
  ["Optional Phone Answering", "When you cannot pick up, an answering assistant captures the caller's details using your approved script and clear handoff rules."],
  ["Local Campaign Booster", "Optional add-on once the front desk is ready to handle new enquiries."],
  ["Website Enquiry Upgrade", "Turn your website into a clear path from visitor to quote request."],
];

// Currency, confirmed by the client 8 Aug 2026. Stated once here and rendered
// wherever prices appear, rather than repeated inline on every figure.
// GST confirmed by the client 9 Aug 2026: prices exclude it. This is the one
// place the wording lives — it renders on the homepage and pricing packages,
// and the same fact appears in prose on the guides and location pages.
export const pricingCurrencyNote =
  "All prices are shown in New Zealand dollars (NZD) and exclude GST.";

export const packages = [
  {
    name: "Front Desk Starter",
    badge: "Stop the leaks",
    price: "From $1,500 setup + $497/month",
    bestFor: "Smaller trade businesses that mainly need missed-call recovery, fast replies, and simple follow-up.",
    includes: [
      "Basic Front Desk Audit",
      "Missed-call text-back",
      "Instant enquiry reply",
      "Basic quote / contact form",
      "Simple follow-up sequence",
      "Simple opportunity pipeline",
      "Owner notifications",
      "Launch testing",
      "Monthly system check",
    ],
    excludes: ["Ads", "Phone answering", "Old-lead reactivation", "Complex integrations"],
    cta: "See If Starter Fits",
  },
  {
    name: "Booked Jobs System",
    badge: "Flagship",
    featured: true,
    price: "From $2,500 setup + $1,200/month",
    bestFor: "Established tradies that need enquiries captured, qualified, booked, followed up, and tracked.",
    includes: [
      "Detailed Front Desk Audit",
      "Enquiry capture across your key channels",
      "Missed-call recovery",
      "Instant SMS and email reply",
      "Quote request form",
      "Job qualification questions",
      "Callback, quote, or site-visit booking",
      "Quote follow-up sequence",
      "No-response follow-up",
      "Simple opportunity pipeline",
      "Owner notifications",
      "Monthly management",
      "Monthly reporting summary",
    ],
    excludes: ["Paid campaigns unless added", "Full old-lead reactivation unless added", "Phone answering unless selected"],
    cta: "Book an Audit for This Package",
  },
  {
    name: "Managed Growth System",
    badge: "Expansion",
    price: "From $4,000 setup + $2,000/month + ad spend",
    bestFor: "Growth-focused trade businesses ready to add more enquiries once the front desk is working.",
    includes: [
      "Everything in Booked Jobs System",
      "Local campaign booster when listed",
      "Old-lead reactivation when listed",
      "Past-customer campaign when listed",
      "Review growth system",
      "Website enquiry upgrade",
      "Phone answering or message assistant if selected",
      "Advanced reporting",
      "Monthly optimisation",
    ],
    excludes: ["Ad spend", "Guaranteed lead cost or job numbers", "Unlimited campaigns or creative"],
    cta: "Apply for Managed Growth",
  },
];

export const faqs = [
  ["Is this just lead generation?", "No. The core system is about handling the enquiries you already get, and most businesses find more work there than they expected. We do run paid campaigns as a separate service, but only once the front desk is in place to catch what they bring in."],
  ["Do I have to run ads?", "No. Campaigns are optional and only make sense once your front desk can handle new enquiries fast — we will not run them before that. If you do want more volume later, we build and run Meta and Google campaigns, and the order we work in is explained on our campaigns page."],
  ["Will a machine be talking to my customers?", "Not in an open-ended way, and never off its own bat. The system runs on approved texts, emails, forms, missed-call replies and follow-up — every message worded and signed off by you in advance. Optional phone answering, if you add it, works from a script you write, with clear rules for what gets handed straight to you. Nothing improvises and nothing makes a decision you have not approved."],
  ["Can it book jobs on its own?", "It can help book callbacks, quote requests, site visits, or appointments based on your rules. You stay in control of what you accept and what you promise."],
  ["What if I already use job software?", "Tradie Front Desk handles enquiry capture, response, follow-up, and booking. It can sit alongside your job software when that connection is listed in the proposal."],
  ["Can you guarantee more jobs?", "No. We guarantee the agreed system gets built, tested, launched, and fixed if a proposal-listed part is not working. We do not guarantee exact job numbers, revenue, or what customers decide to do."],
  ["What do you need from me?", "Business details, services, service areas, access, approved messages, and timely feedback during setup."],
];

export const proofMetrics = [
  ["Calls caught", "Missed-call replies and owner handoffs."],
  ["Replies sent", "Fast responses across forms, calls, and messages."],
  ["Follow-ups completed", "No-response, quote, and old-lead follow-up."],
  ["Bookings created", "Callbacks, quote requests, site visits, and next steps."],
  ["Reviews requested", "Genuine review requests after completed jobs."],
];

export const proofExamples = [
  {
    slug: "missed-call-flow",
    business: "Missed Call Flow",
    headline: "A Missed Call Turns Into A Reply And A Clear Handoff",
    shortHeadline: "Missed call to next action",
    industry: "Worked example",
    location: "Trade business example",
    snapshot: "You are on a roof at 2pm and cannot answer. The caller is about to ring the next tradie.",
    system: ["Missed-call text-back", "Urgency question", "Job detail capture", "Owner notification", "Pipeline stage"],
    result: "The caller gets a fast reply and you see a clear next action, instead of finding a loose missed call hours later.",
    reported: "Illustration of the process, not a guaranteed outcome. Results depend on your market, response speed, and follow-through.",
  },
  {
    slug: "quote-follow-up-flow",
    business: "Quote Follow-Up Flow",
    headline: "Sent Quotes Stop Living Or Dying On Your Memory",
    shortHeadline: "Quote sent to follow-up",
    industry: "Worked example",
    location: "Quote-based trades",
    snapshot: "You sent a quote on Friday. The customer went quiet and no one remembers to check in.",
    system: ["Quote stage", "Approved follow-up message", "Reply routing", "Owner alert", "Won / lost tracking"],
    result: "The quote gets a professional follow-up and stays visible until there is an outcome.",
    reported: "Shown to demonstrate the process, not to promise how customers will behave. Results are not guaranteed and may not be typical.",
  },
  {
    slug: "old-lead-reactivation-flow",
    business: "Old Lead Reactivation Flow",
    headline: "Dormant Quotes And Past Customers Get Checked Again",
    shortHeadline: "Old lead to active pipeline",
    industry: "Worked example",
    location: "Local service businesses",
    snapshot: "Old enquiries, past quotes, and previous customers sit untouched in a list.",
    system: ["List review", "Approved check-in message", "Reply routing", "Callback booking", "Pipeline tagging"],
    result: "Interested replies get routed back into the front desk for your review.",
    reported: "For illustration only. List quality, legality, timing, and customer demand all affect results.",
  },
];

export const caseStudies = proofExamples;

/**
 * Real, named clients. Published with the client's permission, confirmed by
 * the business owner on 9 August 2026.
 *
 * These are deliberately kept separate from `proofExamples` above, which are
 * illustrations of a mechanism with no client behind them. Mixing the two
 * would let an invented example borrow credibility from a real one.
 *
 * THREE RULES THIS DATA FOLLOWS, and the reasoning, because the temptation to
 * break each one is obvious:
 *
 * 1. SCOPE IS STATED. Every one of these was a full custom build — website,
 *    search visibility, and the front-desk system together. The packages sold
 *    on /pricing/ are the front desk on its own. A reader who buys the $497
 *    package expecting Kurt's result has been misled by us, so `scope` says
 *    what was actually delivered and it renders on the page.
 *
 * 2. NO INVENTED PRECISION. The martial arts club's month-by-month growth was
 *    described by the owner as a rough fair impression, not a figure pulled
 *    from a report. It is therefore written as accelerating growth across
 *    three months, with no percentages. Same call already made on the
 *    sub-account count in the trust band. If a real report surfaces later,
 *    the numbers can go in then.
 *
 * 3. NON-TRADE CLIENTS ARE LABELLED AS SUCH. Two of the three are not trade
 *    businesses. They earn their place by showing the same system working in
 *    another industry, and `industry` says so plainly rather than letting a
 *    skimming tradie assume otherwise.
 */
export const clientStories = [
  {
    slug: "ka-plumbing",
    isClient: true,
    business: "KA Plumbing",
    industry: "Plumbing — a trade business",
    location: "New Zealand",
    headline: "A Newly Qualified Plumber, Booked Out Inside Five Months",
    shortHeadline: "Apprenticeship to fully booked",
    snapshot:
      "Kurt had just finished his apprenticeship and started on his own. No customer list, no website, no reputation to trade on — the hardest position a good tradie can be in.",
    scope:
      "A full custom build, not the standalone front-desk package: a 38-page website built for search, corrections to how the business appeared on Google, and the front-desk system on top of it — enquiry capture, booking, and after-hours cover.",
    system: [
      "38-page website built for search",
      "Google presence corrected",
      "Enquiry capture across calls, forms and messages",
      "Online booking into his own calendar",
      "After-hours enquiry cover",
      "Quote follow-up",
    ],
    result:
      "Over roughly five months his calendar filled to the point of being booked out, and he took on his first apprentice to keep up with the work.",
    reported:
      "Reported by the client. The growth came from the whole build working together — search visibility, the website, and the front desk — not from any single part of it on its own. A new business starting from nothing has more room to grow than an established one, and results depend on trade, market and demand.",
  },
  {
    slug: "superior-taekwondo",
    isClient: true,
    business: "Superior Taekwondo",
    industry: "Martial arts club — not a trade business",
    location: "New Zealand",
    headline: "Three Straight Months Of Growth Through A New Location Opening",
    shortHeadline: "Same system, different industry",
    snapshot:
      "A martial arts club opening a second location, needing enrolments to arrive and be handled without the instructors doing admin between classes.",
    scope:
      "A full custom build: search-focused pages, the front-desk system, and online booking with payment taken up front.",
    system: [
      "Search-focused pages for the club",
      "Enquiry capture and reply",
      "Online booking",
      "Payment collected at booking",
      "After-hours enquiry cover",
    ],
    result:
      "Enrolment growth in each of the first three months after the new location opened, and the rate of growth increased month on month rather than tailing off.",
    reported:
      "Reported by the client as a fair impression rather than a figure taken from a report, which is why no percentage is given here. Included because it shows the same system working outside the trades — a martial arts club is not a plumbing business, and the comparison only goes so far.",
  },
  {
    slug: "hair-by-melissa",
    isClient: true,
    business: "Hair By Melissa",
    industry: "Hair salon — not a trade business",
    location: "New Zealand",
    headline: "From No Online Presence To Booked Three Months Ahead",
    shortHeadline: "Nothing to a full diary",
    snapshot:
      "A small boutique salon starting from nothing online: no website, no booking system, and every enquiry arriving by phone or message to be handled between clients.",
    scope:
      "A full custom build: a website built for search, enquiry capture, and online booking — a whole front desk where there had not been one.",
    system: [
      "Website built for search",
      "Enquiry capture across channels",
      "Online booking",
      "After-hours enquiry cover",
      "Reminders and follow-up",
    ],
    result:
      "The diary now runs about three months ahead, and enquiries are captured and booked without interrupting a client in the chair.",
    reported:
      "Reported by the client. A boutique salon with one chair fills differently from a trade business with vans on the road, and a business starting from no online presence has the most obvious room to gain. Results depend on demand, capacity and market.",
  },
];

export const tradePages = {
  electricians: {
    path: "/electricians/",
    eyebrow: "For electricians",
    title: "Electrical enquiries do not wait. Neither should your front desk.",
    text: "Catch urgent fault calls, switchboard quotes, heat pump enquiries, and EV charger requests before they go cold.",
    cta: "Book a Free Electrical Front Desk Audit",
    examples: ["Urgent fault calls", "Switchboard upgrade quotes", "Heat pump enquiries", "EV charger enquiries", "Safety check follow-up"],
    flow: "Missed fault call -> text-back -> urgent handoff or callback booked",
    objections: ["Sits alongside ServiceM8, Tradify, Fergus, Simpro, or similar when that is listed in the proposal.", "Urgent jobs route by rule, and risky promises stay under your control."],
    videoId: "ElectriciansHeroVideo",
  },
  plumbersDrainage: {
    path: "/plumbers-drainage/",
    eyebrow: "For plumbers",
    title: "An urgent plumbing call needs a fast front desk.",
    text: "Handle after-hours leaks, blocked-drain enquiries, missed calls, quote follow-up, and past-customer reactivation with one clear process.",
    cta: "Book a Free Plumbing Front Desk Audit",
    examples: ["After-hours leak", "Blocked drain enquiry", "Missed call during a job", "Quote request follow-up", "Old customer reactivation"],
    flow: "7:30pm leak call -> text-back and triage -> owner or on-call alert, or next-morning callback",
    objections: ["Urgent jobs get routed by rule.", "High-risk requests never get promised by a machine."],
    videoId: "PlumbersHeroVideo",
  },
  heatPumpInstallers: {
    path: "/heat-pump-installers/",
    eyebrow: "For heat pump installers",
    title: "Heat pump enquiries do not wait for a callback.",
    text: "Demand spikes hard once the weather turns and installers get booked out for weeks. The caller who does not hear back today is already ringing the next name on the list.",
    cta: "Book a Free Heat Pump Front Desk Audit",
    examples: ["New install enquiry", "Heat pump not heating", "Landlord compliance job", "Quote follow-up", "Annual service booking"],
    flow: "Cold-snap enquiry -> fast reply -> install slot booked",
    objections: [
      "This is not about generating more enquiries. It is about not losing the ones you are already flat out getting to — a quote that goes cold while you are up a ladder, or a caller who rings the next name because nobody replied.",
      "No. It runs on your own enquiries — the calls, forms and messages your business already receives. Nothing gets shared, sold, or shown to other installers.",
    ],
    // No Remotion composition for the Wave 4 trades. TradePage guards the
    // lookup with hasVideo, so an empty id degrades to no video band.
    videoId: "",
  },
  builders: {
    path: "/builders/",
    eyebrow: "For builders",
    title: "A good quote is not a good job until someone chases it.",
    text: "Capture renovation, new-build and reclad enquiries, book the measure-up, and keep the quote alive with follow-up — so a job you already priced does not die from six weeks of silence.",
    cta: "Book a Free Building Front Desk Audit",
    examples: ["Renovation quote request", "New build enquiry", "Kitchen or bathroom reno", "Deck or reclad job", "Measure-up booking request"],
    flow: "Renovation enquiry -> qualified -> measure-up booked -> quote followed up",
    objections: [
      "It sits alongside Buildxact, Fergus or whatever you already price and manage jobs in. The front desk only touches enquiry capture, replies, booking and follow-up — the part that usually happens on a notepad before a job gets that far.",
      "Every follow-up is wording you approved, on a cadence you set. Most people who go quiet have not said no; they are waiting on a partner, a bank, or another quote, and a short check-in is what keeps you in the running.",
    ],
    videoId: "",
  },
  painters: {
    path: "/painters/",
    eyebrow: "For painters",
    title: "Your painting season is short. A slow reply makes it shorter.",
    text: "Exterior work is squeezed into a handful of dry months, and most homeowners are comparing two or three painters. Catch the enquiry fast, qualify it properly, and keep the quote alive until you get an answer.",
    cta: "Book a Free Painting Front Desk Audit",
    examples: ["Exterior repaint enquiry", "Interior repaint quote", "Quote comparison request", "Weather-delay update", "Quiet quote follow-up"],
    flow: "Repaint enquiry -> qualified -> quote sent -> chased to an answer",
    objections: [
      "Comparing quotes is normal on a job this size, and plenty of the people doing it hire the painter who actually followed up. The front desk keeps your quote in front of them on a schedule you set, so it is not down to memory.",
      "It never promises a start date or makes a weather call — that stays with you. When you tell it a job has moved, it sends the update in your own wording, so the customer hears it from you instead of chasing you for it.",
    ],
    videoId: "",
  },
  roofers: {
    path: "/roofers/",
    eyebrow: "For roofers",
    title: "Roofing enquiries are too valuable to leave sitting.",
    text: "Protect reroofing enquiries, repair requests, inspection bookings, quote follow-up, and weather-delay updates.",
    cta: "Book a Free Roofing Front Desk Audit",
    examples: ["Reroofing enquiry", "Roof repair request", "Site inspection booking", "Quote follow-up", "Weather-delay communication"],
    flow: "Roof inspection request -> fast reply -> measure-up or site visit booked -> quote follow-up",
    objections: ["Not shared leads. The system protects your response speed, inspection bookings, and quote follow-up.", "Serious inspection requests stay visible until you decide the next step."],
    videoId: "RoofersHeroVideo",
  },
} as const;
