const features = [
  {
    icon: "💎",
    title: "Affordable Quality Education",
    description:
      "World-class Islamic higher education at a fraction of the cost of Western universities, with scholarship opportunities available.",
  },
  {
    icon: "🌿",
    title: "Rich Cultural Experience",
    description:
      "Immerse yourself in the diverse culture of Purwokerto, Central Java — surrounded by natural beauty including Mount Slamet and Baturraden.",
  },
  {
    icon: "🌐",
    title: "Strong International Network",
    description:
      "32+ partner institutions across 14 countries, providing a robust network for research, mobility, and career opportunities.",
  },
  {
    icon: "🛡️",
    title: "Dedicated International Support",
    description:
      "A dedicated International Support Center assisting with visa, immigration, housing, and academic integration every step of the way.",
  },
  {
    icon: "🏠",
    title: "Holistic Campus Life",
    description:
      "Student dormitories, on-campus health services, sports, cultural activities, and a welcoming community await you.",
  },
  {
    icon: "🏆",
    title: "Recognized Academic Programs",
    description:
      "Accredited programs in Islamic studies, law, economics, science, humanities, and more — taught in English and Arabic.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-forest py-24 lg:py-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold/80 text-xs tracking-[0.2em] uppercase font-semibold">
            Why Choose UIN Saizu
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
            A World-Class Islamic University
            <br />
            <span className="text-gold">in the Heart of Java</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group bg-forest-mid/60 hover:bg-forest-mid border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
