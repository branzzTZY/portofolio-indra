import { STUDENT_PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; 2026 {STUDENT_PROFILE.fullName} · {STUDENT_PROFILE.classRoom} ·{' '}
          {STUDENT_PROFILE.school} ({STUDENT_PROFILE.majorShort})
        </p>

        <div className="flex items-center gap-5">
          <a href="#profil" className="hover:text-slate-900 transition-colors">
            Profil
          </a>
          <a href="#kompetensi" className="hover:text-slate-900 transition-colors">
            Kompetensi
          </a>
          <a href="#praktikum" className="hover:text-slate-900 transition-colors">
            Praktikum
          </a>
          <a href="#beranda" className="hover:text-slate-900 transition-colors font-medium">
            Kembali ke Atas
          </a>
        </div>
      </div>
    </footer>
  );
}
