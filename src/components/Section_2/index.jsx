import Image from "next/image";
import mockupPhone from 'src/static/mockup.png'
import arrow from 'src/static/BGShapes/Arrow.svg'
import { IPhoneIcon } from "../Icons/IPhoneIcon";

const Section2 = () => {
  return (
    <section className="w-full px-[5.75%] sm:px-10 section-2__bg-mobile">
      <div className="container mx-auto flex flex-col sm:flex-row gap-x-3 justify-between sm:items-stretch">
        <div className="flex flex-col py-8 sm:pb-14 md:py-16 flex-auto sm:max-w-[330px] lg:max-w-[400px] xl:max-w-[450px] gap-y-2 md:gap-y-4">
          <div className='w-12 h-12 p-2.5 rounded flex flex-row justify-center items-center bg-bOrange-accent bg-opacity-5'>
            <IPhoneIcon />
          </div>
          <header className='text-xl sm:text-2xl lg:text-hero-tablet font-bold'>
            Built For The Way People Communicate Today
          </header>
          <p className='text-sm font-normal pr-5 md:pr-11 pb-4'>When participants feel comfortable, they give honest and open feedback. That's why our apps mimic how people communicate through texting, sending pictures, and sharing videos.</p>
        </div>
        <div className="flex flex-col w-full sm:max-w-[50%] md:min-w-[50%] flex-shrink-0 sm:flex-auto max-h-[340px] sm:h-[inherit] sm:max-h-[660px] sm:relative section-2__bg">
          <div className="py-[10%] sm:py-8 md:py-16 flex flex-auto justify-center sm:justify-end items-end sm:items-center">
            <Image
              src={mockupPhone}
              alt="mockupPhone"
              className='max-h-[276px] max-w-[136px] lg:max-w-[199px] lg:max-h-[402px] xl:max-w-[263px] xl:max-h-[528px] sm:mx-auto xl:mr-[25%]'
              width={'100%'}
              height={'100%'}
            />
          </div>
          <div className='absolute right-[25%] hidden sm:flex flex-row justify-center xl:items-center items-end h-full w-[125%] lg:w-[150%] -z-10'>
            <Image
              src={arrow}
              alt='arrow'
              width='60%'
              className="max-w-[60%] md:max-w-[75%] xl:max-w-[120%] xl:min-w-[55%] md:pl-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2;
