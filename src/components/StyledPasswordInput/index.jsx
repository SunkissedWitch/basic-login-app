"use client";

import React, { forwardRef, useState } from 'react'
import { LockIcon } from '../Icons/LockIcon';
import { UnlockIcon } from '../Icons/UnlockIcon';

export const StyledPasswordInput = forwardRef(({ register, id, required, rules, error, ...props }, ref) => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible(visibility => !visibility)

  return (
    <>
    <div className="mt-2 focus-visible:outline-none relative group/control">
      <span className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer border-l border-neutral-300 group-hover/control:border-neutral-400 focus-visible:border-slate-500 transition-colors" onClick={toggleVisible}>
        { visible
          ? <UnlockIcon className="h-5 w-5 fill-gray-300 hover:fill-gray-400 transition-colors" />
          : <LockIcon className="h-5 w-5 fill-gray-300 hover:fill-gray-400 transition-colors" />
        }
      </span>
      <input
        {...register(id, { required, ref, ...rules })}
        id={id}
        {...props}
        type={visible ? 'text' : 'password'}
        className="block w-full rounded-md bg-white border-solid border border-neutral-300 py-2 pr-9 pl-2 text-gray-900 shadow-sm placeholder:text-gray-400 transition-colors group-hover/control:border-neutral-400 ring-0 sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-none group-focus-visible/control:border-slate-500"
        />
    </div>
    <p className='text-red-500 text-sm mt-0.5'>{error?.message}</p>
    </>
  )
})
