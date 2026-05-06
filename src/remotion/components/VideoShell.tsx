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
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.55,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 15% 12%, rgba(204,120,92,.18), transparent 24%), radial-gradient(circle at 86% 18%, rgba(59,130,246,.11), transparent 22%), linear-gradient(120deg, transparent 0 42%, rgba(204,120,92,.05) 48%, transparent 54% 100%)",
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
          background: "linear-gradient(90deg, transparent, rgba(204,120,92,.12), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 34,
          border: `1px solid ${colors.hairline}`,
          borderRadius: 24,
          boxShadow: "inset 0 0 0 1px rgba(204,120,92,.05), 0 0 80px rgba(204,120,92,.08)",
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
          letterSpacing: 2.4,
          textTransform: "uppercase",
        }}
      >
        <span style={{ width: 15, height: 15, borderRadius: 99, background: colors.primary, boxShadow: "0 0 22px rgba(204,120,92,.8)" }} />
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
          border: "1px solid rgba(204,120,92,.42)",
          borderRadius: 12,
          background: "rgba(18,18,18,.84)",
          padding: "13px 16px",
          color: colors.body,
          fontSize: 16,
          fontWeight: 700,
          boxShadow: "0 0 34px rgba(204,120,92,.12)",
        }}
      >
        <span style={{ color: colors.primary }}>System Pros AI</span>
        <span>{cta}</span>
      </div>
    </AbsoluteFill>
  );
};
