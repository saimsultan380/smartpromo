export interface ServiceItem {
  id: string;
  category: "tax" | "cfo" | "bookkeeping" | "capital" | "formation";
  title: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  metrics: string;
  features: string[];
  gradient: string;
}

export interface DetailedPricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  category: "bookkeeping" | "tax" | "cfo" | "enterprise";
  priceOneTime: string;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  turnaround: string;
  features: string[];
  ctaText: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  stat?: string;
}

export interface CoreValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceMonthly: number | string;
  priceAnnual: number | string;
  billingPeriod: string;
  headline: string;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  stat: string;
  statLabel: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "Doxo Promo",
  tagline: "Authoritative financial consulting, commercial loan strategy, and enterprise accounting services ensuring long-term fiscal stability.",
  phone: "+1 (269) 256-3703",
  email: "info@doxopromo.com",
  address: "7901 4TH ST N STE 300, ST PETERSBURG, FL 33702",
  hours: "Mon - Fri | 9:00 AM - 6:00 PM",
  portalUrl: "#",
};

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: "integrity",
    title: "Integrity & Fiduciary Standard",
    subtitle: "Ethical boundaries with zero conflict of interest.",
    description:
      "We treat our clients' capital and proprietary financial data with the highest ethical boundaries and privacy standards in the industry. As AICPA-governed advisors, we operate with uncompromised fiduciary commitment.",
    iconName: "ShieldCheck",
    badge: "AICPA Bound",
  },
  {
    id: "precision",
    title: "Surgical GAAP Precision",
    subtitle: "Zero approximations. Double-entry perfection.",
    description:
      "Accounting leaves no room for approximations. Our proprietary reconciliation engines and CPA review protocols ensure every cent is accounted for, documented, and fully audit-defensible.",
    iconName: "Target",
    badge: "99.8% Accuracy",
  },
  {
    id: "partnership",
    title: "Long-Term Strategic Partnership",
    subtitle: "Active, year-round advisors invested in your scale.",
    description:
      "We don't just file taxes once a year; we serve as proactive, year-round partners dedicated to the upward trajectory, debt capitalization, and valuation maximization of your firm.",
    iconName: "TrendingUp",
    badge: "Continuous Advisory",
  },
  {
    id: "security",
    title: "Institutional Vault Security",
    subtitle: "SOC-2 Type II bank-grade encryption.",
    description:
      "Your balance sheets, tax filings, and banking credentials are guarded behind 256-bit AES encryption, multi-factor hardware authentication, and strict confidentiality protocols.",
    iconName: "Lock",
    badge: "SOC-2 Type II",
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "1",
    name: "Jonathan Vance, CPA",
    role: "Managing Partner & Head of Tax Strategy",
    credentials: "CPA, MS in Taxation, Former Big 4 Senior Manager",
    bio: "Over 18 years advising mid-market corporations and high-growth ventures on multi-jurisdictional tax optimization, R&D credits, and entity restructuring.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    specialty: "Corporate Tax Architecture & IRS Defense",
  },
  {
    id: "2",
    name: "Sarah Lin, CFA",
    role: "Director of Fractional CFO Advisory",
    credentials: "CFA, MBA Stanford, Ex-VP Finance at Tech Unicorn",
    bio: "Specializes in 13-week cash runway modeling, capital allocation, board reporting, and Series A through C venture fundraising diligence.",
    image: "https://images.unsplash.com/photo-1580894732470-f1c504a74288?w=500&auto=format&fit=crop&q=80",
    specialty: "Runway Modeling & Capital Allocation",
  },
  {
    id: "3",
    name: "Michael Sterling",
    role: "Director of Capital & Debt Structuring",
    credentials: "Former Commercial Underwriter, SBA Specialist",
    bio: "Has facilitated over $85M in commercial credit lines, SBA 7(a)/504 packages, and non-dilutive term debt for manufacturing and distribution enterprises.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    specialty: "SBA Loans & Institutional Debt",
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2018",
    title: "Firm Founded in Texas",
    description: "Established with a mission to bring institutional-grade CPA expertise to high-growth businesses without the friction of legacy firms.",
    stat: "100% CPA-Led",
  },
  {
    year: "2020",
    title: "Virtual CFO Practice Launch",
    description: "Expanded capabilities into predictive cash flow modeling, scenario planning, and investor diligence support for venture-backed founders.",
    stat: "42+ Co's Advised",
  },
  {
    year: "2022",
    title: "$250M Capital Milestone",
    description: "Surpassed $250M in client capital advised and non-dilutive SBA/commercial debt facilities structured.",
    stat: "$250M+ Capital",
  },
  {
    year: "2024+",
    title: "Automated Ledger & Multi-Entity Scale",
    description: "Deployed automated general ledger pipelines and expanded multi-state tax compliance across all 50 US jurisdictions.",
    stat: "$450M+ Advised",
  },
];

