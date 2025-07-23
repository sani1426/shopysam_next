'use client'

import { FiMenu } from "react-icons/fi";
import { CiSearch } from 'react-icons/ci'
import './admin.css'
import { useAppContext } from '@/context/appContext'

const AdminNav = () => {
  const { dashboardOpen, setDashboardOpen,userDetail } = useAppContext()

  return (
    <div className='topbar'>
      <div onClick={() => setDashboardOpen(!dashboardOpen)} className='toggle'>
        <FiMenu />
      </div>
      <div className='search'>
        <label>
          <input type='text' placeholder='Search here' />
          <CiSearch className='absolute top-0 left-[10px] text-[1.2rem]' />
        </label>
      </div>

      <div className='user'>
        <img src={userDetail?.avatar} alt={userDetail?.name}/>
      </div>
    </div>
  )
}

export default AdminNav
