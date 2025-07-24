"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '@/common'

const page = () => {
        const { dashboardOpen } = useAppContext()
  return (
        <div class={`main ${dashboardOpen && "active"}`}>
        <AdminNav />
        
      </div>
  )
}

export default page