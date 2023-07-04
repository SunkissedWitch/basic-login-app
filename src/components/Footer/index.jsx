import React from "react"
import Link from "next/link"
import { linksPart1, linksPart2, addresses, contacts } from './content'
import { LinkedInIcon } from "../Icons/LinkedInIcon"
import googleButton from './Google.svg'
import appleButton from './Apple.svg'
import Image from "next/image"


export const Footer = () => {
  return (
    <footer className='w-full bg-main-blue-600 text-footer-text text-base leading-5 px-8 sm:px-9'>
      <div className="container mx-auto my-14 sm:my-16 lg:my-20 flex flex-col sm:flex-row justify-between gap-x-6 gap-y-10">
        <div className='flex flex-col gap-y-10 grow'>
          <div className='flex flex-col sm:flex-row justify-between gap-x-6 gap-y-10'>
            <div id='quick-links' className="flex flex-col flex-auto gap-y-8">
              <div className='text-lg font-semibold text-white'>Quick Links</div>
              <div className="flex flex-row sm:flex-col lg:flex-row gap-9">
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
                <div className="w-px h-auto sm:h-px sm:w-full lg:w-px lg:h-full bg-footer-text bg-opacity-30 sm:bg-opacity-70" />
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
            <div className="flex flex-col grow gap-y-8">
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
          </div>
          <div id='app-stores' className="hidden sm:flex flex-row justify-between gap-x-6 items-center max-w-xs">
            <div className="h-[41px] w-[136px] flex justify-center items-center bg-slate-900 bg-opacity-50 rounded-lg" >
              <Image
                height={25}
                src={googleButton}
                alt={'googleButton'}
              />
            </div>
            <div className="h-[41px] w-[136px] flex justify-center items-center bg-slate-900 bg-opacity-50 rounded-lg" >
              <Image
                height={25}
                src={appleButton}
                alt={'googleButton'}
              />
            </div>
          </div>
        </div>
        <div className='block sm:hidden h-px w-full bg-footer-text bg-opacity-30' />
        <div id='address' className="flex flex-col gap-y-8">
          <div className='hidden sm:block text-lg font-semibold text-white'>Contact</div>
          <div className='block sm:hidden text-lg font-semibold text-white'>Address</div>
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {addresses.map((address, index) => (
              <React.Fragment key={address.location}>
                {addresses.length - 1 === index ? <div className='hidden sm:block lg:hidden' /> : null}
                <div className='flex flex-col gap-y-4'>
                  <h5 className='font-medium text-lg'>{address.location}</h5>
                  <pre className='text-base font-normal font-sans whitespace-break-spaces'>{address.address.join('\n')}</pre>
                </div>
                <div className='hidden sm:flex lg:hidden flex-col gap-y-4'>
                  {address.contacts.map((contact) => (
                    <div key={`${address.location}-${contact.type}`} className=''>
                      <h6 className='text-lg font-medium'>{contact.type}</h6>
                      <p className='text-base font-normal'>{contact.data}</p>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
            {addresses.map((address) => (
              <React.Fragment key={`${address.location}-contacts`}>
                <div className='hidden lg:flex flex-col gap-y-4'>
                  {address.contacts.map((contact) => (
                    <div key={`${address.location}-${contact.type}`} className=''>
                      <h6 className='text-lg font-medium'>{contact.type}</h6>
                      <p className='text-base font-normal'>{contact.data}</p>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='block sm:hidden h-px w-full bg-footer-text bg-opacity-30' />
        <div id='contact' className="flex sm:hidden flex-col gap-y-8">
          <div className='block sm:hidden text-lg font-semibold text-white'>Contact</div>
          <div className='flex flex-col gap-y-4'>
            {contacts.map((contact) => (
              <div key={`contacts-${contact.type}-mobile`} className=''>
                <h6 className='text-lg font-medium'>{contact.type}</h6>
                <p className='text-base font-normal'>{contact.data}</p>
              </div>
            ))}
          </div>
        </div>
        <div id='app-stores' className="flex sm:hidden flex-row justify-between gap-x-6 items-center max-w-xs">
          <div className="h-[41px] w-[136px] flex justify-center items-center bg-slate-900 bg-opacity-50 rounded-lg" >
            <Image
              height={25}
              src={googleButton}
              alt={'googleButton'}
            />
          </div>
          <div className="h-[41px] w-[136px] flex justify-center items-center bg-slate-900 bg-opacity-50 rounded-lg" >
            <Image
              height={25}
              src={appleButton}
              alt={'googleButton'}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}