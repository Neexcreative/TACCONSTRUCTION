import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeClient from './HomeClient'
import HeroSection from './HeroSection'
import { services } from '@/lib/services'

export const metadata = {
  title: 'T.A.C Construction | Dublin Renovation & Building Specialists',
  description: 'Expert residential renovation, heating, plumbing, roofing and general construction across Dublin and Ireland. 15+ years of excellence.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <HeroSection />
        <HomeClient variant="services" services={services} />
        <HomeClient variant="cta" />
        <Footer />
      </main>
    </>
  )
}
