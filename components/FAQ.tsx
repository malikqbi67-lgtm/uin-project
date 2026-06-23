"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is the language of instruction?",
    a: "Most programs are conducted in Indonesian (Bahasa Indonesia), with selected programs and courses offered in English and Arabic. International students are encouraged to take Bahasa Indonesia preparation courses before the academic year begins.",
  },
  {
    q: "Is there a scholarship available for international students?",
    a: "Yes. UIN Saizu offers several scholarship pathways including the Indonesian Government Scholarship (KNB), university-sponsored merit awards, and bilateral scholarships through our 32+ partner institutions. Visit the admissions portal for details.",
  },
  {
    q: "How do I apply for a student visa to Indonesia?",
    a: "After receiving your Letter of Acceptance, the International Office will guide you through the KITAS (student residence permit) process, including document verification and coordination with the Indonesian Directorate General of Immigration.",
  },
  {
    q: "Does UIN Saizu provide student accommodation?",
    a: "Yes. On-campus dormitories (ma'had) are available for international students at affordable rates. Assistance in finding off-campus housing is also provided through the International Office.",
  },
  {
    q: "What programs are available for international students?",
    a: "International students can enroll across all 6 faculties — from Islamic Economics and Sharia Law to Science & Technology and Teacher Education — at undergraduate (S1), Master's (S2), and Doctoral (S3) levels.",
  },
  {
    q: "When does the academic year start?",
    a: "The academic year typically begins in September. For 2025/2026, orientation is scheduled for 21 August 2026 and classes begin 1 September 2026. Please refer to the Admission Timeline for key dates.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 space-y-3">
          <p className="text-forest/50 text-xs tracking-[0.2em] uppercase font-semibold">
            Common Questions
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-forest">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base">
            Everything you need to know about studying at UIN Saizu as an international student.
          </p>
        </div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {faqs.map(({ q, a }, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-sage/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-gray-800 font-medium text-sm">{q}</span>
                <span className="shrink-0 text-forest">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed bg-sage/20">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
