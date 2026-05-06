export const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/whats-included", label: "What's Included" },
  { href: "/why-were-different", label: "Why Different" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
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
    { region: "Australia", value: "Australian number coming soon", href: "", available: false },
    { region: "United States", value: "USA number coming soon", href: "", available: false },
  ],
};

export const legalDetails = {
  effectiveDate: "7 May 2026",
  providerLabel: "System Pros AI, The AI and Automation Agency LTD, and Altcutm LLC",
  providerEntities: ["System Pros AI", "The AI and Automation Agency LTD", "Altcutm LLC"],
  contactEmail: contactDetails.email,
};

export const disclaimer =
  "The Tradie Front Desk System helps improve enquiry capture, response, follow-up, and organisation. Results depend on your market, services, pricing, availability, reputation, customer demand, ad budget, and follow-through. We do not guarantee exact job numbers, revenue, profit, rankings, leads, bookings, or reviews.";

export const mechanism = ["Capture", "Respond", "Qualify", "Book", "Follow Up"];

export const processSteps = [
  {
    title: "Capture",
    text: "Calls, missed calls, forms, quote requests, campaign leads, and messages are captured into one process.",
  },
  {
    title: "Respond",
    text: "Customers get a fast acknowledgement so they know you received their enquiry, even when you are busy.",
  },
  {
    title: "Qualify",
    text: "The system asks for useful details like job type, location, urgency, photos, and preferred callback time.",
  },
  {
    title: "Book",
    text: "Good-fit enquiries move toward a callback, quote request, site visit, or next step while you stay in control.",
  },
  {
    title: "Follow Up",
    text: "If customers go quiet, the system follows up so opportunities do not depend on your memory.",
  },
];

export const modules = [
  ["Missed Call Saver", "Catch missed calls before they go cold with an instant text-back."],
  ["Instant Enquiry Response", "Website forms and quote requests get an immediate acknowledgement."],
  ["Quote Request Form", "Collect job type, location, urgency, photos, and preferred callback time."],
  ["Lead Qualification Flow", "Ask the right questions to identify good-fit jobs and urgent enquiries."],
  ["Booking or Callback System", "Move customers toward a callback, quote, or site visit without losing control."],
  ["Follow-Up Engine", "Follow up with customers who do not reply, book, or move forward."],
  ["Quote Follow-Up", "Stop sending quotes and hoping by checking in after quotes are sent."],
  ["Simple Job Pipeline", "Track new enquiries, callbacks, quoted jobs, follow-ups, won jobs, and lost jobs."],
  ["Owner Notifications", "Know when a new enquiry, customer reply, urgent job, or follow-up needs action."],
  ["Customer Database", "Store enquiries, customers, quotes, and past contacts for future follow-up."],
  ["Optional Local Campaigns", "Feed more quote requests into the system when you are ready for volume."],
  ["Optional AI Phone Assistant", "Capture details after hours or when you cannot answer, with owner review."],
  ["Optional Review Builder", "Ask happy customers for Google reviews after completed jobs."],
  ["Optional Old Lead Reactivation", "Recontact old enquiries, past quotes, and previous customers."],
];

export const packages = [
  {
    name: "Front Desk Starter",
    badge: "Practical first system",
    price: "From $997 setup + $297/month",
    bestFor: "Smaller trade businesses that need basic enquiry capture and missed-call recovery.",
    includes: [
      "Missed Call Saver",
      "Basic quote/contact form",
      "Instant enquiry response",
      "Basic follow-up",
      "Simple job pipeline",
      "Owner notifications",
      "Monthly system check",
    ],
    excludes: ["Managed ad campaigns", "Advanced quote follow-up", "AI phone assistant unless added"],
    cta: "Check If Starter Fits",
  },
  {
    name: "Booked Jobs System",
    badge: "Most Popular",
    featured: true,
    price: "From $1,500 setup + $750/month",
    bestFor: "Growing trade businesses that want better qualification, follow-up, and booking support.",
    includes: [
      "Everything in Starter",
      "Advanced quote request form",
      "Lead qualification flow",
      "Callback or booking process",
      "Quote follow-up sequence",
      "Pipeline automation",
      "Monthly optimisation",
    ],
    excludes: ["Paid campaign management unless added", "Full old lead reactivation unless added", "Large custom integrations"],
    cta: "Book Audit For This Package",
  },
  {
    name: "Managed Growth System",
    badge: "For active growth",
    price: "From $2,500 setup + $1,500/month + ad spend",
    bestFor: "Established trade businesses ready for more enquiries and managed growth.",
    includes: [
      "Everything in Booked Jobs System",
      "Local campaign setup and management",
      "Old lead reactivation",
      "Review request automation",
      "Optional AI phone assistant",
      "Campaign-to-pipeline tracking",
      "Monthly growth review",
    ],
    excludes: ["Ad spend", "Guaranteed lead cost or job numbers", "Unlimited campaigns or creative"],
    cta: "Apply For Managed Growth",
  },
];

