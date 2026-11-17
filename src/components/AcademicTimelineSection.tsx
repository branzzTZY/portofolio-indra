import { ACADEMIC_MILESTONES } from '../data/portfolioData';

export function AcademicTimelineSection() {
  return (
    <section id="akademik" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-blue-700 mb-2">
              04. Rekam Jejak Akademik
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Perkembangan Studi &amp; Kesiapan Industri
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tahapan pembelajaran kejuruan di Program Studi Teknik Instalasi Tenaga Listrik
              SMKN 1 Sidayu dari tingkat dasar hingga rencana Praktik Kerja Lapangan (PKL).
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-b border-slate-200">
            {ACADEMIC_MILESTONES.map((item) => (
              <div
                key={item.title}
                className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
              >
                <div className="sm:col-span-4">
                  <p className="font-mono text-xs font-medium text-blue-700 tabular-nums">
                    {item.period}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{item.institution}</p>
                </div>
                <div className="sm:col-span-8">
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
