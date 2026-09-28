export interface NavItem {
  label: string;
  href: string;
}

export interface TechnologyItem {
  name: string;
  category: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  overview: string;
  challenge: string;
  approach: string;
  whatWasBuilt: string[];
  liveUrl: string;
  image?: string;
  stats?: { label: string; value: string }[];
  clientType?: string;
  architecture?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
}

export interface WhyNivoraItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  description: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  descriptor: string;
  shortName: string;
  tagline: string;
  description: string;
  email: string;
  socials: {
    linkedin: string;
    email: string;
    whatsapp?: string;
  };
  copyright: string;
}

export interface SiteContent {
  site: SiteConfig;
  navigation: {
    links: NavItem[];
    cta: {
      label: string;
      href: string;
    };
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  technologies: {
    title: string;
    items: TechnologyItem[];
  };
  projects: Project[];
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  whyNivora: {
    eyebrow: string;
    title: string;
    description: string;
    items: WhyNivoraItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    principles: PrincipleItem[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    description: string;
    items: Faq[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    projectTypes: string[];
    budgetRanges: string[];
    queryTypes: string[];
    email: string;
  };
}

export type Theme = "light" | "dark";
