import { motion, useReducedMotion } from 'motion/react';
import { ENTERPRISE_CORE_PILLARS } from '../data/vukaData';
import { RevealBlock, RevealItem } from './MotionReveal';

const PARTNERS = [
  {
    name: 'UBELONG',
    sub: 'Community & Operations',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.03__1__371a82f3.jpeg',
    cardStyle: 'bg-[#090A0F] border-[#1F2430]',
    imgScale: 'scale-[2.6]',
  },
  {
    name: 'TechnoFresh',
    sub: 'Market Information Partner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.03_f77f645f.jpeg',
    cardStyle: 'bg-black border-[#1E293B]',
    imgScale: 'scale-[1.25]',
  },
  {
    name: 'Easy Greens',
    sub: 'Farming & Farm Produce',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.02__1__49839181.jpeg',
    cardStyle: 'bg-white border-[#DDD8D2]',
    imgScale: 'scale-[2.1]',
  },
  {
    name: 'Rosebank College',
    sub: 'IIE Educational Partner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-24_at_17.27.02_9439a54a.jpeg',
    cardStyle: 'bg-white border-[#DDD8D2]',
    imgScale: 'scale-[1.18]',
  },
];

export function EnterpriseCoreSection() {
  const prefersReduced = useReducedMotion();

  // Create quadrupled array for an unbroken, smooth 3D infinite slide reel
  const marqueeItems = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <>
      {/* Companies We Work With - 3D Sliding Showcase */}
      <section className="bg-[#FAF8F5] py-10 md:py-14 overflow-hidden border-b border-[#E8E3DC]">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 mb-7">
          <RevealBlock y={18}>
            <div className="text-center max-w-[620px] mx-auto">
              <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                Trusted Partnerships
              </p>
              <h2 className="font-display mt-1.5 text-[22px] md:text-[28px] font-extrabold text-[#1A2530] tracking-[-0.02em]">
                Companies we work with
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#4B5563]">
                Powering mission-critical automation and operational intelligence for leading South African organizations.
              </p>
            </div>
          </RevealBlock>
        </div>

        {/* 3D Sliding Track Container */}
        <div
          className="relative w-full overflow-hidden py-3"
          style={{ perspective: '1100px', perspectiveOrigin: '50% 50%' }}
        >
          {/* Atmospheric Left / Right 3D Depth Masks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20"
          />

          {/* 3D Motion Track */}
          <motion.div
            className="flex gap-3 w-max"
            animate={prefersReduced ? undefined : { x: ['0%', '-50%'] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={prefersReduced ? undefined : { animationPlayState: 'paused' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {marqueeItems.map((partner, idx) => (
              <motion.div
                key={`${partner.name}-${idx}`}
                className={`group relative w-[124px] sm:w-[138px] h-[52px] sm:h-[58px] border rounded-[11px] p-1.5 flex items-center justify-center overflow-hidden shadow-[0_3px_12px_rgba(17,24,39,0.05)] hover:border-[#2B6BF3] hover:shadow-[0_10px_22px_rgba(43,107,243,0.14)] transition-all duration-300 vuka-ease shrink-0 cursor-pointer ${partner.cardStyle}`}
                title={`${partner.name} — ${partner.sub}`}
                style={{
                  transform: 'rotateY(-8deg) rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  transform: 'rotateY(0deg) rotateX(0deg) translateZ(16px) scale(1.06)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Specular sheen on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out z-10"
                />

                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`w-full h-full object-contain transition-transform duration-400 vuka-ease group-hover:scale-105 ${partner.imgScale}`}
                />
              </motion.div>
            ))}
          </motion.div>
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
