export const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Proof" },
  { href: "/free-audit", label: "Free Audit" },
];

export const footerLinks = [
  { href: "/whats-included", label: "What's Included" },
  { href: "/why-were-different", label: "Why Different" },
  { href: "/electricians", label: "Electricians" },
  { href: "/plumbers-drainage", label: "Plumbers / Drainage" },
  { href: "/roofers", label: "Roofers" },
  { href: "/contact", label: "Contact" },
];

export const brand = {
  name: "Tradie Front Desk",
  fullName: "The Tradie Front Desk System",
  byline: "by System Pros AI",
  logo: "/tradie-front-desk-logo.png",
  trustLine:
    "Not shared leads. Not just ads. Not another app. A managed front desk built for trade businesses.",
};

export const contactDetails = {
  email: "tradie@tradiefrontdesk.ai",
  phones: [
    { region: "New Zealand", value: "+64212550493", href: "tel:+64212550493", available: true },
    { region: "Australia", value: "+61 2 3821 3526", href: "tel:+61238213526", available: true },
    { region: "United States", value: "+1 877-320-7259", href: "tel:+18773207259", available: true },
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
  ["Is this just lead generation?", "No. The core system is about handling the enquiries you already get. Campaigns can be added later if you want more volume."],
  ["Do I have to run ads?", "No. Ads are optional and usually only make sense once your front desk can handle new enquiries fast."],
  ["Will a machine be talking to my customers?", "No. The system runs on approved texts, emails, forms, missed-call replies, and follow-up. Any phone answering is optional, controlled, and uses scripts you sign off on."],
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

export const tradePages = {
  electricians: {
    path: "/electricians",
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
    path: "/plumbers-drainage",
    eyebrow: "For plumbers",
    title: "An urgent plumbing call needs a fast front desk.",
    text: "Handle after-hours leaks, blocked-drain enquiries, missed calls, quote follow-up, and past-customer reactivation with one clear process.",
    cta: "Book a Free Plumbing Front Desk Audit",
    examples: ["After-hours leak", "Blocked drain enquiry", "Missed call during a job", "Quote request follow-up", "Old customer reactivation"],
    flow: "7:30pm leak call -> text-back and triage -> owner or on-call alert, or next-morning callback",
    objections: ["Urgent jobs get routed by rule.", "High-risk requests never get promised by a machine."],
    videoId: "PlumbersHeroVideo",
  },
  roofers: {
    path: "/roofers",
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
