// tradeContent.ts — long-form copy for the trade landing pages.
//
// Why this is separate from site.ts: site.ts holds short structured data used
// across the whole site (nav, packages, FAQs, the tradePages summary objects).
// This file holds the ~1,500 words per trade that only the trade pages use.
// Keeping it out of site.ts stops that file becoming unreadable, and keeps the
// page wrappers thin — no markup or long copy lives in electricians.astro et al.
//
// COPY RULES THIS FILE MUST FOLLOW (see site-v3/PRODUCT.md):
// - Banned outright: CRM, automation, funnel, SaaS, workflow, GoHighLevel, bot.
// - "AI" is restricted, not banned. It may appear in FAQ questions phrased the
//   way buyers actually search, and the answer reframes to the managed-service
//   positioning. It must NOT appear in headings or display copy.
// - Claims-safe: no guaranteed job counts, revenue, rankings or response rates.
//   "designed to help", "helps catch", "results depend on".
// - NZ vocabulary: tradie, job, quote, callout, on the tools, knock-off, smoko.

export type TradeContentKey = "electricians" | "plumbersDrainage" | "roofers";

export type TradeContent = {
  included: { intro: string; items: [string, string][] };
  walkthrough: { intro: string; steps: { time: string; text: string }[]; close: string };
  control: { intro: string; items: [string, string][]; close: string };
  seasonal: { intro: string; blocks: { heading: string; text: string }[]; sources: string };
  faqs: [string, string][];
};

const sharedIncludedIntro =
  "Not a call centre, and not another app to log into. A managed front desk that runs in the background of the business you already have.";

