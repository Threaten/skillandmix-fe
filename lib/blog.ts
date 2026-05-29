export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string;
  body?: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-taste-spirits-like-a-professional",
    title: "How to Taste Spirits Like a Professional",
    date: "2026-04-15",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "Aroma, palate, finish — the tasting grid that turns guessing into knowledge. A practical guide to evaluating what's in the glass, whether it's your first pour or your hundredth.",
    category: "Spirits",
    readTime: "6 min read",
    body: [
      "Most people approach a glass of spirits the way they approach a glass of water: they drink it. Tasting is different. It is a structured act of attention, and it starts before the liquid touches your lips.",
      "The tasting grid used by trained professionals has three points of evaluation: nose, palate, and finish. On the nose, hold the glass at chest height first, then slowly bring it to your face. Rushing the approach numbs your receptors before you have assessed anything. What you are looking for: the primary character (the distillate), the secondary notes (wood, time, fermentation), and the tertiary surprises underneath.",
      "On the palate, the first sip should be small and deliberate. Hold it in your mouth for three to five seconds before swallowing. Your tongue maps the spirit spatially: sweetness registers at the tip, acidity at the sides, bitterness at the back. Do not force metaphor. If the first descriptor that comes to mind is vanilla, say vanilla. Accuracy beats eloquence.",
      "The finish is where a spirit announces its quality. A short finish is not a failure, but an interesting one tells you something about complexity: heat that resolves cleanly, a secondary note that arrives late, a texture that lingers. Learn to read the finish as an afterword to the palate, not just the tail end of drinking.",
    ],
  },
  {
    slug: "the-three-mistakes-beginners-make-behind-the-bar",
    title: "The Three Mistakes Beginners Make Behind the Bar",
    date: "2026-03-28",
    image:
      "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "After training hundreds of bartenders, the same patterns show up. Here's what separates the ones who stick from the ones who don't — and none of it is about talent.",
    category: "Training",
    readTime: "4 min read",
    body: [
      "Most of the errors we see in early-stage bartenders are not technique errors. They are attitude errors dressed up as technique errors. Here are three patterns we see repeatedly, and what they actually signal.",
      "Over-measurement. The student spends so long measuring that they lose the rhythm of service. Precision matters, but in professional bartending, precision is practiced until it becomes automatic. The goal is a pour that is accurate because the hand has learned it, not because every pour requires a full pause to check.",
      "Improvisation before fundamentals. A beginner learns a Negroni and immediately starts substituting ingredients. The canon exists because the ratios work. Understanding why they work: what the Campari does, why the vermouth balances the gin, is the prerequisite for any meaningful substitution. Freedom comes from mastery, not before it.",
      "Speed as a goal. New bartenders prioritize looking fast over being accurate. Speed is a byproduct of economy of motion, and it develops on its own as the movements become habitual. Chasing it artificially creates waste, spills, and errors. The fastest bartenders you have ever watched were never thinking about speed.",
    ],
  },
  {
    slug: "how-ice-changes-everything",
    title: "How Ice Changes Everything",
    date: "2026-03-10",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "Temperature, dilution, presentation: the role of ice is more technical and deliberate than most bartenders realize. A breakdown of what you're actually controlling when you reach for the ice bin.",
    category: "Technique",
    readTime: "5 min read",
    body: [
      "Ice is not a cold storage medium. It is an active ingredient with three functions: temperature reduction, dilution, and presentation. Treating it as the thing you add at the end, after the drink is built, is the most common structural mistake in beginner cocktail making.",
      "Temperature and dilution are inseparable. When you stir a Manhattan for twenty seconds, you are not just chilling the spirit: you are adding approximately 20 to 25ml of water from the ice melt. That water opens the cocktail, softens the alcohol bite, extends the aroma, and alters the mouthfeel. Too little dilution and the drink is sharp. Too much and it is flat.",
      "The type of ice matters. Large-format ice (2-inch cubes or spheres) has a lower surface area to volume ratio, which means it melts slower and dilutes less. Crushed ice melts fast and dilutes aggressively, useful in a julep, destructive in a stirred drink. Knowing which ice to reach for, and why, separates bartenders who understand the craft from those who follow recipes without understanding them.",
    ],
  },
  {
    slug: "building-a-cocktail-menu-from-scratch",
    title: "Building a Cocktail Menu from Scratch",
    date: "2026-02-20",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "Concept, costing, format, and the words that sell a cocktail before it arrives. A practical framework for bar programs at any scale — from a 6-drink bar cart to a 40-seat venue.",
    category: "Management",
    readTime: "8 min read",
    body: [
      "A cocktail menu is not a list of drinks. It is a document that expresses a bar program's identity, price point, audience, and skill level. A well-built menu makes decisions on behalf of the guest before they have spoken to anyone.",
      "Start with concept before you start with recipes. What is the bar trying to say? A menu at a whisky-focused venue with a full back bar speaks differently from a tight six-drink menu at a small-plates restaurant. Define the vocabulary before you write the sentences.",
      "On format: shorter menus sell better. Cognitive load increases with length, and guests who are overwhelmed order safe. If you have forty recipes you are proud of, put eight on the menu and rotate. The constraint forces editing, which forces quality.",
      "Copy matters as much as the drink. The description is the first moment of hospitality: the guest reads it before the drink arrives. Do not waste it on ingredient lists. Aged rum, lime, brown sugar tells the guest nothing they could not infer from the name. Tell them what it is like: the experience, the character, the occasion.",
    ],
  },
  {
    slug: "the-economics-of-the-bar",
    title: "The Economics of the Bar",
    date: "2026-01-14",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "Pour cost, waste control, yield management: what the hospitality industry doesn't teach bartenders, and why it matters the moment you step into a leadership role.",
    category: "Management",
    readTime: "7 min read",
    body: [
      "Bartenders learn to make drinks. They are rarely taught what those drinks cost. The gap between these two bodies of knowledge is where bar programs fail.",
      "Pour cost: the ratio of ingredient cost to selling price, is the foundational metric of bar economics. A 22% pour cost on a cocktail at a well-run venue means that for every $15 drink sold, $3.30 went to ingredients. The remaining $11.70 covers labor, overhead, rent, and margin. If that number is 30%, the math breaks.",
      "Waste is the most invisible cost. A heavy-handed pour over dozens of covers compounds into significant loss. A bartender who tastes every batch unnecessarily, overfills shakers, or overproduces garnish is quietly eroding margins in ways that rarely appear in any single transaction.",
      "Understanding these numbers does not make you a manager. It makes you a professional. The bartenders who move into leadership roles are the ones who understand what their decisions cost. That knowledge is not separate from craft. It is craft.",
    ],
  },

  // ── Barista ──────────────────────────────────────────────────────────────
  {
    slug: "what-extraction-actually-means",
    title: "What Extraction Actually Means",
    date: "2026-04-28",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "TDS, yield, brew ratio: the extraction numbers that every barista hears and most misunderstand. A clear breakdown of what you are measuring and why it changes everything about consistency.",
    category: "Coffee",
    readTime: "6 min read",
    body: [
      "Extraction is the process of dissolving soluble compounds from coffee grounds into water. Not all soluble compounds taste good, and not all of them dissolve at the same rate. The goal is a range: enough extraction to be complex and sweet, not so much that bitter and astringent compounds dominate.",
      "Extraction yield — the percentage of the coffee's dry mass that ends up in the cup — is the standard measure. Specialty coffee targets roughly 18 to 22 percent. Below 18, the coffee is likely sour and underdeveloped. Above 22, it starts to dry and bitter. These numbers are not rules; they are a diagnostic framework.",
      "Total dissolved solids, measured in parts per million or as a percentage, tells you the strength of the brew: how concentrated the extraction is. Yield and strength are related but not the same. You can have high strength and low yield (a short, concentrated pull of an under-extracted shot) or low strength and high yield (a long, diluted pour that has extracted efficiently but too much). Understanding both independently lets you diagnose a problem rather than just taste it.",
      "The practical lesson: when a shot tastes wrong, identify which variable moved. Grind size controls extraction rate. Dose and yield ratio control strength. Water temperature affects the speed at which different compounds dissolve. Tasting is diagnosis. Numbers confirm what the palate found.",
    ],
  },
  {
    slug: "vietnam-and-the-third-wave",
    title: "Vietnam and the Third Wave",
    date: "2026-03-18",
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "Vietnam is the second-largest coffee producer in the world and it is mostly overlooked by the specialty industry. That is changing — and the flavours it produces are unlike anywhere else.",
    category: "Coffee",
    readTime: "5 min read",
    body: [
      "Most of what Vietnam grows is Robusta: high-yield, disease-resistant, and traditionally associated with commercial blends and instant coffee. The specialty world built itself around Arabica, and for a long time that meant Vietnam was written off. The story is more complicated.",
      "In the highlands around Da Lat and Son La, a growing number of farmers are producing washed and natural-processed Arabica at altitudes that rival central American origins. The results are distinctive: the cup tends toward stone fruit and dark chocolate, with an earthiness that reflects the volcanic soil. It does not taste like Ethiopian or Colombian coffee. It tastes Vietnamese.",
      "The domestic market has also shifted. A decade ago, cà phê sữa đá was the dominant form: dark-roasted Robusta dripped through a phin filter, sweetened with condensed milk over ice. Today, specialty cafés are opening in Hanoi and Ho Chi Minh City with the same ambition as third-wave shops in Seoul or Melbourne. They are sourcing single-origin, dialling in espresso, and building a café culture around quality rather than caffeine delivery.",
      "For baristas and café operators, this matters practically. A Vietnamese Arabica from a quality-focused farm is not interchangeable with a Colombian washed. The processing, the variety, the altitude, and the soil all leave traces in the cup. Learning to taste and communicate those differences is the foundation of coffee literacy.",
    ],
  },

  // ── Culinary ─────────────────────────────────────────────────────────────
  {
    slug: "the-knife-is-not-about-sharpness",
    title: "The Knife Is Not About Sharpness",
    date: "2026-04-10",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "Every beginner thinks the problem with their knife is that it is not sharp enough. The real problem is almost always posture, grip, and the angle of the board hand. What sharpness actually does and does not solve.",
    category: "Culinary",
    readTime: "5 min read",
    body: [
      "A sharp knife matters. It is safer, more precise, and less fatiguing than a dull one. But sharpness alone does not teach your hand where to put the blade, how to use the knuckle as a guide, or how to keep the tip anchored while you rock through a herb. Those things are technique, and technique is what most beginner cooks are actually missing.",
      "The grip is the first problem. A pinch grip — thumb and index finger on the blade, not the handle — gives control and reduces fatigue. Most people grip the handle like a door handle. That extra distance from the blade means every micro-correction in angle travels a longer mechanical path. The cut becomes imprecise and tiring.",
      "The board hand matters more than the knife hand. The guiding hand, fingers curled under in a claw position, controls speed and width. If you cut uneven slices, the board hand is the issue. The knife only goes where you put it. A sharp knife held badly produces the same inconsistency as a dull one.",
      "The practical consequence of learning this: a student who masters posture and grip with a decent knife will outwork someone with an expensive knife and no technique. Invest in the body mechanics first. The knife quality becomes meaningful later, when the fundamentals are habitual.",
    ],
  },
  {
    slug: "stock-is-not-optional",
    title: "Stock Is Not Optional",
    date: "2026-02-05",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=75",
    excerpt:
      "The argument for making your own stock in a professional kitchen — and why the shortcut is more expensive than it looks when you trace it all the way to the plate.",
    category: "Culinary",
    readTime: "6 min read",
    body: [
      "Stock is infrastructure. It does not appear on a menu by name, but it is present in almost every sauce, braise, risotto, and pan sauce that does. A kitchen that uses commercial stock base has decided that the foundation of its cooking will be standardised and flavour-neutral. The ceiling of what you can build on that foundation is lower than it appears.",
      "The economics are frequently cited as the reason to skip house stock. It takes time and labour, costs water and gas, and requires storage space. This calculation ignores the yield from trimmings: the carcasses, bones, and vegetable offcuts that go into a well-run stock pot are material that would otherwise be disposed of. A chicken stock program is partly a trim management program.",
      "The quality argument is harder to quantify but more important. Commercial stock bases are built for consistency across industrial production. House stock is built for your menu, your sources, and your flavour goals. A veal stock that has been reduced to nappe in your kitchen has a depth and a gelatin content that no powder or concentrate reproduces. The sauces that come from it have a texture and a finish that guests notice, even when they cannot name what they are tasting.",
      "This is the same argument made for mise en place, for house-made pasta, for breaking down whole fish rather than buying fillets. Every shortcut has a cost, and that cost is paid somewhere. Sometimes it is on the plate. Sometimes it is in the margin. Often it is both.",
    ],
  },
];

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
