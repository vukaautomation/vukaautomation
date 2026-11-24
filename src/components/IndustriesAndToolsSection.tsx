import { Briefcase, HardHat, Landmark, Rocket, Store, Truck } from 'lucide-react';
import { RevealBlock, RevealItem } from './MotionReveal';
import { InteractiveIconCloud } from './ui/interactive-icon-cloud';

const INDUSTRY_CARDS = [
  {
    name: 'Logistics & Supply Chain',
    sub: 'Fleet dispatch, POD tracking & inventory movement',
    icon: Truck,
    accent: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    name: 'Retail & E-commerce',
    sub: 'Omnichannel POS sync, orders & price catalog flows',
    icon: Store,
    accent: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
  },
  {
    name: 'Professional Services',
    sub: 'Automated client intake, contracts & time billing',
    icon: Briefcase,
    accent: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    name: 'Construction & Field Ops',
    sub: 'Digital job cards, subcontractor compliance & claims',
    icon: HardHat,
    accent: '#EA580C',
    bg: '#FFF7ED',
    border: '#FED7AA',
  },
  {
    name: 'Finance & Accounting',
    sub: 'SARS VAT preparation, bank recs & audit reports',
    icon: Landmark,
    accent: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
  },
  {
    name: 'Agencies & Studios',
    sub: 'Campaign pipelines, deliverables & client dashboards',
    icon: Rocket,
    accent: '#DB2777',
    bg: '#FDF2F8',
    border: '#FBCFE8',
  },
];

const CLOUD_SLUGS = [
  // SA Systems & Core
  'yoco',
  'sage',
  'sap',
  'microsoft',
  'microsoftoutlook',
  'microsoftexcel',
  'xero',
  'gaap',
  'pilot',
  // All Built-In tools
  'softr',
  'glide',
  'bubble',
  'weweb',
  'retool',
  'airtable',
  'notion',
  'googlesheets',
  'supabase',
  'nocodb',
  'make',
  'zapier',
  'n8n',
  'openai',
  'anthropic',
  'googlegemini',
  'twilio',
  'slack',
  'hubspot',
  'salesforce',
  'whatsapp',
  'telegram',
  'monday',
  'clickup',
  'typeform',
  'jotform',
  'stripe',
  'shopify',
  'paypal',
  'python',
  'javascript',
  'webhooks',
];

export function IndustriesAndToolsSection() {
  return (
    <>
      {/* Industries */}
      <section id="industries" className="bg-[#FAF8F5] py-16 md:py-22 border-b border-[#E8E3DC]">
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <RevealBlock y={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-[620px]">
                <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                  Industries
                </p>
                <h2 className="font-display mt-2 text-[28px] md:text-[36px] font-extrabold tracking-[-0.02em] text-[#1A2530]">
                  Built for SA operators
                </h2>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[#4B5563]">
                  Logistics, retail, professional services, construction, and finance teams across South Africa use Vuka to cut manual administration and close the loop on operations.
                </p>
              </div>
            </div>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <RevealItem key={card.name} index={idx}>
                  <div className="group relative bg-white border border-[#E8E3DC] rounded-[20px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#8CA4D6] hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] transition-all duration-400 vuka-ease flex items-start gap-4 h-full">
                    <span
                      aria-hidden="true"
                      className="absolute -top-[5.5px] left-6 w-[9px] h-[9px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors duration-300"
                    />
                    <div
                      style={{ backgroundColor: card.bg, borderColor: card.border }}
                      className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-400 vuka-ease group-hover:scale-108"
                    >
                      <Icon style={{ color: card.accent }} className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-extrabold text-[15.5px] text-[#1A2530] group-hover:text-[#2B6BF3] transition-colors">
                        {card.name}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-[1.48] text-[#4B5563]">
                        {card.sub}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools We Integrate */}
      <section
        id="tools"
        className="relative vuka-dot-canvas py-16 md:py-24 border-b border-[#E8E3DC] overflow-hidden"
      >
        <div className="relative mx-auto max-w-[1240px] px-4 md:px-6">
          <RevealBlock y={24}>
            <div className="text-center max-w-[660px] mx-auto">
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                CONNECTED STACK
              </p>
              <h2 className="font-display mt-2 text-[32px] md:text-[42px] font-extrabold tracking-[-0.025em] text-[#1A2530]">
                Tools we integrate
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.65] text-[#4B5563]">
                No rip-and-replace. We connect what you already use with reliable, monitored
                engineering glue.
              </p>
            </div>
          </RevealBlock>

          {/* Interactive 3D Icon Sphere Cloud Showcase */}
          <RevealBlock delay={0.1} y={28}>
            <div className="mt-10 max-w-[720px] mx-auto bg-white/95 backdrop-blur-md border border-[#E8E3DC] rounded-[24px] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <InteractiveIconCloud iconSlugs={CLOUD_SLUGS} />
            </div>
          </RevealBlock>
        </div>
      </section>
    </>
  );
}
