"use client"

import { FormField } from "@/components/FormField"
import { Logo } from "@/components/Logo"
import { PasswordField } from "@/components/PasswordField"
import { useForm } from 'react-hook-form'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  console.log(errors)

  const onSubmit = (values) => handleSubmit(console.log(values))
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      {/* <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="w-full before:rounded-xl text-center p-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-700 relative inline-block">
            <Logo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <FormField 
              label={'Email address'}
              id={'email'}
              type={'email'}
              autoComplete='email'
              {...register('email', { required: { value: true, message: 'Please, enter your email'}})}
            />

            <PasswordField
              label={'Password'}
              id={'password'}
              type={'password'}
              autoComplete='current-password'
              forgotQuestion
              restorePasswordLink='#'
              {...register('password', { required: { value: true, message: 'Please enter your password'}})}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      {/* </div> */}
    </div>
  );
}
