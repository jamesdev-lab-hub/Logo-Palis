import type { PortfolioProject } from "@/config/portfolio";
import { ProjectMockup } from "./ProjectMockup";

export function ProjectCard({ project, headingLevel = "h3" }: { project: PortfolioProject; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group lift flex flex-col overflow-hidden rounded-[26px] border border-line bg-white">
      <ProjectMockup project={project} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold">
          <span className="rounded-full bg-paper px-3 py-1">{project.category}</span>
          {project.concept && (
            <span className="rounded-full border border-ink/15 px-3 py-1 text-muted">Concept project</span>
          )}
        </div>
        <Heading className="text-xl font-bold">{project.name}</Heading>
        <p className="text-[15px] leading-relaxed text-muted">{project.description}</p>
        <p className="mt-auto pt-2 text-[13px] font-medium text-muted">{project.services.join(" · ")}</p>
      </div>
    </article>
  );
}
