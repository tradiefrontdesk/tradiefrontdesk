#!/usr/bin/env node
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const sourceRoot = process.argv[2] || "video-projects/home";
const publicRoot = process.argv[3] || "public/videos/home";

const projects = [
  "home-hero-front-desk-system",
  "home-good-jobs-slipping",
  "home-front-desk-reframe",
  "home-five-step-flow",
  "home-system-modules",
  "home-audit-and-packages",
];

mkdirSync(publicRoot, { recursive: true });

for (const project of projects) {
  const sourceDir = join(sourceRoot, project);
  const publicDir = join(publicRoot, project);
  rmSync(publicDir, { recursive: true, force: true });
  cpSync(sourceDir, publicDir, { recursive: true });

  const htmlPath = join(publicDir, "index.html");
  const html = readFileSync(htmlPath, "utf8");
  const autoplayHtml = html.replace(
    `window.__timelines["${project}"] = tl;`,
    `window.__timelines["${project}"] = tl;\n        if (!window.__HYPERFRAMES_CAPTURE__) tl.play(0);`,
  );
  writeFileSync(htmlPath, autoplayHtml);
  console.log(`Published ${basename(publicDir)}`);
}
