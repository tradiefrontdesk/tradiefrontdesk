import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "../components/theme";
import { VideoShell } from "../components/VideoShell";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const clamp = (frame: number, input: [number, number], output: [number, number]) =>
  interpolate(frame, input, output, { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });

const Check = ({ x, y, show }: { x: number; y: number; show: number }) => (
  <g opacity={show}>
    <circle cx={x} cy={y} r="18" fill={colors.primary} filter="drop-shadow(0 0 16px rgba(204,120,92,.65))" />
    <path d={`M${x - 8} ${y} L${x - 1} ${y + 7} L${x + 10} ${y - 8}`} fill="none" stroke={colors.canvas} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

export const HomeRealBusinessPaymentVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const checkout = spring({ frame: frame - 8, fps, config: { damping: 18, stiffness: 115 } });
  const payFill = clamp(frame, [112, 170], [0, 1]);
  const systemLine = clamp(frame, [156, 260], [0, 1]);
  const pulse = 1 + Math.sin(frame / 9) * 0.035;
  const sweep = clamp(frame % 140, [0, 140], [-30, 120]);

  const nodes = [
    ["Payment", 560, 248],
    ["Customer", 706, 176],
    ["Subscription", 724, 326],
    ["Follow-up", 872, 248],
  ] as const;

  return (
    <VideoShell label="Real business system" cta="Checkout to customer flow">
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            color: colors.text,
            fontSize: 43,
            lineHeight: 1.03,
            fontWeight: 950,
            letterSpacing: 0,
            maxWidth: 720,
          }}
        >
          A real business needs more than a page. It needs the system behind the payment.
        </div>

        <svg viewBox="0 0 964 560" style={{ position: "absolute", inset: "118px 0 0", width: "100%", height: 520, overflow: "visible" }}>
          <defs>
            <linearGradient id="payGlow" x1="0" x2="1">
              <stop offset="0" stopColor="rgba(204,120,92,.16)" />
              <stop offset="1" stopColor="rgba(204,120,92,.02)" />
            </linearGradient>
          </defs>

          <g opacity={0.28}>
            <path d="M30 70 H930" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
            <path d="M30 210 H930" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
            <path d="M30 350 H930" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
          </g>

          <g transform={`translate(${(1 - checkout) * -42} ${(1 - checkout) * 24}) scale(${0.92 + checkout * 0.08})`} opacity={checkout}>
            <rect x="46" y="26" width="380" height="456" rx="26" fill={colors.surfaceCard} stroke="rgba(204,120,92,.42)" strokeWidth="3" filter="drop-shadow(0 24px 48px rgba(0,0,0,.38))" />
            <rect x="46" y="26" width="380" height="86" rx="26" fill="url(#payGlow)" />
            <text x="82" y="78" fill={colors.primary} fontSize="24" fontWeight="950">
              RECURRING PRODUCT
            </text>
            <text x="82" y="144" fill={colors.text} fontSize="34" fontWeight="950">
              Your Electrical
            </text>
            <text x="82" y="190" fill={colors.primary} fontSize="38" fontWeight="950">
              $249 / month
            </text>

            {["First name", "Last name", "Email"].map((label, index) => {
              const y = 236 + index * 58;
              return (
                <g key={label} opacity={clamp(frame - index * 14, [30, 58], [0, 1])}>
                  <rect x="82" y={y} width="308" height="38" rx="9" fill={colors.surfaceSoft} stroke="rgba(255,255,255,.14)" />
                  <text x="100" y={y + 25} fill={colors.body} fontSize="17" fontWeight="800">
                    {label}
                  </text>
                </g>
              );
            })}

            <rect x="82" y="422" width="308" height="42" rx="10" fill={colors.primary} opacity={0.18 + payFill * 0.82} />
            <rect x="82" y="422" width={308 * payFill} height="42" rx="10" fill={colors.primary} />
            <text x="236" y="450" fill={payFill > 0.55 ? colors.canvas : colors.primary} fontSize="20" fontWeight="950" textAnchor="middle">
              Pay
            </text>
          </g>

          <path d="M426 254 C500 254 492 248 560 248" stroke="rgba(255,255,255,.13)" strokeWidth="9" strokeLinecap="round" fill="none" />
          <path d="M426 254 C500 254 492 248 560 248" stroke={colors.primary} strokeWidth="9" strokeLinecap="round" fill="none" strokeDasharray="142" strokeDashoffset={142 - systemLine * 142} filter="drop-shadow(0 0 15px rgba(204,120,92,.72))" />

          {nodes.map(([label, x, y], index) => {
            const reveal = clamp(frame - 160 - index * 22, [0, 24], [0, 1]);
            const active = reveal > 0.72;
            return (
              <g key={label} opacity={reveal} transform={`translate(${x} ${y}) scale(${active ? pulse : 1})`}>
                <circle r="54" fill={active ? "rgba(204,120,92,.14)" : colors.surfaceCard} stroke={active ? colors.primary : "rgba(255,255,255,.16)"} strokeWidth="3" />
                <circle r="13" fill={active ? colors.primary : colors.elevated} />
                <text y="82" fill={active ? colors.primary : colors.body} fontSize="19" fontWeight="950" textAnchor="middle">
                  {label}
                </text>
              </g>
            );
          })}

          <path d="M600 226 C648 160 670 170 706 176" stroke={colors.primary} strokeWidth="5" fill="none" opacity={clamp(frame - 188, [0, 34], [0, 1])} />
          <path d="M600 270 C650 338 684 326 724 326" stroke={colors.primary} strokeWidth="5" fill="none" opacity={clamp(frame - 206, [0, 34], [0, 1])} />
          <path d="M766 326 C830 326 820 254 872 248" stroke={colors.primary} strokeWidth="5" fill="none" opacity={clamp(frame - 226, [0, 34], [0, 1])} />

          <Check x={560} y={248} show={clamp(frame - 160, [0, 18], [0, 1])} />
          <Check x={872} y={248} show={clamp(frame - 250, [0, 18], [0, 1])} />

          <g opacity={clamp(frame - 278, [0, 24], [0, 1])}>
            <rect x="536" y="410" width="374" height="76" rx="18" fill={colors.surfaceCard} stroke="rgba(204,120,92,.38)" />
            <text x="564" y="438" fill={colors.text} fontSize="22" fontWeight="950">
              Payment captured.
            </text>
            <text x="564" y="466" fill={colors.body} fontSize="16" fontWeight="800">
              Subscription, contact record, reminders,
            </text>
            <text x="564" y="486" fill={colors.body} fontSize="16" fontWeight="800">
              and owner visibility.
            </text>
          </g>

          <rect x={sweep * 8 - 160} y="0" width="120" height="520" fill="rgba(204,120,92,.08)" transform="skewX(-18)" opacity="0.8" />
        </svg>
      </div>
    </VideoShell>
  );
};
