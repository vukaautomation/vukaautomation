import {
  Calculator,
  ClipboardList,
  Headphones,
  Mail,
  ShoppingCart,
  User,
  XCircle,
} from 'lucide-react';
import { AnimatePresence, animate, motion, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';
import { RevealBlock, VUKA_EASE } from './MotionReveal';

interface SiloNode {
  id: string;
  title: string;
  subtitle: string;
  siloNote: string;
  side: 'left' | 'right';
  row: 0 | 1 | 2;
  iconBg: string;
  iconColor: string;
  wirePath: string;
}

const SILO_NODES: SiloNode[] = [
  {
    id: 'crm',
    title: 'CRM',
    subtitle: 'Customer data here',
    siloNote: 'Sales updates customer records in CRM while delivery and finance work off stale copies.',
    side: 'left',
    row: 0,
    iconBg: 'bg-[#EDF4FE]',
    iconColor: 'text-[#2563EB]',
    wirePath: 'M 244 65 Q 320 65 404 162',
  },
  {
    id: 'accounting',
    title: 'Accounting',
    subtitle: 'Invoices & expenses',
    siloNote: 'Finance teams manually re-key approved quotes and invoices from separate spreadsheets.',
    side: 'left',
    row: 1,
    iconBg: 'bg-[#F3ECE6]',
    iconColor: 'text-[#4B648A]',
    wirePath: 'M 244 202 L 392 202',
  },
  {
    id: 'project',
    title: 'Project Management',
    subtitle: 'Tasks & timelines',
    siloNote: 'Project handovers stall when won deals and client requests never trigger task boards.',
    side: 'left',
    row: 2,
    iconBg: 'bg-[#EDF4FE]',
    iconColor: 'text-[#3A7BE3]',
    wirePath: 'M 244 338 Q 320 338 404 252',
  },
  {
    id: 'email',
    title: 'Email Marketing',
    subtitle: 'Campaign lists here',
    siloNote: 'Marketing lists drift out of sync with live purchases and active support conversations.',
    side: 'right',
    row: 0,
    iconBg: 'bg-[#EDF4FE]',
    iconColor: 'text-[#2563EB]',
    wirePath: 'M 716 65 Q 640 65 556 162',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Store',
    subtitle: 'Orders & products',
    siloNote: 'Online orders, stock levels, and invoices require constant manual reconciliation.',
    side: 'right',
    row: 1,
    iconBg: 'bg-[#F3ECE6]',
    iconColor: 'text-[#4B648A]',
    wirePath: 'M 716 202 L 568 202',
  },
  {
    id: 'support',
    title: 'Customer Support',
    subtitle: 'Tickets & messages',
    siloNote: 'Support agents answer tickets blind without order history, billing status, or CRM notes.',
    side: 'right',
    row: 2,
    iconBg: 'bg-[#EDF4FE]',
    iconColor: 'text-[#3A7BE3]',
    wirePath: 'M 716 338 Q 640 338 556 252',
  },
];

function SiloIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case 'crm':
      return <User className={className} strokeWidth={1.75} />;
    case 'accounting':
      return <Calculator className={className} strokeWidth={1.75} />;
    case 'project':
      return <ClipboardList className={className} strokeWidth={1.75} />;
    case 'email':
      return <Mail className={className} strokeWidth={1.75} />;
    case 'ecommerce':
      return <ShoppingCart className={className} strokeWidth={1.75} />;
    case 'support':
    default:
      return <Headphones className={className} strokeWidth={1.75} />;
  }
}

interface OverwhelmedOperatorSvgProps {
  selectedNode: SiloNode | null;
  prefersReduced: boolean | null;
}

