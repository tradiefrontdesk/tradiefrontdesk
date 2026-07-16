#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outRoot = process.argv[2] || "video-projects/home";

const videos = [
  {
    slug: "home-hero-front-desk-system",
    title: "More Booked Jobs. Less Chasing. No Tech Headaches.",
    duration: 180,
    target: "3 minutes",
    cta: "Book a Free Front Desk Audit",
    motifs: ["missed-call pulse", "five-step glowing pipeline", "owner alert", "front-desk system card"],
    script: [
      "Most tradies do not lose good jobs because they are bad at the work.",
      "They lose opportunities because the front desk breaks down when the day gets busy.",
      "A customer calls while you are on site. You miss it.",
      "A quote request lands in your inbox while you are driving.",
      "A quote goes out, but no one follows it up.",
      "The customer goes quiet, and the job disappears.",
      "The Tradie Front Desk System is designed to help fix that part of the business.",
      "It captures enquiries, responds fast, qualifies the job, moves the customer toward a callback or quote, and follows up when they go quiet.",
      "The flow is simple: capture, respond, qualify, book, follow up.",
      "It is not shared leads. It is not just ads. It is not more software you have to figure out.",
      "It is a managed front-desk system built around missed calls, quote requests, customer details, owner notifications, and a simple job pipeline.",
      "If you already get enquiries, the first question is not always how to get more.",
      "The first question is whether your business is handling the enquiries it already receives.",
      "When the system is working, missed calls can get a quick text-back.",
      "Website enquiries can get an instant acknowledgement.",
      "Customers can be asked for the details you actually need.",
      "Good-fit jobs can move toward a callback, quote, or site visit.",
      "And if a customer does not reply, the follow-up does not depend on your memory.",
      "That means less chasing, fewer opportunities slipping through the cracks, and a clearer view of what needs action.",
      "Results still depend on your market, services, pricing, availability, reputation, and follow-through.",
      "But the front-desk process can be made cleaner, faster, and easier to manage.",
      "Book a Free Front Desk Audit and find where your enquiry process may be leaking jobs.",
    ],
    scenes: ["Problem setup", "Old messy enquiry path", "Front Desk System appears", "Five-step flow", "Before and after pipeline", "Audit CTA"],
  },
  {
    slug: "home-good-jobs-slipping",
    title: "Good Jobs Are Slipping Through The Cracks",
    duration: 75,
    target: "60-75 seconds",
    cta: "Check Where You're Losing Jobs",
    motifs: ["falling enquiry cards", "missed call timer", "quote fading cold", "single organised pipeline"],
    script: [
      "Good jobs can slip away quietly.",
      "The phone rings while you are on the tools.",
      "A website enquiry waits in the inbox.",
      "A customer asks for a quote, then hears nothing for too long.",
      "A quote gets sent, but the follow-up never happens.",
      "That is not a trade problem. It is a front-desk problem.",
      "The issue is usually not one big failure.",
      "It is a series of small leaks: missed calls, slow replies, forgotten follow-ups, and opportunities scattered across phone, email, texts, and notes.",
      "The Tradie Front Desk System is designed to help bring those opportunities into one process.",
      "Capture the enquiry. Respond quickly. Ask the right questions. Move the customer to the next step. Follow up when needed.",
      "Before spending more on leads, check where your current enquiries are leaking.",
    ],
    scenes: ["Missed call", "Inbox delay", "Cold quote", "Leak map", "Organised pipeline", "CTA"],
  },
  {
    slug: "home-front-desk-reframe",
    title: "You May Not Need More Leads First",
    duration: 90,
    target: "75-90 seconds",
    cta: "Find The Leaks Before Spending More",
    motifs: ["lead volume gauge", "leaking bucket", "front-desk repair layer", "campaigns added later"],
    script: [
      "Most trade business owners think the answer is more leads.",
      "More calls. More forms. More quote requests. More ads.",
      "But more leads can create more chaos if the front desk is not ready.",
      "If calls are missed, forms sit waiting, customers are not followed up, and quotes go cold, new leads may simply leak out of the same broken process.",
      "That is why the reframe matters.",
      "You may not have a lead problem first.",
      "You may have a missed-call, slow-reply, and follow-up problem.",
      "The Tradie Front Desk System fixes what happens after someone contacts you.",
      "Once enquiry capture, response, qualification, booking, and follow-up are working, growth becomes safer.",
      "Then campaigns can be added when the business is ready for more volume.",
      "Not shared leads. Not just ads. Not more software.",
      "A front-desk system first.",
    ],
    scenes: ["More leads assumption", "Leaking process", "Reframe headline", "System repair", "Campaigns later", "CTA"],
  },
  {
    slug: "home-five-step-flow",
    title: "Capture. Respond. Qualify. Book. Follow Up.",
    duration: 110,
    target: "90-120 seconds",
    cta: "See How It Works",
    motifs: ["five animated nodes", "glowing enquiry line", "customer detail cards", "owner notification"],
    script: [
      "The system is built around one simple flow.",
      "Capture. Respond. Qualify. Book. Follow up.",
      "First, capture the enquiry.",
      "That can be a call, missed call, website form, quote request, campaign lead, customer message, or old lead.",
      "Second, respond quickly.",
      "Customers should know their enquiry has been received, even when you are busy.",
      "Third, qualify the job.",
      "Ask for service type, location, urgency, photos, and preferred callback time so you are not chasing unclear enquiries.",
      "Fourth, move the customer to the next step.",
      "That might be a callback, quote request, site visit, or owner review.",
      "Fifth, follow up.",
      "If the customer goes quiet, the system can check in so good opportunities are not forgotten.",
      "Simple does not mean basic.",
      "It means every enquiry has a clear path.",
    ],
    scenes: ["Flow overview", "Capture", "Respond", "Qualify", "Book", "Follow up"],
  },
  {
    slug: "home-system-modules",
    title: "What Your Front Desk System Can Include",
    duration: 85,
    target: "60-90 seconds",
    cta: "View What's Included",
    motifs: ["module grid", "SMS tile", "quote form tile", "pipeline tile", "review tile"],
    script: [
      "The Tradie Front Desk System is made from practical modules.",
      "A Missed Call Saver can send an instant text when you cannot answer.",
      "Instant Enquiry Response can acknowledge website forms and quote requests quickly.",
      "A Quote Request Form can collect job type, location, urgency, photos, and callback preferences.",
      "A Follow-Up Engine can check in when customers go quiet.",
      "A Simple Job Pipeline can show what is new, what needs action, what has been quoted, and what needs follow-up.",
      "Owner Notifications can tell you when a customer replies or an urgent opportunity needs review.",
      "Optional growth layers can add local campaigns, review requests, AI phone support, or old lead reactivation when the business is ready.",
      "The point is not more tools.",
      "The point is a clearer front-desk process.",
    ],
    scenes: ["Module grid opens", "Capture modules", "Response modules", "Pipeline modules", "Growth layers", "CTA"],
  },
  {
    slug: "home-audit-and-packages",
    title: "Book A Free Front Desk Audit",
    duration: 60,
    target: "45-60 seconds",
    cta: "Book My Free Front Desk Audit",
    motifs: ["audit checklist", "leak score", "three package cards", "flagship package glow"],
    script: [
      "Before choosing a package, start with the audit.",
      "The Free Front Desk Audit reviews how your business handles calls, missed calls, quote requests, follow-up, open opportunities, old leads, and reviews.",
      "You will see what is working, where enquiries may be leaking, and what should be fixed first.",
      "From there, the right starting point becomes clearer.",
      "Front Desk Starter is for basic capture and missed-call recovery.",
      "Booked Jobs System is the flagship option for better qualification, booking support, quote follow-up, and pipeline visibility.",
      "Managed Growth System adds campaigns, reactivation, reviews, and stronger growth support when the business is ready.",
      "Book your Free Front Desk Audit and find the right fit.",
    ],
    scenes: ["Audit invitation", "Checklist", "Leak score", "Package cards", "Flagship highlight", "CTA"],
  },
];