export const PRICING_PACKAGES: DetailedPricingPackage[] = [
  {
    id: "basic-bookkeeping-setup",
    name: "Basic Bookkeeping Setup",
    category: "bookkeeping",
    priceOneTime: "$50+",
    priceMonthly: "$50",
    priceAnnual: "$40",
    description: "Initial foundational setup for newly incorporated businesses and basic ledgers.",
    turnaround: "Completed in 48-72 Hours",
    features: [
      "Initial Chart of Accounts Architecture",
      "Simple Financial & Account Review",
      "Software Integration Assistance (QuickBooks / Xero)",
      "Basic Expense Categorization Setup",
      "Bank Feed Connection Verification",
    ],
    ctaText: "Get Started",
  },
  {
    id: "bookkeeping-services",
    name: "Bookkeeping Services",
    category: "bookkeeping",
    priceOneTime: "$50 - $100",
    priceMonthly: "$95",
    priceAnnual: "$75",
    description: "Essential ongoing reconciliation and ledger maintenance for active businesses.",
    turnaround: "Monthly 3-Day Close",
    features: [
      "Full General Ledger Management",
      "Accounts Payable & Receivable Tracking",
      "Monthly Bank & Credit Card Reconciliations",
      "Clean GAAP Financial Reporting (P&L & Balance Sheet)",
      "Dedicated Bookkeeper + CPA Review",
    ],
    ctaText: "Get Started",
  },
  {
    id: "standard-tax-prep",
    name: "Standard Tax Prep",
    category: "tax",
    priceOneTime: "$100 - $300",
    priceMonthly: "$150",
    priceAnnual: "$120",
    description: "Accurate tax return preparation for individuals, sole proprietors & Schedule C filers.",
    turnaround: "Filed within 5-7 Days",
    features: [
      "Individual & Sole Proprietorship Tax Preparation",
      "Small Business / Schedule C Optimization",
      "Standard & Itemized Deduction Optimization",
      "IRS & State Compliance Verification",
      "Electronic Filing & Secure Document Vaulting",
    ],
    ctaText: "Get Started",
  },
  {
    id: "corporate-tax-strategy",
    name: "Corporate Tax Strategy",
    category: "tax",
    badge: "Most Popular",
    isPopular: true,
    priceOneTime: "$300 - $600",
    priceMonthly: "$380",
    priceAnnual: "$290",
    description: "Proactive year-round tax mitigation and corporate filings for scaling entities.",
    turnaround: "Continuous Proactive Advisory",
    features: [
      "Proactive Year-Round Tax Planning Sessions",
      "Business Entity, S-Corp, & C-Corp Tax Optimization",
      "Complex Multi-State Tax Apportionment Filings",
      "Estimated Quarterly Tax Calculations & Vouchers",
      "R&D Credit & Section 179 Depreciation Harvesting",
      "IRS Audit Shield & Licensed CPA Defense",
    ],
    ctaText: "Get Started",
  },
  {
    id: "virtual-cfo-advisory",
    name: "Virtual CFO Advisory",
    category: "cfo",
    priceOneTime: "$600 - $1,000",
    priceMonthly: "$750",
    priceAnnual: "$590",
    description: "Executive-level financial leadership, cash runway modeling, and board reporting.",
    turnaround: "Dedicated Senior Partner",
    features: [
      "Predictive 13-Week Cash-Flow & Runway Modeling",
      "Budgeting, Unit Economics & Risk Management",
      "Strategic Financial Forecasting & Scenario Planning",
      "Executive Board-Level Guidance & Investor Decks",
      "Custom Real-Time Financial KPI Dashboards",
      "Direct Advisory Access via Slack / Video Briefing",
    ],
    ctaText: "Get Started",
  },
  {
    id: "enterprise-loan-strategy",
    name: "Enterprise / Loan Strategy",
    category: "enterprise",
    badge: "Maximum Scope",
    priceOneTime: "$1,000 - $1,200",
    priceMonthly: "$1,100",
    priceAnnual: "$890",
    description: "Institutional debt underwriting, SBA loan structuring, and M&A due diligence.",
    turnaround: "Bespoke Institutional Scope",
    features: [
      "Complex SBA 7(a) & 504 Loan Approval Packaging",
      "Comprehensive Multi-Entity Enterprise Accounting",
      "Regulatory Liaison & External Audit Defense",
      "M&A Financial Due Diligence & Quality of Earnings",
      "Commercial Debt Refinancing & Covenant Compliance",
      "Full White-Glove Senior Advisory Engagement",
    ],
    ctaText: "Get Started",
  },
];

