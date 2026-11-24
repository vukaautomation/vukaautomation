import { ChevronDown, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { FAQ_ITEMS } from '../data/vukaData';
import { RevealBlock, RevealItem, VUKA_EASE } from './MotionReveal';

export function FaqAndFounderSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* FAQ */}
      <section id="faq-section" className="bg-white py-16 md:py-24 border-b border-[#E8E3DC]">
        <div className="mx-auto max-w-[860px] px-4 md:px-6">
          <RevealBlock y={22}>
            <div className="text-center max-w-[560px] mx-auto">
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">FAQ</p>
              <h2 className="font-display mt-2 text-[30px] md:text-[38px] font-extrabold text-[#1A2530] tracking-[-0.025em]">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#4B5563]">
                Straight answers on timelines, data, pricing, and who we work with.
              </p>
            </div>
          </RevealBlock>

          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <RevealItem key={item.q} index={idx}>
                  <div
                    className={`relative rounded-[18px] transition-all duration-400 vuka-ease ${
                      isOpen
                        ? 'bg-[#FAF8F5] border-2 border-[#2B6BF3] shadow-[0_14px_34px_rgba(43,107,243,0.11)]'
                        : 'bg-white border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#8CA4D6]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`hidden sm:block absolute top-1/2 -left-[5.5px] -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] transition-colors duration-300 ${
                        isOpen ? 'border-[#2B6BF3]' : 'border-[#8CA4D6]'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6BF3] rounded-[18px]"
                    >
                      <span className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono-tabular text-[11px] font-bold text-[#64748B] shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="font-display font-bold text-[15px] text-[#1A2530]">
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`w-8 h-8 rounded-lg border border-[#E8E3DC] grid place-items-center shrink-0 transition-all duration-300 vuka-ease ${
                          isOpen
                            ? 'bg-[#2B6BF3] text-white border-[#2B6BF3] rotate-180'
                            : 'bg-[#EEF5FD] text-[#2B6BF3]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={prefersReduced ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={prefersReduced ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.34, ease: VUKA_EASE }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pl-[52px] text-[14.5px] leading-[1.7] text-[#4B5563]">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Rockie */}
      <section id="founder" className="relative vuka-dot-canvas py-16 md:py-22 border-b border-[#E8E3DC] overflow-hidden">
        <div className="relative mx-auto max-w-[920px] px-4 md:px-6">
          <RevealBlock y={28}>
            <div className="relative bg-white border border-[#E8E3DC] rounded-[22px] p-7 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-start sm:items-center gap-7 md:gap-10">
              <span
                aria-hidden="true"
                className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#8CA4D6]"
              />
              <div className="shrink-0 flex flex-col items-center">
                <img
                  src="/images/founder-rockie.jpg"
                  alt="Rockie — Founder of Vuka Automation"
                  className="w-[120px] h-[120px] sm:w-[144px] sm:h-[144px] rounded-[18px] object-cover object-top shadow-[0_10px_26px_rgba(17,24,39,0.12)]"
                />
                <div
                  aria-hidden="true"
                  className="mt-2 h-2 w-24 rounded-full bg-[#1A2530]/16 blur-[8px]"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2B6BF3]">
                  SMART IT & SYSTEM ARCHITECT
                </p>
                <h2 className="font-display mt-1.5 text-[24px] md:text-[30px] font-extrabold text-[#1A2530] tracking-[-0.02em]">
                  Meet Rockie
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#4B5563]">
                  Pretoria-based Smart IT Architect. I engineer intelligent, AI-powered operational
                  ecosystems that replace manual work for South African businesses. From custom
                  databases to automated workflows and smart IT infrastructure—when you message me
                  on WhatsApp, you're talking directly to the architect who designs, builds, and
                  ships your systems.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/27714443601?text=Hi%20Rockie%2C%20I'd%20like%20to%20automate%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-[13.5px] shadow-[0_8px_20px_rgba(37,211,102,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(37,211,102,0.34)] transition-all duration-400 vuka-ease inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Talk to Rockie on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>
    </>
  );
}
