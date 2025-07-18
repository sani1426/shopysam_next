
import VerifyOtp from '@/components/auth/VerifyOtpComponent'



export default function page(props) {
  const email = props.searchParams?.email
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <div
        style={{ width: '35rem', maxWidth: '95%' }}
        className='rounded-xl py-5 bg_back-1 shadow-xl '
      >
        <h1 className='mb-10 text-center text-5xl bg-gradient-to-r from-blue-600  via-red-600 to-orange-600 bg-clip-text text-transparent'>
          Verify Otp
        </h1>

          <VerifyOtp Email={email} />

      </div>
    </div>
  )
}
