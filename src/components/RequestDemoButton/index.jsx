"use client"

export const RequestDemoButton = ({ title, ...props }) => {

  const clickHandler = () => {
    console.log('test')
  }
  return (
    <button
      {...props}
      onClick={clickHandler}
      className="inline-block min-w-max max-w-[312px] rounded-lg px-8 py-3 bg-bOrange-500 text-white hover:bg-bOrange-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bOrange-600"
    >
      Request demo
    </button>
  )
}
