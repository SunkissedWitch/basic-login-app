import { CarretDown } from "../Icons/CarretDown"

export const Header = () => {
  return (
    <header className='w-full bg-[#0190cf] text-white py-5 px-2.5 sm:px-5 md:px-7 flex flex-row justify-between'>
      <div className='px-4 py-2'>
        <p className='text-xl font-bold tracking-wider drop-shadow-[0_0_4px_rgba(225,225,225,0.5)] font-mono leading-none text-slate-100 antialiased m-0 cursor-default'>
          Logo
        </p>
      </div>
      <div className='flex-grow group/navigation hidden md:flex flex-row justify-start items-baseline px-4 py-2'>
        <div className='px-2 flex flex-row items-center no-underline hover:underline underline-offset-2'>item 1<CarretDown className='w-3 h-3 ml-1'/></div>
        <div className='px-2 flex flex-row items-center no-underline hover:underline underline-offset-2'>item 2<CarretDown className='w-3 h-3 ml-1'/></div>
        <div className='px-2 flex flex-row items-center no-underline hover:underline underline-offset-2'>item 3<CarretDown className='w-3 h-3 ml-1'/></div>
      </div>
      <div>
        <button className='rounded-lg bg-[#f9a226] flex flex-row justify-center items-center py-2 px-4 text-white text-opacity-100  hover:text-opacity-95 hover:bg-[#e5931d] transition-all'>Log Out</button>
      </div>
    </header>
  )
}