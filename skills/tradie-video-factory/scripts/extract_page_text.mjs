#!/usr/bin/env node
import { readFileSync } from "node:fs";

const page = process.argv[2] ?? "src/pages/index.astro";
const source = readFileSync(page, "utf8");

const cleaned = source
  .replace(/^---[\s\S]*?---/, "")
  .replace(/<style[\s\S]*?<\/style>/g, "")
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/[{}]/g, " ")
  .replace(/<[^>]+>/g, "\n")
  .replace(/\s+/g, " ")
  .trim();

console.log(cleaned);
