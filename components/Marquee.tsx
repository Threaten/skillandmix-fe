const items = [
  "Classic Cocktail Fundamentals",
  "Espresso & Coffee",
  "Advanced Spirits Knowledge",
  "Knife Skills & Culinary",
  "Flair Bartending",
  "Specialty Coffee & Sensory",
  "Bar Management",
  "Sauce Work & Flavour",
  "Wine & Pairing",
  "F&B Professional Certification",
];

export default function Marquee() {
  // Duplicate for seamless infinite loop
  const track = [...items, ...items];

  return (
    <div
      className="marquee-container overflow-hidden border-y border-surface-border py-3 bg-bar-black"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ember-text px-1">
              {item}
            </span>
            <span className="font-mono text-[0.6rem] text-surface-border px-4">
              →
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
