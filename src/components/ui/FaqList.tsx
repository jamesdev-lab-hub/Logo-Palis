import { Plus } from "lucide-react";
import type { Faq } from "@/config/faqs";

/** Accessible FAQ accordion using native <details>/<summary> — works with keyboard and without JavaScript. */
export function FaqList({ items, dark = false }: { items: Faq[]; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => (
        <details
          key={f.q}
          name="faq"
          open={i === 0}
          className={`group rounded-[22px] border ${dark ? "border-paper/10 bg-ink-soft text-paper" : "border-line bg-white"}`}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[22px] px-6 py-5 text-left text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <span
              aria-hidden="true"
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-open:rotate-45 ${dark ? "bg-paper/10" : "bg-paper"} group-open:bg-accent group-open:text-ink`}
            >
              <Plus className="h-5 w-5" />
            </span>
          </summary>
          <p className={`px-6 pb-6 leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
