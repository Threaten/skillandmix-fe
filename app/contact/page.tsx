import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact -- Skill & Mix",
  description:
    "Get in touch with Skill & Mix -- inquire about courses, enrollment, and scheduling.",
};

const info = [
  { label: "Email", value: "hello@skillandmix.com" },
  { label: "Phone", value: "+84 (0) 000 000 000" },
  { label: "Address", value: "Hanoi, Vietnam" },
  { label: "Hours", value: "Mon–Fri, 9 am – 6 pm ICT" },
];

export default function ContactPage() {
  return (
    <>
      {/* Full-bleed hero image */}
      <div
        className="relative w-full overflow-hidden border-b border-surface-border"
        style={{ height: "clamp(18rem, 38vh, 30rem)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text legibility on header below */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-bar-black/60" />
      </div>

      {/* Page header */}
      <section className="bg-bar-black border-b border-surface-border px-6 md:px-10 lg:px-16 pt-14 pb-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash block mb-4">
            Get in Touch
          </span>
          <h1
            className="font-display font-black text-warm-white"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}
          >
            <span className="block">Ask us</span>
            <span className="block text-outline">anything.</span>
          </h1>
          <p
            className="mt-6 text-base text-warm-white leading-relaxed"
            style={{ maxWidth: "52ch" }}
          >
            Enrollment questions, scheduling, corporate training, or just
            curious about the curriculum. We read everything.
          </p>
        </div>
      </section>

      {/* Body: info + form */}
      <section className="bg-bar-black px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-14 lg:gap-20">
          {/* Contact info -- appears first on mobile */}
          <div className="order-first lg:order-0">
            <h2
              className="font-display font-black text-warm-white mb-8"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              Direct info
            </h2>
            <dl
              className="space-y-0 divide-y divide-surface-border border-t-[3px] border-warm-white"
              style={{ overflow: "hidden" }}
            >
              {info.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 bg-bar-black"
                >
                  <dt className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-ash">
                    {label}
                  </dt>
                  <dd className="text-sm text-warm-white">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p
                className="font-display font-black text-warm-white"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                }}
              >
                We reply within 1&ndash;2 business days.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2
              className="font-display font-black text-warm-white mb-8"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              Send a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
