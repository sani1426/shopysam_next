'use client'
import { adminSidebarMenuItems } from '@/constance'
import { useAppContext } from '@/context/appContext'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  User
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
        className=' '
      >
        <DrawerContent>
          <>
            <DrawerHeader className=' '>
            <User
      avatarProps={{
        src:userDetail?.avatar
      }}
      description={userDetail?.email}
      name={userDetail?.name}
      />
            </DrawerHeader>

            <DrawerBody className='mt-12'>
              {adminSidebarMenuItems.map((item) => {
                return (
                  <Link
                    className='flex items-center gap-2 w-full py-2 hover:bg-gray-200 pl-1 rounded-lg transition-all'
                    key={item?.id}
                    href={item?.path}
                  >
                    <span className='text-2xl'>{item?.icon}</span>
                    <span className='text-lg'>{item?.label}</span>
                  </Link>
                )
              })}
            </DrawerBody>
            <DrawerFooter className='flex items-center overflow-hidden '>
            
            </DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default AdminSidebar
