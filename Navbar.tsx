"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const ADMISSION_URL = "https://ahmad-zulkarnain.my.canva.site/international-student-admission-2025";

const navLinks = [
  { label: "Home",           href: "#home" },
  { label: "About Us",       href: "#about" },
  { label: "Engagement",     href: "#engagement" },
  { label: "Global Network", href: "#programs" },
  { label: "Admission",      href: ADMISSION_URL, external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    e.preventDefault();
    setMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo and Campus Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain" onError={(e)=>{(e.target as HTMLElement).style.display='none'}} />
          </div>
          <div>
            <span className="text-white font-serif font-bold text-base tracking-wide block">UIN SAIZU</span>
            <span className="text-gold text-[10px] tracking-widest uppercase font-semibold block -mt-1">International Office</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href, external }) => (
            <li key={label}>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gold text-forest hover:bg-white hover:text-forest transition-all duration-200 shadow-md shadow-gold/10 ml-4"
                >
                  {label}
                </a>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-forest border-t border-white/10 px-6 pb-6 pt-2 space-y-1">
          {navLinks.map(({ label, href, external }) => (
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-xl text-sm font-semibold bg-gold text-forest text-center mt-3"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="block px-4 py-3 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {label}
              </a>
            )
          ))}
        </div>
      )}
    </header>
  );
}