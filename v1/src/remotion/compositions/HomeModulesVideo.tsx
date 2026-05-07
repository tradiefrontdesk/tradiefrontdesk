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
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    display: "grid",
                    placeItems: "center",
                    background: colors.primary,
                    boxShadow: "0 0 26px rgba(204,120,92,.22)",
                    marginBottom: 22,
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: 19, height: 19 }}>
                    <path d="M5 12.4l4.2 4.2L19 6.8" fill="none" stroke={colors.canvas} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ color: colors.text, fontSize: 25, lineHeight: 1.12, fontWeight: 930 }}>{module}</div>
              </SquareCard>
            );
          })}
        </div>
      </div>
    </VideoShell>
  );
};
