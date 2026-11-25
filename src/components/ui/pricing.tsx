import { buttonVariants } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Switch } from "@/src/components/ui/switch";
import { useMediaQuery } from "@/src/hooks/use-media-query";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  pricePrefix?: string;
  period: string;
  billingNoteStandard: string;
  billingNoteBundled: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  eyebrow = "Start Here",
  title = "Clear ways to start building",
  description = "Pick the stage your operations need right now — transparent pricing, full ownership, zero surprises.",
}: PricingProps) {
  const [isStandard, setIsStandard] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsStandard(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 45,
        spread: 55,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#2B6BF3", "#F59E0B", "#8CA4D6", "#1A2530"],
        ticks: 180,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 28,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="mx-auto max-w-[920px] px-4 md:px-6">
      <div className="text-center space-y-2.5 mb-8">
        <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
          {eyebrow}
        </p>
        <h2 className="font-display text-[28px] md:text-[36px] font-extrabold tracking-[-0.025em] text-[#1A2530] leading-[1.12]">
          {title}
        </h2>
        <p className="text-[#4B5563] text-[14px] md:text-[15px] max-w-[540px] mx-auto leading-[1.6] whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Compact Bundle Toggle */}
      <div className="flex items-center justify-center gap-2.5 mb-9">
        <span
          className={cn(
            "text-[12.5px] font-semibold transition-colors",
            isStandard ? "text-[#1A2530]" : "text-[#64748B]"
          )}
        >
          Standard
        </span>
        <Label className="inline-flex items-center cursor-pointer">
          <Switch
            ref={switchRef}
            checked={!isStandard}
            onCheckedChange={handleToggle}
            aria-label="Toggle annual care bundle discount"
          />
        </Label>
        <span
          className={cn(
            "text-[12.5px] font-semibold transition-colors",
            !isStandard ? "text-[#1A2530]" : "text-[#64748B]"
          )}
        >
          Annual Bundle{" "}
          <span className="text-[#2B6BF3] font-bold">(Save 20%)</span>
        </span>
      </div>

      {/* Compact 3D Angled Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch"
        style={{ perspective: "1100px" }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 28, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -12 : 0,
                    opacity: 1,
                    x: index === 2 ? -14 : index === 0 ? 14 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              type: "spring",
              stiffness: 140,
              damping: 22,
              delay: index * 0.08,
            }}
            style={
              isDesktop
                ? {
                    transformStyle: "preserve-3d",
                    transform:
                      index === 0
                        ? "rotateY(6deg)"
                        : index === 2
                          ? "rotateY(-6deg)"
                          : "none",
                  }
                : undefined
            }
            className={cn(
              "rounded-[20px] p-5 bg-white text-center flex flex-col justify-between relative transition-shadow duration-300",
              plan.isPopular
                ? "border-2 border-[#2B6BF3] shadow-[0_12px_32px_rgba(43,107,243,0.12)] z-10"
                : "border border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#8CA4D6] z-0",
              !plan.isPopular && "md:mt-3",
              index === 0 && "md:origin-right",
              index === 2 && "md:origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 right-4 bg-[#F59E0B] text-white py-0.5 px-2.5 rounded-lg flex items-center gap-1 shadow-[0_4px_12px_rgba(245,158,11,0.28)]">
                <Star className="h-3 w-3 fill-current" />
                <span className="text-[10px] font-bold tracking-[0.06em] uppercase">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex-1 flex flex-col">
              <p className="font-display text-[13.5px] font-extrabold tracking-[0.02em] text-[#1A2530]">
                {plan.name}
              </p>

              <div className="mt-3.5 flex items-baseline justify-center gap-1">
                {plan.pricePrefix && (
                  <span className="text-[11px] font-semibold text-[#64748B]">
                    {plan.pricePrefix}
                  </span>
                )}
                <span className="font-display text-[28px] font-extrabold tracking-[-0.02em] text-[#1A2530]">
                  <NumberFlow
                    value={
                      isStandard ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    locales="en-US"
                    prefix="R"
                    format={{
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 450,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-mono-tabular"
                  />
                </span>
                {plan.period && (
                  <span className="text-[11.5px] font-medium text-[#64748B]">
                    {plan.period}
                  </span>
                )}
              </div>

              <p className="mt-1 text-[10.5px] font-medium text-[#8CA4D6]">
                {isStandard ? plan.billingNoteStandard : plan.billingNoteBundled}
              </p>

              <p className="mt-3 text-[12px] leading-[1.55] text-[#4B5563]">
                {plan.description}
              </p>

              <hr className="w-full my-3.5 border-[#ECE7E1]" />

              <ul className="gap-2 flex flex-col text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2B6BF3] mt-0.5 shrink-0" />
                    <span className="text-[12px] leading-[1.45] text-[#374151]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-1">
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: plan.isPopular ? "default" : "outline",
                    size: "sm",
                  }),
                  "w-full h-9 text-[12.5px] font-semibold transition-all duration-300",
                  plan.isPopular
                    ? "bg-gradient-to-r from-[#2B6BF3] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1743A3] text-white shadow-[0_6px_16px_rgba(43,107,243,0.24)]"
                    : "bg-[#FAF8F5] text-[#1A2530] border-[#E8E3DC] hover:bg-[#2B6BF3] hover:text-white hover:border-[#2B6BF3]"
                )}
              >
                {plan.buttonText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
