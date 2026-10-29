import type { DiscountSegment } from "@/config/discounts";

const R = 96;

function point(angleDeg: number, radius: number) {
  const a = (angleDeg * Math.PI) / 180;
  return [radius * Math.sin(a), -radius * Math.cos(a)] as const;
}

/**
 * SVG discount wheel. Segment 0 starts at 12 o'clock and segments run clockwise.
 * The parent rotates this wheel so the winning segment's center lands under the top pointer.
 */
export function DiscountWheel({ segments }: { segments: DiscountSegment[] }) {
  const seg = 360 / segments.length;
  return (
    <svg viewBox="-100 -100 200 200" className="h-full w-full" aria-hidden="true" focusable="false">
      <circle r="99" fill="#111214" />
      {segments.map((s, i) => {
        const a0 = i * seg;
        const a1 = a0 + seg;
        const [x0, y0] = point(a0, R);
        const [x1, y1] = point(a1, R);
        const center = a0 + seg / 2;
        return (
          <g key={s.value}>
            <path
              d={`M0 0 L${x0.toFixed(3)} ${y0.toFixed(3)} A${R} ${R} 0 0 1 ${x1.toFixed(3)} ${y1.toFixed(3)} Z`}
              fill={s.color}
              stroke="#111214"
              strokeWidth="1.2"
            />
            <text
              transform={`rotate(${center}) translate(0 -60) rotate(${center > 180 ? 90 : -90})`}
              textAnchor="middle"
              dominantBaseline="central"
              fill={s.textColor}
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "-0.02em" }}
            >
              {s.label}
            </text>
          </g>
        );
      })}
      {/* rim studs */}
      {segments.map((_, i) => {
        const [x, y] = point(i * seg, 92);
        return <circle key={`stud-${i}`} cx={x} cy={y} r="2.2" fill="#F5F2EC" />;
      })}
      <circle r="21" fill="#111214" stroke="#F5F2EC" strokeWidth="3" />
      <circle r="5" fill="#FF5A1F" />
    </svg>
  );
}
