import Hero from "@/components/Hero"
import Announcement from "@/components/Announcement"
import Mission from "@/components/Mission"
import Partners from "@/components/Partners"
import Programs from "@/components/Programs"
import ScrollToTop from "@/components/ScrollToTop"
import AvailableTrades from "@/components/AvailableTrades"

export default function Home() {
  return (
    <>
      <Announcement />
      <Hero />
      <Mission />
      <AvailableTrades />
      <Programs />
      <Partners />
      <ScrollToTop />
    </>
  )
}