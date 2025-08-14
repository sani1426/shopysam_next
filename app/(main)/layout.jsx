import Header from '@/components/shared/Header'

const layout = ({ children }) => {
  return (
    <div className='flex flex-col overflow-hidden'>
    <Header  />
 
       <main className='flex flex-col w-full mt-[8rem] lg:mt-[10.5rem]  '>
         {children}
       </main>

     </div>
  )
}

export default layout
