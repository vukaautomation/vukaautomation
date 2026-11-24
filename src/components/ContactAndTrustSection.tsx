import { Award, Building2, FileText, Mail, MapPin, Phone, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { RevealBlock, RevealItem, VUKA_EASE } from './MotionReveal';

export function ContactAndTrustSection() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!privacyOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPrivacyOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [privacyOpen]);

  return (
    <>
      {/* Contact */}
      <section id="contact" className="bg-[#FAF8F5] py-16 md:py-22 border-b border-[#E8E3DC]">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <RevealBlock y={22} className="max-w-[460px]">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
              Get in touch
            </p>
            <h2 className="font-display mt-2 text-[30px] md:text-[40px] font-extrabold tracking-[-0.025em] leading-[1.1] text-[#1A2530]">
              Let’s map your ops
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#4A5568]">
              Book a free call and we’ll map your automation opportunities live — no sales talk.
            </p>
          </RevealBlock>

          <div className="grid sm:grid-cols-3 gap-4 flex-1 max-w-[680px]">
            <RevealItem index={0} className="flex">
              <a
                href="mailto:rockie@vukaautomation.co.za"
                className="relative w-full bg-white border border-[#E8E3DC] hover:border-[#2B6BF3] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] rounded-[18px] p-5 flex flex-col gap-3 transition-all duration-400 vuka-ease group"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors"
                />
                <span className="w-10 h-10 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center shrink-0 transition-transform duration-400 vuka-ease group-hover:scale-105">
                  <Mail className="w-4 h-4 text-[#2B6BF3]" />
                </span>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#64748B]">
                    Email
                  </div>
                  <div className="mt-1 text-[13.5px] font-bold text-[#1A2530] group-hover:text-[#2B6BF3] transition-colors break-all">
                    rockie@vukaautomation.co.za
                  </div>
                </div>
              </a>
            </RevealItem>

            <RevealItem index={1} className="flex">
              <a
                href="tel:+27714443601"
                className="relative w-full bg-white border border-[#E8E3DC] hover:border-[#2B6BF3] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] rounded-[18px] p-5 flex flex-col gap-3 transition-all duration-400 vuka-ease group"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors"
                />
                <span className="w-10 h-10 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center shrink-0 transition-transform duration-400 vuka-ease group-hover:scale-105">
                  <Phone className="w-4 h-4 text-[#2B6BF3]" />
                </span>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#64748B]">
                    Phone
                  </div>
                  <div className="mt-1 font-mono-tabular text-[14px] font-bold text-[#1A2530] group-hover:text-[#2B6BF3] transition-colors">
                    +27 71 444 3601
                  </div>
                </div>
              </a>
            </RevealItem>

            <RevealItem index={2} className="flex">
              <div className="group relative w-full bg-white border border-[#E8E3DC] hover:border-[#2B6BF3] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] rounded-[18px] p-5 flex flex-col gap-3 transition-all duration-400 vuka-ease">
                <span
                  aria-hidden="true"
                  className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors"
                />
                <span className="w-10 h-10 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center shrink-0 transition-transform duration-400 vuka-ease group-hover:scale-105">
                  <MapPin className="w-4 h-4 text-[#2B6BF3]" />
                </span>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#64748B]">
                    Location
                  </div>
                  <div className="mt-1 text-[13.5px] font-bold text-[#1A2530]">
                    Pretoria, South Africa
                  </div>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section
        id="trust-compliance"
        className="relative bg-[#FAF8F5] vuka-dot-canvas py-16 md:py-20 border-b border-[#E8E3DC] overflow-hidden"
      >
        <div className="relative mx-auto max-w-[1040px] px-4 md:px-6">
          <RevealBlock y={22}>
            <div className="text-center max-w-[560px] mx-auto">
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2B6BF3]">
                TRUST &amp; COMPLIANCE
              </p>
              <h2 className="font-display mt-2 text-[26px] md:text-[34px] font-extrabold text-[#1A2530] tracking-[-0.02em]">
                Registered. Compliant. Ready for enterprise.
              </h2>
              <p className="mt-3 text-[14.5px] text-[#4A5568]">
                Vuka Automation (Pty) Ltd — formal credentials for procurement and corporate partners.
              </p>
            </div>
          </RevealBlock>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <RevealItem index={0} className="flex">
              <div className="group relative w-full bg-white border border-[#E8E3DC] rounded-[18px] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#2B6BF3] hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] transition-all duration-400 vuka-ease">
                <span
                  aria-hidden="true"
                  className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors"
                />
                <div className="w-11 h-11 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center mx-auto text-[#2B6BF3]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-[#64748B]">
                  B-BBEE STATUS
                </div>
                <div className="mt-1.5 font-display text-[18px] font-extrabold text-[#1A2530]">
                  Level 1 Contributor
                </div>
                <div className="mt-1 text-[13px] text-[#4A5568]">135% Procurement Recognition</div>
              </div>
            </RevealItem>

            <RevealItem index={1} className="flex">
              <div className="group relative w-full bg-white border border-[#E8E3DC] rounded-[18px] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#2B6BF3] hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] transition-all duration-400 vuka-ease">
                <span
                  aria-hidden="true"
                  className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors"
                />
                <div className="w-11 h-11 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center mx-auto text-[#2B6BF3]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-[#64748B]">
                  CIPC REGISTRATION
                </div>
                <div className="mt-1.5 font-mono-tabular text-[18px] font-bold text-[#1A2530]">
                  2026/734704/07
                </div>
                <div className="mt-1 text-[13px] text-[#4A5568]">Vuka Automation (Pty) Ltd</div>
              </div>
            </RevealItem>

            <RevealItem index={2} className="flex">
              <div className="group relative w-full bg-white border border-[#E8E3DC] rounded-[18px] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#2B6BF3] hover:shadow-[0_12px_28px_rgba(43,107,243,0.08)] transition-all duration-400 vuka-ease">
                <span
                  aria-hidden="true"
                  className="absolute -top-[5.5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-[#8CA4D6] group-hover:border-[#2B6BF3] transition-colors"
                />
                <div className="w-11 h-11 rounded-xl bg-[#EEF5FD] border border-[#D0E2FA] grid place-items-center mx-auto text-[#2B6BF3]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-[#64748B]">
                  SARS TAX NUMBER
                </div>
                <div className="mt-1.5 font-mono-tabular text-[18px] font-bold text-[#1A2530]">
                  9573780229
                </div>
                <div className="mt-1 text-[13px] text-[#4A5568]">South African Revenue Service</div>
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#1A2530] py-12 border-t border-[#E8E3DC]">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.facebook.com/vukaautomation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.62 23.1 24 18.1 24 12.07z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vuka.automation2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#E4405F">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@vuka.automation2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="TikTok"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#1A2530">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.8a6.34 6.34 0 0010.86 4.48V8.93a8.2 8.2 0 004.83 1.55V7.03a4.84 4.84 0 01-.75-.12 4.83 4.83 0 01.5-.22z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rockie-mohlala-b61a69422"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
              </svg>
            </a>
            <a
              href="https://wa.me/27714443601"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.7.97.99-3.61-.23-.37a9.78 9.78 0 01-1.5-5.23c0-5.41 4.4-9.81 9.82-9.81a9.75 9.75 0 016.94 2.88 9.75 9.75 0 012.87 6.94c0 5.41-4.4 9.81-9.81 9.81zm8.33-17.94A11.7 11.7 0 0012.04 0C5.45 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.59 5.96L0 24l6.27-1.64a11.9 11.9 0 005.77 1.47h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.5-8.44z" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-[13px] text-[#4A5568]">
            © 2026 Vuka Automation (Pty) Ltd. All rights reserved. Proudly South African.
          </p>

          <div className="mt-2">
            <button
              type="button"
              id="privacy"
              onClick={() => setPrivacyOpen(true)}
              className="text-[12px] font-medium text-[#1A2530] hover:text-[#2B6BF3] underline-offset-4 hover:underline transition-colors"
            >
              Privacy Policy (POPIA)
            </button>
          </div>
        </div>
      </footer>

      {/* POPIA Privacy Policy Modal with AnimatePresence */}
      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#1A2530]/40 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popia-title"
            onClick={() => setPrivacyOpen(false)}
          >
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: VUKA_EASE }}
              className="bg-white border border-[#E8E3DC] rounded-2xl max-w-[540px] w-full p-6 md:p-7 shadow-[0_20px_50px_rgba(26,37,48,0.14)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E8E3DC]">
                <h3 id="popia-title" className="font-display text-[18px] font-bold text-[#1A2530]">
                  Privacy Policy (POPIA)
                </h3>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(false)}
                  aria-label="Close privacy policy"
                  className="w-8 h-8 rounded-lg border border-[#E8E3DC] grid place-items-center text-[#4A5568] hover:text-[#1A2530] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-[13.5px] leading-[1.65] text-[#4A5568]">
                <p>
                  Vuka Automation (Pty) Ltd (CIPC: 2026/734704/07) complies with the Protection of
                  Personal Information Act (POPIA) of South Africa.
                </p>
                <p>
                  Contact details submitted via email or WhatsApp are used solely to respond
                  to your automation enquiry and prepare your requested scope or audit.
                </p>
                <p>
                  Every client engagement includes a mutual NDA by default, encrypted EU-hosted
                  storage, PII-redacted logs, and least-privilege access that you can revoke at any
                  time. Email{' '}
                  <a
                    href="mailto:rockie@vukaautomation.co.za"
                    className="text-[#2B6BF3] font-medium hover:underline"
                  >
                    rockie@vukaautomation.co.za
                  </a>{' '}
                  for data requests.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
