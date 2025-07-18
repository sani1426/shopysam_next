import Link from 'next/link'
import { Spinner } from '@heroui/react'
import { Suspense } from 'react'
import ResetPassword from '@/components/auth/ResetPasswordComponent'

function SuspenseFallback() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Spinner
        color='success'
        label='Loading...'
        labelColor='success'
        variant='dots'
        size='lg'
      />
    </div>
  )
}

const page = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <div
        style={{ width: '35rem', maxWidth: '95%' }}
        className='rounded-xl py-5 bg_back-1 shadow-xl '
      >
        <h1 className='mb-8 text-center text-4xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'>
          Reset Password
        </h1>
        <Suspense fallback={<SuspenseFallback />}>
          <ResetPassword />
        </Suspense>

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
