import { Banner } from '@/components/layout/Banner'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh+4rem)] flex flex-col bg-#000">
      <Header />
      <div className="flex-1 pb-20">
        <div className="flex-center text-4xl text-white lh-40">Fisand homepage seed</div>
        <Banner />
      </div>

      <Footer />
    </div>
  )
}
