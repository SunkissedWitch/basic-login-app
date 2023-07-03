'use client';

import { useForm } from "react-hook-form";
import SubmitButton from "../ContactForm__Button";
import { emailRule } from "@/utils/validateRules";
import TextHelper from "../Form_TextHelper";

const ContactForm = () => {
  const { register, control, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      description: '',
    },
    reValidateMode: 'onChange'
  })
  console.log('errors', errors)
  const { pattern: emailPattern } = emailRule
  const onSubmit = (data) => console.log(data)

  return (
    <form className='flex flex-col gap-y-6 sm:gap-y-8 w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='focus-visible:outline-none'>
        <label
          htmlFor=""
          className='text-base text-neutral-800 mb-2 after:content-["*"] after:ml-0.5 after:text-red-600 after:text-opacity-80'>First name</label>
        <input
          type="text"
          className='rounded-lg border border-neutral-250 bg-white h-9 w-full p-2 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-350 transition-colors'
          {...register("firstName", { required: { value: true, message: 'Name is required'}, maxLength: { value: 40, message: 'The name is too long'} })}
        />
        {errors?.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
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
          {...register("lastName", { maxLength: { value: 40, message: 'The last name is too long'} })} 
        />
        {errors?.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
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
          {...register("workEmail", { required: { value: true, message: 'Email is required' }, pattern: emailPattern })} 
        />
        {errors?.workEmail && <p className="text-red-500">{errors.workEmail?.message}</p>}
      </div>
      <div className='focus-visible:outline-none'>
        <label
          htmlFor=""
          className='text-base text-neutral-800 mb-2'>
          How can we help you?
        </label>
        <textarea
          className='rounded-lg border border-neutral-250 w-full h-36 p-2 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-350 transition-colors'
          {...register("description", { maxLength: { value: 5, message: 'Please limit your description to 500 characters.' }})} 
        />
        { errors?.description
          ? <p className="text-red-500">{errors.description.message}</p>
          : <TextHelper control={control} />
        }
      </div>
      <SubmitButton />
    </form>
  )
}

export default ContactForm;
