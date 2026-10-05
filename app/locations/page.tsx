import React from 'react';
import { Metadata } from 'next';
import { locations } from '@/data/locations';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Website Development Services Across India | NIVORA Tech',
  description: 'NIVORA Tech provides professional website development, web design, and digital solutions to businesses across India — including Delhi NCR, Gwalior, Agra, Noida, Gurugram, Indore, Bhopal and more.',
  alternates: {
    canonical: 'https://nivora-tech.vercel.app/locations',
  },
  openGraph: {
    title: 'Website Development Services Across India | NIVORA Tech',
    description: 'Find NIVORA Tech website development services available in your city across India.',
    url: 'https://nivora-tech.vercel.app/locations',
    siteName: 'NIVORA Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services Across India | NIVORA Tech',
    description: 'Find NIVORA Tech website development services available in your city across India.',
  },
};

export default function LocationsHubPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-surface)] py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6">
            Locations We Serve
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            We deliver high-performance website development, custom web applications, and digital growth strategies to ambitious businesses across these cities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Object.values(locations).map((loc) => (
            <Link 
              key={loc.slug} 
              href={`/locations/${loc.slug}`}
              className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 rounded-2xl transition-all hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Icon name="mapPin" size={24} />
                </div>
                <Icon name="arrowUpRight" size={20} className="text-[var(--text-muted)] group-hover:text-indigo-400 transition-colors" />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-indigo-400 transition-colors">
                {loc.name}, {loc.state}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                {loc.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
