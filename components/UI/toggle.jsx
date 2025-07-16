"use client"
import { useAppContext } from "@/context/appContext";
import { FaRegMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi2";


const Toggle = () => {
        const { theme, toggleTheme } = useAppContext()
  return (
    <button
    className={` transition-all duration-1000`}
    onClick={toggleTheme}
    >
        {
                theme === "light" ? (
                        <FaRegMoon className="text-2xl"/>
                ):(
                        <HiOutlineSun  className="text-3xl"/>
                )
        }
    </button>
  )
}

export default Toggle