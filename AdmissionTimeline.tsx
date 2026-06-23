const ADMISSION_URL = "https://io.uinsaizu.ac.id";

const steps = [
  { num: 1, label: "Socialization & Registration Opens", date: "Jan – Feb 2026" },
  { num: 2, label: "Application Period",                 date: "Feb – Jun 2026" },
  { num: 3, label: "File Inspection",                    date: "23–28 Jun 2026" },
  { num: 4, label: "Results Announced",                  date: "3–4 Jul 2026"  },
  { num: 5, label: "Visa & Immigration",                 date: "16–23 Jul 2026" },
  { num: 6, label: "International Student Orientation",  date: "21 Aug 2026"   },
  { num: 7, label: "Academic Year Begins",               date: "1 Sep 2026"    },
];

export default function AdmissionTimeline() {
  return (
    <section id="admission" className="bg-cream py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-forest/50 text-xs tracking-[0.2em] uppercase font-semibold">
            Academic Year 2025/2026
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-forest">
            Admission Timeline
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Your step-by-step guide to joining UIN Saizu as an international student
            for the 2025/2026 academic year.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative space-y-0">
          {steps.map(({ num, label, date }, i) => (
            <li key={num} className="flex gap-5 items-start">
              {/* Spine */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-forest text-white font-bold text-sm flex items-center justify-center z-10 shadow-md">
                  {num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[36px] bg-forest/20 my-1" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 items-baseline justify-between pb-8 border-b border-gray-100 last:border-none">
                <span className="text-gray-800 font-medium text-sm">{label}</span>
                <span className="text-forest/60 text-xs font-semibold shrink-0 ml-4">
                  {date}
                </span>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href={ADMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-forest text-white font-semibold text-sm hover:bg-forest-mid transition-colors duration-200 text-center"
          >
            Apply — Undergraduate
          </a>
          <a
            href={ADMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border-2 border-forest text-forest font-semibold text-sm hover:bg-forest hover:text-white transition-all duration-200 text-center"
          >
            Apply — Postgraduate
          </a>
        </div>
      </div>
    </section>
  );
}
