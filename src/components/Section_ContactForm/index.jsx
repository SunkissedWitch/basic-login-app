import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['700'] })

const ContactFormSection = () => {
  // color: var(--text-color, #1C1C1C);
  // text-align: center;
  // font-size: 1.5rem;
  // font-family: Poppins;
  // font-weight: 700;

// xs:
// color: var(--main-blue, #0090CF);
// text-align: center;
// font-size: 1.375rem;
// font-family: Poppins;
// font-weight: 700;
// line-height: 1.875rem;

  return (
    <section className='w-full p-10 bg-slate-300'>
      <div className='container sm:p-10 bg-slate-100 mx-auto'>
        <div className='flex flex-col justify-between gap-y-10'>
          <div className={poppins.className}>
            <div className='font-bold text-center text-xl sm:text-2xl md:text-hero-tablet md:leading-[3rem] text-[#1c1c1c] mb-4'>
              Want to learn more about using EthOS for experience research? 
            </div>
            <div className='text-main-blue font-bold text-[1.375rem] sm:text-2xl md:text-hero-tablet leading-[1.875rem] text-center'>
              Get started with a personalized demo!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection;
