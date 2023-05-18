import Image from 'next/image';
import userIcon from '../../../public/user-solid.svg';

export const User = ({ user }) => {
  return (
    <div className='ms-auto flex flex-row px-8 py-2 justify-end items-center gap-x-4 text-slate-50'>
      <div className='rounded-full relative bg-slate-400 border-slate-950 w-[40px] h-[40px] flex justify-center items-center'>
        {
          user?.avatar
          ? <Image src={user.avatar} height={40} width={40} />
          : <Image
            src={userIcon}
            alt='U'
            className='dark:invert'
            width={24}
            height={24}
            priority
          />
        }
      </div>
      <div className='text-slate-100 font-semibold'>
        {user?.name}
      </div>
    </div>
  )
}
