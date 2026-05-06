import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "./theme";

const steps = ["Capture", "Respond", "Qualify", "Book", "Follow Up"];

export const FlowNodes = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = interpolate(frame, [20, 150], [0, steps.length - 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "relative", width: "100%", height: 260 }}>
      <svg viewBox="0 0 1300 260" style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <path d="M110 130 H1190" stroke="rgba(255,255,255,.14)" strokeWidth="10" strokeLinecap="round" />
        <path d="M110 130 H1190" stroke={colors.primary} strokeWidth="10" strokeLinecap="round" strokeDasharray="1080" strokeDashoffset={1080 - interpolate(progress, [0, steps.length - 1], [0, 1080])} filter="drop-shadow(0 0 14px rgba(204,120,92,.7))" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, alignItems: "center", gap: 18 }}>
        {steps.map((step, index) => {
          const active = progress >= index - 0.25;
          const scale = spring({ frame: frame - 18 - index * 18, fps, config: { damping: 12, stiffness: 120 } });
          return (
            <div key={step} style={{ display: "grid", placeItems: "center", gap: 18, transform: `scale(${interpolate(scale, [0, 1], [.78, 1])})`, opacity: interpolate(scale, [0, 1], [0, 1]) }}>
              <div style={{ width: 98, height: 98, borderRadius: 99, display: "grid", placeItems: "center", border: `4px solid ${active ? colors.primary : colors.hairline}`, background: active ? "rgba(204,120,92,.16)" : colors.surfaceCard, boxShadow: active ? "0 0 34px rgba(204,120,92,.38)" : "none", color: active ? colors.primary : colors.body, fontSize: 30, fontWeight: 900 }}>{index + 1}</div>
              <div style={{ color: colors.text, fontSize: 32, fontWeight: 850, textAlign: "center" }}>{step}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
