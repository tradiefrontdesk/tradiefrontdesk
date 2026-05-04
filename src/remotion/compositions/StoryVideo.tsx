import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Dot, GrowingLine, SquareCard } from "../components/SquarePrimitives";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";
import { storyVideoById, type StoryVideoId } from "../data/homeVideos";

type Props = {
  id: StoryVideoId;
};

export const StoryVideo = ({ id }: Props) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { story } = storyVideoById[id];
  const beatLength = durationInFrames / story.beats.length;
  const beatIndex = Math.min(story.beats.length - 1, Math.floor(frame / beatLength));
  const local = frame - beatIndex * beatLength;
  const beatOpacity = interpolate(local, [0, 18, beatLength - 22, beatLength], [0.58, 1, 1, 0.58], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const activeNode = Math.min(story.nodes.length - 1, Math.floor(progress * story.nodes.length));

  return (
    <VideoShell label={story.label} cta={story.cta}>
      <div style={{ display: "grid", gap: 22, height: "100%", alignContent: "space-between" }}>
        <div style={{ minHeight: 148, opacity: beatOpacity, color: colors.text, fontSize: 49, lineHeight: 1.04, fontWeight: 950, letterSpacing: 0 }}>
          {story.beats[beatIndex]}
        </div>

        <SquareCard style={{ padding: 24 }}>
          <svg viewBox="0 0 840 260" style={{ width: "100%", height: 210, display: "block", overflow: "visible" }}>
            <path d="M70 132 C190 40 300 214 420 132 S650 52 770 132" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="9" strokeLinecap="round" />
            <path
              d="M70 132 C190 40 300 214 420 132 S650 52 770 132"
              fill="none"
              stroke={colors.primary}
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray="920"
              strokeDashoffset={920 - progress * 920}
              style={{ filter: "drop-shadow(0 0 16px rgba(250,255,105,.62))" }}
            />
            {story.nodes.map((node, index) => {
              const x = 70 + index * 175;
              const y = index % 2 ? 84 : 132;
              const active = index <= activeNode;
              return (
                <g key={node}>
                  <circle cx={x} cy={y} r={active ? 28 : 24} fill={active ? colors.primary : colors.surfaceCard} stroke={active ? colors.primary : "rgba(255,255,255,.18)"} strokeWidth="4" />
                  <text x={x} y={y + 7} fill={active ? colors.canvas : colors.body} textAnchor="middle" fontSize="22" fontWeight="950">
                    {index + 1}
                  </text>
                  <text x={x} y={y + 62} fill={active ? colors.primary : colors.body} textAnchor="middle" fontSize="20" fontWeight="850">
                    {node}
                  </text>
                </g>
              );
            })}
          </svg>
          <GrowingLine delay={20} />
        </SquareCard>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 13 }}>
          {story.cards.map((card, index) => {
            const cardOpacity = interpolate(frame - index * 26, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <SquareCard key={card} style={{ padding: 15, opacity: cardOpacity, minHeight: 80 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Dot size={13} />
                  <div style={{ color: colors.text, fontSize: 20, lineHeight: 1.12, fontWeight: 900 }}>{card}</div>
                </div>
              </SquareCard>
            );
          })}
        </div>

        <div style={{ color: colors.primary, fontSize: 19, lineHeight: 1.25, fontWeight: 900 }}>{story.footer}</div>
      </div>
    </VideoShell>
  );
};
