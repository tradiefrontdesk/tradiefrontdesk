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
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        maxWidth: 980,
        margin: 0,
        color: "#ffffff",
        fontSize: "clamp(40px, 5.4vw, 74px)",
        fontWeight: 850,
        lineHeight: 1.08,
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
          backgroundImage: "linear-gradient(to right, #faff69 1px, transparent 1px), linear-gradient(to bottom, #faff69 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(90deg, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
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
                      initial={{ opacity: 0, filter: "blur(10px)", y: "0.08em" }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: "0em" }}
                      transition={{ delay: delay + 0.24, duration: 0.54, ease: sliceEase }}
                      style={{ display: "inline-block", color: "#ffffff" }}
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
                        color: "#faff69",
                        clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                        textShadow: "0 0 26px rgba(250,255,105,.45)",
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
                        color: "#cccccc",
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
                        color: "#faff69",
                        clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                        textShadow: "0 0 26px rgba(250,255,105,.45)",
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
