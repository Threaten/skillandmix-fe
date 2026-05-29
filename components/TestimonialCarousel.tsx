"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "The fundamentals they teach here aren't available anywhere else in the city. Three months in, I had a job.",
    name: "Ly Tran",
    year: "2025",
  },
  {
    quote:
      "I came in knowing nothing. Left with technique, theory, and a position at one of the best hotel bars in Saigon.",
    name: "Minh Khoa Nguyen",
    year: "2024",
  },
  {
    quote:
      "Every session felt like real bar service. The instructors don't just teach — they hold you to a standard.",
    name: "Thu Ha Pham",
    year: "2025",
  },
  {
    quote:
      "Worth every hour. The spirits module alone changed how I think about flavour. I recommend it to everyone.",
    name: "Dang Quoc Bao",
    year: "2024",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive((next + testimonials.length) % testimonials.length);
        setAnimating(false);
      }, 250);
    },
    [animating]
  );

  // Auto-advance every 6 s; pauses when tab is hidden
  useEffect(() => {
    const id = setInterval(() => go(active + 1), 6000);
    return () => clearInterval(id);
  }, [active, go]);

  const t = testimonials[active];

  return (
    <section
      className="bg-ember-red py-20 px-6 md:px-10 lg:px-16 grain overflow-hidden relative"
      aria-roledescription="carousel"
      aria-label="Graduate testimonials"
    >
      {/* Decorative quote glyph */}
      <span
        className="font-display font-black select-none pointer-events-none absolute"
        aria-hidden="true"
        style={{
          fontSize: "clamp(18rem, 40vw, 32rem)",
          lineHeight: 1,
          color: "oklch(95% 0.004 15 / 0.07)",
          top: "-0.1em",
          right: "-0.05em",
        }}
      >
        &ldquo;
      </span>

      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-baseline justify-between mb-8">
          <span
            className="font-mono uppercase"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "oklch(95% 0.004 15 / 0.5)",
            }}
          >
            Graduate Feedback
          </span>
          <span
            className="font-mono uppercase"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "oklch(95% 0.004 15 / 0.35)",
            }}
          >
            {active + 1} / {testimonials.length}
          </span>
        </div>

        {/* Quote — fades on transition */}
        <div
          style={{
            opacity: animating ? 0 : 1,
            transition: "opacity 250ms cubic-bezier(0.16, 1, 0.3, 1)",
            minHeight: "clamp(10rem, 22vh, 18rem)",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          <blockquote>
            <p
              className="font-display font-black text-warm-white"
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                maxWidth: "20em",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-10">
              <cite
                className="font-mono uppercase not-italic"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "oklch(95% 0.004 15 / 0.65)",
                }}
              >
                {t.name}, Graduate {t.year}
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Controls — dots + arrows */}
        <div className="flex items-center gap-6 mt-12">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "3px",
                  background:
                    i === active
                      ? "oklch(95% 0.004 15 / 0.9)"
                      : "oklch(95% 0.004 15 / 0.3)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition:
                    "width 280ms cubic-bezier(0.16, 1, 0.3, 1), background 280ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous testimonial"
              className="font-mono uppercase"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "oklch(95% 0.004 15 / 0.55)",
                background: "none",
                border: "1px solid oklch(95% 0.004 15 / 0.2)",
                padding: "8px 16px",
                cursor: "pointer",
                transition: "color 200ms, border-color 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(95% 0.004 15 / 1)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(95% 0.004 15 / 0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(95% 0.004 15 / 0.55)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(95% 0.004 15 / 0.2)";
              }}
            >
              ←
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next testimonial"
              className="font-mono uppercase"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "oklch(95% 0.004 15 / 0.55)",
                background: "none",
                border: "1px solid oklch(95% 0.004 15 / 0.2)",
                padding: "8px 16px",
                cursor: "pointer",
                transition: "color 200ms, border-color 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(95% 0.004 15 / 1)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(95% 0.004 15 / 0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(95% 0.004 15 / 0.55)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(95% 0.004 15 / 0.2)";
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
