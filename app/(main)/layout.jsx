import Header from "@/components/shared/Header"


const layout = ({ children }) => {
        return (
          <main>
            <Header />
              {children}
          </main>
        )
      }
      
      export default layout