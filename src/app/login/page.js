"use client"

import { Logo } from "@/components/Logo"
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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2 focus-visible:outline-none">
                <input
                  {...register('email', { required: { value: true, message: 'Please, enter your email'}})}
                  // id="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-solid border border-neutral-300 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-slate-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-sky-600 hover:text-sky-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 focus-visible:outline-none">
                <input
                  {...register('password', { required: { value: true, message: 'Please enter your password'}})}
                  // id="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-solid border border-neutral-300 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-slate-500"
                />
              </div>
            </div>

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
