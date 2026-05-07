import type { ReactNode } from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";

export const BeatText = ({ beats }: { beats: string[] }) => {
  const frame = useCurrentFrame();
  const index = Math.min(beats.length - 1, Math.floor(frame / 180));
  const local = frame - index * 180;
  const opacity = interpolate(local, [0, 18, 156, 180], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, color: colors.text, fontSize: 54, lineHeight: 1.03, fontWeight: 950, letterSpacing: 0 }}>
      {beats[index]}
    </div>
  );
};

export const SquareCard = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      border: `4px solid ${colors.primary}`,
      borderRadius: 0,
      background: "linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.01)), rgba(18,18,18,.96)",
      boxShadow: `10px 10px 0 ${colors.pink}, 0 22px 70px rgba(0,0,0,.34)`,
      ...style,
    }}
  >
    {children}
  </div>
);

export const GrowingLine = ({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div
      style={{
        width: vertical ? 5 : `${progress * 100}%`,
        height: vertical ? `${progress * 100}%` : 5,
        borderRadius: 99,
        background: colors.primary,
        boxShadow: "0 0 26px rgba(204,120,92,.75)",
      }}
    />
  );
};

export const Dot = ({ active = true, size = 18 }: { active?: boolean; size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 99,
      background: active ? colors.primary : colors.elevated,
      boxShadow: active ? "0 0 22px rgba(255,217,0,.72)" : "none",
      border: `3px solid ${active ? "#050505" : "rgba(255,255,255,.22)"}`,
    }}
  />
);
