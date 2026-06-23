const faculties = [
  { code: "FTIK",   name: "Faculty of Tarbiyah & Teacher Training", icon: "📚" },
  { code: "FEBI",   name: "Faculty of Economics & Islamic Business", icon: "📊" },
  { code: "FDIK",   name: "Faculty of Dakwah & Communication",       icon: "📡" },
  { code: "FASYA",  name: "Faculty of Sharia & Law",                 icon: "⚖️"  },
  { code: "FUAH",   name: "Faculty of Ushuluddin, Adab & Humanities",icon: "🕌" },
  { code: "SAINTEK",name: "Faculty of Science & Technology",         icon: "🔬" },
  { code: "PPS",    name: "Master Degree & Doctoral Programs",       icon: "🎓" },
];

const intlPrograms = [
  {
    tag: "Academic",
    icon: "🌍",
    title: "International Team Teaching (ITT)",
    description:
      "Collaborate with international faculty in interdisciplinary classrooms for a truly global learning experience.",
  },
  {
    tag: "Outbound",
    icon: "✈️",
    title: "SISMA – Student Mobility Awards",
    description:
      "Outbound mobility program enabling UIN Saizu students to study at partner universities worldwide.",
  },
  {
    tag: "Inbound",
    icon: "🌸",
    title: "Inbound Program – Summer Courses",
    description:
      "Intensive inbound programs welcoming international students to experience academic and cultural immersion in Purwokerto.",
  },
  {
    tag: "Research",
    icon: "🔭",
    title: "International Research Collaboration",
    description:
      "Shared matching grants for international joint research between UIN Saizu and global partner institutions.",
  },
  {
    tag: "Community",
    icon: "🤝",
    title: "Global Outreach Community Services",
    description:
      "Community engagement programs extending UIN Saizu's impact beyond campus to the global community.",
  },
  {
    tag: "Faculty",
    icon: "🧑‍🏫",
    title: "Staff Exchange & Guest Lectures",
    description:
      "Visiting and guest lecture exchanges bringing international expertise to UIN Saizu and sending our faculty abroad.",
  },
];

const tagColors: Record<string, string> = {
  Academic:  "text-blue-600 bg-blue-50",
  Outbound:  "text-amber-600 bg-amber-50",
  Inbound:   "text-pink-600 bg-pink-50",
  Research:  "text-violet-600 bg-violet-50",
  Community: "text-teal-600 bg-teal-50",
  Faculty:   "text-orange-600 bg-orange-50",
};

const updates = [
  {
    title: "REGISTER NOW – JOIN UIN SAIZU 2025!",
    image: "/news-admission.jpg",
    date: "Jan 15, 2026",
    link: "https://io.uinsaizu.ac.id"
  },
  {
    title: "UIN Saizu to Open Center of Excellence with China",
    image: "/news-china.jpg",
    date: "Feb 02, 2026",
    link: "#contact"
  },
  {
    title: "UIN Saizu Collaborates with 32 Institutions in 14 Countries",
    image: "/news-collaboration.jpg",
    date: "Mar 11, 2026",
    link: "#about"
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">

        {/* ── Faculties ── */}
        <div>
          <div className="text-center mb-14 space-y-3">
            <p className="text-forest/50 text-xs tracking-[0.2em] uppercase font-semibold">
              Academic Offerings
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest">
              Faculties &amp; Programs
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              UIN Saizu offers a rich array of undergraduate and postgraduate programs across
              6 faculties, blending Islamic scholarship with modern academic disciplines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {faculties.map(({ code, name, icon }) => (
              <div
                key={code}
                className="group flex items-center gap-4 bg-sage/50 hover:bg-sage border border-transparent hover:border-forest/20 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center text-xl shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-forest/50 text-[10px] font-bold tracking-widest uppercase">
                    {code}
                  </p>
                  <p className="text-gray-800 font-medium text-sm leading-snug">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── International Programs ── */}
        <div id="programs-list">
          <div className="text-center mb-14 space-y-3">
            <p className="text-forest/50 text-xs tracking-[0.2em] uppercase font-semibold">
              Cross-Border Opportunities
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest">
              International Programs
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              From outbound mobility awards to collaborative research grants — our programs
              bridge UIN Saizu with the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {intlPrograms.map(({ tag, icon, title, description }) => (
              <div
                key={title}
                className="group bg-white border border-gray-100 hover:border-forest/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest/8 flex items-center justify-center text-2xl">
                    {icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase ${tagColors[tag] ?? "text-gray-500 bg-gray-100"}`}
                  >
                    {tag}
                  </span>
                </div>
                <h3 className="text-gray-900 font-semibold text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Engagement / News ── */}
        <div id="engagement">
          <div className="text-center mb-14 space-y-3">
            <p className="text-forest/50 text-xs tracking-[0.2em] uppercase font-semibold">
              Global News & Updates
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest">
              Updates from the International Office
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Stay informed with the latest announcements, international collaborations, and academic events at UIN Saizu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map(({ title, image, date, link }) => (
              <a
                key={title}
                href={link}
                className="group bg-white border border-gray-100 hover:border-forest/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="text-gray-900 font-semibold text-base leading-snug group-hover:text-forest transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium">{date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}