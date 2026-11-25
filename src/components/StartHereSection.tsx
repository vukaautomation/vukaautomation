import { Pricing, PricingPlan } from './ui/pricing';

const VUKA_PLANS: PricingPlan[] = [
  {
    name: 'The Vuka Systems Audit',
    price: '2500',
    yearlyPrice: '2000',
    period: 'one-off',
    billingNoteStandard: 'Single diagnostic engagement',
    billingNoteBundled: '20% off when paired with build',
    features: [
      'Full workflow & tool audit',
      'Bottleneck & time-leak map',
      'Custom engine blueprint',
    ],
    description:
      'We map your workflows, identify bottlenecks, and deliver a blueprint for your custom engine.',
    buttonText: 'Book Your Audit',
    href: "https://wa.me/27714443601?text=Hi%20Rockie%2C%20I'd%20like%20to%20book%20The%20Vuka%20Systems%20Audit%20(R2%2C500).",
    isPopular: false,
  },
  {
    name: 'The Engine Build',
    price: '12500',
    yearlyPrice: '10000',
    pricePrefix: 'Starts at',
    period: '',
    billingNoteStandard: 'Fixed-scope milestone build',
    billingNoteBundled: '20% build credit on annual care',
    features: [
      'Custom ERP, CRM, or engine',
      'Team handover & training',
      'Full codebase & IP transfer',
    ],
    description:
      'We build your custom ERP, CRM, or automation engine. Includes full handover and IP transfer.',
    buttonText: 'Scope Your Engine',
    href: "https://wa.me/27714443601?text=Hi%20Rockie%2C%20I'd%20like%20to%20scope%20The%20Engine%20Build%20for%20our%20business.",
    isPopular: true,
  },
  {
    name: 'The Care Plan',
    price: '2500',
    yearlyPrice: '2000',
    pricePrefix: 'From',
    period: '/ month',
    billingNoteStandard: 'Cancel anytime, month-to-month',
    billingNoteBundled: 'Billed annually · 2 months free',
    features: [
      'Managed hosting & uptime',
      'n8n & API health monitoring',
      'Priority WhatsApp support',
    ],
    description:
      'Ongoing hosting, n8n monitoring, API management, and priority support to keep your engine running 24/7.',
    buttonText: 'Add 24/7 Care',
    href: "https://wa.me/27714443601?text=Hi%20Rockie%2C%20I'd%20like%20to%20discuss%20The%20Care%20Plan%20(from%20R2%2C500%2Fmonth).",
    isPopular: false,
  },
];

export function StartHereSection() {
  return (
    <section
      id="start-here"
      aria-label="Start Here pricing and engagement"
      className="relative bg-[#FAF8F5] vuka-dot-canvas py-14 md:py-18 border-b border-[#E8E3DC] overflow-hidden"
    >
      <Pricing
        plans={VUKA_PLANS}
        eyebrow="Start Here"
        title="Simple, transparent ways to start"
        description="Begin with a calm systems blueprint, commission your custom engine, and keep every workflow running 24/7."
      />
    </section>
  );
}
