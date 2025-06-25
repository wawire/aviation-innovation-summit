import { Suspense } from "react"
import AboutRedesigned from "@/components/about-redesigned"
import TargetAudience from "@/components/target-audience"
import WhyMombasa from "@/components/why-mombasa"
import { ThemeToggleFloat } from "@/components/theme-toggle-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import Loading from "@/components/loading"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <AboutRedesigned />
        <TargetAudience />
        <WhyMombasa />
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}
