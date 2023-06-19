import { Triangle } from "./Triangle"

export const CommentBase = ({ children }) => {

  return (
    <div className="absolute -left-2 sm:right-6 sm:left-auto lg:-left-44 lg:right-auto">
      <div className="relative bg-bBlue-light py-2 sm:py-[1.375rem] px-4 sm:px-6 max-w-[50%] sm:max-w-[clamp(160px,_100%,_215px)] rounded-lg drop-shadow-[0px_20px_50px_rgba(0,_0,_0,_0.06)] ml-0 sm:ml-auto lg:ml-0">
        <div className={'absolute bottom-0 right-0 -mb-[9px] -mx-[1px] rotate-90 sm:left-0 sm:right-auto sm:rotate-45 lg:left-auto lg:right-0 sm:-m-2.5 lg:-rotate-45'}>
          <Triangle className='text-bBlue-light h-[20px] w-auto sm:w-6 sm:h-auto' />
        </div>
        <div className='text-main-text text-[0.625rem] font-normal sm:font-medium sm:text-xs sm:leading-normal leading-[1.125rem]'>
          {children || 'Here should be some text'}
        </div>
      </div>
    </div>
  )
}