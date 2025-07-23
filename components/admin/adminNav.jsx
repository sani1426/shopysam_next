'use client'

import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import './admin.css'
import { useAppContext } from '@/context/appContext'

const AdminNav = () => {
  const { dashboardOpen, setDashboardOpen,userDetail } = useAppContext()

  return (
    <div className='topbar'>
      <div onClick={() => setDashboardOpen(!dashboardOpen)} className='toggle'>
        <IoMenuOutline />
      </div>
      <div className='search'>
        <label>
          <input type='text' placeholder='Search here' />
          <IoSearchOutline className='absolute top-0 left-[10px] text-[1.2rem]' />
        </label>
      </div>

      <div className='user'>
        <img src={userDetail?.avatar} alt={userDetail?.name}/>
      </div>
    </div>
  )
}

export default AdminNav
