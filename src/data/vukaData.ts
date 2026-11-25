export interface ProblemItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  badge: string;
  fix: string;
  detail: string;
  iconType: 'clock' | 'database' | 'layers';
}

export interface EngineCardItem {
  id: string;
  num: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconSrc: string;
}

export interface HubEngineItem {
  id: string;
  pos: 'tl' | 'tr' | 'ml' | 'mr' | 'bl' | 'br';
  iconSrc: string;
  name: string;
  blurb: string;
  tag: string;
  detail: string;
  features: string[];
}

export interface IntegrationItem {
  name: string;
  sub: string;
  logo: string;
  logoViewBox?: string;
  logoWidth?: number;
  logoHeight?: number;
  detail: string;
}

export interface IntegrationCategory {
  title: string;
  items: IntegrationItem[];
}

export interface InsightItem {
  tag: string;
  accentFrom: string;
  accentTo: string;
  title: string;
  meta: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'repetitive-work',
    num: '01',
    title: '01. Repetitive Manual Work',
    desc: 'Teams waste valuable hours on repetitive administrative tasks, copying data and manual processes.',
    badge: 'Busywork',
    fix: 'We automate repetitive workflows.',
    detail: 'We automate repetitive workflows so your team stops copying data and chasing admin — and spends time on growth instead.',
    iconType: 'clock',
  },
  {
    id: 'lost-leads',
    num: '02',
    title: '02. Lost Leads & Missed Opportunities',
    desc: 'Enquiries go unanswered, follow-ups get forgotten and potential customers slip away.',
    badge: 'Leads slip away',
    fix: 'We capture, track and follow up with leads.',
    detail: 'We capture, track and follow up with leads automatically so enquiries never sit unanswered.',
    iconType: 'database',
  },
  {
    id: 'disorganised-data',
    num: '03',
    title: '03. Disorganised Business Data',
    desc: 'Scattered spreadsheets, duplicate records and inaccurate information make decisions harder.',
    badge: 'Messy data',
    fix: 'We clean, organise and turn data into insights.',
    detail: 'We clean, organise and turn data into insights — fewer duplicates, clearer numbers, better decisions.',
    iconType: 'layers',
  },
  {
    id: 'inefficient-ops',
    num: '04',
    title: '04. Inefficient Operations',
    desc: 'Disconnected systems, slow approvals and unclear workflows create unnecessary bottlenecks.',
    badge: 'Bottlenecks',
    fix: 'We connect systems and streamline operations.',
    detail: 'We connect systems and streamline operations so approvals and workflows stop blocking the business.',
    iconType: 'clock',
  },
  {
    id: 'poor-financial',
    num: '05',
    title: '05. Poor Financial Visibility',
    desc: "Manual financial administration and delayed reporting make it difficult to see what's happening.",
    badge: 'Blind spots',
    fix: 'We automate financial workflows and reporting.',
    detail: 'We automate financial workflows and reporting so you see cash, invoices and expenses without the delay.',
    iconType: 'database',
  },
  {
    id: 'slow-support',
    num: '06',
    title: '06. Slow Customer Support',
    desc: 'Repeated questions, delayed responses and overloaded support teams affect customer experience.',
    badge: 'Slow support',
    fix: 'We build intelligent customer support systems.',
    detail: 'We build intelligent customer support systems that answer common questions fast and escalate when a human is needed.',
    iconType: 'layers',
  },
];

