import { forwardRef } from 'react'

export const StyledInput = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="block w-full rounded-md border-solid border border-neutral-300 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-slate-500"
    />
  )
})
