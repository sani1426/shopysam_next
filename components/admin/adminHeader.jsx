import {Navbar ,NavbarContent,NavbarItem} from '@heroui/react'
import { Link } from 'react-router-dom'
import { RiMenu5Fill } from 'react-icons/ri'

const AdminHeader = () => {

  return (
    <div className='w-full '>
      <Navbar shouldHideOnScroll className='w-[500px] top-8 fixed mx-auto rounded-full shadow-lg shadow-secondary-400 bg-secondary-50'>
     <div className='flex items-center gap-2'>
      <button
          className='text-3xl px-2 py-1 border-2  border-black dark:border-white rounded-xl md:hidden '
        >
          <RiMenu5Fill />
        </button>
        <Link
            to='/'
            className='font-bold text-2xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'
          >
            Shopysam
          </Link>
     </div>

<NavbarContent justify='center'>
<NavbarItem>
  <Link>All User</Link>
</NavbarItem>
<NavbarItem>
  <Link>Products</Link>
</NavbarItem>
<NavbarItem>
  <Link>Orders</Link>
</NavbarItem>
</NavbarContent>
      </Navbar>
    </div>
  )
}

export default AdminHeader