export const ENGINE_SUITE: EngineCardItem[] = [
  {
    id: 'leadflow',
    num: '01',
    name: 'Vuka LeadFlow',
    shortDesc: 'Lead capture ➔ AI scoring ➔ Instant email alerts',
    fullDesc: 'Multi-channel lead capture from website, email and WhatsApp. Automatic qualification, duplicate detection, interest-based scoring, sales assignment, follow-up reminders, source tracking and conversion analytics. Enterprise: Intelligent Lead Scoring prioritises who deserves attention first.',
    iconSrc: '/images/engine-leadflow.png',
  },
  {
    id: 'dataclean',
    num: '02',
    name: 'Vuka DataClean',
    shortDesc: 'Clean messy CSVs ➔ Remove ghost stock ➔ Format for BI',
    fullDesc: 'Automatic duplicate removal, invalid data detection, email and phone validation, Excel/CSV processing, standardisation, scheduled jobs, anomaly detection and data quality scoring. Enterprise: Data Quality Monitor flags missing, duplicated, inconsistent and suspicious information.',
    iconSrc: '/images/engine-dataclean.png',
  },
  {
    id: 'salesflow',
    num: '03',
    name: 'Vuka SalesFlow',
    shortDesc: 'Auto-replies ➔ Pipeline tracking ➔ Follow-ups',
    fullDesc: 'Visual pipeline, automated reminders, CRM activity history, quote support, deal probability, lost-sales analysis, forecasting and automated sales reports. Enterprise: AI Sales Intelligence highlights opportunities that need attention.',
    iconSrc: '/images/engine-salesflow.png',
  },
  {
    id: 'opsboard',
    num: '04',
    name: 'Vuka OpsBoard',
    shortDesc: 'Live dashboards ➔ Daily KPI alerts',
    fullDesc: 'Task assignment, approval workflows, employee and department dashboards, deadline management, escalation alerts, efficiency reports and bottleneck detection. Enterprise: Operations Command Center — one view of activity, outstanding work and operational risk.',
    iconSrc: '/images/engine-opsboard.png',
  },
  {
    id: 'financeflow',
    num: '05',
    name: 'Vuka FinanceFlow',
    shortDesc: 'Extract invoices ➔ Route for approval',
    fullDesc: 'Invoice processing, expense tracking, payment reminders, cash-flow views, budget monitoring, document extraction, supplier tracking and payment approval workflows. Enterprise: Financial Intelligence highlights unusual expenses, overdue payments and cash-flow concerns — with human approval controls.',
    iconSrc: '/images/engine-financeflow.png',
  },
  {
    id: 'supportai',
    num: '06',
    name: 'Vuka SupportAI',
    shortDesc: 'Read tickets ➔ Draft replies ➔ Escalate to humans',
    fullDesc: 'Website chatbot, WhatsApp and email support, automatic tickets, enquiry classification, knowledge-base answers, routing, human handover and satisfaction reporting. Enterprise: AI Customer Service Agent responds from approved information and escalates when needed.',
    iconSrc: '/images/engine-supportai.png',
  },
];

export const MARQUEE_ITEMS: { label: string; type: string }[] = [
  { label: 'Lead capture → CRM', type: 'lead' },
  { label: 'WhatsApp automation', type: 'wa' },
  { label: 'Invoice sync', type: 'inv' },
  { label: 'Slack alerts', type: 'sl' },
  { label: 'AI summarizer', type: 'ai' },
  { label: 'Sheet → Supabase', type: 'gs' },
  { label: 'Email parser', type: 'gm' },
  { label: 'Stripe webhooks', type: 'st' },
  { label: 'Playwright scrapers', type: 'pw' },
  { label: 'Zapier bridge', type: 'zp' },
];

export const ENTERPRISE_CORE_PILLARS = [
  { title: 'Security', desc: 'Access control, encryption, audit trails' },
  { title: 'Client management', desc: 'Accounts, roles and permissions' },
  { title: 'Integration Hub', desc: 'APIs, webhooks, external apps' },
  { title: 'Monitoring', desc: 'Errors, performance, health' },
  { title: 'Analytics', desc: 'Business performance reporting' },
  { title: 'AI Intelligence', desc: 'Assistance across every engine' },
];

