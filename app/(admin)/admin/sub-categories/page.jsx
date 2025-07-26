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
import { MdDelete } from 'react-icons/md'
import { HiPencil } from 'react-icons/hi'

const page = () => {
  const { dashboardOpen } = useAppContext()
  const { allCategory ,setAllCategory}=useState([])
  const [loading, setLoading] = useState(false)
  const [subCategoryData, setSubCategoryData] = useState([])
  // const [openEdit, setOpenEdit] = useState(false)
  // const [editData, setEditData] = useState({
  //   name: '',
  //   image: '',
  // })
  // const [openConfimBoxDelete, setOpenConfirmBoxDelete] = useState(false)
  // const [deleteCategory, setDeleteCategory] = useState({
  //   _id: '',
  // })

  // const fetchSubCategory = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await Axios({
  //       ...BackendApi.get_Categories,
  //     })
  //     const { data: responseData } = response

  //     if (responseData?.success) {
  //       setCategoryData(responseData.data)
  //     }
  //   } catch (error) {
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchCategory()
  // }, [])

  // const handleDeleteSubCategory = async () => {
  //   try {
  //     const response = await Axios({
  //       ...BackendApi.delete_Category,
  //       data: deleteCategory,
  //     })

  //     const { data: responseData } = response

  //     if (responseData.success) {
  //       toast.success(responseData.message)
  //       fetchCategory()
  //       setOpenConfirmBoxDelete(false)
  //     }
  //   } catch (error) {
  //     toast.error('error')
  //   }
  // }

  const fetchCategory = async () => {
 
    const response = await Axios({
      ...BackendApi.get_Categories,
    })
    const { data: responseData } = response

    if (responseData?.success) {
      setAllCategory(responseData.data)
    }

}

useEffect(() => {
  fetchCategory()
}, [])
  return (
    <div class={`main ${dashboardOpen && 'active'}`}>
      <AdminNav />
      <section className='pt-2 border-t-1 border-s-slate-100 '>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
          <h2 className='font-semibold text-[1.2rem] text-[#2a2185]'>
            Sub Category
          </h2>
          <UploadSubCategory allCategory={allCategory} />
        </div>
        {subCategoryData[0] && !loading && <NoData />}

        <div className='p-2'>
          <table className='w-full py-0 px-0 border-collapse'>
            <thead className='bg-black text-white'>
              <tr>
                <th>Sr.No</th>
                <th className='border whitespace-nowrap'>Name</th>
                <th className='border whitespace-nowrap'>Image</th>
                <th className='border whitespace-nowrap'>Category</th>
                <th className='border whitespace-nowrap'>Action</th>
              </tr>
            </thead>
            <tbody>
              {subCategoryData?.map((sub, index) => (
                <tr key={index}>
                  <td className='border px-2 py-1 '>{index + 1}</td>
                  <td className='border px-2 py-1 whitespace-nowrap'>
                    {sub?.name}
                  </td>
                  <td className='border px-2 py-1 whitespace-nowrap'>
                    <div className='flex justify-center items-center'>
                      <img
                        src={sub?.image}
                        alt={sub?.name}
                        className='w-8 h-8 cursor-pointer'
                        // onClick={()=>{
                        //   setImageURL(row.original.image)
                        // }}
                      />
                    </div>
                  </td>
                  <td className='border px-2 py-1 whitespace-nowrap'>
                    {sub?.category?.map((_, index) => (
                      <p key={index} className='shadow-md px-1 inline-block'>
                        {_}
                      </p>
                    ))}
                  </td>
                  <td className='border px-2 py-1 whitespace-nowrap'>
                    <div className='flex items-center justify-center gap-3'>
                      <button
                        //  onClick={()=>{
                        //     setOpenEdit(true)
                        //     setEditData(row.original)
                        // }}
                        className='p-2 bg-green-100 rounded-full hover:text-green-600'
                      >
                        <HiPencil size={20} />
                      </button>
                      <button
                        // onClick={()=>{
                        //   setOpenDeleteConfirmBox(true)
                        //   setDeleteSubCategory(row.original)
                        // }}
                        className='p-2 bg-red-100 rounded-full text-red-500 hover:text-red-600'
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {loading && <Loading />}

        {/* {openEdit && (
          <EditCategory
            data={editData}
            close={() => setOpenEdit(false)}
            fetchData={fetchCategory}
          />
        )} */}

        {/* {openConfimBoxDelete && (
          <CofirmBox
            close={() => setOpenConfirmBoxDelete(false)}
            cancel={() => setOpenConfirmBoxDelete(false)}
            confirm={handleDeleteCategory}
          />
        )} */}
      </section>
    </div>
  )
}

export default page
