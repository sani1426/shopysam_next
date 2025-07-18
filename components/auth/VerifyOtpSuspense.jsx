'use client'
import { useSearchParams } from 'next/navigation'
import SummaryApi from '@/common'
import { InputOtp } from '@heroui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'
import axios from 'axios'


export default function VerifyOtp() {
  const searchParams = useSearchParams()
  const Email = searchParams.get('email')
  const [send, setSend] = useState(false)
  const router = useRouter()
  const [otp, setOtp] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSend(true)
    const { data } = await axios.put(
      SummaryApi?.verifyOtp?.url,
      {
        email: Email,
        otp: otp,
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
//   useEffect(()=>{ console.log('gmail' , gmail)} ,[])
  return (
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
          <div className='w-full flex flex-col gap-2 max-w-[240px]'>
            <InputOtp
              variant='bordered'
              size='lg'
              length={6}
              value={otp}
              onValueChange={setOtp}
            />
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
  )
}
