export interface Project {
  id: string;
  number: string;
  category: string;
  categoryTag: string;
  title: string;
  shortDescription: string;
  fullNarrative: string;
  role: string;
  companyOrContext: string;
  topIssues?: string[];
  keyActions: string[];
  outcomeLabel: string;
  outcomeMetric: string;
  outcomeSubtext: string;
  isProjected?: boolean;
  tags: string[];
  methodology?: {
    stage: string;
    details: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  name: "Mohammed Junaid",
  shortName: "Junaid.",
  roleTitle: "Growth Marketing Professional",
  experienceYears: "2+ Years",
  oneLineDescription:
    "Growth marketing professional with 2+ years of experience in e-commerce, digital marketing, and campaign management, with experience at Prime Video and D2C brands. I enjoy solving marketing problems, improving customer experiences, and turning ideas into measurable results.",
  email: "junaidprdns@proton.me",
  linkedInUrl: "https://www.linkedin.com/in/mo-junaid010/",
  statusText: "Available for Growth & Marketing Sprints",
  headline: {
    prefix: "Hi, I'm Junaid.",
    main: "I turn marketing problems into",
    accent: "measurable results",
    suffix: "for e-commerce and D2C brands.",
  },
  projects: [
    {
      id: "diva-seo",
      number: "01",
      category: "D2C E-COMMERCE / TECHNICAL SEO",
      categoryTag: "D2C E-Commerce",
      title: "Diva SEO Audit & Reusable Audit Framework",
      shortDescription:
        "Built a reusable SEO audit framework and ran it on the full site (divastyle.in). Baseline score was 44/100 across on-page, technical, and content factors.",
      fullNarrative:
        "As a growth marketer at Diva, a D2C women's ethnic wear brand based in Chennai, I built an end-to-end, reusable SEO audit framework and executed it across the entire site (divastyle.in). The initial baseline audit yielded a score of 44/100, constrained by severe technical debt, unoptimized assets, and missing metadata on high-intent collection pages.",
      role: "Growth Marketer",
      companyOrContext: "Diva (divastyle.in) — Chennai",
      topIssues: [
        "Missing canonical tags and unorganized H1/H2 hierarchy across 140+ product category and seasonal collection pages.",
        "Uncompressed high-resolution banner imagery causing high Largest Contentful Paint (LCP of 4.2s on mobile).",
        "Thin, automated duplicate meta descriptions across core ethnic wear listings (Sarees, Kurtis, Anarkalis)."
      ],
      keyActions: [
        "Constructed a reusable audit framework covering technical health, crawl budgets, on-page taxonomy, and content uniqueness.",
        "Implemented standardized title and meta description templates targeting high-intent ethnic wear commercial keywords.",
        "Restructured canonical URL tags and optimized media assets to improve page experience and Google Core Web Vitals.",
        "Created an ongoing weekly re-audit cadence to prevent regression as new inventory drops."
      ],
      outcomeLabel: "OUTCOME",
      outcomeMetric: "Baseline 44/100 → 78/100 Re-Audit Score",
      outcomeSubtext: "+34 pt comprehensive score increase with 42% faster mobile indexing",
      isProjected: false,
      tags: ["divastyle.in", "Technical SEO", "Screaming Frog", "Core Web Vitals", "Shopify"],
      methodology: [
        { stage: "Crawl & Diagnostic", details: "Scanned 500+ URLs to isolate crawl errors, broken redirects, and indexation blockers." },
        { stage: "Taxonomy Restructuring", details: "Aligned collection hierarchies with ethnic wear search intent (occasion, fabric, silhouette)." },
        { stage: "Technical Remediation", details: "Resolved duplicate canonicals and compressed media to shave 1.8s off mobile LCP." },
        { stage: "Re-Audit & Verification", details: "Re-evaluated against Google Lighthouse & SEO benchmarks, scoring 78/100." }
      ]
    },
    {
      id: "chatgpt-attribution",
      number: "02",
      category: "ATTRIBUTION & CATALOG OPERATIONS",
      categoryTag: "Attribution & AI",
      title: "Finding ChatGPT as a Sales Source + Fixing SKU Data",
      shortDescription:
        "Uncovered ChatGPT as an untracked referral source in Shopify attribution data while auditing and correcting missing/incorrect SKUs across active product listings.",
      fullNarrative:
        "While auditing Shopify's connected-channel attribution data over a 2-month window, I identified ChatGPT emerging organically as a referral source for Diva's sales. Concurrently, an operational audit revealed inconsistencies and gaps in SKU codes across the inventory catalog, which was obscuring product performance and cross-channel sync.",
      role: "Growth & Attribution Specialist",
      companyOrContext: "Diva D2C",
      topIssues: [
        "ChatGPT referral traffic was blending into general direct/unassigned sessions in early reporting.",
        "Over 340 active product listings had missing or malformed SKU codes, preventing accurate variant tracking."
      ],
      keyActions: [
        "Isolated ChatGPT user-agent and referrer referral paths in Shopify attribution to measure conversational discovery intent.",
        "Audited the complete active catalog and corrected 340+ missing and malformed SKUs across color/size variants.",
        "Synced cleaned SKU taxonomies with sales reporting dashboards to attribute revenue accurately down to specific product lines."
      ],
      outcomeLabel: "OUTCOME",
      outcomeMetric: "2 Confirmed Sales & 340+ SKUs Fixed",
      outcomeSubtext: "Sales directly attributed to ChatGPT referrals and organic search within 2 months",
      isProjected: false,
      tags: ["Shopify Analytics", "ChatGPT Referral", "Catalog Ops", "Attribution Modeling", "Data Hygiene"],
      methodology: [
        { stage: "Attribution Discovery", details: "Drilled into referral headers in Shopify to trace organic conversational search conversions." },
        { stage: "Catalog Data Audit", details: "Exported 1,000+ variants to identify SKU discrepancies, duplicate barcodes, and orphan records." },
        { stage: "Systematic Correction", details: "Corrected and mapped 340+ SKUs to standardized naming conventions (Category-Fabric-Cut-ID)." },
        { stage: "Tracking Validation", details: "Verified end-to-end order tracking from referrer to fulfillment." }
      ]
    },
    {
      id: "spur-whatsapp",
      number: "03",
      category: "CONVERSATIONAL COMMERCE / AI",
      categoryTag: "Attribution & AI",
      title: "WhatsApp AI Shopping Assistant on Spur",
      shortDescription:
        "Managed and improved Diva's Spur AI WhatsApp agent. Mapped and linked 20+ products to Instagram Reels for instantaneous Reel-to-checkout replies.",
      fullNarrative:
        "Diva's Spur AI WhatsApp shopping agent already existed when I joined. My role was managing and improving it, not building it from scratch. Recognizing that social inquiry drop-off was high when customers saw items on Instagram Reels, I mapped and linked 20+ products directly to corresponding Reels so that when a shopper asked about a reel item, the agent instantly responded with the exact product link.",
      role: "Growth Marketer (Conversational Ops)",
      companyOrContext: "Diva D2C & Spur Platform",
      keyActions: [
        "Audited conversational conversation logs on Spur to isolate user drop-off triggers and frequent intent failures.",
        "Created an organized Reel-to-Product routing map covering Diva's 20+ top-performing Instagram Reels.",
        "Trained intent triggers and conversational responses with exact product variants, size charts, and direct checkout links.",
        "Iterated on conversational copy to make the agent helpful, polite, and rapid."
      ],
      outcomeLabel: "OUTCOME",
      outcomeMetric: "20+ Reel Products Mapped",
      outcomeSubtext: "Zero-friction transition from Instagram engagement to verified WhatsApp product links",
      isProjected: false,
      tags: ["Spur AI", "WhatsApp Commerce", "Instagram Reels Mapping", "Social-to-Checkout", "Retention"],
      methodology: [
        { stage: "Interaction Audit", details: "Reviewed historical customer messages asking 'price of the outfit in reel' and identified drop-offs." },
        { stage: "Media-to-SKU Index", details: "Indexed 20+ viral reels to live Shopify product handles and direct checkout permalinks." },
        { stage: "Agent Flow Optimization", details: "Configured Spur AI intent rules to detect reel keywords and dispatch rich product cards." },
        { stage: "Response Testing", details: "Simulated diverse customer colloquial queries to guarantee 100% accurate link dispatch." }
      ]
    },
    {
      id: "local-listings",
      number: "04",
      category: "LOCAL SEO & REPUTATION",
      categoryTag: "D2C E-Commerce",
      title: "Local Listings & Directory Standardization",
      shortDescription:
        "Standardized inconsistent business info (name, address, phone) across JustDial, Bing Places, MagicPin, and other high-volume local directories.",
      fullNarrative:
        "Diva's business information (Name, Address, Phone — NAP) was fragmented and conflicting across major online directories. This caused customer confusion regarding store hours and weakened localized search trust signals. I conducted a comprehensive cleanup and standardized Diva's footprint across JustDial, Bing Places, MagicPin, and secondary directories.",
      role: "Growth & Local Presence Lead",
      companyOrContext: "Diva D2C Retail & Online",
      topIssues: [
        "Conflicting contact numbers and obsolete physical address coordinates listed on older directory entries.",
        "Fragmented business names diluting branded search authority across Chennai metropolitan regions."
      ],
      keyActions: [
        "Cataloged all existing citations across search engines, map providers, and local aggregators.",
        "Claimed, verified, and updated profiles on JustDial, Bing Places, MagicPin, and allied platforms.",
        "Standardized NAP data, operational hours, category tags, and verified store photography."
      ],
      outcomeLabel: "OUTCOME",
      outcomeMetric: "100% NAP Consistency",
      outcomeSubtext: "Standardized across JustDial, Bing Places, MagicPin, and core citation directories",
      isProjected: false,
      tags: ["JustDial", "Bing Places", "MagicPin", "NAP Standardization", "Local SEO", "Citations"],
      methodology: [
        { stage: "Citation Audit", details: "Scraped web references to detect naming variations and obsolete phone numbers." },
        { stage: "Verification & Claiming", details: "Completed ownership verification across Bing Places, JustDial, and MagicPin." },
        { stage: "Data Alignment", details: "Unified business address, pin codes, geo-coordinates, and operating hours." }
      ]
    },
    {
      id: "decathlon-gtm",
      number: "05",
      category: "GTM STRATEGY & PAID ACQUISITION (MOCK CASE STUDY)",
      categoryTag: "GTM Launch",
      title: "Decathlon Basketball Launch Plan (Self-Initiated Case Study)",
      shortDescription:
        "A mock go-to-market plan for a ₹25 lakh basketball range launch across 4 cities, budget split by basketball potential, 4-stage messaging, and rigorous ad CTR kill-rules.",
      fullNarrative:
        "This is a mock go-to-market plan I built, not a live campaign. I planned a ₹25 lakh launch for a basketball range across 4 target cities (Delhi/NCR, Bangalore, Mumbai, Pune), splitting budget by basketball potential instead of an arbitrary equal split. I developed cohesive messaging for four distinct funnel stages (Awareness, Consideration, Conversion, Retention) anchored by the tagline 'Own the Court. Not Just the Gear', and instituted a strict algorithmic testing rule: 2 creative variants per ad set, kill any creative under 1.2% CTR by day 7, and scale winners by 20%.",
      role: "GTM Strategist (Self-Initiated Case Study)",
      companyOrContext: "Decathlon Sports (Self-Initiated Mock GTM Plan)",
      keyActions: [
        "Weighted ₹25L launch budget by city-specific court density, youth demographic penetration, and basketball affinity.",
        "Structured full-funnel creative messaging under the campaign theme: 'Own the Court. Not Just the Gear'.",
        "Designed strict ad set optimization logic: 2 variants per set, kill < 1.2% CTR at day 7, scale top performers by +20%.",
        "Modeled multi-tiered return scenarios predicting revenue, blended customer acquisition costs, and ROAS."
      ],
      outcomeLabel: "PROJECTED OUTCOME",
      outcomeMetric: "Projected Revenue: ₹3,57,65,000 | ROAS: 14.3x",
      outcomeSubtext: "Projected outcome from self-initiated mock case study model (never as achieved)",
      isProjected: true,
      tags: ["Decathlon GTM", "Media Planning", "₹25L Budget", "ROAS Modeling", "A/B Testing Rule", "Funnel Strategy"],
      methodology: [
        { stage: "Stage 1: Awareness", details: "Regional court culture hooks, high-energy video teasers celebrating local basketball courts." },
        { stage: "Stage 2: Consideration", details: "Grip, bounce, durability teardowns comparing Decathlon range vs premium incumbents." },
        { stage: "Stage 3: Conversion", details: "Hyper-localized starter bundle promotions, urgency offers, and sizing guarantees." },
        { stage: "Stage 4: Retention", details: "Community court meetup invites, maintenance tips, and loyalty repurchasing loops." }
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Core Product Marketing",
      description: "End-to-end product commercialization, narrative positioning, and funnel mechanics.",
      skills: [
        "Audience Segmentation",
        "Content & Storytelling",
        "Campaign Management",
        "Demand Generation",
        "Funnel Optimization",
        "Product/Content Discovery",
        "Customer Engagement",
        "Marketing Operations",
        "A/B Testing"
      ]
    },
    {
      title: "Go-to-Market & Launch",
      description: "Cross-functional execution, regional localization, and high-velocity campaign rollouts.",
      skills: [
        "Campaign Execution",
        "Launch Readiness",
        "Regional Campaign Localization",
        "Cross-functional Coordination",
        "Stakeholder Management",
        "High-velocity Execution",
        "Workflow Management"
      ]
    },
    {
      title: "Customer & Market Understanding",
      description: "Quantitative performance analysis, qualitative audience feedback, and retention loops.",
      skills: [
        "Audience Analysis",
        "Customer Engagement",
        "Content Strategy",
        "Community Engagement",
        "Performance Analysis",
        "Customer Experience Optimization"
      ]
    },
    {
      title: "Product & Digital Experience",
      description: "E-commerce store performance, discoverability, search optimization, and web presence.",
      skills: [
        "E-commerce Marketing",
        "Product Discoverability",
        "SEO",
        "Shopify",
        "Website Management",
        "Social Media Marketing"
      ]
    },
    {
      title: "Tools Relevant to Product Marketing",
      description: "The core stack used daily for analytics, paid media, workflows, and AI-assisted creation.",
      skills: [
        "GA4",
        "Google Ads",
        "LinkedIn Ads",
        "HubSpot CRM",
        "Shopify",
        "Asana",
        "Slack",
        "Figma",
        "Adobe Express",
        "AI/GPT Tools"
      ]
    }
  ] as SkillCategory[]
};
