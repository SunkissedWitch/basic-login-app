import Link from "next/link"
import { StyledInput } from "../StyledInput"

export const PasswordField = ({ id, label, forgotQuestion = false, restorePasswordLink = '#', ...props }) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="block text-base font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          {forgotQuestion &&
            <div className="text-sm">
              <Link
                href={restorePasswordLink}
                className="font-semibold text-sky-600 hover:text-sky-500"
              >
                Forgot password?
              </Link>
            </div>
          }
        </div>
        <div className="mt-2 focus-visible:outline-none">
          <StyledInput id={id} {...props} />
        </div>
      </div>
    </>
  )
}