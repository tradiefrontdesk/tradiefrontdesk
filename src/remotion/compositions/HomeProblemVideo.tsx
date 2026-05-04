import { interpolate, useCurrentFrame } from "remotion";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const breakpoints = [
  { label: "Missed call", detail: "phone rings on-site", x: 165, y: 205, delay: 12 },
  { label: "Slow reply", detail: "form waits in inbox", x: 360, y: 292, delay: 54 },
  { label: "Cold quote", detail: "sent, then forgotten", x: 585, y: 230, delay: 96 },
  { label: "Scattered note", detail: "no clear pipeline", x: 760, y: 332, delay: 138 },
];

export const HomeProblemVideo = () => {
  const frame = useCurrentFrame();
  const titleIndex = Math.min(3, Math.floor(frame / 90));
  const titles = [
    "Good jobs do not always disappear at the sale.",
    "They leak when the enquiry process gets busy.",
    "Calls, forms, quotes, and notes all split apart.",
    "The business needs one visible front desk flow.",
  ];
  const pathProgress = interpolate(frame, [18, 210], [0, 1], clamp);
  const lostCount = Math.round(interpolate(frame, [120, 310], [0, 4], clamp));

  return (
    <VideoShell label="The problem" cta="Busy process, leaking opportunities">
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ color: colors.text, fontSize: 49, lineHeight: 1.04, fontWeight: 950 }}>{titles[titleIndex]}</div>

        <svg viewBox="0 0 964 694" style={{ position: "absolute", inset: "108px 0 0", width: "100%", height: 694, overflow: "visible" }}>
          <defs>
            <filter id="problemGlow" x="-70%" y="-70%" width="240%" height="240%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="problemFade" x1="0" x2="1">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="68%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.error} />
            </linearGradient>
          </defs>

          <rect x="32" y="30" width="900" height="612" rx="28" fill="rgba(18,18,18,.76)" stroke="rgba(250,255,105,.22)" />

          <text x="70" y="86" fill={colors.primary} fontSize="23" fontWeight="950">
            Incoming opportunities
          </text>
          <text x="650" y="86" fill={colors.error} fontSize="23" fontWeight="950">
            Lost in the cracks
          </text>

          <path d="M92 164 C210 92 284 316 382 252 S520 112 620 184 S764 402 862 290" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="10" strokeLinecap="round" />
          <path
            d="M92 164 C210 92 284 316 382 252 S520 112 620 184 S764 402 862 290"
            fill="none"
            stroke="url(#problemFade)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="960"
            strokeDashoffset={960 - pathProgress * 960}
            filter="url(#problemGlow)"
          />

          {breakpoints.map((point, index) => {
            const appear = interpolate(frame - point.delay, [0, 22], [0, 1], clamp);
            const crack = interpolate(frame - point.delay - 58, [0, 44], [0, 1], clamp);
            const dropY = interpolate(crack, [0, 1], [0, 116 + index * 16]);
            const isCracked = crack > 0.42;
            return (
              <g key={point.label} opacity={appear}>
                <circle cx={point.x} cy={point.y} r={22 + crack * 4} fill="rgba(10,10,10,.94)" stroke={isCracked ? colors.error : colors.primary} strokeWidth="5" filter="url(#problemGlow)" />
                <circle cx={point.x} cy={point.y + dropY} r="10" fill={crack > 0.08 ? colors.error : colors.primary} opacity={crack} />
                <path d={`M${point.x - 16} ${point.y + 34} L${point.x - 3} ${point.y + 60} L${point.x - 20} ${point.y + 86}`} stroke={colors.error} strokeWidth="5" strokeLinecap="round" opacity={crack} />
                <rect x={point.x - 96} y={point.y + 42} width="192" height="74" rx="15" fill="rgba(26,26,26,.96)" stroke={isCracked ? "rgba(239,68,68,.48)" : "rgba(250,255,105,.28)"} />
                <text x={point.x} y={point.y + 73} textAnchor="middle" fill={colors.text} fontSize="21" fontWeight="950">
                  {point.label}
                </text>
                <text x={point.x} y={point.y + 100} textAnchor="middle" fill={colors.body} fontSize="15" fontWeight="750">
                  {point.detail}
                </text>
              </g>
            );
          })}

          <g opacity={interpolate(frame, [184, 246], [0, 1], clamp)}>
            <rect x="104" y="500" width="756" height="86" rx="22" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.42)" />
            <text x="132" y="535" fill={colors.error} fontSize="24" fontWeight="950">
              Opportunities sitting outside a system
            </text>
            {[0, 1, 2, 3].map((item) => (
              <g key={item} opacity={item < lostCount ? 1 : 0.18}>
                <rect x={134 + item * 170} y="552" width="136" height="18" rx="9" fill={item < lostCount ? colors.error : colors.elevated} />
              </g>
            ))}
          </g>

          <g opacity={interpolate(frame, [270, 332], [0, 1], clamp)}>
            <rect x="132" y="606" width="700" height="46" rx="15" fill="rgba(250,255,105,.12)" stroke="rgba(250,255,105,.36)" />
            <text x="482" y="636" textAnchor="middle" fill={colors.primary} fontSize="23" fontWeight="950">
              The work may be good. The enquiry process is what breaks.
            </text>
          </g>
        </svg>
      </div>
    </VideoShell>
  );
};
