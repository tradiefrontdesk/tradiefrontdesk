import { heroClipById, heroClipIds, type HeroClipId } from "./heroClips";
export type HomeVideoId =
  | "HomeHeroVideo"
  | "HomeProblemVideo"
  | "HomeReframeVideo"
  | "HomeFiveStepVideo"
  | "HomeModulesVideo"
  | "HomeAuditPackagesVideo"
  | "HomeRealBusinessPaymentVideo";

export type StoryVideoId =
  | "HowItWorksHeroVideo"
  | "HowItWorksScenarioVideo"
  | "IncludedHeroVideo"
  | "IncludedModulesVideo"
  | "PricingHeroVideo"
  | "PricingPackagesVideo"
  | "DifferentHeroVideo"
  | "DifferentComparisonVideo"
  | "AuditHeroVideo"
  | "AuditChecksVideo"
  | "ContactHeroVideo"
  | "ContactNextStepsVideo"
  | "CaseStudiesHeroVideo"
  | "CaseStudyProofVideo"
  | "CaseStudyDetailVideo"
  | "PrivacyPolicyVideo"
  | "TermsVideo"
  | "ElectriciansHeroVideo"
  | "PlumbersHeroVideo"
  | "RoofersHeroVideo"
  | "BuildersHeroVideo"
  | "PaintersHeroVideo"
  | "HeatPumpHeroVideo"
  | "GuidesHubVideo"
  | "InsightsHubVideo"
  | "CampaignsVideo"
  | "AiReceptionistVideo"
  | "MissedCallsVideo"
  | "QuoteFollowUpVideo"
  | "AfterHoursVideo"
  | "QualifyingVideo"
  | "AucklandVideo"
  | "ChristchurchVideo"
  | "NswVideo"
  | "QueenslandVideo"
  | "VictoriaVideo"
  | "GuideDefaultVideo"
  | "InsightDefaultVideo";

export type VideoId = HomeVideoId | StoryVideoId | HeroClipId;

export type StoryVideoConfig = {
  variant: "flow" | "modules" | "pricing" | "comparison" | "audit" | "contact" | "proof" | "legal" | "guide" | "legislation" | "ads" | "region";
  label: string;
  cta: string;
  beats: string[];
  nodes: string[];
  cards: string[];
  footer: string;
};

export const homeVideoSpecs = [
  {
    id: "HomeHeroVideo",
    title: "Stop Losing Good Jobs From Missed Calls And Slow Follow-Up",
    description: "A before-and-after look at scattered enquiries becoming a clear managed front-desk process.",
    durationInFrames: 900,
  },
  {
    id: "HomeProblemVideo",
    title: "You May Not Have A Lead Problem First",
    description: "Missed calls, slow replies, cold quotes, and scattered messages visualised as a leaking enquiry process.",
    durationInFrames: 360,
  },
  {
    id: "HomeReframeVideo",
    title: "You May Not Need More Leads First",
    description: "A simple reframe: fix the front desk before paying for more enquiry volume.",
    durationInFrames: 360,
  },
  {
    id: "HomeFiveStepVideo",
    title: "Capture -> Respond -> Qualify -> Book -> Follow Up",
    description: "The five-step mechanism behind the Tradie Front Desk System.",
    durationInFrames: 360,
  },
  {
    id: "HomeModulesVideo",
    title: "What The System Can Include",
    description: "A modular grid covering missed-call saver, instant response, quote forms, follow-up, pipeline, and reviews.",
    durationInFrames: 360,
  },
  {
    id: "HomeAuditPackagesVideo",
    title: "Find The Leaks, Then Choose The Right Build",
    description: "How the audit finds enquiry leaks and points toward Starter, Booked Jobs, or Managed Growth.",
    durationInFrames: 360,
  },
  {
    id: "HomeRealBusinessPaymentVideo",
    title: "Systems That Support Real Businesses",
    description: "A graphic subscription and customer-system flow inspired by a real checkout experience.",
    durationInFrames: 420,
  },
] as const satisfies readonly {
  id: HomeVideoId;
  title: string;
  description: string;
  durationInFrames: number;
}[];

