
import { Spinner } from '@heroui/react'
import { Suspense } from 'react'
import VerifyOtp from '@/components/auth/VerifyOtpSuspense'

function SuspenseFallback() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Spinner color='success' label='Loading...' labelColor='success' variant='dots' size='lg' />
    </div>
  )
}

export default  function page() {
 


  return (
    <Suspense fallback={<SuspenseFallback />}>
      <VerifyOtp  />
       </Suspense>
  )
}
