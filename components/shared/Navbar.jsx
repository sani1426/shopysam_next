"use client"
import { useAppContext } from '@/context/appContext'
import { Input } from '@heroui/react'
import { CiSearch } from 'react-icons/ci'
import { PiUser } from 'react-icons/pi'
import SidebarMenu from '../UI/SidebarMenu'
import Link from 'next/link'
import Toggle from '../UI/toggle'
import CartSidebar from '../cart/CartSidebar'
import UserAvatar from '../UI/userAvatar'
import { useEffect } from 'react'
import axios from 'axios'
import SummaryApi from '@/common'


const Navbar = () => {
  const {userDetail,setDigitals, setClothes} = useAppContext()
  const fetchDigitalCategories = async () => {
    const { data } = await axios.get(SummaryApi.getDigitalsCategory.url)
    const responseData = await axios.get(SummaryApi.getClothCategory.url)
    setDigitals(data?.data)
    setClothes(responseData?.data?.data)
  }
 
  useEffect(() => {
    fetchDigitalCategories()
  }, [])

  return (
    <nav className='w-full flex flex-col fixed nav-clr shadow lg:top-8  py-6 px-3  lg:px-12  z-50 dark:shadow-gray-600'>
      
      <div className='flex items-center justify-between w-full gap-6'>
        <div className='flex items-center gap-6'>
          <SidebarMenu />

          <Link
            href='/'
            className='font-bold text-4xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'
          >
            Shopysam
          </Link>
        </div>
        <div className=' w-full flex-wrap md:flex-nowrap  gap-1 justify-center hidden md:flex'>
          <Input
            // value={formData.email}
            // onChange={handleOnChange}
            size='lg'
            radius='full'
            variant='faded'
            placeholder='type to search...'
            type='text'
            className='w-full text-default-70'
            endContent={
              <CiSearch className='text-3xl text-default-700 pointer-events-none flex-shrink-0' />
            }
          />
        </div>

        <div className='flex items-center gap-4 '>
          <button className='text-3xl md:hidden'>
            <CiSearch />
          </button>
          <Toggle />
          <CartSidebar />
          {userDetail ? (
            <UserAvatar  />
          ) : (
            <Link href='/login' className='text-3xl'>
              <PiUser />
            </Link>
          )}
        </div>
      </div>

    </nav>
  

  )
}

export default Navbar
