'use client'
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Input, Select, SelectItem, Button, Textarea,Badge } from '@heroui/react'
import Loading from '@/components/shared/loading'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import uploadImage from '@/utils/UploadImage'
import ViewImage from '@/components/UI/ViewImage'

const page = () => {
  const { dashboardOpen,allCategory,allSubCategory } = useAppContext()
  const [imageLoading, setImageLoading] = useState(false)
  const [selectCategory, setSelectCategory] = useState('')
  const [selectSubCategory, setSelectSubCategory] = useState('')
  const [ViewImageURL, setViewImageURL] = useState('')
  const [data, setData] = useState({
    name: '',
    image: [],
    category: [],
    subCategory: [],
    unit: '',
    stock: '',
    price: '',
    discount: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }
  const handleUploadImage = async(e)=>{
    const file = e.target.files[0]

    if(!file){
      return 
    }
    setImageLoading(true)
    const response = await uploadImage(file)
    const { data : ImageResponse } = response
    const imageUrl = ImageResponse.data.url 

    setData((preve)=>{
      return{
        ...preve,
        image : [...preve.image,imageUrl]
      }
    })
    setImageLoading(false)

  }

  const handleDeleteImage = async(index)=>{
      data.image.splice(index,1)
      setData((preve)=>{
        return{
            ...preve
        }
      })
  }

  const handleRemoveCategory = async(index)=>{
    data.category.splice(index,1)
    setData((preve)=>{
      return{
        ...preve
      }
    })
  }
  const handleRemoveSubCategory = async(index)=>{
      data.subCategory.splice(index,1)
      setData((preve)=>{
        return{
          ...preve
        }
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // try {
    //   const response = await Axios({
    //       ...SummaryApi.createProduct,
    //       data : data
    //   })
    //   const { data : responseData} = response

    //   if(responseData.success){
    //       successAlert(responseData.message)
    //       setData({
    //         name : "",
    //         image : [],
    //         category : [],
    //         subCategory : [],
    //         unit : "",
    //         stock : "",
    //         price : "",
    //         discount : "",
    //         description : "",
    //       })

    //   }
    // } catch (error) {
    //     AxiosToastError(error)
    // }
  }
  return (
    <div class={`main ${dashboardOpen && 'active'}`}>
      <AdminNav />

      <section className=''>
        <div className='p-2   bg-white shadow-md flex items-center justify-between'>
          <h2 className='font-semibold'>Upload Product</h2>
        </div>
        <div className='grid p-3'>
          <form
            className='flex flex-col gap-5 justify-center w-full items-center'
            onSubmit={handleSubmit}
          >
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
                onChange={handleChange}
                name='name'
                className='max-w-[80%]'
                placeholder='Enter Product Name'
              />
            </div>
            <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
              <Textarea
                label='Description'
                labelPlacement='outside'
                variant='flat'
                color='primary'
                isRequired
                minRows={4}
                value={data.description}
                name='description'
                onChange={handleChange}
                placeholder='Enter Product description'
                className='max-w-[80%]'
              />
            </div>
            <div className='flex flex-col w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
              <div className='w-full max-w-[80%] mx-auto'>
                <p className='font-medium text-[#486FEF]'>Image</p>
                <label
                  htmlFor='productImage'
                  className='bg-[#CBE2FC] h-24  rounded-xl flex justify-center items-center cursor-pointer'
                >
                  <div className='text-center w-full flex justify-center items-center flex-col text-[#486FEF]'>
                    {imageLoading ? (
                      <Loading />
                    ) : (
                      <>
                        <FaCloudUploadAlt size={35} />
                        <p>Upload Image</p>
                      </>
                    )}
                  </div>
                  <input
                    type='file'
                    id='productImage'
                    className='hidden'
                    accept='image/*'
                    onChange={handleUploadImage}
                  />
                </label>

                {/**display uploded image*/}
                <div className='flex flex-wrap gap-4'>
                  {data?.image.map((img, index) => {
                    return (
                      <div
                        key={img + index}
                        className='h-28 mt-2 w-28 min-w-28 bg-blue-50 rounded relative '
                      >
                        <Badge
                          color='danger'
                          onClick={()=>handleDeleteImage(index)} 
                          content={<IoClose  />}
                          shape='circle'
                          className=' cursor-pointer'
                          size="md"
                          showOutline={true}
                          placement='top-right'
                        >
                          <img
                            src={img}
                            alt={img}
                            className='w-full h-full object-scale-down cursor-pointer'
                            onClick={()=>setViewImageURL(img)}
                          />
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='w-[80%] grid gap-1 mx-auto'>
            <Select
                  size='lg'
                  isRequired
                  label="Category"
                  labelPlacement='outside'
                  variant='flat'
                  color='primary'
                  value={selectCategory}
                  placeholder='Select Product Categories'
                  onChange={(e)=>{
                    const value = e.target.value 
                    const category = allCategory.find(el => el._id === value )
                    
                    setData((preve)=>{
                      return{
                        ...preve,
                        category : [...preve.category,category],
                      }
                    })
                    setSelectCategory("")
                  }}
                  className='w-full'
                >
                     {
                        allCategory?.map((c,index)=>{
                          return(
                            <SelectItem key={index} value={c?._id}>{c.name}</SelectItem>
                          )
                        })
                      }
                </Select>
                <div className='flex flex-wrap gap-3'>
                      {
                        data?.category.map((c,index)=>{
                          return(
                            <div key={c?._id+index+"productsection"} className='text-sm flex items-center gap-1 bg-blue-50 mt-2'>
                              <p>{c?.name}</p>
                              <div className='hover:text-red-500 cursor-pointer' onClick={()=>handleRemoveCategory(index)}>
                                <IoClose size={20}/>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    </div>

                    <div className='grid gap-1 w-[80%] mx-auto'>
                  <label className='font-medium'>Category</label>
                  <div>
                    <select
                      className='bg-blue-50 border w-full p-2 rounded'
                      value={selectCategory}
                      onChange={(e)=>{
                        const value = e.target.value 
                        const category = allCategory.find(el => el._id === value )
                        
                        setData((preve)=>{
                          return{
                            ...preve,
                            category : [...preve.category,category],
                          }
                        })
                        setSelectCategory("")
                      }}
                    >
                      <option value={""}>Select Category</option>
                      {
                        allCategory.map((c,index)=>{
                          return(
                            <option value={c?._id}>{c.name}</option>
                          )
                        })
                      }
                    </select>
                    <div className='flex flex-wrap gap-3'>
                      {
                        data.category.map((c,index)=>{
                          return(
                            <div key={c._id+index+"productsection"} className='text-sm flex items-center gap-1 bg-blue-50 mt-2'>
                              <p>{c.name}</p>
                              <div className='hover:text-red-500 cursor-pointer' onClick={()=>handleRemoveCategory(index)}>
                                <IoClose size={20}/>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
          </form>
        </div>
        {
          ViewImageURL && (
            <ViewImage url={ViewImageURL} close={()=>setViewImageURL("")}/>
          )
        }
      </section>
    </div>
  )
}

export default page
