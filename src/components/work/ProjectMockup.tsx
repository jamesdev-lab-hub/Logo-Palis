import Image from "next/image";
import type { PortfolioProject } from "@/config/portfolio";

/**
 * Illustrated mockup for a project, drawn with CSS so it stays crisp and lightweight.
 * If the project has an `image`, a real optimized image is shown instead.
 */
export function ProjectMockup({ project }: { project: PortfolioProject }) {
  const { bg, fg, accent } = project.palette;
  const initials = project.name
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  if (project.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.category.toLowerCase()} project`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Illustrated ${project.category.toLowerCase()} mockup for the ${project.name} concept project`}
      className="relative aspect-[4/3] overflow-hidden"
      style={{ background: bg, color: fg }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        {project.mockup === "logo" && (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <div
              className="grid h-24 w-24 place-items-center rounded-[28px] font-display text-3xl font-bold"
              style={{ background: accent, color: bg }}
            >
              {initials}
            </div>
            <span className="font-display text-xl font-bold tracking-tight">{project.name}</span>
            <div className="mt-2 flex gap-2">
              {[accent, fg, bg].map((c, i) => (
                <span key={i} className="h-5 w-5 rounded-full ring-2 ring-white/40" style={{ background: c }} />
              ))}
            </div>
          </div>
        )}

        {project.mockup === "browser" && (
          <div className="absolute inset-x-[8%] top-[12%] bottom-0 overflow-hidden rounded-t-2xl bg-white/95 shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2">
              {["#FF6159", "#FFBD2E", "#28C941"].map((c) => (
                <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="p-4" style={{ color: bg }}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold">{project.name}</span>
                <span className="h-4 w-12 rounded-full" style={{ background: accent }} />
              </div>
              <div className="mt-4 h-3 w-3/4 rounded-full" style={{ background: bg }} />
              <div className="mt-2 h-3 w-1/2 rounded-full" style={{ background: bg, opacity: 0.8 }} />
              <div className="mt-3 h-2 w-2/3 rounded-full bg-black/10" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-12 rounded-lg" style={{ background: i === 1 ? accent : `${bg}22` }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {project.mockup === "store" && (
          <div className="flex h-full items-center justify-center gap-3 px-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`flex w-1/3 flex-col gap-2 rounded-2xl bg-white/90 p-2 shadow-xl ${i === 1 ? "-translate-y-3" : "translate-y-2"}`}
              >
                <div
                  className="grid aspect-square place-items-center rounded-xl"
                  style={{ background: i === 1 ? accent : `${fg}18` }}
                >
                  <div className="h-1/2 w-1/3 rounded-t-full rounded-b-lg" style={{ background: fg }} />
                </div>
                <div className="h-1.5 w-3/4 rounded-full" style={{ background: fg, opacity: 0.6 }} />
                <div className="h-1.5 w-1/3 rounded-full" style={{ background: accent }} />
              </div>
            ))}
          </div>
        )}

        {project.mockup === "app" && (
          <div className="flex h-full items-center justify-center gap-4">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`flex h-[78%] w-[26%] flex-col gap-2 rounded-[22px] border-4 border-black/60 bg-white/95 p-2.5 shadow-2xl ${i ? "translate-y-5" : ""}`}
                style={{ color: bg }}
              >
                <div className="mx-auto h-1 w-6 rounded-full bg-black/20" />
                <div className="h-2 w-2/3 rounded-full" style={{ background: bg }} />
                <div className="rounded-xl p-2" style={{ background: accent }}>
                  <div className="h-1.5 w-1/2 rounded-full bg-white/80" />
                  <div className="mt-1.5 h-4 w-3/4 rounded bg-white/90" />
                </div>
                {[0, 1, 2].map((j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <span className="h-4 w-4 rounded-md" style={{ background: `${bg}30` }} />
                    <span className="h-1.5 flex-1 rounded-full bg-black/10" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {project.mockup === "poster" && (
          <div className="flex h-full items-center justify-center gap-4 px-6">
            <div
              className="flex h-[80%] w-[42%] -rotate-3 flex-col justify-between rounded-xl p-3 shadow-2xl"
              style={{ background: fg, color: bg }}
            >
              <span className="h-8 w-8 rounded-full" style={{ background: accent }} />
              <span className="font-display text-[15px] leading-tight font-bold">{project.name}</span>
            </div>
            <div
              className="grid h-[52%] w-[34%] rotate-3 place-items-center rounded-xl p-3 shadow-2xl"
              style={{ background: accent, color: fg }}
            >
              <span className="font-display text-2xl font-bold">{initials}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
