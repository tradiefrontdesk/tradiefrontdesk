// locationContent.ts — copy for the regional pages.
//
// These are the highest-risk pages on the site, for three reasons:
//
// 1. NO LOCAL PRESENCE. The business has no Google Business Profile (it is not
//    eligible — no face-to-face customer contact), no citations, no local
//    office, and no local case studies anywhere. Every page therefore carries
//    an explicit `basedIn` disclosure, and none of them may imply otherwise.
//
// 2. NO DELIVERY-MECHANISM CLAIMS. Both drafting passes asserted one, in
//    opposite directions — the NZ drafts said "AI-assisted tools", the AU
//    drafts said "a real person handles your calls, there is no artificial
//    intelligence". The site's own privacy policy settles it: section 9,
//    "AI-Assisted Tools", discloses that AI tools may assist with enquiry
//    handling, message drafting, website chat and phone detail capture.
//
//    So the NZ claim was accurate and the AU claim was FALSE — it would have
//    contradicted the client's own published privacy policy. Neither is used
//    here. Copy describes what the process does and what the owner approves,
//    without asserting who or what executes it, which is true either way and
//    consistent with the vocabulary boundary in PRODUCT.md.
//
//    Rule for future edits: never write copy that DENIES AI involvement. The
//    privacy policy discloses it, and a page contradicting the legal terms is
//    worse than a page that simply does not raise the question.
//
// 3. THE PRODUCT IS NOT AN ANSWERING SERVICE. "Answering service" is the
//    search term buyers use, and it is fine in a title or a keyword. But the
//    core product is enquiry capture, fast reply, qualification, booking and
//    follow-up. PHONE ANSWERING IS AN OPTIONAL ADD-ON. Copy must not promise
//    a staffed line by default — an earlier draft did, and it described a
//    different product to the one the rest of the site sells.
//
// CURRENCY: confirmed NZD by the client, 8 Aug 2026. The AU pages state the
// figures AND name the currency explicitly, because an unlabelled dollar
// amount on an Australian page is a real commercial ambiguity — an Australian
// reader would reasonably assume AUD.

export type LocationKey =
  | "auckland"
  | "christchurch"
  | "nsw"
  | "queensland"
  | "victoria";

export type LocationContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  market: {
    cap: string;
    title: string;
    intro: string;
    figures: { label: string; value: string; note: string }[];
  };
  context: { cap: string; title: string; intro: string; blocks: { heading: string; text: string }[] };
  mechanism: { cap: string; title: string; intro: string; items: [string, string][] };
  trades: {
    cap: string;
    title: string;
    intro: string;
    items: { name: string; text: string; href: string; linkLabel: string }[];
  };
  control: { intro: string; items: [string, string][]; close: string };
  basedIn: { cap: string; title: string; body: string[] };
  faqs: [string, string][];
  close: { title: string; text: string };
  sources: string;
};

// Shared, because it is the same fact on every page and it should read
// identically wherever a visitor lands.
const nzControl: LocationContent["control"] = {
  intro: "The front desk keeps enquiries moving. It does not run your business.",
  items: [
    ["You set the price", "It never quotes a number, negotiates, or discounts. Pricing conversations stay with you."],
    ["Every message is one you approved", "Replies, follow-ups and booking confirmations use wording you signed off, not a generic script."],
    ["You decide what counts as urgent", "You draw that line and the rules follow it. A burst pipe and a routine quote request are not the same thing."],
    ["No promises get made for you", "Nothing tells a customer a job is safe, a fix will hold, or a callout time is guaranteed."],
    ["You decide which jobs you take", "It does not accept work on your behalf. It books time for you to make that call."],
  ],
  close: "The short version: it keeps enquiries visible and moving. It does not make the decisions that are yours to make.",
};

const auBasedIn = (regulator: string): LocationContent["basedIn"] => ({
  cap: "Stated plainly — where we operate from",
  title: "We are a New Zealand business.",
  body: [
    "Tradie Front Desk operates from New Zealand. We have no Australian office, no Australian staff, and no Australian operating history. We have an Australian phone number and we serve Australian trade businesses remotely.",
    "What that means for you: the people running your front desk are not in your city or your country. What it does not mean: it does not change how an enquiry gets captured, qualified and followed up, because none of that depends on proximity.",
    `And anything to do with your ${regulator} obligations was never something a front-desk service should be advising on, wherever it is based. We would rather you knew where we operate from before you called than after.`,
  ],
});

