import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import AboutSection     from "@/components/AboutSection";
import ProgramsSection  from "@/components/ProgramsSection";
import AdmissionTimeline from "@/components/AdmissionTimeline";
import Testimonials     from "@/components/Testimonials";
import FAQ              from "@/components/FAQ";
import ContactSection   from "@/components/ContactSection";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* ── Persistent navigation ── */}
      <Navbar />

      <main>
        {/* 1. Hero — #home */}
        <Hero />

        {/* 2. Institutional identity — #about  (smooth-scrolled from "About Us" nav link) */}
        <AboutSection />

        {/* 3. Faculties & International Programs — #programs + #engagement
               "Global Network" scrolls to #programs
               "Engagement" scrolls to #engagement (inside ProgramsSection)
               "Explore Programs" hero button scrolls to #programs              */}
        <ProgramsSection />

        {/* 4. Admission timeline */}
        <AdmissionTimeline />

        {/* 5. Student voices */}
        <Testimonials />

        {/* 6. FAQ */}
        <FAQ />

        {/* 7. Contact + CTA — dark green section */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
