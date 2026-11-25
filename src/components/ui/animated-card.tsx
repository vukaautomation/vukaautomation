import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/src/lib/utils";

// --- PROPS INTERFACE ---
export interface JobCardProps {
  companyLogo: React.ReactNode;
  companyName: string;
  jobTitle: string;
  salary: string;
  tags: string[];
  postedDate: string;
  variant?: "pink" | "yellow" | "blue" | "purple" | "emerald";
  className?: string;
  onClick?: () => void;
  topBadge?: string;
  problemLabel?: string;
  problemText?: string;
  builtLabel?: string;
  builtText?: string;
  resultLabel?: string;
  resultText?: string;
  footerLeft?: string;
}

// --- SOFT ACCENT VARIANT STYLES ---
const variantClasses = {
  pink: "border-t-[#D08A84]",
  yellow: "border-t-[#F4B956]",
  blue: "border-t-[#78A1F6]",
  purple: "border-t-[#78A1F6]",
  emerald: "border-t-[#6FB08B]",
};

const resultAccentClasses = {
  pink: "border-l-[#D08A84] text-[#9E524B]",
  yellow: "border-l-[#F4B956] text-[#B4690E]",
  blue: "border-l-[#2B6BF3] text-[#2B6BF3]",
  purple: "border-l-[#2B6BF3] text-[#2B6BF3]",
  emerald: "border-l-[#4F946E] text-[#3B7A57]",
};

/**
 * A soft, compact, theme-adaptive card with a subtle 3D tilt effect on hover.
 */
export const AnimatedJobCard = ({
  companyLogo,
  companyName,
  jobTitle,
  salary,
  tags,
  postedDate,
  variant = "blue",
  className,
  onClick,
  topBadge,
  problemLabel,
  problemText,
  builtLabel,
  builtText,
  resultLabel,
  resultText,
  footerLeft,
}: JobCardProps) => {
  // --- FULL ANIMATION LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Gentle 3D tilt
  const rotateX = useTransform(mouseY, [-160, 160], [6, -6]);
  const rotateY = useTransform(mouseX, [-160, 160], [-6, 6]);

  // Smooth, soft spring return
  const springConfig = { stiffness: 260, damping: 24, mass: 0.55 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const isCaseStudy = Boolean(problemText || builtText || resultText);

  return (
    <motion.div
      layout
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full max-w-[330px] shrink-0 transform-gpu cursor-pointer overflow-hidden rounded-[22px] bg-card p-5 border border-[#EFEAE2] shadow-[0_4px_20px_rgba(0,0,0,0.045)] transition-shadow duration-400 hover:shadow-[0_14px_34px_rgba(43,107,243,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6BF3]",
        "border-t-[3px]",
        variantClasses[variant],
        className
      )}
      aria-label={`${companyName}: ${jobTitle}`}
      tabIndex={0}
    >
      <div style={{ transform: "translateZ(14px)" }} className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#EFEAE2] bg-white p-1">
              {companyLogo}
            </div>
            <div className="min-w-0">
              <span className="block truncate font-display text-[14.5px] font-bold text-[#1A2530]">
                {companyName}
              </span>
              <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.07em] text-[#2B6BF3]/90">
                {salary}
              </span>
            </div>
          </div>

          {topBadge && (
            <span className="shrink-0 rounded-lg bg-[#F59E0B]/12 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.07em] text-[#B45309]">
              {topBadge}
            </span>
          )}
        </div>

        {/* Case Study Details OR Standard Job Title */}
        {isCaseStudy ? (
          <div className="space-y-2.5 text-left">
            {problemText && (
              <div>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#8CA4D6]">
                  {problemLabel || "THE CHALLENGE"}
                </p>
                <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#525E6B]">
                  {problemText}
                </p>
              </div>
            )}

            {builtText && (
              <div>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#8CA4D6]">
                  {builtLabel || "WHAT VUKA BUILT"}
                </p>
                <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#525E6B]">
                  {builtText}
                </p>
              </div>
            )}

            {resultText && (
              <div
                className={cn(
                  "rounded-xl bg-[#FAF8F5] px-3 py-2 border border-[#EFEAE2] border-l-[3px]",
                  resultAccentClasses[variant]
                )}
              >
                <p className="text-[9.5px] font-bold uppercase tracking-[0.1em]">
                  {resultLabel || "THE OUTCOME"}
                </p>
                <p className="mt-0.5 text-[11.5px] font-semibold leading-[1.4] text-[#1A2530]">
                  {resultText}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h3 className="text-base font-bold text-card-foreground">{jobTitle}</h3>
            <p className="text-xs text-primary">{salary}</p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg bg-[#FAF8F5] border border-[#EFEAE2] px-2 py-0.5 text-[10px] font-medium text-[#525E6B]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#F2EDE6] text-[10px] text-[#7A8694]">
          <span className="font-semibold tracking-[0.05em] uppercase">
            {footerLeft || "VUKA AUTOMATION"}
          </span>
          <span>{postedDate}</span>
        </div>
      </div>
    </motion.div>
  );
};