export const tradeContent: Record<TradeContentKey, TradeContent> = {
  electricians: {
    included: {
      intro: sharedIncludedIntro,
      items: [
        [
          "Missed-call text-back",
          "You cannot take a call with your hands inside a live board. The moment a call goes unanswered, the caller gets a text so they know they have been heard — instead of hanging up and ringing the next sparky on the list.",
        ],
        [
          "Instant enquiry reply",
          "Website forms and messages get a fast, professional reply, so an enquiry does not go cold sitting in an inbox nobody checks until knock-off.",
        ],
        [
          "Quote request form",
          "Job type, address, urgency, and photos of the board or the fault, collected up front. You walk into the quote knowing what you are looking at.",
        ],
        [
          "Job qualification",
          "The questions that matter get asked before you call back — single or three-phase, age of the property, whether the mains need isolating. The jobs worth your time are easy to pick out.",
        ],
        [
          "Callback and site-visit booking",
          "Good-fit enquiries get moved toward a callback, a quote, or a site visit, on times you have made available.",
        ],
        [
          "Quote follow-up",
          "A switchboard quote you sent last week gets chased properly, instead of sitting unanswered in your sent folder.",
        ],
        [
          "Follow-up for quiet leads",
          "Enquiries that go quiet get a nudge on a schedule you set, so nothing depends on you remembering to check back in.",
        ],
        [
          "A simple pipeline",
          "New enquiries, callbacks, quoted jobs, follow-ups, won and lost — visible in one place, not spread across texts, voicemail and a notepad on the dash.",
        ],
        [
          "Review requests",
          "Once the job is signed off and the customer is happy, they get asked for a Google review.",
        ],
        [
          "Optional phone answering",
          "For calls you genuinely cannot get to, an answering assistant can take the caller's details using a script you write and approve, with clear rules for what gets handed straight to you.",
        ],
      ],
    },
    walkthrough: {
      intro: "Here is what it looks like on an ordinary Tuesday.",
      steps: [
        { time: "10:14", text: "You are mid switchboard upgrade, mains isolated, hands full. The phone rings. You are not stopping for it." },
        { time: "10:15", text: "The call goes unanswered, so a text goes out straight away — short, in your wording, telling the caller you have seen them and will be in touch." },
        { time: "10:16", text: "They text back: power is out in half the house and the RCD keeps tripping." },
        { time: "10:17", text: "The qualifying questions go out, built around the urgency rules you set. Whole house or one circuit. Any smell of burning. Address." },
        { time: "10:19", text: "Answers come back. Under your rules, that combination gets tagged urgent." },
        { time: "10:20", text: "You get a notification with the answers already attached. You have not stopped working and you have not asked a single question yourself." },
        { time: "10:35", text: "Board is back up, mains re-energised. You check your phone and the full picture is already there." },
        { time: "10:36", text: "You ring back knowing what you are walking into, and decide: squeeze it in today, or first thing tomorrow." },
      ],
      close:
        "Meanwhile a switchboard quote that came in at 9am — no drama, not urgent — already got a reply and a callback time for after knock-off. It is sitting in the pipeline waiting on a two-minute decision, not forgotten in a missed-call list.",
    },
    control: {
      intro:
        "This is the part most sparkies want settled before anything else: what is this thing allowed to say and do without me.",
      items: [
        ["You set the price", "The front desk never quotes a number, negotiates, or discounts. Pricing conversations stay with you."],
        ["Every message is one you approved", "Replies, follow-ups and booking confirmations use wording you have signed off — not generic scripts written for someone else's business."],
        ["You decide what counts as urgent", "No power and a burning smell might be. A general switchboard quote is not. You draw that line, and the rules follow it."],
        ["No promises on a live fault", "Nothing tells a customer a job is safe, a fix will hold, or a callout time is guaranteed. Anything that sounds like a commitment on a safety issue stays with you."],
        ["You decide which jobs you take", "The system does not accept work on your behalf. It books time for you to make that call."],
        ["Phone answering runs on your script", "If you use it, you write it and you approve it, and you set what gets escalated straight to you."],
      ],
      close: "The short version: the front desk keeps enquiries moving and visible. It does not make the decisions that are yours to make.",
    },
    seasonal: {
      intro: "Electrical demand in New Zealand does not sit flat across the year. It moves, and it moves fast.",
      blocks: [
        {
          heading: "Winter is a heat pump bottleneck",
          text: "Bookings tighten from around May as households feel the cold coming, and installers report wait times stretching out through the coldest months. Customers who miss the autumn window end up ringing several installers at once trying to find whoever can fit them in — which means the job goes to whoever replies first, not necessarily whoever is best.",
        },
        {
          heading: "Storms bring a second wave, after the outage",
          text: "Much of the country's network runs on overhead lines exposed to wind, salt and falling trees, and that is the single biggest cause of unplanned outages. When the lines company restores bulk supply, that is only the first half. Tripped RCDs, damaged boards and internal faults surface as a fresh round of callouts, often landing in the same day or two.",
        },
        {
          heading: "EV charger work is here, not coming",
          text: "New Zealand's EV fleet passed 100,000 registered vehicles in 2026, with Auckland holding roughly 40% of them, and government-backed investment is adding thousands more public chargers on top. Home and small-commercial charger enquiries are a growing share of what electricians get asked to quote.",
        },
        {
          heading: "And there are not enough sparkies to go round",
          text: "The trade sits on Immigration New Zealand's long-term skill shortage list, with MBIE's outlook pointing to sustained demand from housing and electrification. The phone keeps ringing. The question is who answers it first.",
        },
      ],
      sources:
        "Sources: MBIE Occupation Outlook, Immigration New Zealand skill shortage list, EVDB.nz EV registration statistics, and NZ media reporting on storm-related outages.",
    },
    faqs: [
      [
        "Is this an AI receptionist?",
        "Not in the way that phrase usually means. This is a managed front desk — a process that gets built and run for you, using messages you approve. There is no tool for you to learn and no software licence to manage. If you add optional phone answering, it works from a script you write, and anything it cannot handle goes straight to you.",
      ],
      [
        "What if I already run ServiceM8, Tradify, Fergus or Simpro?",
        "The front desk handles enquiry capture, replies, follow-up and booking. It can sit alongside your job management software when that is listed in the proposal. It is not there to replace what you already use for scheduling and invoicing.",
      ],
      [
        "Can it promise a callout time or make a call on a live fault?",
        "No. Urgent jobs get flagged and routed to you by the rules you set. Anything that sounds like a safety promise or a firm callout commitment stays with you.",
      ],
      [
        "Do I lose control of pricing or which jobs I take?",
        "No. You set prices and you decide which jobs you want. The front desk keeps enquiries moving and visible — it does not accept work or quote numbers for you.",
      ],
      [
        "I am already flat out. Why would I want more enquiries?",
        "This is not about generating more. It is about not losing the ones you already get to a missed call or a forgotten follow-up. If you are turning work away, the callback and pipeline pieces are worth a look on their own.",
      ],
      [
        "What do you need from me to get it running?",
        "Your business details, the services and areas you cover, access to the relevant accounts, your approved wording for messages, and reasonably prompt feedback while it is being set up and tested.",
      ],
    ],
  },

  plumbersDrainage: {
    included: {
      intro: sharedIncludedIntro,
      items: [
        [
          "Missed-call text-back",
          "Every call you cannot take gets an instant text reply, so the caller knows they have been heard before they ring the next name on the list.",
        ],
        [
          "Instant enquiry reply",
          "Form fills, texts and messages get a fast, approved response — not a form sitting in an inbox until end of day.",
        ],
        [
          "Quote request form",
          "A simple way for callers to describe the job — leak, blockage, install, repipe — so you are not starting every quote conversation from zero.",
        ],
        [
          "Job qualification",
          "The questions that separate needs-someone-tonight from can-wait-till-Monday get asked before it lands in front of you. Location, access, how long it has been going on.",
        ],
        [
          "Callback and site-visit booking",
          "Real next steps get booked against times you have made available, not left as a vague call-me-back.",
        ],
        [
          "Follow-up engine",
          "Enquiries that go quiet get a second, approved touch on a schedule, instead of relying on someone remembering.",
        ],
        [
          "Quote follow-up",
          "A cylinder replacement you quoted on Friday gets chased on your terms, so a job you already priced does not quietly go to the next plumber.",
        ],
        [
          "Simple opportunity pipeline",
          "Every live enquiry in one place — new, quoted, booked, follow-up due — instead of tracked in someone's head or a notebook on the dash.",
        ],
        [
          "Old customer reactivation",
          "The cylinder you installed three years ago is due a check. The repipe enquiry from last winter never got a follow-up. Those are jobs sitting in your own history, and they get contacted with approved messages.",
        ],
        [
          "Optional phone answering",
          "If you would rather calls were picked up live than texted back, that is available — on a script you approve, for the questions you define.",
        ],
      ],
    },
    walkthrough: {
      intro:
        "Plumbing splits into two problems the other trades do not have in the same way: the call you cannot take, and the call that comes after hours.",
      steps: [
        { time: "16:02", text: "You are on your back under a house, phone on silent in your pocket. It rings out." },
        { time: "16:04", text: "The caller gets a text confirming the enquiry landed, and a couple of short questions: what is happening, roughly where, how urgent." },
        { time: "16:11", text: "They answer. Blocked drain, backing up since this morning, someone home until six." },
        { time: "16:45", text: "You are back in the van. The full picture is waiting — one call to book it, instead of a missed-call notification with no context." },
        { time: "19:30", text: "A leak call comes in after hours. The reply goes out immediately with the triage questions you set: is water actively coming in, is it isolated at the mains, is anyone at risk." },
        { time: "19:33", text: "Genuinely urgent, by your rules, so it goes to you or your on-call number. Anything that can safely wait gets acknowledged and booked as a first-thing callback." },
      ],
      close:
        "What does not happen: nobody promises a two-hour response on your behalf, and nobody tells a caller what is wrong with their plumbing or what it will cost. The front desk gets the right information in front of the right person fast. The call on urgency, price and promises is always yours.",
    },
    control: {
      intro:
        "The real risk with anything answering your phone is not speed. It is something being promised on your behalf that you then have to deliver. That is the line this does not cross.",
      items: [
        ["Pricing", "The front desk never quotes a job or names a price. Prices come from you, after you know what the job actually is."],
        ["Promises", "It never commits to an emergency response time, a same-day callout, or a fix. “Someone will be in touch shortly” is as far as it goes on its own."],
        ["Diagnosis", "It does not tell a caller what is wrong, whether it is serious, or what it will take to fix. That is a professional judgement and it stays with you."],
        ["Which jobs you take", "Every enquiry lands in front of you, or whoever you nominate, before anything is confirmed. You still decide what is worth your time and what is outside your patch."],
        ["What it is allowed to say", "Every message — the missed-call text, the triage questions, the follow-up — is written and approved by you before it goes near a customer. Nothing improvises."],
      ],
      close:
        "That is the difference between a front desk and something making calls on your behalf. One holds the door open and hands you the job. The other makes promises that land back on you to keep.",
    },
    seasonal: {
      intro: "Plumbing demand in New Zealand is not steady. It moves with the weather, and it moves in a rush.",
      blocks: [
        {
          heading: "Frost turns a normal week into a flood of callouts",
          text: "During a run of severe frosts with temperatures down to −16°C, Central Otago plumbers fielded roughly 100 burst-pipe callouts in a single week, with individual firms taking 20 to 40 calls in three days. Waikato plumbers report the same pattern whenever a cold snap lands — burst pipes and failed cylinders arriving all at once.",
        },
        {
          heading: "Older housing stock keeps producing unplanned work",
          text: "In Canterbury, frost, ground movement and ageing Dux Quest pipe are named as recurring causes of winter emergencies. Dux Quest alone was fitted in an estimated 40,000 New Zealand homes before it was pulled from the market, and it still fails without warning as pinhole leaks or sudden splits.",
        },
        {
          heading: "Storms bring drainage, not just leaks",
          text: "A blocked stormwater drain can flood a property within minutes of heavy rain, and ageing, undersized residential drainage — common in older Auckland suburbs — makes it worse. One significant Auckland rain event produced roughly 280 flooding-related callouts to Fire and Emergency alone.",
        },
      ],
      sources:
        "Sources: Otago Daily Times reporting on Central Otago frost callouts, infonews.co.nz on Waikato cold snaps, PlumbFitz on Christchurch emergency causes, industry reporting on Dux Quest, Metro Drainage on Auckland stormwater, and OurAuckland on Fire and Emergency callout numbers.",
    },
    faqs: [
      [
        "Is this an AI receptionist?",
        "Not in the way that phrase usually means. This is a managed front desk — a process built and run for you, using messages you approve. There is no tool for you to learn. If you add optional phone answering, it runs on a script you control rather than open-ended conversation.",
      ],
      [
        "What happens to a call that comes in at 2am?",
        "It gets a fast, approved reply and a couple of triage questions. If your rules flag it as genuinely urgent, you or your on-call number gets alerted straight away. If it can safely wait, it is booked as a first-thing callback instead of waking you for a dripping tap.",
      ],
      [
        "Can it promise someone will be there within the hour?",
        "No. It never commits to a response time, a same-day callout, or a fix. It gets the details in front of you fast. The promise is always yours to make.",
      ],
      [
        "What if I already use job management software?",
        "The front desk handles enquiry capture, reply, qualification and follow-up. Where it is listed in your proposal, it can sit alongside tools like ServiceM8, Tradify, Fergus or Simpro rather than replace them.",
      ],
      [
        "Can you guarantee more jobs?",
        "No. We guarantee the agreed system gets built, tested, launched, and fixed if something listed in the proposal is not working. We do not guarantee job numbers, revenue, or what any customer decides to do. Results depend on your market, your response, and your follow-through.",
      ],
      [
        "What do you need from me to get started?",
        "Your services, your service area, how you want urgent jobs handled, and the messages you are happy going out under your name. From there it gets built and run for you.",
      ],
    ],
  },

  roofers: {
    included: {
      intro: sharedIncludedIntro,
      items: [
        [
          "Missed-call text-back",
          "You are on a roof and cannot answer. The caller gets a text straight back instead of silence, so the job does not go to the next name on their list.",
        ],
        [
          "Instant enquiry reply",
          "Website forms, texts and messages get a fast, professional reply — before the homeowner moves on to the next roofer.",
        ],
        [
          "Quote request form",
          "Job type, address, urgency and photos get collected up front, so you know what you are dealing with before you climb up to look at it.",
        ],
        [
          "Job qualification",
          "A short set of questions sorts real jobs from tyre-kickers, so your time goes where it is worth going.",
        ],
        [
          "Callback and site-visit booking",
          "Interested homeowners get moved toward an actual booked time for a measure-up or inspection, not a vague promise to be in touch.",
        ],
        [
          "Follow-up engine",
          "Enquiries that go quiet get a proper follow-up instead of falling out of memory.",
        ],
        [
          "Quote follow-up",
          "Every quote you send gets chased on a set schedule until there is an answer — won, lost, or still deciding. On a reroof, this is the one that matters most.",
        ],
        [
          "Simple opportunity pipeline",
          "What is new, what is quoted, what is being followed up, what has been won or lost — without digging through texts to find out where a job is at.",
        ],
        [
          "Weather-delay updates",
          "When rain moves a job, the update goes out to the customer using your wording, before they have to chase you to find out what is happening.",
        ],
        [
          "Optional phone answering",
          "If you would rather no call went unanswered at all, an answering assistant can pick up using a script you approve and hand serious enquiries straight to you.",
        ],
      ],
    },
    walkthrough: {
      intro: "A reroof does not close in a day. Here is the whole arc, from the call you could not take to the quote that needed chasing.",
      steps: [
        { time: "10:12", text: "You are three courses into a reroof and the phone buzzes in your pocket. You are not getting to it, not safely." },
        { time: "10:13", text: "A text goes out: sorry we missed you, what is the job, where is the property. Short, and in wording you signed off." },
        { time: "10:19", text: "They reply. Reroof, iron rusted through in two spots, wants a full replacement quote — with a rough location and a couple of photos." },
        { time: "10:20", text: "It lands in the pipeline tagged as a reroof, with everything the caller has already told you attached." },
        { time: "12:40", text: "Smoko. You glance at the pipeline and send back a measure-up time later in the week." },
        { time: "Day 3", text: "They confirm. It is a booked site visit in your calendar, not a text buried three days back." },
        { time: "Day 24", text: "The quote went out last Friday and nothing has come back. The approved follow-up sends a short check-in." },
      ],
      close:
        "That last step is the one that pays for the rest. A reroof decision takes time, and most quotes do not die on price — they die because nobody followed up before the customer moved on.",
    },
    control: {
      intro: "The front desk handles the busywork. It does not make the decisions that are yours.",
      items: [
        ["Pricing stays yours", "Nothing gets quoted, discounted, or promised on price without you. The system collects what a quote needs. It does not write the number."],
        ["Promises stay yours", "Timeframes, warranties, what is included in a job — all of it comes from you, and only in messages you approved in advance."],
        ["Which jobs you take stays yours", "The qualification questions surface the detail. The decision to take a job, decline it, or pass it on is always yours."],
        ["What it is allowed to say stays yours", "Every template and follow-up gets signed off before it goes live. If a job does not fit one — an awkward access issue, a job outside your area — it gets flagged for you rather than answered by a script that does not fit."],
        ["Insurance conversations stay yours", "The front desk captures and organises the enquiry. It does not handle, advise on, or speed up an insurance claim. That stays between you, your customer, and their insurer."],
      ],
      close:
        "The front desk is there to make sure enquiries get captured, replied to and followed up properly. It is not there to run your business, quote on your behalf, or decide what work you take.",
    },
    seasonal: {
      intro: "Roofing demand does not move on a calendar. It moves with the weather — and the weather has been getting less predictable.",
      blocks: [
        {
          heading: "A damaging storm every eight days",
          text: "New Zealand's largest home insurer group tracks storm activity through its Wild Weather Tracker. Over the past 15 years a damaging storm has hit somewhere in the country roughly once every 19 days. In the twelve months to February 2026 that frequency had more than doubled to about once every eight days — 46 storms, generating over 33,000 storm-related claims, a 256% jump on the year before.",
        },
        {
          heading: "One event is enough to reset a season",
          text: "The October 2025 storms that hit the South Island brought gusts up to 180km/h in Southland and Otago and 155km/h at Wellington's Mt Kaukau. By the time claims settled, that single event accounted for close to 17,000 insurance claims and $158.9 million in insured losses.",
        },
        {
          heading: "What that means for a roofing business",
          text: "Two things at once. Demand for repairs and reroof quotes spikes hard and fast after a storm, and so does the number of homeowners ringing several roofers at the same time. Then the same weather pushes your own schedule back, which means more customers waiting to hear when their measure-up or install is actually happening.",
        },
      ],
      sources:
        "Sources: IAG New Zealand Wild Weather Tracker as reported by RNZ, 1News and the NZ Herald (April 2026); Insurance Council of New Zealand loss figures via Insurance Business NZ (July 2026).",
    },
    faqs: [
      [
        "Is this an AI receptionist?",
        "Not in the way that phrase usually means. This is a managed front desk — a process built and run for you, using messages you approve. There is no tool for you to learn. Optional phone answering, if you add it, runs on a script you signed off and hands anything serious straight to you.",
      ],
      [
        "What happens to a call while I am up on a roof?",
        "If you miss it, the caller gets a text back straight away instead of silence, and the details get collected so you are not starting from scratch when you ring back.",
      ],
      [
        "How do weather delays get communicated?",
        "Once you tell the system a job is being pushed, an update goes out using wording you approved — so the customer hears it from you before they have to chase you for it.",
      ],
      [
        "Is this shared leads, like the directory sites?",
        "No. This is not lead generation and your enquiries are not sold on to other roofers. It is built around the enquiries your own business already gets.",
      ],
      [
        "Do you handle insurance claims or storm-damage assessments?",
        "No. The front desk captures and organises the enquiry — job type, photos, location, urgency. The claim conversation, the assessment and the quote itself stay entirely with you and the customer's insurer.",
      ],
      [
        "Will it pester my customers or promise things I have not agreed to?",
        "No. Follow-up runs on a set schedule with approved messages — a check-in, not a hard sell. Nothing about price, timeframes or scope gets promised without you.",
      ],
    ],
  },
};
