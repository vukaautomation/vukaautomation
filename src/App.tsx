/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ContactAndTrustSection } from './components/ContactAndTrustSection';
import { DisconnectedSilosSection } from './components/DisconnectedSilosSection';
import { EngineHubSection } from './components/EngineHubSection';
import { EnterpriseCoreSection } from './components/EngineSuiteSection';
import { FaqAndFounderSection } from './components/FaqAndFounderSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IndustriesAndToolsSection } from './components/IndustriesAndToolsSection';
import { PhotoBand } from './components/PhotoBand';
import { ProblemsSection } from './components/ProblemsSection';
import { ProcessAndInsightsSection } from './components/ProcessAndInsightsSection';
import { RockieChatWidget } from './components/RockieChatWidget';

export default function App() {
  const [selectedHubEngine, setSelectedHubEngine] = useState<string>('leadflow');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A2530] antialiased">
      <Header onNavigate={scrollToSection} />

      <main>
        <Hero onSeeHowItWorks={() => scrollToSection('problems')} />

        <ProblemsSection />

        <DisconnectedSilosSection />

        <PhotoBand
          id="vuka-band-solutions"
          src="/assets/aistudio/pexels-karola-g-7876674_546754d0.jpg"
          alt="Operations team reviewing financial metrics and growth charts"
          contain
          objectPositionClass="object-[50%_28%]"
        />

        <EngineHubSection
          selectedEngineId={selectedHubEngine}
          onSelectEngine={setSelectedHubEngine}
        />

        <EnterpriseCoreSection />

        <IndustriesAndToolsSection />

        <PhotoBand
          id="vuka-band-process"
          src="/assets/aistudio/pexels-jakubzerdzicki-36496927_5fdd2adf.jpg"
          alt="Developer workstation showing custom Python automation code"
          contain
        />

        <ProcessAndInsightsSection />

        <FaqAndFounderSection />

        <ContactAndTrustSection />
      </main>

      <RockieChatWidget />
    </div>
  );
}
