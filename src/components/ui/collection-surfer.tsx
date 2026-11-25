"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "motion/react";

export interface CollectionItem {
  id: number;
  image: string;
  title: string;
}

export type CollectionSurferVariant = "magnetic" | "uplift" | "simple";

const ITEMS: CollectionItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    title: "VUKA LOGISTICS",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    title: "AUTOMATED CRM",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "STOCK & ERP",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    title: "API INTEGRATION",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    title: "FINANCE FLOW",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "ENTERPRISE CORE",
  },
];

interface CollectionSurferProps {
  items?: CollectionItem[];
  variant?: CollectionSurferVariant;
}

export function CollectionSurfer({
  items = ITEMS,
  variant = "magnetic",
}: CollectionSurferProps) {
  const duplicatedItems = [...items, ...items];
  const scrollPerItem = 500;
  const loopDistance = items.length * scrollPerItem;

  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const loopedProgress = useTransform(
    smoothScroll,
    (value) => value % loopDistance,
  );

  const stepX = 220;
  const stepY = -70;
  const stepZ = -240;

  const x = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepX],
  );
  const y = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepY],
  );
  const z = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepZ],
  );

  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant === "simple") return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    if (variant === "simple") return;
    mouseX.set(-10000);
    mouseY.set(-10000);
  };

  return (
    <div className="relative bg-[#080510] min-h-[70vh] text-white w-full rounded-[28px] overflow-hidden my-8 border border-white/10 shadow-2xl">
      <div style={{ height: "15000px" }} className="w-full" />

      <div
        className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center perspective-container pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-[28px] left-[32px] z-30 pointer-events-none">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#38BDF8]">
            Interactive Showcase
          </p>
          <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-1 text-white">
            VUKA AUTOMATION SUITE
          </h3>
        </div>

        <div className="absolute bottom-[24px] right-[32px] z-30 font-mono text-xs tracking-wider uppercase text-white/60">
          scroll to surf cards
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "1800px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <motion.div
            className="relative w-0 h-0"
            style={{
              x,
              y,
              z,
              transformStyle: "preserve-3d",
            }}
          >
            {duplicatedItems.map((item, i) => (
              <Card
                key={`${item.id}-${i}`}
                item={item}
                i={i}
                stepX={stepX}
                stepY={stepY}
                stepZ={stepZ}
                mouseX={mouseX}
                mouseY={mouseY}
                scrollSpring={smoothScroll}
                variant={variant}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Card({
  item,
  i,
  stepX,
  stepY,
  stepZ,
  mouseX,
  mouseY,
  scrollSpring,
  variant,
}: {
  item: CollectionItem;
  i: number;
  stepX: number;
  stepY: number;
  stepZ: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollSpring: MotionValue<number>;
  variant: CollectionSurferVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform([mouseX, mouseY, scrollSpring], ([x, y]: any) => {
    if (!ref.current || variant === "simple") return 200;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.sqrt(Math.pow(Number(x) - centerX, 2) + Math.pow(Number(y) - centerY, 2));
    return dist;
  });

  const targetScale = useTransform(distance, [0, 350], [1.35, 1]);
  const springScale = useSpring(targetScale, {
    mass: 0.4,
    stiffness: 280,
    damping: 18,
  });

  const targetUplift = useTransform(distance, [0, 350], [-70, 0]);
  const springUplift = useSpring(targetUplift, {
    mass: 0.4,
    stiffness: 280,
    damping: 18,
  });

  const transform = useTransform([springScale, springUplift], ([s, u]) => {
    let scaleValue = 1;
    let upliftValue = 0;

    if (variant === "magnetic") {
      scaleValue = Number(s);
    } else if (variant === "uplift") {
      upliftValue = Number(u);
    }

    const baseX = i * stepX;
    const baseY = i * stepY;
    const baseZ = i * stepZ;

    return `translate3d(${baseX}px, ${baseY + upliftValue}px, ${baseZ}px) rotateY(-45deg) scale(${scaleValue})`;
  });

  return (
    <motion.div
      ref={ref}
      className="absolute w-[240px] h-[320px] bg-neutral-900 rounded-[20px] overflow-hidden shadow-2xl border border-white/15 group cursor-pointer"
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute top-3 left-4 z-20 text-white font-mono text-[11px] font-bold opacity-70 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm">
        {String((i % 6) + 1).padStart(2, "0")}
      </div>

      <div className="relative w-full h-full brightness-[0.82] group-hover:brightness-100 transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-4 right-4 z-20">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
          Vuka Engine
        </span>
        <h4 className="font-display font-bold text-[15px] text-white tracking-tight mt-0.5">
          {item.title}
        </h4>
      </div>
    </motion.div>
  );
}

export default CollectionSurfer;
