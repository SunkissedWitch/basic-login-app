import { forwardRef } from 'react'
import { StyledInput } from "../StyledInput"

export const FormField = forwardRef(({ id, label, ...props }, ref ) => {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2 focus-visible:outline-none">
          <StyledInput id={id} {...props} />
        </div>
      </div>
    </>
  )
})