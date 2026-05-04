import type { ReactNode } from "react";
import { colors } from "./theme";

type Props = {
  children: ReactNode;
  style?: React.CSSProperties;
  tone?: "dark" | "yellow";
};

export const GlowCard = ({ children, style, tone = "dark" }: Props) => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      border: tone === "yellow" ? "1px solid transparent" : "1px solid rgba(250,255,105,.32)",
      borderRadius: 22,
      background: tone === "yellow" ? colors.primary : "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.01) 40%), rgba(26,26,26,.94)",
      color: tone === "yellow" ? colors.canvas : colors.text,
      boxShadow: tone === "yellow" ? "0 0 54px rgba(250,255,105,.26)" : "0 24px 80px rgba(0,0,0,.34), 0 0 36px rgba(250,255,105,.10)",
      ...style,
    }}
  >
    {children}
  </div>
);
