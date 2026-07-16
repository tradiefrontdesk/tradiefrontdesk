"use client";

import { useCurrentFrame } from "remotion";
import { colors, fontFamily } from "@/remotion/components/theme";

export interface PerspectiveMarqueeProps {
  items?: string[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY = fontFamily;
const ITEM_STYLES = [
  { color: colors.text, shadow: colors.primary },
  { color: colors.warning, shadow: colors.error },
  { color: colors.blue, shadow: colors.primary },
  { color: colors.primary, shadow: colors.blue },
  { color: colors.success, shadow: colors.orange },
];

const DEFAULT_ITEMS = ["Capture", "Respond", "Qualify", "Book", "Follow Up", "Pipeline", "Owner Alerts", "Reviews"];

export function PerspectiveMarquee({
  items = DEFAULT_ITEMS,
  fontSize = 84,
  color = colors.text,
  fontWeight = 800,
  pixelsPerFrame = 2,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = colors.canvas,
  background = colors.canvas,
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const frame = useCurrentFrame() * speed;

  const itemPadding = fontSize * 0.9;
  const approxItemWidth = items.reduce((acc, item) => acc + item.length * fontSize * 0.6 + itemPadding, 0);
  const offset = -((frame * pixelsPerFrame) % approxItemWidth);
  const rendered = [...items, ...items, ...items];

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            transform: `translateX(${offset}px)`,
          }}
        >
          {rendered.map((item, i) => {
            const itemCenter = i * (approxItemWidth / items.length) + approxItemWidth / items.length / 2 + offset;
            const norm = (itemCenter - 640) / 640;
            const distance = Math.min(1, Math.abs(norm));
            const blurPx = distance * 3.2;
            const opacity = 1 - distance * 0.28;
            const itemStyle = ITEM_STYLES[i % ITEM_STYLES.length] ?? { color, shadow: colors.error };

            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontFamily: FONT_FAMILY,
                  fontSize,
                  fontWeight,
                  color: itemStyle.color,
                  letterSpacing: 0,
                  lineHeight: 0.9,
                  paddingRight: itemPadding,
                  filter: `blur(${blurPx}px)`,
                  opacity,
                  textTransform: "uppercase",
                  textShadow: `3px 3px 0 ${colors.canvas}, -1px -1px 0 ${colors.canvas}, 1px -1px 0 ${colors.canvas}, -1px 1px 0 ${colors.canvas}, 7px 7px 0 ${itemStyle.shadow}`,
                  WebkitTextStroke: `1px ${colors.canvas}`,
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 18%, transparent 82%, ${fadeColor} 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${fadeColor} 0%, transparent 25%, transparent 75%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}
