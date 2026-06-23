const ADMISSION_URL = "https://io.uinsaizu.ac.id";

export default function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-white/10 py-6 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
        <p>© 2025 International Office — UIN Prof. K.H. Saifuddin Zuhri Purwokerto. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={ADMISSION_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
            io.uinsaizu@uinsaizu.ac.id
          </a>
          <span>+62 281-635624</span>
          <span>Purwokerto, 53126</span>
        </div>
      </div>
    </footer>
  );
}
