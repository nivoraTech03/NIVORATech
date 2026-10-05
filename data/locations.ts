import { IconName } from "@/components/ui/Icon";

export interface FAQ {
  question: string;
  answer: string;
}

export interface BusinessType {
  title: string;
  icon: IconName;
  description: string;
}

export interface LocationData {
  slug: string;
  name: string;
  state: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  introParagraphs: string[];
  businessTypes: BusinessType[];
  faqs: FAQ[];
  pricingOverrides?: {
    landing?: string;
    website?: string;
    maintenance?: string;
  };
}

export const locations: Record<string, LocationData> = {
  gwalior: {
    slug: "gwalior",
    name: "Gwalior",
    state: "Madhya Pradesh",
    title: "Website Development Company in Gwalior | NIVORA Tech",
    description: "Build a responsive, fast, and business-focused website with NIVORA Tech. Professional website development, redesign, and maintenance services for businesses in Gwalior.",
    primaryKeyword: "website development company in Gwalior",
    secondaryKeywords: [
      "web development company in Gwalior",
      "website design company in Gwalior",
      "website redesign in Gwalior",
      "small business website development in Gwalior",
    ],
    introParagraphs: [
      "In today's digital era, having a professional website is no longer optional for businesses in Gwalior. Whether you run a bustling restaurant in DB City Mall, a coaching institute in Phool Bagh, or a professional clinic in Lashkar, a fast and responsive website acts as your 24/7 digital storefront.",
      "At NIVORA Tech, we specialize in building high-quality, conversion-focused websites tailored specifically for the Gwalior market. We understand that local businesses need more than just a digital brochure—they need a platform that generates leads, builds trust, and seamlessly integrates with tools like WhatsApp to connect with local customers directly."
    ],

    businessTypes: [
      {
        title: "Local Retail & Shops",
        icon: "layout",
        description: "Showcase your products, store timings, and offers to local customers looking for you online."
      },
      {
        title: "Coaching Institutes",
        icon: "code",
        description: "Highlight your courses, faculty, and student success stories to attract more enrollments."
      },
      {
        title: "Restaurants & Cafes",
        icon: "instagram",
        description: "Display your menu, ambiance, and allow easy table reservations or WhatsApp ordering."
      },
      {
        title: "Clinics & Professionals",
        icon: "plus",
        description: "Build trust with patients and clients through professional profiles and easy contact forms."
      }
    ],
    faqs: [
      {
        question: "How much does website development cost in Gwalior?",
        answer: "Our standard new business website package starts at ₹3,999+. Landing pages are even more affordable, and complex custom web apps are priced based on your exact requirements. We ensure transparent pricing with no hidden development fees."
      },
      {
        question: "Do you build websites for small businesses in Gwalior?",
        answer: "Absolutely. We specialize in working with small to medium-sized businesses, startups, and professionals across Gwalior, providing tailored solutions that fit their budget and growth goals."
      },
      {
        question: "Can you redesign an existing website?",
        answer: "Yes, our website redesign services start at ₹2,999+. We can modernize your old, slow, or non-responsive website into a blazing-fast, mobile-friendly experience."
      },
      {
        question: "How long does it take to build a business website?",
        answer: "A standard 4-5 page business website usually takes 1-2 weeks. Complex custom web applications may take 3-6 weeks depending on the features."
      },
      {
        question: "Do you provide website maintenance in Gwalior?",
        answer: "Yes, we offer ongoing website maintenance starting from ₹899/month to keep your website fast, updated, and secure post-launch."
      },
      {
        question: "How can I start a website project with NIVORA?",
        answer: "You can easily start by clicking the 'WhatsApp Us' button on our page or filling out our contact form. We will discuss your business requirements and provide a customized solution."
      }
    ]
  },
  "new-delhi": {
    slug: "new-delhi",
    name: "New Delhi",
    state: "Delhi",
    title: "Website Development Company in Delhi NCR | NIVORA Tech",
    description: "Build a responsive, fast, and business-focused website with NIVORA Tech in Delhi NCR. Professional web development, redesign, and scaling services.",
    primaryKeyword: "website development company in Delhi NCR",
    secondaryKeywords: [
      "web development company in Delhi NCR",
      "website design agency in Delhi",
      "custom web applications Delhi",
      "premium website development in Delhi NCR",
    ],
    introParagraphs: [
      "In the highly competitive market of Delhi NCR, a standard template website isn't enough to stand out. Your business needs a robust, conversion-optimized, and lightning-fast digital platform that scales with your ambition.",
      "At NIVORA Tech, we partner with startups, growing brands, and established enterprises across Delhi NCR. From highly customized web applications to stunning corporate websites, we deliver premium digital solutions that drive real business growth and outshine the competition."
    ],
    businessTypes: [
      {
        title: "Startups & Tech Firms",
        icon: "layout",
        description: "Scalable web applications and modern SaaS landing pages built with React and Next.js."
      },
      {
        title: "E-Commerce & Retail Brands",
        icon: "sparkles",
        description: "High-performance online stores optimized for fast checkouts and high conversion rates."
      },
      {
        title: "Corporate & B2B Agencies",
        icon: "code",
        description: "Professional, authoritative websites that generate high-quality B2B leads."
      },
      {
        title: "Healthcare & Clinics",
        icon: "check",
        description: "Secure, fast, and accessible platforms for patient bookings and medical services."
      }
    ],
    faqs: [
      {
        question: "Do you build custom web applications?",
        answer: "Yes, we specialize in building complex, custom web applications using modern stacks like React, Next.js, Node.js, and specialized databases."
      },
      {
        question: "How long does a premium website project take?",
        answer: "A standard corporate website typically takes 2-4 weeks. Complex custom applications and e-commerce platforms can take 6-12 weeks depending on the required features and scale."
      },
      {
        question: "Do you offer SEO and performance optimization?",
        answer: "Absolutely. All our websites are built with technical SEO and core web vitals in mind. We ensure blazing fast load times and proper semantic structure to help you rank higher on Google."
      },
      {
        question: "Can we meet to discuss the project?",
        answer: "Yes, we work with clients across Delhi NCR and can schedule a comprehensive online consultation or a physical meeting to understand your business objectives in detail."
      }
    ]
  },
  agra: {
    slug: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    title: "Website Development Company in Agra | NIVORA Tech",
    description: "Build a responsive, fast, and business-focused website with NIVORA Tech in Agra. Professional website development, redesign, and local SEO services.",
    primaryKeyword: "website development company in Agra",
    secondaryKeywords: [
      "web development company in Agra",
      "website design company in Agra",
      "website designer in Agra",
      "ecommerce website development in Agra",
    ],
    introParagraphs: [
      "In the historic and bustling city of Agra, businesses need a modern digital presence to attract both local customers and tourists. A fast, beautifully designed website ensures your brand stands out in a crowded market.",
      "At NIVORA Tech, we specialize in building high-quality, conversion-focused websites tailored specifically for the Agra market. Whether you run a hospitality business, a manufacturing unit, or a retail store, we deliver digital solutions that drive real growth."
    ],

    businessTypes: [
      {
        title: "Tourism & Hospitality",
        icon: "layout",
        description: "Stunning websites for hotels, tour guides, and travel agencies with booking integrations."
      },
      {
        title: "Local Retail & Exports",
        icon: "sparkles",
        description: "Showcase your products, handicrafts, or leather goods to national and international buyers."
      },
      {
        title: "Restaurants & Cafes",
        icon: "instagram",
        description: "Display your menu, ambiance, and allow easy table reservations or WhatsApp ordering."
      },
      {
        title: "Professional Services",
        icon: "code",
        description: "Clean, authoritative websites for clinics, consultants, and educational institutions."
      }
    ],
    faqs: [
      {
        question: "Do you build e-commerce websites?",
        answer: "Yes, we build robust e-commerce platforms using modern technologies to help you sell your products online efficiently."
      },
      {
        question: "How long does it take to build a business website?",
        answer: "A standard 4-5 page business website usually takes 1-2 weeks. Complex custom web applications may take 3-6 weeks depending on the features."
      },
      {
        question: "Do you provide website maintenance in Agra?",
        answer: "Yes, we offer ongoing website maintenance starting from ₹899/month to keep your website fast, updated, and secure post-launch."
      },
      {
        question: "How can I start a website project with NIVORA?",
        answer: "You can easily start by clicking the 'WhatsApp Us' button on our page or filling out our contact form. We will discuss your business requirements and provide a customized solution."
      }
    ]
  },
  mathura: {
    slug: "mathura",
    name: "Mathura",
    state: "Uttar Pradesh",
    title: "Website Development Company in Mathura | NIVORA Tech",
    description: "Get a custom, mobile-friendly website for your business in Mathura. NIVORA Tech offers web design, development, and maintenance services at affordable prices.",
    primaryKeyword: "website development company in Mathura",
    secondaryKeywords: [
      "web design company in Mathura",
      "best website developer in Mathura",
      "ecommerce website development Mathura",
      "local SEO services Mathura",
    ],
    introParagraphs: [
      "For businesses in Mathura, a strong digital presence is crucial to reaching a wider audience. Whether you cater to locals or the heavy influx of pilgrims and tourists, a responsive website acts as your primary digital storefront.",
      "NIVORA Tech partners with Mathura businesses to deliver modern, fast, and easy-to-use websites. We focus on clear communication, engaging design, and seamless WhatsApp integrations so you can connect with your customers instantly."
    ],

    businessTypes: [
      {
        title: "Hospitality & Travel",
        icon: "layout",
        description: "Attractive websites for hotels, ashrams, and travel services catering to visitors."
      },
      {
        title: "Retail & Sweets Shops",
        icon: "sparkles",
        description: "Showcase your famous local products and take online orders or inquiries effortlessly."
      },
      {
        title: "Educational Institutes",
        icon: "code",
        description: "Highlight your courses, faculty, and student success stories to attract more enrollments."
      },
      {
        title: "Healthcare Clinics",
        icon: "check",
        description: "Professional digital presence for doctors and clinics with appointment scheduling."
      }
    ],
    faqs: [
      {
        question: "Are your websites mobile-friendly?",
        answer: "Absolutely. All our websites are built with a mobile-first approach, ensuring they look and perform perfectly on all devices."
      },
      {
        question: "What is the cost of a basic website in Mathura?",
        answer: "Our landing page packages start at ₹2,999+, and full multi-page business websites start at ₹3,999+. We also offer website redesigns from ₹2,999 and maintenance from ₹899/month."
      },
      {
        question: "Do you offer SEO services?",
        answer: "Yes, all our websites come with basic on-page SEO. We also ensure your site is fast and structured correctly to help you rank higher on Google."
      },
      {
        question: "Can we integrate WhatsApp on our website?",
        answer: "Yes, we integrate one-click WhatsApp chat buttons so your customers can reach you instantly."
      }
    ]
  },
  faridabad: {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    title: "Website Development Company in Faridabad | NIVORA Tech",
    description: "Premium website development and web applications for businesses in Faridabad. NIVORA Tech delivers scalable, high-performance digital solutions.",
    primaryKeyword: "website development company in Faridabad",
    secondaryKeywords: [
      "web development agency Faridabad",
      "custom software development Faridabad",
      "corporate website design Faridabad",
      "B2B web design Faridabad",
    ],
    introParagraphs: [
      "As a major industrial and corporate hub, Faridabad requires digital solutions that reflect professionalism, reliability, and scale. A basic website won't cut it in this highly competitive environment.",
      "NIVORA Tech provides premium web development services to manufacturers, corporate agencies, and startups in Faridabad. We build highly customized, performance-driven web platforms designed to generate B2B leads and elevate your brand's authority."
    ],
    businessTypes: [
      {
        title: "Manufacturing & Industrial",
        icon: "layout",
        description: "Authoritative corporate websites to showcase infrastructure, products, and global reach."
      },
      {
        title: "Corporate Agencies",
        icon: "code",
        description: "Professional platforms designed to generate high-quality B2B leads and inquiries."
      },
      {
        title: "Startups & Tech",
        icon: "sparkles",
        description: "Scalable web applications and modern SaaS landing pages built with React and Next.js."
      },
      {
        title: "Real Estate & Infrastructure",
        icon: "check",
        description: "High-performance property showcases and project portfolios with lead capture."
      }
    ],
    faqs: [
      {
        question: "Do you build custom web applications?",
        answer: "Yes, we specialize in building complex, custom web applications using modern stacks like React, Next.js, Node.js, and specialized databases."
      },
      {
        question: "How long does a premium website project take?",
        answer: "A standard corporate website typically takes 2-4 weeks. Complex custom applications can take 6-12 weeks depending on the required features and scale."
      },
      {
        question: "Do you offer post-launch maintenance?",
        answer: "Yes, we provide dedicated maintenance plans to ensure your platform remains secure, updated, and lightning-fast."
      },
      {
        question: "Can we meet to discuss the project?",
        answer: "Yes, we work closely with clients across Delhi NCR, including Faridabad, and can schedule consultations to understand your business objectives in detail."
      }
    ]
  },
  noida: {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    title: "Website Development Company in Noida | NIVORA Tech",
    description: "Premium website development and custom web applications in Noida. Partner with NIVORA Tech for scalable, modern, and high-converting digital platforms.",
    primaryKeyword: "website development company in Noida",
    secondaryKeywords: [
      "web development agency in Noida",
      "React Next.js developers Noida",
      "startup web development Noida",
      "premium website design Noida",
    ],
    introParagraphs: [
      "Noida is a thriving hub of IT, startups, and modern enterprises. To compete here, your business needs a digital presence that screams innovation, speed, and premium quality.",
      "NIVORA Tech partners with forward-thinking businesses in Noida to deliver cutting-edge web applications and corporate websites. We use modern tech stacks like React and Next.js to ensure your platform isn't just a website, but a powerful growth engine."
    ],
    businessTypes: [
      {
        title: "IT & Startups",
        icon: "code",
        description: "Dynamic SaaS landing pages and complex scalable web applications."
      },
      {
        title: "Corporate & B2B",
        icon: "layout",
        description: "Professional, authoritative websites that generate high-quality enterprise leads."
      },
      {
        title: "E-Commerce Brands",
        icon: "sparkles",
        description: "High-performance online stores optimized for fast checkouts and high conversion rates."
      },
      {
        title: "Real Estate",
        icon: "check",
        description: "Premium property showcases and interactive project portfolios."
      }
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer: "We specialize in modern web technologies including React, Next.js, TypeScript, and Tailwind CSS to build fast, secure, and scalable platforms."
      },
      {
        question: "Do you offer SEO and performance optimization?",
        answer: "Absolutely. All our websites are built with technical SEO and core web vitals in mind. We ensure blazing fast load times and proper semantic structure."
      },
      {
        question: "How do you handle project communication?",
        answer: "We maintain transparent communication through regular updates, modern project management tools, and scheduled milestone reviews."
      },
      {
        question: "Can you redesign our existing corporate website?",
        answer: "Yes, we can overhaul your legacy website, transforming it into a modern, responsive, and conversion-optimized experience."
      }
    ]
  },
  gurugram: {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    title: "Website Development Company in Gurugram | NIVORA Tech",
    description: "NIVORA Tech delivers world-class website development, custom web apps, and enterprise digital solutions for businesses and startups in Gurugram.",
    primaryKeyword: "website development company in Gurugram",
    secondaryKeywords: [
      "web development agency in Gurgaon",
      "custom software development Gurgaon",
      "enterprise web design Gurugram",
      "startup web development Gurugram",
    ],
    introParagraphs: [
      "Gurugram's dynamic corporate and startup ecosystem demands digital excellence. A basic online presence is not enough; you need a platform that reflects enterprise-grade quality, security, and performance.",
      "At NIVORA Tech, we build premium digital experiences for Gurugram's most ambitious companies. From sleek corporate websites to complex, data-driven web applications, we combine stunning UI/UX design with robust engineering to help you lead your industry."
    ],
    businessTypes: [
      {
        title: "Enterprise & Corporate",
        icon: "layout",
        description: "High-end corporate websites designed for authority, trust, and B2B lead generation."
      },
      {
        title: "Startups & SaaS",
        icon: "code",
        description: "Scalable web applications, MVPs, and modern marketing sites built with React/Next.js."
      },
      {
        title: "Real Estate Developers",
        icon: "sparkles",
        description: "Immersive property showcases, interactive maps, and lead capture systems."
      },
      {
        title: "Consulting & Finance",
        icon: "check",
        description: "Secure, professional, and accessible platforms for high-value services."
      }
    ],
    faqs: [
      {
        question: "Do you build custom web applications?",
        answer: "Yes, we specialize in building complex, custom web applications using modern stacks like React, Next.js, Node.js, and specialized databases."
      },
      {
        question: "Are your websites optimized for speed?",
        answer: "Performance is our priority. We use modern rendering techniques (SSR/SSG), optimized assets, and clean code to ensure your site scores high on Core Web Vitals."
      },
      {
        question: "How do you ensure the security of the websites?",
        answer: "We follow industry best practices for security, including secure authentication, HTTPS enforcement, protection against common vulnerabilities (XSS, CSRF), and regular updates."
      },
      {
        question: "Can we schedule a meeting in Gurugram?",
        answer: "Yes, we work closely with clients in Gurugram and across the NCR region. We can arrange virtual or physical meetings to discuss your enterprise requirements."
      }
    ]
  },
  indore: {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    title: "Website Development Company in Indore | NIVORA Tech",
    description: "Looking for the best website development company in Indore? NIVORA Tech delivers responsive business websites, ecommerce, and web apps.",
    primaryKeyword: "website development company in Indore",
    secondaryKeywords: [
      "website design company in Indore",
      "web developer in Indore",
      "business website development in Indore",
      "ecommerce website development in Indore",
    ],
    introParagraphs: [
      "Indore is the commercial capital of Central India, and an increasing number of startups and local businesses are establishing a strong online presence. To compete in this fast-growing market, you need a high-performance website that acts as a lead generation engine.",
      "NIVORA Tech provides top-tier website development services in Indore. From custom web applications for startups to professional websites for service providers, we ensure your digital storefront is fast, scalable, and optimized for success."
    ],
    businessTypes: [
      {
        title: "Startups & Agencies",
        icon: "code",
        description: "Custom web applications and landing pages tailored for the growing startup ecosystem."
      },
      {
        title: "Retail & E-Commerce",
        icon: "sparkles",
        description: "Feature-rich online stores to help you sell across India with ease."
      },
      {
        title: "Restaurants & FMCG",
        icon: "instagram",
        description: "Engaging digital presence for Indore's thriving food and FMCG businesses."
      },
      {
        title: "Healthcare & Clinics",
        icon: "check",
        description: "Professional digital presence for doctors and hospitals with appointment scheduling."
      }
    ],
    faqs: [
      {
        question: "Do you build e-commerce websites in Indore?",
        answer: "Yes, we build robust e-commerce platforms using modern technologies to help you sell your products online efficiently."
      },
      {
        question: "How long does it take to build a business website?",
        answer: "A standard 4-5 page business website usually takes 1-2 weeks. Complex custom web applications may take 3-6 weeks depending on the features."
      },
      {
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer ongoing website maintenance to keep your website fast, updated, and secure post-launch."
      },
      {
        question: "How can I start a website project with NIVORA?",
        answer: "You can easily start by clicking the 'WhatsApp Us' button on our page or filling out our contact form. We will discuss your business requirements and provide a customized solution."
      }
    ]
  },
  bhopal: {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    title: "Website Development Company in Bhopal | NIVORA Tech",
    description: "Get a professional, mobile-friendly website in Bhopal. NIVORA Tech offers custom web development, redesign, and local SEO services for businesses.",
    primaryKeyword: "website development company in Bhopal",
    secondaryKeywords: [
      "website design company in Bhopal",
      "web developer in Bhopal",
      "small business website development in Bhopal",
      "website redesign in Bhopal",
    ],
    introParagraphs: [
      "As Bhopal rapidly evolves into a digital-first city, local businesses need more than just a social media page. A professional website establishes credibility, builds trust, and allows you to reach customers effectively.",
      "At NIVORA Tech, we partner with businesses in Bhopal to deliver modern, fast, and easy-to-use websites. We focus on clear communication, engaging design, and seamless integrations so you can connect with your customers instantly."
    ],

    businessTypes: [
      {
        title: "Educational Institutes",
        icon: "layout",
        description: "Professional websites for schools, colleges, and coaching centers to attract students."
      },
      {
        title: "Local Services",
        icon: "code",
        description: "Lead generation websites for contractors, salons, and service providers."
      },
      {
        title: "Real Estate & Builders",
        icon: "sparkles",
        description: "Property portfolios and lead capture pages for the growing real estate market."
      },
      {
        title: "Restaurants & Cafes",
        icon: "instagram",
        description: "Display your menu, ambiance, and allow easy table reservations or WhatsApp ordering."
      }
    ],
    faqs: [
      {
        question: "Are your websites mobile-friendly?",
        answer: "Absolutely. All our websites are built with a mobile-first approach, ensuring they look and perform perfectly on all devices."
      },
      {
        question: "What is the cost of a basic website in Bhopal?",
        answer: "Our landing page packages start at ₹2,999+, and full multi-page business websites start at ₹3,999+. We also offer website redesigns from ₹2,999 and maintenance from ₹899/month."
      },
      {
        question: "Do you offer SEO services?",
        answer: "Yes, all our websites come with basic on-page SEO. We also ensure your site is fast and structured correctly to help you rank higher on Google."
      },
      {
        question: "Can we integrate WhatsApp on our website?",
        answer: "Yes, we integrate one-click WhatsApp chat buttons so your customers can reach you instantly."
      }
    ]
  }
};
