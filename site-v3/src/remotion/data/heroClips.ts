/**
 * Per-page hero clip configs.
 *
 * One 8-second clip per page, driven by config rather than a bespoke component
 * each time — 60+ hand-written compositions would be unmaintainable and would
 * drift visually within a week. The composition (HeroClip.tsx) owns the look;
 * these configs own what each page actually says.
 *
 * COPY RULES (enforced across the whole project — see site-v3/PRODUCT.md):
 *   Banned: CRM, automation, automated, funnel, SaaS, workflow, bot, chatbot,
 *   GoHighLevel. No "AI" outside the three permitted AI pages. No statistics,
 *   percentages or invented figures. No guarantees of jobs, revenue or
 *   rankings. NZ spelling — "enquiry", never "inquiry".
 *
 * WRITING GUIDANCE
 *   eyebrow  — the page's context, 2-4 words, renders uppercase mono
 *   headline — ONE idea, under ~70 chars. This is the clip's whole point.
 *   stages   — exactly 5, one word each where possible. They light in sequence.
 *   outcome  — the payoff line, plain and concrete
 *   stamp    — 2-4 words, hi-vis, the takeaway
 *
 * SHAPE — which visual mechanism plays the `stages` array. All four shapes
 * read the same five entries; only the animation and metaphor differ, so no
 * other field changes when a page switches shape. Defaults to "stages" —
 * every config written before this field existed keeps its exact behaviour.
 *   stages   — five steps light up in sequence. The general-purpose default.
 *   leak     — enquiries entering a channel, most falling away, one surviving
 *              to the end. For problem pages (what happens without a front desk).
 *   timeline — a bill's progress, with later stations left visibly unreached.
 *              For insights pages tracking legislation — never implies "this is law".
 *   surge    — demand arriving as a spike rather than steadily, one bar towering
 *              over the rest. For seasonal and storm pages.
 */
export type HeroClipShape = "stages" | "leak" | "timeline" | "surge";

export type HeroClipConfig = {
  eyebrow: string;
  headline: string;
  stages: [string, string, string, string, string];
  outcome: string;
  stamp: string;
  shape?: HeroClipShape;
};

