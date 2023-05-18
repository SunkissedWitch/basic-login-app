export const metadata = {
  title: 'Login',
  description: 'Authorize to continue',
}

export default function BasicLayout({ children }) {
  return (
    <div className='flex flex-col w-screen h-screen'>
      {children}
    </div>
  )
}
