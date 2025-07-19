import Header from '@/components/shared/Header'

const layout = ({ children }) => {
  return (
    <div className='flex flex-col overflow-hidden'>
    <Header  />
 
       <main className='flex flex-col w-full mt-[10rem] lg:mt-[12.5rem]  '>
         {children}
       </main>

     </div>
  )
}

export default layout
