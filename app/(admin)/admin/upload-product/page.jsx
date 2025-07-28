"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

import {Input, Select,SelectItem,Button,Textarea} from '@heroui/react'
import Loading from '@/components/shared/loading'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const page = () => {
        const { dashboardOpen } = useAppContext()
        const [imageLoading,setImageLoading] = useState(false)
        const [selectCategory,setSelectCategory] = useState("")
  const [selectSubCategory,setSelectSubCategory] = useState("")
        const [ViewImageURL,setViewImageURL] = useState("")
        const [data,setData] = useState({
          name : "",
          image : [],
          category : [],
          subCategory : [],
          unit : "",
          stock : "",
          price : "",
          discount : "",
          description : "",
          more_details : {},
      })

      const handleChange = (e)=>{
        const { name, value} = e.target 
    
        setData((preve)=>{
          return{
              ...preve,
              [name]  : value
          }
        })
      }
        const handleSubmit = (e) => {
          e.preventDefault()
        }
  return (
        <div class={`main ${dashboardOpen && "active"}`}>
        <AdminNav />

        <section className=''>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
            <h2 className='font-semibold'>Upload Product</h2>
        </div>
        <div className='grid p-3'>
            <form   className='flex flex-col gap-5 justify-center w-full items-center' onSubmit={handleSubmit}>
            <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
                  <Input
                    type='text'
                    size='lg'
                    labelPlacement='outside'
                    isRequired
                    variant='bordered'
                    color='primary'
                    label='Name'
                    value={data.name}
                    onChange={handleChange}
                    name='name'
                    className='max-w-[80%]'
                    placeholder='Enter Product Name'

                  />
                </div>
            <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
            <Textarea
             label="Description"
             labelPlacement='outside'
             variant='flat'
             color='primary'
             isRequired
             minRows={4}
             value={data.description}
             name='description'
             onChange={handleChange}
            placeholder="Enter Product description"
            className='max-w-[80%]' />
                </div>
                <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
                <div>
                    <p className='font-medium'>Image</p>
                    <div>
                      <label htmlFor='productImage' className='bg-blue-50 h-24 border rounded flex justify-center items-center cursor-pointer'>
                          <div className='text-center flex justify-center items-center flex-col'>
                            {
                              imageLoading ?  <Loading/> : (
                                <>
                                   <FaCloudUploadAlt size={35}/>
                                   <p>Upload Image</p>
                                </>
                              )
                            }
                          </div>
                          <input 
                            type='file'
                            id='productImage'
                            className='hidden'
                            accept='image/*'
                            // onChange={handleUploadImage}
                          />
                      </label>
                      {/**display uploded image*/}
                      <div className='flex flex-wrap gap-4'>
                        {
                          data?.image.map((img,index) =>{
                              return(
                                <div key={img+index} className='h-20 mt-1 w-20 min-w-20 bg-blue-50 border relative group'>
                                  <img
                                    src={img}
                                    alt={img}
                                    className='w-full h-full object-scale-down cursor-pointer' 
                                    // onClick={()=>setViewImageURL(img)}
                                  />
                                  <div
                                  onClick={()=>handleDeleteImage(index)} className='absolute bottom-0 right-0 p-1 bg-red-600 hover:bg-red-600 rounded text-white hidden group-hover:block cursor-pointer'>
                                    <MdDelete/>
                                  </div>
                                </div>
                              )
                          })
                        }
                      </div>
                    </div>

                </div>
                </div>
             </form>
              </div>
              </section>
        
      </div>
  )
}

export default page