export const HUB_ENGINES: HubEngineItem[] = [
  {
    id: 'leadflow',
    pos: 'tl',
    iconSrc: '/images/engine-leadflow.png',
    name: 'LeadFlow',
    blurb: 'Capture & Nurture Leads',
    tag: 'Funnel Trigger',
    detail: 'Multi-channel lead capture from website, email and WhatsApp — qualify, score, assign and follow up automatically.',
    features: [
      'Multi-channel lead capture (website, email, WhatsApp)',
      'Automatic lead qualification',
      'Duplicate lead detection',
      'Interest-based lead scoring',
      'Automatic assignment to salespeople',
      'Follow-up scheduling & reminders',
      'Lead source tracking',
      'Conversion & performance analytics',
      'Enterprise: Intelligent Lead Scoring',
    ],
  },
  {
    id: 'opsboard',
    pos: 'tr',
    iconSrc: '/images/engine-opsboard.png',
    name: 'OpsBoard',
    blurb: 'Monitor & Optimise Operations',
    tag: 'Metrics Sync',
    detail: 'One operational command center for tasks, approvals, KPIs and bottlenecks.',
    features: [
      'Task assignment and tracking',
      'Automated approval processes',
      'Employee performance dashboards',
      'Workflow monitoring',
      'Automatic notifications',
      'Deadline management & escalations',
      'Operational efficiency reports',
      'Process bottleneck detection',
      'Enterprise: Operations Command Center',
    ],
  },
  {
    id: 'dataclean',
    pos: 'ml',
    iconSrc: '/images/engine-dataclean.png',
    name: 'DataClean',
    blurb: 'Clean & Process Data',
    tag: 'Data Scrub',
    detail: 'Turn messy spreadsheets and exports into trusted, BI-ready data.',
    features: [
      'Automatic duplicate removal',
      'Incorrect data detection',
      'Email & phone validation',
      'Excel and CSV processing',
      'Data standardisation',
      'Automatic report generation',
      'Anomaly detection',
      'Data quality scoring',
      'Enterprise: Data Quality Monitor',
    ],
  },
  {
    id: 'financeflow',
    pos: 'mr',
    iconSrc: '/images/engine-financeflow.png',
    name: 'FinanceFlow',
    blurb: 'Automate Finance & Reporting',
    tag: 'Ledger Export',
    detail: 'Invoices, expenses, cash-flow and approvals — with human controls where it matters.',
    features: [
      'Invoice processing',
      'Expense tracking',
      'Payment reminders',
      'Cash-flow reporting',
      'Budget monitoring',
      'Financial document extraction',
      'Supplier payment tracking',
      'Approval workflows for payments',
      'Enterprise: Financial Intelligence',
    ],
  },
  {
    id: 'salesflow',
    pos: 'bl',
    iconSrc: '/images/engine-salesflow.png',
    name: 'SalesFlow',
    blurb: 'Manage Sales Pipeline',
    tag: 'Deal Log',
    detail: 'Pipeline, CRM activity, forecasting and automated sales follow-through.',
    features: [
      'Visual sales pipeline',
      'Automatic sales reminders',
      'CRM & activity history',
      'Quote and proposal support',
      'Sales performance tracking',
      'Deal probability scoring',
      'Lost-sales analysis',
      'Sales forecasting & reports',
      'Enterprise: AI Sales Intelligence',
    ],
  },
  {
    id: 'supportai',
    pos: 'br',
    iconSrc: '/images/engine-supportai.png',
    name: 'SupportAI',
    blurb: 'AI Customer Support',
    tag: 'Ticket Handler',
    detail: 'First-line AI support across web, WhatsApp and email — with clean human handover.',
    features: [
      'AI website chatbot',
      'WhatsApp customer support',
      'Email enquiry automation',
      'Automatic ticket creation',
      'Enquiry classification & routing',
      'Knowledge-base integration',
      'Human-agent handover',
      'Customer satisfaction reporting',
      'Enterprise: AI Customer Service Agent',
    ],
  },
];

