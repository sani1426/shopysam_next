import Header from '@/components/shared/Header'

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default layout