export const storyVideoSpecs = [
  {
    id: "HowItWorksHeroVideo",
    title: "How The System Works",
    description: "A square story showing the five-step enquiry path from first contact to follow-up.",
    durationInFrames: 900,
    story: {
      variant: "flow",
      label: "How it works",
      cta: "A clear next step for every enquiry",
      beats: [
        "Every enquiry needs a clear path.",
        "Capture the contact before it disappears.",
        "Respond fast with approved messages.",
        "Qualify the job details and urgency.",
        "Book, follow up, and keep the owner informed.",
      ],
      nodes: ["Capture", "Respond", "Qualify", "Book", "Follow"],
      cards: ["Missed call", "Quote form", "Owner alert", "Follow-up task"],
      footer: "The system turns scattered enquiries into a visible flow.",
    },
  },
  {
    id: "HowItWorksScenarioVideo",
    title: "Real-Life Enquiry Scenarios",
    description: "Missed calls, quote requests, sent quotes, and old leads moving into a managed process.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Scenario flow",
      cta: "Before and after the front desk",
      beats: ["A missed call should not become a lost opportunity.", "The system replies, qualifies, and creates the next action."],
      nodes: ["Missed", "Reply", "Details", "Owner", "Next"],
      cards: ["Customer calls", "Instant text", "Job details", "Pipeline"],
      footer: "The owner sees what needs attention next.",
    },
  },
  {
    id: "IncludedHeroVideo",
    title: "What's Included",
    description: "A system map of the core modules included in the front-desk build.",
    durationInFrames: 900,
    story: {
      variant: "modules",
      label: "Included system",
      cta: "Modules connected around the enquiry",
      beats: [
        "This is not one random tool.",
        "The modules connect around the full enquiry journey.",
        "Calls, forms, replies, and follow-up feed one process.",
        "Growth layers are added only when the front desk is ready.",
        "The build stays practical, managed, and visible.",
      ],
      nodes: ["Calls", "Forms", "Reply", "Pipeline", "Follow"],
      cards: ["Missed-call saver", "Quote form", "Follow-up", "Reviews"],
      footer: "Each module supports the same front-desk process.",
    },
  },
  {
    id: "IncludedModulesVideo",
    title: "Front Desk Modules",
    description: "A square module grid showing the pieces that can be included.",
    durationInFrames: 360,
    story: {
      variant: "modules",
      label: "Module map",
      cta: "Build the right pieces first",
      beats: ["Core modules protect current opportunities.", "Optional layers can create more volume later."],
      nodes: ["Saver", "Reply", "Form", "Pipeline", "Review"],
      cards: ["Instant response", "Quote capture", "Follow-up engine", "Growth layer"],
      footer: "Scope depends on what the audit finds.",
    },
  },
  {
    id: "PricingHeroVideo",
    title: "Packages And Pricing",
    description: "A square animation showing package fit based on enquiry-process complexity.",
    durationInFrames: 900,
    story: {
      variant: "pricing",
      label: "Pricing fit",
      cta: "Package follows process scope",
      beats: [
        "Pricing starts with the enquiry process.",
        "Starter fixes the most obvious leaks.",
        "Booked Jobs is the flagship front-desk build.",
        "Growth layers add campaigns and reactivation later.",
        "The audit finds the right starting point.",
      ],
      nodes: ["Audit", "Starter", "Booked Jobs", "Growth", "Support"],
      cards: ["Setup scope", "Monthly support", "Add-ons", "Usage"],
      footer: "No one-size-fits-all package promise.",
    },
  },
  {
    id: "PricingPackagesVideo",
    title: "Package Comparison",
    description: "Package tiers moving from starter to booked jobs to managed growth.",
    durationInFrames: 360,
    story: {
      variant: "pricing",
      label: "Package comparison",
      cta: "Choose the right starting point",
      beats: ["The package is based on what needs fixing.", "Booked Jobs System is the flagship fit for active enquiry handling."],
      nodes: ["Starter", "Booked", "Growth", "Add-ons", "Launch"],
      cards: ["Capture", "Qualification", "Follow-up", "Campaigns"],
      footer: "Pricing ranges depend on final scope.",
    },
  },
  {
    id: "DifferentHeroVideo",
    title: "Why Different",
    description: "A square comparison of lead sellers, ads, software you run yourself, and a managed front-desk system.",
    durationInFrames: 900,
    story: {
      variant: "comparison",
      label: "Different approach",
      cta: "Fix the system behind the enquiry",
      beats: [
        "Shared leads are not a front desk.",
        "Ads alone do not fix follow-up.",
        "Software alone still needs setup and management.",
        "The front desk connects capture, response, and pipeline.",
        "More volume only helps when the process can handle it.",
      ],
      nodes: ["Leads", "Ads", "Apps", "Front Desk", "Follow-up"],
      cards: ["Own enquiries", "Managed setup", "Pipeline", "Owner control"],
      footer: "Different because the process is the product.",
    },
  },
  {
    id: "DifferentComparisonVideo",
    title: "Different From The Old Way",
    description: "Old-way cards moving into a managed enquiry process.",
    durationInFrames: 360,
    story: {
      variant: "comparison",
      label: "Old way vs system",
      cta: "Hope is not a system",
      beats: ["The old way leaves too much to chance.", "The front desk turns loose actions into a managed process."],
      nodes: ["Hope", "Miss", "Chase", "System", "Visible"],
      cards: ["Not shared leads", "Not just ads", "Not more software", "Managed process"],
      footer: "The business owns its customer database.",
    },
  },
  {
    id: "AuditHeroVideo",
    title: "Free Audit",
    description: "A square audit animation showing leaks being found before more lead spend.",
    durationInFrames: 900,
    story: {
      variant: "audit",
      label: "Free audit",
      cta: "Find the leaks first",
      beats: [
        "Before spending more, inspect the front desk.",
        "Look at missed calls, forms, replies, and quotes.",
        "Find what is working and what is leaking.",
        "Prioritise the fixes that matter first.",
        "Then choose whether a system makes sense.",
      ],
      nodes: ["Calls", "Forms", "Quotes", "Pipeline", "Plan"],
      cards: ["Leak list", "Priority fixes", "Package fit", "Next step"],
      footer: "The audit maps the enquiry process before the build.",
    },
  },
  {
    id: "AuditChecksVideo",
    title: "Audit Checks",
    description: "The audit checklist becoming a leak score and next-step plan.",
    durationInFrames: 360,
    story: {
      variant: "audit",
      label: "Audit checklist",
      cta: "Calls, replies, follow-up, pipeline",
      beats: ["The audit checks the path from first contact to follow-up.", "The output is a clearer list of what to fix first."],
      nodes: ["Call", "Reply", "Quote", "Follow", "Fix"],
      cards: ["What happens now", "Where it leaks", "Highest priority", "Best package fit"],
      footer: "No guaranteed results claim, just a practical process review.",
    },
  },
  {
    id: "ContactHeroVideo",
    title: "Contact",
    description: "A square contact animation showing audit and general enquiry paths.",
    durationInFrames: 900,
    story: {
      variant: "contact",
      label: "Contact path",
      cta: "Choose the right next step",
      beats: [
        "Some owners are ready for an audit.",
        "Some need one question answered first.",
        "Either way, the goal is clarity.",
        "Map the enquiry problem.",
        "Choose the next step that fits.",
      ],
      nodes: ["Question", "Message", "Audit", "Review", "Next"],
      cards: ["Book audit", "Send message", "Map process", "Recommendation"],
      footer: "Contact starts the same way: understand the process.",
    },
  },
  {
    id: "ContactNextStepsVideo",
    title: "After You Reach Out",
    description: "A visual next-step sequence after a message or audit request.",
    durationInFrames: 360,
    story: {
      variant: "contact",
      label: "Next steps",
      cta: "Review, map, recommend",
      beats: ["A message starts a short discovery path.", "The best next step depends on the current enquiry process."],
      nodes: ["Receive", "Ask", "Map", "Review", "Recommend"],
      cards: ["Message received", "Key questions", "Current flow", "Recommended step"],
      footer: "No pressure path, just process clarity.",
    },
  },
  {
    id: "CaseStudiesHeroVideo",
    title: "Proof Examples",
    description: "A square proof animation showing operational examples without hype or guarantees.",
    durationInFrames: 900,
    story: {
      variant: "proof",
      label: "Proof without hype",
      cta: "Examples, not guarantees",
      beats: [
        "Proof starts with what the system actually does.",
        "Calls caught, replies sent, follow-ups completed.",
        "Bookings, reviews, and pipeline activity become visible.",
        "Outcomes still depend on context and follow-through.",
        "Use examples to find your own leak points.",
      ],
      nodes: ["Calls", "Replies", "Follow", "Book", "Learn"],
      cards: ["Scorecard", "Pipeline", "Reviews", "Follow-up"],
      footer: "Examples are useful, but results are not promised.",
    },
  },
  {
    id: "CaseStudyProofVideo",
    title: "Proof Activity",
    description: "A graphic table of calls caught, replies sent, follow-ups completed, and next steps created.",
    durationInFrames: 360,
    story: {
      variant: "proof",
      label: "Case study map",
      cta: "Activity before claims",
      beats: ["Useful proof shows tracked activity first.", "The system makes missed calls and follow-up visible."],
      nodes: ["Catch", "Reply", "Follow", "Book", "Review"],
      cards: ["Calls caught", "Replies sent", "Follow-ups", "Disclaimer"],
      footer: "The lesson is the process, not a guaranteed number.",
    },
  },
  {
    id: "CaseStudyDetailVideo",
    title: "Case Study Detail",
    description: "A square visual path for an individual case study.",
    durationInFrames: 360,
    story: {
      variant: "proof",
      label: "Case study detail",
      cta: "Snapshot, system, result",
      beats: ["Start with the business problem.", "Then show the system that supported the outcome."],
      nodes: ["Snapshot", "System", "Follow-up", "Trust", "Result"],
      cards: ["Starting point", "Installed system", "Why it worked", "What to learn"],
      footer: "Illustration only. Outcomes depend on context.",
    },
  },
  {
    id: "PrivacyPolicyVideo",
    title: "Privacy Policy",
    description: "A square legal animation showing submitted data moving through responsible handling.",
    durationInFrames: 360,
    story: {
      variant: "legal",
      label: "Privacy path",
      cta: "Collect, use, protect, respond",
      beats: ["Forms collect business contact details and enquiry context.", "Information is used to respond, review, deliver, and improve responsibly."],
      nodes: ["Form", "Records", "Review", "Storage", "Rights"],
      cards: ["Submitted info", "Approved tools", "Security", "Contact rights"],
      footer: "Plain-English privacy summary for website submissions.",
    },
  },
  {
    id: "TermsVideo",
    title: "Terms And Conditions",
    description: "A square legal animation showing service scope, responsibilities, and safe claims.",
    durationInFrames: 360,
    story: {
      variant: "legal",
      label: "Terms path",
      cta: "Scope, launch, support, limits",
      beats: ["The service is a managed front-desk system, not a guaranteed outcome promise.", "Scope, client responsibilities, support, and third-party limits need to stay clear."],
      nodes: ["Scope", "Build", "Launch", "Support", "Limits"],
      cards: ["Service scope", "Launch guarantee", "Client duties", "Results disclaimer"],
      footer: "Clear terms protect both the system and the client.",
    },
  },
  {
    id: "ElectriciansHeroVideo",
    title: "Front Desk For Electricians",
    description: "A callout enquiry moves from missed ring to booked job while the sparkie stays on the switchboard.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Electrical callout",
      cta: "Caught, qualified, booked",
      beats: ["A switchboard job rings while both hands are in a live board.", "The front desk replies, collects the details, and lines up the booking."],
      nodes: ["Call", "Text-back", "Job details", "Quote", "Booked"],
      cards: ["Missed call caught", "Fault details", "Callout window", "Owner notified"],
      footer: "Designed to help electricians stop losing callout work.",
    },
  },
  {
    id: "PlumbersHeroVideo",
    title: "Front Desk For Plumbers & Drainage",
    description: "An urgent leak enquiry is answered instantly and moved toward a booked visit while the plumber stays under the house.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Urgent leak enquiry",
      cta: "Answered while you are on the tools",
      beats: ["A 7:30pm leak call cannot wait for tomorrow.", "The front desk replies straight away and captures the job before they ring the next plumber."],
      nodes: ["Leak call", "Instant reply", "Urgency", "Callback", "Visit"],
      cards: ["After-hours reply", "Job urgency", "Address captured", "Owner notified"],
      footer: "Designed to help plumbers catch urgent work first.",
    },
  },
  {
    id: "RoofersHeroVideo",
    title: "Front Desk For Roofers",
    description: "A quote request lands mid-job on a roof and still gets a fast reply and a followed-up quote.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Roofing quote request",
      cta: "Quotes followed up until answered",
      beats: ["You cannot answer a quote request from the ridge line.", "The front desk replies, books the site visit, and chases the quote after you send it."],
      nodes: ["Enquiry", "Reply", "Site visit", "Quote", "Follow-up"],
      cards: ["Fast first reply", "Visit booked", "Quote sent", "Follow-up runs"],
      footer: "Designed to help roofers keep quotes moving.",
    },
  },
  {
    id: "BuildersHeroVideo",
    title: "Front Desk For Builders",
    description: "A build enquiry is caught, qualified, and quoted while the builder stays on site.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Build enquiry",
      cta: "Caught, qualified, quoted",
      beats: ["A quote enquiry lands while you are running a site.", "The front desk replies, gathers the scope, and lines up the quote."],
      nodes: ["Enquiry", "Reply", "Scope", "Quote", "Booked"],
      cards: ["Fast first reply", "Job scope captured", "Site visit set", "Owner notified"],
      footer: "Designed to help builders keep quote enquiries moving.",
    },
  },
  {
    id: "PaintersHeroVideo",
    title: "Front Desk For Painters",
    description: "A painting quote request is answered fast and moved toward a booked job while the painter stays on the roller.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Painting enquiry",
      cta: "Answered while you are on the job",
      beats: ["A quote request comes in mid-coat.", "The front desk replies, captures the job details, and books the quote."],
      nodes: ["Enquiry", "Reply", "Details", "Quote", "Booked"],
      cards: ["Fast first reply", "Job details captured", "Quote visit set", "Owner notified"],
      footer: "Designed to help painters keep quote requests moving.",
    },
  },
  {
    id: "HeatPumpHeroVideo",
    title: "Front Desk For Heat Pump Installers",
    description: "A heat pump enquiry is caught during the busy season and moved through to a booked install.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Heat pump enquiry",
      cta: "Caught, qualified, booked",
      beats: ["Enquiries stack up during the busy season.", "The front desk replies straight away and lines up the install."],
      nodes: ["Enquiry", "Reply", "Details", "Quote", "Install"],
      cards: ["Fast first reply", "Property details captured", "Install window set", "Owner notified"],
      footer: "Designed to help installers keep enquiries moving in peak season.",
    },
  },
  {
    id: "GuidesHubVideo",
    title: "Guides For Trade Businesses",
    description: "A guide's practical steps become a clear checklist a tradie can act on.",
    durationInFrames: 360,
    story: {
      variant: "guide",
      label: "Practical guides",
      cta: "Read it, then act on it",
      beats: ["Every guide is written for the tools, not the office.", "A page of advice becomes a short list of things to check."],
      nodes: ["Read", "Check", "Fix", "Track", "Repeat"],
      cards: ["Plain language", "No jargon", "Practical steps", "Written for tradies"],
      footer: "Guides written to be read on a smoko break and used on the job.",
    },
  },
  {
    id: "InsightsHubVideo",
    title: "Insights On Industry Changes",
    description: "Proposed regulatory and industry changes tracked from first reading through to confirmation, with unconfirmed stages clearly marked.",
    durationInFrames: 360,
    story: {
      variant: "legislation",
      label: "Proposed changes",
      cta: "Tracked, not assumed",
      beats: ["Bills move through stages long before they become law.", "Each stage is marked clearly, so nothing proposed is read as confirmed."],
      nodes: ["Reading", "Committee", "Debate", "Vote", "Law"],
      cards: ["First reading", "Under review", "Not yet law", "Confirmed changes only"],
      footer: "Proposed changes are marked as proposed until they pass.",
    },
  },
  {
    id: "CampaignsVideo",
    title: "Paid Enquiries, Same Front Desk",
    description: "Enquiries from paid channels arrive and are caught into the same handled queue as every other enquiry.",
    durationInFrames: 360,
    story: {
      variant: "ads",
      label: "Paid enquiry handling",
      cta: "Every paid enquiry gets a reply",
      beats: ["Paid enquiries are only useful if someone replies to them.", "Every channel feeds the same handled queue, so nothing sits waiting."],
      nodes: ["Search ad", "Social ad", "Directory", "Referral"],
      cards: ["Instant reply", "Job details captured", "Owner notified", "Follow-up runs"],
      footer: "Spend on enquiries only pays off once they are answered.",
    },
  },
  {
    id: "AiReceptionistVideo",
    title: "A Front Desk That Answers Every Time",
    description: "Every call and message gets an instant reply, day or night, without anyone stuck at a desk.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Always-on front desk",
      cta: "Every enquiry gets a reply",
      beats: ["Calls and messages do not wait for office hours.", "The front desk replies straight away and books in the follow-up."],
      nodes: ["Call", "Reply", "Details", "Owner", "Follow"],
      cards: ["Instant reply", "Job details captured", "Owner notified", "Follow-up runs"],
      footer: "Built to answer every enquiry, not just the ones you catch in person.",
    },
  },
  {
    id: "MissedCallsVideo",
    title: "Missed Calls, Caught",
    description: "A missed call is caught with an instant text-back instead of going to the next tradie on the list.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Missed call saver",
      cta: "A missed call is not a lost job",
      beats: ["A missed call usually means a lost job.", "An instant text-back keeps the enquiry alive until you can call back."],
      nodes: ["Missed", "Text-back", "Details", "Callback", "Booked"],
      cards: ["Instant text-back", "Job details captured", "Owner notified", "Callback logged"],
      footer: "Every missed call gets a reply within seconds.",
    },
  },
  {
    id: "QuoteFollowUpVideo",
    title: "Quotes That Get Followed Up",
    description: "A sent quote is chased on a schedule instead of being forgotten in an inbox.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Quote follow-up",
      cta: "Sent is not the same as won",
      beats: ["A quote that never gets followed up rarely gets won.", "The front desk chases it on a schedule until it gets an answer."],
      nodes: ["Sent", "Reminder", "Check-in", "Answer", "Booked"],
      cards: ["Follow-up schedule", "Owner reminders", "Customer nudges", "Pipeline updated"],
      footer: "Quotes stay visible until they are accepted or declined.",
    },
  },
  {
    id: "AfterHoursVideo",
    title: "After Hours, Still Answered",
    description: "An enquiry that lands after hours still gets an instant reply instead of waiting until morning.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "After-hours enquiry",
      cta: "Answered before the next call",
      beats: ["Trouble does not wait for business hours.", "The front desk replies straight away and flags anything urgent."],
      nodes: ["Call", "Reply", "Urgency", "Owner", "Booked"],
      cards: ["After-hours reply", "Urgency flagged", "Owner alerted", "Booking set"],
      footer: "Enquiries get answered whatever time they land.",
    },
  },
  {
    id: "QualifyingVideo",
    title: "Qualifying The Job Before The Quote",
    description: "The right questions get asked upfront so the quote and the site visit match the actual job.",
    durationInFrames: 360,
    story: {
      variant: "flow",
      label: "Job qualification",
      cta: "The right questions, every time",
      beats: ["A quote is only as good as the details behind it.", "The front desk asks the right questions before a visit gets booked."],
      nodes: ["Enquiry", "Questions", "Scope", "Visit", "Quote"],
      cards: ["Job type checked", "Site details captured", "Urgency confirmed", "Visit scheduled"],
      footer: "Better questions upfront mean fewer wasted site visits.",
    },
  },
  {
    id: "AucklandVideo",
    title: "Front Desk Coverage: Auckland",
    description: "A map of Auckland service areas lighting up as the front desk covers enquiries across the region.",
    durationInFrames: 360,
    story: {
      variant: "region",
      label: "Auckland coverage",
      cta: "One front desk, the whole region",
      beats: ["Auckland jobs come from all over the region.", "The same front desk answers enquiries no matter which suburb they come from."],
      nodes: ["City", "North Shore", "West", "South", "East"],
      cards: ["Local enquiry handling", "Site details captured", "Owner notified", "Follow-up runs"],
      footer: "Built for trade businesses working right across Auckland.",
    },
  },
  {
    id: "ChristchurchVideo",
    title: "Front Desk Coverage: Christchurch",
    description: "A map of Christchurch service areas lighting up as the front desk covers enquiries across the city.",
    durationInFrames: 360,
    story: {
      variant: "region",
      label: "Christchurch coverage",
      cta: "One front desk, the whole city",
      beats: ["Christchurch jobs come from right across the city.", "The same front desk answers enquiries wherever they come from."],
      nodes: ["City", "Riccarton", "Halswell", "Papanui", "Hornby"],
      cards: ["Local enquiry handling", "Site details captured", "Owner notified", "Follow-up runs"],
      footer: "Built for trade businesses working right across Christchurch.",
    },
  },
  {
    id: "NswVideo",
    title: "Front Desk Coverage: New South Wales",
    description: "A map of New South Wales service areas lighting up as the front desk covers enquiries across the state.",
    durationInFrames: 360,
    story: {
      variant: "region",
      label: "NSW coverage",
      cta: "One front desk, the whole state",
      beats: ["Jobs come from right across the state.", "The same front desk answers enquiries wherever they land."],
      nodes: ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Western Sydney"],
      cards: ["Local enquiry handling", "Site details captured", "Owner notified", "Follow-up runs"],
      footer: "Built for trade businesses working right across New South Wales.",
    },
  },
  {
    id: "QueenslandVideo",
    title: "Front Desk Coverage: Queensland",
    description: "A map of Queensland service areas lighting up as the front desk covers enquiries across the state.",
    durationInFrames: 360,
    story: {
      variant: "region",
      label: "Queensland coverage",
      cta: "One front desk, the whole state",
      beats: ["Jobs come from right across the state.", "The same front desk answers enquiries wherever they land."],
      nodes: ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns"],
      cards: ["Local enquiry handling", "Site details captured", "Owner notified", "Follow-up runs"],
      footer: "Built for trade businesses working right across Queensland.",
    },
  },
  {
    id: "VictoriaVideo",
    title: "Front Desk Coverage: Victoria",
    description: "A map of Victoria service areas lighting up as the front desk covers enquiries across the state.",
    durationInFrames: 360,
    story: {
      variant: "region",
      label: "Victoria coverage",
      cta: "One front desk, the whole state",
      beats: ["Jobs come from right across the state.", "The same front desk answers enquiries wherever they land."],
      nodes: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Mornington Peninsula"],
      cards: ["Local enquiry handling", "Site details captured", "Owner notified", "Follow-up runs"],
      footer: "Built for trade businesses working right across Victoria.",
    },
  },
  {
    id: "GuideDefaultVideo",
    title: "Guide Walkthrough",
    description: "A shared guide animation showing a page of advice becoming a short practical checklist.",
    durationInFrames: 360,
    story: {
      variant: "guide",
      label: "Guide walkthrough",
      cta: "Read it, then act on it",
      beats: ["Every guide is written to be used, not just read.", "The advice becomes a short list you can check off on the job."],
      nodes: ["Read", "Check", "Fix", "Track"],
      cards: ["Plain language", "No jargon", "Practical steps", "Written for tradies"],
      footer: "A default guide animation used across the guide articles.",
    },
  },
  {
    id: "InsightDefaultVideo",
    title: "Insight Walkthrough",
    description: "A shared insight animation tracking a proposed change through its stages, with unconfirmed stages clearly marked.",
    durationInFrames: 360,
    story: {
      variant: "legislation",
      label: "Proposed change",
      cta: "Tracked, not assumed",
      beats: ["Proposed changes move through stages before they become law.", "Nothing proposed is shown as confirmed until it actually passes."],
      nodes: ["Reading", "Committee", "Debate", "Vote", "Law"],
      cards: ["First reading", "Under review", "Not yet law", "Confirmed changes only"],
      footer: "A default insight animation used across the insight articles.",
    },
  },
] as const satisfies readonly {
  id: StoryVideoId;
  title: string;
  description: string;
  durationInFrames: number;
  story: StoryVideoConfig;
}[];

// Hero clips are a third family: their own composition (HeroClip), their own
// 8-second duration, and their own config file. They are surfaced here so
// ProductVideoPlayer can resolve a spec by id without knowing which family an
// id belongs to.
export const heroClipVideoSpecs = heroClipIds.map((id) => ({
  id,
  title: heroClipById[id].headline,
  description: heroClipById[id].outcome,
  durationInFrames: 240,
}));

export const allVideoSpecs = [...homeVideoSpecs, ...storyVideoSpecs, ...heroClipVideoSpecs] as const;

export const homeVideoById = Object.fromEntries(homeVideoSpecs.map((video) => [video.id, video])) as Record<HomeVideoId, (typeof homeVideoSpecs)[number]>;

export const storyVideoById = Object.fromEntries(storyVideoSpecs.map((video) => [video.id, video])) as Record<StoryVideoId, (typeof storyVideoSpecs)[number]>;

export const videoById = Object.fromEntries(allVideoSpecs.map((video) => [video.id, video])) as Record<VideoId, (typeof allVideoSpecs)[number]>;

export const remotionVideoDefaults = {
  fps: 30,
  width: 1080,
  height: 1080,
};
