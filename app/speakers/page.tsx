import Loading from '@/components/loading';
import { ScrollToTop } from '@/components/scroll-to-top';
import Speakers from '@/components/speakers';
import { ThemeToggleFloat } from '@/components/theme-toggle-float';
import { Suspense } from 'react';

export default function SpeakersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <Speakers />
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  );
}
