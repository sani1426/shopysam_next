"use client"

import { useAppContext } from "@/context/appContext"
import Axios from "@/utils/axios"
import { useEffect, useRef, useState } from "react"
import BackendApi from "@/common/api"
import AxiosToastError from "@/utils/axiosToastError"
import Link from "next/link"
import CardLoading from "../UI/CardSkeleton"
import CardProduct from "../shared/ProductCard"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"


const CategoryWiseProductDisplay = ({ id, name }) => {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(false)
        const containerRef = useRef()
      const {allSubCategory} = useAppContext()
        const loadingCardNumber = new Array(6).fill(null)
    
        const fetchCategoryWiseProduct = async () => {
            try {
                setLoading(true)
                const response = await Axios({
                    ...BackendApi.get_Product_ByCategory,
                    data: {
                        id: id
                    }
                })
    
                const { data: responseData } = response
    
                if (responseData?.success) {
                    setData(responseData?.data)
                }
            } catch (error) {
                AxiosToastError(error)
            } finally {
                setLoading(false)
            }
        }
    
        useEffect(() => {
            fetchCategoryWiseProduct()
        }, [])
    
        const handleScrollRight = () => {
            containerRef.current.scrollLeft += 200
        }
    
        const handleScrollLeft = () => {
            containerRef.current.scrollLeft -= 200
        }
    
        
    
      
    
//       const handleRedirectProductListpage = ()=>{
//           const subcategory = subCategoryData.find(sub =>{
//             const filterData = sub.category.some(c => {
//               return c._id == id
//             })
    
//             return filterData ? true : null
//           })
//           const url = `/${valideURLConvert(name)}-${id}/${valideURLConvert(subcategory?.name)}-${subcategory?._id}`
    
//           return url
//       }
    
//       const redirectURL =  handleRedirectProductListpage()
        return (
            <div>
                <div className='container mx-auto p-4 flex items-center justify-between gap-4'>
                    <h3 className='font-semibold text-lg md:text-xl'>{name}</h3>
                    <Link href='/'  className='text-green-600 hover:text-green-400'>See All</Link>
                </div>
                <div className='relative flex items-center '>
                    <div className=' flex gap-4 md:gap-6 lg:gap-8 container mx-auto px-4 overflow-x-scroll scrollbar-none scroll-smooth' ref={containerRef}>
                        {loading ?
                            loadingCardNumber.map((_, index) => {
                                return (
                                    <CardLoading key={"CategorywiseProductDisplay123" + index} />
                                )
                            }) :
                            data.map((p, index) => {
                                return (
                                    <CardProduct
                                        data={p}
                                        key={p._id + "CategorywiseProductDisplay" + index}
                                    />
                                )
                            })
                        }
    
    
                        {/* {
                            data.map((p, index) => {
                                return (
                                    <CardProduct
                                        data={p}
                                        key={p._id + "CategorywiseProductDisplay" + index}
                                    />
                                )
                            })
                        } */}
    
                    </div>
                    <div className='w-full left-0 right-0 container mx-auto  px-2  absolute hidden lg:flex justify-between'>
                        <button onClick={handleScrollLeft} className='z-10 relative bg-white hover:bg-gray-100 shadow-lg text-lg p-2 rounded-full'>
                            <FaAngleLeft />
                        </button>
                        <button onClick={handleScrollRight} className='z-10 relative  bg-white hover:bg-gray-100 shadow-lg p-2 text-lg rounded-full'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    export default CategoryWiseProductDisplay