import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { MouseEvent, useState } from 'react';
import { HUB_ENGINES, HubEngineItem } from '../data/vukaData';
import { RevealBlock, VUKA_EASE } from './MotionReveal';

interface EngineHubSectionProps {
  selectedEngineId?: string | null;
  onSelectEngine?: (id: string) => void;
}

function HubNodeIllustration({ id, active }: { id: string; active: boolean }) {
  const stroke = active ? '#2B6BF3' : '#8CA4D6';
  const fillSoft = active ? '#D9E6FA' : '#C9D9EE';
  const fillLight = active ? '#EDF4FE' : '#EEF5FD';
  const cls = 'w-8 h-8 lg:w-11 lg:h-11 shrink-0 transition-transform duration-500 vuka-ease';

  switch (id) {
    case 'leadflow':
      return (
        <svg viewBox="0 0 48 48" className={cls} aria-hidden="true">
          <circle cx="24" cy="24" r="16" fill="none" stroke={stroke} strokeWidth="2.5" />
          <circle cx="24" cy="24" r="9.5" fill={fillLight} stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="3.5" fill={stroke} />
          <path
            d="M24 4v6M24 38v6M4 24h6M38 24h6"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'opsboard':
      return (
        <svg viewBox="0 0 48 48" className={cls} aria-hidden="true">
          <rect
            x="6"
            y="9"
            width="36"
            height="24"
            rx="3.5"
            fill={fillLight}
            stroke={stroke}
            strokeWidth="2.5"
          />
          <path
            d="M14 27a10 10 0 0 1 20 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M24 27l5.5-5.5"
            stroke={stroke}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="27" r="2" fill={stroke} />
          <path d="M24 33v5M16 38h16" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'dataclean':
      return (
        <svg viewBox="0 0 48 48" className={cls} aria-hidden="true">
          <ellipse cx="24" cy="12" rx="13" ry="4.5" fill={fillSoft} stroke={stroke} strokeWidth="2.2" />
          <path
            d="M11 12v8c0 2.5 5.8 4.5 13 4.5s13-2 13-4.5v-8"
            fill={fillLight}
            stroke={stroke}
            strokeWidth="2.2"
          />
          <path
            d="M11 20v8c0 2.5 5.8 4.5 13 4.5s13-2 13-4.5v-8"
            fill={fillSoft}
            stroke={stroke}
            strokeWidth="2.2"
          />
          <path
            d="M11 28v8c0 2.5 5.8 4.5 13 4.5s13-2 13-4.5v-8"
            fill={fillLight}
            stroke={stroke}
            strokeWidth="2.2"
          />
        </svg>
      );
    case 'financeflow':
      return (
        <svg viewBox="0 0 48 48" className={cls} aria-hidden="true">
          <rect x="8" y="24" width="7.5" height="15" rx="2" fill={fillSoft} />
          <rect x="20.25" y="16" width="7.5" height="23" rx="2" fill={stroke} opacity="0.72" />
          <rect x="32.5" y="9" width="7.5" height="30" rx="2" fill={stroke} />
        </svg>
      );
    case 'salesflow':
      return (
        <svg viewBox="0 0 48 48" className={cls} aria-hidden="true">
          <rect x="9" y="29" width="6.5" height="10" rx="1.5" fill={fillSoft} />
          <rect x="19.5" y="23" width="6.5" height="16" rx="1.5" fill={fillSoft} />
          <rect x="30" y="16" width="6.5" height="23" rx="1.5" fill={stroke} opacity="0.78" />
          <path
            d="M9 22l9-7 7 4 12-10"
            fill="none"
            stroke={stroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 9h6v6"
            fill="none"
            stroke={stroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'supportai':
    default:
      return (
        <svg viewBox="0 0 48 48" className={cls} aria-hidden="true">
          <path d="M24 7v5" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="6.5" r="2.5" fill={stroke} />
          <rect
            x="10"
            y="13"
            width="28"
            height="22"
            rx="7"
            fill={fillLight}
            stroke={stroke}
            strokeWidth="2.5"
          />
          <path
            d="M6.5 21v6M41.5 21v6"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="18.5" cy="23" r="2.2" fill={stroke} />
          <circle cx="29.5" cy="23" r="2.2" fill={stroke} />
          <path
            d="M19 29.5c1.5 1.3 8.5 1.3 10 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path d="M18 35l-2 5 7-5" fill={fillLight} stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );
  }
}

interface DesktopCardLayout {
  left: string;
  top: string;
  width: string;
  portSide: 'left' | 'right';
  wirePath: string;
}

const DESKTOP_LAYOUT: Record<HubEngineItem['pos'], DesktopCardLayout> = {
  tl: {
    left: '11.2%',
    top: '5.5%',
    width: '26.4%',
    portSide: 'right',
    wirePath: 'M 376 78 C 430 78, 456 112, 456 165',
  },
  tr: {
    left: '62.4%',
    top: '5.5%',
    width: '26.4%',
    portSide: 'left',
    wirePath: 'M 624 78 C 570 78, 544 112, 544 165',
  },
  ml: {
    left: '1.6%',
    top: '38.9%',
    width: '25.0%',
    portSide: 'right',
    wirePath: 'M 266 235 L 412 235',
  },
  mr: {
    left: '73.4%',
    top: '38.9%',
    width: '25.0%',
    portSide: 'left',
    wirePath: 'M 734 235 L 588 235',
  },
  bl: {
    left: '11.2%',
    top: '70.6%',
    width: '26.4%',
    portSide: 'right',
    wirePath: 'M 376 384 C 430 384, 456 352, 456 305',
  },
  br: {
    left: '62.4%',
    top: '70.6%',
    width: '26.4%',
    portSide: 'left',
    wirePath: 'M 624 384 C 570 384, 544 352, 544 305',
  },
};

export function EngineHubSection({
  selectedEngineId,
  onSelectEngine,
}: EngineHubSectionProps) {
  const [internalId, setInternalId] = useState<string>('leadflow');
  const activeId = selectedEngineId ?? internalId;
  const activeEngine = HUB_ENGINES.find((e) => e.id === activeId) || HUB_ENGINES[0];
  const prefersReduced = useReducedMotion();

  // Gentle Foldwild-inspired pointer depth parallax on the desktop hub diagram
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 120, damping: 24, mass: 0.8 });
  const smoothY = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.8 });
  const hubX = useSpring(rawX, { stiffness: 90, damping: 26, mass: 1 });
  const hubY = useSpring(rawY, { stiffness: 90, damping: 26, mass: 1 });

  const handleStageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(-nx * 14);
    rawY.set(-ny * 10);
  };

  const handleStageMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const handleSelect = (id: string) => {
    setInternalId(id);
    onSelectEngine?.(id);
  };

  return (
    <section
      id="solutions"
      aria-label="The Solution to South African Businesses — Vuka Engine Suite"
      className="relative vuka-dot-canvas py-18 md:py-26 border-b border-[#E4DFD8] overflow-hidden"
    >
      {/* Subtle Cobalt Halo Behind Central Engine */}
      <div
        className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[780px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(58,123,227,0.09),rgba(188,210,239,0.16),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1160px] px-4 md:px-6">
        {/* Flagship Product Editorial Split Header */}
        <RevealBlock y={28}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                <span>The Vuka Engine Suite</span>
                <span className="text-[#8CA4D6]" aria-hidden="true">·</span>
                <span className="text-[#4B5563]">Flagship Platform</span>
              </div>

              <h2 className="font-display mt-3.5 text-[32px] sm:text-[40px] md:text-[46px] font-extrabold tracking-[-0.03em] text-[#1A2530] leading-[1.06]">
                The Solution to{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">South African Businesses.</span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-1 h-3 bg-[#F59E0B]/24 -z-0 rounded-sm"
                  />
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <div className="relative bg-white border border-[#E8E3DC] rounded-[18px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-1/2 -left-[6px] -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#8CA4D6]"
                />
                <p className="text-[14.5px] leading-[1.62] text-[#4B5563]">
                  Six specialised automation engines unified by one Central Engine. Pick the
                  modules you need today, eliminate manual bottlenecks, and connect every department
                  as you grow.
                </p>
                <div className="mt-4 pt-3.5 border-t border-[#ECE7E1] grid grid-cols-3 gap-3">
                  <div>
                    <strong className="block font-mono-tabular text-[15px] font-extrabold text-[#1A2530]">
                      6
                    </strong>
                    <span className="block text-[11.5px] font-medium text-[#64748B]">
                      Core Engines
                    </span>
                  </div>
                  <div className="border-l border-[#ECE7E1] pl-3">
                    <strong className="block font-mono-tabular text-[15px] font-extrabold text-[#2B6BF3]">
                      1 Hub
                    </strong>
                    <span className="block text-[11.5px] font-medium text-[#64748B]">
                      Central Engine
                    </span>
                  </div>
                  <div className="border-l border-[#ECE7E1] pl-3">
                    <strong className="block font-mono-tabular text-[15px] font-extrabold text-[#1A2530]">
                      Zero
                    </strong>
                    <span className="block text-[11.5px] font-medium text-[#64748B]">
                      Rip &amp; Replace
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* Desktop Interactive Central Engine + 6 Orbiting Engines Diagram */}
        <RevealBlock delay={0.08} y={32}>
          <div
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
            className="hidden md:block relative mt-12 max-w-[1000px] mx-auto aspect-[1000/470]"
          >
            {/* Dashed Connectors + Animated Signal Pulse Overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1000 470"
              aria-hidden="true"
            >
              {HUB_ENGINES.map((engine) => {
                const layout = DESKTOP_LAYOUT[engine.pos];
                const isActive = activeId === engine.id;
                return (
                  <g key={engine.id}>
                    <path
                      d={layout.wirePath}
                      fill="none"
                      stroke={isActive ? '#8BAAD6' : '#B5B0A8'}
                      strokeWidth={isActive ? '2.2' : '1.75'}
                      strokeDasharray="6 6"
                    />
                    {isActive && (
                      <path
                        d={layout.wirePath}
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="2.5"
                        className="vuka-wire-pulse"
                      />
                    )}
                  </g>
                );
              })}

              {/* Midpoint Icon Circle: DataClean Filter/Funnel */}
              <g transform="translate(339, 235)">
                <circle r="19" fill="#FAF7F4" stroke="#D1CCC5" strokeWidth="1.5" />
                <circle r="15" fill="#FFFFFF" stroke="#E5E0D9" strokeWidth="1" />
                <path
                  d="M-7 -5h14l-5.2 6.2V6.5l-3.6-1.8V1.2L-7 -5z"
                  fill="#D9E6FA"
                  stroke="#6F90C2"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </g>

              {/* Midpoint Icon Circle: FinanceFlow Ledger/Doc */}
              <g transform="translate(661, 235)">
                <circle r="19" fill="#FAF7F4" stroke="#D1CCC5" strokeWidth="1.5" />
                <circle r="15" fill="#FFFFFF" stroke="#E5E0D9" strokeWidth="1" />
                <rect
                  x="-7"
                  y="-6.5"
                  width="14"
                  height="13"
                  rx="2"
                  fill="#FFFFFF"
                  stroke="#6F90C2"
                  strokeWidth="1.4"
                />
                <path
                  d="M-4 -2.5h8M-4 0.5h8M-4 3.5h5"
                  stroke="#8BAAD6"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            {/* Soft Oval Ground Shadow beneath Central Engine */}
            <div
              aria-hidden="true"
              className="absolute left-[43%] top-[65.5%] w-[14%] h-4 rounded-full bg-[#111827]/16 blur-[14px] pointer-events-none z-10"
            />

            {/* Central Engine Card (Anchor parallax layer) */}
            <motion.div
              style={
                prefersReduced
                  ? undefined
                  : { x: hubX, y: hubY }
              }
              className="absolute left-[41.2%] top-[35.1%] w-[17.6%] h-[29.8%] rounded-[18px] bg-white border border-[#D7D2CB] shadow-[0_18px_44px_rgba(17,24,39,0.10)] flex flex-col items-center justify-center gap-1.5 lg:gap-2 z-20 will-change-transform"
            >
              {/* Anchor Ports on Central Engine */}
              <span className="absolute -top-[6px] left-[25%] -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#94A3B8]" />
              <span className="absolute -top-[6px] left-[75%] -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#94A3B8]" />
              <span className="absolute top-1/2 -left-[6px] -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#94A3B8]" />
              <span className="absolute top-1/2 -right-[6px] -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#94A3B8]" />
              <span className="absolute -bottom-[6px] left-[25%] -translate-x-1/2 w-[10px] h-[10px] rotate-45 bg-white border-[2px] border-[#94A3B8]" />
              <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rotate-45 bg-white border-[2px] border-[#94A3B8]" />
              <span className="absolute -bottom-[6px] left-[75%] -translate-x-1/2 w-[10px] h-[10px] rotate-45 bg-white border-[2px] border-[#94A3B8]" />

              {/* Central Engine Vuka Logo Tile */}
              <div className="w-[54px] h-[54px] lg:w-[70px] lg:h-[70px] rounded-[14px] lg:rounded-[17px] overflow-hidden shadow-[0_8px_22px_rgba(37,99,235,0.28)] bg-[#3A7BE3] shrink-0">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_11.46.37_ac212329.jpeg"
                  alt="Vuka Central Engine logo"
                  className="w-full h-full object-cover object-center scale-[1.04]"
                />
              </div>
              <span className="text-[11px] lg:text-[12.5px] font-medium text-[#374151]">
                Central Engine
              </span>
            </motion.div>

            {/* 6 Orbiting Engine Node Cards (Foreground parallax layer) */}
            {HUB_ENGINES.map((engine) => {
              const layout = DESKTOP_LAYOUT[engine.pos];
              const isActive = activeId === engine.id;
              return (
                <motion.div
                  key={engine.id}
                  style={{
                    left: layout.left,
                    top: layout.top,
                    width: layout.width,
                    height: '22.1%',
                    ...(prefersReduced ? {} : { x: smoothX, y: smoothY }),
                  }}
                  className="absolute z-20 will-change-transform"
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleSelect(engine.id)}
                    className={`group relative w-full h-full px-3 lg:px-4 rounded-[16px] lg:rounded-[18px] bg-white flex items-center gap-2.5 lg:gap-3.5 text-left transition-all duration-450 vuka-ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6BF3] ${
                      isActive
                        ? 'border-2 border-[#2B6BF3] shadow-[0_16px_36px_rgba(43,107,243,0.18)] -translate-y-1'
                        : 'border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#8CA4D6]'
                    }`}
                  >
                    {/* Circular Connector Port */}
                    <span
                      className={`absolute top-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] transition-colors duration-300 ${
                        isActive ? 'border-[#2B6BF3]' : 'border-[#8CA4D6] group-hover:border-[#2B6BF3]'
                      } ${layout.portSide === 'right' ? '-right-[6px]' : '-left-[6px]'}`}
                    />

                    <div className="transition-transform duration-500 vuka-ease group-hover:scale-105">
                      <HubNodeIllustration id={engine.id} active={isActive} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <strong className="block font-display text-[14.5px] lg:text-[17px] font-extrabold text-[#1A2530] leading-tight truncate">
                        {engine.name}
                      </strong>
                      <span className="mt-0.5 lg:mt-1 block text-[11px] lg:text-[12.5px] leading-[1.3] text-[#4B5563]">
                        {engine.blurb}
                      </span>
                    </div>
                  </button>

                  <span
                    className={`mt-1.5 lg:mt-2 block text-center text-[11px] lg:text-[12.5px] font-medium whitespace-nowrap transition-colors duration-300 ${
                      isActive ? 'text-[#2B6BF3] font-semibold' : 'text-[#4B5563]'
                    }`}
                  >
                    {engine.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </RevealBlock>

        {/* Mobile / Tablet Central Engine Anchor + Grid */}
        <div className="mt-10 md:hidden">
          <div className="mb-5 p-4 rounded-2xl bg-white border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(43,107,243,0.22)] bg-[#2B6BF3] shrink-0">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_11.46.37_ac212329.jpeg"
                alt="Vuka Central Engine logo"
                className="w-full h-full object-cover object-center scale-[1.04]"
              />
            </div>
            <div>
              <strong className="block font-display text-[15px] font-extrabold text-[#1A2530]">
                Vuka Central Engine
              </strong>
              <span className="block text-[12.5px] text-[#4B5563]">
                Tap any engine below to inspect how it plugs in
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {HUB_ENGINES.map((engine) => {
              const isActive = activeId === engine.id;
              return (
                <div key={engine.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleSelect(engine.id)}
                    className={`w-full p-4 rounded-2xl bg-white flex items-center gap-3.5 text-left transition-all duration-300 vuka-ease ${
                      isActive
                        ? 'border-2 border-[#2B6BF3] shadow-[0_12px_28px_rgba(43,107,243,0.16)]'
                        : 'border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                    }`}
                  >
                    <HubNodeIllustration id={engine.id} active={isActive} />
                    <div className="min-w-0 flex-1">
                      <strong className="block font-display text-[16px] font-extrabold text-[#1A2530]">
                        {engine.name}
                      </strong>
                      <span className="block text-[12.5px] text-[#4B5563] mt-0.5">
                        {engine.blurb}
                      </span>
                    </div>
                  </button>
                  <span className="mt-1.5 text-[12px] font-medium text-[#4B5563]">{engine.tag}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Unified Selected Engine Specification Drawer with Numbered 01-06 Index Strip */}
        <RevealBlock delay={0.12} y={24}>
          <div
            id="veh-detail"
            className="relative mt-10 max-w-[860px] mx-auto bg-white border border-[#E8E3DC] rounded-[22px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          >
            <span
              aria-hidden="true"
              className="hidden md:block absolute -top-[6px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-white border-[2px] border-[#2B6BF3]"
            />

            {/* Foldwild-inspired Numbered Editorial Index Strip (01-06) */}
            <div
              className="mb-6 pb-3.5 border-b border-[#ECE7E1] flex items-center gap-4 sm:gap-6 overflow-x-auto"
              role="tablist"
              aria-label="Engine index selector"
            >
              {HUB_ENGINES.map((engine, index) => {
                const isActive = engine.id === activeId;
                return (
                  <button
                    key={engine.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleSelect(engine.id)}
                    className={`relative pb-2 flex items-baseline gap-1.5 whitespace-nowrap shrink-0 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-55 hover:opacity-85'
                    }`}
                  >
                    <span className="font-mono-tabular text-[10.5px] font-semibold text-[#8CA4D6]">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-display text-[13.5px] font-bold ${
                        isActive ? 'text-[#1A2530]' : 'text-[#4B5563]'
                      }`}
                    >
                      {engine.name}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="hub-index-indicator"
                        transition={{ duration: 0.45, ease: VUKA_EASE }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#2B6BF3]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEngine.id}
                initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.42, ease: VUKA_EASE }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center shrink-0">
                      <HubNodeIllustration id={activeEngine.id} active />
                    </div>
                    <div>
                      <h3 className="font-display text-[20px] md:text-[22px] font-extrabold text-[#1A2530]">
                        Vuka {activeEngine.name}
                      </h3>
                      <span className="text-[13px] font-medium text-[#2B6BF3]">
                        {activeEngine.tag} · {activeEngine.blurb}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/27714443601?text=${encodeURIComponent(
                      `Hi Rockie, I'd like to deploy Vuka ${activeEngine.name} for our business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-10 px-4 rounded-xl bg-gradient-to-r from-[#2B6BF3] to-[#1E56D0] text-white text-[13px] font-semibold shadow-[0_6px_18px_rgba(43,107,243,0.24)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(43,107,243,0.32)] transition-all duration-400 vuka-ease inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>Deploy {activeEngine.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-400 vuka-ease group-hover:translate-x-1" />
                  </a>
                </div>

                <p className="mt-4 text-[14.5px] leading-[1.68] text-[#4B5563]">
                  {activeEngine.detail}
                </p>

                <ul className="mt-5 pt-5 border-t border-[#ECE7E1] grid sm:grid-cols-2 gap-2.5">
                  {activeEngine.features.map((feat) => {
                    const isEnterprise = feat.startsWith('Enterprise:');
                    return (
                      <li
                        key={feat}
                        className={`flex items-start gap-2.5 text-[13px] leading-[1.5] ${
                          isEnterprise ? 'font-semibold text-[#2B6BF3]' : 'text-[#374151]'
                        }`}
                      >
                        <Check className="w-4 h-4 text-[#2B6BF3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
