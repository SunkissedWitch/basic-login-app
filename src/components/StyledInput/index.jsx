import React, { forwardRef, useState } from 'react'

export const StyledInput = forwardRef(({ register, id, required, rules, error, ...props }, ref) => {
  console.log('rules', rules)
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible(visibility => !visibility)

  if (props?.type === 'password') {
    return (
      <div className="mt-2 focus-visible:outline-none relative">
        <span className="absolute inset-y-0 right-0 flex items-center pr-2" onClick={toggleVisible}>
          { visible
            ? <svg className="h-5 w-5 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"/>
              </svg>
            : <svg className="h-5 w-5 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
            </svg>
          }
        </span>
        <input
          {...register(id, { required, ref, ...rules })}
          id={id}
          {...props}
          type={visible ? 'text' : 'password'}
          className="block w-full rounded-md bg-white border-solid border border-neutral-300 py-2 pr-9 pl-2 text-gray-900 shadow-sm placeholder:text-gray-400 transition-colors hover:border-neutral-400 ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-slate-500"
          />
      </div>
    )
  }

  return (
    <div className="mt-2 focus-visible:outline-none">
      <input
        {...register(id, { required, ref, ...rules })}
        id={id}
        {...props}
        className="block w-full rounded-md bg-white border-solid border border-neutral-300 py-2 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 transition-colors hover:border-neutral-400 ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-slate-500"
      />
      <p className='text-red-500 text-sm mt-0.5'>{error?.message}</p>
    </div>
  )
})
