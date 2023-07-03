"use client"

const ContactFormButton = (props) => {

  // const clickHandler = (e) => {
  //   e.preventDefault()
  //   console.log('test')
  // }
  return (
    <button
      {...props}
      type='submit'
      // onClick={clickHandler}
      className="flex justify-center items-center rounded-lg px-8 py-3 bg-bOrange-500 text-neutral-50 hover:bg-bOrange-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bOrange-600"
    >
      Submit
    </button>
  )
}

export default ContactFormButton;
