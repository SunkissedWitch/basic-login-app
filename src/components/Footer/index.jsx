import Link from "next/link"
import { linksPart1, linksPart2, addresses, contacts } from './content'
import { LinkedInIcon } from "../Icons/LinkedInIcon"

export const Footer = () => {
  return (
    <footer className='w-full bg-main-blue-600 text-footer-text text-base leading-5 px-8 sm:px-9'>
      <div className="container my-14 sm:my-16 lg:my-20 flex flex-row justify-between gap-x-12">
        <div className="flex flex-col gap-y-8">
          <div className='text-lg font-semibold text-white'>Quick Links</div>
          <div className="flex flex-row gap-x-9">
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
            <div className="h-full w-px bg-footer-text bg-opacity-30" />
            <div className="flex flex-col gap-y-4">
              {linksPart2.map((link) => (
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
        <div className="flex flex-col gap-y-8">
          <div className='text-lg font-semibold text-white' id='social-media'>Follow us on Social Media</div>
          <a href="#social-media" className='flex flex-row gap-x-3 items-center max-w-max group'>
            <div id="social-media-link" className='w-8 h-8 flex flex-row shrink-0 grow-0 justify-center items-center rounded-full bg-bBlue-darken group-hover:bg-main-blue group-hover:bg-opacity-90 transition-colors'>
              <LinkedInIcon
                className='fill-white group-hover:fill-footer-text transition-colors'
              />
            </div>
            <label htmlFor="social-media-link">LinkedIn</label>
          </a>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className='text-lg font-semibold text-white'>Contact</div>
          <div className="flex flex-row gap-x-8">
            {addresses.map((address) => (
              <div key={address.location} className='flex flex-col gap-y-4'>
                <h5 className='font-medium text-lg'>{address.location}</h5>
                <pre className='text-base font-normal font-sans'>{address.address.join('\n')}</pre>
                <div>
                {address.contacts.map((contact) => (
                  <div key={`${address.location}-${contact.type}`} className='flex flex-col gap-y-4'>
                    <h6 className='text-lg font-medium'>{contact.type}</h6>
                    <p className='text-base font-normal'>{contact.data}</p>
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}