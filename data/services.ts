export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  heroBadge: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  overview: string;
  targetAudience: string[];
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  relatedProjectSlug?: string;
  relatedProjectName?: string;
  faqs: ServiceFaq[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "business-websites": {
    slug: "business-websites",
    title: "Business Website Development",
    heroBadge: "ENTERPRISE & SME WEB SOLUTIONS",
    h1: "Custom Business Website Development in Delhi NCR & India",
    metaTitle: "Custom Business Website Development in Delhi NCR & India",
    metaDescription: "Build a modern, conversion-focused business website tailored for your brand. Nexnify crafts fast, responsive, and SEO-ready business websites across Delhi NCR and India.",
    shortDescription: "Tailored responsive websites for businesses, consultancies, and brands looking to establish credibility and capture high-intent leads.",
    overview: "In today's digital landscape, your website is often the very first touchpoint a prospective client or investor experiences. A template website that loads slowly and looks generic undermines trust. At Nexnify, we engineer custom business websites from scratch, combining modern visual hierarchy, brand-aligned aesthetics, clean semantic code, and seamless WhatsApp lead funnels to convert visitors into active enquiries.",
    targetAudience: [
      "Consulting firms, legal practices, and corporate agencies in Delhi NCR",
      "B2B manufacturers and exporters seeking global credibility",
      "Healthcare, hospitality, and educational institutions",
      "Growing SMEs transitioning from word-of-mouth to digital acquisition"
    ],
    deliverables: [
      "Custom UI/UX design tailored to your specific brand identity",
      "100% mobile-first responsive layout tested across iOS & Android",
      "On-page SEO optimization with structured JSON-LD data",
      "Direct WhatsApp enquiry funnels and spam-protected contact forms",
      "Sub-second page load times optimized for Core Web Vitals",
      "Full source code ownership with deployment to your domain"
    ],
    process: [
      {
        step: "01",
        title: "Brand & Audience Discovery",
        description: "We analyze your competitive landscape, target clients, and core service offerings to establish a structured sitemap and conversion strategy."
      },
      {
        step: "02",
        title: "Wireframing & UI Design",
        description: "We craft clean, high-contrast layouts focusing on typography, whitespace, and clear value propositions before writing a single line of code."
      },
      {
        step: "03",
        title: "Modern Frontend Engineering",
        description: "We build your website using modern, clean HTML/CSS/JavaScript and Next.js, ensuring maximum speed, accessibility, and cross-browser reliability."
      },
      {
        step: "04",
        title: "SEO Auditing & Launch",
        description: "We verify metadata, Open Graph cards, sitemap indexing, mobile responsiveness, and form routing before deploying to your production domain."
      }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Semantic HTML5", "JSON-LD Schema"],
    relatedProjectSlug: "auralux-pg",
    relatedProjectName: "AURA LUXE SUITES — Executive Residence Portal",
    faqs: [
      {
        question: "How long does a custom business website take to build?",
        answer: "A standard 5 to 8 page custom business website typically takes 2 to 4 weeks from initial discovery to final deployment, depending on content readiness and custom feature requirements."
      },
      {
        question: "Do you use pre-made templates or write custom code?",
        answer: "We build tailored websites with custom layouts and clean component code. We do not force your brand into bloated, generic marketplace templates."
      },
      {
        question: "Will our website be mobile-friendly and fast?",
        answer: "Yes. Every website is built mobile-first and optimized to pass Google Core Web Vitals, ensuring smooth performance even on slower 4G mobile connections."
      },
      {
        question: "Do we own the full source code and domain?",
        answer: "Yes, 100%. You retain full intellectual property ownership of your website design, code, and digital assets with zero vendor lock-in."
      }
    ]
  },

  "nextjs-react-development": {
    slug: "nextjs-react-development",
    title: "Next.js & React Development",
    heroBadge: "HIGH-PERFORMANCE MODERN WEB APPS",
    h1: "Next.js & React.js Development Services in Delhi NCR",
    metaTitle: "Next.js & React.js Development Services in Delhi NCR & India",
    metaDescription: "Accelerate your web platform with custom Next.js and React development. Nexnify engineers blazing-fast, SEO-optimized App Router web applications for ambitious brands.",
    shortDescription: "Blazing-fast, SEO-optimized web applications and portals engineered with Next.js App Router, React 19, and TypeScript.",
    overview: "Modern businesses cannot afford slow, clunky web experiences that drop users and hurt search rankings. Nexnify specializes in Next.js and React web engineering. By leveraging server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR), we deliver web applications that load in milliseconds, rank exceptionally well on search engines, and scale effortlessly as your traffic multiplies.",
    targetAudience: [
      "Startups building modern SaaS products, portals, or platforms",
      "Brands wanting sub-second load times and top-tier Core Web Vitals scores",
      "Enterprises replacing sluggish legacy websites with modern React architecture",
      "High-traffic websites needing superior server-rendered SEO and dynamic content"
    ],
    deliverables: [
      "Next.js App Router architecture with modular Server & Client Components",
      "Strict TypeScript typing for bug-free, maintainable codebases",
      "Lightning-fast dynamic routing and server-side metadata generation",
      "Optimal Core Web Vitals with minimal JavaScript bundle overhead",
      "API route handlers with server-side validation and security headers",
      "Automated CI/CD deployment pipelines on Vercel or cloud VPS"
    ],
    process: [
      {
        step: "01",
        title: "Technical Architecture",
        description: "We define state management, routing hierarchy, rendering strategies (SSR/SSG), and API integrations tailored to your application's workload."
      },
      {
        step: "02",
        title: "Component Design System",
        description: "We build a modular, reusable design system using Tailwind CSS and React components, ensuring visual consistency across all viewports."
      },
      {
        step: "03",
        title: "Fullstack Implementation",
        description: "We develop the frontend views, server actions/API endpoints, forms, and database connections with clean, documented code."
      },
      {
        step: "04",
        title: "Performance & Security Hardening",
        description: "We optimize image formats (AVIF/WebP), eliminate layout shifts, configure security headers, and verify sub-second real-world performance."
      }
    ],
    technologies: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    relatedProjectSlug: "aurabridal-studio",
    relatedProjectName: "Aura Bridal Studio — Next.js 15 Luxury Atelier Platform",
    faqs: [
      {
        question: "Why should I choose Next.js over traditional WordPress or PHP?",
        answer: "Next.js combines the interactive user experience of React with the SEO benefits of pre-rendered HTML. It delivers unmatched load speeds, superior security (no SQL injection on static pages), and the ability to scale to millions of requests at low hosting costs."
      },
      {
        question: "Is Next.js good for SEO in India?",
        answer: "Yes, Next.js is one of the best frameworks for SEO because it serves fully rendered HTML to search engine bots immediately, ensuring complete indexing of metadata, structured data, and content."
      },
      {
        question: "Can you migrate our existing website to Next.js?",
        answer: "Yes. We frequently migrate slow WordPress, PHP, or outdated React SPAs to modern Next.js, preserving all existing URL structures, redirects, and search engine authority."
      }
    ]
  },

  "wordpress-development": {
    slug: "wordpress-development",
    title: "WordPress Website Development",
    heroBadge: "CONTENT-MANAGED WEB PLATFORMS",
    h1: "Professional WordPress Website Development in Delhi NCR",
    metaTitle: "WordPress Website Development Services in India & Delhi NCR",
    metaDescription: "Custom WordPress website development services in Delhi NCR & India. Fast Elementor builds, clean theme customizations, plugin setup & speed optimization.",
    shortDescription: "Clean, reliable WordPress builds and customizations designed for teams who need full content control without bloated templates.",
    overview: "WordPress powers over 40% of the web, but poorly configured WordPress sites with dozens of conflicting plugins often become slow, vulnerable, and frustrating to update. At Nexnify, we build clean, speed-optimized WordPress websites. Whether you need an institutional educational portal, a blog, or a corporate site, we deliver an intuitive editing experience backed by rock-solid security, sub-1.5s mobile page loads, and real-world case study results like our HIT IAS Academy portal.",
    targetAudience: [
      "Institutes, academies, and coaching centers publishing regular notices and study material",
      "Marketing teams needing non-technical autonomy to create landing pages and publish blog posts",
      "Small-to-medium businesses wanting an easy-to-manage CMS with zero monthly SaaS fees",
      "Brands looking to revamp a slow, outdated WordPress installation safely"
    ],
    deliverables: [
      "Custom WordPress theme customization & responsive mobile-first design",
      "Modular Elementor Pro or Gutenberg block layouts for easy visual editing",
      "Plugin configuration & custom shortcode/hook scripting (Contact Form 7, SMTP)",
      "WordPress website redesign with strict 301 redirects and SEO permalink preservation",
      "Hardened WordPress security against brute-force attacks and vulnerability scanning",
      "LiteSpeed / WP Rocket caching and image compression for sub-1.5 second loading",
      "Client walkthrough video training on managing pages and articles"
    ],
    process: [
      {
        step: "01",
        title: "Content Strategy & Information Architecture",
        description: "We map custom post types, categories, navigation menus, and media requirements to keep the WordPress dashboard clean and intuitive."
      },
      {
        step: "02",
        title: "Responsive Theme & Layout Customization",
        description: "We build lightweight, brand-aligned visual templates matching your typography and colors, ensuring flawless rendering on all devices."
      },
      {
        step: "03",
        title: "Plugin Integration & Security Hardening",
        description: "We configure essential plugins with zero bloat, custom login URLs, rate limiting, anti-spam form routing, and automated off-site backups."
      },
      {
        step: "04",
        title: "Speed Optimization, Handoff & Training",
        description: "We fine-tune caching, verify Core Web Vitals, and provide step-by-step video training so your editorial team has total publishing autonomy."
      }
    ],
    technologies: ["WordPress CMS", "Elementor Pro", "PHP", "MySQL", "Contact Form 7", "LiteSpeed / WP Rocket", "Yoast / RankMath SEO"],
    relatedProjectSlug: "hitias-academy",
    relatedProjectName: "HIT IAS Academy — UPSC & State PCS Platform (<1.2s Load Time)",
    faqs: [
      {
        question: "How much does a custom WordPress website cost in India?",
        answer: "WordPress website development costs depend on page count, theme complexity, and custom forms. Clean informational or institutional WordPress websites typically start from ₹7,500 to ₹35,000. We provide fixed milestone quotes with zero hidden plugin fees."
      },
      {
        question: "Will our WordPress website be slow or bloated?",
        answer: "No. Unlike average agencies that stack 30+ marketplace plugins, we follow strict performance hygiene: clean child themes, lightweight builders, server-level caching, and modern image compression to guarantee sub-1.5 second load times."
      },
      {
        question: "Do you build custom WordPress plugins or customize existing ones?",
        answer: "We specialize in custom WordPress theme engineering, plugin configuration, and custom PHP hooks/filters. If your project requires a custom WordPress plugin integration or workflow (like CRM webhooks or WhatsApp routing), we build it directly into your setup."
      },
      {
        question: "Can you redesign our existing WordPress website without losing Google rankings?",
        answer: "Yes. We preserve your existing URL structures, permalinks, and meta descriptions, and set up 301 redirects for any altered paths so your search rankings and backlink authority remain protected."
      },
      {
        question: "Can our non-technical team update text and images easily?",
        answer: "Yes, that is the primary advantage of our WordPress builds. We configure a clean, visual drag-and-drop editor and provide step-by-step guidance so anyone on your team can edit content with confidence."
      }
    ]
  },

  "web-applications": {
    slug: "web-applications",
    title: "Custom Web Application Development",
    heroBadge: "BESPOKE WEB PLATFORMS & PORTALS",
    h1: "Custom Web Application Development Services in Delhi NCR",
    metaTitle: "Custom Web Application Development Services in Delhi NCR",
    metaDescription: "Engineer scalable, secure web applications, customer portals, and booking engines. Nexnify builds custom fullstack web applications with PHP, Node.js, and React.",
    shortDescription: "Bespoke web applications, flight/hotel booking engines, client dashboards, and custom business management platforms.",
    overview: "Off-the-shelf software rarely fits unique business workflows. When you need custom booking engines, multi-step enquiry funnels, customer management portals, or complex database filtering, Nexnify engineers bespoke web applications. We combine robust backend engineering (PHP/MySQL or Node.js) with responsive, interactive frontends to automate operations and handle thousands of simultaneous user transactions.",
    targetAudience: [
      "Travel agencies and tour operators needing custom flight/hotel booking portals",
      "Property management and coliving operators needing room availability & scheduling engines",
      "Service businesses looking to automate customer quotes, bookings, and onboarding",
      "Startups validating a proprietary digital product or internal operations tool"
    ],
    deliverables: [
      "Custom database design (MySQL / PostgreSQL / Firebase) with relational indexing",
      "Secure user authentication (JWT, OAuth, session management)",
      "Interactive search, filter, and comparison user interfaces",
      "RESTful API integration with payment gateways, SMS, and WhatsApp APIs",
      "Admin dashboards with customer lead tracking and operational controls",
      "Thorough testing for data validation, concurrency, and security"
    ],
    process: [
      {
        step: "01",
        title: "Workflow Mapping & Architecture",
        description: "We map every user interaction, database relationship, and third-party integration into a clear technical specification."
      },
      {
        step: "02",
        title: "Database & Backend Engineering",
        description: "We write clean, efficient backend endpoints with strict input sanitization, error handling, and optimized database queries."
      },
      {
        step: "03",
        title: "Frontend Interaction Design",
        description: "We build intuitive, responsive interfaces with immediate visual feedback, asynchronous loading states, and frictionless input flows."
      },
      {
        step: "04",
        title: "Testing, Security & Deployment",
        description: "We perform rigorous cross-browser testing, penetration checks, and SQL injection prevention before production cloud rollout."
      }
    ],
    technologies: ["Custom PHP", "MySQL", "JavaScript ES6+", "React", "Node.js", "REST APIs", "Bootstrap 5"],
    relatedProjectSlug: "skyodeals",
    relatedProjectName: "SkyOdeals — Flight Booking & Travel Portal",
    faqs: [
      {
        question: "What backend technologies do you use for web applications?",
        answer: "We select the backend based on project requirements. For high-performance search portals and travel engines, we use custom PHP & MySQL or Node.js. For fullstack modern web apps, we utilize Next.js server actions and cloud databases."
      },
      {
        question: "Can our web app integrate with WhatsApp and SMS gateways?",
        answer: "Yes. We build automated notification systems that instantly forward new bookings or leads to your WhatsApp and dispatch confirmation alerts to customers."
      },
      {
        question: "How do you ensure data security in custom web apps?",
        answer: "We use parameterised SQL queries to prevent SQL injection, escape all HTML output to prevent XSS, enforce HTTPS encryption, and implement server-side rate limiting."
      }
    ]
  },

  "landing-pages": {
    slug: "landing-pages",
    title: "Landing Page Design & Development",
    heroBadge: "HIGH-CONVERTING AD CAMPAIGN FUNNELS",
    h1: "High-Converting Landing Page Design & Development in Delhi NCR",
    metaTitle: "High-Converting Landing Page Design & Development in Delhi NCR",
    metaDescription: "Maximize your Google Ads and Meta campaign ROI. Nexnify designs and builds high-converting, lightning-fast landing pages engineered to turn traffic into qualified leads.",
    shortDescription: "High-converting, single-page experiences designed with clear visual hierarchy, compelling value propositions, and friction-free lead funnels.",
    overview: "Running paid traffic from Google Ads, Meta, or LinkedIn to a generic homepage is one of the most common causes of wasted marketing budgets. Nexnify designs dedicated landing pages laser-focused on a single objective: converting visitors into phone calls, WhatsApp messages, or form submissions. Every element—from headline hierarchy to social proof placement and form simplicity—is engineered for maximum conversion velocity.",
    targetAudience: [
      "Companies investing in Google Ads, Meta Ads, or LinkedIn advertising campaigns",
      "Real estate developers and coliving brands launching new residential projects",
      "Clinics, law firms, and consultancies wanting immediate patient or client bookings",
      "Product launches and service campaigns requiring a dedicated promotional showcase"
    ],
    deliverables: [
      "Single-page conversion-centered UI design with psychological trust triggers",
      "Sticky mobile CTA bar with one-tap WhatsApp and phone dialing",
      "Ultra-fast mobile loading speed (under 1 second) to prevent bounce rates",
      "Lead capture forms with real-time client & server validation",
      "Full Google Analytics 4 & Meta Pixel conversion event tracking setup",
      "A/B testing-ready layout structure"
    ],
    process: [
      {
        step: "01",
        title: "Campaign & Audience Analysis",
        description: "We review your ad copy, search keywords, target demographic, and offer positioning to maintain flawless message match."
      },
      {
        step: "02",
        title: "Conversion Copy & Wireframing",
        description: "We structure the page flow: hook headline, proof points, benefit breakdown, customer testimonials, and clear call-to-action blocks."
      },
      {
        step: "03",
        title: "Fast Lightweight Development",
        description: "We code the landing page with zero bloat, optimizing every asset to achieve immediate above-the-fold rendering on mobile devices."
      },
      {
        step: "04",
        title: "Conversion Tracking Verification",
        description: "We verify that WhatsApp clicks, form submits, and phone taps correctly fire conversion events into your analytics."
      }
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "GA4 Event Tracking", "WhatsApp API"],
    relatedProjectSlug: "auralux-pg",
    relatedProjectName: "AURA LUXE SUITES — High-Conversion Residence Landing Page",
    faqs: [
      {
        question: "How quickly can a custom landing page be deployed?",
        answer: "A bespoke, conversion-optimized landing page can typically be designed, built, and launched within 5 to 7 business days."
      },
      {
        question: "Why do landing pages convert better than normal website pages?",
        answer: "Standard pages have multiple navigation links, menus, and distractions. A dedicated landing page removes all exit routes, focusing 100% of the visitor's attention on a single compelling offer with clear calls to action."
      },
      {
        question: "Will you integrate our Google Ads and Meta Pixel tracking?",
        answer: "Yes. We configure custom conversion events for form submissions and WhatsApp clicks so your ad algorithms can optimize for real leads."
      }
    ]
  },

  "website-maintenance-redesign": {
    slug: "website-maintenance-redesign",
    title: "Website Redesign & Maintenance",
    heroBadge: "PERFORMANCE, SPEED & SECURITY",
    h1: "Website Redesign & Maintenance Services in Delhi NCR",
    metaTitle: "Website Redesign & Maintenance Services in Delhi NCR & India",
    metaDescription: "Modernize your outdated website or protect your existing digital presence. Nexnify provides comprehensive website redesigns, Core Web Vitals optimization, and maintenance.",
    shortDescription: "Transform outdated websites into fast, modern platforms, or protect your business with regular maintenance, security, and content updates.",
    overview: "Web standards evolve rapidly. If your website was built several years ago, it is likely losing traffic to competitors due to poor mobile responsiveness, sluggish load times, outdated design, or broken links. Nexnify provides strategic website redesigns that preserve your existing SEO rankings while transforming your visual authority. We also provide dependable ongoing maintenance to keep your digital storefront updated, secure, and running smoothly.",
    targetAudience: [
      "Businesses with an outdated design that no longer reflects their market standing",
      "Websites failing Google Core Web Vitals or suffering from slow mobile performance",
      "Companies experiencing drops in organic search rankings due to technical SEO issues",
      "Busy business owners who need a reliable developer on call for regular updates"
    ],
    deliverables: [
      "Complete visual and structural overhaul with modern typography and whitespace",
      "SEO preservation plan with 301 redirect mapping to prevent 404 ranking losses",
      "Core Web Vitals remediation (LCP, CLS, INP optimization)",
      "Ongoing security updates, vulnerability patching, and spam prevention",
      "Scheduled off-site backups and uptime monitoring",
      "Fast turnaround for routine content updates and banner modifications"
    ],
    process: [
      {
        step: "01",
        title: "Technical & SEO Audit",
        description: "We audit your existing site to identify top-performing URLs, keyword rankings, backlink profiles, and technical bottlenecks."
      },
      {
        step: "02",
        title: "Modern UI/UX Re-architecture",
        description: "We design a fresh, modern aesthetic that improves readability and conversion funnels while keeping the core brand familiar."
      },
      {
        step: "03",
        title: "Clean Re-engineering & 301 Mapping",
        description: "We rebuild the site on a modern stack and configure meticulous 301 redirects for every legacy URL to safeguard SEO authority."
      },
      {
        step: "04",
        title: "Post-Launch Monitoring & Support",
        description: "We monitor search console indexing, fix any crawl anomalies immediately, and provide ongoing maintenance support."
      }
    ],
    technologies: ["Next.js", "WordPress", "Core Web Vitals", "Lighthouse", "SEO Auditing Tools", "Security Patching"],
    relatedProjectSlug: "skyodeals",
    relatedProjectName: "SkyOdeals — Complete UI Modernization & Performance Rebuild",
    faqs: [
      {
        question: "Will a website redesign hurt my current Google rankings?",
        answer: "If done carelessly, yes. But with Nexnify's structured migration process—including meticulous 301 redirect mapping, preserving target keyword headers, and improving page speed—a redesign often boosts your rankings by satisfying modern search engine quality standards."
      },
      {
        question: "What is included in your monthly website maintenance?",
        answer: "Maintenance includes security monitoring, regular off-site backups, text and image updates, broken link fixes, form deliverability tests, and technical support whenever you need adjustments."
      },
      {
        question: "Can you fix our Core Web Vitals without rebuilding the whole site?",
        answer: "In many cases, yes. We can perform targeted enhancements: compressing media, deferring render-blocking scripts, and fixing layout shifts to pass Google Core Web Vitals."
      }
    ]
  },

  "mobile-apps": {
    slug: "mobile-apps",
    title: "Mobile App Development",
    heroBadge: "CROSS-PLATFORM IOS & ANDROID APPS",
    h1: "Mobile App Development Services in Delhi NCR & India",
    metaTitle: "Mobile App Development Services (React Native & Expo)",
    metaDescription: "Build native-feeling iOS and Android mobile apps with React Native & Expo. Nexnify engineers fast, secure, and scalable mobile apps for Indian startups and businesses.",
    shortDescription: "High-performance cross-platform mobile apps for iOS and Android built natively with React Native, Expo, and real-time cloud backends.",
    overview: "With over 70% of Indian internet traffic occurring on smartphones, certain business models require direct mobile app engagement. Nexnify engineers cross-platform mobile applications using React Native and Expo. By maintaining a single, clean TypeScript codebase that compiles to native iOS and Android binaries, we dramatically reduce development time and cost without compromising 60 FPS fluidity, push notifications, or native device features.",
    targetAudience: [
      "Startups building consumer-facing community, messaging, or lifestyle apps",
      "Businesses needing on-the-go employee or customer portals with offline support",
      "Service providers wanting direct customer engagement via mobile push notifications",
      "Brands looking to deploy to both Apple App Store and Google Play Store cost-effectively"
    ],
    deliverables: [
      "Cross-platform React Native & Expo application for iOS and Android",
      "Smooth 60 FPS native user interface matching platform design conventions",
      "Real-time database integration (Firebase Firestore / Supabase / REST)",
      "Secure user authentication (Google, Apple, Phone OTP, Email/Password)",
      "Push notification integration via Expo Notifications / FCM",
      "Full assistance with Google Play Store & Apple App Store submission"
    ],
    process: [
      {
        step: "01",
        title: "Product Scoping & User Journey",
        description: "We define core app flows, permission requirements, authentication mechanisms, and offline data caching strategies."
      },
      {
        step: "02",
        title: "Interactive UI/UX Mobile Design",
        description: "We design ergonomic mobile interfaces adhering to Apple Human Interface Guidelines and Google Material Design principles."
      },
      {
        step: "03",
        title: "Native React Native Engineering",
        description: "We code the mobile app using React Native, TypeScript, and native modules, optimizing state updates for buttery-smooth scrolling."
      },
      {
        step: "04",
        title: "Testing & App Store Deployment",
        description: "We test on real physical iOS and Android hardware, produce signed production builds, and guide store deployment."
      }
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase Auth & Firestore", "REST APIs", "AsyncStorage"],
    relatedProjectSlug: "xchat",
    relatedProjectName: "XChat — Real-Time Mobile Messaging Application",
    faqs: [
      {
        question: "Why use React Native instead of separate native Swift and Kotlin apps?",
        answer: "React Native allows one unified codebase to run seamlessly on both iOS and Android. This cuts development and maintenance costs by nearly 50% while delivering true native UI performance and device access."
      },
      {
        question: "Can the mobile app work offline or with poor connectivity?",
        answer: "Yes. We implement local state caching (AsyncStorage / SQLite) so key data remains readable even when a user temporarily loses internet connectivity."
      },
      {
        question: "Do you help publish the app to Google Play Store and Apple App Store?",
        answer: "Yes, we handle signing certificates, app bundle generation, store asset requirements, and submission guidance through store review."
      }
    ]
  }
};
