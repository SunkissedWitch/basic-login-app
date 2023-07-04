const Stepper = ({ icon, title, description }) => {
  return (
    <div className='flex flex-row justify-start items-stretch gap-x-3.5 relative after:w-px after:h-full after:border-r after:border-black after:ml-[30px] after:absolute last:after:hidden after:border-opacity-20 after:-z-10 pb-5 lg:pb-8'>
      <div className="block h-full">
        <div className='w-[60px] h-[60px] bg-bBlue-light rounded-full flex justify-center items-center text-main-blue'>
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <h6 className='text-2xl sm:text-xl lg:text-2xl font-medium text-main-blue'>
          {title}
        </h6>
        <p className='text-sm sm:text-xs lg:text-sm font-normal'>
          {description}
        </p>
      </div>
    </div>
  )
}
export default Stepper;
