import type { Metadata } from "next";
import CoursesGrid from "@/components/CoursesGrid";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses -- Skill & Mix",
  description:
    "Browse professional bartending, mixology, spirits, and F&B management courses at Skill & Mix. Filter by category and level.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-bar-black border-b border-surface-border px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ash block mb-4">
                All Courses
              </span>
              <h1
                className="font-display font-black text-warm-white"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                }}
              >
                <span className="block">Learn the</span>
                <span className="block text-outline">craft.</span>
              </h1>
              <p
                className="mt-6 text-base text-warm-white leading-relaxed"
                style={{ maxWidth: "52ch" }}
              >
                Six courses across mixology, spirits, flair, management, and
                wine. Filter by category or level to find yours.
              </p>
            </div>
            {/* Large course count as structural layout element */}
            <span
              className="font-display font-black hidden lg:block select-none shrink-0"
              aria-hidden="true"
              style={{
                fontSize: "clamp(6rem, 12vw, 10rem)",
                color: "var(--ash)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              0{courses.length}
            </span>
          </div>
        </div>
      </section>

      {/* Courses grid with client-side filtering */}
      <section className="bg-bar-black px-6 md:px-10 lg:px-16 py-14">
        <div className="max-w-7xl mx-auto">
          <CoursesGrid />
        </div>
      </section>
    </>
  );
}
