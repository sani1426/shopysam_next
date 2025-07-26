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
import { Table,TableHeader,TableColumn,TableBody,TableRow,TableCell} from '@heroui/react'

const page = () => {
  const { dashboardOpen } = useAppContext()
  const { allCategory}=useAppContext()
  const [loading, setLoading] = useState(false)
  const [subCategoryData, setSubCategoryData] = useState()
  // const [openEdit, setOpenEdit] = useState(false)
  // const [ediTableCellata, setEdiTableCellata] = useState({
  //   name: '',
  //   image: '',
  // })
  // const [openConfimBoxDelete, setOpenConfirmBoxDelete] = useState(false)
  // const [deleteCategory, seTableCelleleteCategory] = useState({
  //   _id: '',
  // })

  const fetchSubCategory = async()=>{
    try {
        setLoading(true)
        const response = await Axios({
          ...BackendApi.get_SubCategories
        })
        const { data : responseData } = response

        if(responseData?.success){
          setSubCategoryData(responseData?.data)
          console.log(subCategoryData)
        }
    } catch (error) {
       toast.error('error')
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchSubCategory()
  },[])

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


  return (
    <div class={`main ${dashboardOpen && 'active'}`}>
      <AdminNav />
      <section className='pt-2 border-t-1 border-s-slate-100 '>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
          <h2 className='font-semibold text-[1.2rem] text-[#2a2185]'>
            Sub Category
          </h2>
          <UploadSubCategory allCategory={allCategory} fetchSubCategory={fetchSubCategory} />
        </div>
        {/* { !loading && <NoData />} */}

        <div className='p-2'>
          <Table color='primary' isStriped className='w-full py-0 px-0 '>
            <TableHeader className='bg-black text-white'>
     
                <TableColumn className='text-center'>Sr.No</TableColumn>
                <TableColumn className='border whitespace-nowrap text-center'>Name</TableColumn>
                <TableColumn className='border whitespace-nowrap text-center'>Image</TableColumn>
                <TableColumn className='border whitespace-nowrap text-center'>Category</TableColumn>
                <TableColumn className='border whitespace-nowrap text-center'>Action</TableColumn>
           
            </TableHeader>
            <TableBody>
              {subCategoryData?.map((sub, index) => (
                <TableRow key={index}>
                  <TableCell className='border px-2 py-1 font-semibold text-xl text-center'>{index + 1}</TableCell>
                  <TableCell className='border px-2 py-1 whitespace-nowrap text-center'>
                    {sub?.name}
                  </TableCell>
                  <TableCell className='border px-2 py-1 whitespace-nowrap'>
                    <div className='w-full flex justify-center items-center'>
                      <img
                        src={sub?.image}
                        alt={sub?.name}
                        className='w-12 h-12 cursor-pointer'
                        // onClick={()=>{
                        //   setImageURL(row.original.image)
                        // }}
                      />
                    </div>
                  </TableCell>
                  <TableCell className='border text-center px-2 py-1 whitespace-nowrap'>
                    {sub?.category?.map((_, index) => (
                      <p key={index} className=' px-1 inline-block'>
                        {_?.name}
                      </p>
                    ))}
                  </TableCell>
                  <TableCell className=' px-2 py-1 whitespace-nowrap'>
                    <div className='flex items-center justify-center gap-3'>
                      <button
                        //  onClick={()=>{
                        //     setOpenEdit(true)
                        //     setEdiTableCellata(row.original)
                        // }}
                        className='p-2 bg-green-100 rounded-full hover:text-green-600'
                      >
                        <HiPencil size={20} />
                      </button>
                      <button
                        // onClick={()=>{
                        //   setOpenDeleteConfirmBox(true)
                        //   seTableCelleleteSubCategory(row.original)
                        // }}
                        className='p-2 bg-red-100 rounded-full text-red-500 hover:text-red-600'
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {loading && <Loading />}

        {/* {openEdit && (
          <EditCategory
            data={ediTableCellata}
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
