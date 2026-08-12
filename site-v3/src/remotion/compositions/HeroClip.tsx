import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, fontFamily, monoFamily } from "../components/theme";
import { heroClipById, type HeroClipConfig, type HeroClipId } from "../data/heroClips";

type Ease = (t: number) => number;
type MechanismProps = { clip: HeroClipConfig; frame: number; ease: Ease };

/** Every mechanism plays across frames 54-186 — one slice of that window per stage. */
const MECHANISM_START = 54;
const MECHANISM_SPAN = 132;

/**
 * "stages" — five steps light up one at a time. The original mechanism, kept
 * byte-for-byte so every config written before `shape` existed is unaffected.
 */
const StagesMechanism: React.FC<MechanismProps> = ({ clip, frame, ease }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
    {clip.stages.map((stage, i) => {
      // Each stage owns a slice of frames 54-186.
      const span = MECHANISM_SPAN / clip.stages.length;
      const start = MECHANISM_START + i * span;
      const lit = interpolate(frame, [start, start + span * 0.55], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: ease,
      });
      // "current" is a narrow window, so only one stage is orange at once.
      const isCurrent = frame >= start && frame < start + span;
      const isPast = frame >= start + span;

      return (
        <div
          key={stage}
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* connector in */}
            <div
              style={{
                flex: 1,
                height: 2,
                backgroundColor: i === 0 ? "transparent" : `rgba(255,90,31,${0.18 + lit * 0.3})`,
              }}
            />
            <div
              style={{
                width: 54,
                height: 54,
                flexShrink: 0,
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${isCurrent ? colors.primary : isPast ? "rgba(246,244,239,.32)" : "rgba(246,244,239,.14)"}`,
                backgroundColor: isCurrent ? colors.primary : "transparent",
                color: isCurrent ? colors.canvas : isPast ? colors.body : colors.muted,
                fontSize: 22,
                fontWeight: 800,
                scale: interpolate(lit, [0, 1], [0.86, isCurrent ? 1.1 : 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  output: "perceptual-scale",
                }),
              }}
            >
              {i + 1}
            </div>
            <div
              style={{
                flex: 1,
                height: 2,
                backgroundColor:
                  i === clip.stages.length - 1 ? "transparent" : `rgba(255,90,31,${0.18 + lit * 0.3})`,
              }}
            />
          </div>
          <span
            style={{
              fontFamily: monoFamily,
              fontSize: 20,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              textAlign: "center",
              color: isCurrent ? colors.text : isPast ? colors.body : colors.muted,
              opacity: interpolate(lit, [0, 1], [0.35, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            }}
          >
            {stage}
          </span>
        </div>
      );
    })}
  </div>
);

// Of the five entries, three peel off as drips and one — the last — survives
// to become the single accent. The fourth entry passes through quietly: not
// every loss needs its own animation, and three falling drips already reads
// as "most of them leak away" without turning into visual noise.
const LEAK_SURVIVOR_INDEX = 4;
const LEAK_DRIP_INDICES = [0, 1, 2];

/**
 * "leak" — a horizontal channel. Enquiries drip away at three points; the one
 * that reaches the end is the sole accent, for the rest of the clip.
 */
const LeakMechanism: React.FC<MechanismProps> = ({ clip, frame, ease }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
    {clip.stages.map((label, i) => {
      const span = MECHANISM_SPAN / clip.stages.length;
      const start = MECHANISM_START + i * span;
      const lit = interpolate(frame, [start, start + span * 0.55], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: ease,
      });
      const isSurvivor = i === LEAK_SURVIVOR_INDEX;
      const isDrip = LEAK_DRIP_INDICES.includes(i);
      const reached = frame >= start;
      // Linear, not `ease` — the shared bezier is front-loaded (fast start,
      // slow finish), which made the fall-and-fade happen almost instantly
      // and vanish before any sampled frame could catch it.
      const dripProgress = interpolate(frame, [start, start + span * 0.85], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

      return (
        <div
          key={label}
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div style={{ flex: 1, height: 2, backgroundColor: i === 0 ? "transparent" : "rgba(159,176,190,.22)" }} />
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 99,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${isSurvivor && reached ? colors.primary : "rgba(159,176,190,.35)"}`,
                  backgroundColor: isSurvivor && reached ? colors.primary : "transparent",
                  color: isSurvivor && reached ? colors.canvas : colors.muted,
                  boxShadow: isSurvivor && reached ? "0 6px 18px rgba(255,90,31,.32)" : "none",
                  fontSize: 22,
                  fontWeight: 800,
                  scale: interpolate(lit, [0, 1], [0.86, isSurvivor ? 1.1 : 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    output: "perceptual-scale",
                  }),
                }}
              >
                {i + 1}
              </div>
              {/* The drip: peels off below the node and is fully faded by the
                  time it has fallen 14px — the exact gap before the label
                  starts, so it never overlaps the text. A loss, never
                  coloured as the accent. */}
              {isDrip && (
                <div
                  style={{
                    position: "absolute",
                    top: 54,
                    left: 22,
                    width: 12,
                    height: 12,
                    borderRadius: 99,
                    backgroundColor: colors.muted,
                    opacity: interpolate(dripProgress, [0, 0.12, 0.55], [0, 0.85, 0], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                    translate: interpolate(dripProgress, [0, 0.55], ["0px 0px", "0px 14px"], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                />
              )}
            </div>
            <div
              style={{
                flex: 1,
                height: 2,
                backgroundColor: i === clip.stages.length - 1 ? "transparent" : "rgba(159,176,190,.22)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: monoFamily,
              fontSize: 20,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              textAlign: "center",
              color: isSurvivor && reached ? colors.text : colors.body,
              opacity: interpolate(lit, [0, 1], [0.35, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            }}
          >
            {label}
          </span>
        </div>
      );
    })}
  </div>
);

// Index 2 is "where the bill sits right now" — the one persistent accent.
// Everything before it is settled history; everything after it is a station
// the clip never lets fill in, so the mechanism cannot be read as "passed".
const TIMELINE_CURRENT_INDEX = 2;

/**
 * "timeline" — a bill's progress. Early stations resolve solid; the current
 * station is the sole accent; later stations stay hollow and dashed for the
 * whole clip — they are never reached, not even for a frame.
 */
const TimelineMechanism: React.FC<MechanismProps> = ({ clip, frame, ease }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
    {clip.stages.map((label, i) => {
      const span = MECHANISM_SPAN / clip.stages.length;
      const start = MECHANISM_START + i * span;
      const lit = interpolate(frame, [start, start + span * 0.55], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: ease,
      });
      const isCurrentStation = i === TIMELINE_CURRENT_INDEX;
      const isFuture = i > TIMELINE_CURRENT_INDEX;
      const isCurrentLit = isCurrentStation && frame >= start;
      const isHistory = i < TIMELINE_CURRENT_INDEX;
      // A connector segment is dashed once either end of it sits at or past
      // the current station — the path forward is drawn, not walked.
      const leftDashed = i > 0 && i - 1 >= TIMELINE_CURRENT_INDEX;
      const rightDashed = i >= TIMELINE_CURRENT_INDEX;

      return (
        <div
          key={label}
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div
              style={{
                flex: 1,
                height: 2,
                backgroundColor: i === 0 || leftDashed ? "transparent" : "rgba(231,228,220,.3)",
                borderTop: i > 0 && leftDashed ? "2px dashed rgba(159,176,190,.35)" : "none",
              }}
            />
            <div
              style={{
                width: 54,
                height: 54,
                flexShrink: 0,
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px ${isFuture ? "dashed" : "solid"} ${isCurrentLit ? colors.primary : isHistory ? "rgba(231,228,220,.4)" : "rgba(159,176,190,.32)"}`,
                backgroundColor: isCurrentLit ? colors.primary : isHistory ? "rgba(231,228,220,.14)" : "transparent",
                color: isCurrentLit ? colors.canvas : isHistory ? colors.body : colors.muted,
                boxShadow: isCurrentLit ? "0 6px 18px rgba(255,90,31,.3)" : "none",
                fontSize: 22,
                fontWeight: 800,
                scale: interpolate(lit, [0, 1], [0.86, isCurrentStation ? 1.1 : 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  output: "perceptual-scale",
                }),
              }}
            >
              {i + 1}
            </div>
            <div
              style={{
                flex: 1,
                height: 2,
                backgroundColor: i === clip.stages.length - 1 || rightDashed ? "transparent" : "rgba(231,228,220,.3)",
                borderTop:
                  i < clip.stages.length - 1 && rightDashed ? "2px dashed rgba(159,176,190,.35)" : "none",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: monoFamily,
              fontSize: 20,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              textAlign: "center",
              color: isCurrentLit ? colors.text : isHistory ? colors.body : colors.muted,
              opacity: isFuture ? 0.55 : interpolate(lit, [0, 1], [0.35, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            }}
          >
            {label}
          </span>
        </div>
      );
    })}
  </div>
);

// A bell curve peaking at index 2, not an even climb — demand arrives as a
// burst. Only the peak bar ever takes the accent colour.
const SURGE_HEIGHTS = [0.24, 0.5, 1, 0.56, 0.28];
const SURGE_PEAK_INDEX = 2;
const SURGE_MAX_HEIGHT = 148;

/**
 * "surge" — a bar sequence that spikes hard then falls. The peak bar is the
 * sole accent; every other bar stays a neutral, unlit body tone.
 */
const SurgeMechanism: React.FC<MechanismProps> = ({ clip, frame, ease }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
    <div style={{ display: "flex", alignItems: "flex-end", gap: 22, height: SURGE_MAX_HEIGHT }}>
      {clip.stages.map((label, i) => {
        const span = MECHANISM_SPAN / clip.stages.length;
        const start = MECHANISM_START + i * span;
        const grown = interpolate(frame, [start, start + span * 0.85], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        });
        const isPeak = i === SURGE_PEAK_INDEX;
        const isLit = frame >= start;
        const targetHeight = SURGE_HEIGHTS[i] * SURGE_MAX_HEIGHT;

        return (
          <div
            key={label}
            style={{ flex: 1, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 88,
                borderRadius: "6px 6px 0 0",
                backgroundColor: isPeak && isLit ? colors.primary : "rgba(231,228,220,.24)",
                boxShadow: isPeak && isLit ? "0 8px 20px rgba(255,90,31,.3)" : "none",
                height: interpolate(grown, [0, 1], [0, targetHeight]),
              }}
            />
          </div>
        );
      })}
    </div>
    <div style={{ height: 1, backgroundColor: "rgba(159,176,190,.25)" }} />
    <div style={{ display: "flex", gap: 22 }}>
      {clip.stages.map((label, i) => {
        const span = MECHANISM_SPAN / clip.stages.length;
        const start = MECHANISM_START + i * span;
        const lit = interpolate(frame, [start, start + span * 0.55], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        });
        const isPeak = i === SURGE_PEAK_INDEX;

        return (
          <span
            key={label}
            style={{
              flex: 1,
              fontFamily: monoFamily,
              fontSize: 20,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              textAlign: "center",
              color: isPeak && frame >= start ? colors.text : colors.muted,
              opacity: interpolate(lit, [0, 1], [0.35, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            }}
          >
            {label}
          </span>
        );
      })}
    </div>
  </div>
);

/**
 * HeroClip — the 8-second, per-page hero animation.
 *
 * WHY A NEW COMPOSITION RATHER THAN MORE StoryVideo VARIANTS
 * StoryVideo was built for in-page figures and shows it: a thick accent frame,
 * an off-brand blue edge, a cramped inner card, and a row of small cards that
 * repeats labels already on screen. Rendering a still and actually looking at
 * it made that plain. A hero is the first thing a visitor sees, so it gets its
 * own composition with a different brief: generous space, one idea, one accent.
 *
 * THE RULES THIS COMPOSITION KEEPS
 * 1. ONE ACCENT. Safety orange marks exactly one thing per frame — the moment
 *    the front desk acts. Everything else is navy, off-white and hairlines.
 *    StoryVideo used the accent 45 times and read as noise.
 * 2. NO FRAMES INSIDE FRAMES. The player already sits in a bordered frame with
 *    registration marks. Drawing another border inside it is why the old clips
 *    looked cluttered.
 * 3. BRAND PALETTE ONLY. Navy / safety orange / hi-vis yellow. No blue.
 * 4. Animation is driven by useCurrentFrame + interpolate, per Remotion's own
 *    guidance — never CSS transitions, which do not render.
 *
 * TIMING — 240 frames at 30fps:
 *   0-24    the eyebrow settles
 *   12-60   headline rises in
 *   54-186  the mechanism plays (the part that differs per page)
 *   180-240 the outcome lands and holds
 */
export const HeroClip: React.FC<{ id?: HeroClipId }> = ({ id }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const clip = heroClipById[id ?? ("HomeHeroClip" as HeroClipId)];

  if (!clip) return <AbsoluteFill style={{ backgroundColor: colors.canvas }} />;

  const ease = Easing.bezier(0.16, 1, 0.3, 1);
  // Everything fades together in the last 8 frames so the loop does not cut.
  const outro = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.canvas,
        fontFamily,
        padding: 84,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: outro,
      }}
    >
      {/* Blueprint grid, held well back. It is texture, not pattern. */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(159,176,190,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,176,190,.07) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* ---- eyebrow ---- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: interpolate(frame, [0, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          }),
          translate: interpolate(frame, [0, 24], ["0px -10px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          }),
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: 99, backgroundColor: colors.warning }} />
        <span
          style={{
            fontFamily: monoFamily,
            fontSize: 26,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: colors.muted,
          }}
        >
          {clip.eyebrow}
        </span>
      </div>

      {/* ---- headline ---- */}
      <div style={{ marginTop: -40 }}>
        <h1
          style={{
            margin: 0,
            fontSize: clip.headline.length > 58 ? 62 : 74,
            lineHeight: 1.08,
            letterSpacing: -1.6,
            fontWeight: 800,
            color: colors.text,
            maxWidth: 830,
            opacity: interpolate(frame, [12, 46], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: ease,
            }),
            translate: interpolate(frame, [12, 52], ["0px 26px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: ease,
            }),
          }}
        >
          {clip.headline}
        </h1>

        {/* The one accent: a rule that draws itself under the headline. */}
        <div
          style={{
            marginTop: 30,
            height: 5,
            borderRadius: 4,
            backgroundColor: colors.primary,
            width: interpolate(frame, [34, 74], ["0px", "268px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: ease,
            }),
          }}
        />
      </div>

      {/* ---- the mechanism: one of four shapes, sharing this same frame ---- */}
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        {clip.shape === "leak" ? (
          <LeakMechanism clip={clip} frame={frame} ease={ease} />
        ) : clip.shape === "timeline" ? (
          <TimelineMechanism clip={clip} frame={frame} ease={ease} />
        ) : clip.shape === "surge" ? (
          <SurgeMechanism clip={clip} frame={frame} ease={ease} />
        ) : (
          <StagesMechanism clip={clip} frame={frame} ease={ease} />
        )}

        {/* ---- outcome ---- */}
        <div
          style={{
            marginTop: 12,
            paddingTop: 26,
            borderTop: "1px solid rgba(246,244,239,.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            opacity: interpolate(frame, [186, 214], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: ease,
            }),
            translate: interpolate(frame, [186, 220], ["0px 14px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: ease,
            }),
          }}
        >
          <span style={{ fontSize: 30, lineHeight: 1.3, color: colors.body, maxWidth: 620 }}>{clip.outcome}</span>
          <span
            style={{
              fontFamily: monoFamily,
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: colors.warning,
              whiteSpace: "nowrap",
            }}
          >
            {clip.stamp}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
