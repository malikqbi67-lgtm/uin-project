const testimonials = [
  {
    quote:
      "Studying at UIN Saizu has been a life-changing experience. The international community here is warm and supportive, and the academic quality exceeded my expectations.",
    name:    "Ahmad Farouq",
    program: "Islamic Economics, S1",
    country: "Malaysia",
    flag:    "🇲🇾",
  },
  {
    quote:
      "The International Office team went above and beyond to help me with my visa and accommodation. I never felt alone in my journey here in Purwokerto.",
    name:    "Fatimah Al-Rashid",
    program: "Islamic Studies, S2",
    country: "Thailand",
    flag:    "🇹🇭",
  },
  {
    quote:
      "UIN Saizu offers a unique blend of Islamic scholarship and modern academic rigor. The campus is beautiful and Purwokerto is one of the most liveable cities I've been to.",
    name:    "Mohamed Yusuf",
    program: "Sharia & Law, S1",
    country: "Philippines",
    flag:    "🇵🇭",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 space-y-3">
          <p className="text-forest/50 text-xs tracking-[0.2em] uppercase font-semibold">
            Student Stories
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-forest">
            Voices from Our International Students
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Hear what students from around the world say about their experience at UIN Saizu Purwokerto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, program, country, flag }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col gap-5"
            >
              <span className="text-gold font-serif text-4xl leading-none">"</span>
              <p className="text-gray-700 text-sm leading-relaxed -mt-4 flex-1">{quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center text-base">
                  {flag}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{program} · {country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
