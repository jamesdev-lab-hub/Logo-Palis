import { Info } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { PortfolioGrid } from "@/components/work/PortfolioGrid";

export const metadata = pageMetadata({
  title: "Work: Logo, Branding & Website Design Portfolio",
  description:
    "Browse Logo Palace concept projects across branding, websites, e-commerce, UI/UX, and graphic design to see our design style.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Design that looks good <span className="text-accent-deep">and works hard.</span>
          </>
        }
        intro="Explore a selection of branding, website, e-commerce, and graphic design work. Filter by category to find projects similar to yours."
      />
      <section aria-label="Portfolio" className="container-x pb-8">
        <PortfolioGrid />
      </section>
      <CtaBand
        title="Want your business here next?"
        text="Share your goals and we'll put together a plan for your logo, brand, or website."
      />
    </>
  );
}
