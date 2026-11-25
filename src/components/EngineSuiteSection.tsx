import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ENTERPRISE_CORE_PILLARS } from '../data/vukaData';
import { RevealBlock, RevealItem } from './MotionReveal';
import { AnimatedJobCard, JobCardProps } from './ui/animated-card';
import { cn } from '@/src/lib/utils';

interface PartnerCardData extends JobCardProps {
  id: string;
}

const PARTNER_CARDS: PartnerCardData[] = [
  {
    id: 'easy-greens',
    companyName: 'Easy Greens',
    jobTitle: 'OpsBoard + FinanceFlow Automation',
    salary: 'FARMING · OPSBOARD + FINANCEFLOW',
    companyLogo: (
      <img
        src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.02__1__49839181.jpeg"
        alt="Easy Greens"
        className="w-full h-full object-contain scale-[1.4]"
      />
    ),
    problemLabel: 'THE PROBLEM',
    problemText:
      'Manual payroll, disconnected shift logs, and scattered spreadsheets were stealing hours every week.',
    builtLabel: 'WHAT VUKA BUILT',
    builtText:
      'OpsBoard for live stock visibility and FinanceFlow to run 4-batch wage calculations effortlessly.',
    resultLabel: 'THE RESULT',
    resultText: '15+ hours saved weekly. Zero payroll errors. Instant calm.',
    tags: ['OpsBoard', 'FinanceFlow', 'Agriculture'],
    postedDate: 'Live System',
    variant: 'emerald',
  },
  {
    id: 'technofresh',
    companyName: 'TechnoFresh',
    jobTitle: 'Legacy ERP Data Bridge & Cleaner',
    salary: 'DATA AUTOMATION · OLD ERP, NO API',
    companyLogo: (
      <div className="w-full h-full bg-black rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.03_f77f645f.jpeg"
          alt="TechnoFresh"
          className="w-full h-full object-contain scale-[1.15]"
        />
      </div>
    ),
    problemLabel: 'THE PROBLEM',
    problemText:
      'Locked inside an old ERP with no API, manual CSV exports kept breaking with Ghost Stock errors.',
    builtLabel: 'WHAT VUKA BUILT',
    builtText:
      'A quiet robot that logs in, pulls the daily CSV, and cleans messy formats automatically.',
    resultLabel: 'THE RESULT',
    resultText: 'Clean, trustworthy data — without replacing the ERP.',
    tags: ['DataClean', 'Python', 'API Bridge'],
    postedDate: 'Live System',
    variant: 'blue',
  },
  {
    id: 'ubelong',
    companyName: 'UBELONG',
    jobTitle: 'Lead & Customer Ecosystem',
    salary: 'FIBRE · LEAD & CUSTOMER SYSTEM',
    companyLogo: (
      <div className="w-full h-full bg-[#090A0F] rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.03__1__371a82f3.jpeg"
          alt="UBELONG"
          className="w-full h-full object-contain scale-[1.85]"
        />
      </div>
    ),
    problemLabel: 'THE PROBLEM',
    problemText:
      'Leads slipped between WhatsApp, calls, and sheets — hiding who paid and who needed follow-up.',
    builtLabel: 'WHAT VUKA BUILT',
    builtText:
      'One calm system capturing every lead, keeping client records together, and tracking payments.',
    resultLabel: 'THE RESULT',
    resultText: 'Everything in one calm place. No more chasing information.',
    tags: ['LeadFlow', 'WhatsApp Ops', 'Payments'],
    postedDate: 'Live System',
    variant: 'pink',
  },
  {
    id: 'rosebank-college',
    companyName: 'IIE Rosebank College',
    jobTitle: 'Admissions & Student Support AI',
    salary: 'EDUCATION · LEADFLOW + SUPPORTAI',
    topBadge: '2027 · PROJECT',
    companyLogo: (
      <img
        src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.02_9439a54a.jpeg"
        alt="IIE Rosebank College"
        className="w-full h-full object-contain scale-[1.15]"
      />
    ),
    problemLabel: 'THE PROBLEM',
    problemText:
      'Student enquiries arrive everywhere while manual follow-ups leave support questions waiting.',
    builtLabel: 'BUILDING FOR 2027',
    builtText:
      'LeadFlow for recruitment and admissions alongside SupportAI for fast, tracked student help.',
    resultLabel: 'COMING IN 2027',
    resultText: 'Faster follow-ups, faster help — no student left waiting.',
    tags: ['LeadFlow', 'SupportAI', 'Education'],
    postedDate: '2027 Rollout',
    variant: 'yellow',
  },
];