mkdirSync(outRoot, { recursive: true });

for (const video of videos) {
  const dir = join(outRoot, video.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "script.md"), buildScript(video));
  const transcript = estimateTranscript(video.script);
  writeFileSync(join(dir, "transcript.numbered.json"), JSON.stringify(transcript, null, 2));
  writeFileSync(join(dir, "transcript.srt"), toSrt(transcript));
  writeFileSync(join(dir, "index.html"), buildHtml(video, transcript));
}

console.log(`Created ${videos.length} homepage HyperFrames projects in ${outRoot}`);

function buildScript(video) {
  return `# ${video.title}

Target duration: ${video.target}

CTA: ${video.cta}

## Voiceover Script

${video.script.join("\n\n")}

## Scene Plan

${video.scenes.map((scene, index) => `${index + 1}. ${scene}`).join("\n")}

## Visual Motifs

${video.motifs.map((motif) => `- ${motif}`).join("\n")}

## Claims Safety

Use designed to help, can help, results depend on, and audit-first language. Do not guarantee jobs, leads, revenue, profit, rankings, bookings, or reviews.
`;
}

function estimateTranscript(lines) {
  let cursor = 0;
  return lines.map((line, index) => {
    const duration = Math.max(2.2, line.split(/\s+/).length / 2.55);
    const segment = {
      number: index + 1,
      start: round(cursor),
      end: round(cursor + duration),
      text: line,
    };
    cursor += duration + 0.25;
    return segment;
  });
}