export const INDUSTRIES = [
  'Logistics',
  'Retail',
  'Professional services',
  'Construction',
  'Finance',
  'Agencies',
];

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  {
    title: 'AUTOMATION & AI',
    items: [
      { name: 'Python', sub: 'Custom logic & scrapers', logo: 'py', detail: 'Custom Python scripts for complex logic, scraping, and API connections.' },
      { name: 'n8n', sub: 'Self-hosted workflows', logo: 'n8n', detail: 'Self-hosted n8n for private workflows with unlimited executions.' },
      { name: 'OpenAI', sub: 'GPT-4o + embeddings', logo: 'oa', detail: 'GPT models for reasoning, drafting, summarising, and custom chatbots.' },
      { name: 'Playwright', sub: 'Browser automation', logo: 'pw', detail: 'Browser automation for forms, reports, and reliable scraping.' },
      { name: 'FastAPI', sub: 'API backends', logo: 'fa', detail: 'Fast Python APIs for backends, webhooks, and internal tools.' },
    ],
  },
  {
    title: 'BUSINESS SYSTEMS',
    items: [
      {
        name: 'Yoco',
        sub: 'Payments & POS',
        logo: 'yo',
        logoViewBox: '25 79 450 192',
        logoWidth: 108,
        logoHeight: 46,
        detail: 'Automatically sync Yoco card and POS transactions into daily cash-up reports, accounting ledgers, and CRM records.',
      },
      {
        name: 'Sage 50cloud Pastel',
        sub: 'Accounting & finance',
        logo: 'sg',
        logoViewBox: '531 140 443 69',
        logoWidth: 218,
        logoHeight: 34,
        detail: 'Connect Sage 50cloud Pastel for automated invoicing, customer balances, stock updates, and payment reconciliation.',
      },
      {
        name: 'Pilot POS',
        sub: 'Hospitality & retail POS',
        logo: 'pl',
        logoViewBox: '1052 19 397 315',
        logoWidth: 76,
        logoHeight: 60,
        detail: 'Pull live Pilot POS branch sales, shift summaries, and inventory movement straight into your ops and finance workflows.',
      },
      {
        name: 'SAP Business One',
        sub: 'ERP integration',
        logo: 'sp',
        logoViewBox: '29 468 442 113',
        logoWidth: 172,
        logoHeight: 44,
        detail: 'Bridge SAP Business One with WhatsApp notifications, automated approvals, spreadsheets, and live operational dashboards.',
      },
      {
        name: 'Microsoft Dynamics 365',
        sub: 'Business Central ERP',
        logo: 'dy',
        logoViewBox: '562 476 379 97',
        logoWidth: 172,
        logoHeight: 44,
        detail: 'Sync Dynamics 365 Business Central orders, stock, customers, and general ledger postings across your business tools.',
      },
      {
        name: 'Microsoft Excel',
        sub: 'Spreadsheets & reporting',
        logo: 'xl',
        logoViewBox: '1107 396 286 255',
        logoWidth: 54,
        logoHeight: 48,
        detail: 'Automate Excel workbook ingestion, cleanup, multi-sheet consolidation, and scheduled management reporting without copy-paste.',
      },
      {
        name: 'Microsoft Outlook',
        sub: 'Inbox & calendar ops',
        logo: 'ol',
        logoViewBox: '119 766 240 225',
        logoWidth: 51,
        logoHeight: 48,
        detail: 'Parse incoming supplier and client emails in Outlook, route requests automatically, trigger approvals, and draft replies.',
      },
      {
        name: 'GAAP Point of Sale',
        sub: 'Hospitality & QSR POS',
        logo: 'gp',
        logoViewBox: '677 838 147 72',
        logoWidth: 86,
        logoHeight: 42,
        detail: 'Extract GAAP POS takings, branch performance, and stock consumption into unified daily reconciliation and BI dashboards.',
      },
      {
        name: 'Xero',
        sub: 'Cloud accounting',
        logo: 'xr',
        logoViewBox: '1100 723 299 303',
        logoWidth: 51,
        logoHeight: 52,
        detail: 'Automate Xero invoice creation, bank-feed matching, overdue payment reminders, and live cash-flow visibility.',
      },
    ],
  },
  {
    title: 'COMMUNICATION & PRODUCTIVITY',
    items: [
      { name: 'WhatsApp', sub: 'Business API', logo: 'wa', detail: 'Official WhatsApp Business API for support and order updates.' },
      { name: 'Microsoft Teams', sub: 'Alerts & approvals', logo: 'tm', detail: 'Alerts, approvals, and bot notifications in Teams channels.' },
      { name: 'Email', sub: 'Parser, labels & auto-draft', logo: 'gm', detail: 'Parse inbox mail, apply smart labels, and auto-draft replies across email providers.' },
      { name: 'Slack', sub: 'Alerts & bots', logo: 'sl', detail: 'Automated alerts and approvals in Slack.' },
      { name: 'Notion', sub: 'Docs & databases', logo: 'no', detail: 'Sync Notion docs and databases with your other tools.' },
    ],
  },
  {
    title: 'DATA & PAYMENTS',
    items: [
      { name: 'Supabase', sub: 'Postgres + Auth', logo: 'sb', detail: 'Auth, database, and storage for custom apps and internal tools.' },
      { name: 'PostgreSQL', sub: 'Databases', logo: 'pg', detail: 'Direct Postgres integrations for reporting and reliable data layers.' },
      { name: 'Stripe', sub: 'Payments & webhooks', logo: 'st', detail: 'Payments, invoices, and webhooks that update CRM on payment.' },
      { name: 'Zapier', sub: '2,000+ app bridge', logo: 'zp', detail: 'Bridge to 2,000+ apps when a direct integration is not available.' },
    ],
  },
];

