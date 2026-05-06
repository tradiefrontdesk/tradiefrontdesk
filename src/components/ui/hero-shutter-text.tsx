"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";

interface HeroTextProps {
  text?: string;
  className?: string;
}

const sliceEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroText({ text = "TRADIE FRONT DESK", className = "" }: HeroTextProps) {
  const [count, setCount] = useState(0);
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  return (
    <h1
      className={cn("hero-shutter-text", className)}
      aria-label={text}
      onClick={() => setCount((current) => current + 1)}
      style={{
        position: "relative",
        display: "block",
        maxWidth: 980,
        margin: 0,
        color: "#141413",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(42px, 5.8vw, 74px)",
        fontWeight: 500,
        lineHeight: 1.04,
        letterSpacing: 0,
        cursor: "default",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-12px -10px",
          pointerEvents: "none",
          opacity: 0.2,
          backgroundImage: "linear-gradient(to right, #cc785c 1px, transparent 1px), linear-gradient(to bottom, #cc785c 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(90deg, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "0 0.24em",
          width: "100%",
        }}
      >
        {words.map((word, wordIndex) => (
          <span key={`base-${word}-${wordIndex}`} style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
            {word}
          </span>
        ))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            gap: "0 0.24em",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          {words.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
              {word.split("").map((char, charIndex) => {
                const index = words.slice(0, wordIndex).join("").length + charIndex + wordIndex;
                const delay = Math.min(index * 0.018, 0.9);

                return (
                  <span
                    key={`${char}-${wordIndex}-${charIndex}`}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      overflow: "hidden",
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: "0.08em" }}
                      animate={{ opacity: 1, y: "0em" }}
                      transition={{ delay: delay + 0.24, duration: 0.54, ease: sliceEase }}
                      style={{ display: "inline-block", color: "transparent" }}
                    >
                      {char}
                    </motion.span>

                    <motion.span
                      initial={{ x: "-115%", opacity: 0 }}
                      animate={{ x: "115%", opacity: [0, 1, 0] }}
                      transition={{ duration: 0.58, delay, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        pointerEvents: "none",
                        color: "#cc785c",
                        clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                        textShadow: "0 0 26px rgba(204,120,92,.45)",
                      }}
                    >
                      {char}
                    </motion.span>

                    <motion.span
                      initial={{ x: "115%", opacity: 0 }}
                      animate={{ x: "-115%", opacity: [0, 1, 0] }}
                      transition={{ duration: 0.58, delay: delay + 0.07, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        pointerEvents: "none",
                        color: "#3d3d3a",
                        clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                      }}
                    >
                      {char}
                    </motion.span>

                    <motion.span
                      initial={{ x: "-115%", opacity: 0 }}
                      animate={{ x: "115%", opacity: [0, 1, 0] }}
                      transition={{ duration: 0.58, delay: delay + 0.14, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        pointerEvents: "none",
                        color: "#cc785c",
                        clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                        textShadow: "0 0 26px rgba(204,120,92,.45)",
                      }}
                    >
                      {char}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
