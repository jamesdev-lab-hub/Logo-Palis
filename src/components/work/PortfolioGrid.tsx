"use client";

import { useState } from "react";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/config/portfolio";
import { ProjectCard } from "./ProjectCard";

type Filter = "All" | PortfolioCategory;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...portfolioCategories];
  const visible = filter === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "All" ? portfolioProjects.length : portfolioProjects.filter((p) => p.category === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`min-h-11 rounded-full border-[1.5px] px-5 text-[15px] font-semibold transition ${
                active ? "border-ink bg-ink text-white" : "border-ink/15 bg-white hover:border-ink"
              }`}
            >
              {f} <span className={active ? "text-white/70" : "text-muted"}>({count})</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter === "All" ? "" : ` in ${filter}`}
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <div key={p.slug} className="animate-rise">
            <ProjectCard project={p} headingLevel="h2" />
          </div>
        ))}
      </div>
    </div>
  );
}
