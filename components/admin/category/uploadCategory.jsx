'use client'

import uploadImage from '@/utils/UploadImage'
import Axios from '@/utils/axios'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,

  Button,
  useDisclosure,
} from '@heroui/react'
import { useState } from 'react'
import BackendApi from '@/common/api'
import { toast } from 'sonner'

const UploadCategory = ({fetchCategories}) => {
  const { isOpen, onOpen, onOpenChange , onClose } = useDisclosure()
  const [data,setData] = useState({
        name : "",
        image : ""
    })
    const [loading,setLoading] = useState(false)
    const handleOnChange = (e)=>{
        const { name, value} = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

  const handleUploadCategoryImage  = async (e)=>{
        const file = e.target.files[0] ;

        if(!file) return ;
        
        const upload_Image = await uploadImage(file)
        const {data : ImageResponse} = upload_Image

        setData((preve)=>{
          return{
            ...preve,
            image :ImageResponse?.data?.url
          }
        })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await Axios({
        ...BackendApi.upload_Category,
        data: data
      })

      const {data : responseData} = response

      if(responseData?.success){
        toast.success(responseData?.message)
        onClose()
        fetchCategories()
      }
    } catch (error) {
      toast.error(error)
    }finally{
      setLoading(false)
    }

  }
  return (
    <>
      <button onClick={onOpen} className=' border border-[#2a2185] text-[#2a2185] hover:bg-blue-900 hover:text-white px-4 py-2 rounded-lg cursor-pointer'>
        Add Category
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                New Category
              </ModalHeader>
              <ModalBody>
                <form className='my-3 grid gap-2 w-full' onSubmit={handleSubmit}>
                <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
                  <Input
                    type='text'
                    size='lg'
                    labelPlacement='outside'
                    isRequired
                    variant='flat'
                    color='primary'
                    label='Name'
                    value={data.name}
                    onChange={handleOnChange}
                    name='name'
                    className='w-full'
                    placeholder='Enter Category name'
                  />
                </div>

                  <div className='grid gap-1'>
                    <p>Image</p>
                    <div className='flex gap-4 flex-col lg:flex-row items-center'>
                      <div className='border bg-blue-50 h-36 w-full lg:w-36 flex items-center justify-center rounded'>
                        {data?.image ? (
                          <img
                            alt='category'
                            src={data?.image}
                            className='w-full h-full object-scale-down'
                          />
                        ) : (
                          <p className='text-sm text-neutral-500'>No Image</p>
                        )}
                      </div>
                      <label htmlFor='uploadCategoryImage'>
                            <div  className={`
                            ${!data?.name ? "bg-gray-200" : "bg-blue-600 hover:bg-blue-500" }  
                                px-4 py-2 rounded cursor-pointer border font-medium
                            `}>Upload Image</div>

                            <input disabled={!data?.name} 
                            required
                            onChange={handleUploadCategoryImage}
                            type='file' id='uploadCategoryImage' className='hidden'/>
                        </label>
                    </div>
                  </div>

                  <button
                    className={`cursor-pointer 
                    ${data?.name && data?.image ? "bg-blue-700 text-white  hover:bg-blue-500" : "bg-gray-300 "}
                    py-2    
                    font-semibold 
                    `}
                >Add Category</button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default UploadCategory
