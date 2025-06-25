import { Suspense } from "react"
import Venue from "@/components/venue"
import Gallery from "@/components/gallery"
import { ThemeToggleFloat } from "@/components/theme-toggle-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import Loading from "@/components/loading"

export default function VenuePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <Venue />
        <Gallery />
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}
