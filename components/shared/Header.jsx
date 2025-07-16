
import Navbar from "./Navbar"
import NavigationMenu from "./NavigationMenu"
import TopBar from "./TopBar"


const Header = (user , set) => {
  return (
    <>
    <TopBar />
    <Navbar  user={user} set={set}/>
    <NavigationMenu />
    </>
  )
}

export default Header