import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "./theme";

type Props = {
  label: string;
  cta?: string;
  children: ReactNode;
};

export const VideoShell = ({ label, cta = "Managed front desk system", children }: Props) => {
  const frame = useCurrentFrame();
  const sweep = interpolate(frame % 150, [0, 150], [-35, 135]);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background: colors.canvas,
        color: colors.text,
        fontFamily,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(circle at 14px 14px, rgba(255,217,0,.34) 3px, transparent 3.5px), linear-gradient(rgba(255,255,255,.08) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.08) 2px, transparent 2px)",
          backgroundSize: "34px 34px, 86px 86px, 86px 86px",
          opacity: 0.82,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 15% 12%, rgba(255,47,145,.24), transparent 24%), radial-gradient(circle at 86% 18%, rgba(4,150,255,.24), transparent 22%), linear-gradient(120deg, transparent 0 42%, rgba(255,217,0,.12) 48%, transparent 54% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${sweep}%`,
          width: 280,
          transform: "skewX(-18deg)",
          background: "linear-gradient(90deg, transparent, rgba(255,47,145,.26), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 34,
          border: `10px solid ${colors.primary}`,
          boxShadow: "inset 0 0 0 5px #050505, 12px 12px 0 rgba(255,47,145,.85)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 58,
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: colors.primary,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: 1.6,
          textTransform: "uppercase",
          textShadow: "4px 4px 0 #050505",
        }}
      >
        <span style={{ width: 18, height: 18, border: "3px solid #050505", borderRadius: 99, background: colors.pink, boxShadow: "4px 4px 0 #050505" }} />
        {label}
      </div>
      <div style={{ position: "absolute", inset: "112px 58px 102px" }}>{children}</div>
      <div
        style={{
          position: "absolute",
          right: 58,
          bottom: 48,
          display: "flex",
          alignItems: "center",
          gap: 14,
          border: "5px solid #050505",
          background: colors.primary,
          padding: "13px 16px",
          color: "#050505",
          fontSize: 16,
          fontWeight: 900,
          boxShadow: "6px 6px 0 #050505",
        }}
      >
        <span style={{ color: colors.error }}>System Pros AI</span>
        <span>{cta}</span>
      </div>
    </AbsoluteFill>
  );
};
