import type { IconName } from '@/components/ui/Icon';

export interface IndustryInfo {
  slug: string;
  name: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: { title: string; desc: string }[];
  deliverables: { title: string; desc: string; icon: IconName }[];
  techStack: string[];
  schemaType: string;
  faqs: { q: string; a: string }[];
}

export interface CityInfo {
  slug: string;
  name: string;
  state: string;
  region: string;
  landmarks: string[];
  zipCodes: string[];
  geo: { lat: number; lng: number };
}

export const cities: Record<string, CityInfo> = {
  delhi: {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    region: 'North & South Delhi, Connaught Place, Rohini, Dwarka',
    landmarks: ['South Extension', 'Connaught Place', 'Dwarka', 'Rohini', 'Saket'],
    zipCodes: ['110001', '110017', '110049', '110075', '110085'],
    geo: { lat: 28.6139, lng: 77.2090 },
  },
  gurgaon: {
    slug: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana (Delhi NCR)',
    region: 'Cyber City, Golf Course Road, Sohna Road, DLF Phases',
    landmarks: ['DLF Cyber City', 'Golf Course Extension', 'Udyog Vihar', 'Sohna Road', 'Sector 29'],
    zipCodes: ['122001', '122002', '122003', '122018'],
    geo: { lat: 28.4595, lng: 77.0266 },
  },
  noida: {
    slug: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh (Delhi NCR)',
    region: 'Sector 62, Sector 18, Expressway, Greater Noida',
    landmarks: ['Sector 62 Tech Hub', 'Sector 18 Market', 'Noida-Greater Noida Expressway', 'Sector 137'],
    zipCodes: ['201301', '201307', '201309'],
    geo: { lat: 28.5355, lng: 77.3910 },
  },
};

