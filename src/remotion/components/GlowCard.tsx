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
      border: tone === "yellow" ? "4px solid #050505" : `4px solid ${colors.primary}`,
      borderRadius: 0,
      background: tone === "yellow" ? colors.primary : "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.01) 40%), rgba(18,18,18,.96)",
      color: tone === "yellow" ? colors.canvas : colors.text,
      boxShadow: tone === "yellow" ? `8px 8px 0 ${colors.pink}` : `8px 8px 0 ${colors.pink}, 0 24px 80px rgba(0,0,0,.34)`,
      ...style,
    }}
  >
    {children}
  </div>
);
