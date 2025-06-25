import { Suspense } from "react"
import SponsorRegistrationForm from "@/components/sponsor-registration-form"
import { ThemeToggleFloat } from "@/components/theme-toggle-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import Loading from "@/components/loading"

export default function SponsorRegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <SponsorRegistrationForm />
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}
