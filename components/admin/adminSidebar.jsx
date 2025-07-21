'use client'
import { adminSidebarMenuItems } from '@/constance'
import { useAppContext } from '@/context/appContext'
import { Divider } from '@heroui/react'
import Link from 'next/link'
import { HiOutlineExternalLink } from "react-icons/hi";

const AdminSidebar = () => {
  const { userDetail, setUserDetail } = useAppContext()

  return (
    <div className='fixed left-0 w-[300px] h-full shadow-xl '>
       <div className='font-semibold'>My Account</div>
        <div className='text-sm flex items-center gap-2'>
          <span className='max-w-52 text-ellipsis line-clamp-1'>{userDetail?.name || userDetail?.mobile} <span className='text-medium text-red-600'>{userDetail?.role === "ADMIN" ? "(Admin)" : "(user)" }</span></span>
          <Link  href={"/dashboard/profile"} className='hover:text-primary-200'>
            <HiOutlineExternalLink size={15}/>
          </Link>
        </div>
        <Divider className='my-4' />

        <ul className='flex flex-col gap-2 w-full'>
          <li><Link>My Orders</Link></li>
          <li><Link>Save Address</Link></li>
          <li><Link>Logout</Link></li>
        </ul>
    </div>
  )
}

export default AdminSidebar
