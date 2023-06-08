import Image from "next/image";
import { RequestDemoButton } from "../RequestDemoButton";
import caroselPlaceholder from '../../static/Content.png'
import mobileCarouselPlaceholder from '../../static/Cards.png'
import { Poppins } from 'next/font/google'
// import { Carousel } from "../Carousel";
const poppins = Poppins({ subsets: ['latin'], weight: '700' })

const Header = () => {
  return (
    <>
      <section className='w-full overflow-x-clip header-section__bg sm:px-10'>
        <div className="inline-block sm:hidden w-full px-[10%] pt-10">
          <article className={poppins.className.concat(' ', 'inline-block text-neutral-950 text-hero-mobile')}>
            Great <span className='text-sky-500'>Customer</span>
            <br/>
            Experiences Starts
            <br/>
            with Great Research
          </article>
        </div>
        <div className='flex flex-row flex-wrap-reverse container mx-auto sm:py-10'>
          <div className='flex-[0_0_100%] sm:flex-[1_0_60%] md:flex-[1_0_50%] flex flex-col gap-9 justify-end items-start sm:pr-3 p-0'>
            <article className={poppins.className.concat(' ', 'hidden sm:inline-block sm:text-hero-mobile md:text-hero-tablet xl:text-hero-desktop font-bold text-neutral-950')}>
              Great <span className='text-sky-500'>Customer</span>
              <br/>
              Experiences Starts
              <br/>
              with Great Research
            </article>
            <div className="flex flex-col gap-7 my-10 sm:my-0 px-[10%] sm:px-0">
              <div className='text-lg font-medium text-neutral-950'>
                Capture any touchpoint along the customer journey and unearth context-rich insights that pave the way for exceptional experiences
              </div>
              <RequestDemoButton />
            </div>
          </div>
          <div className='w-full flex-[0_0_100%] sm:flex-[0_0_40%] md:flex-[0_0_50%] flex justify-center items-center'>
            {/* <Carousel /> */}
            <Image
              src={caroselPlaceholder}
              alt="caroselPlaceholder"
              className="hidden lg:block"
            />
            <Image
              src={mobileCarouselPlaceholder}
              alt="mobileCarouselPlaceholder"
              className="flex w-full px-[10%] sm:ps-0 sm:py-0 py-[7%] lg:hidden header-section__bg-mobile"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;
