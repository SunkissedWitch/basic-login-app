import Image from "next/image";
import Cards from '../../static/PH_Cards.png'
import { BagIcon } from "../Icons/BagIcon";
import { ChatsCircleIcon } from "../Icons/ChatsCircleIcon";
import { HouseIcon } from "../Icons/HouseIcon";
import { GlobeIcon } from "../Icons/GlobeIcon";
import Stepper from "../StepperComponent";

const stepper = [
  {
    title: 'In Store',
    description: 'Vivamus bibendum lorem nibh, accumsan consectetur ipsum scelerisque id. Vivamus accumsan tincidunt ex.',
    icon: <BagIcon className='w-7 h-7 stroke-main-blue' />
  },
  {
    title: 'Online',
    description: 'Quisque nec nisl luctus, bibendum est id, laoreet metus. Proin congue sapien quis lacus finibus turpis duis.',
    icon: <GlobeIcon className='w-7 h-7 stroke-main-blue' />
  },
  {
    title: 'At Home',
    description: 'Suspendisse mollis efficitur neque ac mattis. In tempor convallis ipsum in aliquet. Suspendisse nec odio orci.',
    icon: <HouseIcon className='w-7 h-7 stroke-main-blue' />
  },
  {
    title: 'Out and about',
    description: 'Phasellus fermentum libero id nulla interdum accumsan. Praesent congue in nibh eu euismod. Proin sit amet at.',
    icon: <ChatsCircleIcon className='w-7 h-7 stroke-main-blue' />
  }
]

const Section1 = () => {
  return (
    <section className="w-full section-1__bg px-[5.75%] sm:px-10">
      <div className="container mx-auto lg:hidden">
        <header className='lg:hidden flex justify-center w-full px-[5.75%] sm:px-10 md:text-xl font-bold text-center mb-12'>
          Go Where Your Customers Go And Experience What They Experience
        </header>
        <div className="w-full flex flex-col sm:hidden justify-start">
          {stepper.map((data, index) => (
            <Stepper key={`${data.title}-${index}`} {...data} />
          ))}
        </div>
      </div>
      <div className="container mx-auto hidden sm:flex flex-row gap-x-3 items-start">
        <div className="flex flex-col flex-auto min-w-[60%] md:min-w-[50%] mt-12">
          <Image
            src={Cards}
            alt="placeholder cards carousel"
          />
        </div>
        <div className="flex flex-col flex-initial min-w-[40%]">
          <header className='hidden lg:flex w-full lg:text-2xl xl:text-hero-tablet font-bold text-start'>
            Go Where Your Customers Go And Experience What They Experience
          </header>
          <div className="w-full flex flex-col justify-start lg:mt-10">
            {stepper.map((data, index) => (
              <Stepper key={`${data.title}-${index}`} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;
