import { interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";

const columns = [
  { title: "New", cards: ["Missed call", "Website quote", "SMS enquiry"] },
  { title: "Qualified", cards: ["Urgent repair", "Good suburb"] },
  { title: "Booked", cards: ["Quote visit", "Follow-up set"] },
];

export const PipelineBoard = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, height: "100%" }}>
      {columns.map((column, columnIndex) => (
        <div key={column.title} style={{ border: "1px solid rgba(255,255,255,.11)", borderRadius: 20, background: "rgba(18,18,18,.86)", padding: 22 }}>
          <div style={{ color: colors.primary, fontSize: 24, fontWeight: 900, marginBottom: 20 }}>{column.title}</div>
          <div style={{ display: "grid", gap: 16 }}>
            {column.cards.map((card, cardIndex) => {
              const local = frame - columnIndex * 20 - cardIndex * 10;
              const opacity = interpolate(local, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              return (
                <div key={card} style={{ minHeight: 88, border: "1px solid rgba(250,255,105,.24)", borderRadius: 16, background: colors.surfaceCard, padding: 18, opacity, transform: `translateY(${interpolate(opacity, [0, 1], [18, 0])}px)` }}>
                  <div style={{ color: colors.text, fontSize: 26, fontWeight: 800 }}>{card}</div>
                  <div style={{ color: colors.body, fontSize: 19, marginTop: 8 }}>Owner can see the next action.</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
