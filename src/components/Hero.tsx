import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { VUKA_EASE } from './MotionReveal';
import { InteractiveGlobe } from './ui/interactive-globe';

interface HeroProps {
  onSeeHowItWorks: () => void;
}

export function Hero({ onSeeHowItWorks }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const glowDriftTop = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const glowDriftBottom = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#FAF8F5] border-b border-[#E8E3DC]"
    >
      <div
        className="absolute inset-0 hero-dot-grid opacity-90 pointer-events-none"
        aria-hidden="true"
      />

      {/* Interactive Globe as absolute full-bleed background layer behind header */}
      <div
        aria-hidden="true"
        className="absolute right-[-10%] sm:right-[-4%] lg:right-[4%] top-1/2 -translate-y-1/2 w-[520px] sm:w-[620px] md:w-[720px] aspect-square opacity-22 lg:opacity-28 pointer-events-auto z-0"
      >
        <InteractiveGlobe size={720} />
      </div>

      <motion.div
        style={prefersReduced ? undefined : { y: glowDriftTop }}
        className="absolute -top-[220px] -right-[180px] w-[640px] h-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(43,107,243,0.12),transparent)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <motion.div
        style={prefersReduced ? undefined : { y: glowDriftBottom }}
        className="absolute -bottom-[240px] -left-[180px] w-[620px] h-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(140,164,214,0.22),transparent)] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 md:px-6 pt-20 md:pt-28 pb-22 md:pb-30">
        <div className="text-center max-w-[820px] mx-auto">
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.04, ease: VUKA_EASE }}
            className="text-[12px] md:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#2B6BF3]"
          >
            INTELLIGENT BUSINESS SYSTEMS
          </motion.p>

          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: VUKA_EASE }}
            className="font-display mt-5 text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] tracking-[-0.03em] font-extrabold text-[#1A2530]"
          >
            Build custom automation
            <br className="hidden sm:block" /> for your business{' '}
            <span className="bg-gradient-to-r from-[#2B6BF3] to-[#1E56D0] bg-clip-text text-transparent">
              without the enterprise price tag.
            </span>
          </motion.h1>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: VUKA_EASE }}
            className="mt-6 text-[16px] md:text-[18px] leading-[1.65] text-[#4B5563] max-w-[640px] mx-auto"
          >
            Smart IT. Flawless Automation. Vuka turns your operational chaos into a self-running
            machine. From custom apps to AI-driven workflows, we build the tech that does the heavy
            lifting—so you don’t have to.
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease: VUKA_EASE }}
            className="mt-9 flex flex-col items-center justify-center"
          >
            <div className="relative group inline-flex flex-col items-center">
              <button
                type="button"
                onClick={onSeeHowItWorks}
                className="relative z-10 h-[50px] px-8 rounded-xl bg-gradient-to-r from-[#2B6BF3] to-[#1E56D0] text-white font-semibold text-[15px] shadow-[0_14px_32px_rgba(43,107,243,0.26)] group-hover:-translate-y-[3px] group-hover:shadow-[0_20px_42px_rgba(43,107,243,0.34)] transition-all duration-500 vuka-ease inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6BF3]"
              >
                <span>See how it works</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 vuka-ease group-hover:translate-x-1.5" />
              </button>
              <div
                aria-hidden="true"
                className="mt-2 h-2 w-36 rounded-full bg-[#1A2530]/16 blur-[10px] transition-all duration-500 vuka-ease group-hover:scale-x-95 group-hover:opacity-65"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
