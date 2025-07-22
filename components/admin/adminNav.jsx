'use client'
import React, { useEffect } from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import './admin.css'
import { useAppContext } from '@/context/appContext'

const AdminNav = () => {
  const { dashboardOpen, setDashboardOpen } = useAppContext()

  return (
    <div class='topbar'>
      <div onClick={() => setDashboardOpen(!dashboardOpen)} class='toggle'>
        <RiMenu5Fill />
      </div>

      <div class='search'>
        <label>
          <input type='text' placeholder='Search here' />
          <CiSearch />
        </label>
      </div>

      <div class='user'>
        <img src='assets/imgs/customer01.jpg' alt='' />
      </div>
    </div>
  )
}

export default AdminNav
