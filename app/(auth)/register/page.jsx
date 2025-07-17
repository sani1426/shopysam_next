"use client"

import SummaryApi from "@/common"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from 'axios'
import {Input, Select,SelectItem,Button} from '@heroui/react'
import { toast } from 'sonner'
import { SiGmail } from 'react-icons/si'
import { FaUser } from 'react-icons/fa'
import { IoKey } from 'react-icons/io5'
import Link from "next/link"

const page = () => {
        const [send, setSend] = useState(false)
        const router = useRouter()
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          confirm_password: '',
          gender: '',
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
      
          if (formData.password === formData.confirm_password) {
            setSend(true)
         const {data} = await axios.post(SummaryApi?.registerUser?.url , {
              name : formData?.name,
              email : formData?.email,
              password : formData?.password,
              gender : formData?.gender,
         },{withCredentials:true})
            setSend(false)
            if (data?.success) {
              toast.success('succesfully registered ✨✨✨')
              setTimeout(() => {
                router.push('/login')
              }, 1000)
            }
            if (data.error) {
              toast.error(data.message)
            }
          } else {
            toast.error('please check password and confirm password')
          }
        }
      
        return (
          <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <div
              style={{ width: '35rem', maxWidth: '95%' }}
              className='rounded-xl py-5  shadow-xl bg_back-1'
            >
              <h1 className='mb-8 text-center text-4xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 justify-center w-full items-center'
              >
                <div className='flex w-full flex-wrap md:flex-nowrap gap-1 justify-center'>
                  <Input
                    type='text'
                    size='lg'
                    labelPlacement='outside'
                    isRequired
                    variant='bordered'
                    color='primary'
                    label='Name'
                    value={formData.name}
                    onChange={handleOnChange}
                    name='name'
                    className='max-w-[80%]'
                    placeholder='Enter your name'
                    startContent={
                      <FaUser className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                  />
                </div>
      
                <div className='flex w-full flex-wrap md:flex-nowrap  gap-1 justify-center'>
                  <Input
                    endContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-default-400 text-small'>
                          @gmail.com
                        </span>
                      </div>
                    }
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
      
                <div className='flex w-full flex-wrap md:flex-nowrap  gap-1 justify-center'>
                  <Input
                    value={formData.password}
                    onChange={handleOnChange}
                    isRequired
                    labelPlacement='outside'
                    size='lg'
                    name='password'
                    color='primary'
                    variant='bordered'
                    label='password'
                    type='password'
                    className='max-w-[80%]'
                    placeholder='Enter your password'
                    startContent={
                      <IoKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                  />
                </div>
                <div className='flex w-full flex-wrap md:flex-nowrap  gap-1 justify-center'>
                  <Input
                    value={formData.confirm_password}
                    size='lg'
                    onChange={handleOnChange}
                    name='confirm_password'
                    labelPlacement='outside'
                    variant='bordered'
                    color='primary'
                    isRequired
      
                    type='password'
                    label='Confirm Password'
                    className='max-w-[80%]'
                    placeholder='Confirm your password'
                    startContent={
                      <IoKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                  />
                </div>
      
                <Select
                  name='gender'
                  size='lg'
                  isRequired
                  label="gender"
                  labelPlacement='outside'
                  variant='bordered'
                  color='primary'
                  placeholder='Select your gender'
                  onChange={handleOnChange}
                  value={formData.gender}
                  className='max-w-[80%]'
                >
                  <SelectItem  key='Men'>
                    Men
                  </SelectItem>
                  <SelectItem  key='Women'>
                    Women
                  </SelectItem>
                </Select>
                <button
      
                  className={`w-[80%] bg-blue-600 py-2 rounded-xl hover:bg-blue-800 transition-all duration-300 ${
                    send ? 'opacity-60' : ''
                  }`}
                >
                  {send ? 'Registering ...' : 'Register'}
                </button>
              </form>
      
              <h6 className='mt-3 text-center text-accent'>
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