import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const leaks = ["Missed call", "Slow reply", "Cold quote"];
const steps = ["Capture", "Respond", "Qualify", "Book", "Follow"];

export const HomeReframeVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const beat = Math.min(3, Math.floor(frame / 90));
  const systemScale = spring({ frame: frame - 142, fps, config: { damping: 18, stiffness: 90 } });
  const pulse = interpolate(Math.sin(frame / 7), [-1, 1], [0.78, 1]);
  const flowProgress = interpolate(frame, [168, 300], [0, 1], clamp);
  const leakFade = interpolate(frame, [128, 174], [1, 0.2], clamp);

  const titles = [
    "You may not need more leads first.",
    "The leak is usually after contact.",
    "Install the front desk layer.",
    "Then add volume when the flow is ready.",
  ];

  return (
    <VideoShell label="The reframe" cta="Fix capture before adding volume">
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            color: colors.text,
            fontSize: 50,
            lineHeight: 1.04,
            fontWeight: 950,
          }}
        >
          {titles[beat]}
        </div>

        <svg viewBox="0 0 964 690" style={{ position: "absolute", left: 0, right: 0, top: 118, width: "100%", height: 690, overflow: "visible" }}>
          <defs>
            <filter id="reframeGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="34" y="34" width="896" height="610" rx="0" fill="rgba(8,8,8,.9)" stroke={colors.primary} strokeWidth="4" />

          <text x="70" y="92" fill={colors.text} fontSize="24" fontWeight="950">
            More enquiry volume
          </text>
          <text x="620" y="92" fill={colors.primary} fontSize="24" fontWeight="950">
            Front desk system
          </text>

          {[0, 1, 2, 3, 4].map((dot) => {
            const travel = (frame * 3.2 + dot * 96) % 540;
            const x = 76 + travel;
            const y = 150 + Math.sin((frame + dot * 20) / 15) * 24;
            const falling = x > 410 && frame < 166;
            return (
              <circle
                key={dot}
                cx={x}
                cy={falling ? y + interpolate(x, [410, 615], [0, 140], clamp) : y}
                r="9"
                fill={colors.primary}
                opacity={frame < 166 ? 0.7 : 0.18}
              />
            );
          })}

          <path d="M82 166 C210 88 330 230 452 170 S650 92 792 166" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="8" strokeLinecap="round" />
          <path
            d="M82 166 C210 88 330 230 452 170 S650 92 792 166"
            fill="none"
            stroke={colors.blue}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="860"
            strokeDashoffset={860 - flowProgress * 860}
          />

          <g opacity={leakFade}>
            <rect x="338" y="216" width="286" height="120" rx="0" fill="rgba(5,5,5,.92)" stroke={colors.error} strokeWidth="4" />
            <text x="481" y="266" textAnchor="middle" fill={colors.error} fontSize="28" fontWeight="950">
              process gap
            </text>
            <path d="M418 328 L392 410 M485 330 L488 430 M552 328 L586 412" stroke={colors.error} strokeWidth="7" strokeLinecap="round" strokeDasharray="16 14" />
            {leaks.map((leak, index) => {
              const y = 444 + index * 52;
              const x = 318 + index * 48 + interpolate(frame - index * 16, [38, 90], [-28, 0], clamp);
              return (
                <g key={leak} opacity={interpolate(frame - index * 18, [24, 50], [0, 1], clamp)}>
                  <rect x={x} y={y} width="330" height="36" rx="0" fill="rgba(5,5,5,.96)" stroke={colors.error} strokeWidth="2" />
                  <rect x={x + 16} y={y + 12} width="12" height="12" rx="3" fill={colors.error} />
                  <text x={x + 42} y={y + 25} fill={colors.text} fontSize="20" fontWeight="850">
                    {leak}
                  </text>
                </g>
              );
            })}
          </g>

          <g transform={`translate(262 218) scale(${interpolate(systemScale, [0, 1], [0.72, 1], clamp)})`} opacity={interpolate(systemScale, [0, 1], [0, 1], clamp)}>
            <rect x="0" y="0" width="440" height="286" rx="0" fill="rgba(5,5,5,.98)" stroke={colors.primary} strokeWidth="4" />
            <rect x="24" y="28" width="392" height="52" rx="0" fill="rgba(255,217,0,.14)" stroke={colors.primary} strokeWidth="2" />
            <text x="42" y="62" fill={colors.primary} fontSize="22" fontWeight="950">
              Front Desk Layer
            </text>

            {steps.map((step, index) => {
              const active = flowProgress * steps.length > index;
              const x = 44 + index * 77;
              return (
                <g key={step} transform={`translate(${x} 132)`}>
                  <circle r={active ? 28 * (index === Math.floor(flowProgress * steps.length) ? pulse : 1) : 24} fill={active ? colors.primary : colors.surfaceCard} stroke={active ? "#050505" : "rgba(255,255,255,.28)"} strokeWidth="4" />
                  <text y="8" textAnchor="middle" fill={active ? colors.canvas : colors.body} fontSize="22" fontWeight="950">
                    {index + 1}
                  </text>
                  <text y="62" textAnchor="middle" fill={active ? colors.primary : colors.body} fontSize="16" fontWeight="950">
                    {step}
                  </text>
                </g>
              );
            })}

            <path d="M46 132 H352" stroke="rgba(255,255,255,.16)" strokeWidth="5" strokeLinecap="round" />
            <path d="M46 132 H352" stroke={colors.blue} strokeWidth="5" strokeLinecap="round" strokeDasharray="306" strokeDashoffset={306 - flowProgress * 306} />

            <rect x="34" y="220" width="372" height="38" rx="0" fill="rgba(255,217,0,.12)" stroke={colors.primary} strokeWidth="2" />
            <text x="54" y="245" fill={colors.text} fontSize="19" fontWeight="850">
              capture existing enquiries before buying more attention
            </text>
          </g>

          <g opacity={interpolate(frame, [246, 306], [0, 1], clamp)}>
            <rect x="104" y="560" width="756" height="50" rx="0" fill="rgba(5,5,5,.96)" stroke={colors.primary} strokeWidth="3" />
            <text x="482" y="592" textAnchor="middle" fill={colors.primary} fontSize="25" fontWeight="950">
              More leads work better after the front desk stops leaking.
            </text>
          </g>
        </svg>
      </div>
    </VideoShell>
  );
};
