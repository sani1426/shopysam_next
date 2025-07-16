import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
} from '@heroui/react'
import { RiMenu5Fill } from 'react-icons/ri'
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaShirt } from "react-icons/fa6";
import { FiPhoneCall } from 'react-icons/fi'
import { LiaBoxSolid } from 'react-icons/lia'

import { MdOutlineWatchLater } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from 'next/link';

const SidebarMenu = () => {
  return (
    <Dropdown closeOnSelect={false} backdrop='opaque' showArrow>
      <DropdownTrigger>
        <button
          className='text-3xl px-2 py-1 border-2  border-black dark:border-white rounded-xl '
          color=''
          variant='bordered'
        >
          <RiMenu5Fill />
        </button>
      </DropdownTrigger>

      <DropdownMenu variant='faded' itemClasses={{ base: 'gap-4' }}>
        <DropdownSection showDivider>
          <DropdownItem
            startContent={
              <FaHome className='text-3xl text-red-600' />
            }
          >
            <Link className='text-xl' href='/'>
              Home
            </Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownItem
            startContent={
              <FaShirt className='text-3xl text-blue-600' />
            }
          >
            <Link className='text-xl' href='/fashion'>
              Fashion
            </Link>
          </DropdownItem>
        <DropdownSection showDivider>
          <DropdownItem
            startContent={
              <LuLayoutDashboard className='text-3xl text-purple-600' />
            }
          >
            <Link className='text-xl' href='/dashboard'>
              Dashboard
            </Link>
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          startContent={<MdOutlineWatchLater className='text-3xl text-orange-600' />}
        >
          <Link className='text-xl' href='/new-arrivals'>
            New Arrivals
          </Link>
        </DropdownItem>
        <DropdownItem
          startContent={<FiPhoneCall className='text-3xl text-yellow-600' />}
        >
          <Link className='text-xl' href='/call'>
            Call Us
          </Link>
        </DropdownItem>
        <DropdownItem
          startContent={<LiaBoxSolid className='text-4xl text-green-600' />}
        >
          <Link className='text-xl' href='/about'>
            About Us
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default SidebarMenu
