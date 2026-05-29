import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog -- Skill & Mix",
  description:
    "Techniques, spirits knowledge, industry tips, and career advice from the Skill & Mix team.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Page header */}
      <section className="bg-bar-black border-b border-surface-border px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ash block mb-4">
                From the Academy
              </span>
              <h1
                className="font-display font-black text-warm-white"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                }}
              >
                <span className="block">The Bar</span>
                <span className="block text-outline">Notes.</span>
              </h1>
              <p className="mt-6 text-base text-warm-white leading-relaxed" style={{ maxWidth: "52ch" }}>
                Technique, spirits knowledge, industry thinking, and career advice.
                Written by the people who teach here.
              </p>
            </div>
            {/* Large post count as structural layout element */}
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
              0{posts.length}
            </span>
          </div>
        </div>
      </section>

      {/* Featured first post -- editorial image+text grid */}
      {featured && (
        <section className="bg-bar-black border-b border-surface-border">
          <div className="max-w-7xl mx-auto">
            <div className="px-6 md:px-10 lg:px-16 pt-12 pb-0">
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ash block mb-8">
                Latest
              </span>
            </div>
            <article className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image column */}
              {featured.image && (
                <div
                  className="relative overflow-hidden bg-surface-border order-last lg:order-first"
                  style={{ minHeight: "clamp(18rem, 44vh, 36rem)" }}
                >
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-bar-black/30" />
                </div>
              )}
              {/* Content column */}
              <div className="flex flex-col justify-end gap-6 px-6 md:px-10 lg:px-12 py-12">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="font-mono text-[0.65rem] tracking-widest uppercase text-acid-green">
                    {featured.category}
                  </span>
                  <time
                    dateTime={featured.date}
                    className="font-mono text-[0.65rem] tracking-widest uppercase text-ash"
                  >
                    {formatDate(featured.date)}
                  </time>
                  <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ash">
                    {featured.readTime}
                  </span>
                </div>
                <h2
                  className="font-display font-black text-warm-white"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 0.95,
                    maxWidth: "14em",
                  }}
                >
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="hover:text-ash transition-colors duration-200"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-base text-warm-white leading-relaxed" style={{ maxWidth: "52ch" }}>
                  {featured.excerpt}
                </p>
                <Link href={`/blog/${featured.slug}`} className="btn-primary w-fit">
                  Read Article →
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Remaining posts -- compact list */}
      {rest.length > 0 && (
        <section className="bg-bar-black px-6 md:px-10 lg:px-16 py-14">
          <div className="max-w-5xl mx-auto">
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ash block mb-8">
              All Articles
            </span>
            <ol className="divide-y divide-surface-border" aria-label="More articles">
              {rest.map((post) => (
                <li key={post.slug} className="py-7 first:pt-0 last:pb-0 group">
                  <article>
                    <Link href={`/blog/${post.slug}`} className="flex items-start gap-5">
                      {/* Thumbnail */}
                      {post.image && (
                        <div className="relative shrink-0 overflow-hidden bg-surface-border" style={{ width: 80, height: 80, borderRadius: "3px" }}>
                          <Image
                            src={post.image}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                          <span className="font-mono text-[0.65rem] tracking-widest uppercase text-acid-green">
                            {post.category}
                          </span>
                          <time
                            dateTime={post.date}
                            className="font-mono text-[0.65rem] tracking-widest uppercase text-ash"
                          >
                            {formatDate(post.date)}
                          </time>
                          <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ash">
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-6">
                          <h2
                            className="font-display font-black text-warm-white group-hover:text-ash transition-colors duration-200"
                            style={{
                              fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
                              letterSpacing: "-0.01em",
                              lineHeight: 1.05,
                            }}
                          >
                            {post.title}
                          </h2>
                          <span
                            className="font-mono text-[0.65rem] tracking-widest text-ash shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 mt-1"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  );
}