function buildHtml(video, transcript) {
  const duration = Math.max(video.duration, Math.ceil(transcript.at(-1)?.end ?? video.duration));
  const sceneDuration = duration / video.scenes.length;
  const sceneMarkup = video.scenes.map((scene, index) => `
      <section class="scene scene-${index + 1}">
        <div class="scene-copy">
          <p class="kicker">${String(index + 1).padStart(2, "0")} / ${video.scenes.length}</p>
          <h2>${escapeHtml(scene)}</h2>
          <p>${escapeHtml(selectLine(video.script, index))}</p>
        </div>
        ${visualFor(index, video)}
      </section>`).join("\n");

  const timelineEntries = video.scenes.map((_, index) => {
    const t = (index * sceneDuration).toFixed(2);
    return `
      tl.from(".scene-${index + 1} .scene-copy", { y: 60, opacity: 0, duration: 0.75, ease: "expo.out" }, ${t});
      tl.from(".scene-${index + 1} .visual-card", { scale: 0.88, opacity: 0, rotation: ${index % 2 === 0 ? -2 : 2}, duration: 0.8, ease: "back.out(1.4)" }, ${Number(t) + 0.18});
      tl.from(".scene-${index + 1} .glow-node", { scale: 0, opacity: 0, stagger: 0.08, duration: 0.5, ease: "power3.out" }, ${Number(t) + 0.35});`;
  }).join("\n");

  const captions = transcript.map((segment, index) => `<p class="caption caption-${index + 1}">${escapeHtml(segment.text)}</p>`).join("\n");
  const captionTimeline = transcript.map((segment, index) => `
      tl.set(".caption-${index + 1}", { opacity: 1 }, ${segment.start});
      tl.set(".caption-${index + 1}", { opacity: 0 }, ${segment.end});`).join("\n");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(video.title)}</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
  </head>
  <body>
    <div id="${video.slug}" data-composition-id="${video.slug}" data-start="0" data-width="1920" data-height="1080" data-duration="${duration}">
      <div class="bg-grid"></div>
      <div class="brand"><span class="brand-mark"></span>TRADIE FRONT DESK</div>
      ${sceneMarkup}
      <div class="caption-wrap">${captions}</div>
      <div class="cta">${escapeHtml(video.cta)}</div>
      <style>
        /* Blueprint & Safety Orange tokens — mirrors site-v3/src/styles/tokens.css */
        :root {
          --canvas-dark: oklch(0.245 0.045 245);      /* #0E2233 */
          --surface-dark: oklch(0.31 0.05 245);       /* #16334A */
          --surface-dark-2: oklch(0.275 0.048 245);
          --action: oklch(0.68 0.21 38);              /* #FF5A1F safety orange */
          --action-hover: oklch(0.63 0.21 38);
          --on-action: oklch(0.18 0.05 38);
          --marker: oklch(0.87 0.15 88);              /* #FFC933 hi-vis, sparse only */
          --on-dark: oklch(0.965 0.006 245);           /* #F6F4EF-ish off-white */
          --on-dark-body: oklch(0.88 0.012 245);
          --on-dark-muted: oklch(0.72 0.02 245);
          --line-dark: oklch(0.38 0.045 245);
          --font-display: "Archivo Variable", "Arial Black", sans-serif;
          --font-body: "Inter Variable", system-ui, sans-serif;
          --font-mono: "JetBrains Mono Variable", ui-monospace, monospace;
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--canvas-dark); font-family: var(--font-body); }
        #${video.slug} {
          position: relative;
          overflow: hidden;
          width: 1920px;
          height: 1080px;
          background: var(--canvas-dark);
          color: var(--on-dark);
        }
        .bg-grid {
          /* fine blueprint grid, 72px pitch, low-alpha per DESIGN.md */
          position: absolute;
          inset: 0;
          background:
            linear-gradient(color-mix(in oklch, var(--line-dark) 45%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklch, var(--line-dark) 45%, transparent) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at 50% 35%, black, transparent 72%);
        }
        .brand {
          position: absolute;
          top: 54px;
          left: 72px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--on-dark);
          font-family: var(--font-display);
          font-variation-settings: "wdth" 125;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .brand-mark {
          width: 20px;
          height: 20px;
          border: 2px solid var(--action);
          border-radius: 50%;
          position: relative;
        }
        .brand-mark::before,
        .brand-mark::after {
          content: "";
          position: absolute;
          background: var(--action);
        }
        .brand-mark::before { left: 50%; top: -6px; bottom: -6px; width: 2px; transform: translateX(-50%); }
        .brand-mark::after { top: 50%; left: -6px; right: -6px; height: 2px; transform: translateY(-50%); }
        .scene {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 70px;
          align-items: center;
          padding: 135px 95px 150px;
        }
        .scene-copy {
          display: flex;
          flex-direction: column;
          gap: 26px;
          max-width: 780px;
        }
        .kicker {
          margin: 0;
          color: var(--marker);
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.08em;
        }
        h2 {
          margin: 0;
          color: var(--on-dark);
          font-family: var(--font-display);
          font-variation-settings: "wdth" 125;
          font-size: 86px;
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.01em;
        }
        p {
          margin: 0;
          color: var(--on-dark-body);
          font-family: var(--font-body);
          font-size: 32px;
          line-height: 1.32;
        }
        .visual-card {
          position: relative;
          min-height: 600px;
          border: 1px solid var(--line-dark);
          border-radius: 14px;
          background: var(--surface-dark);
          padding: 52px;
        }
        .line {
          /* dashed call-path connector, draws left to right */
          position: absolute;
          height: 3px;
          background-image: repeating-linear-gradient(90deg, var(--action) 0 14px, transparent 14px 24px);
        }
        .glow-node {
          /* stamped badge for a flow step */
          position: absolute;
          display: grid;
          place-items: center;
          width: 126px;
          height: 126px;
          border-radius: 14px;
          background: var(--surface-dark-2);
          border: 1.5px solid var(--action);
          color: var(--on-dark);
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-align: center;
        }
        .caption-wrap {
          position: absolute;
          right: 90px;
          bottom: 55px;
          left: 90px;
          z-index: 20;
          min-height: 118px;
          border: 1px solid var(--line-dark);
          border-radius: 8px;
          background: color-mix(in oklch, var(--canvas-dark) 85%, black);
          padding: 18px 24px;
        }
        .caption {
          position: absolute;
          inset: 18px 24px;
          opacity: 0;
          color: var(--on-dark);
          font-family: var(--font-body);
          font-size: 25px;
          line-height: 1.22;
        }
        .cta {
          position: absolute;
          right: 72px;
          top: 54px;
          z-index: 10;
          border-radius: 4px;
          background: var(--action);
          color: var(--on-action);
          font-family: var(--font-body);
          padding: 18px 26px;
          font-size: 20px;
          font-weight: 600;
        }
      </style>
      <script>
        window.__timelines = window.__timelines || {};
        const tl = gsap.timeline({ paused: true });
        tl.set(".scene", { opacity: 0 });
        ${video.scenes.map((_, index) => `tl.set(".scene-${index + 1}", { opacity: 1 }, ${(index * sceneDuration).toFixed(2)});`).join("\n        ")}
        ${video.scenes.slice(0, -1).map((_, index) => `tl.set(".scene-${index + 1}", { opacity: 0 }, ${((index + 1) * sceneDuration).toFixed(2)});`).join("\n        ")}
        ${timelineEntries}
        tl.to(".bg-grid", { x: -90, y: -40, duration: ${duration}, ease: "none" }, 0);
        tl.to(".line", { x: 420, duration: 3.2, repeat: ${Math.ceil(duration / 3.2) - 1}, ease: "sine.inOut", yoyo: true }, 0.2);
        ${captionTimeline}
        tl.to(".scene-${video.scenes.length}", { opacity: 0, duration: 0.6, ease: "power2.in" }, ${Math.max(0, duration - 0.8)});
        window.__timelines["${video.slug}"] = tl;
      </script>
    </div>
  </body>
