import { Navbar } from "@/components/Navbar"

export const metadata = {
  title: 'Users',
  description: 'See authorized users',
}

export default function NavbarLayout({ children }) {
  const navigation = [
    { 
      title: 'Users',
      route: '/users'
    },
    {
      title: 'Login',
      route: '/login'
    }
  ]
  return (
    <div className='flex flex-col w-full'>
      <Navbar navItems={navigation} user={{ name: 'Guest', avatar: '' }}/>
      <main className='d-flex flex-col flex-grow justify-start w-screen p-8'>
        {children} 
      </main>
    </div>
  )
}
