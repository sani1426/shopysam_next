import Header from '@/components/shared/Header'

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='mt-[10.8rem] lg:mt-[12.2rem]'>{children}</div>
    </div>
  )
}

export default layout
