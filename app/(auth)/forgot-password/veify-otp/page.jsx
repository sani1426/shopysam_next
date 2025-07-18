'use client'
import SummaryApi from '@/common'
import { InputOtp } from '@heroui/react'
import {useEffect, useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation"
import { SiGmail } from 'react-icons/si'
import { toast } from 'sonner'
import { Input } from '@heroui/react'
import Link from "next/link"
import axios from 'axios'
import { Suspense } from 'react'

function SuspenseFallback() {
  return <>placeholder</>
}

export default function page() {
  const searchParams = useSearchParams();
  const em = searchParams.get('email');
        const [send, setSend] = useState(false)
        const router = useRouter()
        const [formData, setFormData] = useState({
          email: '',
        })
        const [otp, setOtp] = useState('')
        const handleOnChange = (e) => {
          const { name, value } = e.target
          setFormData((prev) => {
            return {
              ...prev,
              [name]: value,
            }
          })
        }
  useEffect(()=>console.log(em) ,[])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSend(true)
    const { data } = await axios.put(
      SummaryApi?.verifyOtp?.url,
      {
        email: formData?.email,
        otp:otp
      },
      { withCredentials: true }
    )
    setSend(false)
    if (data.success) {
      toast.success(data?.message)
      setTimeout(() => {
        router.push('/reset-password')
      }, 1000)
    }
    if (data.error) {
      toast.error(data.message)
    }
  }

  return (
    <Suspense fallback={<SuspenseFallback />}>
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <div
        style={{ width: '35rem', maxWidth: '95%' }}
        className='rounded-xl py-5 bg_back-1 shadow-xl '
      >
        <h1 className='mb-8 text-center text-4xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'>
          Verify Otp
        </h1>
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
          <div className='w-full flex flex-col gap-2 max-w-[240px]'>
            <InputOtp variant='bordered' size='lg' length={6} value={otp} onValueChange={setOtp} />
            <p className='text-default-500 text-small'>
              enter otp code was sent to your email
            </p>
          </div>
          <button
            className={`w-[80%] bg-blue-600 py-2 rounded-xl hover:bg-blue-800 transition-all duration-300 ${
              send ? 'opacity-60' : ''
            }`}
          >
            {send ? 'Sending ...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
       </Suspense>
  )
}
