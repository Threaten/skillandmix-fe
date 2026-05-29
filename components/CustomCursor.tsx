"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = -100;
    let y = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => el.classList.add("cursor-large");
    const onLeave = () => el.classList.remove("cursor-large");

    const bind = () => {
      document
        .querySelectorAll("a, button, [role='button'], label")
        .forEach((node) => {
          node.addEventListener("mouseenter", onEnter);
          node.addEventListener("mouseleave", onLeave);
        });
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    bind();

    // Re-bind after navigation (content changes)
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}
