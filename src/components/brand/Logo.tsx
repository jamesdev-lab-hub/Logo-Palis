import Link from "next/link";

/** The Logo Palace graphic mark: a rounded tile with a stylized "LP" monogram and accent dot. */
export function LogoMark({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const tile = dark ? "#F5F2EC" : "#111214";
  const glyph = dark ? "#111214" : "#F5F2EC";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect width="40" height="40" rx="11" fill={tile} />
      {/* L */}
      <path d="M8.5 10h4.6v15.4h6.6V30H8.5z" fill={glyph} />
      {/* P */}
      <path
        fillRule="evenodd"
        d="M21 10h6.4a5.9 5.9 0 0 1 0 11.8h-1.8V30H21zm4.6 4.3v3.2h1.7a1.6 1.6 0 0 0 0-3.2z"
        fill={glyph}
      />
      <circle cx="31.6" cy="27.6" r="2.6" fill="#FF5A1F" />
    </svg>
  );
}

/** Text wordmark + mark. Scales cleanly and is used in header, footer, and mobile menu. */
export function Logo({
  dark = false,
  size = "md",
  asLink = true,
}: {
  dark?: boolean;
  size?: "md" | "lg";
  asLink?: boolean;
}) {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark dark={dark} className={size === "lg" ? "h-11 w-11" : "h-9 w-9"} />
      <span
        className={`font-display font-bold whitespace-nowrap tracking-[-0.04em] ${size === "lg" ? "text-[1.75rem]" : "text-[1.35rem]"} ${dark ? "text-paper" : "text-ink"}`}
      >
        logo Palace<span className="text-accent">.</span>
      </span>
    </span>
  );
  if (!asLink) return content;
  return (
    <Link href="/" aria-label="Logo Palace — home" className="rounded-lg">
      {content}
    </Link>
  );
}
