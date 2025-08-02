'use client'
import SummaryApi from '@/common'
import { useAppContext } from '@/context/appContext'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
Chip
} from '@heroui/react'
import axios from 'axios'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import { toast } from 'sonner'

export default function UserAvatar() {
  const { userDetail, setUserDetail } = useAppContext()
  const handleLogout = async () => {
    const { data } = await axios.get(SummaryApi.logoutUser.url)
    if (data.success) {
      toast.success(data.message)
      setUserDetail('')
    } else {
      toast.error(data.message)
    }
  }

  return (
    <Dropdown placement='bottom-start'>
      <DropdownTrigger>
        <div className='flex items-center gap-2 cursor-pointer'>
          <img
            src={
              userDetail?.avatar
                ? userDetail?.avatar
                : 'https://placehold.net/avatar-5.svg'
            }
            alt=''
            className='w-8 h-8 rounded-full'
          />
          <span className='text-xl'><FaAngleDown /></span>
        </div>

      </DropdownTrigger>
      <DropdownMenu aria-label='User Actions' variant='flat'>
        <DropdownItem key='profile' className='h-14 flex items-center justify-between px-1'>
          <p className='font-bold'>{userDetail?.name}</p>
          <Chip
            classNames={{
              base: 'bg-linear-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
              content: 'drop-shadow-xs shadow-black text-white',
            }}
            size='sm'
            variant='shadow'
          >
            {userDetail?.role}
          </Chip>

        </DropdownItem>
        <DropdownItem key='profile'>
          <Link href='/profile'>Profile</Link>
        </DropdownItem>
        {userDetail?.role === 'Admin' && (
          <DropdownItem key='dashboard'>
            <Link className='text-blue-400' href='/admin/dashboard'>Admin Dashboard</Link>
          </DropdownItem>
        )}
        <DropdownItem key='orders'>Orders</DropdownItem>
        <DropdownItem key='analytics'>Analytics</DropdownItem>
        <DropdownItem key='system'>System</DropdownItem>
        <DropdownItem onClick={handleLogout} key='logout' color='danger'>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
