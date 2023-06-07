import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NavbarLayout({ children }) {
  return (
    <>
      <Header />
      <main className='flex flex-grow flex-col items-center justify-start w-full'>
        {children}
      </main>
      <Footer />
    </>
  )
}