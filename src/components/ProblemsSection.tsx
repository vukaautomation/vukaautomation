import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { PROBLEMS } from '../data/vukaData';
import { RevealBlock, RevealItem, VUKA_EASE } from './MotionReveal';

function ProblemNodeIllustration({ id, active }: { id: string; active: boolean }) {
  const stroke = active ? '#2B6BF3' : '#8CA4D6';
  const fillSoft = active ? '#D9E6FA' : '#E0ECF8';
  const fillLight = active ? '#EDF4FE' : '#EEF5FD';

  switch (id) {
    case 'repetitive-work':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0" aria-hidden="true">
          <circle cx="24" cy="24" r="15" fill={fillLight} stroke={stroke} strokeWidth="2.4" />
          <path d="M24 14v10l6.5 4" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 10l-3 3M36 10l3 3" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'lost-leads':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0" aria-hidden="true">
          <circle cx="24" cy="24" r="15" fill="none" stroke={stroke} strokeWidth="2.4" />
          <circle cx="24" cy="24" r="8.5" fill={fillLight} stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill={stroke} />
          <path d="M24 5v5M24 38v5M5 24h5M38 24h5" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case 'disorganised-data':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0" aria-hidden="true">
          <ellipse cx="24" cy="13" rx="12.5" ry="4.5" fill={fillSoft} stroke={stroke} strokeWidth="2.2" />
          <path d="M11.5 13v7.5c0 2.5 5.6 4.5 12.5 4.5s12.5-2 12.5-4.5V13" fill={fillLight} stroke={stroke} strokeWidth="2.2" />
          <path d="M11.5 20.5V28c0 2.5 5.6 4.5 12.5 4.5s12.5-2 12.5-4.5v-7.5" fill={fillSoft} stroke={stroke} strokeWidth="2.2" />
          <path d="M11.5 28v7c0 2.5 5.6 4.5 12.5 4.5s12.5-2 12.5-4.5v-7" fill={fillLight} stroke={stroke} strokeWidth="2.2" />
        </svg>
      );
    case 'inefficient-ops':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0" aria-hidden="true">
          <rect x="7" y="10" width="34" height="22" rx="4" fill={fillLight} stroke={stroke} strokeWidth="2.4" />
          <path d="M15 26a9 9 0 0 1 18 0" fill="none" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
          <path d="M24 26l5-5" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
          <circle cx="24" cy="26" r="2" fill={stroke} />
          <path d="M24 32v5M17 37h14" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case 'poor-financial':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0" aria-hidden="true">
          <rect x="9" y="25" width="7" height="14" rx="2" fill={fillSoft} />
          <rect x="20.5" y="18" width="7" height="21" rx="2" fill={stroke} opacity="0.72" />
          <rect x="32" y="10" width="7" height="29" rx="2" fill={stroke} />
          <path d="M10 17l10-6 7 4 11-7" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'slow-support':
    default:
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0" aria-hidden="true">
          <path d="M24 7v5" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="24" cy="6.5" r="2.3" fill={stroke} />
          <rect x="10" y="13" width="28" height="21" rx="7" fill={fillLight} stroke={stroke} strokeWidth="2.4" />
          <circle cx="18.5" cy="23" r="2.2" fill={stroke} />
          <circle cx="29.5" cy="23" r="2.2" fill={stroke} />
          <path d="M19 29c1.6 1.2 8.4 1.2 10 0" fill="none" stroke={stroke} strokeWidth="2.1" strokeLinecap="round" />
          <path d="M18 34l-2 5 6.5-5" fill={fillLight} stroke={stroke} strokeWidth="2.1" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ProblemsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="problems"
      className="relative vuka-dot-canvas py-16 md:py-24 border-b border-[#E8E3DC] overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6">
        <RevealBlock y={24}>
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-display text-[30px] md:text-[40px] font-bold tracking-[-0.025em] text-[#1A2530] leading-[1.15]">
              Problems We Eliminate
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#4B5563]">
              Manual processes. Repetitive tasks. Operational bottlenecks. Missed opportunities. We
              eliminate the busywork that slows your business down, drains resources and eats into
              your margins — so your team can focus on growth, innovation and what matters most.
            </p>
          </div>
        </RevealBlock>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <RevealItem key={item.id} index={idx} className="flex">
                <article
                  className={`group relative w-full bg-white rounded-[18px] p-6 flex flex-col justify-between transition-all duration-450 vuka-ease shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
                    isOpen
                      ? 'border-2 border-[#2B6BF3] shadow-[0_16px_36px_rgba(43,107,243,0.16)] -translate-y-1'
                      : 'border border-[#E8E3DC] hover:-translate-y-1 hover:border-[#8CA4D6] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]'
                  }`}
                >
                  {/* Node Connector Ports */}
                  <span
                    aria-hidden="true"
                    className={`absolute -top-[6px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] transition-colors duration-300 ${
                      isOpen ? 'border-[#2B6BF3]' : 'border-[#8CA4D6] group-hover:border-[#2B6BF3]'
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`hidden lg:block absolute top-1/2 -left-[6px] -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] transition-colors duration-300 ${
                      isOpen ? 'border-[#2B6BF3]' : 'border-[#8CA4D6] group-hover:border-[#2B6BF3]'
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`hidden lg:block absolute top-1/2 -right-[6px] -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] transition-colors duration-300 ${
                      isOpen ? 'border-[#2B6BF3]' : 'border-[#8CA4D6] group-hover:border-[#2B6BF3]'
                    }`}
                  />

                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="transition-transform duration-500 vuka-ease group-hover:scale-105">
                          <ProblemNodeIllustration id={item.id} active={isOpen} />
                        </div>
                        <div className="min-w-0">
                          <span className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-[#F59E0B]">
                            {item.badge}
                          </span>
                          <h3 className="font-display mt-0.5 font-bold text-[16.5px] leading-[1.3] text-[#1A2530]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-[13.5px] leading-[1.65] text-[#4B5563]">{item.desc}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#ECE7E1]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[12.5px] font-semibold text-[#2B6BF3]">{item.fix}</span>
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        aria-expanded={isOpen}
                        className="inline-flex items-center gap-1 h-8 px-3 rounded-lg border border-[#E8E3DC] bg-[#FAF8F5] hover:border-[#8CA4D6] hover:bg-white text-[12px] font-semibold text-[#1A2530] whitespace-nowrap shrink-0 transition-colors duration-200"
                      >
                        <span>{isOpen ? 'Hide fix' : 'Read fix'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#2B6BF3] transition-transform duration-300 vuka-ease ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={prefersReduced ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={prefersReduced ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.34, ease: VUKA_EASE }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3.5 pt-3.5 border-t border-[#ECE7E1] text-[13.5px] leading-[1.65] text-[#374151]">
                            {item.detail}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
