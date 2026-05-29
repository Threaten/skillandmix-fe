// Decorative full-bleed horizontal image strip — replaces the text marquee.
// All images already whitelisted via next.config.ts remotePatterns.

const images = [
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=900&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=75",
    alt: "",
  },
];

// Duplicate for seamless infinite scroll loop
const doubled = [...images, ...images];

export default function ImageStrip() {
  return (
    <div
      className="image-strip-container w-full overflow-hidden border-y border-surface-border"
      style={{ height: "clamp(14rem, 28vh, 22rem)" }}
      aria-hidden="true"
    >
      <div className="image-strip-track h-full">
        {doubled.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="h-full object-cover shrink-0 block"
            style={{ width: "clamp(260px, 36vw, 480px)" }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
