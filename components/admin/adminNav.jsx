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
	    <RiMenu5Fill />
	</div>

	<div class="search">
	    <label>
		<input type="text" placeholder="Search here" />
		<CiSearch />
	    </label>
	</div>

	<div class="user">
	    <img src="assets/imgs/customer01.jpg" alt="" />
	</div>
    </div>
  )
}

export default AdminNav