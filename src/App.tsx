/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AcademicTimelineSection } from './components/AcademicTimelineSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProfileSection />
        <CompetenciesSection />
        <ProjectsSection />
        <AcademicTimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
