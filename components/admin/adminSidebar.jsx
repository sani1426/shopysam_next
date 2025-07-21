'use client'
import { adminSidebarMenuItems } from '@/constance'
import { useAppContext } from '@/context/appContext'
import { Divider } from '@heroui/react'
import Link from 'next/link'
import { HiOutlineExternalLink } from "react-icons/hi";

const AdminSidebar = () => {
  const { userDetail, setUserDetail } = useAppContext()

  return (
    <div className='fixed left-0 w-[300px] h-full shadow-xl py-4 pl-3'>
       <div className='font-semibold'>My Account</div>
        <div className='text-sm flex items-center gap-2'>
          <span className='max-w-52 text-ellipsis line-clamp-1'>{userDetail?.name} <span className='text-medium text-red-600'>{userDetail?.role === "ADMIN" ? "(Admin)" : "(user)" }</span></span>
          <Link  href={"/dashboard/profile"} className='hover:text-primary-200'>
            <HiOutlineExternalLink size={15}/>
          </Link>
        </div>
        <Divider className='my-4' />

        <ul className='flex flex-col gap-2 w-full'>
          <li><Link href="">My Orders</Link></li>
          <li><Link href="">Save Address</Link></li>
          <li><button >Logout</button></li>
        </ul>
        <Divider className='my-6' />
        <div className='text-sm grid gap-1'>
        {
          userDetail?.role === 'User' && (
            <>
            <Link  href={"/dashboard/category"} className='px-2 hover:bg-orange-200 py-1'>Category</Link>

            <Link href={"/dashboard/subcategory"} className='px-2 hover:bg-orange-200 py-1'>Sub Category</Link>
        
            <Link  href={"/dashboard/upload-product"} className='px-2 hover:bg-orange-200 py-1'>Upload Product</Link>

            <Link  href={"/dashboard/product"} className='px-2 hover:bg-orange-200 py-1'>Product</Link>
            </>

          )
        }
      
          </div>
    </div>
  )
}

export default AdminSidebar
