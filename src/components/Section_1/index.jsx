import Image from "next/image";
import Cards from '../../static/PH_Cards.png'
import { BagIcon } from "../Icons/BagIcon";
import { ChatsCircleIcon } from "../Icons/ChatsCircleIcon";
import { HouseIcon } from "../Icons/HouseIcon";
import { GlobeIcon } from "../Icons/GlobeIcon";

const stepper = [
  {
    title: 'In Store',
    description: 'See how customers perceive your products on the shelf and shop with them as they go through the store.',
    icon: <BagIcon className='w-7 h-7 stroke-main-blue' />
  },
  {
    title: 'Online',
    description: 'Conduct user experience testing on mobile apps and websites to ensure your designs match the needs of users.',
    icon: <GlobeIcon className='w-7 h-7 stroke-main-blue' />
  },
  {
    title: 'At Home',
    description: 'Gain a better understanding of where, why, when, and how customers experience your products in the real world.',
    icon: <HouseIcon className='w-7 h-7 stroke-main-blue' />
  },
  {
    title: 'Out and about',
    description: 'Collect video feedback from customers that provides rich insights into their needs, behaviors, and attitudes.',
    icon: <ChatsCircleIcon className='w-7 h-7 stroke-main-blue' />
  }
]

const Section1 = () => {
  return (
    <section className="w-full section-1__bg px-[5.75%] sm:px-10 ">
      <div className="container mx-auto lg:hidden">
        <header className='lg:hidden flex justify-center w-full px-[5.75%] sm:px-10 md:text-xl font-bold text-center'>
          Go Where Your Customers Go And Experience What They Experience
        </header>
      </div>
      <div className="container mx-auto hidden sm:flex flex-row gap-x-3 items-center">
        <div className="flex flex-col flex-auto min-w-[50%]">
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
            {stepper.map((data, index) => {
              const { icon, title, description } = data
              return (
                <div key={`${title}-${index}`} className='flex flex-row justify-start items-stretch gap-x-3.5 relative after:w-px after:h-full after:border-r after:border-black after:ml-[30px] after:absolute last:after:hidden after:border-opacity-20 after:-z-10 pb-5 lg:pb-8'>
                  <div className="block h-full">
                    <div className='w-[60px] h-[60px] bg-bBlue-light rounded-full flex justify-center items-center text-main-blue'>
                      {icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h6 className='text-2xl font-medium text-main-blue'>
                      {title}
                    </h6>
                    <p className='text-sm font-normal'>
                      {description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;
