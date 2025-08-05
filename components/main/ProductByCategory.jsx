"use client"

import { useAppContext } from '@/context/appContext'
import React from 'react'
import CategoryWiseProductDisplay from './CategoryWiseProductDisplay'

const ProductByCategory = () => {
        const {allCategory} = useAppContext()
  return (
    <>
       {/***display category product */}
       {
        allCategory?.map((c,index)=>{
          return(
            <CategoryWiseProductDisplay 
              key={c?._id+"CategorywiseProduct"} 
              id={c?._id} 
              name={c?.name}
            />
          )
        })
      }
    </>
  )
}

export default ProductByCategory

