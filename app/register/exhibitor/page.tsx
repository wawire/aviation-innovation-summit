import { Suspense } from "react"
import ExhibitorRegistrationForm from "@/components/exhibitor-registration-form"
import { ThemeToggleFloat } from "@/components/theme-toggle-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import Loading from "@/components/loading"

export default function ExhibitorRegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Suspense fallback={<Loading />}>
        <ExhibitorRegistrationForm />
        <ThemeToggleFloat />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}
