import { Logo } from '../Logo'
import Link from 'next/link'
import { User } from '../User'

export const Navbar = ({ navItems, user }) => {
  return (
    <>
      <div className='flex flex-row justify-start px-8 py-4 bg-gradient-to-br from-slate-950 from-20% via-slate-500 via-65% to-slate-200 drop-shadow-lg shadow-slate-950 sticky'>
        <Logo />
        <div className='hidden md:flex flex-row justify-center items-center flex-grow flex-nowrap gap-x-4 px-8 text-neutral-100 text-lg font-semibold'>{
          navItems.map(navItem => (
            <Link key={`link-route-${navItem.title}`} href={navItem.route} className='hover:text-sky-200 hover:underline active:underline decoration-4 underline-offset-8 decoration-yellow-500'>{navItem.title}</Link>
          ))
        }
        </div>
        <User user={user}/>
      </div>
      <div className="w-100 h-3 bg-yellow-500"></div>
    </>
  )
}