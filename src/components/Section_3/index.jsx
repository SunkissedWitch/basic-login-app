import { CommentBase } from "../CommentBase";
import { ProjectorScreenChart } from "../Icons/ProjectorScreenChart";

const descriptionText = {
  first: `Nulla quis orci quis ipsum accumsan euismod sed mattis nisl. Vestibulum venenatis malesuada urna at eleifend. Praesent id lectus a magna vehicula congue non et lectus.`,
  second: `Nunc sem metus, efficitur eu gravida at, commodo non mauris. Pellentesque dapibus diam mauris, sit amet placerat arcu semper a. Integer molestie, arcu sit amet commodo nulla.`
}

const Section3 = () => {
  return (
    <section className="w-full px-[5.75%] sm:px-10 section-3__bg">
      <div className="container mt-14 md:mt-9 sm:mt-0 mx-auto flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-3 justify-between lg:items-center">
        <div className="flex flex-col lg:mt-16 gap-y-4 lg:max-w-[clamp(300px,_50%,_648px)] lg:pr-24">
          <div className='w-12 h-12 p-2.5 rounded flex flex-row justify-center items-center text-main-blue bg-main-blue bg-opacity-5'>
            <ProjectorScreenChart />
          </div>
          <header className='text-xl leading-[1.875rem] sm:text-2xl lg:text-hero-tablet font-bold'>
            Harness the Power of in-the-Moment Research
          </header>
          <p className='hidden sm:block text-sm font-normal'>{descriptionText.first}</p>
          <p className='hidden sm:block text-sm font-normal'>{descriptionText.second}</p>
        </div>
        <div className="flex mx-auto flex-col w-full relative">
          <CommentBase>
            Take a video telling us what you think of the food when it arrives today:
          </CommentBase>
          <div id='#video-block' className='min-w-[clamp(260px,_100%,_648px)] rounded-2xl mt-12 sm:mt-20 overflow-clip h-[40vw] lg:h-[346px] bg-slate-800'>
            <div className='text-white text-center'>Video content</div>
          </div>
        </div>
        <div className='sm:hidden flex flex-col gap-y-4 '>
          <p className='text-sm font-normal leading-7'>{descriptionText.first}</p>
          <p className='text-sm font-normal leading-7'>{descriptionText.second}</p>
        </div>
      </div>
    </section>
  )
}

export default Section3;
