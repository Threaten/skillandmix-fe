import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-raised" style={{ borderTop: "4px solid var(--ember-text)" }}>
      {/* Massive brand mark — editorial footer anchor */}
      <div className="px-6 md:px-10 pt-12 pb-8 border-b border-surface-border overflow-hidden">
        <span
          className="font-display font-black text-warm-white uppercase block"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          Skill &amp; Mix
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p
            className="text-sm text-ash leading-relaxed"
            style={{ maxWidth: "28ch" }}
          >
            Professional mixology and bartending training for the working bar.
          </p>
        </div>

        <div>
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash block mb-4">
            Navigate
          </span>
          <nav className="flex flex-col gap-2.5">
            {[
              { href: "/courses", label: "Courses" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ash hover:text-warm-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash block mb-4">
            Contact
          </span>
          <address className="not-italic text-sm text-ash leading-loose">
            hello@skillandmix.com
            <br />
            +84 (0) 000 000 000
          </address>
        </div>
      </div>

      <div className="border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[0.65rem] text-ash tracking-[0.08em] uppercase">
            © 2026 Skill &amp; Mix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
