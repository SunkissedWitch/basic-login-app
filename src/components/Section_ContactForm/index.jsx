import { Poppins } from "next/font/google";
import ContactForm from "../ContactForm";

const poppins = Poppins({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const ContactFormSection = () => {
  return (
    <section className='w-full p-10 border border-red-500'>
      <div className='container sm:p-10 mx-auto'>
        <div className='flex flex-col justify-between gap-y-10'>
          <div className={poppins.className}>
            <div className='font-sans font-bold text-center text-xl sm:text-2xl md:text-hero-tablet md:leading-[3rem] text-[#1c1c1c] mb-4'>
              Want to learn more about using EthOS for experience research? 
            </div>
            <div className='font-sans text-main-blue font-bold text-[1.375rem] sm:text-2xl md:text-hero-tablet leading-[1.875rem] text-center'>
              Get started with a personalized demo!
            </div>
          </div>
          <div className='max-w-[40.5rem] w-full mx-auto bg-white rounded-xl px-6 py-6 sm:px-12 sm:py-10 shadow-[0px_20px_50px_0px_rgba(0,_0,_0,_0.10)]'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection;
