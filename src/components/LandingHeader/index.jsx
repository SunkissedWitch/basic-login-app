import Image from "next/image";
import { RequestDemoButton } from "../RequestDemoButton";
import bgShape from '@/components/BGShapes/Bg_Shape.svg'
import { Carousel } from "../Carousel";

const Header = () => {
  return (
    <>
      <section className='p-10 w-full grid grid-cols-2 min-h-[90vh] overflow-x-clip'>
        <div className='my-auto flex flex-col gap-9 pr-3'>
          <article className='md:text-4xl lg:text-5xl font-bold text-neutral-950'>
            Great <span className='text-sky-500'>Customer</span>
            <br/>
            Experiences Starts
            <br/>
            with Great Research
          </article>  
          <div className="flex flex-col gap-7">
            <div className='text-lg font-medium text-neutral-950'>
              Capture any touchpoint along the customer journey and unearth context-rich insights that pave the way for exceptional experiences
            </div>
            <RequestDemoButton />
          </div>
        </div>
        <div className='w-full border border-slate-500 relative'>
          <Carousel />
          <Image
            src={bgShape}
            alt=""
            className='absolute max-w-[60vw] -ml-[15%] my-auto -z-10'
          />
        </div>
      </section>
    </>
  )
}

export default Header;