export const PRICING_COMPARISON_MATRIX = [
  {
    feature: "General Ledger & Chart of Accounts Setup",
    basic: true,
    bookkeeping: true,
    tax: true,
    corpTax: true,
    cfo: true,
    enterprise: true,
  },
  {
    feature: "Monthly Bank & Merchant Reconciliations",
    basic: false,
    bookkeeping: true,
    tax: false,
    corpTax: true,
    cfo: true,
    enterprise: true,
  },
  {
    feature: "Annual Tax Return Preparation & E-file",
    basic: false,
    bookkeeping: false,
    tax: true,
    corpTax: true,
    cfo: true,
    enterprise: true,
  },
  {
    feature: "Proactive Quarterly Tax Strategy & Harvesting",
    basic: false,
    bookkeeping: false,
    tax: false,
    corpTax: true,
    cfo: true,
    enterprise: true,
  },
  {
    feature: "13-Week Cash Flow & Predictive Runway Modeling",
    basic: false,
    bookkeeping: false,
    tax: false,
    corpTax: false,
    cfo: true,
    enterprise: true,
  },
  {
    feature: "SBA Loan / Commercial Debt Structuring",
    basic: false,
    bookkeeping: false,
    tax: false,
    corpTax: false,
    cfo: false,
    enterprise: true,
  },
  {
    feature: "Full IRS & State Audit Defense Representation",
    basic: false,
    bookkeeping: false,
    tax: false,
    corpTax: true,
    cfo: true,
    enterprise: true,
  },
  {
    feature: "Board Presentation & Investor Diligence Decks",
    basic: false,
    bookkeeping: false,
    tax: false,
    corpTax: false,
    cfo: true,
    enterprise: true,
  },
];

