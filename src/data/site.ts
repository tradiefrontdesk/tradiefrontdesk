export const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "The System" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Proof" },
  { href: "/free-audit", label: "Claim Audit" },
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
  "Tradie Front Desk helps improve enquiry capture, response, follow-up, and organisation. Results depend on your market, services, pricing, availability, reputation, customer demand, ad budget, and follow-through. We do not guarantee exact job numbers, revenue, profit, rankings, leads, bookings, or reviews.";

export const corePromise = "More booked jobs. Less chasing. No tech headaches.";
export const heroPromise = "Good jobs are calling. Stop letting them slip away.";
export const mechanism = ["Capture", "Respond", "Qualify", "Book", "Follow Up"];

export const trustItems = [
  ["Missed-call recovery", "If you miss a call while on-site, the system can text back and keep the enquiry alive."],
  ["Fast enquiry replies", "Website forms, messages, and campaign enquiries can get a prompt response."],
  ["Quote follow-up", "Sent quotes get professional follow-up instead of relying on memory."],
  ["Quote/site-visit booking", "Good-fit customers move toward a callback, quote, site visit, or booking."],
  ["Clear owner handoff", "You stay in control of pricing, promises, job acceptance, and final decisions."],
];

export const processSteps = [
  {
    title: "Capture",
    text: "Calls, missed calls, forms, texts, social messages, Google messages, old leads, and campaign enquiries enter one process.",
  },
  {
    title: "Respond",
    text: "Customers get a fast, professional reply instead of silence while you are on the tools.",
  },
  {
    title: "Qualify",
    text: "The system collects job type, location, urgency, photos, service area fit, and the next best step.",
  },
  {
    title: "Book",
    text: "Interested customers are moved toward a callback, quote request, site visit, or booking while you stay in control.",
  },
  {
    title: "Follow Up",
    text: "Quiet leads, sent quotes, old leads, and review requests are followed up without manual chasing.",
  },
];

export const modules = [
  ["Missed Call Saver", "If you miss a call, the system can text the customer back and keep the enquiry alive."],
  ["Instant Enquiry Reply", "Website forms, campaign leads, and messages can get a fast response before the customer moves on."],
  ["Quote Request Form", "Collect job type, location, urgency, photos, and preferred callback time upfront."],
  ["Job Qualification Flow", "Ask the right questions so serious jobs are easier to spot and route."],
  ["Callback / Site Visit Booking", "Move customers toward a callback, site visit, quote, or booking."],
  ["Follow-Up Engine", "Follow up when customers go quiet, without relying on your memory."],
  ["Quote Follow-Up", "Stop sending quotes and hoping. Follow-up happens professionally."],
  ["Simple Opportunity Pipeline", "See new enquiries, callbacks, quoted jobs, follow-ups, won jobs, and lost jobs."],
  ["Old Lead Reactivation", "Optional add-on: re-contact dormant hot quotes and past customers to find hidden jobs."],
  ["Review Request Flow", "Ask happy customers for Google reviews after completed jobs."],
  ["Optional AI Phone", "Capture details when you cannot answer, using approved scripts and clear handoff rules."],
  ["Local Campaign Booster", "Optional add-on after the front-desk system is ready to handle new enquiries."],
  ["Website Enquiry Upgrade", "Turn your website into a clearer path from visitor to quote request."],
];

export const packages = [
  {
    name: "Front Desk Starter",
    badge: "Leak fixing",
    price: "From $1,500 setup + $497/month",
    bestFor: "Smaller trade businesses that mainly need missed-call recovery, fast replies, and simple follow-up.",
    includes: [
      "Basic Front Desk Audit",
      "Missed-call text-back",
      "Instant enquiry response",
      "Basic quote/contact form",
      "Simple follow-up",
      "Simple opportunity pipeline",
      "Owner notifications",
      "Launch testing",
      "Basic monthly system check",
    ],
    excludes: ["Ads", "AI phone", "Advanced reactivation", "Complex integrations"],
    cta: "Check If Starter Fits",
  },
  {
    name: "Booked Jobs System",
    badge: "Flagship",
    featured: true,
    price: "From $2,500 setup + $1,200/month",
    bestFor: "Established tradies that need enquiries captured, qualified, booked, followed up, and tracked.",
    includes: [
      "Detailed Front Desk Audit",
      "Enquiry capture across key channels",
      "Missed-call recovery",
      "Instant SMS/email response",
      "Quote request form",
      "Job qualification questions",
      "Callback, quote, or site-visit booking flow",
      "Quote follow-up sequence",
      "No-response follow-up",
      "Simple job opportunity pipeline",
      "Owner notifications",
      "Monthly management",
      "Monthly reporting summary",
    ],
    excludes: ["Paid campaigns unless added", "Full old lead reactivation unless added", "AI phone unless selected"],
    cta: "Book Audit For This Package",
  },
  {
    name: "Managed Growth System",
    badge: "Expansion",
    price: "From $4,000 setup + $2,000/month + ad spend",
    bestFor: "Growth-focused trade businesses ready to add more opportunities once the front desk is working.",
    includes: [
      "Everything in Booked Jobs System",
      "Local campaign booster when listed",
      "Old lead reactivation when listed",
      "Past customer campaign when listed",
      "Review growth system",
      "Website enquiry upgrade",
      "AI phone or AI messaging if selected",
      "Advanced reporting",
      "Monthly optimisation",
    ],
    excludes: ["Ad spend", "Guaranteed lead cost or job numbers", "Unlimited campaigns or creative"],
    cta: "Apply For Managed Growth",
  },
];

