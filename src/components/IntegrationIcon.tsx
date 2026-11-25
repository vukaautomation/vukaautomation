import { Layers } from 'lucide-react';

export function IntegrationIcon({ type }: { type: string }) {
  switch (type) {
    case 'py':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <path fill="#3776AB" d="M15.8 3.2c-4.7 0-5.1 2-5.1 4.5v2.7h5.4v.9H7.9C5 11.3 3.4 13.1 3.4 16c0 2.9 1.6 4.7 4.5 4.7h2.3v-2.4c0-2.6 2.1-4.3 4.8-4.3h5c2.2 0 3.7-1.4 3.7-3.6V7.7c0-2.5-1.4-4.5-7.9-4.5zm-2.6 2.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
          <path fill="#FFD43B" d="M16.2 28.8c4.7 0 5.1-2 5.1-4.5v-2.7h-5.4v-.9h8.2c2.9 0 4.5-1.8 4.5-4.7 0-2.9-1.6-4.7-4.5-4.7h-2.3v2.4c0 2.6-2.1 4.3-4.8 4.3h-5c-2.2 0-3.7 1.4-3.7 3.6v2.7c0 2.5 1.4 4.5 7.9 4.5zm2.6-2.4a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" />
        </svg>
      );
    case 'n8n':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#EA4B71" />
          <path d="M8.5 18.5h5.5c1.8 0 2.8-1 3.4-2.5.6-1.5 1.6-2.5 3.4-2.5H23" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M17.4 16c.6 1.5 1.6 2.5 3.4 2.5H23" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="18.5" r="2.6" fill="white" />
          <circle cx="14.5" cy="18.5" r="2.2" fill="#EA4B71" stroke="white" strokeWidth="1.8" />
          <circle cx="23.5" cy="13.5" r="2.4" fill="white" />
          <circle cx="23.5" cy="18.5" r="2.4" fill="white" />
        </svg>
      );
    case 'oa':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#0F172A" />
          <path d="M16 8l5 3v6l-5 3-5-3v-6l5-3z" fill="#10A37F" />
          <path d="M16 11l3 1.8v3.6L16 18l-3-1.8v-3.6L16 11z" fill="white" />
        </svg>
      );
    case 'claude':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#D97706" />
          <path d="M16 8l4 12h-3l-1-3h-2l-1 3h-3l4-12z" fill="white" />
          <path d="M14.5 15h3l-1.5-4.5L14.5 15z" fill="#D97706" />
        </svg>
      );
    case 'gemini':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#1A73E8" />
          <path d="M16 8c0 4.4 3.6 8 8 8-4.4 0-8 3.6-8 8 0-4.4-3.6-8-8-8 4.4 0 8-3.6 8-8z" fill="white" />
        </svg>
      );
    case 'wa':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#25D366" />
          <path d="M16.1 7.4c-4.7 0-8.6 3.9-8.6 8.6 0 1.5.4 3 1.2 4.3l-1.3 4.4 4.5-1.2c1.2.7 2.6 1 4.1 1 4.7 0 8.6-3.8 8.6-8.6s-3.8-8.5-8.5-8.5z" fill="white" />
        </svg>
      );
    case 'tm':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#0088CC" />
          <path d="M22 9l-14 6 5 2 2 6 7-14z" fill="white" />
        </svg>
      );
    case 'sl':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#4A154B" />
          <path d="M12.5 13.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zm0 1.7a1.6 1.6 0 1 0-3.2 0v3.8a1.6 1.6 0 1 0 3.2 0v-3.8z" fill="#E01E5A" />
        </svg>
      );
    case 'no':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#191919" />
          <path d="M8.5 8.5l12-.9 3 1.9V23l-12.5.8-2.5-2V8.5z" fill="white" />
        </svg>
      );
    case 'gs':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#0F9D58" />
          <path d="M10 8h5c3 0 5 2 5 5s-2 5-5 5h-2v6h-3V8zm3 3v4h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2z" fill="white" />
        </svg>
      );
    case 'sb':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#3ECF8E" />
          <path d="M16 9l7 14H9l7-14z" fill="white" />
        </svg>
      );
    case 'st':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#635BFF" />
          <path d="M16 9l7 14H9l7-14z" fill="white" />
        </svg>
      );
    case 'zp':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="max-w-full max-h-full" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#FF4F00" />
          <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="3" />
        </svg>
      );
    case 'softr':
      return <rect width="32" height="32" rx="9" fill="#4F46E5" />;
    case 'glide':
      return <rect width="32" height="32" rx="9" fill="#000000" />;
    case 'bubble':
      return <rect width="32" height="32" rx="9" fill="#F43F5E" />;
    case 'weweb':
      return <rect width="32" height="32" rx="9" fill="#3B82F6" />;
    case 'retool':
      return <rect width="32" height="32" rx="9" fill="#6366F1" />;
    case 'noloco':
      return <rect width="32" height="32" rx="9" fill="#8B5CF6" />;
    case 'airtable':
      return <rect width="32" height="32" rx="9" fill="#18BFFF" />;
    case 'smartsuite':
      return <rect width="32" height="32" rx="9" fill="#059669" />;
    case 'nocodb':
      return <rect width="32" height="32" rx="9" fill="#EC4899" />;
    case 'stackby':
      return <rect width="32" height="32" rx="9" fill="#0284C7" />;
    case 'baserow':
      return <rect width="32" height="32" rx="9" fill="#10B981" />;
    case 'make':
      return <rect width="32" height="32" rx="9" fill="#6D28D9" />;
    case 'pabbly':
      return <rect width="32" height="32" rx="9" fill="#2563EB" />;
    case 'gumloop':
      return <rect width="32" height="32" rx="9" fill="#F97316" />;
    case 'ottokit':
      return <rect width="32" height="32" rx="9" fill="#14B8A6" />;
    case 'twilio':
      return <rect width="32" height="32" rx="9" fill="#EF4444" />;
    case 'hubspot':
      return <rect width="32" height="32" rx="9" fill="#FF7A59" />;
    case 'salesforce':
      return <rect width="32" height="32" rx="9" fill="#0EA5E9" />;
    case 'monday':
      return <rect width="32" height="32" rx="9" fill="#6366F1" />;
    case 'clickup':
      return <rect width="32" height="32" rx="9" fill="#7C3AED" />;
    case 'fillout':
      return <rect width="32" height="32" rx="9" fill="#3B82F6" />;
    case 'typeform':
      return <rect width="32" height="32" rx="9" fill="#111827" />;
    case 'jotform':
      return <rect width="32" height="32" rx="9" fill="#F97316" />;
    case 'tally':
      return <rect width="32" height="32" rx="9" fill="#000000" />;
    case 'shopify':
      return <rect width="32" height="32" rx="9" fill="#95BF47" />;
    case 'paypal':
      return <rect width="32" height="32" rx="9" fill="#003087" />;
    case 'js':
      return <rect width="32" height="32" rx="9" fill="#F7DF1E" />;
    case 'api':
      return <rect width="32" height="32" rx="9" fill="#059669" />;
    case 'webhook':
      return <rect width="32" height="32" rx="9" fill="#4F46E5" />;
    default:
      return <Layers className="w-5 h-5 text-[#2563EB]" />;
  }
}
