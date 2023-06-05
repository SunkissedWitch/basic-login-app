import Link from "next/link"
import { StyledPasswordInput } from "../StyledPasswordInput"

export const PasswordField = ({ id, label, forgotQuestion = false, restorePasswordLink = '#', ...props }) => {
  const isRequired = props.required === true || props.required.value === true
  return (
    <>
      <div className="group/control">
        <div className="flex items-baseline justify-between">
          <label
            htmlFor={id}
            className={`block text-base font-normal leading-6 text-gray-900 ${isRequired && "after:content-['*'] after:ml-0.5 after:text-red-600 after:text-opacity-80"}`}
          >
            {label}
          </label>
          {forgotQuestion &&
            <Link
              href={restorePasswordLink}
              className="text-sm font-semibold text-sky-600 hover:text-sky-500 text-end"
            >
              Forgot password?
            </Link>
          }
        </div>
        <div className="mt-2 focus-visible:outline-none">
          <StyledPasswordInput id={id} {...props} />
        </div>
      </div>
    </>
  )
}