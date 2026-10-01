import type { Metadata } from "next";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service | Nivora Tech",
  description: "Comprehensive legal policies, terms of service, and privacy guidelines for Nivora Tech digital agency.",
  alternates: {
    canonical: 'https://nivora-tech.vercel.app/terms',
  },
};

export default function TermsPage() {
  const { site } = siteContent;

  const sections = [
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use-data", title: "2. How We Use Data" },
    { id: "third-party-hosting", title: "3. Third-Party Hosting & Domain Disclaimer" },
    { id: "client-deliverables", title: "4. Client Deliverables & Code Ownership" },
    { id: "cookies-tracking", title: "5. Cookies & Tracking" },
    { id: "contact-grievance", title: "6. Contact & Grievance" },
  ];

  return (
    <>
      <PageBanner
        badge="LEGAL & POLICIES"
        title="Privacy Policy & Terms of Service"
        description="Comprehensive policies, codes of confidentiality, and principles guiding client engagements with Nivora Tech."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Privacy" },
        ]}
      />

      <section className="bg-slate-950 py-16 sm:py-24 relative">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 hidden md:block">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6">Contents</h3>
                <nav className="flex flex-col space-y-4">
                  {sections.map((section) => (
                    <a 
                      key={section.id} 
                      href={`#${section.id}`}
                      className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 space-y-12">
              <div className="prose prose-invert prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-10">
                  Welcome to Nivora Tech. These Terms of Service and Privacy Policy outline the rules, guidelines, and legal protections governing the use of our services. By engaging with Nivora Tech, you agree to these terms.
                </p>

                {/* Section 1 */}
                <div id="information-we-collect" className="scroll-mt-32">
                  <h2 className="text-2xl text-white mb-4 pb-2 border-b border-slate-800">1. Information We Collect</h2>
                  <p className="text-slate-300">We collect information to provide better services to our clients. This includes:</p>
                  <ul className="text-slate-300 list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Contact form submissions:</strong> Name, Phone number, Email address, and Project specifications submitted voluntarily by you.</li>
                    <li><strong>Standard analytics data:</strong> Anonymous Page views, referrer URLs, browser type, and device information to optimize our website performance.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div id="how-we-use-data" className="scroll-mt-32 mt-12">
                  <h2 className="text-2xl text-white mb-4 pb-2 border-b border-slate-800">2. How We Use Data</h2>
                  <p className="text-slate-300">Your privacy is critically important to us. The data we collect is used solely for:</p>
                  <ul className="text-slate-300 list-disc pl-6 space-y-2 mt-4">
                    <li>Project scoping, cost estimation, and drafting proposals.</li>
                    <li>Direct client communication and service fulfillment.</li>
                  </ul>
                  <p className="text-emerald-400 font-medium mt-4 bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20">
                    We never sell, rent, or share your personal user data with any third-party marketing or advertising agencies under any circumstances.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="third-party-hosting" className="scroll-mt-32 mt-12">
                  <h2 className="text-2xl text-white mb-4 pb-2 border-b border-slate-800">3. Third-Party Hosting & Domain Disclaimer</h2>
                  <p className="text-slate-300">
                    Nivora Tech operates purely as a software design, web development, and digital consulting service provider. 
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl mt-6">
                    <h3 className="text-amber-500 text-lg font-bold mb-3 mt-0">Liability Protection Clause</h3>
                    <p className="text-amber-200/90 text-sm m-0">
                      Third-party infrastructure, including but not limited to domain name registration, DNS management, and hosting servers (e.g., AWS, Vercel, Hostinger, GoDaddy), remain the strict legal property and financial liability of the client. <strong>Nivora Tech is not liable</strong> for third-party hosting downtimes, expired domain renewals, server data loss, or registrar outages. It is the client's sole responsibility to maintain timely renewals and payments for their respective hosting infrastructures.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="client-deliverables" className="scroll-mt-32 mt-12">
                  <h2 className="text-2xl text-white mb-4 pb-2 border-b border-slate-800">4. Client Deliverables, Revisions & Code Ownership</h2>
                  <h3 className="text-xl text-slate-200 mt-6 mb-3">Intellectual Property Handover</h3>
                  <p className="text-slate-300">
                    Upon the final settlement of all project invoices and completion of the agreed scope, full intellectual property rights and source code ownership are transferred to the client. Nivora Tech retains the right to showcase the completed project in our portfolio unless a Non-Disclosure Agreement (NDA) states otherwise.
                  </p>
                  <h3 className="text-xl text-slate-200 mt-6 mb-3">Scope Creep Protection</h3>
                  <p className="text-slate-300">
                    All initial deliverables are strictly defined in the project agreement. Any additional feature requests, layout changes, or revisions outside the initial agreed scope will be classified as billable out-of-scope revisions and charged at our standard hourly or fixed-quote rates.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="cookies-tracking" className="scroll-mt-32 mt-12">
                  <h2 className="text-2xl text-white mb-4 pb-2 border-b border-slate-800">5. Cookies & Tracking</h2>
                  <p className="text-slate-300">
                    Our website utilizes essential cookies to ensure basic functionality and security. We also employ basic, anonymized analytics scripts to understand how visitors interact with our site. You can instruct your browser to refuse all cookies; however, some portions of our website may not function properly without them.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="contact-grievance" className="scroll-mt-32 mt-12">
                  <h2 className="text-2xl text-white mb-4 pb-2 border-b border-slate-800">6. Contact & Grievance</h2>
                  <p className="text-slate-300 mb-6">
                    If you have any questions, concerns, or grievances regarding these terms or your privacy, please contact us through our official channels:
                  </p>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-slate-300">
                        <span className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </span>
                        <span><strong>Official Contact:</strong> <a href="mailto:vnivora1403@gmail.com" className="text-indigo-400 no-underline hover:underline">vnivora1403@gmail.com</a></span>
                      </li>
                      <li className="flex items-center gap-4 text-slate-300">
                        <span className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span>
                        <span><strong>Phone:</strong> <a href="tel:+919575450177" className="text-indigo-400 no-underline hover:underline">+91 9575450177</a></span>
                      </li>
                      <li className="flex items-center gap-4 text-slate-300">
                        <span className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </span>
                        <span><strong>Business Brand:</strong> Nivora Tech</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
