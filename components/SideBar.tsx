import React from 'react'
import Image from 'next/image'
const SideBar = () => {
  return (
    <div className='w-[287px] h-[1090px] bg-gradient-linear-custom float-left'>
          <div className='ml-[33.94px] pt-[55.99px] w-[227.06px] h-[45.01]' >
            <div className='flex'>
            <Image src="/image.png" alt='Logo' width={37.07} height={45.01}/>
            <div className='text-[32px]  text-white font-bold pl-[13px]'>Dashboard</div>
            </div>

            <div className='text-white pt-[55.99px]'>
                <div className='flex mt-[18px] '> <Image src="/home.png" alt='Logo' width={22} height={20.77}/><div className='ml-[17px] font-bold'>Home</div></div>
                <div className='flex mt-[18px] '> <Image src="/Profile.png" alt='Logo' width={22} height={15.4}/><div className='ml-[17px] font-bold'>Profile</div></div>
                <div className='flex mt-[18px] '><Image src="/Messages.png" alt='Logo' width={22} height={22}/><div className='ml-[17px] font-bold'>Messages</div></div>
                <div className='flex mt-[18px] '><Image src="/History.png" alt='Logo' width={22} height={22}/><div className='ml-[17px] font-bold'>History</div></div>
                <div className='flex mt-[18px] '><Image src="/Tasks.png" alt='Tasks' width={22} height={24}/><div className='ml-[17px] font-bold'>Tasks</div></div>
                <div className='flex mt-[18px] '><Image src="/Communities.png" alt='Communities' width={22} height={19}/><div className='ml-[17px] font-bold'>Communities</div></div>
            </div>

           
            <div className='text-white pt-[55.99px]'>
                <div className='flex mt-[18px] '> <Image src="/Setting.png" alt='Setting' width={22} height={20.77}/><div className='ml-[17px] font-bold'>Setting</div></div>
                <div className='flex mt-[18px] '> <Image src="/Support.png" alt='Support' width={22} height={15.4}/><div className='ml-[17px] font-bold'>Support</div></div>
                <div className='flex mt-[18px] '><Image src="/Privacy.png" alt='Privacy' width={22} height={22}/><div className='ml-[17px] font-bold'>Privacy</div></div>
            </div>
          </div>
          
    </div>
  )
}

export default SideBar