import { CommentBase } from "../CommentBase";
import { ProjectorScreenChart } from "../Icons/ProjectorScreenChart";

const Section3 = () => {
  return (
    <section className="w-full px-[10%] sm:px-10">
      <div className="container mx-auto flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-3 justify-between lg:items-center">
        <div className="flex flex-col lg:mt-16 gap-y-2 lg:gap-y-4 lg:max-w-[clamp(300px,_50%,_648px)] lg:pr-24">
          <div className='w-12 h-12 p-2.5 rounded flex flex-row justify-center items-center text-main-blue bg-main-blue bg-opacity-5'>
            <ProjectorScreenChart />
          </div>
          <header className='text-xl sm:text-2xl lg:text-hero-tablet font-bold'>
            Harness the Power of in-the-Moment Research
          </header>
          <p className='text-sm font-normal'>Most research methods rely on participants to recall experiences from memory, while EthOS brings researchers into the moments they're studying and closer to the truth.</p>
          <p className='text-sm font-normal'>Take your research out of the lab and into the everyday lives of your customers to unearth pain points and opportunities to innovate that only arise in real-world situations.</p>
        </div>
        <div className="flex mx-auto flex-col w-full relative">
          <CommentBase>
            Take a video telling us what you think of the food when it arrives today:
          </CommentBase>
          <div id='#video-block' className='min-w-[clamp(260px,_100%,_648px)] rounded-2xl mt-12 sm:mt-20 overflow-clip h-[40vw] lg:h-[346px] bg-slate-800'>
            <div className='text-white text-center'>Video content</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3;
