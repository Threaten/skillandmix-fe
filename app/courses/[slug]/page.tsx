import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/courses";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} -- Skill & Mix`,
    description: course.hook,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      {/* --- Full-bleed course image ----------------------------------------- */}
      <div
        className="relative w-full overflow-hidden border-b border-surface-border"
        style={{ height: "clamp(20rem, 42vh, 34rem)" }}
      >
        <Image
          src={course.image}
          alt={`${course.title} -- Skill & Mix`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-bar-black/70 via-bar-black/20 to-transparent" />
      </div>

      {/* --- Course Hero ---------------------------------------------------- */}
      <section className="bg-bar-black border-b border-surface-border px-6 md:px-10 lg:px-16 pt-12 pb-14">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.08em] uppercase text-ash">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-warm-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-warm-white truncate" aria-current="page">
                {course.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
            {/* Main info */}
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-acid-green mb-5">
                {course.category} · {course.level} · {course.duration}
              </p>
              <h1
                className="font-display font-black text-warm-white mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.95,
                }}
              >
                {course.title}
              </h1>
              <p
                className="text-base text-ash leading-relaxed"
                style={{ maxWidth: "56ch" }}
              >
                {course.hook}
              </p>
            </div>

            {/* Enrollment sidebar (mobile: inline; desktop: hidden -- sticky sidebar in body takes over) */}
            <div
              className="lg:hidden bg-surface-raised border border-surface-border p-6"
              style={{ borderRadius: "3px" }}
            >
              <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash mb-4">
                Enrollment
              </p>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { label: "Duration", value: course.duration },
                  { label: "Level", value: course.level },
                  { label: "Category", value: course.category },
                  { label: "Pricing", value: course.price },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-baseline gap-4 border-b border-surface-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-ash">
                      {label}
                    </span>
                    <span className="text-sm text-warm-white text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
              >
                Inquire Now →
              </Link>
              <p className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-ash text-center mt-4">
                No commitment. We&rsquo;ll reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Body Content --------------------------------------------------- */}
      <section className="bg-bar-black px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
          <div className="space-y-14">
            {/* Curriculum */}
            <div>
              <h2
                className="font-display font-black text-warm-white mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                What you&rsquo;ll learn
              </h2>
              <ol
                className="space-y-0 divide-y divide-surface-border border-t-[3px] border-warm-white"
                style={{ overflow: "hidden" }}
              >
                {course.modules.map((module, i) => (
                  <li
                    key={module}
                    className="flex items-start gap-5 py-4 bg-bar-black"
                  >
                    <span className="font-mono text-[0.6rem] tracking-[0.08em] text-acid-green mt-0.5 shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-warm-white leading-relaxed">
                      {module}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Instructor */}
            <div>
              <h2
                className="font-display font-black text-warm-white mb-6"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                Instructor
              </h2>
              <div className="border-t-[3px] border-warm-white pt-5">
                <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-acid-green mb-2">
                  {course.instructor.name}
                </p>
                <p className="text-sm text-ash leading-relaxed">
                  {course.instructor.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop sticky sidebar -- repeats enroll CTA */}
          <div className="hidden lg:block border-t-[3px] border-warm-white pt-6 sticky top-24">
            <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash mb-4">
              Enrollment
            </p>
            <div className="flex flex-col gap-0 divide-y divide-surface-border mb-6">
              {[
                { label: "Duration", value: course.duration },
                { label: "Level", value: course.level },
                { label: "Category", value: course.category },
                { label: "Pricing", value: course.price },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-baseline gap-4 py-3"
                >
                  <span className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-ash">
                    {label}
                  </span>
                  <span className="text-sm text-warm-white text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary w-full justify-center">
              Inquire Now →
            </Link>
            <p className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-ash text-center mt-4">
              No commitment. We&rsquo;ll reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* --- More Courses --------------------------------------------------- */}
      <section className="bg-surface-raised border-t border-surface-border px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash mb-2">
              Browse the full catalogue
            </p>
            <h2
              className="font-display font-black text-warm-white"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              More courses →
            </h2>
          </div>
          <Link href="/courses" className="btn-ghost shrink-0">
            View All Courses
          </Link>
        </div>
      </section>
    </>
  );
}
