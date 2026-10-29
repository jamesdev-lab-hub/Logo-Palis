import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  align = "left",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${align === "center" ? "mx-auto items-center text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "text-accent" : "text-accent-deep"}`}>{eyebrow}</p>}
      <Tag
        id={id}
        className={`text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-bold ${dark ? "text-paper" : "text-ink"}`}
      >
        {title}
      </Tag>
      {intro && <p className={`text-lg leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

/** Top-of-page hero used by inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="flex max-w-4xl animate-rise flex-col gap-6">
        <p className="eyebrow text-accent-deep">{eyebrow}</p>
        <h1 className="text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[1.02] font-bold">{title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{intro}</p>
        {children}
      </div>
    </section>
  );
}
