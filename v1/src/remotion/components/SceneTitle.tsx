import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "./theme";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  width?: number;
};

export const SceneTitle = ({ eyebrow, title, subtitle, width = 860 }: Props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const y = interpolate(spring({ frame, fps, config: { damping: 18, stiffness: 90 } }), [0, 1], [28, 0]);
  const opacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ width, transform: `translateY(${y}px)`, opacity }}>
      {eyebrow ? (
        <div style={{ display: "flex", alignItems: "center", gap: 13, color: colors.primary, fontSize: 24, fontWeight: 850, letterSpacing: 2.3, textTransform: "uppercase", marginBottom: 28 }}>
          <span style={{ width: 13, height: 13, borderRadius: 99, background: colors.primary }} />
          {eyebrow}
        </div>
      ) : null}
      <div style={{ color: colors.text, fontSize: 82, fontWeight: 900, lineHeight: 1.02, letterSpacing: 0 }}>{title}</div>
      {subtitle ? <div style={{ color: colors.body, fontSize: 32, lineHeight: 1.35, marginTop: 28, maxWidth: width - 80 }}>{subtitle}</div> : null}
    </div>
  );
};
