

const NoData = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-2'>
      <img
        src="/assets/nothing here yet.webp"
        alt='no data'
        className='w-48' 
      />
      <p className='text-neutral-500'>No Data</p>
    </div>
  )
}

export default NoData
