import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { HERO_METRICS, STUDENT_PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section id="beranda" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide mb-4">
              Portofolio Digital Siswa <span aria-hidden="true">·</span> {STUDENT_PROFILE.classRoom}{' '}
              <span aria-hidden="true">·</span> {STUDENT_PROFILE.school}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.12] mb-5">
              {STUDENT_PROFILE.fullName}
            </h1>

            <p className="font-serif text-lg text-slate-700 leading-relaxed mb-4 max-w-2xl">
              Siswa Program Keahlian Teknik Instalasi Tenaga Listrik (Jurusan Listrik) yang
              berfokus pada ketelitian instalasi penerangan 1 fasa, pengukuran besaran listrik,
              serta penerapan standar keselamatan kerja K3LH dan PUIL 2011.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Dokumentasi resmi capaian pembelajaran kejuruan, proyek praktikum bengkel, dan
              kompetensi gambar teknik sebagai rekam jejak akademik di{' '}
              <span className="font-medium text-slate-800">{STUDENT_PROFILE.school}</span>,{' '}
              {STUDENT_PROFILE.location}.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#praktikum"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span>Lihat Dokumentasi Praktikum</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#profil"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 min-h-[44px]"
              >
                <span>Identitas Akademik</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[320px] lg:min-h-[380px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <ResilientImage
                src={STUDENT_PROFILE.portraitUrl}
                alt={STUDENT_PROFILE.portraitAlt}
                fallbackTitle={`${STUDENT_PROFILE.fullName} — ${STUDENT_PROFILE.classRoom}`}
                className="w-full h-full lg:h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent p-5">
                <p className="text-xs font-medium text-slate-200">
                  {STUDENT_PROFILE.majorShort}
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {STUDENT_PROFILE.classRoom} · {STUDENT_PROFILE.school}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs font-medium text-slate-500">{item.label}</p>
              <p className="text-base sm:text-lg font-semibold text-slate-900 tabular-nums">
                {item.value}
              </p>
              <p className="text-xs text-slate-500">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span>Teknik Instalasi Tenaga Listrik</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Keselamatan K3LH &amp; PUIL 2011</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Gambar Teknik IEC 60617</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Instalasi Penerangan 1 Fasa</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Pengukuran Besaran Listrik</span>
        </div>
      </div>
    </section>
  );
}
