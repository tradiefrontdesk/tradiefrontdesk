// problemContent.ts — long-form copy for the problem-led landing pages.
//
// These are the highest-intent pages on the site. The reader already knows
// they have the problem; they are looking for the fix. So each page leads with
// the symptom in their words, establishes the cost, explains why it happens
// WITHOUT blaming them, then shows the mechanism.
//
// COPY RULES (see site-v3/PRODUCT.md):
// - Banned outright: CRM, automation, funnel, SaaS, workflow, GoHighLevel,
//   bot. "chatbot" is treated as banned too — it shares the root and reads the
//   same way to a buyer.
// - "AI" is restricted: allowed in FAQ questions phrased the way buyers search
//   and in meta descriptions. Never in headings, heroes, or display copy.
// - Claims-safe: no guaranteed job counts, revenue, rankings or response
//   rates. No time-saved promises.
//
// EVIDENCE STANDARD APPLIED HERE:
// The circulating trade-marketing statistics — "62% of small business calls go
// unanswered", "$100-200 per missed call", "80% of sales need 5 follow-ups" —
// were all checked and NONE are used. They trace to vendor blogs with no
// primary source, methodology or sample. Where a number appears on these
// pages it is either from a verifiable study, clearly labelled as general
// research rather than a claim about this product, or it is an illustrative
// range presented as such.

export type ProblemKey =
  | "missedCalls"
  | "quoteFollowUp"
  | "afterHours"
  | "qualifying";

export type ProblemContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  cost: { cap: string; title: string; intro: string; items: [string, string][] };
  why: { cap: string; title: string; intro: string; blocks: { heading: string; text: string }[] };
  mechanism: { cap: string; title: string; intro: string; items: [string, string][] };
  walkthrough: {
    cap: string;
    title: string;
    intro: string;
    steps: { time: string; text: string }[];
    close: string;
    note?: string;
  };
  control: { intro: string; items: [string, string][]; close: string };
  /**
   * What a reader can do about this themselves, for free, this week. Optional.
   * It costs us some conversions and buys the page the right to be believed —
   * the same trade the guides make. A page that only works if you buy is a
   * brochure; one that helps either way gets cited and linked.
   */
  selfHelp?: { cap: string; title: string; intro: string; items: [string, string][]; close: string };
  trades: {
    cap: string;
    title: string;
    intro: string;
    items: { name: string; text: string; href: string; linkLabel: string }[];
  };
  faqs: [string, string][];
  close: { title: string; text: string };
};

// Every walkthrough carries this. Timestamps read as a promise whether or not
// one is intended, and none of these pages is entitled to make one.
const ILLUSTRATIVE =
  "Illustrative example. Timings shown are not a guaranteed response time, and results depend on your market, your rules, and how quickly you follow through.";

