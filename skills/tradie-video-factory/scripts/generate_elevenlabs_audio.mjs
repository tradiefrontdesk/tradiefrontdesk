#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const projectDir = process.argv[2];
if (!projectDir) {
  console.error("Usage: node skills/tradie-video-factory/scripts/generate_elevenlabs_audio.mjs <project-dir>");
  process.exit(1);
}

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("ELEVENLABS_API_KEY is not set. Export it in your shell; do not commit it to files.");
  process.exit(2);
}

const voiceId = process.env.ELEVENLABS_VOICE_ID || "auq43ws1oslv0tO4BDa7";
const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const scriptPath = join(projectDir, "script.md");
const script = readFileSync(scriptPath, "utf8");
const voiceover = extractVoiceover(script);

if (!voiceover) {
  console.error(`No voiceover script found in ${scriptPath}`);
  process.exit(3);
}

const endpoint = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps?output_format=mp3_44100_128`;
const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "xi-api-key": apiKey,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: voiceover,
    model_id: modelId,
    voice_settings: {
      stability: 0.45,
      similarity_boost: 0.78,
      style: 0.22,
      use_speaker_boost: true,
    },
  }),
});

if (!response.ok) {
  console.error(`ElevenLabs request failed: ${response.status} ${await response.text()}`);
  process.exit(4);
}

const result = await response.json();
mkdirSync(projectDir, { recursive: true });
writeFileSync(join(projectDir, "narration.mp3"), Buffer.from(result.audio_base64, "base64"));

const transcript = alignmentToSegments(voiceover, result.alignment);
writeFileSync(join(projectDir, "transcript.numbered.json"), JSON.stringify(transcript, null, 2));
writeFileSync(join(projectDir, "transcript.srt"), toSrt(transcript));

console.log(`Generated narration and transcript for ${basename(projectDir)}`);

function extractVoiceover(markdown) {
  const match = markdown.match(/## Voiceover Script\s+([\s\S]*?)(?=\n## |\n# |$)/);
  return match?.[1]
    .replace(/^\s*>\s?/gm, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function alignmentToSegments(text, alignment) {
  const starts = alignment?.character_start_times_seconds ?? [];
  const ends = alignment?.character_end_times_seconds ?? [];
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text];
  let cursor = 0;
  return sentences.map((sentence, index) => {
    const raw = sentence.trim();
    const startIndex = Math.max(0, text.indexOf(raw, cursor));
    const endIndex = Math.max(startIndex, startIndex + raw.length - 1);
    cursor = endIndex + 1;
    const start = starts[startIndex] ?? index * 4;
    const end = ends[Math.min(endIndex, ends.length - 1)] ?? start + Math.max(2, raw.length / 16);
    return { number: index + 1, start, end, text: raw };
  });
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
