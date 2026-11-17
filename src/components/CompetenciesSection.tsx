import { COMPETENCIES } from '../data/portfolioData';

export function CompetenciesSection() {
  return (
    <section id="kompetensi" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-medium text-blue-700 mb-2">
            02. Kompetensi Dasar Kejuruan
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Capaian Keahlian Kelas X Teknik Instalasi Tenaga Listrik
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Kompetensi inti bidang ketenagalistrikan yang dipelajari dan dipraktikkan secara
            berkala di bengkel listrik SMKN 1 Sidayu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETENCIES.map((item) => (
            <article
              key={item.index}
              className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between transition-colors duration-150 hover:bg-white hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                    {item.index}
                  </span>
                  <span className="text-xs text-slate-500">{item.subject}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <p className="font-mono text-xs text-slate-500 tabular-nums">
                  {item.standards}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
