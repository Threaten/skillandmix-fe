import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, formatDate } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} -- Skill & Mix`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* --- Article Hero --------------------------------------------------- */}
      <section className="bg-bar-black border-b border-surface-border px-6 md:px-10 lg:px-16 pt-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Back navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-widest uppercase text-ash hover:text-warm-white transition-colors duration-200 mb-12 group"
          >
            <span
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            >
              ←
            </span>
            All Articles
          </Link>

          {/* Metadata row */}
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-8">
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

          {/* Headline */}
          <h1
            className="font-display font-black text-warm-white"
            style={{
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              maxWidth: "14em",
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* --- Article Body --------------------------------------------------- */}
      <section className="bg-bar-black px-6 md:px-10 lg:px-16 py-16">
        <div className="mx-auto" style={{ maxWidth: "66ch" }}>
          {/* Excerpt as lede -- large scale creates contrast */}
          <p
            className="font-display font-black text-warm-white mb-10"
            style={{
              fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {post.excerpt}
          </p>

          {/* Divider */}
          <hr className="border-surface-border mb-10" />

          {/* Body paragraphs */}
          {post.body && post.body.length > 0 ? (
            <div className="space-y-6">
              {post.body.map((para, i) => (
                i === 1 && post.body!.length >= 3 ? (
                  /* Pull quote: second paragraph gets elevated scale */
                  <blockquote
                    key={i}
                    className="my-10 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16 py-10 bg-surface-raised border-y border-surface-border"
                  >
                    <p
                      className="font-display font-black text-warm-white"
                      style={{
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.15,
                        maxWidth: "22em",
                      }}
                    >
                      {para}
                    </p>
                  </blockquote>
                ) : (
                  <p key={i} className="text-base text-warm-white leading-[1.75]">
                    {para}
                  </p>
                )
              ))}
            </div>
          ) : (
            <p className="text-base text-ash leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </section>

      {/* --- More Articles --------------------------------------------------- */}
      {related.length > 0 && (
        <section className="bg-surface-raised border-t border-surface-border px-6 md:px-10 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-8 mb-12">
              <h2
                className="font-display font-black text-warm-white"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                More articles
              </h2>
              <Link
                href="/blog"
                className="font-mono text-[0.65rem] tracking-widest uppercase text-ash hover:text-warm-white transition-colors shrink-0"
              >
                All articles →
              </Link>
            </div>

            <ol className="divide-y divide-surface-border border border-surface-border" style={{ borderRadius: "3px", overflow: "hidden" }}>
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="flex items-start justify-between gap-8 px-6 py-5 bg-surface-raised hover:bg-bar-black transition-colors duration-200 group"
                  >
                    <div className="min-w-0">
                      <p className="font-mono text-[0.6rem] tracking-widest uppercase text-acid-green mb-2">
                        {p.category}
                      </p>
                      <p
                        className="font-display font-black text-warm-white group-hover:text-ash transition-colors duration-200"
                        style={{
                          fontSize: "clamp(1rem, 2vw, 1.3rem)",
                          letterSpacing: "-0.005em",
                          lineHeight: 1.1,
                        }}
                      >
                        {p.title}
                      </p>
                    </div>
                    <span
                      className="font-mono text-[0.65rem] text-ash shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 mt-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  );
}