export const heroClipSpecs = {
  HomeHeroClip: {
    eyebrow: "The front desk",
    headline: "The call you cannot take is still a job you can win.",
    stages: ["Capture", "Respond", "Qualify", "Book", "Follow up"],
    outcome: "Every enquiry handled the same way, whether you answer or not.",
    stamp: "Nothing rides on memory",
  },
  PlumbersHeroClip: {
    eyebrow: "For plumbers",
    headline: "A burst pipe does not wait for you to ring back.",
    stages: ["Leak call", "Reply", "Urgency", "Callback", "Booked"],
    outcome: "Urgent work gets answered while you are still under the house.",
    stamp: "Answered on the tools",
  },
  MissedCallsHeroClip: {
    eyebrow: "Missed calls",
    headline: "Most of them never leave a message. They just ring the next name.",
    shape: "leak",
    stages: ["Rings", "Voicemail", "No message", "Gone", "Caught"],
    outcome: "A missed call gets a reply in seconds, so the job stays yours.",
    stamp: "Before they move on",
  },
  InsightsHeroClip: {
    eyebrow: "Sector change",
    headline: "Most of it is a bill, not law. We track which is which.",
    shape: "timeline",
    stages: ["Introduced", "Committee", "Second reading", "Third reading", "Assent"],
    outcome: "What is proposed, what stage it has reached, and what it would mean.",
    stamp: "Not law yet",
  },
  HeatPumpHeroClip: {
    eyebrow: "For heat pump installers",
    headline: "Nobody wants one until the first cold snap. Then everybody does.",
    shape: "surge",
    stages: ["Autumn", "First chill", "Cold snap", "Peak", "Thaw"],
    outcome: "The enquiries you cannot book this week are next month's diary.",
    stamp: "Held, not lost",
  },

  // — Trades (shape: stages) —

  ElectriciansHeroClip: {
    eyebrow: "For electricians",
    headline: "A tripped board does not wait for you to finish the job.",
    stages: ["Missed", "Text", "Urgent", "Details", "Booked"],
    outcome: "The fault gets flagged while the routine switchboard quote still gets a reply.",
    stamp: "Sorted before you ring back",
  },
  RoofersHeroClip: {
    eyebrow: "For roofers",
    headline: "A reroof quote dies from silence, not from a bad price.",
    stages: ["Missed", "Text", "Details", "Quoted", "Chased"],
    outcome: "Every reroof quote gets chased until there is an answer, not just sent and forgotten.",
    stamp: "Chased, not forgotten",
  },
  BuildersHeroClip: {
    eyebrow: "For builders",
    headline: "A kitchen quote does not get a yes in a day. It takes weeks.",
    stages: ["Enquiry", "Booked", "Quoted", "Quiet", "Chased"],
    outcome: "Quotes stay open and visible for the whole decision, not just the first week.",
    stamp: "Still open at week six",
  },
  PaintersHeroClip: {
    eyebrow: "For painters",
    headline: "Spring gives you a few good months. A slow reply gives them away.",
    stages: ["Missed", "Text", "Quoted", "Quiet", "Chased"],
    outcome: "The repaint you quoted three weeks ago still gets chased, not left to memory.",
    stamp: "First reply wins the job",
  },

  // — Problems (shape: leak) —

  QuoteFollowUpHeroClip: {
    eyebrow: "Quote follow-up",
    headline: "Most quotes do not die on price. They die from silence.",
    shape: "leak",
    stages: ["Sent", "Quiet", "Ignored", "Forgotten", "Chased"],
    outcome: "Every quote gets a scheduled follow-up until you have a real answer, win or lose.",
    stamp: "Chased until answered",
  },
  AfterHoursHeroClip: {
    eyebrow: "After-hours cover",
    headline: "After knock-off, the phone still rings. Nobody is picking up.",
    shape: "leak",
    stages: ["Rings", "Silence", "Ignored", "Next name", "Captured"],
    outcome: "Enquiries get captured and triaged after hours, so the urgent ones still reach you.",
    stamp: "Not lost after knock-off",
  },
  QualifyingHeroClip: {
    eyebrow: "Qualifying enquiries",
    headline: "A forty-minute drive for a job that was never going to happen.",
    shape: "leak",
    stages: ["Enquiry", "Vague", "Asked", "Clear", "Booked"],
    outcome: "The questions get asked before you drive out, not after you have wasted the afternoon.",
    stamp: "Only real jobs booked",
  },

  // — Service pages (shape: stages) —

  PricingHeroClip: {
    eyebrow: "Packages and pricing",
    headline: "What you pay depends on what is actually leaking enquiries.",
    stages: ["Audit", "Right fit", "Built", "Tested", "Running"],
    outcome: "The free audit tells you which package actually fits, before you pay for one.",
    stamp: "Sized to the leak",
  },
  FreeAuditHeroClip: {
    eyebrow: "Free front desk audit",
    headline: "One free look at where your calls and quotes are slipping.",
    stages: ["Calls", "Forms", "Quotes", "Follow-up", "Mapped"],
    outcome: "You get a plain map of where enquiries are leaking, no obligation attached.",
    stamp: "No pressure, no lock-in",
  },
  HowItWorksHeroClip: {
    eyebrow: "How it works",
    headline: "Five steps, running quietly behind the business you already have.",
    stages: ["Capture", "Respond", "Qualify", "Book", "Follow up"],
    outcome: "Every enquiry moves through the same five steps, whether you are on the tools or not.",
    stamp: "The same steps, every time",
  },
  WhatsIncludedHeroClip: {
    eyebrow: "What is included",
    headline: "Every module in the front desk, and what each one actually does.",
    stages: ["Capture", "Respond", "Follow-up", "Organise", "Reputation"],
    outcome: "Modules stack to match what your business needs, not a one-size package.",
    stamp: "Built from your leaks",
  },
  WhyDifferentHeroClip: {
    eyebrow: "How we compare",
    headline: "Not a lead seller. Not an ad agency. Not another login.",
    stages: ["Compared", "Ruled out", "Category", "Answered", "Clear"],
    outcome: "Not more leads, not more software — a system that gets built and run for you.",
    stamp: "A category of its own",
  },
  ContactHeroClip: {
    eyebrow: "Talk to us",
    headline: "Not ready to book the audit? Message us, or call us direct.",
    stages: ["Phone", "Message", "Reply", "Answer", "Next step"],
    outcome: "A real number in New Zealand, Australia or the US, and a message that gets answered.",
    stamp: "No form, no problem",
  },
  CaseStudiesHeroClip: {
    eyebrow: "Client proof",
    headline: "Three real clients. What actually happened, not what we promised.",
    stages: ["Clients", "Metrics", "Examples", "Labelled", "Honest"],
    outcome: "Real outcomes from real clients, and worked examples labelled as exactly that.",
    stamp: "Reported, not guaranteed",
  },
  CampaignsHeroClip: {
    eyebrow: "Paid campaigns",
    headline: "More enquiries only once you can actually catch them.",
    stages: ["Built", "Live", "Learning", "Sharpened", "Booked"],
    outcome: "Campaigns only start once your front desk can catch what they bring in.",
    stamp: "Front desk first, always",
  },
  AiReceptionistHeroClip: {
    eyebrow: "AI receptionist",
    headline: "The AI answers. What happens after is the real job.",
    stages: ["Answers", "Qualifies", "Escalates", "Books", "Follows up"],
    outcome: "AI answers instantly. The booking, the qualifying and the follow-up are the part that counts.",
    stamp: "The process is the product",
  },
  GuidesHubHeroClip: {
    eyebrow: "Guides for tradies",
    headline: "Straight answers on missed calls and quotes that went quiet.",
    stages: ["Calls", "Quotes", "Costs", "Trades", "Checklist"],
    outcome: "Written to be useful whether or not you ever talk to us.",
    stamp: "No sales pitch required",
  },

  // — Locations (shape: stages) —

  AucklandHeroClip: {
    eyebrow: "Auckland trades",
    headline: "The Northwestern eats the hour you needed to ring back.",
    stages: ["Missed", "Texted", "Qualified", "Booked", "Chased"],
    outcome: "Enquiries get captured and moved forward, wherever in Auckland the job is.",
    stamp: "Followed through, every time",
  },
  ChristchurchHeroClip: {
    eyebrow: "Christchurch and Canterbury",
    headline: "Canterbury is building faster, per head, than Auckland.",
    stages: ["Missed", "Replied", "Sorted", "Booked", "Chased"],
    outcome: "Frost season or not, every enquiry gets captured and moved forward.",
    stamp: "Built for the frost rush",
  },
  NswHeroClip: {
    eyebrow: "New South Wales",
    headline: "Even the busiest pipeline in the country loses jobs to voicemail.",
    stages: ["Missed", "Texted", "Qualified", "Booked", "Chased"],
    outcome: "Every enquiry reaches a licensed tradie instead of dying in a voicemail.",
    stamp: "Answered, not lost",
  },
  QueenslandHeroClip: {
    eyebrow: "Queensland trades",
    headline: "When a storm rolls through, every phone in the state rings at once.",
    stages: ["Storm hits", "Rings", "Triaged", "Booked", "Chased"],
    outcome: "Urgent calls get flagged fast; everything else waits its turn instead of ringing out.",
    stamp: "Nothing rings into silence",
  },
  VictoriaHeroClip: {
    eyebrow: "Victoria trades",
    headline: "Two regulators, two trades, and the same missed-call problem.",
    stages: ["Missed", "Texted", "Sorted", "Booked", "Chased"],
    outcome: "Whichever regulator you answer to, the enquiry still gets captured and followed up.",
    stamp: "One system, either trade",
  },

  // — Seasonal / surge (shape: surge) —

  RoofersStormHeroClip: {
    eyebrow: "Storm season",
    headline: "One storm can flood the phone with a season's worth of calls.",
    shape: "surge",
    stages: ["Calm", "Warning", "Storm hits", "Surge", "Settling"],
    outcome: "The enquiries you cannot get to this week become next week's jobs, not lost ones.",
    stamp: "Queued, not lost",
  },

  // — Guide + insight defaults —

  GuideDefaultHeroClip: {
    eyebrow: "Trade guide",
    headline: "A short, plain-English answer, not a sales pitch.",
    stages: ["Question", "Answer", "Detail", "Example", "Next step"],
    outcome: "Useful whether or not you ever get in touch with us.",
    stamp: "Written to be useful",
  },
  InsightDefaultHeroClip: {
    eyebrow: "Sector change",
    headline: "A bill moving through Parliament is not the same as a law.",
    shape: "timeline",
    stages: ["Introduced", "Committee", "Second reading", "Third reading", "Assent"],
    outcome: "What stage it has actually reached, not what a headline implied.",
    stamp: "Not law yet",
  },

  // — Case studies: real named clients (shape: stages) —
  //
  // Every one of these was a full custom build — website, search visibility
  // and the front desk together — never the front-desk package alone. The
  // headline and outcome must read as the whole build working together, and
  // no figure from `reported` in site.ts (timeframes included) gets repeated
  // here: this clip has its own no-statistics rule, stricter than the page
  // copy it sits next to.

  KaPlumbingHeroClip: {
    eyebrow: "KA Plumbing",
    headline: "A new plumber, a full build, and a calendar that filled up.",
    stages: ["No website", "Website built", "Search fixed", "Enquiries caught", "Booked out"],
    outcome: "Reported by the client: the website, search fix and front desk worked together, and the diary filled.",
    stamp: "The whole build",
  },
  SuperiorTaekwondoHeroClip: {
    eyebrow: "Martial arts club",
    headline: "A martial arts club opened a second site. Enrolments kept climbing.",
    stages: ["Second site", "Search pages", "Online booking", "Payment taken", "Enrolments climbed"],
    outcome: "Reported by the client: enrolment growth kept building after the new location opened, not tailing off.",
    stamp: "Reported, not typical",
  },
  HairByMelissaHeroClip: {
    eyebrow: "Hair salon",
    headline: "A boutique salon went from nothing online to a diary booked ahead.",
    stages: ["No website", "Website built", "Enquiries caught", "Online booking", "Diary filled"],
    outcome: "Reported by the client: enquiries get captured and booked without interrupting a client in the chair.",
    stamp: "Booked without interruption",
  },

  // — Case studies: worked examples (shape: stages) —
  //
  // No client behind these. They illustrate a mechanism only, so nothing
  // here may read as a result — no reported outcome, no implied typical
  // customer behaviour, no figures.

  MissedCallFlowHeroClip: {
    eyebrow: "Worked example",
    headline: "You are on the roof. The phone rings. Here is what happens next.",
    stages: ["Missed", "Text-back", "Urgency asked", "Details caught", "Next action"],
    outcome: "An illustration of the process, not a promise of what happens in your market.",
    stamp: "Process, not a promise",
  },
  QuoteFollowUpFlowHeroClip: {
    eyebrow: "Worked example",
    headline: "A quote goes quiet. Here is how the follow-up keeps it alive.",
    stages: ["Quote sent", "Follow-up sent", "Reply routed", "Owner alerted", "Outcome tracked"],
    outcome: "Shown to demonstrate the process only — customer replies are never guaranteed.",
    stamp: "Shown, not promised",
  },
  OldLeadReactivationHeroClip: {
    eyebrow: "Worked example",
    headline: "Old quotes and past customers get one more check-in message.",
    stages: ["List reviewed", "Check-in sent", "Reply routed", "Callback booked", "Pipeline tagged"],
    outcome: "For illustration only — an interested reply would route back for review, nothing guaranteed.",
    stamp: "For illustration only",
  },
} satisfies Record<string, HeroClipConfig>;

export type HeroClipId = keyof typeof heroClipSpecs;
export const heroClipById = heroClipSpecs as Record<HeroClipId, HeroClipConfig>;
export const heroClipIds = Object.keys(heroClipSpecs) as HeroClipId[];
