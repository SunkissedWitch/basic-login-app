import React from "react"
import { StyledInput } from "../StyledInput"

export const FormField = ({ id, label, ...props }) => {
  const isRequired = props.required === true || props.required.value === true
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className={`block text-base font-normal leading-6 text-gray-900 ${isRequired && "after:content-['*'] after:ml-0.5 after:text-red-600 after:text-opacity-80"}`}
        >
          {label}
        </label>
        <div className="mt-2 focus-visible:outline-none">
          <StyledInput id={id} {...props} />
        </div>
      </div>
    </>
  )
}