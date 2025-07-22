import React from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import './admin.css'

const AdminNav = () => {
  return (
	<nav>
                <RiMenu5Fill  className='toggle-sidebar' />
			<form >
				<div className="form-group">
					<input type="text" placeholder="Search..." />
					<CiSearch className='icon' />
				</div>
			</form>
			<Link href="#" className="nav-link">
                        <RiMenu5Fill  className='' />
				<span className="badge">5</span>
			</Link>
			<Link href="#" className="nav-link">
			<CiSearch className='icon' />
				<span className="badge">8</span>
			</Link>
			<span className="divider"></span>
			<div className="profile">
				<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
				<ul className="profile-link">
					<li><Link href="#"><CiSearch className='icon' /> Profile</Link></li>
					<li><Link href="#"><CiSearch className='icon' /> Settings</Link></li>
					<li><Link href="#"><CiSearch className='icon' /> Logout</Link></li>
				</ul>
			</div>
		</nav>
  )
}

export default AdminNav