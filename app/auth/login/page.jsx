"use client"
import SummaryApi from "@/common"
import { useRouter } from "next/navigation"
import { SiGmail } from 'react-icons/si'
import { IoKey } from 'react-icons/io5'
import { toast } from 'sonner'
import { Input } from '@heroui/react'
import Link from "next/link"
import axios from 'axios'



const page = () => {
        const [send, setSend] = useState(false)
        const router = useRouter()
        const [formData, setFormData] = useState({
          email: '',
          password: '',
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
          const { data} = await axios.post(SummaryApi?.loginUser?.url ,{
                formData
          },{withCredentials: true})
          setSend(false)
          if (data.success) {
            toast.success('succesfully loged in ✨✨✨')
            setTimeout(() => {
              router.push('/')
            }, 1000)
          }
          if (data.error) {
            toast.error(responseData.message)
          }
        }
      
        return (
          <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <div
              style={{ width: '35rem', maxWidth: '95%' }}
              className='rounded-xl py-5 bg_back-1 shadow-xl '
            >
              <h1 className='mb-8 text-center text-4xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'>Login</h1>
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
                <button
        
                  className={`w-[80%] bg-blue-600 py-2 rounded-xl hover:bg-blue-800 transition-all duration-300 ${send ? 'opacity-60' : ''}`}
                >
                  {send ? 'Login in ...' : 'Login'}
                </button>
              </form>
      
              <h6 className='mt-3 text-center text-error'>
                don't have account?{' '}
                <Link href='/register' className=' text-primary'>
                  register
                </Link>
              </h6>
            </div>
          </div>
        )
}

export default page