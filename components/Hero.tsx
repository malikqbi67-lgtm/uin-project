"use client";

const ADMISSION_URL = "https://ahmad-zulkarnain.my.canva.site/international-student-admission-2025";

function handleScroll(href: string) {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: "#052e16" }}
    >
      {/* Decorative geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-white/5 [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 -translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text + cards */}
        <div className="space-y-8">
          <p className="text-amber-500 text-xs tracking-[0.2em] uppercase font-semibold">
            UIN Prof. K.H. Saifuddin Zuhri · Purwokerto
          </p>

          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05]">
            Your Gateway to <br />
            <span className="text-amber-500">Global Education</span>
          </h1>

          <p className="text-white/70 text-base lg:text-lg max-w-md leading-relaxed">
            Join a vibrant international community at the heart of Java.
            World-class Islamic scholarship, modern disciplines, and a campus
            surrounded by nature.
          </p>

          {/* CTA cards */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={ADMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-6 py-4 rounded-2xl transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <span>🎓</span>
              <span>Apply for Admission</span>
            </a>

            <button
              onClick={() => handleScroll("#programs")}
              className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-2xl border border-white/20 transition-all hover:-translate-y-0.5"
            >
              <span>🌐</span>
              <span>Explore Programs</span>
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 pt-4 border-t border-white/10">
            {[
              { value: "32+",  label: "Partner Institutions" },
              { value: "14",   label: "Countries" },
              { value: "6",    label: "Faculties" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-white font-serif text-2xl font-bold">{value}</p>
                <p className="text-white/50 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: campus image */}
        <div className="hidden lg:flex justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-stone-900">
            <img
              src="/campus.jpg"
              alt="UIN Saizu Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.15em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}