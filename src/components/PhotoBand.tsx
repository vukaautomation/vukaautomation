import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { RevealBlock } from './MotionReveal';

interface PhotoBandProps {
  id: string;
  src: string;
  alt: string;
  contain?: boolean;
  objectPositionClass?: string;
}

export function PhotoBand({
  id,
  src,
  alt,
  contain = false,
  objectPositionClass = 'object-center',
}: PhotoBandProps) {
  const bandRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section
      ref={bandRef}
      id={id}
      className="bg-[#FAF8F5] py-9 md:py-12 border-b border-[#E8E3DC] overflow-hidden"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <RevealBlock y={30}>
          <div className="relative group">
            <div className="rounded-[20px] overflow-hidden border border-[#E8E3DC] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                style={prefersReduced ? undefined : { y: imageY }}
                className={`w-full block object-cover will-change-transform ${
                  prefersReduced ? '' : 'scale-[1.08]'
                } ${objectPositionClass} ${
                  contain
                    ? 'max-h-[460px]'
                    : 'h-[240px] sm:h-[320px] md:h-[380px]'
                }`}
              />
            </div>
            {/* Soft architectural contact shadow */}
            <div
              aria-hidden="true"
              className="mx-auto mt-2.5 h-3 w-[78%] rounded-full bg-[#1A2530]/8 blur-[14px]"
            />
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
