

import { Suspense } from 'react'
import VerifyOtp from '@/components/auth/VerifyOtpSuspense'

// function SuspenseFallback() {
//   return <>placeholder</>
// }

export default async function page({searchParams}) {
 
  const {email} = await searchParams()

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <VerifyOtp gmail={email} />
       </Suspense>
  )
}
