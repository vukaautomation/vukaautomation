import { HOW_WE_WORK_STEPS } from '../data/vukaData';
import { RevealBlock, RevealItem } from './MotionReveal';

export function ProcessAndInsightsSection() {
  return (
    <section
      id="how-we-work"
      className="relative vuka-dot-canvas py-16 md:py-24 border-b border-[#E8E3DC] overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1160px] px-4 md:px-6">
        <RevealBlock y={24}>
          <div className="text-center max-w-[600px] mx-auto">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
              PROCESS
            </p>
            <h2 className="font-display mt-2 text-[30px] md:text-[38px] font-extrabold text-[#1A2530] tracking-[-0.025em]">
              How we work
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#4B5563]">
              A clear path from first call to go-live — fixed scope, visible progress, no black
              boxes.
            </p>
          </div>
        </RevealBlock>

        <div className="relative mt-12">
          {/* Animated horizontal dashed pipeline wire connecting all 5 step nodes on desktop */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            className="hidden lg:block absolute top-1/2 left-4 right-4 w-[calc(100%-2rem)] h-[3px] -translate-y-1/2 pointer-events-none"
          >
            <line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="#8CA4D6"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="#2B6BF3"
              strokeOpacity="0.45"
              strokeWidth="2"
              className="vuka-wire-pulse"
            />
          </svg>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_WE_WORK_STEPS.map((step, idx) => (
              <RevealItem key={step.num} index={idx} className="flex">
                <div className="group relative w-full bg-white border border-[#E8E3DC] rounded-[18px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#8CA4D6] hover:shadow-[0_12px_28px_rgba(43,107,243,0.11)] transition-all duration-450 vuka-ease">
                  {idx > 0 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute top-1/2 -left-[5.5px] -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors duration-300"
                    />
                  )}
                  {idx < HOW_WE_WORK_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute top-1/2 -right-[5.5px] -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors duration-300"
                    />
                  )}

                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FD] border border-[#D4E2F7] text-[#2B6BF3] font-mono-tabular font-bold text-[13px] grid place-items-center transition-transform duration-500 vuka-ease group-hover:scale-105">
                    {step.num}
                  </div>
                  <h3 className="font-display mt-4 font-extrabold text-[15px] text-[#1A2530]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#4B5563]">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