export const SERVICES_PAGE_DATA: ServiceItem[] = [
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning & Preparation",
    badge: "Maximum Preservation",
    tagline: "Navigating tax codes requires exactness. We optimize corporate tax liabilities and preserve wealth.",
    description:
      "We handle corporate tax liabilities, high-net-worth filings, and proactive year-round mitigation strategies. Our CPAs design entity-level tax shelters, harvest R&D credits, and keep your company fully compliant.",
    iconName: "ShieldCheck",
    metrics: "$140k+ Avg. Tax Saved / Year",
    features: [
      "Federal & Multi-State Corporate Returns (1120, 1120-S, 1065)",
      "Year-Round Proactive Quarterly Tax Planning",
      "R&D Tax Credit & Section 179 Depreciation Maximization",
      "Executive & High-Net-Worth Individual Filings",
      "Audit Defense & Representation before the IRS",
    ],
    gradient: "from-blue-600/20 to-indigo-600/20",
  },
  {
    id: "bookkeeping-payroll",
    category: "bookkeeping",
    title: "Bookkeeping & Payroll",
    badge: "Audit-Ready Accuracy",
    tagline: "Maintaining flawless financial hygiene with automated ledgers and seamless payroll.",
    description:
      "Our meticulous accounting team manages ledgers, accounts payable/receivable, multi-currency reconciliations, and compliant payroll processing—delivering immaculate financial statements every month.",
    iconName: "Layers",
    metrics: "3-Day Month-End Close",
    features: [
      "Full GAAP-Compliant General Ledger Accounting",
      "Automated Multi-State Payroll & Tax Remittance",
      "Daily Bank, Credit Card & Merchant Account Reconciliations",
      "Accounts Payable / Receivable Automation Workflows",
      "Monthly P&L, Balance Sheet & Cash Flow Statements",
    ],
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    id: "virtual-cfo",
    category: "cfo",
    title: "Virtual CFO Services",
    badge: "Executive Leadership",
    tagline: "High-level strategy, budgeting, and risk management usually reserved for Fortune 500 boards.",
    description:
      "Gain the strategic firepower of a seasoned CFO without full-time executive overhead. We provide dynamic cash-flow forecasting, KPI instrumentation, investor relations, and capital allocation frameworks.",
    iconName: "TrendingUp",
    metrics: "+42% Avg. Cash Efficiency",
    features: [
      "Dynamic 13-Week Cash Flow & Runway Forecasting",
      "Budgeting, Variance Analysis & Unit Economics Modeling",
      "Board & Leadership Presentation Decks",
      "Fundraising Readiness & Pitch Deck Financial Validation",
      "Custom Real-Time KPI Dashboards",
    ],
    gradient: "from-indigo-600/20 to-purple-600/20",
  },
  {
    id: "loan-consulting",
    category: "capital",
    title: "Loan Consulting & Capital",
    badge: "Growth Acceleration",
    tagline: "Expand with confidence. We structure institutional loan approvals and lender negotiations.",
    description:
      "We assist with extensive documentation, balance sheet structuring, business plan modeling, and lender negotiations necessary to secure commercial credit lines, term loans, and SBA facilities.",
    iconName: "Landmark",
    metrics: "$85M+ Facilitated Capital",
    features: [
      "SBA 7(a) & 504 Application Architecture",
      "Commercial Lines of Credit & Term Loan Structuring",
      "Debt Refinancing & Covenant Compliance",
      "Lender-Ready Financial Underwriting Packages",
      "Non-Dilutive Growth Capital Advisory",
    ],
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    id: "audit-strategy",
    category: "tax",
    title: "Audit Strategy & Defense",
    badge: "Zero Vulnerability",
    tagline: "Ensure total transparency and bulletproof accounting practices before external regulators.",
    description:
      "We help internal teams implement stringent internal controls and act as authoritative liaisons during intense external audits from taxing authorities, banking partners, and regulatory bodies.",
    iconName: "FileCheck",
    metrics: "99.8% Clean Audit Rate",
    features: [
      "Pre-Audit Diagnostic & Gap Identification",
      "Direct CPA Representation in IRS / State Tax Audits",
      "Internal Controls & Compliance Framework Design",
      "Documentation Trail Assembly & Evidence Vaulting",
      "SOC-2 & Financial Due Diligence Audit Preparation",
    ],
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "business-formation",
    category: "formation",
    title: "Business Formation & Entity Structuring",
    badge: "Solid Foundation",
    tagline: "Build on rock-solid legal and financial architecture for maximum asset protection and tax efficiency.",
    description:
      "Our team advises on optimal corporate structuring (Partnership, S-Corp, C-Corp, Holding Entities) to shield personal assets, minimize self-employment taxes, and prepare your business for scalable investment.",
    iconName: "Building2",
    metrics: "100% Tax Optimized From Day 1",
    features: [
      "Entity Selection Strategy (Partnership vs S-Corp vs C-Corp)",
      "Multi-Tier Holding & Operating Company Architecture",
      "EIN, State Registrations & Operating Agreement Consultation",
      "Initial Accounting System & Chart of Accounts Setup",
      "Asset Protection & Corporate Veil Safeguards",
    ],
    gradient: "from-rose-600/20 to-pink-600/20",
  },
];

