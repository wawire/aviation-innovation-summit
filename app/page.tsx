import EnhancedHero from '@/components/enhanced-hero';
import EnhancedStats from '@/components/enhanced-stats';
import Loading from '@/components/loading';
import { ScrollToTop } from '@/components/scroll-to-top';
import SponsorshipToggle from '@/components/sponsorship-toggle';

import { StickyRegisterButton } from '@/components/sticky-register-button';
import { ThemeToggleFloat } from '@/components/theme-toggle-float';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Suspense fallback={<Loading />}>
        <EnhancedHero />
        <EnhancedStats />
        <SponsorshipToggle />
        <ThemeToggleFloat />
        <ScrollToTop />
        <StickyRegisterButton />
      </Suspense>
    </main>
  );
}
