"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import NoData from '@/components/shared/NoData'
import Loading from '@/components/shared/loading'
import UploadCategory from '@/components/admin/uploadCategory'
import Axios from '@/utils/axios'
import BackendApi from '@/common/api'

const page = () => {
        const { dashboardOpen } = useAppContext()
        const [loading,setLoading] = useState(false)
        const [categoryData,setCategoryData] = useState([])

        const fetchCategory = async()=>{
            try {
                setLoading(true)
                const response = await Axios({
                    ...BackendApi.get_Categories
                })
                const { data : responseData } = response
    
                if(responseData?.success){
                    setCategoryData(responseData.data)
                }
            } catch (error) {
                
            }finally{
                setLoading(false)
            }
        }
    
        useEffect(()=>{
            fetchCategory()
        },[])
    
  return (
        <div class={`main ${dashboardOpen && "active"}`}>
        <AdminNav />
        <section className='pt-2 border-t-1 border-s-slate-100 '>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
            <h2 className='font-semibold text-[1.2rem] text-[#2a2185]'>Category</h2>
           <UploadCategory fetchCategories={fetchCategory} />

        </div>
        {
            !categoryData[0] && !loading && (
                <NoData/>
            )
        }

<div className={`p-4 grid  gap-2 ${dashboardOpen ? "md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"}`}>
            {
                categoryData?.map((category,index)=>{
                    return(
                        <div className='category_card' key={category?._id}>
                            <img 
                                alt={category?.name}
                                src={category?.image}
                                className='w-full object-scale-down'
                            />
                            <div className='items-center flex gap-2 justify-between py-3'>
                                <button
                                //  onClick={()=>{
                                //     setOpenEdit(true)
                                //     setEditData(category)
                                // }}
                                 className='flex-1 bg-green-100 hover:bg-green-200 text-green-600 font-medium py-1 rounded'>
                                    Edit
                                </button>
                                <button
                                //  onClick={()=>{
                                //     setOpenConfirmBoxDelete(true)
                                //     setDeleteCategory(category)
                                // }}
                                 className='flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-1 rounded'>
                                    Delete
                                </button>
                            </div>
                            <div className='w-full  text-center pb-2 flex items-center justify-evenly'>
                                <h3 className='text-lg'>name:</h3>
                                <h3 className='text-lg '>{category?.name}</h3>
                            </div>
                        </div>
                
                

                    )
                })
            }
        </div>

        {
            loading && (
                <Loading/>
            )
        }
        </section>
        
      </div>
  )
}

export default page