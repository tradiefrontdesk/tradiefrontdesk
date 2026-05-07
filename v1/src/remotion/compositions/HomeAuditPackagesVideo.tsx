import { interpolate, useCurrentFrame } from "remotion";
import { Dot, SquareCard } from "../components/SquarePrimitives";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const checks = ["Missed calls", "Reply speed", "Quote follow-up", "Pipeline"];

export const HomeAuditPackagesVideo = () => {
  const frame = useCurrentFrame();
  const score = Math.round(interpolate(frame, [20, 160], [12, 74], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <VideoShell label="Audit packages" cta="Recommendation after review">
      <div style={{ display: "grid", gap: 24 }}>
        <div style={{ color: colors.text, fontSize: 55, lineHeight: 1.04, fontWeight: 950 }}>Find the leaks, then choose the right build.</div>
        <SquareCard style={{ padding: 24, display: "grid", gridTemplateColumns: "250px 1fr", gap: 24, alignItems: "center" }}>
          <div style={{ width: 220, height: 220, borderRadius: 999, border: "10px solid rgba(204,120,92,.28)", display: "grid", placeItems: "center", boxShadow: "0 0 45px rgba(204,120,92,.18)" }}>
            <div>
              <div style={{ color: colors.primary, fontSize: 66, fontWeight: 950, lineHeight: 1 }}>{score}</div>
              <div style={{ color: colors.body, fontSize: 19, fontWeight: 850 }}>leak score</div>
            </div>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {checks.map((check, index) => (
              <div key={check} style={{ display: "flex", alignItems: "center", gap: 12, opacity: interpolate(frame - index * 20, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
                <Dot size={17} />
                <span style={{ color: colors.text, fontSize: 25, fontWeight: 900 }}>{check}</span>
              </div>
            ))}
          </div>
        </SquareCard>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {["Starter", "Booked Jobs", "Growth"].map((pkg) => (
            <SquareCard key={pkg} style={{ padding: 17, minHeight: 128, background: pkg === "Booked Jobs" ? colors.primary : undefined, color: pkg === "Booked Jobs" ? colors.canvas : colors.text }}>
              <div style={{ fontSize: 24, lineHeight: 1.05, fontWeight: 950 }}>{pkg}</div>
              <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.25, fontWeight: 750, color: pkg === "Booked Jobs" ? colors.canvas : colors.body }}>Matched to process fit.</div>
            </SquareCard>
          ))}
        </div>
      </div>
    </VideoShell>
  );
};