export const PROCESS_14_DAYS = [
  { n: '01', t: 'Audit & ROI map', d: '45-min call, screen share your ops. We score automation potential and draft ROI.' },
  { n: '02', t: 'Blueprint & prototype', d: 'Figma flow + working prototype in n8n / Python. You test in your stack.' },
  { n: '03', t: 'Build & harden', d: 'Production flows, error handling, logging, alerts. Playwright tests where needed.' },
  { n: '04', t: 'Handover & enable', d: 'Loom library, Notion docs, Slack support. Team owns it day one.' },
];

export const TRUST_MINI_SPECS = [
  { k: 'Data', v: 'EU-hosted, encrypted at rest' },
  { k: 'Logs', v: '7-day trace, PII redacted' },
  { k: 'Access', v: 'Least privilege, revoke anytime' },
  { k: 'Tests', v: 'Playwright + dry-run mode' },
];

export const INSIGHTS: InsightItem[] = [
  {
    tag: 'Lead Ops',
    accentFrom: 'from-[#312E81]',
    accentTo: 'to-[#5B4BE7]',
    title: 'How we cut lead response from 6h to 90s',
    meta: '5 min · Automation',
    body: 'Before automation, our client took an average of 6 hours to respond to a new lead. By then, the prospect had already signed with a competitor. We built a Lead Engine using n8n and Python that instantly captures the lead, enriches the data, and sends a personalized WhatsApp message within minutes. The result was a clear increase in conversion rates and zero missed opportunities.',
  },
  {
    tag: 'FinOps',
    accentFrom: 'from-[#172554]',
    accentTo: 'to-[#2B6BF3]',
    title: 'Reconciling Stripe + Sheets without errors',
    meta: '7 min · Python',
    body: 'Manual reconciliation was costing this client 15 hours a week. They were copying Stripe payouts into Google Sheets by hand, leading to constant errors and missing invoices. We built a custom Python script that pulls every transaction from Stripe, matches it to the invoice, and updates the Google Sheet automatically. Now, their books are always accurate, and they save 60 hours a month.',
  },
  {
    tag: 'AI',
    accentFrom: 'from-[#1E1B4B]',
    accentTo: 'to-[#3B82F6]',
    title: 'WhatsApp follow-ups that actually convert',
    meta: '4 min · WhatsApp',
    body: 'Email open rates are dropping, but WhatsApp messages get read 98% of the time. We built an automated follow-up system that triggers a WhatsApp message based on customer behavior—like abandoning a cart or not replying to an email in 24 hours. Using the official WhatsApp Business API, the system sends personalized messages that feel human but run entirely on autopilot, resulting in a 3x increase in repeat sales.',
  },
];

