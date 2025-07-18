

import { Suspense } from 'react'
import VerifyOtp from '@/components/auth/VerifyOtpSuspense'

function SuspenseFallback() {
  return <>placeholder</>
}

export default  function page({searchParams}) {
 
  const {email} =  searchParams()

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <VerifyOtp gmail={email} />
       </Suspense>
  )
}
