import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Cost of Building a Business Website in India (2026 Practical Guide)',
  description: 'A complete breakdown of website design cost in India for 2026. Learn freelance web developer pricing and business website price breakup for your startup.',
  alternates: {
    canonical: 'https://nivora-tech.vercel.app/blog/cost-of-building-a-website-in-india-2026',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cost of Building a Business Website in India (2026 Practical Guide)",
  "description": "A complete breakdown of website design cost in India for 2026. Learn freelance web developer pricing and business website price breakup for your startup.",
  "author": {
    "@type": "Organization",
    "name": "Nivora Tech"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nivora Tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nivora-tech.vercel.app/icon.png"
    }
  },
  "datePublished": "2026-10-01",
  "dateModified": "2026-10-01"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard 4-5 page business website usually takes 1-2 weeks. Complex custom web applications or e-commerce sites can take 3-6 weeks depending on features."
      }
    },
    {
      "@type": "Question",
      "name": "Do I get source code ownership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, once the final payment is cleared, you receive 100% ownership of the source code and design assets. We believe in transparency without vendor lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Are there hidden maintenance fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hidden fees. Post-launch, you can choose to handle maintenance yourself, or opt for an affordable monthly retainer for updates, security, and hosting management."
      }
    }
  ]
};

export default function BlogCostGuide() {
  const whatsappMsg = "Hi Nivora Tech, I read your 2026 pricing guide and need a quote for my website.";
  const whatsappLink = `https://wa.me/919575450177?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-slate-950 pb-20 pt-32 lg:pt-40">
        <Container>
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Cost of Building a Business Website in India <span className="text-indigo-400">(2026 Guide)</span>
            </h1>
            <p className="text-lg text-slate-300 font-body leading-relaxed">
              If you&apos;re a small business owner or startup founder in India, figuring out the true <strong className="text-slate-100">website design cost in India 2026</strong> can be overwhelming. Let&apos;s break down realistic freelance web developer pricing and help you avoid getting overcharged.
            </p>
          </header>

          {/* Key Cost Factors */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">Why Pricing Varies So Wildly</h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <p className="text-slate-300 mb-6 leading-relaxed">
                You might see agencies charging ₹50,000 while freelancers offer sites for ₹3,000. The difference lies in three key factors:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-indigo-500/20 text-indigo-400 p-1.5 rounded-full shrink-0">
                    <Icon name="code" size={16} />
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Custom Code vs Templates</strong>
                    <p className="text-slate-400 text-sm">A drag-and-drop template site is cheap but slow and hard to scale. Custom Next.js or React development costs more upfront but delivers blazing-fast performance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-indigo-500/20 text-indigo-400 p-1.5 rounded-full shrink-0">
                    <Icon name="layout" size={16} />
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Design Complexity & Pages</strong>
                    <p className="text-slate-400 text-sm">A single landing page takes days; a 10-page corporate site with animations takes weeks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Pricing Breakup */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-10 text-center">Transparent Business Website Price Breakup</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Package 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2">High-Converting Landing Page</h3>
                <div className="text-indigo-400 font-display text-2xl font-bold mb-4">Starting from ₹2,999+</div>
                <p className="text-sm text-slate-400 mb-6 flex-grow">Perfect for single product launches, services, lead generation or ad campaigns.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Single-page custom layout</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Lead capture / enquiry form</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> WhatsApp CTA integration</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Mobile responsive</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Fast-loading structure</li>
                </ul>
              </div>

              {/* Package 2 */}
              <div className="bg-slate-800 border-2 border-indigo-500 rounded-2xl p-6 relative flex flex-col shadow-xl shadow-indigo-900/20 transform md:-translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Most Popular</div>
                <h3 className="text-lg font-bold text-white mb-2 mt-2">New Business Website</h3>
                <div className="text-indigo-400 font-display text-2xl font-bold mb-4">Starting from ₹3,999+</div>
                <p className="text-sm text-slate-300 mb-6 flex-grow">Complete business website tailored to your goals.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-200"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Custom UI Design</li>
                  <li className="flex items-center gap-2 text-sm text-slate-200"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Up to 5 standard pages</li>
                  <li className="flex items-center gap-2 text-sm text-slate-200"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Mobile Responsive</li>
                  <li className="flex items-center gap-2 text-sm text-slate-200"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Fast &amp; Lightweight Development</li>
                  <li className="flex items-center gap-2 text-sm text-slate-200"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Contact / Enquiry Form</li>
                  <li className="flex items-center gap-2 text-sm text-slate-200"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> WhatsApp Integration</li>
                </ul>
              </div>

              {/* Package 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2">Website Maintenance</h3>
                <div className="text-indigo-400 font-display text-2xl font-bold mb-4">Starting from ₹899/mo</div>
                <p className="text-sm text-slate-400 mb-6 flex-grow">Keep your website fast, updated, and secure.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Minor text/content updates</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Image replacement/update</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Small UI/design changes</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Basic website health monitoring</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Icon name="check" size={14} className="text-emerald-400 shrink-0" /> Minor bug fixes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Notice Box */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex gap-4 items-start">
              <div className="text-amber-500 mt-1 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div>
                <h4 className="font-bold text-amber-500 mb-2">Important Disclaimer</h4>
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  <strong>Domain Name (.com / .in) and Cloud/Server Hosting charges are not included in development fees.</strong> If the client does not already own them, actual registrar/hosting costs (e.g., GoDaddy, Hostinger, Vercel Pro) must be borne directly by the client. We do not markup these third-party costs.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">How long does development take?</h3>
                <p className="text-slate-400 text-sm">A standard 4-5 page business website usually takes 1-2 weeks. Complex custom web applications or e-commerce sites can take 3-6 weeks depending on features.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Do I get source code ownership?</h3>
                <p className="text-slate-400 text-sm">Yes, once the final payment is cleared, you receive 100% ownership of the source code and design assets. We believe in transparency without vendor lock-in.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Are there hidden maintenance fees?</h3>
                <p className="text-slate-400 text-sm">No hidden fees. Post-launch, you can choose to handle maintenance yourself, or opt for an affordable monthly retainer for updates, security, and hosting management.</p>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
                <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Skip the guesswork. Chat with us directly to get an exact quote tailored to your specific business requirements.</p>
                <Button href={whatsappLink} size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-xl shadow-[#25D366]/30 border-none">
                  <Icon name="whatsapp" size={20} className="mr-2" />
                  Get a Free Website Cost Estimate on WhatsApp
                </Button>
              </div>
            </div>
          </section>

        </Container>
      </main>
    </>
  );
}