export const faqs = [
  ["Is this just a lead generation service?", "No. We do not sell shared leads. The system helps your business capture, respond to, follow up with, and organise its own enquiries. If you need more enquiry volume, campaigns can be added as a growth layer."],
  ["Do I have to run ads myself?", "No. The core system focuses on enquiry capture, response, follow-up, and booking. If ads are included, they are managed as part of the service."],
  ["Is AI required?", "No. AI phone support is optional. Many businesses start with missed-call text-back, enquiry replies, follow-up messages, and pipeline tracking."],
  ["Can the system book jobs automatically?", "It can, but many trade businesses prefer a callback or quote request process first. We can set it up so you stay in control and review enquiries before confirming jobs."],
  ["What if I already use a job management system?", "That is fine. Many job systems manage work after the job is accepted. This system focuses on the enquiry stage before the job is booked."],
  ["Can you guarantee more jobs?", "We do not guarantee exact job numbers because results depend on your market, services, pricing, availability, reputation, demand, and follow-through. We guarantee the agreed system will be built, tested, and launched properly."],
];

export const caseStudies = [
  {
    slug: "ka-plumbing",
    business: "KA Plumbing Limited",
    headline: "How KA Plumbing Built A Serious Digital Enquiry System From A One-Person Plumbing Business",
    shortHeadline: "From one-person plumbing business to a full digital enquiry system",
    industry: "Plumbing",
    location: "Auckland",
    snapshot: "21-year-old founder, early-stage one-person Auckland plumbing business.",
    system: ["32-page SEO lead-generation website", "Emergency-focused service positioning", "Chat widget capability", "Call/SMS handling", "24-hour support/enquiry flow", "CRM", "Review growth system"],
    result: "The system helped create the digital infrastructure KA Plumbing needed to grow from a one-person operation into a more serious plumbing business with stronger enquiry handling, review growth, and the ability to hire.",
    reported: "Supported profit growth, hiring an employee, and stronger enquiry handling.",
  },
  {
    slug: "hair-by-melissa",
    business: "Hair By Melissa",
    headline: "How Hair By Melissa Built A Profitable Salon From Zero Digital Presence",
    shortHeadline: "From no digital presence to a profitable first financial year",
    industry: "Hair salon / hair services",
    location: "New Zealand",
    snapshot: "Solo salon owner who started with no meaningful digital presence.",
    system: ["32-page SEO lead-generation system", "AI website", "AI phone support", "Service-specific calendar", "Ads", "Review system", "Booking and enquiry flow"],
    result: "The digital system helped support Hair By Melissa's launch from zero digital presence into a profitable first financial year, with reported revenue of $143,000.",
    reported: "Reported first financial year revenue of $143,000.",
  },
  {
    slug: "superior-taekwondo",
    business: "Superior Taekwondo",
    headline: "How Superior Taekwondo Built A Real Business From A Small Hall-Based Club",
    shortHeadline: "From local hall classes to a structured monthly revenue system",
    industry: "Sports club / martial arts",
    location: "New Zealand",
    snapshot: "Small hall-based sports club led by a sole coach.",
    system: ["Lead-generation website", "AI website agent", "Review system", "CRM pipeline", "Contact management", "Subscription system", "Member enquiry flow"],
    result: "The system helped Superior Taekwondo move from a small hall-based club toward a structured business with digital enquiry handling, reviews, contact management, subscriptions, and approximately $1,100 in monthly recurring revenue.",
    reported: "Supported growth to approximately $1,100 MRR.",
  },
];
