"use client"
import SummaryApi from '@/common'
import { useAppContext } from '@/context/appContext'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,

} from '@heroui/react'
import axios from 'axios'
import { toast } from 'sonner'


export default function UserAvatar() {
const {userDetail , setUserDetail} = useAppContext()
  const handleLogout = async () => {
    const { data } = await axios.get(SummaryApi.logoutUser.url)
    if (data.success) {
      toast.success(data.message)
      setUserDetail("")
    } else {
      toast.error(data.message)
    }
  }
  return (
    <Dropdown placement='bottom-start'>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={userDetail?.avatar ? userDetail?.avatar : "https://placehold.net/avatar-5.svg"} />
      </DropdownTrigger>
      <DropdownMenu aria-label='User Actions' variant='flat'>
        <DropdownItem key='profile' className='h-14 gap-2'>
          <p className='font-bold'>Signed in as</p>
          <p className='font-bold'>{userDetail?.name}</p>
        </DropdownItem>
        <DropdownItem key='settings'>Settings</DropdownItem>
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
