import AboutRedesigned from '@/components/about-redesigned';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Loading from '@/components/loading';
import { ScrollToTop } from '@/components/scroll-to-top';
import SponsorshipToggle from '@/components/sponsorship-toggle';

import TargetAudience from '@/components/target-audience';
import { ThemeToggleFloat } from '@/components/theme-toggle-float';
import WhyMombasa from '@/components/why-mombasa';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Suspense fallback={<Loading />}>
        <Hero />

        <AboutRedesigned />
        <TargetAudience />
        <SponsorshipToggle />
        {/* <Agenda /> */}
        <WhyMombasa />
        {/* <Testimonials /> */}
        {/* <Venue /> */}
        {/* <Gallery /> */}
        <Footer />
        <ThemeToggleFloat />
        <ScrollToTop />
        {/* <StickyRegisterButton /> */}
      </Suspense>
    </main>
  );
}
