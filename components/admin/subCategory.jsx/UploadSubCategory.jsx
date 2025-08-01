'use client'

import uploadImage from '@/utils/UploadImage'
import Axios from '@/utils/axios'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@heroui/react'
import { useEffect, useState } from 'react'
import BackendApi from '@/common/api'
import { toast } from 'sonner'
import { IoClose } from 'react-icons/io5'

const UploadSubCategory = ({ allCategory,fetchSubCategory }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
 
  const [subCategoryData, setSubCategoryData] = useState({
    name: '',
    image: '',
    category: [],
  })
 
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target

    setSubCategoryData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }
  const handleUploadSubCategoryImage = async (e) => {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const response = await uploadImage(file)
    const { data: ImageResponse } = response

    setSubCategoryData((preve) => {
      return {
        ...preve,
        image: ImageResponse.data.url,
      }
    })
  }
  const handleRemoveCategorySelected = (categoryId) => {
    const index = subCategoryData.category.findIndex(
      (el) => el._id === categoryId
    )
    subCategoryData.category.splice(index, 1)
    setSubCategoryData((preve) => {
      return {
        ...preve,
      }
    })
  }

  const handleSubmitSubCategory = async (e) => {
    e.preventDefault()

    try {
        const response = await Axios({
            ...BackendApi.upload_SubCategory,
            data : subCategoryData
        })

        const { data : responseData } = response

        console.log("responseData",responseData)
        if(responseData?.success){
            toast.success(responseData?.message)
            fetchSubCategory()
            onClose()
        }

    } catch (error) {
        toast.error('error')
    }
  }

  return (
    <>
      <button
        onClick={onOpen}
        className=' border border-[#2a2185] text-[#2a2185] hover:bg-blue-900 hover:text-white px-4 py-2 rounded-lg cursor-pointer'
      >
        Add Sub Category
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Add Sub Category
              </ModalHeader>
              <ModalBody>
                <form
                  className='my-3 grid gap-3'
                  onSubmit={handleSubmitSubCategory}
                >
                  <div className='grid gap-1'>
                    <label htmlFor='name'>Name</label>
                    <input
                      id='name'
                      name='name'
                      value={subCategoryData?.name}
                      onChange={handleChange}
                      className='p-3 bg-blue-50 border outline-none focus-within:border-primary-200 rounded '
                    />
                  </div>
                  <div className='grid gap-1'>
                    <p>Image</p>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
                      <div className='border h-36 w-full lg:w-36 bg-blue-50 flex items-center justify-center'>
                        {!subCategoryData?.image ? (
                          <p className='text-sm text-neutral-400'>No Image</p>
                        ) : (
                          <img
                            alt='subCategory'
                            src={subCategoryData?.image}
                            className='w-full h-full object-scale-down'
                          />
                        )}
                      </div>
                      <label htmlFor='uploadSubCategoryImage'>
                        <div className='px-4 py-1 border border-primary-100 text-primary-200 rounded hover:bg-primary-200 hover:text-neutral-900 cursor-pointer  '>
                          Upload Image
                        </div>
                        <input
                          type='file'
                          id='uploadSubCategoryImage'
                          className='hidden'
                          onChange={handleUploadSubCategoryImage}
                        />
                      </label>
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <label>Select Category</label>
                    <div className='border focus-within:border-primary-200 rounded'>
                      {/*display value**/}
                      <div className='flex flex-wrap gap-2'>
                        {subCategoryData.category.map((cat, index) => {
                          return (
                            <p
                              key={cat._id + 'selectedValue'}
                              className='bg-white shadow-md px-1 m-1 flex items-center gap-2'
                            >
                              {cat.name}
                              <div
                                className='cursor-pointer hover:text-red-600'
                                onClick={() =>
                                  handleRemoveCategorySelected(cat._id)
                                }
                              >
                                <IoClose size={20} />
                              </div>
                            </p>
                          )
                        })}
                      </div>

                      {/*select category**/}
                      <select
                        className='w-full p-2 bg-transparent outline-none border'
                        onChange={(e) => {
                          const value = e.target.value
                          const categoryDetails = allCategory.find(
                            (el) => el._id == value
                          )

                          setSubCategoryData((preve) => {
                            return {
                              ...preve,
                              category: [...preve.category, categoryDetails],
                            }
                          })
                        }}
                      >
                        <option value={''}>Select Category</option>
                        {allCategory?.map((category, index) => {
                          return (
                            <option
                              value={category?._id}
                              key={category?._id + 'subcategory'}
                            >
                              {category?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>

                  <button
                    className={`px-4 py-2 border
                            ${
                              subCategoryData?.name &&
                              subCategoryData?.image &&
                              subCategoryData?.category[0]
                                ? 'bg-primary-200 hover:bg-primary-100'
                                : 'bg-gray-200'
                            }    
                            font-semibold
                        `}
                  >
                    Submit
                  </button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default UploadSubCategory
