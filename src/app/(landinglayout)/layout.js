import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NavbarLayout({ children }) {
  return (
    <>
      <Header />
      <main className='flex flex-grow flex-col items-center justify-start gap-7 lg:gap-24 w-full text-main-text'>
        {children}
      </main>
      <Footer />
    </>
  )
}