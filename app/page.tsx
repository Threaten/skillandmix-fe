import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/courses";
import ImageStrip from "@/components/ImageStrip";
import Marquee from "@/components/Marquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const featured = courses.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* --- Hero ------- */}
      <section className="relative min-h-[100svh] bg-bar-black flex flex-col px-6 md:px-10 lg:px-16 pt-10 pb-10 grain overflow-hidden">
        {/* Hero image */}
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
          alt="Bartender crafting a cocktail"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-bar-black/70" />

        {/* Content — above image */}
        <div className="relative z-10 flex flex-col flex-1">
        {/* Top strip */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash">
            Professional Bartending Academy
          </span>
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash hidden sm:block">
            Ho Chi Minh, Vietnam
          </span>
        </div>

        {/* Headline block -- bottom-anchored */}
        <div className="max-w-7xl mx-auto w-full mt-auto pt-16">
          <h1
            className="font-display font-black text-warm-white uppercase"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 10rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">Become</span>
            <span
              className="block"
              style={{ paddingLeft: "clamp(0rem, 2vw, 3rem)" }}
            >
              the bartender
            </span>
            <span
              className="block text-outline"
              style={{ paddingLeft: "clamp(0rem, 4vw, 6rem)" }}
            >
              they remember.
            </span>
          </h1>

          {/* Sub-row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            <p
              className="text-base text-warm-white leading-relaxed"
              style={{ maxWidth: "48ch" }}
            >
              Professional mixology and bartending courses for serious learners.
              Technique-first, industry-standard, hands-on from day one.
            </p>
            <div className="flex flex-wrap gap-3 sm:justify-end">
              <Link href="/courses" className="btn-primary">
                Explore Courses →
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom metadata strip */}
        <div className="max-w-7xl mx-auto w-full mt-10 pt-5 border-t border-surface-border flex flex-col sm:flex-row justify-between gap-2">
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash">
            {courses.length} Courses Available
          </span>
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash">
            Scroll →
          </span>
        </div>
        </div>{/* end relative z-10 */}
      </section>

      {/* --- Marquee separator --------------------------------------------- */}
      <Marquee />

      {/* --- Image strip ---------------------------------------------------- */}
      <ImageStrip />

      {/* --- Why Skill & Mix -- 3 distinct blocks --------------------------- */}
      <section className="bg-bar-black">
        {/* Block 1 -- Spirits-label ruled box: TECHNIQUE FIRST */}
        <div className="px-6 md:px-10 lg:px-16 py-20 reveal border-t border-surface-border">
          <div className="max-w-7xl mx-auto">
            <span
              className="font-mono uppercase text-ash block mb-10"
              style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
            >
              Why Skill &amp; Mix -- 01
            </span>
            {/* Ruled box */}
            <div
              className="relative"
              style={{
                border: "1px solid var(--warm-white)",
                padding: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              {/* Corner ticks */}
              <span
                className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ember-red"
                style={{ marginTop: "-1px", marginLeft: "-1px" }}
              />
              <span
                className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ember-red"
                style={{ marginTop: "-1px", marginRight: "-1px" }}
              />
              <span
                className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-ember-red"
                style={{ marginBottom: "-1px", marginLeft: "-1px" }}
              />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ember-red"
                style={{ marginBottom: "-1px", marginRight: "-1px" }}
              />

              <h3
                className="font-display font-black text-warm-white uppercase text-outline"
                style={{
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  lineHeight: 0.86,
                  letterSpacing: "-0.03em",
                }}
              >
                Technique
              </h3>
              <h3
                className="font-display font-black uppercase"
                style={{
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  lineHeight: 0.86,
                  letterSpacing: "-0.03em",
                  color: "var(--ember-text)",
                }}
              >
                First.
              </h3>

              {/* Ruled separator */}
              <div
                className="my-8"
                style={{ borderTop: "1px solid var(--surface-border)" }}
              />

              {/* 4-column ingredient list */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Method", val: "Technique-first" },
                  { label: "Outcome", val: "Muscle memory" },
                  { label: "Format", val: "Hands-on" },
                  { label: "Theory", val: "Minimal" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span
                      className="font-mono uppercase text-ash"
                      style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-mono uppercase text-warm-white"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Block 2 -- Maximum negative space: the slash */}
        <div
          className="reveal border-t border-surface-border overflow-hidden"
          style={{
            minHeight: "clamp(14rem, 32vh, 28rem)",
            position: "relative",
          }}
        >
          {/* Massive wine-red slash */}
          <span
            className="font-display font-black select-none pointer-events-none absolute"
            aria-hidden="true"
            style={{
              fontSize: "clamp(18rem, 50vw, 40rem)",
              lineHeight: 0.75,
              color: "var(--ember-text)",
              top: "-0.1em",
              left: "-0.05em",
              letterSpacing: "-0.04em",
              opacity: 0.85,
            }}
          >
            /
          </span>
          {/* Label -- bottom right */}
          <div className="absolute bottom-8 right-6 md:right-10 lg:right-16 text-right">
            <span
              className="font-mono uppercase text-ash block"
              style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}
            >
              Why Skill &amp; Mix -- 02
            </span>
            <span
              className="font-mono uppercase text-warm-white block mt-1"
              style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}
            >
              Working Instructors
            </span>
            <p
              className="text-warm-white mt-2 leading-relaxed"
              style={{ fontSize: "0.85rem", maxWidth: "28ch" }}
            >
              Taught by bartenders active in the industry -- not retired, not
              theoretical.
            </p>
          </div>
        </div>

        {/* Block 3 -- Swiss split: INDUSTRY / STANDARD */}
        <div className="reveal border-t border-surface-border border-b border-surface-border">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 12px 1fr",
              minHeight: "clamp(12rem, 28vh, 24rem)",
            }}
          >
            {/* Left: INDUSTRY */}
            <div className="flex flex-col justify-end px-6 md:px-10 lg:px-16 py-14">
              <span
                className="font-mono uppercase text-ash block mb-6"
                style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}
              >
                Why Skill &amp; Mix -- 03
              </span>
              <h3
                className="font-display font-black text-warm-white uppercase"
                style={{
                  fontSize: "clamp(3rem, 9vw, 8rem)",
                  lineHeight: 0.87,
                  letterSpacing: "-0.03em",
                }}
              >
                Industry
              </h3>
            </div>

            {/* Thick center rule */}
            <div style={{ width: "12px", background: "var(--ember-text)" }} />

            {/* Right: STANDARD. */}
            <div className="flex flex-col justify-end px-6 md:px-10 lg:px-16 py-14">
              <h3
                className="font-display font-black uppercase"
                style={{
                  fontSize: "clamp(3rem, 9vw, 8rem)",
                  lineHeight: 0.87,
                  letterSpacing: "-0.03em",
                  color: "var(--ember-text)",
                }}
              >
                Standard.
              </h3>
              <p
                className="text-warm-white mt-5 leading-relaxed"
                style={{ fontSize: "0.9rem", maxWidth: "30ch" }}
              >
                Curriculum calibrated to what employers in the hospitality
                sector actually hire for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Course Preview -- announcement rows ---------------------------- */}
      <section className="bg-bar-black py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-baseline justify-between mb-0 pb-4 border-b border-surface-border">
            <h2
              className="font-display font-black text-warm-white uppercase reveal"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              What we teach
            </h2>
            <Link
              href="/courses"
              className="font-mono uppercase text-ash hover:text-warm-white transition-colors"
              style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
            >
              All courses →
            </Link>
          </div>

          {/* Course rows */}
          {featured.map((course, i) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group flex items-center justify-between gap-6 py-6 border-b border-surface-border hover:bg-ember-red reveal transition-none"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              {/* Index */}
              <span
                className="font-display font-black shrink-0 transition-colors duration-0 group-hover:text-warm-white"
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "var(--ember-text)",
                  minWidth: "3ch",
                }}
              >
                0{i + 1}
              </span>

              {/* Title */}
              <h3
                className="font-display font-black text-warm-white uppercase flex-1 group-hover:text-warm-white"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.95,
                }}
              >
                {course.title}
              </h3>

              {/* Meta -- right */}
              <div className="text-right shrink-0 hidden sm:block">
                <span
                  className="font-mono uppercase text-ash group-hover:text-warm-white/70 block"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
                >
                  {course.duration}
                </span>
                <span
                  className="font-mono uppercase text-ash group-hover:text-warm-white/70 block"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
                >
                  {course.level}
                </span>
                <span
                  className="font-mono uppercase text-ash group-hover:text-warm-white/70 block mt-1"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Testimonial carousel ----------------------------------------- */}
      <TestimonialCarousel />

      {/* --- CTA section --------------------------------------------------- */}
      <section className="bg-bar-black overflow-hidden border-b border-surface-border">
        <div className="px-6 md:px-10 lg:px-16 pt-24 pb-10">
          <span
            className="font-mono uppercase text-ash block mb-10"
            style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
          >
            Ready when you are
          </span>
          <h2
            className="font-display font-black text-warm-white uppercase"
            style={{
              fontSize: "clamp(4rem, 13vw, 11rem)",
              letterSpacing: "-0.035em",
              lineHeight: 0.85,
            }}
          >
            Enroll now.
            <br />
            <span className="text-outline">Work the bar.</span>
          </h2>
        </div>
        <div className="border-t border-surface-border px-6 md:px-10 lg:px-16 py-8 flex flex-wrap gap-3">
          <Link href="/courses" className="btn-primary">
            Browse Courses →
          </Link>
          <Link href="/contact" className="btn-ghost">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
