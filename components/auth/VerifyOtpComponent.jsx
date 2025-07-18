'use client'
// import { useSearchParams } from 'next/navigation'
import SummaryApi from '@/common'
import { InputOtp } from '@heroui/react'
import {  useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import axios from 'axios'

export default function VerifyOtp({ Email }) {

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
        router.push(`forgot-password/reset-password?email=${Email}`)
      }, 1000)
    }
    if (data.error) {
      toast.error(data.message)
      setSend(false)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 justify-center w-full items-center'
    >
      <div className='w-full flex flex-col gap-2 justify-center items-center'>
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
        className={`w-[80%] bg-blue-600 py-2 rounded-xl hover:bg-blue-800 transition-all duration-300 text-white cursor-pointer ${
          send ? 'opacity-60' : ''
        }`}
      >
        {send ? 'Sending ...' : 'Send'}
      </button>
    </form>
  )
}
