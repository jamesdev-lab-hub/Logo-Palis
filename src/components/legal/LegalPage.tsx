import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import { legalLastUpdated } from "@/config/site";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Note that highlights business-specific details the owner must confirm. */
export function OwnerNote({ children }: { children: ReactNode }) {
  return (
    <span className="mt-3 flex gap-2 rounded-xl border border-amber-400 bg-amber-50 px-3.5 py-2.5 text-[14px] leading-relaxed text-ink">
      <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
      <span>
        <strong>Owner review needed:</strong> {children}
      </span>
    </span>
  );
}

export function LegalPage({ title, intro, sections }: { title: string; intro: ReactNode; sections: LegalSection[] }) {
  return (
    <div className="container-x pt-14 pb-24 md:pt-20">
      <header className="flex max-w-3xl flex-col gap-5">
        <p className="eyebrow text-accent-deep">Legal</p>
        <h1 className="text-[clamp(2.3rem,5vw,4rem)] leading-[1.04] font-bold">{title}</h1>
        <p className="text-[15px] font-medium text-muted">Last updated: {legalLastUpdated}</p>
        <div className="text-lg leading-relaxed text-muted">{intro}</div>
        
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[260px_1fr]">
        <nav aria-label="On this page" className="self-start lg:sticky lg:top-28">
          <p className="mb-3 text-[13px] font-bold tracking-[0.12em] uppercase">On this page</p>
          <ol className="flex flex-col gap-2 text-[15px]">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted underline-offset-4 hover:text-ink hover:underline">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="prose-legal max-w-3xl rounded-[28px] border border-line bg-white p-6 sm:p-10">
          {sections.map((s, i) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id} className={i === 0 ? "!mt-0" : ""}>
                {i + 1}. {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
