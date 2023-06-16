import { ProjectorScreenChart } from "../Icons/ProjectorScreenChart";

const Section3 = () => {
  return (
    <section className="w-full mt-24 px-[10%] sm:px-10">
      <div className="container mx-auto flex flex-col sm:flex-row gap-x-3 justify-between sm:items-stretch">
        <div className="flex flex-col py-8 pb-14 md:py-16 flex-auto sm:max-w-[330px] lg:max-w-[400px] xl:max-w-[450px] gap-y-2 md:gap-y-4">
          <div className='w-12 h-12 p-2.5 rounded flex flex-row justify-center items-center bg-bOrange-accent bg-opacity-5'>
            <ProjectorScreenChart className={'stroke-bBlue-500'} />
          </div>
          <header className='text-xl sm:text-2xl lg:text-hero-tablet font-bold'>
            Harness the Power of in-the-Moment Research
          </header>
          <p className='text-sm font-normal pr-5 md:pr-11 pb-4'>Most research methods rely on participants to recall experiences from memory, while EthOS brings researchers into the moments they're studying and closer to the truth.</p>
          <p className='text-sm font-normal pr-5 md:pr-11 pb-4'>Take your research out of the lab and into the everyday lives of your customers to unearth pain points and opportunities to innovate that only arise in real-world situations.</p>
        </div>
        <div className="sm:flex block flex-col w-full sm:max-w-[50%] md:min-w-[50%] flex-shrink-0 sm:flex-auto h-[340px] sm:h-[inherit] sm:max-h-[660px] sm:relative">
        </div>
      </div>
    </section>
  )
}

export default Section3;