const auFaqTail: [string, string][] = [
  [
    "Are you an Australian company?",
    "No. Tradie Front Desk operates from New Zealand, which is stated plainly on this page rather than buried. We serve Australian trade businesses remotely, with an Australian phone number for your customers. We have no Australian office or operating history and we are not going to pretend otherwise.",
  ],
  [
    "Is this an AI receptionist?",
    "Not in the way that phrase usually means. This is a managed front desk — a process built and run for you, using messages you approve and rules you set. There is no tool for you to learn. If you add optional phone answering, it works from a script you write and approve, and anything outside those rules comes to you.",
  ],
  [
    "What if I already use job management software?",
    "The front desk handles enquiry capture, replies, qualification, booking and follow-up. It sits alongside tools like ServiceM8, Tradify or Simpro where that is listed in your proposal, rather than replacing them.",
  ],
  [
    "What does it cost, and is that in Australian dollars?",
    "Packages start from $1,500 setup plus $497 a month, and those figures are in New Zealand dollars, not Australian. We price in NZD because that is where we operate from, and we would rather say so than have you convert it yourself after the fact. Full packages are on the pricing page, and a free front desk audit is the fastest way to see what it would look like against your own calls and quotes.",
  ],
];

const tradeLink = (name: string, text: string, href: string, linkLabel: string) => ({ name, text, href, linkLabel });