export const industries: Record<string, IndustryInfo> = {
  healthcare: {
    slug: 'healthcare',
    name: 'Clinic & Healthcare',
    badge: 'Medical & Healthcare Web Engineering',
    heroHeadline: 'Healthcare & Clinic Website Development in',
    heroSubheadline:
      'High-speed, WCAG-accessible patient portals and clinic websites built for doctors, hospitals, and diagnostic labs to maximize local OPD bookings and patient trust.',
    painPoints: [
      {
        title: 'Frustrated Mobile Patients',
        desc: 'Patients searching for immediate clinic consultations bounce if the site takes more than 2 seconds to load on mobile 4G networks.',
      },
      {
        title: 'Missed WhatsApp Consultations',
        desc: 'Traditional clinic templates bury contact numbers. Nexnify builds direct 1-tap WhatsApp doctor consultation workflows.',
      },
      {
        title: 'Accessibility & Contrast Deficits',
        desc: 'Elderly patients and visually impaired visitors struggle on low-contrast clinic websites. We build native WCAG 2.2 AA compliant portals.',
      },
    ],
    deliverables: [
      {
        title: 'Instant Patient Appointment Booking',
        desc: 'Custom appointment booking forms integrated with WhatsApp, Google Calendar, and clinic management software.',
        icon: 'calendar',
      },
      {
        title: 'Doctor Profiles & OPD Schedule Grid',
        desc: 'Clear, structured doctor credentials, specialties, timings, and patient reviews formatted with MedicalBusiness schema.',
        icon: 'user',
      },
      {
        title: 'WCAG 2.2 AA Accessible UI',
        desc: 'High contrast text, large readable typography, and screen-reader accessibility for patients with vision impairments.',
        icon: 'shield',
      },
      {
        title: 'Local Google Maps & Medical Schema',
        desc: 'MedicalClinic and Physician schema markup to help your clinic rank #1 in Google Maps local 3-pack searches.',
        icon: 'mapPin',
      },
    ],
    techStack: ['Next.js 16 App Router', 'Tailwind CSS', 'Razorpay OPD Advance', 'WhatsApp Business API', 'Axe WCAG Tested'],
    schemaType: 'MedicalBusiness',
    faqs: [
      {
        q: 'Can patients book appointments directly via WhatsApp?',
        a: 'Yes! We configure direct WhatsApp routing that pre-fills patient name, chosen doctor, and requested appointment slot.',
      },
      {
        q: 'How do you ensure medical websites are accessible to elderly patients?',
        a: 'We build to WCAG 2.2 Level AA: minimum 4.5:1 color contrast, scalable typography up to 400%, keyboard navigation, and high-visibility phone/emergency buttons.',
      },
      {
        q: 'Will our clinic rank in local Google Maps searches?',
        a: 'We implement complete LocalBusiness and MedicalClinic Schema markup, geo-coordinates, operating hours, and localized landing pages optimized for nearby patient queries.',
      },
    ],
  },

  'real-estate': {
    slug: 'real-estate',
    name: 'Real Estate & Builders',
    badge: 'Real Estate Digital Solutions',
    heroHeadline: 'Real Estate & Builder Website Development in',
    heroSubheadline:
      'High-converting property launch microsites and luxury developer portals built for instant brochure downloads, 3D floor plan showcases, and verified site visit leads.',
    painPoints: [
      {
        title: 'High Ad Spend, Low Site Visit Bookings',
        desc: 'Expensive Google and Meta property ads fail when landing pages load sluggishly or lack prominent WhatsApp lead forms.',
      },
      {
        title: 'Unoptimized Heavy Floor Plans & Media',
        desc: 'Uncompressed high-res master plans freeze mobile browsers. We implement next-gen WebP/AVIF progressive image loading.',
      },
      {
        title: 'Missing RERA Disclaimers & Trust Indicators',
        desc: 'Buyers leave sites that feel unverified. We integrate transparent RERA numbers, builder track records, and construction status trackers.',
      },
    ],
    deliverables: [
      {
        title: 'High-Velocity Project Launch Microsites',
        desc: 'Sub-2s mobile loading landing pages engineered specifically for high ROI on paid Google and Meta real estate ads.',
        icon: 'zap',
      },
      {
        title: 'Interactive Floor Plans & Location Map',
        desc: 'Interactive master plans, amenities sliders, and driving distance calculators to key metro stations and highways.',
        icon: 'map',
      },
      {
        title: 'Automated Brochure & Price Sheet Intake',
        desc: 'Instant lead-gate delivering downloadable project brochures directly to buyer WhatsApp numbers with CRM webhooks.',
        icon: 'download',
      },
      {
        title: 'RealEstateAgent & LocalBusiness Schema',
        desc: 'Rich snippets showcasing project price range, developer credentials, and RERA registration directly on Google search results.',
        icon: 'shield',
      },
    ],
    techStack: ['Next.js 16 SSG', 'Cloudinary / Next Image', 'WhatsApp Cloud API', 'HubSpot / LeadSquared Webhooks', 'Leaflet / Google Maps'],
    schemaType: 'RealEstateAgent',
    faqs: [
      {
        q: 'How fast can a real estate launch page be built before campaign kickoff?',
        a: 'We can deliver a fully optimized, RERA-compliant project launch landing page with brochure capture within 5 to 7 business days.',
      },
      {
        q: 'Can leads be automatically piped into our CRM like LeadSquared or Salesforce?',
        a: 'Yes, every inquiry instantly triggers webhooks to your CRM while sending instant SMS and WhatsApp notifications to your sales desk.',
      },
      {
        q: 'How do you optimize 4K property walkthroughs without slowing down mobile speed?',
        a: 'We use progressive WebP/AVIF compression, responsive source sets, and lazy-loaded YouTube/Vimeo facades that load zero megabytes until clicked.',
      },
    ],
  },

  d2c: {
    slug: 'd2c',
    name: 'D2C Brands & Retail',
    badge: 'D2C & Retail E-Commerce Engineering',
    heroHeadline: 'D2C Brand & E-Commerce Website Development in',
    heroSubheadline:
      'Custom headless storefronts and fast WooCommerce/Shopify alternatives engineered for 1-click UPI checkout, zero monthly revenue fees, and sub-second catalog speeds.',
    painPoints: [
      {
        title: 'Bloated Shopify Apps Slashing Conversions',
        desc: 'Every app added to standard Shopify storefronts slows down mobile TTFB, driving checkout abandonment over 70%.',
      },
      {
        title: 'High Monthly SaaS Subscriptions & Fees',
        desc: 'Platforms take a cut of your gross merchandise value (GMV). Nexnify builds custom storefronts where you own 100% of your code.',
      },
      {
        title: 'Clunky Indian Checkout Experience',
        desc: 'Foreign checkout forms cause friction. We engineer native Razorpay, Cashfree, and PhonePe 1-click UPI flows.',
      },
    ],
    deliverables: [
      {
        title: 'Sub-Second Headless Catalog Browsing',
        desc: 'Instant product search, instant category filtering, and instant slide-out carts that feel like native mobile apps.',
        icon: 'shoppingBag',
      },
      {
        title: 'Native 1-Click UPI & COD Integration',
        desc: 'Seamless Razorpay, Cashfree, and Cash-on-Delivery with automated OTP phone verification to slash RTO (Return to Origin).',
        icon: 'creditCard',
      },
      {
        title: 'Automated Abandoned Cart WhatsApp Alerts',
        desc: 'Recover up to 25% of dropped shoppers with personalized WhatsApp recovery links sent within 30 minutes.',
        icon: 'message',
      },
      {
        title: 'Product & Merchant Schema for Google Shopping',
        desc: 'Rich search results displaying live stock availability, star ratings, and pricing directly on Google organic search.',
        icon: 'trending',
      },
    ],
    techStack: ['Next.js App Router', 'Razorpay / Cashfree SDK', 'PostgreSQL / Supabase', 'WhatsApp Business API', 'Product Schema'],
    schemaType: 'Store',
    faqs: [
      {
        q: 'Why choose a custom Next.js storefront over standard Shopify?',
        a: 'Custom Next.js stores achieve 95+ PageSpeed on mobile, zero per-transaction SaaS commissions, complete design flexibility, and native 1-click Indian UPI payments.',
      },
      {
        q: 'How do you handle Cash on Delivery (COD) to prevent fake orders?',
        a: 'We implement OTP verification via SMS/WhatsApp before confirming COD orders, significantly reducing courier RTO rates.',
      },
      {
        q: 'Can our store integrate with Shiprocket and Delhivery?',
        a: 'Yes, we integrate automated shipping APIs for live tracking, AWB generation, and automated customer dispatch notifications.',
      },
    ],
  },
};
