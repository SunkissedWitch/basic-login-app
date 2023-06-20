import Link from "next/link"

const linksPart1 = [
  {
    title: 'Login',
    href: '/login'
  },
  {
    title: 'Platform',
    href: '#'
  },
  {
    title: 'Services',
    href: '#'
  },
  {
    title: 'Pricing',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  },
  {
    title: 'Contact Us',
    href: '#'
  }
]
const linksPart2 = [
  {
    title: 'CDPR Policy',
    href: '#'
  },
  {
    title: 'Privacy Policy',
    href: '#'
  },
  {
    title: 'Cookie Policy',
    href: '#'
  },
  {
    title: 'Security Policy',
    href: '#'
  },
  {
    title: 'Terms of Use',
    href: '#'
  }
]
export const Footer = () => {
  return (
    <footer className='w-full bg-main-blue text-white text-base leading-5 px-8 sm:px-9'>
      <div className="container my-14 sm:my-16 lg:my-20 flex flex-row gap">
        <div className="flex flex-col">
          <div></div>
          <div className="flex flex-row">
            <div className="flex flex-col gap-y-4">
              {linksPart1.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='hover:text-bOrange-accent no-underline'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex">

        </div>
        <div className="flex">

        </div>
      </div>
    </footer>
  )
}