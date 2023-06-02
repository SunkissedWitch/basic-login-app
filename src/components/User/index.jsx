import Image from 'next/image';
import { UserIcon } from '../Icons/UserIcon';

export const User = ({ user }) => {
  return (
    <div className='ms-auto flex flex-row px-8 py-2 justify-end items-center gap-x-4 text-slate-50'>
      <div className='rounded-full relative bg-slate-400 border-slate-950 w-[40px] h-[40px] flex justify-center items-center'>
        {
          user?.avatar
          ? <Image src={user.avatar} height={40} width={40} />
          : <UserIcon
            className='fill-yellow-400 opacity-80'
            width={24}
            height={24}
          />
        }
      </div>
      <div className='text-slate-100 font-semibold'>
        {user?.name}
      </div>
    </div>
  )
}
