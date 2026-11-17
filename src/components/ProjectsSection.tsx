import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  PRACTICAL_PROJECTS,
  PracticalProject,
  ProjectCategory,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const FILTER_CATEGORIES: ProjectCategory[] = [
  'Semua',
  'Instalasi Penerangan',
  'Pengukuran & Panel',
  'Gambar Teknik',
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Semua');
  const [activeProject, setActiveProject] = useState<PracticalProject | null>(null);

  const filteredProjects =
    selectedCategory === 'Semua'
      ? PRACTICAL_PROJECTS
      : PRACTICAL_PROJECTS.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      } else if (event.key === 'ArrowRight') {
        const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
        if (currentIndex !== -1) {
          const next = filteredProjects[(currentIndex + 1) % filteredProjects.length];
          setActiveProject(next);
        }
      } else if (event.key === 'ArrowLeft') {
        const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
        if (currentIndex !== -1) {
          const prev =
            filteredProjects[
              (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
            ];
          setActiveProject(prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, filteredProjects]);

  const navigateModal = (direction: 'prev' | 'next') => {
    if (!activeProject || filteredProjects.length === 0) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex === -1) return;
    const offset = direction === 'next' ? 1 : -1;
    const targetIndex =
      (currentIndex + offset + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[targetIndex]);
  };

  return (
    <section id="praktikum" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-blue-700 mb-2">
              03. Dokumentasi Praktikum &amp; Proyek Bengkel
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Portofolio Kerja Bengkel Instalasi Listrik
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Pilih kategori untuk menyaring proyek, atau klik salah satu dokumentasi guna
              melihat rincian spesifikasi teknis, alat kerja, dan verifikasi K3LH.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter kategori praktikum"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start lg:self-auto"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isHeroTile = selectedCategory === 'Semua' && index === 0;
            return (
              <article
                key={project.id}
                className={`group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-colors duration-150 hover:border-slate-300 ${
                  isHeroTile ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="text-left flex flex-col flex-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-slate-100 border-b border-slate-100 ${
                      isHeroTile ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2.5 tabular-nums">
                        <span className="font-mono font-semibold text-blue-700">
                          {project.code}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.semester}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-slate-500 tabular-nums">
                        {project.standard}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 whitespace-nowrap shrink-0">
                        <span>Rincian Teknis</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="no-print fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <div className="flex items-center gap-2 text-xs text-slate-500 tabular-nums truncate">
                <span className="font-mono font-semibold text-blue-700">
                  {activeProject.code}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.standard}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => navigateModal('prev')}
                      aria-label="Proyek sebelumnya"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateModal('next')}
                      aria-label="Proyek berikutnya"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Tutup jendela rincian"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  fallbackTitle={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3
                  id="modal-project-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3"
                >
                  {activeProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    Spesifikasi Teknis Praktikum
                  </h4>
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl px-4 bg-slate-50/50">
                    {activeProject.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm"
                      >
                        <span className="text-slate-500">{spec.label}</span>
                        <span className="font-mono font-medium text-slate-900 text-right tabular-nums">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    Peralatan &amp; Instrumen Kerja
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {activeProject.tools.map((tool) => (
                      <li key={tool} className="flex items-start gap-2.5">
                        <span className="font-mono text-xs text-blue-700 mt-0.5">—</span>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  Daftar Periksa Keselamatan K3LH
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.safetyChecks.map((check) => (
                    <li
                      key={check}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-blue-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
