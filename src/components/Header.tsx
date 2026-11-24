import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { VUKA_EASE } from './MotionReveal';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const NAV_LINKS = [
  { id: 'solutions', label: 'Solutions', num: '01' },
  { id: 'tools', label: 'Integrations', num: '02' },
  { id: 'how-we-work', label: 'Process', num: '03' },
  { id: 'faq-section', label: 'FAQ', num: '04' },
];

const ROCKIE_WHATSAPP_URL =
  "https://wa.me/27714443601?text=Hi%20Rockie%2C%20I'd%20like%20to%20automate%20my%20business%20systems.";

export function Header({ onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-400 vuka-ease border-b ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-xl border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
          : 'bg-[#FAF8F5]/88 backdrop-blur-lg border-[#E8E3DC]'
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B6BF3] rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Vuka Automation home"
        >
          <img
            src="/images/vuka-logo.png"
            alt="Vuka Automation"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Zone 2: Primary navigation links */}
        <nav
          className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#4B5563]"
          aria-label="Primary"
        >
          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className="whitespace-nowrap shrink-0 hover:text-[#1A2530] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#2B6BF3] hover:after:w-full after:transition-all after:duration-300 vuka-ease focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B6BF3] rounded"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Animated Burger Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={ROCKIE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl bg-gradient-to-r from-[#2B6BF3] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1743A3] text-white text-[13.5px] font-semibold whitespace-nowrap shrink-0 shadow-[0_6px_18px_rgba(43,107,243,0.24)] transition-all duration-300 vuka-ease hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(43,107,243,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6BF3]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Talk to Rockie</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden relative w-11 h-11 rounded-full border grid place-items-center overflow-hidden transition-colors duration-300 ${
              mobileOpen
                ? 'border-[#1A2530] bg-[#1A2530] text-white'
                : 'border-[#E8E3DC] bg-white text-[#1A2530] hover:bg-[#FAF8F5]'
            }`}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span className="relative w-5 h-4 flex flex-col justify-between items-center" aria-hidden="true">
              <span
                className="block h-[2px] w-full rounded-full bg-current transition-transform duration-500"
                style={{
                  transitionTimingFunction: 'cubic-bezier(.77,0,.18,1)',
                  transform: mobileOpen ? 'translateY(7px) rotate(45deg) scaleX(0.85)' : 'none',
                }}
              />
              <span
                className="block h-[2px] w-full rounded-full bg-current transition-opacity duration-300"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-[2px] w-full rounded-full bg-current transition-transform duration-500"
                style={{
                  transitionTimingFunction: 'cubic-bezier(.77,0,.18,1)',
                  transform: mobileOpen ? 'translateY(-7px) rotate(-45deg) scaleX(0.85)' : 'none',
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Smooth Curtain Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: VUKA_EASE }}
            className="lg:hidden overflow-hidden border-t border-[#E8E3DC] bg-[#FAF8F5]/98 backdrop-blur-xl"
          >
            <div className="px-4 py-5 flex flex-col gap-1.5">
              {NAV_LINKS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={prefersReduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.045,
                    ease: VUKA_EASE,
                  }}
                  onClick={() => handleNav(item.id)}
                  className="group flex items-baseline gap-3 text-left px-3 py-2.5 rounded-xl text-[16px] font-medium text-[#1A2530] hover:bg-white transition-all duration-200"
                >
                  <span className="font-mono-tabular text-[11px] font-semibold text-[#8CA4D6] group-hover:text-[#2B6BF3] transition-colors">
                    {item.num}.
                  </span>
                  <span className="transition-transform duration-300 vuka-ease group-hover:translate-x-1.5">
                    {item.label}
                  </span>
                </motion.button>
              ))}
              <a
                href={ROCKIE_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 h-11 px-4 rounded-xl bg-gradient-to-r from-[#2B6BF3] to-[#1E56D0] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(43,107,243,0.22)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to Rockie</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
