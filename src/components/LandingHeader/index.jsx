const Header = () => {
  return (
    <>
      <section className='p-10 flex flex-row justify-between items-center w-full'>
        <div>
          <article className='md:text-4xl lg:text-5xl font-bold text-neutral-950'>
            Great <span className='text-sky-500'>Customer</span>
            <br/>
            Experiences Starts
            <br/>
            with Great Research
          </article>  
          <div className="w-[50vw] mt-9 flex flex-col gap-7">
            <div className='text-lg font-medium text-neutral-950'>
              Capture any touchpoint along the customer journey and unearth context-rich insights that pave the way for exceptional experiences
            </div>
            <button className="inline-block max-w-max rounded-lg px-8 py-3 bg-orange-400 text-white">Request Demo</button>
          </div>
        </div>
        <div>Content</div>
      </section>
    </>
  )
}

export default Header;
