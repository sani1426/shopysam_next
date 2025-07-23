"use client"

import Link from 'next/link'
import './admin.css'
import { useEffect } from 'react'
import { useAppContext } from '@/context/appContext'
import { IoLogoApple } from "react-icons/io5";
import { FaClipboardCheck, FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";

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
			<FaUser className='text-[1.75rem]' />
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
			<BiSolidHelpCircle  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Help</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="#">
		    <span className="icon">
			<IoSettings  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Settings</span>
		</Link>
	    </li>

	    <li>
		<button className='side-link' >
		    <span className="icon">
			<RiLogoutBoxRFill  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Sign Out</span>
		</button>
	    </li>
	</ul>
    </div>
  )
}

export default AdminSide