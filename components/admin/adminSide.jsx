"use client"

import Link from 'next/link'
import './admin.css'

const AdminSide = () => {

  return (
    <section id="sidebar">
		<Link href="#" className="brand"><i class='bx bxs-smile icon'></i> AdminSite</Link>
		<ul className="side-menu">
			<li><Link href="#" className="active"><i class='bx bxs-dashboard icon' ></i> Dashboard</Link></li>
			<li className="divider" data-text="main">Main</li>
			<li>
				<a href="#"><i className='bx bxs-inbox icon' ></i> Elements <i class='bx bx-chevron-right icon-right' ></i></a>
				<ul className="side-dropdown">
					<li><a href="#">Alert</a></li>
					<li><a href="#">Badges</a></li>
					<li><a href="#">Breadcrumbs</a></li>
					<li><a href="#">Button</a></li>
				</ul>
			</li>
			<li><a href="#"><i class='bx bxs-chart icon' ></i> Charts</a></li>
			<li><a href="#"><i class='bx bxs-widget icon' ></i> Widgets</a></li>
			<li class="divider" data-text="table and forms">Table and forms</li>
			<li><a href="#"><i class='bx bx-table icon' ></i> Tables</a></li>
			<li>
				<Link href="#"><i class='bx bxs-notepad icon' ></i> Forms <i class='bx bx-chevron-right icon-right' ></i></Link>
				<ul class="side-dropdown">
					<li><Link href="#">Basic</Link></li>
					<li><Link href="#">Select</Link></li>
					<li><Link href="#">Checkbox</Link></li>
					<li><Link href="#">Radio</Link></li>
				</ul>
			</li>
		</ul>
		<div className="ads">
			<div className="wrapper">
				<Link href="#" className="btn-upgrade">Upgrade</Link>
				<p>Become a <span>PRO</span> member and enjoy <span>All Features</span></p>
			</div>
		</div>
	</section>
  )
}

export default AdminSide