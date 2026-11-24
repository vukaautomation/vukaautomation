import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

export const VUKA_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function RevealBlock({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.85,
        delay,
        ease: VUKA_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealStaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  y?: number;
}

export function RevealItem({
  children,
  className,
  index = 0,
  y = 24,
}: RevealStaggerItemProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.065, 0.34),
        ease: VUKA_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
