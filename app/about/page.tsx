import AboutRedesigned from '@/components/about-redesigned';
import Loading from '@/components/loading';
import { ScrollToTop } from '@/components/scroll-to-top';
import TargetAudience from '@/components/target-audience';
import { ThemeToggleFloat } from '@/components/theme-toggle-float';
import { Suspense } from 'react';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <AboutRedesigned />
        <TargetAudience />
        {/* <WhyMombasa /> */}
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  );
}
