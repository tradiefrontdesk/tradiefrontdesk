import { interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";

const messages = [
  { side: "left", label: "Customer", text: "Can you quote a hot water replacement?" },
  { side: "right", label: "Front desk", text: "Got it. What suburb and urgency?" },
  { side: "left", label: "Customer", text: "Chermside. This week if possible." },
  { side: "right", label: "Owner alert", text: "Qualified enquiry ready for booking." },
];

export const MessageBubbles = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {messages.map((message, index) => {
        const appear = interpolate(frame - index * 18, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const right = message.side === "right";
        return (
          <div key={`${message.label}-${index}`} style={{ display: "flex", justifyContent: right ? "flex-end" : "flex-start", opacity: appear, transform: `translateY(${interpolate(appear, [0, 1], [22, 0])}px)` }}>
            <div style={{ width: 445, border: `1px solid ${right ? "rgba(250,255,105,.45)" : "rgba(255,255,255,.13)"}`, borderRadius: 20, background: right ? "rgba(250,255,105,.13)" : colors.surfaceCard, padding: 19, boxShadow: right ? "0 0 32px rgba(250,255,105,.12)" : "0 16px 54px rgba(0,0,0,.28)" }}>
              <div style={{ color: right ? colors.primary : colors.muted, fontSize: 17, fontWeight: 850, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.2 }}>{message.label}</div>
              <div style={{ color: colors.text, fontSize: 25, lineHeight: 1.2, fontWeight: 750 }}>{message.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