export const problemContent: Record<ProblemKey, ProblemContent> = {
  missedCalls: {
    metaTitle: "Missed Call Text-Back for NZ Tradies",
    metaDescription:
      "You're on the tools, the phone rings out, and the job goes to the next tradie. What a missed call actually costs, and how missed-call text-back stops it.",
    eyebrow: "Missed call text-back",
    title: "You didn't miss the call. You missed the job.",
    lead: "The phone rang while you were up a ladder, under a house, or mid-pour with both hands full. By the time you saw it, the caller had already rung the next name on their list. A text goes back within seconds of a call going unanswered — so the enquiry does not die in your missed-calls list before you have finished the job you were on.",
    cta: "Book a Free Front Desk Audit",
    cost: {
      cap: "Fig. — what it costs",
      title: "What a missed call actually costs.",
      intro:
        "A missed call does not feel like losing a job. It feels like nothing — a red notification you will deal with later. Somewhere between the ring and later, the caller has moved on.",
      items: [
        [
          "The job itself",
          "Someone rings with a leak, a fault, or a quote they want before the weekend. It rings out. If there is no voicemail, or the box is full, or they simply cannot be bothered leaving a message, they hang up and ring the next tradie. Ten minutes later that job belongs to someone else.",
        ],
        [
          "The repeat work behind it",
          "That caller might have been good for years of work — the annual check, the reno down the track, the bathroom in two summers' time. It all goes to whoever picked up, not necessarily whoever would have done the better job.",
        ],
        [
          "The referral you never hear about",
          "People recommend the tradie who answered. You do not get told about the referral you did not receive, which is exactly what makes this cost so easy to miss.",
        ],
        [
          "The review that never got written",
          "A completed job is a chance at a review. A missed call is not. Over a year, that is a visible difference in how your business looks to the next person searching.",
        ],
      ],
    },
    why: {
      cap: "Fig. — why it happens",
      title: "This is not a discipline problem.",
      intro:
        "It is worth saying plainly: you are not missing calls because you are disorganised. You are missing them because you are doing the job.",
      blocks: [
        {
          heading: "Your hands are full",
          text: "A multimeter in one hand and a live board in front of you. Two metres up a ladder with a nail gun. Under a house with the phone in the ute because it kept going off while you were chasing a leak. None of that is a failure.",
        },
        {
          heading: "There is no signal where the work is",
          text: "Roof cavities, subfloors, plant rooms, rural sites. The phone is not ringing out because you ignored it. It never rang at all until you climbed back out.",
        },
        {
          heading: "You are driving",
          text: "Between two callouts at open-road speed, you are not touching the phone for an unknown number. Nor should you.",
        },
        {
          heading: "Answering and working were never compatible",
          text: "You cannot run a rewire and hold a conversation about someone's hot water cylinder in the same five minutes. The tradies who do not lose these calls are not better at multitasking. They have something covering the phone while they work.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — the mechanism",
      title: "How missed-call text-back works.",
      intro:
        "Strip out the jargon and it is a simple sequence. It runs quietly in the background of your day, and the only thing you notice is that missed calls stop turning into missed jobs.",
      items: [
        ["A call goes unanswered", "It does not matter why. Hands full, no signal, driving, already on the phone to someone else."],
        [
          "A text goes out within seconds",
          "Not a generic sorry-we-missed-you. A message in your own wording that reads like it came from your business, telling them you have seen the call.",
        ],
        [
          "They reply by text",
          "Texting back is easier than ringing again and hoping for a different result. They tell you what they actually need.",
        ],
        [
          "The details get captured",
          "Job type, address, urgency — so you are not starting from zero when you do ring back.",
        ],
        [
          "You get the whole exchange",
          "Not a missed-call icon and a guess. The context is already there before you pick up the phone.",
        ],
        [
          "It is run for you",
          "There is no dashboard to learn and nothing to configure. You approve the wording once. The rest happens without you thinking about it while you are on the tools.",
        ],
      ],
    },
    walkthrough: {
      cap: "Fig. — one afternoon",
      title: "How it runs on a live job.",
      intro: "An ordinary Tuesday, between two jobs.",
      steps: [
        { time: "13:58", text: "You are driving between jobs, ute full of gear, phone in the cup holder. It rings. You are not touching it at open-road speed." },
        { time: "13:59", text: "The call rings out. A text goes straight back in your wording: on the tools right now, what do you need and I'll come back to you shortly." },
        { time: "14:02", text: "They text back. It is a quote for a job they have been meaning to sort for weeks. They give the address without being asked twice." },
        { time: "14:04", text: "A couple of questions go out, built around whatever you have set as worth flagging — timeframe, access, how urgent it actually is." },
        { time: "14:06", text: "Answers come back. Nothing here needs you to drop what you are doing." },
        { time: "14:09", text: "You pull up at the second job. Instead of a missed-call icon with no context, the whole exchange is waiting." },
        { time: "17:45", text: "Knock-off. You ring back on the way home. They are still warm, because they never sat there wondering whether you got the message." },
      ],
      close:
        "That is one call. In a normal week there are several — quiet enquiries that would otherwise sit in a missed-calls list until you forgot about them, or got to them after the caller had already gone elsewhere.",
      note: ILLUSTRATIVE,
    },
    control: {
      intro: "The front desk keeps enquiries moving. It does not make the decisions that are yours to make.",
      items: [
        ["You set the price", "No number gets quoted or negotiated on your behalf. Pricing stays a conversation you have."],
        ["Every message is one you approved", "The text-back, the follow-up, the booking confirmation — written in your voice and signed off before it is ever used."],
        ["You decide what counts as urgent", "A burst pipe at 7pm and a quote request on a Tuesday morning are not the same thing. You set that line."],
        ["No promises get made for you", "Nothing tells a customer a job is safe, a fix will hold, or a callout time is guaranteed."],
        ["You decide which jobs you take", "The front desk does not accept work for you. It books time for you to make that call."],
      ],
      close:
        "The short version: it keeps the front of your business moving and visible while you are on the tools. It does not run the parts only you should be running.",
    },
    selfHelp: {
      cap: "Fig. — what you can do this week",
      title: "Things worth doing before you pay anyone.",
      intro:
        "None of this needs a service behind it. If you do all five and missed calls stop costing you work, you have solved the problem for nothing, and we would rather you did that than paid us to fix something that was not broken.",
      items: [
        [
          "Record a voicemail greeting that actually says something",
          "Most greetings are the network default, which tells a caller nothing and gives them no reason to wait. Thirty seconds recorded in your own voice — who you are, that you are on a job, when you will ring back — turns a dead end into a held place. It costs nothing and it is the single highest-return thing on this list.",
        ],
        [
          "Set one time a day to clear missed calls",
          "Smoko or knock-off, the same time every day, phone in hand, work down the list. The problem with missed calls is rarely the missing. It is that there is no moment in the day where dealing with them is the job. Give it one.",
        ],
        [
          "Text back instead of ringing back",
          "A returned call at 4pm catches someone at work or driving. A text catches them whenever they look. It also leaves a written record of what the job is, which saves you asking twice. If you do nothing else on this list, do this one.",
        ],
        [
          "Write down every enquiry in one place",
          "A notebook on the dash beats a memory and a call log. You cannot see a pattern in missed calls until they are all written in one column — and once you can see it, you will know whether this is actually costing you money or whether it just feels like it.",
        ],
        [
          "Count them for a fortnight before deciding anything",
          "How many you missed, how many you rang back the same day, and what happened to each. Two weeks of honest numbers tells you more than any argument on a website, including this one. If the answer is that you catch nearly all of them, you do not have a problem worth paying to fix.",
        ],
      ],
      close:
        "If you get through that and the calls are still going elsewhere, the gap is not discipline. It is that answering and working cannot happen in the same five minutes, and that is the point where a front desk starts to earn its cost.",
    },
    trades: {
      cap: "Fig. — who feels it hardest",
      title: "Missed calls hit every trade differently.",
      intro:
        "The mechanism is the same everywhere — a call misses, a text goes out, the enquiry stays alive. What changes is which calls hurt most to lose.",
      items: [
        {
          name: "Electricians",
          text: "The calls that cannot wait — a tripped board, a burning smell, no power to half the house — plus the quieter ones like a switchboard upgrade before the winter rush. When a fault call goes unanswered the caller does not wait around.",
          href: "/electricians/",
          linkLabel: "See the electricians' front desk",
        },
        {
          name: "Plumbers and drainlayers",
          text: "Felt hardest after hours. A leak at 7:30pm either gets a fast reply or becomes someone else's job by the time you check your phone. Blocked drains and old customers due a check go the same way — quietly.",
          href: "/plumbers-drainage/",
          linkLabel: "See the plumbing front desk",
        },
        {
          name: "Roofers",
          text: "The enquiries that are hardest to win back — a reroof, a leak after a storm, a measure-up request. They arrive in bunches, right when you are least available, because that is when everyone else's roof is leaking too.",
          href: "/roofers/",
          linkLabel: "See the roofing front desk",
        },
      ],
    },
    faqs: [
      [
        "Is this an AI receptionist?",
        "Not in the way that phrase usually gets used. This is a managed front desk — a service set up and run for you, using wording you have approved. There is no software for you to learn, and nothing makes decisions you have not signed off. Anything it cannot handle comes straight to you.",
      ],
      [
        "How is this different from just having voicemail?",
        "Most callers who reach voicemail do not leave a message. They hang up and ring the next number. A text-back replies in writing, within seconds, so the caller knows they have been heard before they have looked up anyone else.",
      ],
      [
        "Will the text sound like a machine, or like my business?",
        "It is written in your wording and approved by you before it goes out. It should read like a message from you, because it is.",
      ],
      [
        "I already use job software — will this get in the way?",
        "No. Enquiry capture sits alongside tools like ServiceM8, Tradify, Fergus or Simpro when that is listed in your proposal. It is not there to replace what you use for scheduling and invoicing.",
      ],
      [
        "Can it promise a price or a callout time?",
        "No. Nothing quotes a number or guarantees a time on your behalf. Anything that sounds like a promise — on price, urgency, or safety — stays with you.",
      ],
      [
        "What does it cost, and what do you need from me?",
        "Packages start from $1,500 setup plus $497 a month, in New Zealand dollars. From you: your business details, the wording you want used, and reasonably prompt feedback while it is set up and tested. The free audit is the fastest way to see what it would look like for your business.",
      ],
    ],
    close: {
      title: "See where your missed calls are actually going.",
      text: "You cannot answer every call while you are on the tools, and you should not have to. What you can control is what happens the moment you miss one. Book a free audit and we'll walk through your calls, quotes and follow-up — no pressure, no lock-in.",
    },
  },

  quoteFollowUp: {
    metaTitle: "Quote Follow-Up for Tradies",
    metaDescription:
      "Quotes gone quiet? Every quote chased on a schedule until you get an answer — a managed front desk, not AI software you have to run yourself.",
    eyebrow: "Quote follow-up",
    title: "The quote that went quiet.",
    lead: "You measured up. You priced it properly — materials, labour, the awkward bit under the house. You sent it. Then nothing. No thanks-we'll-think-about-it. No went-with-someone-else. Just silence. Every quote gets chased on a schedule until you have an answer, so the work you already did to win the job does not evaporate.",
    cta: "Book a Free Front Desk Audit",
    cost: {
      cap: "Fig. — what it costs",
      title: "A dead quote costs more than a missed call.",
      intro:
        "A missed call costs you an enquiry. A dead quote costs you the enquiry plus everything you already spent to be in a position to win it.",
      items: [
        [
          "The time you already spent",
          "Diesel to the site. An hour, sometimes half a day, on the measure-up. Time back at the ute or the kitchen table working out materials, labour and margin. For a reroof or a switchboard upgrade that is a proper site visit, sometimes two.",
        ],
        [
          "None of it is refundable",
          "If the customer goes quiet and nobody chases, you do not just lose the job. You lose the job and the cost of chasing it in the first place. Across a normal month that is real, priced-out labour sitting in limbo.",
        ],
        [
          "The calendar space you held",
          "If you priced a job expecting to start in three weeks, you may have turned down or delayed work around that slot. When the quote quietly dies, the gap you kept open goes with it.",
        ],
        [
          "Why this is the highest-value fix",
          "You are not trying to generate a new lead here. You are trying to stop wasting one you already paid for.",
        ],
      ],
    },
    why: {
      cap: "Fig. — why it happens",
      title: "Silence is usually not a no.",
      intro:
        "Most tradies read silence as rejection. Most of the time it is not, and that reframe changes what follow-up even means.",
      blocks: [
        {
          heading: "They got busy",
          text: "Work, kids, life. Nothing pauses because someone is renovating a bathroom. Your quote landed in an inbox that already had forty other things in it.",
        },
        {
          heading: "They are waiting on someone else",
          text: "A partner who is away. A bank. Another quote they are still waiting on so they can compare properly. The ball is still in play — nobody has picked it up.",
        },
        {
          heading: "They meant to reply and forgot",
          text: "Which looks exactly like going cold from your end, and is not the same thing at all.",
        },
        {
          heading: "So following up is not nagging",
          text: "If silence usually is not a no, chasing is not pressure. It is finishing the conversation the customer started when they asked you to quote. And sometimes silence really is a no — the point is not to chase forever, it is to stop assuming the worst after one unanswered message.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — what good follow-up looks like",
      title: "Present, without being pushy.",
      intro:
        "Good follow-up is closer to good manners than good sales technique. This is the cadence that NZ trade sources like Builderscrack and BizCover both independently recommend — and it is what the front desk runs for you.",
      items: [
        [
          "Confirm it landed, fast",
          "Within a day or two, check they received it and can open it. Quotes get buried in spam or opened once on a phone and never found again. This first touch is basic admin, and it tells the customer you are organised.",
        ],
        [
          "Give them a reason to reply",
          "Just checking in is weak. Happy to talk through the switchboard options if anything was unclear gives them something to respond to.",
        ],
        [
          "Space it out",
          "A receipt check in the first day or two, a proper follow-up around the one-week mark, and a final check-in two to three weeks out. Longer for a reroof, where the customer may genuinely be comparing three quotes over a month. Compressed to days for small urgent jobs.",
        ],
        [
          "Know when to stop",
          "Three follow-ups is usually enough. After that, more contact reads as pressure rather than service. A polite the quote is good for X days if you want to go ahead is a better final note than another chase.",
        ],
        [
          "Match the channel to the job",
          "A text suits a small job and a busy customer. A call suits a bigger job with a real conversation in it. Email is for anything that needs to be in writing.",
        ],
        [
          "Do it every time",
          "None of this requires cleverness. It requires consistency — including on the jobs you are less excited about, which is exactly where it slips.",
        ],
      ],
    },
    walkthrough: {
      cap: "Fig. — one reroof quote",
      title: "How it runs, start to answer.",
      intro: "A reroof quote, from the evening it goes out to the day you get a decision.",
      steps: [
        { time: "Day 0", text: "You send the quote after knock-off, from the site notes you took that morning." },
        { time: "Day 1", text: "A short message confirms the quote landed and asks if anything needs explaining. No pressure, no just-checking-in." },
        { time: "Day 1", text: "They reply with a question about timing. It is logged and passed to you to answer in your own words — scope and pricing always come back to you." },
        { time: "Day 4", text: "No further reply. A second touch goes out referencing the actual job — the reroof, the colour they were leaning toward — not a generic nudge." },
        { time: "Day 10", text: "Still quiet. A follow-up reminds them the price is held for a set period, which is often what gets a decision moving either way." },
        { time: "Day 14", text: "They reply: gone with the neighbour's guy who could start sooner. Logged as lost, with the reason recorded — useful for how you price and schedule the next one." },
      ],
      close:
        "Plenty of quotes come back with a yes on day four, or go quiet until day twenty and land anyway. The point is not to force an outcome. It is that every quote gets the same standard of attention whether or not you remembered to chase it.",
      note: ILLUSTRATIVE,
    },
    control: {
      intro: "Follow-up is chasing an answer. It is not negotiating one.",
      items: [
        ["No discounting, ever", "The front desk never talks a price down to close a job. If a customer pushes for a lower number, that comes straight back to you."],
        ["No promises on timing", "Whether you can start Monday is your answer to give, not the system's."],
        ["Your wording, your tone", "Every message is built from what you approved — your pricing, your scope, the way you actually talk."],
        ["You decide how hard to push", "Whether to sweeten a deal, hold firm, or walk away from a job that is more trouble than it is worth."],
        ["Stops when it is a no", "Once a quote is genuinely declined it is logged as lost and the follow-up stops. This is built to chase an answer, not to wear people down."],
      ],
      close:
        "A follow-up system that negotiates on your behalf is one that can quietly give away your margin while you are not looking. This one keeps the conversation open and leaves the decisions with you.",
    },
    selfHelp: {
      cap: "Fig. — what you can do this week",
      title: "A follow-up habit you can run off your phone.",
      intro:
        "You do not need a system to chase a quote. You need a rule and somewhere to write the date down. If this fixes it, you have saved yourself a monthly bill, and that is a better outcome than us selling you one.",
      items: [
        [
          "Put a follow-up date on the quote the day you send it",
          "Not a mental note. A calendar entry with the customer's name on it, set for three or four days out, made at the moment you hit send. The reason quotes go unchased is almost never a decision not to chase them. It is that nothing ever prompted anyone.",
        ],
        [
          "Make the first touch about the quote, not about the decision",
          "Checking they received it and can open it is admin, and it is easy to send. Asking whether they want to go ahead is a sales call, and it is not. The first one gets answered far more often, and it opens the door for the second.",
        ],
        [
          "Give it three touches, then stop",
          "A receipt check, a proper follow-up about a week later, and a final note a fortnight or so after that. Three is enough. Past that you are not being persistent, you are being a nuisance, and the difference matters more than one job.",
        ],
        [
          "Keep a list of quotes out, not quotes sent",
          "A sent folder is a record of what you did. A list of what is still open is a record of what is still winnable. They are different documents and only one of them makes you money.",
        ],
        [
          "Log why the lost ones were lost",
          "One word is enough — price, timing, went elsewhere, never replied. After a dozen you will know whether you have a follow-up problem, a pricing problem, or a qualification problem, and those need three different fixes.",
        ],
      ],
      close:
        "Do all five consistently and you will win quotes you are currently losing. The catch is consistency: the follow-up that slips is always the one for the job you were least excited about, which is exactly the one still worth having.",
    },
    trades: {
      cap: "Fig. — who feels it hardest",
      title: "The bigger the quote, the more it hurts.",
      intro:
        "Every trade loses quotes to silence, but the pain scales with how much the quote cost to produce and how long the customer takes to decide.",
      items: [
        {
          name: "Roofers",
          text: "Hardest hit. A reroof means a proper inspection and a price running into five figures, and customers often sit on the decision for weeks while they gather two or three quotes and talk it over at home. That is a long window for a job to die from neglect rather than a genuine no.",
          href: "/roofers/",
          linkLabel: "See the roofing front desk",
        },
        {
          name: "Electricians",
          text: "Felt most on switchboard upgrades and larger rewiring — work that is not urgent enough to force a fast decision but expensive enough that the customer wants to sit with the number.",
          href: "/electricians/",
          linkLabel: "See the electricians' front desk",
        },
        {
          name: "Plumbers and drainlayers",
          text: "Cylinder replacements and bathroom work. Priced properly on site, then left to simmer while the customer checks with a partner. Small emergency callouts rarely go quiet — it is the considered, higher-value jobs that need chasing.",
          href: "/plumbers-drainage/",
          linkLabel: "See the plumbing front desk",
        },
      ],
    },
    faqs: [
      [
        "Does Tradie Front Desk use AI to follow up my quotes?",
        "The follow-up runs on messages you approved, sent on a schedule you control. Nothing improvises answers to your customers, and nothing sets pricing or makes commitments on your behalf. It is a managed service, not software you have to run.",
      ],
      [
        "How soon should I follow up after sending a quote?",
        "Within a day or two, just to confirm it landed and answer early questions. That first touch is not a sales push — it makes sure your quote did not disappear into a spam folder.",
      ],
      [
        "How many times should I follow up before giving up?",
        "Three is a sensible ceiling for most jobs — a receipt check, a proper follow-up about a week later, and a final check-in a couple of weeks after that. Bigger jobs justify stretching it; small urgent jobs compress it into days.",
      ],
      [
        "Will it discount my price or negotiate with customers?",
        "No. It never discounts, negotiates, or commits on your behalf. Its job is to keep the conversation open and get you an answer.",
      ],
      [
        "What if a customer says no — will you keep contacting them?",
        "No. Once a quote is declined it is logged as lost and follow-up stops.",
      ],
      [
        "Is this only worth it for big quotes?",
        "It helps with both, but the impact is biggest on jobs that cost you the most to quote — a proper measure-up, a site visit, real pricing time. A quick callout quote still benefits, it just needs fewer touches.",
      ],
    ],
    close: {
      title: "Stop losing quotes you already paid to produce.",
      text: "You already did the hard part — the measure-up, the pricing, the drive out and back. Book a free audit and we'll look at how your quotes are followed up right now, or are not, and what a proper system would look like.",
    },
  },

  afterHours: {
    metaTitle: "After-Hours Call Cover for Tradies",
    metaDescription:
      "After-hours cover for NZ trade businesses: enquiries captured and triaged by your rules, not an AI promising a callout you never agreed to.",
    eyebrow: "After-hours cover",
    title: "The job that rang at 7:42pm and got no answer.",
    lead: "You knocked off at six. Somewhere a customer just found out their cylinder is leaking, their power is out, or a wall is coming away from the roofline. They ring. It rings out. They ring the next name. After-hours cover is not about you being available all night — it is about that enquiry being captured and sorted before it goes to someone else.",
    cta: "Book a Free Front Desk Audit",
    cost: {
      cap: "Fig. — what happens now",
      title: "What happens to an enquiry at 7:30pm today.",
      intro:
        "For most trade businesses the front desk closes when the tools go down. The enquiry does not know that.",
      items: [
        [
          "It becomes a voicemail nobody checks",
          "Left on a line that gets checked Monday, or at 7am when the caller has already booked someone else.",
        ],
        [
          "It becomes a form submitted into silence",
          "No acknowledgement goes back, so the customer has no idea whether it even landed.",
        ],
        [
          "Or it just rings out",
          "Nothing behind it at all. The caller moves down their list.",
        ],
        [
          "And everything looks identical",
          "A blocked drain at 7:30pm and a burst pipe at 7:30pm look the same in a voicemail inbox. So does a customer happy to wait until Tuesday and one already dialling the next plumber.",
        ],
      ],
    },
    why: {
      cap: "Fig. — the honest tension",
      title: "Reachable and available are not the same thing.",
      intro:
        "This is the part most after-hours pitches skate over, so it is worth being straight about it.",
      blocks: [
        {
          heading: "Nobody wants to be on call for a dripping tap",
          text: "A lot of tradies hear after-hours cover and picture being woken at 11pm for every blocked toilet in the district. That is exactly why most owners avoid it and let the phone ring out instead.",
        },
        {
          heading: "That is not what this is",
          text: "The enquiry gets captured, replied to and sorted the moment it arrives. It does not mean you personally get pulled out of bed for it.",
        },
        {
          heading: "You draw the line, in advance",
          text: "You decide what is urgent enough to alert you and what gets acknowledged, booked and handed over first thing. The system does not decide that and it does not guess. It follows the line you drew.",
        },
        {
          heading: "Getting the line right is most of the job",
          text: "Set it too tight and you lose the genuine emergencies along with everything else. Set it too loose and you are worse off than switching your phone off. This is the part worth spending time on during setup.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — how triage works",
      title: "You define urgent. Not a default, not a guess.",
      intro:
        "Before anything goes live you set the rules that decide what gets an alert and what waits until morning. Most owners start around genuine risk.",
      items: [
        ["Water actively coming in", "A burst pipe, a flooding ceiling, water where it should not be and getting worse by the minute. Alert."],
        ["No power", "Especially where it affects safety, medical equipment, or a business that cannot operate without it. Alert."],
        ["A safety risk", "Exposed wiring, a structural issue, anything that could hurt someone before morning. Alert."],
        [
          "Everything else",
          "A quote request, a dripping tap, a blocked drain that is not overflowing, a general enquiry about next month. Acknowledged straight away, booked for the next available slot. The customer knows they have been heard. You are not woken to hear it.",
        ],
        [
          "The rules are yours to change",
          "A roofer might treat tarping before the next rain band as urgent in storm season and not in a dry month. There is no fixed list — there is your list, applied consistently.",
        ],
      ],
    },
    walkthrough: {
      cap: "Fig. — a Tuesday evening",
      title: "How it runs at 7:30pm.",
      intro: "One after-hours enquiry, from the call you did not take to the morning handover.",
      steps: [
        { time: "19:31", text: "A call goes unanswered, or a form is submitted. Either way the enquiry is captured when it happens, not discovered next time someone checks the phone." },
        { time: "19:33", text: "A text goes back letting the caller know the enquiry has been received and is being looked at. They are not left wondering whether it vanished." },
        { time: "19:35", text: "A few questions go out to work out what is actually happening: what is the issue, where is the property, how urgent does it feel to them." },
        { time: "19:38", text: "If it meets your urgent rules, an alert goes to you or your on-call number with the details already gathered — so you are not starting from zero if you decide to respond." },
        { time: "19:38", text: "If it does not, the enquiry is acknowledged, the details recorded, and it is queued as the first thing to review in the morning. Nothing chases you overnight." },
        { time: "07:00", text: "You open your phone to an organised list: what came in, what was flagged and why, what is ready to action. No missed calls to chase, no guessing what a three-word voicemail meant." },
      ],
      close:
        "An alert means a notification reached you with the details attached. It does not mean anyone has been dispatched, and it does not commit you to attending.",
      note: ILLUSTRATIVE,
    },
    control: {
      intro:
        "This is the section that matters most on this page, so it is stated plainly rather than implied.",
      items: [
        ["No response time is promised", "Not by the system, not on your behalf, not to any caller. Ever."],
        ["No callout is promised", "Nothing tells a customer someone is coming tonight."],
        ["No fix or price is promised", "The system acknowledges and triages. It does not diagnose and it does not quote."],
        ["What a caller is told", "That their enquiry has been received and someone will be in touch. Never a guaranteed hour, and never a guarantee that you personally will attend."],
        ["Whether you respond tonight is your decision", "Who gets sent, what they are told, what it costs, whether you take the job at all — all still yours."],
      ],
      close:
        "An after-hours system that starts making promises about when you will turn up is a system setting you up to break a promise you never agreed to. This one does not make that promise in the first place.",
    },
    trades: {
      cap: "Fig. — who feels it hardest",
      title: "Three trades live with this most.",
      intro:
        "Not every trade has the same after-hours pattern. These three feel it hardest, and for different reasons.",
      items: [
        {
          name: "Plumbers and drainlayers",
          text: "First and worst. Burst pipes do not wait for business hours, and neither do drains backing up at dinner time. Cold snaps make it acute — during one hard frost, Central Otago plumbers reported around 100 burst-pipe callouts in a single week.",
          href: "/plumbers-drainage/",
          linkLabel: "See the plumbing front desk",
        },
        {
          name: "Electricians",
          text: "No power at night is unsettling in a way a dripping tap is not, and it arrives in clusters — single storm events have cut supply to tens of thousands of properties. Many of those calls are not emergencies needing a callout tonight. Sorting which are is exactly what triage rules are for.",
          href: "/electricians/",
          linkLabel: "See the electricians' front desk",
        },
        {
          name: "Roofers",
          text: "During and after storms. A weather system that lifts one roof has usually damaged several others nearby — tarping before the next band of rain, not a full repair at 9pm. Capturing that enquiry and queueing the tarp for first light beats a promise nobody can keep in the dark.",
          href: "/roofers/",
          linkLabel: "See the roofing front desk",
        },
      ],
    },
    faqs: [
      [
        "Will I get woken up for everything?",
        "No. Only enquiries meeting the urgent rules you set trigger an alert — water actively coming in, no power, a safety risk, or whatever else you decide. Everything else is acknowledged and queued for the morning. You are not fielding a dripping tap at midnight.",
      ],
      [
        "Is this an AI answering service?",
        "Not in the way that phrase usually gets used. This is a managed service, built and run for you, using approved messages and rules you signed off. Nothing improvises a promise to your customers, and anything outside the rules comes to you.",
      ],
      [
        "What actually counts as urgent?",
        "Whatever you decide. Most owners start with genuine risk — active flooding, no power, safety issues — and treat everything else as next-morning. You can change the rules whenever your business or the season changes.",
      ],
      [
        "Can it tell a customer I'll be there tonight?",
        "No. It never promises a callout, a response time, or a fix on your behalf. It tells the customer their enquiry has been received and someone will be in touch. What happens next is your decision.",
      ],
      [
        "What if a call is upsetting for the customer but does not meet my urgent rule?",
        "It still gets acknowledged straight away, so nobody is left in silence — it just does not send you an overnight alert. If a category of call is being missed or over-flagged, adjusting the rules is a quick change, not a rebuild.",
      ],
      [
        "Do I need to be on call around the clock for this to work?",
        "No — that is the point. You set the rules once, based on what you are genuinely willing to be woken for, and they get applied consistently every time.",
      ],
    ],
    close: {
      title: "See what happens to your enquiries after six.",
      text: "After-hours enquiries will keep landing whether you are set up for them or not — that is when people notice a problem. Book a free audit and we'll look at what happens to yours right now. No obligation, and no assumption you want to be on call for anything.",
    },
  },

  qualifying: {
    metaTitle: "Qualifying Enquiries Before You Quote",
    metaDescription:
      "How to tell which enquiries are worth a callout before you drive across town, and the questions worth asking early.",
    eyebrow: "Qualifying enquiries",
    title: "Not every enquiry deserves your afternoon.",
    lead: "You drove forty minutes for the measure-up. Wrote the quote at 9pm after the kids were down. Followed up twice. Then nothing. That job cost you half a day — not because you did anything wrong, but because nobody found out it was not a real job until you had already spent the time.",
    cta: "Book a Free Front Desk Audit",
    cost: {
      cap: "Fig. — what it costs",
      title: "What an unqualified enquiry actually costs.",
      intro:
        "Talk to any tradie who has been quoting a few years and the story is the same in every postcode. This one is measured in time, not lost jobs.",
      items: [
        ["The drive", "Forty minutes each way for a job that sounded fine on the phone."],
        [
          "The measure-up",
          "Three quarters of an hour walking a property that is not yours, working out access, taking photos.",
        ],
        [
          "The quote itself",
          "Pricing materials, checking supplier rates, writing it up properly because a scrappy quote looks like a scrappy business. Usually at night, because the day was full of paying work.",
        ],
        [
          "The job you could have won instead",
          "The lost job is not really the cost — you were probably never getting that one. The cost is the hours you did not spend on a job you could have won, or on the tools, or at home.",
        ],
      ],
    },
    why: {
      cap: "Fig. — the honest version",
      title: "Careful with money is not the same as time-waster.",
      intro:
        "It would be easy to write this page as though customers who ask about price are a nuisance. They are not, and getting that wrong would be a mistake.",
      blocks: [
        {
          heading: "Price-conscious customers are often good customers",
          text: "Plenty of people who ask roughly what's this going to cost before committing to a full quote go on to be among your best and most loyal. Most people getting work done on their house are careful with money. That is normal.",
        },
        {
          heading: "The real problem is not knowing which is which",
          text: "Someone ready to hire this week and someone still months and two quotes away from deciding can look identical in a first message. Can I get a quote for a new roof tells you almost nothing.",
        },
        {
          heading: "The goal is never to filter people out",
          text: "It is to find out which is which before you are standing in their driveway. A five-minute exchange by text can tell you most of what a forty-minute measure-up would.",
        },
        {
          heading: "So the measure-ups you do go to are real",
          text: "That is the whole return. Not fewer customers — fewer afternoons spent on work that was never going to happen.",
        },
      ],
    },
    mechanism: {
      cap: "Fig. — the questions",
      title: "What is worth asking before you quote.",
      intro:
        "None of this is complicated. It is what any experienced tradie already asks on a good day, when they are not flat out and can think before agreeing to a callout. The value is in asking consistently, before you commit time.",
      items: [
        [
          "What the job actually is",
          "Reroof covers a $4,000 repatch and a $40,000 full reclad. Vague scope is the biggest reason quotes take too long and land wrong. Job type and rough scope up front — even photos and a description — tells you in thirty seconds whether it needs a callout at all.",
        ],
        [
          "When they want it done",
          "Someone who needs it finished before winter is a different conversation from someone just starting to think about it. Neither is wrong. A firm timeframe is one of the clearest signals a job is real.",
        ],
        [
          "Roughly what they are expecting to spend",
          "Not an interrogation — just enough to know whether you are in the right ballpark. Someone expecting an $8,000 job to cost $2,000 needs to hear that early and kindly, before either of you spends more time.",
        ],
        [
          "Who actually decides",
          "A renter whose landlord has not approved it. One partner enquiring without the other. A property manager needing three sign-offs. None are dealbreakers — the job just moves at the speed of whoever says yes.",
        ],
        [
          "What the access and site look like",
          "Long driveway, steep section, gate code, no off-street parking, second-storey work needing scaffold. Knowing before you drive out means you arrive with the right gear.",
        ],
        [
          "Whether they have other quotes",
          "Not a trick question — most people getting quality work done get more than one. What matters is whether they have had two already and are deciding this week, or you are the first call in a process that has not really started.",
        ],
        [
          "How they found you",
          "A referral from a past customer behaves differently to a stranger off a late-night search. Neither is worth less. It just tells you how warm the enquiry already is.",
        ],
      ],
    },
    walkthrough: {
      cap: "Fig. — one morning",
      title: "How it runs before your day gets touched.",
      intro: "An overnight enquiry, sorted before you have left the first job.",
      steps: [
        { time: "07:12", text: "A form comes in overnight: need a quote for rewiring, three-bed house, Hamilton. That is it. No timeframe, no scope, no idea whether it is urgent or a someday project." },
        { time: "07:14", text: "A reply goes out with a few short questions: whole house or part of it, when are you hoping to have it done, and is there a particular reason for the rewire." },
        { time: "08:03", text: "They reply: whole house, selling in six weeks, a building inspector flagged it, wants it done within a fortnight." },
        { time: "08:05", text: "It is flagged and sent to you with the answers attached. You are on a job, but you glance at your phone at smoko and know exactly what you are looking at — real job, real deadline, real reason." },
        { time: "08:20", text: "You ring, confirm a site visit for tomorrow, and go back to the tools. No wasted afternoon and no guessing." },
      ],
      close: "The groundwork happened before your day got touched, not after.",
      note: ILLUSTRATIVE,
    },
    control: {
      intro: "This is the part worth being clear-eyed about: the system asks the questions. It does not decide anything.",
      items: [
        ["It never turns a job away", "No enquiry gets declined on your behalf."],
        ["It never tells a customer they are not a fit", "That conversation is yours to have, if it needs having at all."],
        ["It does not rank or score people", "Nobody gets quietly deprioritised for sounding price-sensitive. Answers get collected and handed to you exactly as given."],
        ["Every decision stays with you", "Whether to quote, what to charge, whether this is a job you want."],
        [
          "Because those calls are business judgement",
          "One tradie takes a smaller job because it is round the corner from three others that week. Another turns down a big one because the customer already sounds difficult. Both are right for that business, and neither is a call a system should make.",
        ],
      ],
      close:
        "You know your trade and your customers better than any set of questions ever will. The questions just make sure you are deciding with the full picture instead of half of one.",
    },
    trades: {
      cap: "Fig. — who feels it hardest",
      title: "It scales with what a quote costs to produce.",
      intro:
        "This matters more for some trades than others, mostly down to how long a proper quote takes and how far you travel to do it.",
      items: [
        {
          name: "Roofers",
          text: "The sharp end. A reroof quote can mean an hour on site, photos, measurements, a materials list, and a written quote that takes real time to get right — for a job that might not happen for months, if at all.",
          href: "/roofers/",
          linkLabel: "See the roofing front desk",
        },
        {
          name: "Electricians",
          text: "Less on the small stuff — a power point does not need qualifying, you just go and fix it. On full rewires and larger fit-outs the same problem appears: hours of preparation for a number that may be one of several being collected.",
          href: "/electricians/",
          linkLabel: "See the electricians' front desk",
        },
        {
          name: "Plumbers and drainlayers",
          text: "Same split. Emergency callouts qualify themselves. Drainage relays, bathroom and kitchen fit-outs do not — and those are the ones that take hours to price properly.",
          href: "/plumbers-drainage/",
          linkLabel: "See the plumbing front desk",
        },
      ],
    },
    faqs: [
      [
        "Does Tradie Front Desk use AI to qualify leads before I quote?",
        "It asks the right questions early and passes the answers straight to you. It does not decide who is worth quoting, it does not rank anyone, and it does not decline a job on your behalf. That call is always yours.",
      ],
      [
        "How do I know if an enquiry is worth quoting before I drive out?",
        "Ask about scope, timeframe, and who makes the decision before committing to a site visit. If someone cannot say roughly when they want the work done, that is often a sign it is not urgent yet — not a reason to write them off, just a reason to keep it to a phone call for now.",
      ],
      [
        "Should I stop offering free quotes altogether?",
        "Not necessarily. Plenty of tradies do fine with free quotes. What tends to help more is finding out enough about the job first, so the free quotes you do write have a real chance of becoming work.",
      ],
      [
        "I already get enough enquiries — why would I need this?",
        "Getting enough enquiries and getting the right ones are different problems. If you are already flat out driving to quotes that go nowhere, the fix is not more enquiries.",
      ],
      [
        "Will this make me miss out on good customers who are careful with money?",
        "It should not. Someone asking sensible questions about price is not the same as a job that is not real. The questions exist to tell the difference, not to screen out anyone who mentions budget.",
      ],
      [
        "Does this replace my own judgement about which jobs to take?",
        "No. It gathers the answers and hands them over. You still decide what to quote, what to charge, and what you take on.",
      ],
    ],
    close: {
      title: "See where your quoting time is actually going.",
      text: "A good share of quoting time goes to jobs that were never going to happen. You cannot always tell which from the first message — but with the right questions asked early, you can tell a lot sooner than you do now. Book a free audit and we'll walk through where the time is going.",
    },
  },
};
