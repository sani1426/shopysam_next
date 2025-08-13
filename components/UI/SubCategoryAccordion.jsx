'use client'

import AxiosToastError from '@/utils/axiosToastError'
import { useEffect, useState } from 'react'
import BackendApi, { BASE_URL } from '@/common/api'
import Loading from '../shared/loading'
import Link from 'next/link'

const SubCategoryAccordion = ({ categoryId }) => {
  const [loading, setLoading] = useState(false)
  const [subCategoryData, setSubCategoryData] = useState([])

  const fetchSubCategory = async () => {
    try {
      setLoading(true)
      const {data} = await axios.post('https://shopysam-back.onrender.com/api/subcategory/by-category-id',{
        categoryId: categoryId
      })
    

      if (data?.success) {
        setSubCategoryData(data?.data)
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubCategory()
  }, [])
  return (
    <div className='flex flex-col gap-1'>
      {loading && <Loading />}

      {subCategoryData?.map((item) => (
        <Link
          key={item?._id}
          className='category_link'
          href={`/category/${item?.name}`}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  )
}

export default SubCategoryAccordion
