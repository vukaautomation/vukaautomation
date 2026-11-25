import { motion, useReducedMotion } from 'motion/react';
import { VUKA_EASE } from './MotionReveal';

export function RockieChatWidget() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      id="rockie-root"
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.5, ease: VUKA_EASE }}
    >
      <a
        id="rockie-fab"
        href="https://wa.me/27714443601?text=Hi%20Rockie%2C%20I'd%20like%20to%20automate%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talk to Rockie on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 h-12 pl-2 pr-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-[13.5px] shadow-[0_12px_32px_rgba(18,140,126,0.34)] hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(18,140,126,0.42)] transition-all duration-400 vuka-ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <span className="relative shrink-0">
          <img
            src="/images/rockie-avatar.jpg"
            alt="Rockie"
            className="w-8 h-8 rounded-full object-cover border border-white/50"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] border-2 border-white"
          />
        </span>
        <span className="whitespace-nowrap">Talk to Rockie</span>
      </a>
    </motion.div>
  );
}
