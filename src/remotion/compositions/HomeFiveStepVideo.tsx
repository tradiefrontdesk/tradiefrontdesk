import { useCurrentFrame } from "remotion";
import { Dot, GrowingLine, SquareCard } from "../components/SquarePrimitives";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const steps = ["Capture", "Respond", "Qualify", "Book", "Follow Up"];

export const HomeFiveStepVideo = () => {
  const frame = useCurrentFrame();
  const active = Math.min(4, Math.floor(frame / 58));

  return (
    <VideoShell label="Five-step flow" cta="Every enquiry gets a path">
      <div style={{ display: "grid", gap: 30 }}>
        <div style={{ color: colors.text, fontSize: 56, lineHeight: 1.04, fontWeight: 950 }}>Capture → Respond → Qualify → Book → Follow Up</div>
        <SquareCard style={{ padding: 28 }}>
          <div style={{ display: "grid", gap: 15 }}>
            {steps.map((step, index) => {
              const isActive = index <= active;
              return (
                <div key={step} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 18, alignItems: "center" }}>
                  <div style={{ display: "grid", justifyItems: "center", gap: 8 }}>
                    <Dot active={isActive} size={34} />
                    {index < steps.length - 1 ? <div style={{ height: 28, width: 4, background: isActive ? colors.primary : colors.hairline }} /> : null}
                  </div>
                  <div style={{ borderRadius: 16, padding: 17, background: isActive ? "rgba(250,255,105,.12)" : colors.surfaceSoft, border: `1px solid ${isActive ? "rgba(250,255,105,.38)" : "rgba(255,255,255,.1)"}` }}>
                    <div style={{ color: isActive ? colors.primary : colors.text, fontSize: 32, fontWeight: 950 }}>{step}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </SquareCard>
        <GrowingLine delay={60} />
      </div>
    </VideoShell>
  );
};