function OverwhelmedOperatorSvg({
  selectedNode,
  prefersReduced,
}: OverwhelmedOperatorSvgProps) {
  const eyeShiftX = selectedNode ? (selectedNode.side === 'left' ? -2.2 : 2.2) : 0;

  return (
    <svg
      viewBox="0 0 210 230"
      className="w-[155px] lg:w-[190px] h-auto select-none overflow-visible"
      aria-hidden="true"
    >
      {/* Subtle rotating dashed confusion target ring around head (from ColdEmailCrowdHero) */}
      <motion.circle
        cx="105"
        cy="72"
        r="54"
        fill="none"
        stroke={selectedNode ? '#2563EB' : '#94A3B8'}
        strokeOpacity={selectedNode ? 0.55 : 0.32}
        strokeWidth="1.6"
        strokeDasharray="11 7"
        strokeLinecap="round"
        style={{ transformOrigin: '105px 72px' }}
        animate={prefersReduced ? undefined : { rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating question marks around head */}
      <motion.text
        x="46"
        y="46"
        fill="#475569"
        fontSize="19"
        fontWeight="700"
        fontFamily="sans-serif"
        style={{ transformOrigin: '48px 42px' }}
        animate={
          prefersReduced
            ? undefined
            : { y: [0, -4.5, 0], rotate: [-14, -8, -14], opacity: [0.85, 1, 0.85] }
        }
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        ?
      </motion.text>
      <motion.text
        x="72"
        y="26"
        fill="#64748B"
        fontSize="15"
        fontWeight="700"
        fontFamily="sans-serif"
        style={{ transformOrigin: '74px 22px' }}
        animate={
          prefersReduced
            ? undefined
            : { y: [0, -5, 0], rotate: [-6, -12, -6], opacity: [0.75, 1, 0.75] }
        }
        transition={{ duration: 2.6, delay: 0.35, repeat: Infinity, ease: 'easeInOut' }}
      >
        ?
      </motion.text>
      <motion.text
        x="150"
        y="48"
        fill="#475569"
        fontSize="24"
        fontWeight="700"
        fontFamily="sans-serif"
        style={{ transformOrigin: '153px 44px' }}
        animate={
          prefersReduced
            ? undefined
            : { y: [0, -5.5, 0], rotate: [14, 20, 14], opacity: [0.85, 1, 0.85] }
        }
        transition={{ duration: 2.4, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        ?
      </motion.text>
      <motion.text
        x="159"
        y="74"
        fill="#64748B"
        fontSize="15"
        fontWeight="700"
        fontFamily="sans-serif"
        style={{ transformOrigin: '161px 70px' }}
        animate={
          prefersReduced
            ? undefined
            : { y: [0, -4, 0], rotate: [20, 13, 20], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 2.1, delay: 0.55, repeat: Infinity, ease: 'easeInOut' }}
      >
        ?
      </motion.text>

      {/* Gentle upper body & torso */}
      <motion.g
        style={{ transformOrigin: '105px 215px' }}
        animate={
          prefersReduced
            ? undefined
            : { rotate: [0, 0.9, -0.6, 0.8, 0], y: [0, 0.8, 0, 0.6, 0] }
        }
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Outer hoodie torso & sleeves */}
        <path
          d="M52 216 C50 165, 58 124, 78 112 L134 112 C156 124, 166 165, 162 216 Z"
          fill="#A4B0C2"
          stroke="#273142"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Inner shirt */}
        <path
          d="M84 112 L126 112 L119 198 L91 198 Z"
          fill="#E2E8F0"
          stroke="#273142"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Hoodie collar / drawstrings */}
        <path
          d="M82 110 C86 124, 124 124, 128 110"
          fill="none"
          stroke="#273142"
          strokeWidth="2.2"
        />
        <path
          d="M93 122 L91 146 M117 122 L118 144"
          stroke="#273142"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Jeans peek at bottom */}
        <rect x="76" y="210" width="58" height="12" rx="2" fill="#5D7496" stroke="#273142" strokeWidth="2.2" />

        {/* Neck */}
        <path
          d="M94 98 L94 115 C100 121, 112 121, 116 115 L116 98 Z"
          fill="#F1F5F9"
          stroke="#273142"
          strokeWidth="2.2"
        />

        {/* Head, Hair, Glasses & Eyes tilting gently as he scratches */}
        <motion.g
          style={{ transformOrigin: '105px 102px' }}
          animate={
            prefersReduced
              ? undefined
              : {
                  rotate: [0, 3.2, -1.2, 2.8, -0.8, 0],
                  y: [0, 1.4, 0, 1.2, 0, 0],
                }
          }
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Curly dark hair */}
          <path
            d="M78 68 C73 56, 78 44, 90 42 C96 34, 112 34, 118 42 C131 44, 136 56, 131 68 C128 58, 116 54, 105 55 C94 54, 82 58, 78 68 Z"
            fill="#475569"
            stroke="#273142"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />

          {/* Head & Ears */}
          <ellipse cx="77" cy="76" rx="4.5" ry="6.5" fill="#F1F5F9" stroke="#273142" strokeWidth="2.1" />
          <ellipse cx="133" cy="76" rx="4.5" ry="6.5" fill="#F1F5F9" stroke="#273142" strokeWidth="2.1" />
          <path
            d="M79 68 C79 52, 131 52, 131 68 C131 89, 121 102, 105 102 C89 102, 79 89, 79 68 Z"
            fill="#F8FAFC"
            stroke="#273142"
            strokeWidth="2.3"
          />

          {/* Worried eyebrows */}
          <motion.g
            animate={prefersReduced ? undefined : { y: [0, -1.3, 0, -1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M86 67 Q93 63 99 67" fill="none" stroke="#273142" strokeWidth="2" strokeLinecap="round" />
            <path d="M111 67 Q117 63 124 67" fill="none" stroke="#273142" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Glasses frames */}
          <circle cx="93" cy="75" r="7.5" fill="#FFFFFF" stroke="#273142" strokeWidth="2.1" />
          <circle cx="117" cy="75" r="7.5" fill="#FFFFFF" stroke="#273142" strokeWidth="2.1" />
          <path d="M100.5 75 L109.5 75" stroke="#273142" strokeWidth="2.1" />

          {/* Pupils looking side to side at the disconnected silos (or locking onto selected silo) */}
          <motion.g
            animate={
              prefersReduced
                ? undefined
                : selectedNode
                  ? { x: eyeShiftX }
                  : { x: [-1.8, 1.8, -1.5, 1.8, -1.8] }
            }
            transition={
              selectedNode
                ? { type: 'spring', stiffness: 320, damping: 24 }
                : { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <circle cx="94" cy="75.5" r="1.95" fill="#273142" />
            <circle cx="116" cy="75.5" r="1.95" fill="#273142" />
          </motion.g>

          {/* Nose & worried frown */}
          <path
            d="M105 78 L103 84 L107 85"
            fill="none"
            stroke="#273142"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M97 92 Q105 88 113 93" fill="none" stroke="#273142" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Left arm raised — actively scratching/scrubbing his head! */}
        <motion.g
          style={{ transformOrigin: '72px 114px' }}
          animate={
            prefersReduced
              ? undefined
              : {
                  rotate: [0, -5.5, 3.5, -5.5, 3, -4.5, 0],
                  y: [0, -2, 1, -2, 1, -1.5, 0],
                }
          }
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M72 118 C48 124, 38 112, 42 94 C45 78, 60 58, 72 52 L82 60 C72 68, 63 82, 62 94 C62 100, 68 102, 76 102"
            fill="#A4B0C2"
            stroke="#273142"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left hand scrubbing back and forth across hair/scalp */}
          <motion.g
            style={{ transformOrigin: '78px 56px' }}
            animate={
              prefersReduced
                ? undefined
                : {
                    x: [0, 4, -1.5, 4.5, -1, 3.5, 0],
                    y: [0, -3.5, 1, -4, 0.5, -3, 0],
                    rotate: [0, 9, -5, 10, -4, 8, 0],
                  }
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M71 52 C74 44, 83 44, 86 50 C88 55, 84 62, 77 61 Z"
              fill="#F8FAFC"
              stroke="#273142"
              strokeWidth="2.1"
            />
            {/* Finger crease lines on hand */}
            <path
              d="M75 49 L79 52 M78 47.5 L82 51"
              stroke="#273142"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </motion.g>
        </motion.g>

        {/* Little cartoon scrub/motion ticks right above his scratching hand */}
        <motion.g
          stroke="#475569"
          strokeWidth="1.4"
          strokeLinecap="round"
          animate={
            prefersReduced
              ? { opacity: 0.4 }
              : { opacity: [0.15, 0.85, 0.25, 0.9, 0.15], scale: [0.92, 1.06, 0.95, 1.05, 0.92] }
          }
          style={{ transformOrigin: '75px 41px' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M64 42 L68 38" />
          <path d="M71 38 L74 33" />
          <path d="M80 39 L84 35" />
        </motion.g>

        {/* Clipboard tucked under right arm */}
        <g transform="translate(103, 146) rotate(12)">
          <rect x="0" y="6" width="38" height="48" rx="3.5" fill="#E2E8F0" stroke="#273142" strokeWidth="2.2" />
          <rect x="5" y="12" width="28" height="36" rx="1.5" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.3" />
          <rect x="11" y="2" width="16" height="7" rx="2" fill="#94A3B8" stroke="#273142" strokeWidth="1.8" />
          <path d="M9 21 H28 M9 27 H26 M9 33 H22" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* Right arm wrapping across chest holding clipboard */}
        <path
          d="M142 122 C156 144, 152 172, 134 182 L114 184 L112 171 L130 168 C138 162, 138 144, 129 128"
          fill="#A4B0C2"
          stroke="#273142"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="110" cy="177" rx="7" ry="6" fill="#F8FAFC" stroke="#273142" strokeWidth="2.1" />
      </motion.g>
    </svg>
  );
}

function ScissorsMark({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
      <circle cx="-4.5" cy="-3.5" r="2.6" fill="none" stroke="#64748B" strokeWidth="1.35" />
      <circle cx="-4.5" cy="3.5" r="2.6" fill="none" stroke="#64748B" strokeWidth="1.35" />
      <path d="M-2.2 -2.2 L7 3 M-2.2 2.2 L7 -3" stroke="#64748B" strokeWidth="1.35" strokeLinecap="round" />
    </g>
  );
}

function PlusMark({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round">
      <path d="M-4 0 H4 M0 -4 V4" />
    </g>
  );
}

const ROW_TOP_PERCENT: Record<0 | 1 | 2, string> = {
  0: '3.5%',
  1: '36%',
  2: '68.5%',
};

export function DisconnectedSilosSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const desktopHopRef = useRef<HTMLDivElement>(null);
  const mobileHopRef = useRef<HTMLDivElement>(null);
  const selectedNode = SILO_NODES.find((node) => node.id === selectedId) || null;
  const prefersReduced = useReducedMotion();

  const triggerHop = () => {
    if (prefersReduced) return;
    [desktopHopRef.current, mobileHopRef.current].forEach((el) => {
      if (el) {
        animate(
          el,
          { y: [0, -14, 0], scale: [1, 1.045, 1] },
          { duration: 0.55, ease: [0.3, 0, 0.3, 1] }
        );
      }
    });
  };

  const handleToggleSilo = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
    triggerHop();
  };

  return (
    <section
      id="disconnected-systems"
      aria-label="Disconnected systems overview"
      className="relative bg-[#FAF8F5] py-16 md:py-22 border-b border-[#E8E3DC] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 68% 60% at 50% 54%, rgba(246, 241, 237, 0.90) 0%, rgba(237, 244, 254, 0.45) 55%, rgba(255, 255, 255, 0) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1040px] px-4 md:px-6">
        <RevealBlock y={22}>
          <div className="max-w-[680px]">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
              DISCONNECTED SYSTEMS
            </p>
            <h2 className="font-display mt-2 text-[32px] sm:text-[38px] md:text-[44px] font-extrabold tracking-[-0.03em] text-[#1A2530] leading-[1.1]">
              Teams work in separate silos.
            </h2>
          </div>
        </RevealBlock>

        {/* Desktop Diagram */}
        <RevealBlock delay={0.08} y={28}>
          <div className="mt-10 hidden md:block relative max-w-[960px] mx-auto aspect-[960/420]">
            {/* Dashed severed connectors + animated active wire + scissors/break markers */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 960 420"
              aria-hidden="true"
            >
              {SILO_NODES.map((node) => {
                const isSelected = selectedId === node.id;
                return (
                  <g key={node.id}>
                    <path
                      d={node.wirePath}
                      fill="none"
                      stroke={isSelected ? '#8CA4D6' : '#C4BFB8'}
                      strokeWidth={isSelected ? '2' : '1.4'}
                      strokeDasharray="4 4"
                    />
                    {isSelected && (
                      <path
                        d={node.wirePath}
                        fill="none"
                        stroke="#2B6BF3"
                        strokeWidth="2.2"
                        className="vuka-wire-pulse"
                      />
                    )}
                  </g>
                );
              })}

              <ScissorsMark x={332} y={102} rotate={34} />

              <PlusMark x={330} y={186} />
              <PlusMark x={330} y={216} />
              <ScissorsMark x={295} y={216} rotate={0} />

              <ScissorsMark x={328} y={308} rotate={-32} />

              <ScissorsMark x={628} y={100} rotate={146} />
              <PlusMark x={616} y={124} />

              <PlusMark x={630} y={186} />
              <PlusMark x={620} y={216} />
              <ScissorsMark x={655} y={216} rotate={180} />

              <ScissorsMark x={630} y={306} rotate={-146} />
            </svg>

            {/* Center Operator + ColdEmailCrowdHero-inspired Spring-Pop Tip Bubble */}
            <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="relative mb-1.5" style={{ perspective: 500 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedNode ? selectedNode.id : 'disconnected'}
                    initial={
                      prefersReduced
                        ? false
                        : { opacity: 0, scale: 0.78, rotateX: -35 }
                    }
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={
                      prefersReduced
                        ? undefined
                        : { opacity: 0, scale: 0.85, rotateX: 35 }
                    }
                    transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                    className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 border border-[#DDD8D2] shadow-[0_12px_28px_-10px_rgba(17,24,39,0.22)] text-[10.5px] font-bold tracking-[0.06em] text-[#111827] uppercase whitespace-nowrap"
                  >
                    {selectedNode ? (
                      <>
                        <span className="px-1.5 py-0.5 rounded bg-[#EDF4FE] text-[#2563EB] text-[10px] font-semibold">
                          SILO
                        </span>
                        <span>{selectedNode.title} disconnected</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-[#64748B]" />
                        <span className="text-[#4B5563]">DISCONNECTED</span>
                      </>
                    )}
                    {/* Pointer diamond matching ColdEmailCrowdHero tbox caret */}
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 -bottom-[4.5px] -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-[#DDD8D2] rotate-45"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={triggerHop}
                aria-label="Animate overwhelmed operator scratching head"
                className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] rounded-2xl"
              >
                <div ref={desktopHopRef}>
                  <OverwhelmedOperatorSvg
                    selectedNode={selectedNode}
                    prefersReduced={prefersReduced}
                  />
                </div>
              </button>

              <div
                aria-hidden="true"
                className="-mt-1 h-2.5 w-32 rounded-full bg-[#111827]/14 blur-[12px]"
              />
            </div>

            {/* 6 Silo System Cards */}
            {SILO_NODES.map((node) => {
              const isSelected = selectedId === node.id;
              return (
                <div
                  key={node.id}
                  style={{
                    left: node.side === 'left' ? '0%' : '74.5%',
                    top: ROW_TOP_PERCENT[node.row],
                    width: '25.5%',
                  }}
                  className="absolute z-20"
                >
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleToggleSilo(node.id)}
                    className={`w-full px-4 py-3.5 rounded-[16px] bg-white flex items-center gap-3.5 text-left transition-all duration-400 vuka-ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6BF3] ${
                      isSelected
                        ? 'border-2 border-[#2B6BF3] shadow-[0_14px_34px_rgba(43,107,243,0.16)] -translate-y-1'
                        : 'border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#8CA4D6]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${node.iconBg} ${node.iconColor} grid place-items-center shrink-0`}
                    >
                      <SiloIcon id={node.id} className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block font-display text-[15px] lg:text-[16px] font-extrabold text-[#1A2530] leading-tight">
                        {node.title}
                      </strong>
                      <span className="mt-0.5 block text-[12px] text-[#4B5563] leading-snug">
                        {node.subtitle}
                      </span>
                    </div>
                  </button>
                  <span className="mt-1.5 block text-center text-[11.5px] font-medium text-[#4B5563]">
                    {node.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </RevealBlock>

        {/* Mobile / Tablet Layout */}
        <div className="mt-8 md:hidden">
          <div className="flex flex-col items-center mb-6">
            <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-[10.5px] font-bold tracking-[0.06em] text-[#4B5563] uppercase mb-1.5">
              {selectedNode ? (
                <>
                  <span className="px-1.5 py-0.5 rounded bg-[#EEF5FD] text-[#2B6BF3] text-[10px] font-semibold">
                    SILO
                  </span>
                  <span className="text-[#1A2530]">{selectedNode.title} disconnected</span>
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5 text-[#8CA4D6]" />
                  <span>DISCONNECTED</span>
                </>
              )}
              <span
                aria-hidden="true"
                className="absolute left-1/2 -bottom-[4px] -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-[#E8E3DC] rotate-45"
              />
            </div>

            <button
              type="button"
              onClick={triggerHop}
              aria-label="Animate overwhelmed operator scratching head"
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B6BF3] rounded-2xl"
            >
              <div ref={mobileHopRef}>
                <OverwhelmedOperatorSvg
                  selectedNode={selectedNode}
                  prefersReduced={prefersReduced}
                />
              </div>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3.5">
            {SILO_NODES.map((node) => {
              const isSelected = selectedId === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleToggleSilo(node.id)}
                  className={`p-4 rounded-2xl bg-white flex items-center gap-3.5 text-left transition-all duration-300 vuka-ease ${
                    isSelected
                      ? 'border-2 border-[#2B6BF3] shadow-[0_12px_28px_rgba(43,107,243,0.16)]'
                      : 'border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${node.iconBg} ${node.iconColor} grid place-items-center shrink-0`}
                  >
                    <SiloIcon id={node.id} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <strong className="block font-display text-[15px] font-extrabold text-[#1A2530]">
                      {node.title}
                    </strong>
                    <span className="block text-[12.5px] text-[#4B5563] mt-0.5">
                      {node.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout Note with smooth AnimatePresence cross-fade */}
        <div className="mt-8 md:mt-6 flex justify-center">
          <div className="px-5 py-2.5 rounded-xl bg-white border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center text-[13px] md:text-[13.5px] font-medium text-[#1A2530] max-w-[580px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={selectedNode ? selectedNode.id : 'default'}
                initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: VUKA_EASE }}
                className="block"
              >
                {selectedNode
                  ? selectedNode.siloNote
                  : 'HR and operations are trapped in different silos.'}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
