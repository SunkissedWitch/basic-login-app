import Link from "next/link"
import { CarretDown } from "../Icons/CarretDown"
import { fill, times } from "lodash"

export const Header = () => {
  const categories = fill(new Array(3), {
    title: 'Category',
    subCategories: fill(new Array(3), {
        title: 'Sub_category',
        href: '/'
      })
  })

  return (
    <header className='w-full bg-[#0190cf] text-white py-5 px-2.5 sm:px-5 md:px-7 flex flex-row justify-between'>
      <div className='px-4 py-2'>
        <p className='text-xl font-bold tracking-wider drop-shadow-[0_0_4px_rgba(225,225,225,0.5)] font-mono leading-none text-slate-100 antialiased m-0 cursor-default'>
          Logo
        </p>
      </div>
      <div className='flex-grow hidden md:flex flex-row justify-start items-baseline px-4'>
        {times(categories.length, (upTime) => (
          <div className="group/navigation relative" key={`category-${categories[upTime].title}-${upTime + 1}`}>
            <Link href={'/'} className='px-2.5 py-2 flex flex-row items-center no-underline hover:underline underline-offset-2'>
              {categories[upTime].title} {upTime + 1}
              <CarretDown className='w-3 h-3 ml-1.5' />
            </Link>
            <div
              className='group-hover/navigation:block hidden absolute right-0 bg-neutral-100 text-sky-800 shadow-sm shadow-neutral-400 rounded-lg rounded-tr-none before:absolute before:h-0 before:w-0 before:border-b-8 before:border-r-8 before:border-l-8 before:border-solid before:border-neutral-100 before:border-x-transparent before:-top-2 before:right-2'
            >
              <ul className='min-w-max'>
                {times(categories[upTime].subCategories.length, (subTime) => (
                  <li
                    key={`subcategory-${categories[upTime].subCategories[subTime].title}-${upTime}-${subTime}`}
                    className='flex first:rounded-t-lg first:rounded-tr-none last:rounded-b-lg hover:text-neutral-950 hover:bg-neutral-500 hover:bg-opacity-30'>
                    <Link href={categories[upTime].subCategories[subTime].href} className="px-4 py-2">
                      {categories[upTime].subCategories[subTime].title} {subTime + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-grow md:flex-grow-0'>
        <button className='rounded-lg bg-bOrange-500 flex flex-row justify-center items-center py-2 px-4 text-white text-opacity-100  hover:text-opacity-95 hover:bg-bOrange-400 transition-all ms-auto'>Log Out</button>
      </div>
    </header>
  )
}