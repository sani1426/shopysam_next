
import { Link } from 'react-router-dom'

import UserAvatar from '../UI/userAvatar'
import { Input } from '@heroui/react'

import { CiSearch } from 'react-icons/ci'
import Toggle from '../UI/toggle'
import { PiUser } from 'react-icons/pi'
import SidebarMenu from '../UI/SidebarMenu'
import CartSidebar from '../cart/CartSidebar'
import { useAppContext } from '../../../context/appContext'


const Navbar = () => {
  const {userDetail} = useAppContext()
  return (
    <nav className='w-full flex flex-col fixed nav-clr shadow lg:top-8  py-6 px-3  lg:px-12  z-50 dark:shadow-gray-600'>
      
      <div className='flex items-center justify-between w-full gap-6'>
        <div className='flex items-center gap-6'>
          <SidebarMenu />

          <Link
            to='/'
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
            <Link to='/login' className='text-3xl'>
              <PiUser />
            </Link>
          )}
        </div>
      </div>

    </nav>
  

  )
}

export default Navbar
