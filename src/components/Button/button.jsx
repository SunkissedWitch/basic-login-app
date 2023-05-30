export const PrimaryButton = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-base capitalize font-semibold text-slate-50 shadow-sm shadow-gray-500 hover:text-white hover:bg-sky-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      {title}
    </button>
  )
}
