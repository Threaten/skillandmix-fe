"use client";

import { useState } from "react";
import { courses, categories, allLevels } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");

  const filtered = courses.filter((c) => {
    const catMatch = activeCategory === "All" || c.category === activeCategory;
    const lvlMatch = activeLevel === "All" || c.level === activeLevel;
    return catMatch && lvlMatch;
  });

  const chipBase =
    "font-mono text-[0.65rem] font-medium tracking-[0.1em] uppercase px-3 py-2 border transition-all duration-200 cursor-pointer";
  const chipActive = "bg-acid-green border-acid-green text-warm-white";
  const chipInactive =
    "bg-transparent border-surface-border text-ash hover:border-warm-white hover:text-warm-white";

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 space-y-4">
        <div>
          <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-ash block mb-3">
            Category
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${chipBase} ${activeCategory === cat ? chipActive : chipInactive}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-ash block mb-3">
            Level
          </span>
          <div className="flex flex-wrap gap-2">
            {allLevels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`${chipBase} ${activeLevel === lvl ? chipActive : chipInactive}`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="font-mono text-[0.65rem] tracking-[0.08em] uppercase text-ash mb-6">
        {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Grid or empty state */}
      {filtered.length === 0 ? (
        <div
          className="py-24 text-center border border-surface-border"
          style={{ borderRadius: "3px" }}
        >
          <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash mb-3">
            No courses found
          </p>
          <p className="text-sm text-ash">
            Try clearing one of the filters above.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setActiveLevel("All");
            }}
            className="btn-ghost mt-6"
            style={{ padding: "10px 24px" }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
