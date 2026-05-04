import { interpolate, useCurrentFrame } from "remotion";
import { SquareCard } from "../components/SquarePrimitives";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const modules = ["Missed-call saver", "Instant response", "Quote form", "Follow-up engine", "Pipeline", "Review request"];

export const HomeModulesVideo = () => {
  const frame = useCurrentFrame();
  return (
    <VideoShell label="Modules section" cta="Build only what fits">
      <div style={{ display: "grid", gap: 28 }}>
        <div style={{ color: colors.text, fontSize: 57, lineHeight: 1.03, fontWeight: 950 }}>Modules connect into one front desk system.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {modules.map((module, index) => {
            const opacity = interpolate(frame - index * 18, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <SquareCard key={module} style={{ minHeight: 132, padding: 18, opacity, transform: `translateY(${interpolate(opacity, [0, 1], [24, 0])}px)` }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: index % 2 ? "rgba(250,255,105,.18)" : colors.primary, marginBottom: 22 }} />
                <div style={{ color: colors.text, fontSize: 25, lineHeight: 1.12, fontWeight: 930 }}>{module}</div>
              </SquareCard>
            );
          })}
        </div>
      </div>
    </VideoShell>
  );
};
