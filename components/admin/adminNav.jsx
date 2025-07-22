"use client"
import React, { useEffect } from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import './admin.css'

const AdminNav = () => {
        useEffect(()=> {

        },[])
  return (
	<div class="topbar">
	<div class="toggle">
	    <ion-icon name="menu-outline"></ion-icon>
	</div>

	<div class="search">
	    <label>
		<input type="text" placeholder="Search here" />
		<ion-icon name="search-outline"></ion-icon>
	    </label>
	</div>

	<div class="user">
	    <img src="assets/imgs/customer01.jpg" alt="" />
	</div>
    </div>
  )
}

export default AdminNav