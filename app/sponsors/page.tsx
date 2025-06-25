import { Suspense } from "react"
import SponsorshipToggle from "@/components/sponsorship-toggle"
import { ThemeToggleFloat } from "@/components/theme-toggle-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import Loading from "@/components/loading"

export default function SponsorsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <SponsorshipToggle />
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}
