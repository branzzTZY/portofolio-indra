import { useState } from 'react';
import {
  PROFILE_DETAILS,
  STUDENT_PROFILE,
  WORKSHOP_TOOLS,
} from '../data/portfolioData';

type ProfileTab = 'identitas' | 'etos' | 'peralatan';

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('identitas');

  return (
    <section id="profil" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-blue-700 mb-2">
              01. Profil &amp; Identitas Siswa
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Dedikasi pada Ketelitian &amp; Keselamatan Instalasi Listrik
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Sebagai siswa Kelas X TITL 2 di SMKN 1 Sidayu, saya membangun kompetensi dasar
              ketenagalistrikan secara terstruktur—mulai dari pemahaman teori rangkaian,
              penguasaan alat ukur presisi, hingga praktik pemasangan instalasi penerangan yang
              rapi dan aman.
            </p>
            <blockquote className="p-5 bg-white border border-slate-200 rounded-xl">
              <p className="font-serif italic text-sm sm:text-base text-slate-700 leading-relaxed">
                &ldquo;{STUDENT_PROFILE.quote}&rdquo;
              </p>
              <footer className="mt-3 text-xs font-medium text-slate-500">
                {STUDENT_PROFILE.fullName} · {STUDENT_PROFILE.classRoom}
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <div
              role="tablist"
              aria-label="Informasi profil siswa"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg mb-6"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'identitas'}
                onClick={() => setActiveTab('identitas')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                  activeTab === 'identitas'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Identitas Akademik
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'etos'}
                onClick={() => setActiveTab('etos')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                  activeTab === 'etos'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fokus &amp; Etos Kerja
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'peralatan'}
                onClick={() => setActiveTab('peralatan')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                  activeTab === 'peralatan'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Peralatan Bengkel
              </button>
            </div>

            {activeTab === 'identitas' && (
              <div role="tabpanel" className="divide-y divide-slate-100">
                {PROFILE_DETAILS.map((row) => (
                  <div
                    key={row.label}
                    className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6"
                  >
                    <span className="text-xs sm:text-sm text-slate-500">{row.label}</span>
                    <span className="text-sm font-semibold text-slate-900 sm:text-right tabular-nums">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'etos' && (
              <div role="tabpanel" className="space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                    Kedisiplinan Prosedur K3LH &amp; 5R Bengkel
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Selalu menggunakan Alat Pelindung Diri (APD) lengkap sebelum memasuki area
                    praktik kelistrikan, memastikan sumber tegangan dalam keadaan mati (off)
                    selama perakitan, serta menjaga kebersihan meja kerja setelah praktikum.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                    Ketelitian Gambar Kerja &amp; Kerapian Pengawatan
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Mengutamakan kesesuaian antara diagram pengawatan (wiring diagram) dengan
                    realisasi fisik di papan kerja, termasuk penggunaan kode warna kabel NYA dan
                    pengencangan terminal tanpa serabut terbuka.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                    Target Kompetensi Menuju Praktik Kerja Lapangan (PKL)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Mempersiapkan diri sejak kelas X untuk menguasai instalasi tenaga 3 fasa,
                    panel kontrol motor magnetik kontaktor, dan pemeliharaan sistem distribusi
                    kelistrikan industri.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'peralatan' && (
              <div role="tabpanel" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WORKSHOP_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-lg border border-slate-200 bg-slate-50/70"
                  >
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{tool.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{tool.functionDesc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
