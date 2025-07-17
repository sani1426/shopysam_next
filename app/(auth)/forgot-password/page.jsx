"use client"
import SummaryApi from "@/common"
import { useRouter,redirect } from "next/navigation"
import { SiGmail } from 'react-icons/si'
import { toast } from 'sonner'
import { Input } from '@heroui/react'
import Link from "next/link"
import axios from 'axios'
import { useState } from "react"



const page = () => {

        const [send, setSend] = useState(false)
        const router = useRouter()
        const [formData, setFormData] = useState({
          email: '',
        })
      
        const handleOnChange = (e) => {
          const { name, value } = e.target
          setFormData((prev) => {
            return {
              ...prev,
              [name]: value,
            }
          })
        }
  
        const handleSubmit = async (e) => {
          e.preventDefault()
          setSend(true)
          const { data} = await axios.put(SummaryApi?.forgotPassword?.url ,{
                email: formData?.email ,
          },{withCredentials: true})
          setSend(false)
          if (data.success) {
            toast.success(data?.message)
            setTimeout(() => {
              redirect(`/veify-otp?email=${formData?.email}`)
            }, 1000)
          }
          if (data.error) {
            toast.error(data?.message)
          }
        }
      
        return (
          <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <div
              style={{ width: '35rem', maxWidth: '95%' }}
              className='rounded-xl py-5 bg_back-1 shadow-xl '
            >
              <h1 className='mb-8 text-center text-4xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'>Forgot Password</h1>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 justify-center w-full items-center'
              >
                <div className='flex w-full flex-wrap md:flex-nowrap  gap-1 justify-center'>
                  <Input
                    value={formData.email}
      
                    onChange={handleOnChange}
                    size='lg'
                    name='email'
                    color='primary'
                    variant='bordered'
                    isRequired
                    type='email'
                    label='Email'
                    labelPlacement='outside'
                    className='max-w-[80%]'
                    placeholder='Enter your email'
                    startContent={
                      <SiGmail className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                  />
                </div>
                <button
                  className={`w-[80%] bg-blue-600 py-2 rounded-xl hover:bg-blue-800 transition-all duration-300 ${send ? 'opacity-60' : ''}`}
                >
                  {send ? 'Sending ...' : 'Send'}
                </button>
              </form>
      
              <h6 className='mt-3 text-center text-error'>
                already have account?{' '}
                <Link href='/login' className=' text-primary'>
                  login
                </Link>
              </h6>
            </div>
          </div>
        )
}

export default page