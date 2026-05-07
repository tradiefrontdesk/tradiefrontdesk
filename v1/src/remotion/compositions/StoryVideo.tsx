import type { ReactNode } from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Dot, SquareCard } from "../components/SquarePrimitives";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";
import { storyVideoById, type StoryVideoConfig, type StoryVideoId } from "../data/homeVideos";

type Props = {
  id: StoryVideoId;
};

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const clamp = (value: number, input: [number, number], output: [number, number]) =>
  interpolate(value, input, output, { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });

const section = (frame: number, total: number, index: number, count: number) => {
  const length = total / count;
  return clamp(frame - index * length, [0, length * 0.82], [0, 1]);
};

const StoryBeat = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const beatLength = durationInFrames / story.beats.length;
  const beatIndex = Math.min(story.beats.length - 1, Math.floor(frame / beatLength));
  const local = frame - beatIndex * beatLength;
  const opacity = interpolate(local, [0, 16, beatLength - 20, beatLength], [0.62, 1, 1, 0.62], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ minHeight: 116, opacity, color: colors.text, fontSize: 40, lineHeight: 1.06, fontWeight: 950, letterSpacing: 0 }}>
      {story.beats[beatIndex]}
    </div>
  );
};

const SmallCard = ({ children, active = true, style }: { children: ReactNode; active?: boolean; style?: React.CSSProperties }) => (
  <SquareCard
    style={{
      padding: 15,
      borderColor: active ? "rgba(204,120,92,.42)" : "rgba(255,255,255,.14)",
      boxShadow: active ? "0 18px 56px rgba(0,0,0,.34), 0 0 30px rgba(204,120,92,.16)" : "0 18px 44px rgba(0,0,0,.28)",
      ...style,
    }}
  >
    {children}
  </SquareCard>
);

const FlowVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = clamp(frame, [12, durationInFrames - 24], [0, 1]);
  const active = Math.min(story.nodes.length - 1, Math.floor(progress * story.nodes.length));
  const pulse = 1 + Math.sin(frame / 8) * 0.06;
  const points = [
    { x: 80, y: 202 },
    { x: 245, y: 146 },
    { x: 410, y: 202 },
    { x: 575, y: 146 },
    { x: 742, y: 202 },
  ];
  const linePath = `M${points[0].x} ${points[0].y} C132 138 192 132 ${points[1].x} ${points[1].y} S346 268 ${points[2].x} ${points[2].y} S512 82 ${points[3].x} ${points[3].y} S684 270 ${points[4].x} ${points[4].y}`;

  return (
    <SquareCard style={{ padding: 22 }}>
      <svg viewBox="0 0 820 390" style={{ display: "block", width: "100%", height: 390, overflow: "visible" }}>
        <path d={linePath} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="12" strokeLinecap="round" />
        <path
          d={linePath}
          fill="none"
          stroke={colors.primary}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="900"
          strokeDashoffset={900 - progress * 900}
          style={{ filter: "drop-shadow(0 0 18px rgba(204,120,92,.65))" }}
        />
        {story.nodes.map((node, index) => {
          const { x, y } = points[index] ?? points[points.length - 1];
          const isActive = index <= active;
          const scale = isActive && index === active ? pulse : 1;
          return (
            <g key={node} transform={`translate(${x} ${y}) scale(${scale})`}>
              <circle r={isActive ? 31 : 25} fill={isActive ? colors.primary : colors.surfaceCard} stroke={isActive ? colors.primary : "rgba(255,255,255,.18)"} strokeWidth="4" />
              <text y="8" fill={isActive ? colors.canvas : colors.body} textAnchor="middle" fontSize="22" fontWeight="950">
                {index + 1}
              </text>
              <text y="66" fill={isActive ? colors.primary : colors.body} textAnchor="middle" fontSize="20" fontWeight="900">
                {node}
              </text>
            </g>
          );
        })}
      </svg>
    </SquareCard>
  );
};

const ModulesVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const pop = spring({ frame, fps: 30, config: { damping: 18, stiffness: 120 } });
  const moduleNames = [...story.nodes, ...story.cards].slice(0, 6);
  const positions = [
    [70, 70],
    [300, 38],
    [530, 70],
    [70, 250],
    [300, 282],
    [530, 250],
  ];

  return (
    <SquareCard style={{ padding: 20 }}>
      <svg viewBox="0 0 760 430" style={{ display: "block", width: "100%", height: 430 }}>
        <circle cx="380" cy="216" r={84 + Math.sin(frame / 14) * 5} fill="rgba(204,120,92,.09)" stroke="rgba(204,120,92,.42)" strokeWidth="3" />
        <text x="380" y="203" fill={colors.primary} textAnchor="middle" fontSize="24" fontWeight="950">
          ENQUIRY
        </text>
        <text x="380" y="236" fill={colors.text} textAnchor="middle" fontSize="24" fontWeight="950">
          SYSTEM
        </text>
        {positions.map(([x, y], index) => {
          const reveal = clamp(frame - index * 18, [0, 24], [0, 1]);
          const active = reveal > 0.8;
          return (
            <g key={`${x}-${y}`} opacity={reveal}>
              <line x1="380" y1="216" x2={x + 80} y2={y + 46} stroke={active ? "rgba(204,120,92,.6)" : "rgba(255,255,255,.13)"} strokeWidth="4" />
              <rect x={x} y={y} width="160" height="92" rx="14" fill={colors.surfaceCard} stroke={active ? colors.primary : "rgba(255,255,255,.16)"} strokeWidth="2" />
              <circle cx={x + 24} cy={y + 26} r="8" fill={active ? colors.primary : colors.elevated} />
              <text x={x + 44} y={y + 34} fill={colors.text} fontSize="19" fontWeight="900">
                {moduleNames[index]}
              </text>
              <rect x={x + 18} y={y + 58} width={95 * pop} height="7" rx="4" fill="rgba(204,120,92,.52)" />
            </g>
          );
        })}
      </svg>
    </SquareCard>
  );
};

const PricingVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const tiers = story.nodes.slice(0, 4);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 13 }}>
      {tiers.map((tier, index) => {
        const reveal = clamp(frame - index * 24, [0, 28], [0, 1]);
        const featured = tier.toLowerCase().includes("booked") || index === 2;
        return (
          <SmallCard key={tier} active={featured} style={{ minHeight: featured ? 360 : 300, alignSelf: "end", opacity: reveal, padding: 13 }}>
            <div style={{ color: featured ? colors.primary : colors.body, fontSize: 16, fontWeight: 900, textTransform: "uppercase" }}>Scope</div>
            <div style={{ marginTop: 14, color: colors.text, fontSize: featured ? 27 : 22, lineHeight: 1.05, fontWeight: 950 }}>{tier}</div>
            <div style={{ marginTop: 22, height: 130, display: "grid", gap: 9, alignContent: "start" }}>
              {story.cards.slice(0, 3).map((card, cardIndex) => (
                <div key={card} style={{ display: "flex", alignItems: "center", gap: 8, opacity: clamp(frame - index * 24 - cardIndex * 10, [0, 18], [0.28, 1]) }}>
                  <Dot size={9} active={featured || cardIndex <= index} />
                  <span style={{ color: colors.body, fontSize: 14, lineHeight: 1.1, fontWeight: 800 }}>{card}</span>
                </div>
              ))}
            </div>
            {featured ? <div style={{ color: colors.primary, fontSize: 15, fontWeight: 900 }}>Flagship fit</div> : null}
          </SmallCard>
        );
      })}
    </div>
  );
};

const ComparisonVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const oldItems = story.cards.slice(0, 3);
  const systemItems = story.nodes.slice(-3);
  const bridge = clamp(frame, [55, 160], [0, 1]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 14, alignItems: "stretch" }}>
      <SquareCard style={{ padding: 18, minHeight: 380, borderColor: "rgba(239,68,68,.35)" }}>
        <div style={{ color: colors.error, fontSize: 18, fontWeight: 950, textTransform: "uppercase" }}>Old way</div>
        <div style={{ display: "grid", gap: 14, marginTop: 20 }}>
          {oldItems.map((item, index) => (
            <div key={item} style={{ opacity: clamp(frame - index * 18, [0, 20], [0, 1]), padding: 14, borderRadius: 12, background: "rgba(239,68,68,.08)", color: colors.body, fontSize: 21, fontWeight: 850 }}>
              {item}
            </div>
          ))}
        </div>
      </SquareCard>
      <svg viewBox="0 0 80 380" style={{ width: "100%", height: 380, alignSelf: "center" }}>
        <path d="M15 190 H65" stroke="rgba(255,255,255,.14)" strokeWidth="8" strokeLinecap="round" />
        <path d="M15 190 H65" stroke={colors.primary} strokeWidth="8" strokeLinecap="round" strokeDasharray="50" strokeDashoffset={50 - bridge * 50} />
        <path d="M52 174 L68 190 L52 206" fill="none" stroke={colors.primary} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity={bridge} />
      </svg>
      <SquareCard style={{ padding: 18, minHeight: 380 }}>
        <div style={{ color: colors.primary, fontSize: 18, fontWeight: 950, textTransform: "uppercase" }}>Front desk</div>
        <div style={{ display: "grid", gap: 14, marginTop: 20 }}>
          {systemItems.map((item, index) => (
            <div key={item} style={{ opacity: clamp(frame - 80 - index * 18, [0, 20], [0, 1]), padding: 14, borderRadius: 12, background: "rgba(204,120,92,.09)", color: colors.text, fontSize: 21, fontWeight: 900 }}>
              {item}
            </div>
          ))}
        </div>
      </SquareCard>
    </div>
  );
};

const AuditVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const score = Math.round(clamp(frame, [40, 185], [22, 78]));
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 16, alignItems: "stretch" }}>
      <SquareCard style={{ padding: 18, minHeight: 380 }}>
        <div style={{ color: colors.primary, fontSize: 19, fontWeight: 950, textTransform: "uppercase" }}>Audit checks</div>
        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
          {story.nodes.map((node, index) => (
            <div key={node} style={{ display: "flex", alignItems: "center", gap: 12, opacity: clamp(frame - index * 18, [0, 22], [0.2, 1]) }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, border: `2px solid ${colors.primary}`, display: "grid", placeItems: "center", color: colors.primary, fontSize: 18, fontWeight: 950 }}>✓</div>
              <div style={{ color: colors.text, fontSize: 24, fontWeight: 900 }}>{node}</div>
            </div>
          ))}
        </div>
      </SquareCard>
      <SquareCard style={{ padding: 20, minHeight: 380, display: "grid", alignContent: "center", justifyItems: "center" }}>
        <svg viewBox="0 0 240 240" style={{ width: 230, height: 230 }}>
          <circle cx="120" cy="120" r="92" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="22" />
          <circle cx="120" cy="120" r="92" fill="none" stroke={colors.primary} strokeWidth="22" strokeLinecap="round" strokeDasharray="578" strokeDashoffset={578 - (score / 100) * 578} transform="rotate(-90 120 120)" />
          <text x="120" y="120" fill={colors.text} textAnchor="middle" fontSize="58" fontWeight="950">
            {score}
          </text>
          <text x="120" y="154" fill={colors.body} textAnchor="middle" fontSize="18" fontWeight="850">
            leak score
          </text>
        </svg>
        <div style={{ color: colors.primary, fontSize: 20, fontWeight: 900, textAlign: "center" }}>Prioritise what to fix first</div>
      </SquareCard>
    </div>
  );
};

const ContactVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  return (
    <SquareCard style={{ padding: 22 }}>
      <svg viewBox="0 0 820 390" style={{ display: "block", width: "100%", height: 390 }}>
        <rect x="56" y="132" width="210" height="110" rx="18" fill={colors.surfaceCard} stroke="rgba(255,255,255,.16)" strokeWidth="2" />
        <text x="84" y="178" fill={colors.text} fontSize="24" fontWeight="950">
          Message
        </text>
        <text x="84" y="210" fill={colors.body} fontSize="18" fontWeight="800">
          question or audit
        </text>
        <path d="M266 187 C352 187 374 74 470 74" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="7" strokeLinecap="round" />
        <path d="M266 187 H470" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="7" strokeLinecap="round" />
        <path d="M266 187 C352 187 374 302 470 302" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="7" strokeLinecap="round" />
        <path d="M266 187 C352 187 374 74 470 74" fill="none" stroke={colors.primary} strokeWidth="7" strokeLinecap="round" strokeDasharray="230" strokeDashoffset={230 - clamp(frame, [25, 95], [0, 230])} />
        <path d="M266 187 H470" fill="none" stroke={colors.primary} strokeWidth="7" strokeLinecap="round" strokeDasharray="205" strokeDashoffset={205 - clamp(frame - 18, [25, 95], [0, 205])} />
        <path d="M266 187 C352 187 374 302 470 302" fill="none" stroke={colors.primary} strokeWidth="7" strokeLinecap="round" strokeDasharray="230" strokeDashoffset={230 - clamp(frame - 36, [25, 95], [0, 230])} />
        {story.cards.slice(0, 4).map((card, index) => {
          const x = 470;
          const y = 32 + index * 80;
          return (
            <g key={card} opacity={clamp(frame - 75 - index * 18, [0, 22], [0, 1])}>
              <rect x={x} y={y} width="270" height="66" rx="15" fill={colors.surfaceCard} stroke={index === 0 ? colors.primary : "rgba(204,120,92,.24)"} strokeWidth="2" />
              <circle cx={x + 26} cy={y + 31} r="8" fill={colors.primary} />
              <text x={x + 46} y={y + 39} fill={colors.text} fontSize="21" fontWeight="900">
                {card}
              </text>
            </g>
          );
        })}
      </svg>
    </SquareCard>
  );
};

const ProofVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  const headers = ["Start", "System", "Reported", "Lesson"];
  return (
    <SquareCard style={{ padding: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {headers.map((header, index) => (
          <div key={header} style={{ color: index === 2 ? colors.primary : colors.body, fontSize: 17, fontWeight: 950, textTransform: "uppercase" }}>
            {header}
          </div>
        ))}
        {story.cards.slice(0, 4).map((card, index) => (
          <div key={card} style={{ opacity: clamp(frame - index * 22, [0, 24], [0, 1]), minHeight: 215, padding: 14, borderRadius: 14, border: "1px solid rgba(255,255,255,.13)", background: index === 2 ? "rgba(204,120,92,.1)" : "rgba(255,255,255,.045)" }}>
            <div style={{ color: index === 2 ? colors.primary : colors.text, fontSize: 24, lineHeight: 1.04, fontWeight: 950 }}>{card}</div>
            <div style={{ marginTop: 20, height: 8, width: `${clamp(frame - 70 - index * 16, [0, 40], [25, 100])}%`, borderRadius: 99, background: index === 2 ? colors.primary : "rgba(255,255,255,.22)" }} />
          </div>
        ))}
      </div>
    </SquareCard>
  );
};

const LegalVisual = ({ story }: { story: StoryVideoConfig }) => {
  const frame = useCurrentFrame();
  return (
    <SquareCard style={{ padding: 22 }}>
      <svg viewBox="0 0 820 390" style={{ display: "block", width: "100%", height: 390 }}>
        <rect x="82" y="58" width="210" height="274" rx="22" fill={colors.surfaceCard} stroke="rgba(255,255,255,.16)" strokeWidth="2" />
        <text x="112" y="108" fill={colors.text} fontSize="28" fontWeight="950">
          Website
        </text>
        <text x="112" y="142" fill={colors.body} fontSize="19" fontWeight="800">
          form + service info
        </text>
        <path d="M292 196 H526" stroke="rgba(255,255,255,.13)" strokeWidth="10" strokeLinecap="round" />
        <path d="M292 196 H526" stroke={colors.primary} strokeWidth="10" strokeLinecap="round" strokeDasharray="234" strokeDashoffset={234 - clamp(frame, [30, 120], [0, 234])} />
        <rect x="526" y="58" width="210" height="274" rx="22" fill={colors.surfaceCard} stroke={colors.primary} strokeWidth="2" />
        <text x="556" y="108" fill={colors.primary} fontSize="28" fontWeight="950">
          Clear rules
        </text>
        {story.nodes.slice(0, 4).map((node, index) => (
          <g key={node} opacity={clamp(frame - 72 - index * 18, [0, 20], [0, 1])}>
            <circle cx="558" cy={154 + index * 42} r="8" fill={colors.primary} />
            <text x="580" y={162 + index * 42} fill={colors.text} fontSize="22" fontWeight="900">
              {node}
            </text>
          </g>
        ))}
      </svg>
    </SquareCard>
  );
};

const VariantVisual = ({ story }: { story: StoryVideoConfig }) => {
  if (story.variant === "modules") return <ModulesVisual story={story} />;
  if (story.variant === "pricing") return <PricingVisual story={story} />;
  if (story.variant === "comparison") return <ComparisonVisual story={story} />;
  if (story.variant === "audit") return <AuditVisual story={story} />;
  if (story.variant === "contact") return <ContactVisual story={story} />;
  if (story.variant === "proof") return <ProofVisual story={story} />;
  if (story.variant === "legal") return <LegalVisual story={story} />;
  return <FlowVisual story={story} />;
};

export const StoryVideo = ({ id }: Props) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { story } = storyVideoById[id];
  const footerReveal = section(frame, durationInFrames, 3, 4);

  return (
    <VideoShell label={story.label} cta={story.cta}>
      <div style={{ display: "grid", gap: 18, height: "100%", alignContent: "space-between" }}>
        <StoryBeat story={story} />
        <VariantVisual story={story} />
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${story.nodes.length}, 1fr)`, gap: 10 }}>
          {story.nodes.map((node, index) => (
            <SmallCard key={node} active={index <= Math.floor(section(frame, durationInFrames, 0, 1) * story.nodes.length)} style={{ minHeight: 72, opacity: clamp(frame - index * 12, [0, 18], [0, 1]) }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Dot size={10} active />
                <div style={{ color: colors.text, fontSize: 16, lineHeight: 1.1, fontWeight: 900 }}>{node}</div>
              </div>
            </SmallCard>
          ))}
        </div>
        <div style={{ opacity: footerReveal, color: colors.primary, fontSize: 18, lineHeight: 1.2, fontWeight: 900 }}>{story.footer}</div>
      </div>
    </VideoShell>
  );
};
