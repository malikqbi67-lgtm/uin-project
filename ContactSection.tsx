"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ADMISSION_URL = "https://io.uinsaizu.ac.id";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", country: "", program: "Undergraduate Program (S1)", message: "",
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Front-end only prototype — just show success state
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-forest py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gold/80 text-xs tracking-[0.2em] uppercase font-semibold">
              International Office
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
              Ready to Begin Your
              <span className="text-gold"> Global Journey?</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Our International Office team is ready to assist you with admissions, visa
              guidance, scholarships, and everything you need to start your academic life at
              UIN Saizu.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { Icon: Mail,      label: "EMAIL",     value: "io.uinsaizu@uinsaizu.ac.id" },
              { Icon: Phone,     label: "PHONE",     value: "+62 281-635624" },
              { Icon: MapPin,    label: "ADDRESS",   value: "Jl. A. Yani No.40A, Purwokerto, Central Java 53126, Indonesia" },
              { Icon: MapPin,    label: "OFFICE",    value: "Rectorate Building Floor 5, Campus 1, UIN Saizu Purwokerto" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex gap-3 items-start">
                <Icon size={15} className="text-gold/70 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/30 text-[10px] font-bold tracking-widest mb-0.5">{label}</p>
                  <p className="text-white/80 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={ADMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-forest font-semibold px-6 py-3 rounded-full text-sm hover:bg-gold-light transition-colors"
          >
            Apply Now →
          </a>
        </div>

        {/* Right form */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-black/20 space-y-5">
          <h3 className="font-serif text-2xl text-forest">Send Us a Message</h3>

          {sent && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
              ✓ Message sent! We'll get back to you within 2 business days.
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-forest transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-forest transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                Country of Origin
              </label>
              <input
                type="text"
                placeholder="e.g. Malaysia"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-forest transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                Program of Interest
              </label>
              <select
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-forest transition-colors bg-white"
              >
                <option>Undergraduate Program (S1)</option>
                <option>Master's Program (S2)</option>
                <option>Doctoral Program (S3)</option>
                <option>Summer Course (Inbound)</option>
                <option>Student Exchange</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your academic background and goals..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-forest transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-mid text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
            >
              <Send size={15} />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