export const SERVICES_DATA = SERVICES_PAGE_DATA.slice(0, 4);

export const ENGAGEMENT_STEPS = [
  {
    step: "01",
    title: "Diagnostic & Architecture Review",
    description:
      "We conduct a deep forensic audit of your existing ledgers, prior tax filings, entity structures, and cash flow cycles to uncover leaks and immediate savings opportunities.",
  },
  {
    step: "02",
    title: "System Integration & Clean-Up",
    description:
      "We connect bank feeds, integrate certified software (QuickBooks, NetSuite, Gusto), reconcile historical anomalies, and set up your secure client portal.",
  },
  {
    step: "03",
    title: "Continuous Execution & 3-Day Close",
    description:
      "Every month, our CPA-supervised team handles reconciliations, payroll, AP/AR, and delivers pristine GAAP financial statements within 3 business days.",
  },
  {
    step: "04",
    title: "Strategic Quarterly Advisory",
    description:
      "We meet quarterly to harvest tax credits, review runway scenarios, refine budgets, and proactively adjust financial architecture as your revenue scales.",
  },
];

export const SERVICE_FAQS: FAQItem[] = [
  {
    question: "How quickly can Doxo Promo onboard our company and clean up past books?",
    answer:
      "Most client setups are completed within 5 to 7 business days. If you have historical backlog or unreconciled months, our dedicated clean-up team can bring multiple years of books up to audit-ready GAAP standards in under 2 weeks.",
  },
  {
    question: "How does your Fractional CFO service differ from a traditional CPA?",
    answer:
      "Traditional CPAs look backward at historical data to file taxes once a year. A Fractional CFO works forward—building predictive 13-week cash models, optimizing unit economics, structuring bank loans, and advising your board on growth decisions.",
  },
  {
    question: "What accounting and payroll software do you work with?",
    answer:
      "We are certified Elite ProAdvisors and partners across QuickBooks Online, Xero, Oracle NetSuite, Gusto, ADP, Ramp, and Stripe. We seamlessly integrate with your existing tech stack or build a new one from scratch.",
  },
  {
    question: "How do you protect our confidential financial information?",
    answer:
      "All client data is housed in SOC-2 Type II compliant vaults with 256-bit AES encryption, multi-factor authentication, and strict non-disclosure agreements governed by AICPA professional ethics standards.",
  },
  {
    question: "Can you represent us if we are selected for an IRS or State tax audit?",
    answer:
      "Yes. Our licensed CPAs have full representation rights before the IRS and state taxing authorities. We act as your primary liaison, prepare all supporting schedules, and defend your filed deductions directly.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "bookkeeping",
    name: "Core Bookkeeping",
    headline: "For growing businesses needing flawless financial foundations & GAAP reporting.",
    priceMonthly: 350,
    priceAnnual: 290,
    billingPeriod: "/ month",
    features: [
      "Dedicated Senior Bookkeeper + CPA Review",
      "Monthly Financial Statements (P&L, Balance Sheet, Cash Flow)",
      "Up to 3 Bank/Credit Accounts Reconciled",
      "Automated Expense Categorization & Receipt Match",
      "Quarterly Tax Estimate Prep",
      "Standard Email & Slack Support (24h response)",
    ],
    ctaText: "Get Started",
  },
  {
    id: "corporate-tax",
    name: "Corporate Tax & Strategy",
    badge: "Most Selected",
    isPopular: true,
    headline: "Comprehensive proactive tax architecture, federal/state filings & ongoing optimization.",
    priceMonthly: 650,
    priceAnnual: 520,
    billingPeriod: "/ month",
    features: [
      "All Core Bookkeeping Features Included",
      "Year-Round Proactive Tax Planning Sessions",
      "Federal & State Corporate Income Tax Returns (1120/1120-S/1065)",
      "R&D Credit & Deduction Harvesting",
      "IRS & State Audit Shield Representation",
      "Unlimited Direct CPA Advisory Access",
    ],
    ctaText: "Start Tax Optimization",
  },
  {
    id: "virtual-cfo",
    name: "Fractional CFO Partner",
    badge: "Enterprise",
    headline: "End-to-end financial leadership, capital strategy & executive decision support.",
    priceMonthly: 1450,
    priceAnnual: 1190,
    billingPeriod: "/ month",
    features: [
      "All Tax & Bookkeeping Capabilities",
      "Dedicated Fractional CFO (Former Big 4 / Tech)",
      "13-Week Cash Flow & Scenario Modeling",
      "Capital Structuring & Loan Readiness Support",
      "Monthly Board & Leadership Presentation Decks",
      "Custom Financial KPI Dashboards & Real-time Alerts",
    ],
    ctaText: "Schedule Executive Briefing",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "CEO & Founder",
    company: "Apex Dynamics Logistics",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    stat: "$210,000",
    statLabel: "Tax Liability Saved in Year 1",
    content:
      "Doxo Promo revamped our entire financial infrastructure. They identified misclassified tax incentives and set up a loan package that funded our $2.4M fleet expansion in under 45 days.",
    rating: 5,
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Managing Director",
    company: "Kinetix BioSciences",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    stat: "14 Days → 3 Days",
    statLabel: "Month-End Close Acceleration",
    content:
      "Having their Fractional CFO in our corner gave our board complete confidence during our Series A round. Their financial models and real-time runway dashboards are best-in-class.",
    rating: 5,
  },
  {
    id: "3",
    name: "David Sterling",
    role: "Chief Operating Officer",
    company: "Sterling Commercial Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    stat: "$4.2M",
    statLabel: "Non-Dilutive Loan Structured",
    content:
      "The loan consultation alone was worth 10x their annual fee. They structured our SBA loan effortlessly while keeping our monthly bookkeeping and tax compliance pristine.",
    rating: 5,
  },
];

export const STATS_DATA = [
  { value: "$450M+", label: "Capital Advised & Managed" },
  { value: "99.8%", label: "Audit Accuracy & Compliance" },
  { value: "$32M+", label: "Client Tax Savings Delivered" },
  { value: "15+ Yrs", label: "Financial Industry Leadership" },
];

export const COMPARISON_DATA = [
  {
    feature: "Monthly Close Timeline",
    traditional: "15 to 25 days delayed",
    doxoPromo: "3 business days guaranteed",
  },
  {
    feature: "Tax Strategy",
    traditional: "Reactive once a year during tax season",
    doxoPromo: "Proactive quarterly tax harvesting & R&D credits",
  },
  {
    feature: "Executive CFO Advisory",
    traditional: "Basic data entry; no strategic advice",
    doxoPromo: "Dedicated CFO for runway & scenario planning",
  },
  {
    feature: "Capital & Loan Support",
    traditional: "Refers you to high-interest brokers",
    doxoPromo: "Direct balance sheet structuring & lender packaging",
  },
  {
    feature: "Technology & Security",
    traditional: "Clunky email spreadsheets",
    doxoPromo: "Bank-grade encrypted portal & automated feeds",
  },
];
