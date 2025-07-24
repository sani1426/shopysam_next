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
        <section>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
            <h2 className='font-semibold'>Category</h2>
            <button  className='text-sm border border-orange-400 hover:bg-orange-400 px-3 py-1 rounded'>Add Category</button>
        </div>
        </section>
        
      </div>
  )
}

export default page