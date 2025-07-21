'use client'
import { adminSidebarMenuItems } from '@/constance'
import { useAppContext } from '@/context/appContext'
import { Divider } from '@heroui/react'
import Link from 'next/link'
import { HiOutlineExternalLink } from "react-icons/hi";

const AdminSidebar = () => {
  const { userDetail, setUserDetail } = useAppContext()

  return (
    <div className='fixed left-0 w-[250px] h-full shadow-xl '>
       <div className='font-semibold'>My Account</div>
        <div className='text-sm flex items-center gap-2'>
          <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name || user.mobile} <span className='text-medium text-red-600'>{user.role === "ADMIN" ? "(Admin)" : "" }</span></span>
          <Link  href={"/dashboard/profile"} className='hover:text-primary-200'>
            <HiOutlineExternalLink size={15}/>
          </Link>
        </div>
        <Divider className='my-4' />
    </div>
  )
}

export default AdminSidebar