export const faqs = [
  ["Is this just lead generation?", "No. The core system is about handling your own enquiries properly. Campaigns can be added later if you need more volume."],
  ["Do I have to run ads?", "No. Ads are optional and usually make sense only after your front-desk process can handle new enquiries quickly."],
  ["Is AI required?", "No. AI is optional and controlled. The system can start with approved SMS, email, forms, missed-call replies, and follow-up."],
  ["Can it book jobs automatically?", "It can help book callbacks, quote requests, site visits, or appointments depending on your rules. You stay in control of job acceptance and promises."],
  ["What if I already use job software?", "Tradie Front Desk focuses on enquiry capture, response, follow-up, and booking. It can sit alongside job management software when that connection is listed in the proposal."],
  ["Can you guarantee more jobs?", "We guarantee the agreed system gets built, tested, launched, and fixed if proposal-listed parts are not working. We do not guarantee exact job numbers, revenue, or customer behaviour."],
  ["What do you need from me?", "Business details, services, service areas, access, approved messages, and timely feedback during setup."],
];

export const proofMetrics = [
  ["Calls caught", "Missed-call replies and owner handoffs."],
  ["Replies sent", "Fast customer responses across forms, calls, and messages."],
  ["Follow-ups completed", "No-response, quote, and old lead follow-up activity."],
  ["Bookings created", "Callbacks, quote requests, site visits, or next steps."],
  ["Reviews requested", "Genuine review requests after completed jobs."],
];

export const proofExamples = [
  {
    slug: "missed-call-flow",
    business: "Missed Call Flow",
    headline: "A Missed Call Becomes A Reply And Owner Handoff",
    shortHeadline: "Missed call to next action",
    industry: "Demo workflow",
    location: "Trade business example",
    snapshot: "The owner is on-site and cannot answer. The customer is likely to call the next tradie.",
    system: ["Missed-call text-back", "Urgency question", "Job detail capture", "Owner notification", "Pipeline stage"],
    result: "The customer gets a fast response and the owner sees a clear next action instead of finding a loose missed call later.",
    reported: "Operational example only. Results depend on market, response speed, and follow-through.",
  },
  {
    slug: "quote-follow-up-flow",
    business: "Quote Follow-Up Flow",
    headline: "Sent Quotes Stop Depending On Memory",
    shortHeadline: "Quote sent to follow-up",
    industry: "Demo workflow",
    location: "Quote-based trades",
    snapshot: "A quote has been sent, but the customer goes quiet and no one remembers to check in.",
    system: ["Quote stage", "Approved follow-up message", "Reply routing", "Owner alert", "Won/lost tracking"],
    result: "The quote gets a professional follow-up and the opportunity remains visible until there is an outcome.",
    reported: "Proof asset to show process, not guaranteed customer behaviour.",
  },
  {
    slug: "old-lead-reactivation-flow",
    business: "Old Lead Reactivation Flow",
    headline: "Dormant Hot Quotes And Past Customers Get Re-Checked",
    shortHeadline: "Old lead to active pipeline",
    industry: "Demo workflow",
    location: "Local service businesses",
    snapshot: "Old enquiries, past quotes, and previous customers sit untouched in a list.",
    system: ["List review", "Approved check-in message", "Reply routing", "Callback booking", "Pipeline tagging"],
    result: "Interested replies are routed back into the front-desk pipeline for owner review.",
    reported: "List legality, quality, timing, and customer demand affect results.",
  },
];

export const caseStudies = proofExamples;

export const tradePages = {
  electricians: {
    path: "/electricians",
    eyebrow: "Electricians wanted",
    title: "Electrical Jobs Are Calling. Catch Them Before They Go Cold.",
    text: "Catch urgent fault calls, switchboard quotes, EV charger enquiries, and upgrade requests before they go cold.",
    cta: "Book a Free Electrical Front Desk Audit",
    examples: ["Urgent fault calls", "Switchboard upgrade quotes", "Heat pump enquiries", "EV charger enquiries", "Safety check follow-up"],
    flow: "Missed fault call -> text-back -> urgent handoff or callback booked",
    objections: ["Works alongside ServiceM8, Tradify, Fergus, Simpro, or similar when listed in the proposal.", "Urgent jobs route by rule and risky promises stay under owner control."],
    videoId: "ElectriciansHeroVideo",
  },
  plumbersDrainage: {
    path: "/plumbers-drainage",
    eyebrow: "Plumbers wanted",
    title: "Urgent Plumbing Calls Need A Fast Front Desk.",
    text: "Handle after-hours leaks, blocked drain enquiries, missed calls, quote follow-up, and old customer reactivation with a clearer front-desk process.",
    cta: "Book a Free Plumbing Front Desk Audit",
    examples: ["After-hours leak", "Blocked drain enquiry", "Missed call during a job", "Quote request follow-up", "Old customer reactivation"],
    flow: "7:30pm leak call -> text-back + triage -> owner/on-call alert or next-morning callback",
    objections: ["Urgent jobs are routed by rule.", "High-risk requests are not promised by automation."],
    videoId: "PlumbersHeroVideo",
  },
  roofers: {
    path: "/roofers",
    eyebrow: "Roofers wanted",
    title: "Roofing Enquiries Are Too Valuable To Leave Sitting.",
    text: "Protect reroofing enquiries, roof repair requests, site inspection bookings, quote follow-up, and weather-delay communication.",
    cta: "Book a Free Roofing Front Desk Audit",
    examples: ["Reroofing enquiry", "Roof repair request", "Site inspection booking", "Quote follow-up", "Weather-delay communication"],
    flow: "Roof inspection request -> fast reply -> measure-up/site visit booked -> quote follow-up",
    objections: ["Not shared leads; the system protects response speed, inspection booking, and quote follow-up.", "Serious inspection requests stay visible until the owner decides the next step."],
    videoId: "RoofersHeroVideo",
  },
} as const;
