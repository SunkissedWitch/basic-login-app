'use client';

import SubmitButton from "../ContactForm__Button";

const ContactForm = () => {
  return (
    <form className='flex flex-col gap-y-6 sm:gap-y-8 w-full'>
      <div className='focus-visible:outline-none'>
        <label
          htmlFor=""
          className='text-base text-neutral-800 mb-2 after:content-["*"] after:ml-0.5 after:text-red-600 after:text-opacity-80'>First name</label>
        <input
          type="text"
          className='rounded-lg border border-neutral-250 bg-white h-9 w-full p-2 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-350 transition-colors'
        />
      </div>
      <div className='focus-visible:outline-none'>
        <label
          htmlFor=""
          className='text-base text-neutral-800 mb-2'>
          Last Name
        </label>
        <input
          type="text"
          className='rounded-lg border border-neutral-250 bg-white h-9 w-full p-2 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-350 transition-colors'
        />
      </div>
      <div className='focus-visible:outline-none'>
        <label
          htmlFor=""
          className='text-base text-neutral-800 mb-2 after:content-["*"] after:ml-0.5 after:text-red-600 after:text-opacity-80'>
          Work Email
        </label>
        <input
          type="text"
          className='rounded-lg border border-neutral-250 bg-white h-9 w-full p-2 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-350 transition-colors'
        />
      </div>
      <div className='focus-visible:outline-none'>
        <label
          htmlFor=""
          className='text-base text-neutral-800 mb-2'>
          How can we help you?
        </label>
        <textarea
          className='rounded-lg border border-neutral-250 w-full h-36 p-2 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-350 transition-colors'
        />
      </div>
      <SubmitButton />
    </form>
  )
}

export default ContactForm;
