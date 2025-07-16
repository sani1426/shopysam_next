"use client"
import { useAppContext } from '@/context/appContext'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,

} from '@heroui/react'
import Link from 'next/link'


const AdminSidebar = () => {
  const { userDetail, setUserDetail } = useAppContext()

  return (
    <>
      <Drawer
      isDismissable='false'
        hideCloseButton='true'
        placement='left'
        defaultOpen='true'
        backdrop='transparent'
        size='xs'
        className='hidden md:block'

      >
        <DrawerContent>
          <>
            <DrawerHeader className='flex flex-col gap-1 border-b-2 py-8'>
              <Link
                href='/'
                className='font-bold text-3xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent '
              >
                Shopysam
              </Link>
            </DrawerHeader>

            <DrawerBody className='mt-12'>
              {adminSidebarMenuItems.map((item) => {
                return (
                  <Link
                    className='flex items-center gap-2 w-full py-2 hover:bg-gray-200 pl-1 rounded-lg transition-all'
                    key={item?.id}
                    href={item?.path}
                  >
                    <span className='text-4xl'>{item?.icon}</span>
                    <span className='text-xl'>{item?.label}</span>
                  </Link>
                )
              })}
            </DrawerBody>
            <DrawerFooter className='flex items-center overflow-hidden '>
              <div className='w-full  flex items-center gap-2 absolute bottom-5 pl-10 overflow-hidden border-t-2 pt-4'>
                <img
                className='w-16 h-16'
                  src={
                    userDetail?.gender === 'Men'
                      ? 'https://avatar.iran.liara.run/public/boy'
                      : 'https://avatar.iran.liara.run/public/girl'
                  }
                  alt=''
                />
                <div>

                <h1 className='text-xl'>{userDetail?.name}</h1>
                <h2 className='text-sm'>{userDetail?.email}</h2>
                </div>
             
              </div>
            </DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default AdminSidebar
