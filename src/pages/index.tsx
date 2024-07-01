import { Banner } from '@/components/layout/Banner'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function Home() {
  return (
    <div className="min-h-100vh bg-#000">
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}