export const HOW_WE_WORK_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'A short 30-min audit of your workflows and tools.' },
  { num: '02', title: 'Proposal & Agreement', desc: 'Fixed-price scope, NDA, and timeline.' },
  { num: '03', title: 'Build Phase', desc: 'We build, connect, and test your system while you watch progress.' },
  { num: '04', title: 'Testing & Training', desc: 'You test the system, we refine it, and provide training.' },
  { num: '05', title: 'Handover & Support', desc: 'Go live with full documentation + 30 days of included support.' },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Who owns the system and the data?',
    a: 'You do, 100%. Everything is built inside your accounts (Airtable, Supabase, n8n). If we part ways, you retain all the code, workflows, and IP.',
  },
  {
    q: 'What are the ongoing software costs?',
    a: 'You pay the software tools directly (roughly R500 - R1,500/month for hosting and APIs). We never mark up your server or AI costs.',
  },
  {
    q: 'What happens if an API breaks after 30 days?',
    a: 'We offer monthly maintenance retainers. If an API changes or a workflow breaks, we fix it. You are never left with a broken system.',
  },
  {
    q: 'Are you POPIA compliant?',
    a: 'Yes. We operate under strict Mutual NDAs, and by hosting the systems in your own accounts, your sensitive data never leaves your control.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Discovery is 2–3 days. Build phase is 5–7 days for standard automations, 2–3 weeks for enterprise stacks. We ship a working pilot first, then iterate.',
  },
  {
    q: "What if I don't have technical staff?",
    a: "You don't need any. We handle setup, hosting, training, and 30 days of included support. We build no-code friendly dashboards and WhatsApp interfaces your team already knows.",
  },
  {
    q: 'How does payment work?',
    a: '50% to kick off after discovery, 50% on handover after testing. For retainers, monthly billing. Transparent ZAR pricing, no hidden hourly billing.',
  },
  {
    q: 'What tools do you use?',
    a: 'Our core: Python, FastAPI, n8n, Playwright, Supabase/PostgreSQL, Docker, and AI APIs like OpenAI/Claude. We use proven, modern tools to build reliable systems.',
  },
  {
    q: 'Do you work with small and large businesses?',
    a: 'Yes. We optimize for ROI, not company size. Small teams save 15+ hours/week immediately. Enterprise gets governance, audit trails, and multi-branch rollout.',
  },
  {
    q: 'Do you replace Zapier/Make?',
    a: 'No. We orchestrate them. If Zapier is enough, we use it. If you need custom Python, retries, and real tests, we add that layer. You keep ownership.',
  },
  {
    q: 'How fast is pilot delivery?',
    a: 'Audit day 1, blueprint day 2, first flow live day 3–4, handover by day 14. Loom docs included.',
  },
  {
    q: 'What if we already have developers?',
    a: "Perfect. We build the glue they don't have time for — inbox parsers, WhatsApp, sheet sync — and hand over clean code.",
  },
];

export const ROCKIE_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwG9wZGHSv5KzYG9MeNwZc5doxDP2JNvM3pFPmya4lVioQ6__gDenUIYzH1jlLniFgT/exec';
export const ROCKIE_FORMSUBMIT_URL = 'https://formsubmit.co/ajax/rockie@vukaautomation.co.za';
export const BUILT_IN_ITEMS: { label: string; type: string }[] = [
  { label: 'Softr', type: 'softr' },
  { label: 'Glide', type: 'glide' },
  { label: 'Bubble', type: 'bubble' },
  { label: 'WeWeb', type: 'weweb' },
  { label: 'Retool', type: 'retool' },
  { label: 'Noloco', type: 'noloco' },
  { label: 'Airtable', type: 'airtable' },
  { label: 'SmartSuite', type: 'smartsuite' },
  { label: 'Notion', type: 'no' },
  { label: 'Google Sheets', type: 'gs' },
  { label: 'Supabase', type: 'sb' },
  { label: 'NocoDB', type: 'nocodb' },
  { label: 'Stackby', type: 'stackby' },
  { label: 'Baserow', type: 'baserow' },
  { label: 'Make', type: 'make' },
  { label: 'Zapier', type: 'zp' },
  { label: 'n8n', type: 'n8n' },
  { label: 'Pabbly Connect', type: 'pabbly' },
  { label: 'OpenAI (ChatGPT)', type: 'oa' },
  { label: 'Anthropic (Claude)', type: 'claude' },
  { label: 'Google Gemini', type: 'gemini' },
  { label: 'Gumloop', type: 'gumloop' },
  { label: 'OttoKit', type: 'ottokit' },
  { label: 'Twilio', type: 'twilio' },
  { label: 'Slack', type: 'sl' },
  { label: 'HubSpot', type: 'hubspot' },
  { label: 'Salesforce', type: 'salesforce' },
  { label: 'WhatsApp Business API', type: 'wa' },
  { label: 'Telegram', type: 'tm' },
  { label: 'Monday.com', type: 'monday' },
  { label: 'ClickUp', type: 'clickup' },
  { label: 'Fillout', type: 'fillout' },
  { label: 'Typeform', type: 'typeform' },
  { label: 'Jotform', type: 'jotform' },
  { label: 'Tally', type: 'tally' },
  { label: 'Stripe', type: 'st' },
  { label: 'Shopify', type: 'shopify' },
  { label: 'PayPal', type: 'paypal' },
  { label: 'Python', type: 'py' },
  { label: 'JavaScript', type: 'js' },
  { label: 'REST APIs', type: 'api' },
  { label: 'Webhooks', type: 'webhook' },
];
