"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bar-black border-b border-surface-border">
      <div style={{ height: "3px", background: "var(--ember-text)" }} aria-hidden="true" />
      {/* Desktop -- asymmetric: massive brand left, tiny links right */}
      <div className="hidden md:flex items-center justify-between px-6 md:px-10 h-20">
        <Link
          href="/"
          className="font-display font-black text-warm-white uppercase leading-none"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Skill &amp; Mix
        </Link>

        <nav className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono uppercase transition-colors duration-200"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: pathname.startsWith(link.href)
                  ? "var(--warm-white)"
                  : "var(--ash)",
                borderBottom: pathname.startsWith(link.href)
                  ? "1px solid var(--ember-red)"
                  : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile -- brand mark + burger only */}
      <div className="md:hidden flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className="font-display font-black text-warm-white uppercase"
          style={{
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Skill &amp; Mix
        </Link>

        <button
          className="flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className="block bg-warm-white transition-all duration-300"
            style={{
              width: "24px",
              height: "1.5px",
              transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block bg-warm-white transition-all duration-300"
            style={{ width: "24px", height: "1.5px", opacity: open ? 0 : 1 }}
          />
          <span
            className="block bg-warm-white transition-all duration-300"
            style={{
              width: "24px",
              height: "1.5px",
              transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile full-screen takeover */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#130D0C] z-50 flex flex-col px-6 pt-16 pb-12">
          <nav className="flex flex-col gap-0 flex-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-black text-warm-white uppercase border-b border-surface-border py-8 leading-none hover:text-ember-text transition-colors duration-200"
                style={{
                  fontSize: "clamp(3rem, 12vw, 5rem)",
                  letterSpacing: "-0.025em",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/courses"
            className="btn-primary w-full justify-center mt-10"
            onClick={() => setOpen(false)}
          >
            Enroll Now →
          </Link>
        </div>
      )}
    </header>
  );
}
