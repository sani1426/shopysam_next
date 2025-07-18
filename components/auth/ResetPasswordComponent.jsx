'use client'
import SummaryApi from '@/common'
import { useRouter } from 'next/navigation'
import { IoKey } from 'react-icons/io5'
import { toast } from 'sonner'
import { Input } from '@heroui/react'
import axios from 'axios'
import { useState } from 'react'

const ResetPassword = ({Email}) => {

  const [send, setSend] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
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
    if (formData.newPassword === formData.confirmPassword) {
      setSend(true)
      const { data } = await axios.put(
        SummaryApi?.resetPassword?.url,
        {
          email: Email,
          newPassword: formData?.newPassword,
        },
        { withCredentials: true }
      )
      setSend(false)
      if (data.success) {
        toast.success(data?.message)
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }else{
        toast.error(data.message)
        setSend(false)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 justify-center w-full items-center'
    >
      <div className='flex w-full flex-wrap md:flex-nowrap  gap-1 justify-center'>
        <Input
          value={formData.newPassword}
          onChange={handleOnChange}
          isRequired
          labelPlacement='outside'
          size='lg'
          name='newPassword'
          color='primary'
          variant='bordered'
          label='new password'
          type='password'
          className='max-w-[80%]'
          placeholder='Enter your new password'
          startContent={
            <IoKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
        />
      </div>
      <div className='flex w-full flex-wrap md:flex-nowrap  gap-1 justify-center'>
        <Input
          value={formData.confirmPassword}
          size='lg'
          onChange={handleOnChange}
          name='confirmPassword'
          labelPlacement='outside'
          variant='bordered'
          color='primary'
          isRequired
          type='password'
          label='Confirm Password'
          className='max-w-[80%]'
          placeholder='Confirm your new password'
          startContent={
            <IoKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
        />
      </div>
      <button
        className={`w-[80%] bg-blue-600 py-2 rounded-xl hover:bg-blue-800 transition-all duration-300 ${
          send ? 'opacity-60' : ''
        }`}
      >
        {send ? 'Sending ...' : 'Send'}
      </button>
    </form>
  )
}

export default ResetPassword