export function EnterpriseCoreSection() {
  const [cards, setCards] = useState<PartnerCardData[]>(PARTNER_CARDS);

  // Compact, soft fanned positions: index 1 is centered front & active
  const cardTransforms = [
    'md:rotate-[-6deg] md:-translate-x-[50%] lg:-translate-x-[60%] md:translate-y-[14px] md:scale-[0.92] z-10 opacity-85 hover:opacity-100',
    'md:rotate-[0deg] md:translate-x-0 md:translate-y-0 md:scale-100 z-30 opacity-100',
    'md:rotate-[6deg] md:translate-x-[50%] lg:translate-x-[60%] md:translate-y-[14px] md:scale-[0.92] z-20 opacity-85 hover:opacity-100',
    'md:rotate-[2deg] md:translate-x-0 md:translate-y-[20px] md:scale-[0.86] z-0 opacity-65 pointer-events-none',
  ];

  const handleCardClick = (index: number) => {
    if (index === 1) return;
    const newCards = [...cards];
    const [clickedCard] = newCards.splice(index, 1);
    newCards.splice(1, 0, clickedCard);
    setCards(newCards);
  };

  const handleSelectById = (id: string) => {
    const idx = cards.findIndex((c) => c.id === id);
    if (idx !== -1 && idx !== 1) {
      handleCardClick(idx);
    }
  };

  const cycleCards = (direction: 'prev' | 'next') => {
    const newCards = [...cards];
    if (direction === 'next') {
      const first = newCards.shift();
      if (first) newCards.push(first);
    } else {
      const last = newCards.pop();
      if (last) newCards.unshift(last);
    }
    setCards(newCards);
  };

  const activeCard = cards[1];

  return (
    <>
      {/* Companies We Work With - Soft Fanned 3D Tilt Cards */}
      <section className="bg-[#FAF8F5] py-12 md:py-16 overflow-hidden border-b border-[#E8E3DC]">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6">
          <RevealBlock y={18}>
            <div className="text-center max-w-[600px] mx-auto">
              <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                Trusted Partnerships
              </p>
              <h2 className="font-display mt-1.5 text-[24px] md:text-[32px] font-extrabold text-[#1A2530] tracking-[-0.02em]">
                Companies we work with
              </h2>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#4B5563]">
                Quiet, dependable systems built for real South African teams. Tap any card to see
                how Vuka turns operational friction into calm execution.
              </p>
            </div>
          </RevealBlock>

          {/* Soft Partner Selector Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {PARTNER_CARDS.map((partner) => {
              const isSelected = activeCard.id === partner.id;
              return (
                <button
                  key={partner.id}
                  type="button"
                  onClick={() => handleSelectById(partner.id)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-xl text-[12px] font-semibold transition-all duration-300 border',
                    isSelected
                      ? 'bg-[#2B6BF3] text-white border-[#2B6BF3] shadow-[0_4px_14px_rgba(43,107,243,0.20)]'
                      : 'bg-white/90 text-[#525E6B] border-[#EFEAE2] hover:border-[#8CA4D6] hover:text-[#1A2530]'
                  )}
                >
                  {partner.companyName}
                </button>
              );
            })}
          </div>

          {/* Desktop Compact Fanned 3D Tilt Deck */}
          <div className="hidden md:flex relative h-[415px] w-full items-center justify-center mt-2">
            <div className="relative h-full w-full" style={{ perspective: '1100px' }}>
              {cards.map((partner, index) => (
                <AnimatedJobCard
                  key={partner.id}
                  {...partner}
                  onClick={() => handleCardClick(index)}
                  className={cn(
                    'absolute left-0 right-0 top-[20px] mx-auto w-[320px]',
                    cardTransforms[index]
                  )}
                />
              ))}
            </div>
          </div>

          {/* Mobile Compact Single Active Card with Prev/Next */}
          <div className="md:hidden mt-6 flex flex-col items-center">
            <AnimatedJobCard {...activeCard} className="w-full max-w-[330px]" />
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => cycleCards('prev')}
                aria-label="Previous partner"
                className="w-9 h-9 rounded-xl bg-white border border-[#EFEAE2] shadow-[0_4px_20px_rgba(0,0,0,0.045)] grid place-items-center text-[#1A2530] hover:border-[#2B6BF3] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[12px] font-semibold text-[#525E6B]">
                {activeCard.companyName}
              </span>
              <button
                type="button"
                onClick={() => cycleCards('next')}
                aria-label="Next partner"
                className="w-9 h-9 rounded-xl bg-white border border-[#EFEAE2] shadow-[0_4px_20px_rgba(0,0,0,0.045)] grid place-items-center text-[#1A2530] hover:border-[#2B6BF3] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vuka Enterprise Core */}
      <section
        id="vuka-enterprise-core"
        className="relative bg-[#FAF8F5] vuka-dot-canvas py-16 md:py-22 border-b border-[#E8E3DC] overflow-hidden"
      >
        <div className="relative mx-auto max-w-[1160px] px-4 md:px-6">
          <RevealBlock y={24}>
            <div className="text-center max-w-[700px] mx-auto">
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                Vuka Enterprise Core
              </p>
              <h2 className="font-display mt-2.5 text-[28px] md:text-[38px] font-extrabold text-[#1A2530] tracking-[-0.025em] leading-[1.15]">
                Enterprise automation.
                <br />
                Intelligent operations. Measurable results.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.68] text-[#4B5563]">
                Six specialised engines on one shared platform — security, APIs, analytics and AI
                included. Sell outcomes: more leads, less admin, better reporting, faster support.
              </p>
            </div>
          </RevealBlock>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ENTERPRISE_CORE_PILLARS.map((pillar, idx) => (
              <RevealItem key={pillar.title} index={idx} className="flex">
                <div className="group relative w-full bg-white border border-[#E8E3DC] rounded-[18px] p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#8CA4D6] hover:shadow-[0_12px_28px_rgba(43,107,243,0.11)] transition-all duration-450 vuka-ease">
                  <span
                    aria-hidden="true"
                    className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors duration-300"
                  />
                  <div className="w-9 h-9 rounded-xl bg-[#EEF5FD] border border-[#D4E2F7] font-mono-tabular text-[11px] font-bold text-[#2B6BF3] grid place-items-center mx-auto mb-3 transition-transform duration-500 vuka-ease group-hover:scale-105">
                    0{idx + 1}
                  </div>
                  <strong className="block font-display text-[14px] font-extrabold text-[#1A2530]">
                    {pillar.title}
                  </strong>
                  <span className="mt-1.5 block text-[12px] leading-[1.45] text-[#4B5563]">
                    {pillar.desc}
                  </span>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