</html>
`;
}

function visualFor(index, video) {
  const labels = ["Capture", "Respond", "Qualify", "Book", "Follow Up"];
  const nodes = labels.map((label, nodeIndex) => {
    const x = 72 + (nodeIndex % 3) * 210;
    const y = 90 + Math.floor(nodeIndex / 3) * 230;
    return `<div class="glow-node" style="left:${x}px;top:${y}px">${escapeHtml(label)}</div>`;
  }).join("");
  const title = escapeHtml(video.motifs[index % video.motifs.length]);
  return `<div class="visual-card">
          <div class="line" style="left:80px;top:310px;width:520px"></div>
          <div class="line" style="left:160px;top:430px;width:420px"></div>
          ${nodes}
          <p style="position:absolute;left:52px;right:52px;bottom:48px;color:var(--on-dark);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:0.04em;font-weight:500;font-size:26px">${title}</p>
        </div>`;
}

function selectLine(lines, index) {
  return lines[Math.min(lines.length - 1, Math.floor((index / Math.max(1, videos.length)) * lines.length))] || lines[index % lines.length];
}

function toSrt(segments) {
  return segments.map((segment) => [
    segment.number,
    `${formatTime(segment.start)} --> ${formatTime(segment.end)}`,
    segment.text,
    "",
  ].join("\n")).join("\n");
}

function formatTime(seconds) {
  const total = Math.max(0, seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = Math.floor(total % 60);
  const ms = Math.floor((total - Math.floor(total)) * 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
}

function round(value) {
  return Math.round(value * 100) / 100;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
