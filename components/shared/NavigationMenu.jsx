
import { IoRocketOutline } from "react-icons/io5";
import CategoryMenu from "../UI/CategoriesSubMenu";
import { Nav_Link } from "@/constance";
import Link from "next/link";

const NavigationMenu = () => {
  return (
    <div className='w-full flex items-center gap-16 nav-clr   py-2   mt-4 absolute top-[62px] md:top-[70px]  lg:top-[80px] px-3  lg:px-12  border-slate-300 z-40 shadow-md  dark:shadow-gray-900'>
      <CategoryMenu />

      <ul className=' items-center gap-10 hidden lg:flex dark:text-gray-300'>
        {Nav_Link.map((item) => (
          <li key={item?.id}>
            <Link className='hover:text-red-500 transition text-nowrap' href={item?.href}>{item?.label.toUpperCase()}</Link>
          </li>
        ))}
      </ul>

      <h1 className=' items-center gap-1 ml-32 hidden xl:flex text-gray-600'>
        <span className='text-3xl'><IoRocketOutline /></span>
        <span className="text-xs text-nowrap">Free International Delivery</span>
        </h1>
    </div>
  )
}

export default NavigationMenu
