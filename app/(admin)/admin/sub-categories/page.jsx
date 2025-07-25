'use client'
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import NoData from '@/components/shared/NoData'
import Loading from '@/components/shared/loading'
import Axios from '@/utils/axios'
import BackendApi from '@/common/api'
import { toast } from 'sonner'
import CofirmBox from '@/components/UI/ConfirmBox'
import UploadSubCategory from '@/components/admin/subCategory.jsx/UploadSubCategory'

const page = () => {
  const { dashboardOpen } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [categoryData, setCategoryData] = useState([])
  const [openEdit, setOpenEdit] = useState(false)
  const [editData, setEditData] = useState({
    name: '',
    image: '',
  })
  const [openConfimBoxDelete, setOpenConfirmBoxDelete] = useState(false)
  const [deleteCategory, setDeleteCategory] = useState({
    _id: '',
  })

  const fetchCategory = async () => {
    try {
      setLoading(true)
      const response = await Axios({
        ...BackendApi.get_Categories,
      })
      const { data: responseData } = response

      if (responseData?.success) {
        setCategoryData(responseData.data)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  const handleDeleteCategory = async () => {
    try {
      const response = await Axios({
        ...BackendApi.delete_Category,
        data: deleteCategory,
      })

      const { data: responseData } = response

      if (responseData.success) {
        toast.success(responseData.message)
        fetchCategory()
        setOpenConfirmBoxDelete(false)
      }
    } catch (error) {
      toast.error('error')
    }
  }

  return (
    <div class={`main ${dashboardOpen && 'active'}`}>
      <AdminNav />
      <section className='pt-2 border-t-1 border-s-slate-100 '>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
          <h2 className='font-semibold text-[1.2rem] text-[#2a2185]'>
           Sub Category
          </h2>
          <UploadSubCategory  />
        </div>
        {!categoryData[0] && !loading && <NoData />}

        <div
          className={`p-4 grid  gap-2 ${
            dashboardOpen
              ? 'md:grid-cols-4 lg:grid-cols-5'
              : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'
          }`}
        >
          {categoryData?.map((category, index) => {
            return (
              <div className='category_card' key={category?._id}>
                <img
                  alt={category?.name}
                  src={category?.image}
                  className='w-full object-scale-down'
                />
                <div className='items-center flex gap-2 justify-between py-3'>
                  <button
                    onClick={() => {
                      setOpenEdit(true)
                      setEditData(category)
                    }}
                    className='flex-1 bg-green-100 hover:bg-green-200 text-green-600 font-medium py-1 rounded'
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setOpenConfirmBoxDelete(true)
                      setDeleteCategory(category)
                    }}
                    className='flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-1 rounded'
                  >
                    Delete
                  </button>
                </div>
                <div className='w-full  text-center pb-2 flex items-center justify-evenly'>
                  <h3 className='text-lg'>name:</h3>
                  <h3 className='text-lg '>{category?.name}</h3>
                </div>
              </div>
            )
          })}
        </div>

        {loading && <Loading />}

        {openEdit && (
          <EditCategory
            data={editData}
            close={() => setOpenEdit(false)}
            fetchData={fetchCategory}
          />
        )}

        {openConfimBoxDelete && (
          <CofirmBox
            close={() => setOpenConfirmBoxDelete(false)}
            cancel={() => setOpenConfirmBoxDelete(false)}
            confirm={handleDeleteCategory}
          />
        )}
      </section>
    </div>
  )
}

export default page
