import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import CeramicShowcase from '@/components/sections/CeramicShowcase'
import Gallery from '@/components/sections/Gallery'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <CeramicShowcase />
      <Gallery />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
