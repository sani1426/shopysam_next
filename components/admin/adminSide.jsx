"use client"

import Link from 'next/link'
import './admin.css'
import { useEffect } from 'react'
import { useAppContext } from '@/context/appContext'
import { IoLogoApple } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { IoHelpOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";

const AdminSide = () => {
const {dashboardOpen}=useAppContext()
  useEffect(()=>{
	let list = document.querySelectorAll(".navigation li");

	function activeLink() {
	  list.forEach((item) => {
	    item.classNameList.remove("hovered");
	  });
	  this.classNameList.add("hovered");
	}
	
	list.forEach((item) => item.addEventListener("mouseover", activeLink));
  },[])
  return (
	<div className={`navigation ${dashboardOpen && "active"}`}>
	<ul>
	    <li>
		<Link className='side-link' href="/">
		    <span className="icon">
			<IoLogoApple className='text-[1.75rem]' />
		    </span>
	
		    <span className="relative block px-[10px] h-[60px] text-start whitespace-nowrap text-3xl">ShopySam</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/users">
		    <span className="icon">
			<IoPeopleOutline className='text-[1.75rem]' />
		    </span>
		    <span className="title">Customers</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/products">
		    <span className="icon">
			<AiFillProduct  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Products</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/orders">
		    <span className="icon">
			<FaClipboardCheck   className='text-[1.75rem]'/>
		    </span>
		    <span className="title">Orders</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="#">
		    <span className="icon">
			<IoHelpOutline  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Help</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="#">
		    <span className="icon">
			<IoSettingsOutline  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Settings</span>
		</Link>
	    </li>

	    <li>
		<button className='side-link' >
		    <span className="icon">
			<IoLogInOutline  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Sign Out</span>
		</button>
	    </li>
	</ul>
    </div>
  )
}

export default AdminSide