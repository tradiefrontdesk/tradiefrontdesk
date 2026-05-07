import { interpolate, useCurrentFrame } from "remotion";
import { BeatText, Dot, GrowingLine, SquareCard } from "../components/SquarePrimitives";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const beats = [
  "A good enquiry comes in while you are on the tools.",
  "Before: missed calls, loose forms, cold quotes.",
  "After: fast reply, job details, owner handoff.",
  "The customer gets a clear next step before they move on.",
  "Capture. Respond. Qualify. Book. Follow up.",
];

export const HomeHeroVideo = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 9), [-1, 1], [0.65, 1]);
  const step = Math.min(4, Math.floor(frame / 110));

  return (
    <VideoShell label="Front desk system" cta="Graphic system animation">
      <div style={{ display: "grid", gap: 26, height: "100%", alignContent: "space-between" }}>
        <BeatText beats={beats} />

        <SquareCard style={{ padding: 28, minHeight: 360 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, alignItems: "center" }}>
            {["Capture", "Respond", "Qualify", "Book", "Follow"].map((label, index) => (
              <div key={label} style={{ display: "grid", justifyItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 78,
                    height: 78,
                    borderRadius: 99,
                    display: "grid",
                    placeItems: "center",
                    border: `3px solid ${index <= step ? colors.primary : colors.hairline}`,
                    background: index <= step ? colors.primary : colors.surfaceSoft,
                    color: index <= step ? colors.canvas : colors.body,
                    fontSize: 25,
                    fontWeight: 950,
                    transform: `scale(${index === step ? pulse : 1})`,
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ color: colors.text, fontSize: 18, fontWeight: 900 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ margin: "30px 34px 0" }}>
            <GrowingLine delay={24} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 28 }}>
            {["Missed call caught", "Quote request replied", "Follow-up scheduled", "Owner handoff clear"].map((text, index) => {
              const opacity = interpolate(frame - index * 34, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              return (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, opacity, border: `3px solid ${colors.primary}`, borderRadius: 0, padding: 14, background: colors.surfaceSoft }}>
                  <Dot size={14} />
                  <span style={{ color: colors.text, fontSize: 19, fontWeight: 900 }}>{text}</span>
                </div>
              );
            })}
          </div>
        </SquareCard>

        <div style={{ color: colors.primary, fontSize: 22, fontWeight: 900, textShadow: "2px 2px 0 #050505" }}>Stop losing jobs from missed calls and slow follow-up.</div>
      </div>
    </VideoShell>
  );
};
