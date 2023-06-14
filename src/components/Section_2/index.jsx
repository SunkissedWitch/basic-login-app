import Image from "next/image";

const Section2 = () => {
  return (
    <section className="w-full section-1__bg mt-24 px-[10%] sm:px-10">
      <div className="container mx-auto flex flex-col sm:flex-row gap-x-3 justify-center items-center">
        <div className="flex flex-col flex-initial border border-red-400 sm:max-w-[330px] md:max-w-[400px] gap-y-2 md:gap-y-4">
          <header className='text-xl sm:text-2xl lg:text-hero-tablet font-bold'>
            Built For The Way People Communicate Today
          </header>
          <p className='text-sm font-normal'>When participants feel comfortable, they give honest and open feedback. That's why our apps mimic how people communicate through texting, sending pictures, and sharing videos.</p>
        </div>
        <div className="flex flex-col w-full flex-auto border border-blue-500 h-[410px] sm:h-full">
          hehehe
        </div>
      </div>
    </section>
  )
}

export default Section2;
