"use client"

import Link from 'next/link'
import './admin.css'
import { useEffect } from 'react'
import { useAppContext } from '@/context/appContext'
import { IoLogoApple } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
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
	
		    <span className="title relative block px-[10px] h-[60px] text-start whitespace-nowrap text-3xl">ShopySam</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/dashboard">
		    <span className="icon">
			<IoPeopleOutline className='text-[1.75rem]' />
		    </span>
		    <span className="title">Dashboard</span>
		</Link>
	    </li>
	    <li>
		<Link className='side-link'  href="/admin/customers">
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
		<Link className='side-link'  href="/admin/upload-product">
		    <span className="icon">
			<AiFillProduct  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Upload Product</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/categories">
		    <span className="icon">
			<IoCheckboxOutline   className='text-[1.75rem]'/>
		    </span>
		    <span className="title">Categories</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/sub-categories">
		    <span className="icon">
			<IoHelpOutline  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Sub Categories</span>
		</Link>
	    </li>

	    <li>
		<Link className='side-link'  href="/admin/orders">
		    <span className="icon">
			<IoSettingsOutline  className='text-[1.75rem]' />
		    </span>
		    <span className="title">Orders</span>
		</Link>
	    </li>
	</ul>
    </div>
  )
}

export default AdminSide