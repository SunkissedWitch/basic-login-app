import Image from "next/image";
import Cards from '../../static/PH_Cards.png'

const Section1 = () => {
  return (
    <section className="w-full section-1__bg sm:px-10 mt-24">
      <div className="container mx-auto lg:hidden">
        <header className='lg:hidden inline-block md:text-xl font-bold text-center'>
          Go Where Your Customers Go And Experience What They Experience
        </header>
      </div>
      <div className="container mx-auto hidden sm:flex flex-row">
        <div className="flex flex-col flex-[2_0_50%]">
          <Image
            src={Cards}
            alt="placeholder cards carousel"
          />
        </div>
        <div className="flex flex-col flex-[1_1_50%]">
          <header className='hidden lg:inline-block lg:text-3xl font-bold text-start'>
            Go Where Your Customers Go And Experience What They Experience
          </header>
        </div>
      </div>
    </section>
  )
}

export default Section1;