export const locationContent: Record<LocationKey, LocationContent> = {
  auckland: {
    metaTitle: "Answering Service, Tradies Auckland",
    metaDescription:
      "For Auckland trade businesses: enquiries captured, replied to and followed up while you're on the tools. A New Zealand service, honest about what it is.",
    eyebrow: "Auckland",
    title: "Auckland is the biggest market in the country, and the most spread out.",
    lead: "You are under a house in Papatoetoe, on a roof in Albany, or driving the Northwestern between the two. The phone rings out, and by the time you ring back the caller has rung the next name on the list.",
    cta: "Book a Free Front Desk Audit",
    market: {
      cap: "Fig. — the regional numbers",
      title: "What Auckland's consent data actually shows.",
      intro:
        "Auckland is the largest construction market in New Zealand by a wide margin. These are the most recent official figures, not estimates.",
      figures: [
        { label: "New dwellings consented", value: "15,617", note: "Auckland region, year to December 2025 — roughly 43% of the national total of 36,619 (Stats NZ)." },
        { label: "Year-on-year growth", value: "+12%", note: "Stats NZ attributed more than half the national annual increase in new homes consented to Auckland." },
        { label: "Consents per 1,000 residents", value: "8.6", note: "Above the national rate of 6.9, though behind Canterbury at 10.5 — Auckland's advantage is scale, not intensity." },
      ],
    },
    context: {
      cap: "Fig. — what is different here",
      title: "What running a trade business in Auckland actually involves.",
      intro: "Two things make Auckland different from a smaller market, and neither is about where anyone's office is.",
      blocks: [
        {
          heading: "Distance and traffic eat billable hours",
          text: "Auckland Transport's own congestion work, commissioned by the mayor, put the cost of congestion to the city at roughly $2.6 billion a year. For a trade business that is the extra half hour between a job in Henderson and one in Pakuranga, and the calls you cannot take because you are holding a steering wheel. Phone availability and vehicle time compete for the same hours.",
        },
        {
          heading: "The build mix is dense, and dense means coordination",
          text: "More than half of Auckland's new consents are multi-unit — townhouses, flats and apartments rather than stand-alone houses. Apartment consents rose 19% and townhouses 14% in the year to December 2025. That is a lot of tight urban sites, and a lot of phone traffic from body corporates, project managers and other trades trying to line up access.",
        },
        {
          heading: "Older suburbs, wetter weather, more urgent calls",
          text: "Auckland's rainfall is frequent rather than a once-a-year event, and a large share of its housing sits on drainage laid decades ago. That produces a steady stream of urgent enquiries — often after hours, often from people who will ring the next number if nobody responds.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — what the front desk does",
      title: "What happens to the calls you cannot take.",
      intro:
        "Not a call centre, and not another app to log into. A managed front desk that runs in the background of the business you already have.",
      items: [
        ["Missed-call text-back", "A call rings out and the caller gets a text within seconds, in wording you approved, so they know they have been heard before they ring the next name."],
        ["Instant enquiry reply", "Website forms and messages get a fast reply, rather than sitting in an inbox until you are off the tools."],
        ["Job qualification", "The questions that matter get asked before you ring back — what the job is, where it is, how urgent. A burst pipe does not sit in the same queue as a routine quote."],
        ["Callback and site-visit booking", "Good-fit enquiries move toward a booked time against availability you have set."],
        ["Quote follow-up", "Quotes get chased on a schedule you set, so one you sent last week does not quietly go elsewhere."],
        ["Optional phone answering", "If you want calls picked up rather than texted back, that is available as an add-on — on a script you write and approve, with clear rules for what comes straight to you."],
      ],
    },
    trades: {
      cap: "Fig. — who feels it most here",
      title: "Auckland's build mix hits some trades harder.",
      intro: "The mechanism is the same everywhere. What changes is which enquiries hurt most to lose.",
      items: [
        tradeLink("Electricians", "The multi-unit boom lands directly here — switchboard upgrades, EV charger fit-outs, and body corporate callouts across townhouse and apartment developments.", "/electricians/", "See the electricians' front desk"),
        tradeLink("Plumbers and drainlayers", "Ageing drainage in older suburbs, plus new-build compliance work in growth areas. Urgent calls that do not wait.", "/plumbers-drainage/", "See the plumbing front desk"),
        tradeLink("Roofers", "Travel between spread-out jobs costs real hours, which makes each missed enquiry more expensive per call.", "/roofers/", "See the roofing front desk"),
        tradeLink("Builders", "Working the townhouse and apartment pipeline means more sub-trade coordination calls than a stand-alone-house builder ever fields.", "/builders/", "See the builders' front desk"),
        tradeLink("Heat pump installers", "Auckland's humidity and heating demand on top of new-build fit-out volume.", "/heat-pump-installers/", "See the heat pump front desk"),
        tradeLink("Painters", "In a city with this many operators, the first to respond usually gets the job.", "/painters/", "See the painters' front desk"),
      ],
    },
    control: nzControl,
    basedIn: {
      cap: "Stated plainly — where we operate from",
      title: "We do not have an Auckland office, and we will not pretend to.",
      body: [
        "Tradie Front Desk is a New Zealand business serving trade businesses nationwide. We are not eligible for a Google Business listing because we do not meet customers face to face, and we have no Auckland case studies to show you, because we are not going to invent them.",
        "This page exists because Auckland's operating conditions are genuinely different from a smaller market, and that is worth writing about honestly. It is not a claim of local presence. If a local operator is what you want, this is not that. If you want the enquiries you already get handled properly, that is exactly what this is.",
      ],
    },
    faqs: [
      [
        "Is this an AI receptionist?",
        "Not in the way that phrase usually means. This is a managed front desk — a process built and run for you, using messages you approve. There is no tool for you to learn. If you add optional phone answering, it works from a script you write and approve.",
      ],
      [
        "Do you know Auckland suburbs and traffic?",
        "We do not claim local knowledge of Auckland streets, and we will not pretend to. Every enquiry is asked for its address and the nature of the job, so you get accurate information to work from rather than guesswork dressed up as local expertise.",
      ],
      [
        "What happens to enquiries outside business hours?",
        "They get captured and acknowledged rather than ringing out, and triaged against rules you set — so a genuine emergency reaches you and a routine quote request waits until morning. What is included depends on your package.",
      ],
      [
        "Does this replace answering my own phone?",
        "No, and it is not meant to. You still take the calls you want to take. This exists so the ones you cannot get to do not simply disappear.",
      ],
      [
        "What does it cost?",
        "Packages start from $1,500 setup plus $497 a month, in New Zealand dollars. Exact pricing depends on scope. The free audit is the fastest way to see what it would look like for your business.",
      ],
    ],
    close: {
      title: "See where your Auckland enquiries are going.",
      text: "More booked jobs. Less chasing. No tech headaches. Book a free audit and we'll map where enquiries are slipping — no pressure, no lock-in.",
    },
    sources:
      "Sources: Stats NZ, Building Consents Issued — December 2025 (Auckland consent volumes, growth rate, dwelling-type mix and per-capita rates). Auckland Transport congestion cost as reported by RNZ, 2025, from work commissioned by the Auckland mayor. Consent figures are for the year ended December 2025 and will change with subsequent releases.",
  },

  christchurch: {
    metaTitle: "Answering Service, Tradies Chch",
    metaDescription:
      "For Christchurch and Canterbury trade businesses: enquiries captured, replied to and followed up while you're on the tools. Honest about what it is.",
    eyebrow: "Christchurch and Canterbury",
    title: "Canterbury is building faster per head than Auckland.",
    lead: "You are mid-job in Halswell, running cable in Rolleston, or up a ladder in Fendalton when the phone rings out. In a market growing this fast, that is not a small leak. It is a steady one.",
    cta: "Book a Free Front Desk Audit",
    market: {
      cap: "Fig. — the regional numbers",
      title: "What Canterbury's consent data actually shows.",
      intro:
        "Canterbury is one of the fastest-building regions in the country, and worth putting real numbers on rather than a vague impression.",
      figures: [
        { label: "New dwellings consented", value: "7,316", note: "Canterbury region, year to December 2025, up 12% on the year before (Stats NZ)." },
        { label: "Consents per 1,000 residents", value: "10.5", note: "Ahead of Auckland's 8.6 and the national rate of 6.9. Per head, Canterbury is outbuilding Auckland." },
        { label: "Selwyn district growth", value: "+29%", note: "The fastest-growing territorial authority in New Zealand between the 2018 and 2023 censuses, against 6.3% nationally." },
      ],
    },
    context: {
      cap: "Fig. — what is different here",
      title: "Two operating realities that do not show up in a national forecast.",
      intro: "Canterbury has conditions that change what an unanswered phone actually costs you.",
      blocks: [
        {
          heading: "Hard frosts do real damage",
          text: "Christchurch averages around 70 days of ground frost a year on NIWA's 1991–2020 climate normals, among the highest of any main centre. When a cold snap hits properly the callout volume shows it — further south, Central Otago plumbers reportedly fielded around 100 burst-pipe callouts in a single week during one hard snap, with temperatures down to −16°C in places. Frozen and bursting pipes are a predictable seasonal event here, not a one-off.",
        },
        {
          heading: "A wide spread of housing stock",
          text: "Canterbury runs older pre-2000s housing alongside a large body of rebuild-era stock built to different standards. Polybutylene Dux Quest pipe, installed in New Zealand homes from the late 1970s into the 1990s, is known to fail without warning as it ages. The result is plumbing and drainage callouts that do not follow a predictable weekly rhythm.",
        },
        {
          heading: "Growth is concentrated, not evenly spread",
          text: "Selwyn — Rolleston, Lincoln, West Melton — is a genuinely different construction market sitting inside greater Christchurch rather than a suburb of it. A trade business covering the city and the growth districts is covering two demand patterns at once.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — what the front desk does",
      title: "What happens when the phone runs hot.",
      intro:
        "Frost bursts do not wait for business hours, and they do not wait for you to finish the job you are on. That is the gap this is built to close.",
      items: [
        ["Missed-call text-back", "A call rings out and the caller gets a text within seconds, in wording you approved, before they ring the next name."],
        ["Instant enquiry reply", "Forms and messages get a fast reply rather than sitting until you are off the tools."],
        ["Job qualification", "What is happening, where, and how urgent — asked before you ring back, so a flooding hallway is triaged differently to a routine quote."],
        ["Callback and site-visit booking", "Real next steps get booked against times you have made available."],
        ["Quote follow-up", "Quotes get chased on a schedule you set instead of relying on memory during a busy stretch."],
        ["Optional phone answering", "Available as an add-on if you would rather calls were picked up than texted back, on a script you write and approve."],
      ],
    },
    trades: {
      cap: "Fig. — who feels it most here",
      title: "Canterbury's conditions hit some trades harder.",
      intro: "Frost season and a wide spread of housing stock do not affect every trade the same way.",
      items: [
        tradeLink("Plumbers and drainlayers", "The brunt of both frost season and ageing-pipe failures — the two most predictable sources of urgent, after-hours calls in this region.", "/plumbers-drainage/", "See the plumbing front desk"),
        tradeLink("Heat pump installers", "Cold Canterbury winters plus new-build heating requirements in the growth districts.", "/heat-pump-installers/", "See the heat pump front desk"),
        tradeLink("Electricians", "Riding the Selwyn and Rolleston new-build wave, where switchboard and fit-out work is climbing fast.", "/electricians/", "See the electricians' front desk"),
        tradeLink("Builders", "Greenfield sites in Selwyn and renovation work in older Christchurch are two very different call patterns.", "/builders/", "See the builders' front desk"),
        tradeLink("Roofers", "A housing stock spanning decades of build standards means enquiries range from minor repairs to full replacements.", "/roofers/", "See the roofing front desk"),
        tradeLink("Painters", "Growth means more operators chasing the same renovation work, so being first to respond matters.", "/painters/", "See the painters' front desk"),
      ],
    },
    control: nzControl,
    basedIn: {
      cap: "Stated plainly — where we operate from",
      title: "We do not have a Christchurch office, and we will not pretend to.",
      body: [
        "Tradie Front Desk is a New Zealand business serving trade businesses nationwide. We are not eligible for a Google Business listing because we do not meet customers face to face, and we have no Canterbury case studies to point to, because we are not going to make them up.",
        "This page exists because Canterbury's operating conditions genuinely differ from the rest of the country. That is worth writing about honestly. It is not a claim of local presence.",
      ],
    },
    faqs: [
      [
        "Is this an AI receptionist?",
        "Not in the way that phrase usually means. This is a managed front desk — a process built and run for you, using messages you approve. There is no tool for you to learn. Optional phone answering runs on a script you write and approve.",
      ],
      [
        "Do you know Christchurch and Selwyn well enough to handle my enquiries?",
        "We do not claim to know the streets. Every enquiry is asked for its address and the details of the job, so you get accurate information rather than a guess dressed up as local knowledge.",
      ],
      [
        "Can it handle a spike during a cold snap?",
        "That is one of the situations it is built for. A surge in enquiries during a hard frost does not have to mean enquiries going unanswered — though what is included depends on your package.",
      ],
      [
        "Does this replace answering my own phone?",
        "No. You still take the calls you want. This is for the ones you cannot get to, which in a market growing this fast is more of them than you would think.",
      ],
      [
        "What does it cost?",
        "Packages start from $1,500 setup plus $497 a month in New Zealand dollars, depending on scope. The free audit is the fastest way to see what it would look like for your business.",
      ],
    ],
    close: {
      title: "See where your Canterbury enquiries are going.",
      text: "More booked jobs. Less chasing. No tech headaches. Book a free audit and we'll map where enquiries are slipping — no pressure, no lock-in.",
    },
    sources:
      "Sources: Stats NZ, Building Consents Issued — December 2025 (Canterbury consent volumes, growth and per-capita rates); Stats NZ census data 2018–2023 (Selwyn district growth). NIWA climate normals 1991–2020 (Christchurch ground frost days). Otago Daily Times reporting on Central Otago burst-pipe callouts during a cold snap; that figure describes Central Otago, not Canterbury, and is included as an illustration of what a hard frost does to callout volume in the wider South Island.",
  },

  nsw: {
    metaTitle: "Answering Service, Tradies NSW",
    metaDescription:
      "For NSW trade businesses: enquiries captured, qualified and followed up. Run from New Zealand, and upfront about it. What NSW licensing actually requires.",
    eyebrow: "New South Wales",
    title: "The busiest building pipeline in the country, and the same missed calls.",
    lead: "A call comes in while you are mid-job with your hands full. By the time you are free to ring back, they have usually already rung the next name on the list.",
    cta: "Book a Free Front Desk Audit",
    market: {
      cap: "Fig. — the state numbers",
      title: "What the approvals data shows.",
      intro:
        "One month of a volatile series, not a forecast. It confirms the pipeline is active and broad-based, which is worth knowing before you decide whether enquiry handling is your bottleneck.",
      figures: [
        { label: "Dwellings approved", value: "5,063", note: "New South Wales, June 2026, seasonally adjusted — the highest total of any state or territory that month (ABS)." },
        { label: "Month-on-month change", value: "+13.2%", note: "Driven by townhouses, units and higher-density dwellings; standalone house approvals eased slightly, down 0.3%." },
      ],
    },
    context: {
      cap: "Fig. — licensing in this state",
      title: "New South Wales splits trade regulation across two bodies.",
      intro:
        "This is stated as fact, not advice. We do not advise on licensing, and nothing below should be treated as guidance on your obligations.",
      blocks: [
        {
          heading: "NSW Fair Trading issues the licences",
          text: "Fair Trading administers individual contractor licences and certificates — the registration that lets a business legally carry out regulated trade work across a long list of trades, from carpentry and roofing to painting, tiling and waterproofing.",
        },
        {
          heading: "Building Commission NSW handles compliance",
          text: "Established in 2023, it is the specialist regulator responsible for compliance, inspections and enforcement on residential building work. It works alongside Fair Trading rather than replacing it, which is a genuine point of confusion for customers.",
        },
        {
          heading: "Where the front desk sits in all this",
          text: "Nowhere near it. Whether a job needs a licence, which class covers your scope, or how the compliance regime applies to a project is a conversation for Fair Trading, Building Commission NSW, or your industry association. Our job is making sure the enquiry reaches a licensed tradie instead of dying in a voicemail.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — what the front desk does",
      title: "What happens to the calls you cannot take.",
      intro: "Not a call centre, and not software you have to learn. A managed process that runs in the background of the business you already have.",
      items: [
        ["Missed-call text-back", "A call rings out and the caller gets a text within seconds, in wording you approved, rather than silence."],
        ["Instant enquiry reply", "Forms and messages get a fast reply so a Tuesday enquiry does not quietly go cold by Thursday."],
        ["Job qualification", "Urgency, scope and location get established early, against rules you set."],
        ["Callback and site-visit booking", "Good-fit enquiries move toward a booked time against availability you control."],
        ["Quote follow-up", "Quotes get chased on a schedule instead of sitting in your sent folder."],
        ["Optional phone answering", "Available as an add-on, on a script you write and approve, with clear rules for what comes straight to you."],
      ],
    },
    trades: {
      cap: "Fig. — who feels it most",
      title: "Every licensed trade loses jobs to a missed call.",
      intro: "Some feel it harder than others.",
      items: [
        tradeLink("Electricians", "Fault calls and switchboard quotes that go to whoever answers first.", "/electricians/", "See the electricians' front desk"),
        tradeLink("Plumbers and drainers", "Emergency callouts where the second missed call is usually the last one.", "/plumbers-drainage/", "See the plumbing front desk"),
        tradeLink("Roofers", "Weather-driven enquiries that spike hard and fade fast.", "/roofers/", "See the roofing front desk"),
        tradeLink("Builders", "Renovation enquiries that get quietly forgotten over a six-week decision.", "/builders/", "See the builders' front desk"),
        tradeLink("Heat pump installers", "Seasonal quote surges that outrun a solo diary.", "/heat-pump-installers/", "See the heat pump front desk"),
        tradeLink("Painters", "A short quoting window where a slow reply loses the job.", "/painters/", "See the painters' front desk"),
      ],
    },
    control: {
      ...nzControl,
      items: [
        ...nzControl.items,
        ["No licensing advice, ever", "It does not decide whether a job needs a licensed tradie or how NSW regulations apply. That is yours, and the regulator's."],
      ],
    },
    basedIn: auBasedIn("NSW Fair Trading or Building Commission NSW"),
    faqs: auFaqTail,
    close: {
      title: "See what is happening to your enquiries.",
      text: "New South Wales tradies are not short on work. They are short on hours to answer the phone while doing it. Book a free front desk audit — no pressure, no lock-in.",
    },
    sources:
      "Sources: Australian Bureau of Statistics, Building Approvals, Australia — June 2026 release (state and dwelling-type breakdowns, seasonally adjusted). NSW Fair Trading and Building Commission NSW published guidance on licensing and compliance functions. Licensing details are summarised from secondary sources and should be confirmed against fairtrading.nsw.gov.au before you rely on them; thresholds and requirements change.",
  },

  queensland: {
    metaTitle: "Answering Service, Tradies QLD",
    metaDescription:
      "For Queensland trade businesses: enquiries captured, qualified and followed up, storm season included. Run from New Zealand, and upfront about it.",
    eyebrow: "Queensland",
    title: "When a storm rolls through, the phone does not ring. It floods.",
    lead: "Every roofer, electrician and plumber in the state gets the same rush of calls at once, and the ones who respond first get the work. The rest of the year is steadier, but a missed call is still a missed call.",
    cta: "Book a Free Front Desk Audit",
    market: {
      cap: "Fig. — the state numbers",
      title: "What the approvals data shows.",
      intro:
        "One month of a volatile series, not a forecast. Approvals move around, and a single figure should not be read as a trend.",
      figures: [
        { label: "Month-on-month change", value: "+33.4%", note: "Queensland's total dwelling approvals, June 2026, seasonally adjusted — the largest jump of any state that month (ABS)." },
        { label: "Private sector houses approved", value: "2,353", note: "June 2026, the second-highest of any state behind Victoria." },
      ],
    },
    context: {
      cap: "Fig. — licensing in this state",
      title: "Queensland has the strictest trade licensing regime in the country.",
      intro:
        "This is stated as fact, not advice. We do not advise on licensing, and nothing below should be treated as guidance on your obligations.",
      blocks: [
        {
          heading: "The QBCC licenses more than 160 classes",
          text: "The Queensland Building and Construction Commission covers everything from low-rise residential building to individual trade contractor licences. It is one of the better-known and stricter regulators in Australia, and that reputation is earned.",
        },
        {
          heading: "The bar is more than paperwork",
          text: "Applicants must demonstrate relevant technical skill and experience for their licence class, meet minimum financial requirements for most contractor licences, and pass a fit-and-proper-person test. Some classes also require professional indemnity insurance.",
        },
        {
          heading: "The Home Warranty Scheme is a Queensland particularity",
          text: "The QBCC also administers statutory insurance covering homeowners on residential work — a layer most other states do not run in the same form, and one more thing a customer may ring to ask about.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — what the front desk does",
      title: "What happens when the phone lights up all at once.",
      intro:
        "A storm surge is exactly the situation this is built to hold. Nothing rings out into silence just because everyone called at the same time.",
      items: [
        ["Missed-call text-back", "A call rings out and the caller gets a text within seconds, in wording you approved."],
        ["Urgency triage", "Genuinely urgent calls get flagged by rules you set. The ones that can wait get acknowledged and queued rather than a dial tone."],
        ["Job qualification", "What has happened, where, and how bad — established before you ring back."],
        ["Callback and site-visit booking", "Real next steps booked against availability you control."],
        ["Quote follow-up", "Storm repair quotes get chased instead of forgotten in a busy fortnight."],
        ["Optional phone answering", "Available as an add-on, on a script you write and approve."],
      ],
    },
    trades: {
      cap: "Fig. — who feels it most",
      title: "Storm season sharpens this for some trades more than others.",
      intro: "The rush does not arrive evenly across the trades.",
      items: [
        tradeLink("Roofers", "Storm damage calls that spike within hours of a system passing through.", "/roofers/", "See the roofing front desk"),
        tradeLink("Electricians", "Outage and fault calls arriving in the same rush, all wanting an answer now.", "/electricians/", "See the electricians' front desk"),
        tradeLink("Plumbers and drainers", "Flood, drainage and burst-pipe callouts where the second missed call is the last one.", "/plumbers-drainage/", "See the plumbing front desk"),
        tradeLink("Builders", "Storm repair and renovation enquiries that need a fast, organised reply.", "/builders/", "See the builders' front desk"),
        tradeLink("Heat pump installers", "Cooling and heating enquiries either side of a heatwave.", "/heat-pump-installers/", "See the heat pump front desk"),
        tradeLink("Painters", "A weather-dependent quoting window where a slow reply loses the job.", "/painters/", "See the painters' front desk"),
      ],
    },
    control: {
      ...nzControl,
      items: [
        ...nzControl.items,
        ["No licensing advice, ever", "It does not decide whether a job needs a QBCC-licensed tradie or which class covers it. That is yours, and the regulator's."],
      ],
    },
    basedIn: auBasedIn("QBCC"),
    faqs: [
      ...auFaqTail.slice(0, 3),
      [
        "Can it handle a flood of calls during storm season?",
        "That is one of the situations it is built for. Urgent enquiries get flagged by the rules you set and moved to you fast; everything else gets acknowledged and queued, so nothing rings out during your busiest week of the year.",
      ],
      auFaqTail[3],
    ],
    close: {
      title: "See what is happening to your enquiries.",
      text: "Queensland trade demand does not arrive evenly. It arrives in bursts, and whoever responds first usually wins the job. Book a free front desk audit — no pressure, no lock-in.",
    },
    sources:
      "Sources: Australian Bureau of Statistics, Building Approvals, Australia — June 2026 release (state breakdowns, seasonally adjusted). Queensland Building and Construction Commission published guidance on licence classes, thresholds, eligibility and the Home Warranty Scheme. Licensing details are summarised from secondary sources and should be confirmed against qbcc.qld.gov.au before you rely on them. We have deliberately not attached a figure to storm-season call volume, because no verifiable source for one was found.",
  },

  victoria: {
    metaTitle: "Answering Service, Tradies VIC",
    metaDescription:
      "For Victorian trade businesses: enquiries captured, qualified and followed up. Run from New Zealand, and upfront about it. Why Victoria has two regulators.",
    eyebrow: "Victoria",
    title: "A switchboard call and a blocked drain call answer to different regulators.",
    lead: "Most customers have no idea. They just want the phone answered. Victoria runs two separate licensing bodies for two different trades, and it is a genuine point of confusion.",
    cta: "Book a Free Front Desk Audit",
    market: {
      cap: "Fig. — the state numbers",
      title: "What the approvals data shows.",
      intro:
        "Two figures from the same month, pointing in different directions — which is a fair reminder that approvals data moves around.",
      figures: [
        { label: "Private sector houses approved", value: "3,042", note: "Victoria, June 2026, seasonally adjusted — more than any other state, ahead of Queensland on 2,353 (ABS)." },
        { label: "Total dwelling approvals", value: "−13.9%", note: "The same month, houses plus higher density combined. The detached pipeline held up while the denser side eased." },
      ],
    },
    context: {
      cap: "Fig. — licensing in this state",
      title: "Victoria splits trade licensing across two regulators.",
      intro:
        "This is stated as fact, not advice. We do not advise on licensing, and nothing below should be treated as guidance on your obligations.",
      blocks: [
        {
          heading: "Electricians answer to Energy Safe Victoria",
          text: "The state's dedicated electricity, gas and pipeline safety regulator, operating under the Electricity Safety Act 1998. Electrical licensing sits entirely outside the building regulator.",
        },
        {
          heading: "Builders and plumbers answer to the building regulator",
          text: "Builder registration and plumbing licensing — covering classes including plumbing, drainage, gasfitting, roof plumbing and mechanical services — are administered by the Victorian Building Authority. Note that Victoria's plumbing regulation function has been through a recent machinery-of-government change and the branding has shifted; confirm the current body before relying on the name.",
        },
        {
          heading: "What that means on a job",
          text: "A plumber and an electrician working the same renovation answer to two different regulators under two different Acts. A customer asking whether you are licensed may be asking about a completely different body depending on which trade picks up the phone.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — what the front desk does",
      title: "What happens to the calls you cannot take.",
      intro: "Not a call centre, and not software you have to learn. A managed process running in the background of the business you already have.",
      items: [
        ["Missed-call text-back", "A call rings out and the caller gets a text within seconds, in wording you approved."],
        ["Instant enquiry reply", "Forms and messages get a fast reply so a cold-snap heating enquiry does not go cold itself."],
        ["Job qualification", "Urgency, scope and location established early, against rules you set."],
        ["Callback and site-visit booking", "Good-fit enquiries move toward a booked time against availability you control."],
        ["Quote follow-up", "Quotes get chased on a schedule instead of relying on memory."],
        ["Optional phone answering", "Available as an add-on, on a script you write and approve."],
      ],
    },
    trades: {
      cap: "Fig. — who feels it most",
      title: "Every licensed trade loses jobs to a missed call.",
      intro: "Some feel it harder than others.",
      items: [
        tradeLink("Electricians", "Fault calls and switchboard quotes, licensed through Energy Safe Victoria, that go to whoever answers first.", "/electricians/", "See the electricians' front desk"),
        tradeLink("Plumbers and drainers", "Emergency callouts, licensed through the building regulator, where the second missed call is the last one.", "/plumbers-drainage/", "See the plumbing front desk"),
        tradeLink("Heat pump installers", "Victoria's cold winters drive sharp heating-quote surges that outrun a solo diary.", "/heat-pump-installers/", "See the heat pump front desk"),
        tradeLink("Roofers", "Weather-driven enquiries that spike hard and fade fast.", "/roofers/", "See the roofing front desk"),
        tradeLink("Builders", "Renovation enquiries that get quietly forgotten over a six-week decision.", "/builders/", "See the builders' front desk"),
        tradeLink("Painters", "A short quoting window where a slow reply loses the job.", "/painters/", "See the painters' front desk"),
      ],
    },
    control: {
      ...nzControl,
      items: [
        ...nzControl.items,
        ["No licensing advice, ever", "It does not decide which regulator or licence class a job falls under. That is yours, and the regulator's."],
      ],
    },
    basedIn: auBasedIn("Energy Safe Victoria or the building regulator"),
    faqs: [
      ...auFaqTail.slice(0, 2),
      [
        "Why does Victoria have two building regulators?",
        "It is a real feature of the state, not a mistake. Electrical safety sits under different legislation to general building and plumbing work, so the two ended up covering different trades. We explain what that means above. We do not advise on how it applies to your licence.",
      ],
      auFaqTail[2],
      auFaqTail[3],
    ],
    close: {
      title: "See what is happening to your enquiries.",
      text: "Victorian tradies are not short on work. They are short on hours to answer the phone while doing it. Book a free front desk audit — no pressure, no lock-in.",
    },
    sources:
      "Sources: Australian Bureau of Statistics, Building Approvals, Australia — June 2026 release (state and dwelling-type breakdowns, seasonally adjusted). Energy Safe Victoria on electrical licensing under the Electricity Safety Act 1998. Victorian Building Authority on builder registration and plumbing licence classes. Victoria's plumbing regulator has recently been rebranded and the exact current name should be confirmed before you rely on it.",
  },
};
