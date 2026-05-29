import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group border-t-[3px] border-warm-white flex flex-col gap-4 pt-5">
      <div
        className="relative overflow-hidden bg-surface-border"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={course.image}
          alt={`${course.title} -- bartending course at Skill & Mix`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <p className="font-mono text-[0.65rem] font-medium tracking-widest uppercase text-acid-green">
          {course.category} · {course.level} · {course.duration}
        </p>
        <h3
          className="font-display font-black text-warm-white leading-none"
          style={{
            fontSize: "clamp(1.4rem, 2.8vw, 1.85rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {course.title}
        </h3>
        <p
          className="text-sm text-ash leading-relaxed flex-1"
          style={{ maxWidth: "52ch" }}
        >
          {course.hook}
        </p>
        <Link
          href={`/courses/${course.slug}`}
          className="mt-1 inline-flex items-center gap-2 font-mono text-[0.65rem] font-medium tracking-widest uppercase text-warm-white group/link w-fit"
        >
          <span>View Course</span>
          <span
            className="transition-transform duration-300 ease-out group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
