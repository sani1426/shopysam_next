"use client"

import { useAppContext } from "@/context/appContext"
import Image from "next/image"

const ShowCategory = () => {
        const {allCategory}= useAppContext()
  return (
        <div className='container mx-auto px-4 my-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10  gap-2'>
        {
                allCategory ? (
                        allCategory?.map((cat,index)=>{
                                return(
                                  <div key={cat?._id+"displayCategory"} className='w-full h-full relative' >
                                    <div>
                                        <Image
                                          src={cat.image}
                                          className='w-full h-full object-scale-down'
                                          fill 
                                          loading="lazy"
                                          placeholder="blur"
                                        />
                                    </div>
                                  </div>
                                )
                              })
                ):(
                        new Array(12).fill(null).map((c,index)=>{
                                return(
                                  <div key={index+"loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
                                    <div className='bg-blue-100 min-h-24 rounded'></div>
                                    <div className='bg-blue-100 h-8 rounded'></div>
                                  </div>
                                          )
                                        })
                )
             
        }
    </div>
  )
}

export default ShowCategory
