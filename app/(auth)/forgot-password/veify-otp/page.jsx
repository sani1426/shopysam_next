

import { Suspense } from 'react'
import VerifyOtp from '@/components/auth/VerifyOtpSuspense'

function SuspenseFallback() {
  return <>placeholder</>
}

export default function page() {
 

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <VerifyOtp />
       </Suspense>
  )
}
