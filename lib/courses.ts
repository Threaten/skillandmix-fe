export type Level = "Beginner" | "Intermediate" | "Advanced" | "Professional";

export type Course = {
  slug: string;
  title: string;
  hook: string;
  category: string;
  level: Level;
  duration: string;
  price: string;
  image: string;
  modules: string[];
  instructor: { name: string; bio: string };
};

export const courses: Course[] = [
  {
    slug: "classic-cocktail-fundamentals",
    title: "Classic Cocktail Fundamentals",
    hook: "Master the canon — sours, stirred drinks, highballs — with technique-first instruction from working bartenders.",
    category: "Mixology",
    level: "Beginner",
    duration: "8 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Tools, technique, and mise en place",
      "The sour family: daiquiri, margarita, whiskey sour",
      "Stirred drinks: Manhattan, Negroni, Old Fashioned",
      "Highballs, spritzers, and long drinks",
      "Ice, dilution, and temperature control",
      "Bar flow and efficiency under service",
      "Menu reading and recipe adaptation",
      "Final practical assessment",
    ],
    instructor: {
      name: "Marco Santos",
      bio: "12 years behind the stick, former head bartender at four-star properties across Southeast Asia. Teaches the craft through fundamentals — no shortcuts.",
    },
  },
  {
    slug: "advanced-spirits-knowledge",
    title: "Advanced Spirits Knowledge",
    hook: "From distillation to dilution — an evidence-based study of how spirits are made, what that means in the glass, and how to speak about them with authority.",
    category: "Spirits",
    level: "Intermediate",
    duration: "6 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Fermentation and distillation: the fundamentals",
      "Whiskey: Scotch, Bourbon, Japanese, Irish",
      "Agave spirits: Tequila, Mezcal, and the variants",
      "Rum: geography, production, and style",
      "Gin, Vodka, and the neutral spirit category",
      "Tasting methodology and scoring",
    ],
    instructor: {
      name: "Clara Mendez",
      bio: "WSET Level 4 in Spirits. Consulted for import distribution companies across Vietnam and Thailand. Runs tastings for hospitality professionals throughout the region.",
    },
  },
  {
    slug: "flair-bartending-performance",
    title: "Flair Bartending & Performance",
    hook: "The craft behind the spectacle. Learn working flair that elevates service without slowing it down.",
    category: "Flair",
    level: "Intermediate",
    duration: "10 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Foundation moves: tin work, bottle manipulation",
      "Safety, breakage, and venue considerations",
      "Working flair vs. exhibition flair",
      "Integrating flair into speed service",
      "Reading the room: flair as hospitality",
      "Competition preparation",
      "Building a performance routine",
      "Live service practicum",
      "Video review and feedback",
      "Final performance",
    ],
    instructor: {
      name: "Javi Reyes",
      bio: "Regional flair competition finalist. Seven years training bartenders in hospitality venues across Hanoi and Ho Chi Minh City.",
    },
  },
  {
    slug: "bar-management-operations",
    title: "Bar Management & Operations",
    hook: "For working bartenders stepping into leadership. Covers menu design, inventory, cost control, staff training, and running a bar as a profitable business.",
    category: "Management",
    level: "Advanced",
    duration: "8 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Bar program design: concept to menu",
      "Costing: pour cost, waste, and margins",
      "Ordering, inventory, and par levels",
      "Staffing: hiring, scheduling, training",
      "Service standards and floor management",
      "Handling incidents: complaints, refusals",
      "Seasonal menu development",
      "Supplier relationships and negotiation",
    ],
    instructor: {
      name: "Dao Nguyen",
      bio: "Former F&B Director at a 200-seat restaurant group. Now consults independently for hotel bar programs and new venue openings.",
    },
  },
  {
    slug: "wine-pairing-fundamentals",
    title: "Wine & Pairing Fundamentals",
    hook: "A working knowledge of wine for the F&B professional. From grape to glass, with practical pairing skills for modern menus.",
    category: "Wine",
    level: "Beginner",
    duration: "5 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    modules: [
      "How wine is made: varieties, regions, styles",
      "Tasting methodology and vocabulary",
      "Old World: France, Italy, Spain",
      "New World: Australia, South America, South Africa",
      "Pairing principles: weight, acid, tannin",
      "Building a practical wine list",
    ],
    instructor: {
      name: "Clara Mendez",
      bio: "WSET Level 4 in Spirits. Consulted for import distribution companies across Vietnam and Thailand. Runs tastings for hospitality professionals throughout the region.",
    },
  },
  {
    slug: "professional-bartender-certification",
    title: "Professional Bartender Certification",
    hook: "The complete course. From zero to bar-ready in 16 weeks — cocktails, spirits, service, flair foundations, and the practical skills needed to work in a professional venue.",
    category: "Certification",
    level: "Professional",
    duration: "16 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Bar fundamentals and mise en place",
      "Classic cocktail canon",
      "Spirits knowledge: all major categories",
      "Advanced techniques: infusions, batching, carbonation",
      "Flair foundations",
      "Wine and beer service",
      "Guest service and hospitality mindset",
      "Menu design and costing",
      "Bar management basics",
      "Certified assessment practicum",
    ],
    instructor: {
      name: "Marco Santos",
      bio: "12 years behind the stick, former head bartender at four-star properties across Southeast Asia. Teaches the craft through fundamentals — no shortcuts.",
    },
  },

  // ── Barista ──────────────────────────────────────────────────────────────
  {
    slug: "espresso-coffee-fundamentals",
    title: "Espresso & Coffee Fundamentals",
    hook: "From green bean to finished cup — a technique-first introduction to espresso, milk work, and café workflow for serious coffee professionals.",
    category: "Barista",
    level: "Beginner",
    duration: "6 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Coffee origin, variety, and processing",
      "Roast levels and their effect on extraction",
      "Espresso fundamentals: dose, yield, time",
      "Grinder calibration and dialling in",
      "Milk steaming: texture, temperature, latte art basics",
      "Filter coffee: pour-over, batch brew",
      "Bar workflow and speed of service",
      "Customer communication and sensory vocabulary",
    ],
    instructor: {
      name: "Linh Bui",
      bio: "SCA-certified barista trainer with seven years working specialty coffee in Hanoi and Singapore. Former head barista at two award-winning independent cafés.",
    },
  },
  {
    slug: "specialty-coffee-sensory",
    title: "Specialty Coffee & Sensory Training",
    hook: "Cupping, origin analysis, and the calibrated palate. For baristas who want to move past recipes and develop genuine coffee literacy.",
    category: "Barista",
    level: "Intermediate",
    duration: "5 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80",
    modules: [
      "SCA cupping protocol: setup, scoring, vocabulary",
      "Origin deep-dives: Ethiopia, Colombia, Vietnam",
      "Processing methods and their sensory fingerprints",
      "Extraction variables: TDS, EY, and the brew ratio",
      "Dialling in for different brew methods",
      "Sensory calibration: triangulation and blind tasting",
      "Sourcing conversations and green buying basics",
    ],
    instructor: {
      name: "Linh Bui",
      bio: "SCA-certified barista trainer with seven years working specialty coffee in Hanoi and Singapore. Former head barista at two award-winning independent cafés.",
    },
  },
  {
    slug: "cafe-menu-operations",
    title: "Café Menu Design & Operations",
    hook: "Build and run a café program that holds up under volume. Covers recipe development, costing, supplier management, and the economics of a high-quality coffee business.",
    category: "Barista",
    level: "Advanced",
    duration: "7 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Café concept and menu architecture",
      "Recipe development and standardisation",
      "Coffee costing and margin analysis",
      "Supplier evaluation and green sourcing",
      "Equipment selection, maintenance, and yield",
      "Staff training systems",
      "Running a specialty café as a business",
    ],
    instructor: {
      name: "Dao Nguyen",
      bio: "Former F&B Director at a 200-seat restaurant group. Now consults independently for hotel bar programs and new venue openings.",
    },
  },

  // ── Culinary ─────────────────────────────────────────────────────────────
  {
    slug: "knife-skills-culinary-foundations",
    title: "Knife Skills & Culinary Foundations",
    hook: "The hands-on fundamentals every kitchen professional needs. Precision cuts, mise en place discipline, and the knife techniques that make every other skill faster.",
    category: "Culinary",
    level: "Beginner",
    duration: "4 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Knife anatomy, selection, and care",
      "Sharpening and honing",
      "Classic cuts: brunoise, julienne, chiffonade, tourné",
      "Vegetable butchery and yield",
      "Meat and fish breakdown basics",
      "Station setup and mise en place systems",
      "Speed and safety under kitchen conditions",
    ],
    instructor: {
      name: "Chef Hoa Tran",
      bio: "Trained in classical French technique with 14 years in professional kitchens across Vietnam and France. Has led kitchen teams at three Michelin-recognised properties.",
    },
  },
  {
    slug: "sauce-work-flavour-building",
    title: "Sauce Work & Flavour Building",
    hook: "The five mother sauces, modern derivatives, and the principles of flavour composition that separate cooks who follow recipes from cooks who build them.",
    category: "Culinary",
    level: "Intermediate",
    duration: "6 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Stock fundamentals: white, brown, fish, vegetable",
      "The five mother sauces: béchamel, velouté, espagnole, hollandaise, tomato",
      "Emulsification: technique and troubleshooting",
      "Reduction, mounting, and finishing",
      "Modern derivative sauces",
      "Acid, fat, salt, and heat as tools",
      "Flavour pairing and balance",
      "Building a sauce from a concept",
    ],
    instructor: {
      name: "Chef Hoa Tran",
      bio: "Trained in classical French technique with 14 years in professional kitchens across Vietnam and France. Has led kitchen teams at three Michelin-recognised properties.",
    },
  },
  {
    slug: "fb-professional-certification",
    title: "F&B Professional Certification",
    hook: "The full-spectrum course for ambitious hospitality professionals. 20 weeks covering bar craft, coffee, kitchen fundamentals, and the business skills to run an F&B operation.",
    category: "Certification",
    level: "Professional",
    duration: "20 weeks",
    price: "Contact for pricing",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    modules: [
      "Cocktail fundamentals and classic canon",
      "Spirits, wine, and beverage knowledge",
      "Espresso and specialty coffee",
      "Knife skills and culinary foundations",
      "Sauce work and flavour development",
      "Guest service and hospitality standards",
      "Menu design across bar, café, and kitchen",
      "F&B costing, margins, and operations",
      "Supplier relationships and procurement",
      "Leadership and team management",
      "Capstone project: design a full F&B program",
      "Certified practical assessment",
    ],
    instructor: {
      name: "Marco Santos",
      bio: "12 years behind the stick, former head bartender at four-star properties across Southeast Asia. Teaches the craft through fundamentals — no shortcuts.",
    },
  },
];

export const categories = [
  "All",
  "Mixology",
  "Spirits",
  "Flair",
  "Management",
  "Wine",
  "Barista",
  "Culinary",
  "Certification",
];

export const levels: Level[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Professional",
];

export const allLevels = ["All", ...levels];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
