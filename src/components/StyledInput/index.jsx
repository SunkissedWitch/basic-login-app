import React, { forwardRef } from 'react'

export const StyledInput = forwardRef(({ register, id, required, rules, error, ...props }, ref) => {
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

StyledInput.displayName = 'StyledInput';
