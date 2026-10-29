import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-start gap-6 py-28">
      <p className="eyebrow text-accent-deep">Error 404</p>
      <h1 className="text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] font-bold">We couldn&apos;t find that page.</h1>
      <p className="max-w-xl text-lg text-muted">The page may have moved, or the link may be incorrect.</p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/">
          Back to home <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </section>
  );
}
