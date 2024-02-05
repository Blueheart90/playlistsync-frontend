import Image from 'next/image'
import Hero from '@/components/organisms/hero'
import ButtonAuth from '@/components/atoms/ButtonAuth'
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ButtonAuth />
    </main>
  )
}
