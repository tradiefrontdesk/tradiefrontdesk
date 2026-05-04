export type HomeVideoId =
  | "HomeHeroVideo"
  | "HomeProblemVideo"
  | "HomeReframeVideo"
  | "HomeFiveStepVideo"
  | "HomeModulesVideo"
  | "HomeAuditPackagesVideo";

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
  | "TermsVideo";

export type VideoId = HomeVideoId | StoryVideoId;

export type StoryVideoConfig = {
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
    title: "More Booked Jobs. Less Chasing. No Tech Headaches.",
    description: "A high-level look at the front-desk system catching enquiries, responding fast, and keeping owners informed.",
    durationInFrames: 900,
  },
  {
    id: "HomeProblemVideo",
    title: "Good Jobs Are Slipping Through The Cracks",
    description: "Missed calls, slow replies, cold quotes, and scattered opportunities visualised as a leaking pipeline.",
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
    title: "Audit And Package Fit",
    description: "How the audit surfaces leaks and points toward the right managed system scope.",
    durationInFrames: 360,
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
      label: "Pricing fit",
      cta: "Package follows process scope",
      beats: [
        "Pricing starts with the enquiry process.",
        "Simple leaks may need a starter system.",
        "Active follow-up needs the Booked Jobs System.",
        "Growth layers add campaign and reactivation work.",
        "The audit finds the right starting point.",
      ],
      nodes: ["Audit", "Starter", "Booked", "Growth", "Support"],
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
    description: "A square comparison of lead sellers, ads, CRM software, and a managed front-desk system.",
    durationInFrames: 900,
    story: {
      label: "Different approach",
      cta: "Fix the system behind the enquiry",
      beats: [
        "Shared leads are not a front desk.",
        "Ads alone do not fix follow-up.",
        "Software alone still needs setup and management.",
        "The front desk connects capture, response, and pipeline.",
        "More volume only helps when the process can handle it.",
      ],
      nodes: ["Leads", "Ads", "CRM", "Front Desk", "Follow-up"],
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
    title: "Case Studies",
    description: "A square proof animation showing examples without hype or guarantees.",
    durationInFrames: 900,
    story: {
      label: "Proof without hype",
      cta: "Examples, not guarantees",
      beats: [
        "Case studies show practical system work.",
        "Each business had a different starting point.",
        "The installed system matched the actual gap.",
        "Reported outcomes depend on context and follow-through.",
        "Use the examples to find your own leak points.",
      ],
      nodes: ["Start", "System", "Launch", "Outcome", "Learn"],
      cards: ["Website", "CRM", "Reviews", "Follow-up"],
      footer: "Examples are useful, but results are not promised.",
    },
  },
  {
    id: "CaseStudyProofVideo",
    title: "Proof Table",
    description: "A graphic table of starting point, system installed, and reported outcome.",
    durationInFrames: 360,
    story: {
      label: "Case study map",
      cta: "Starting point to system",
      beats: ["Each case starts with a practical business gap.", "The system installed is what connects the story."],
      nodes: ["Gap", "Build", "Launch", "Report", "Learn"],
      cards: ["Starting point", "System installed", "Reported outcome", "Disclaimer"],
      footer: "The lesson is the process, not a guaranteed number.",
    },
  },
  {
    id: "CaseStudyDetailVideo",
    title: "Case Study Detail",
    description: "A square visual path for an individual case study.",
    durationInFrames: 360,
    story: {
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
      label: "Privacy path",
      cta: "Collect, use, protect, respond",
      beats: ["Forms collect business contact details and enquiry context.", "Information is used to respond, review, deliver, and improve responsibly."],
      nodes: ["Form", "CRM", "Review", "Storage", "Rights"],
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
      label: "Terms path",
      cta: "Scope, launch, support, limits",
      beats: ["The service is a managed front-desk system, not a guaranteed outcome promise.", "Scope, client responsibilities, support, and third-party limits need to stay clear."],
      nodes: ["Scope", "Build", "Launch", "Support", "Limits"],
      cards: ["Service scope", "Launch guarantee", "Client duties", "Results disclaimer"],
      footer: "Clear terms protect both the system and the client.",
    },
  },
] as const satisfies readonly {
  id: StoryVideoId;
  title: string;
  description: string;
  durationInFrames: number;
  story: StoryVideoConfig;
}[];

export const allVideoSpecs = [...homeVideoSpecs, ...storyVideoSpecs] as const;

export const homeVideoById = Object.fromEntries(homeVideoSpecs.map((video) => [video.id, video])) as Record<HomeVideoId, (typeof homeVideoSpecs)[number]>;

export const storyVideoById = Object.fromEntries(storyVideoSpecs.map((video) => [video.id, video])) as Record<StoryVideoId, (typeof storyVideoSpecs)[number]>;

export const videoById = Object.fromEntries(allVideoSpecs.map((video) => [video.id, video])) as Record<VideoId, (typeof allVideoSpecs)[number]>;

export const remotionVideoDefaults = {
  fps: 30,
  width: 1080,
  height: 1080,
};
