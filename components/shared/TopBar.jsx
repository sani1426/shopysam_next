import Link from "next/link"


const TopBar = () => {
  return (
    <div className='w-full hidden lg:flex items-center justify-between fixed top-0 bg-[#FF8000] text-white dark:shadow-gray-600  py-2   px-3  lg:px-12  border-slate-300  shadow-sm z-[60] '>
      <div>
        <h1 className='text-sm text-gray-300'>
          Get Up to 50% off new season styles,limited time only
        </h1>
      </div>
      <div className='flex items-center gap-5 '>
        <Link href='/help-center'>Help Center</Link>
        <Link href='/profile/order-tracking'>Order Tracking</Link>
      </div>
    </div>
  )
}

export default TopBar
