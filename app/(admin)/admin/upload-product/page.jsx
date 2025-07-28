"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '@/common'

const page = () => {
        const { dashboardOpen } = useAppContext()
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
             variant='bordered'
             color='primary'
             isRequired
             minRows={2}
             value={data.description}
             name='description'
             onChange={handleChange}
            placeholder="Enter Product description"
            className='max-w-[80%]' />
                </div>
                <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
                  <Input
                    type='file'
                    size='lg'
                    labelPlacement='outside'
                    isRequired
                    variant='bordered'
                    color='primary'
                    label='Image'
                    value={data.name}
                    onChange={handleChange}
                    name='name'
                    className='max-w-[80%]'
                    placeholder='Enter Product Name'

                  />
                </div>
             </form>
              </div>
              </section>
        
      </div>
  )
}

export default page