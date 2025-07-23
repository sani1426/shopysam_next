'use client'
import './admin.css'
import { IoEyeSharp } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";

const AdminCards = () => {


  return (
    <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">1,504</div>
                        <div class="cardName">Daily Views</div>
                    </div>

                    <div class="iconBx">
                        <IoEyeSharp />
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">80</div>
                        <div class="cardName">Sales</div>
                    </div>

                    <div class="iconBx">
                        <IoCardOutline />
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">284</div>
                        <div class="cardName">Customers</div>
                    </div>

                    <div class="iconBx">
                        <IoPeople />
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">$7,842</div>
                        <div class="cardName">Earning</div>
                    </div>

                    <div class="iconBx">
                        <IoCashOutline />
                    </div>
                </div>
            </div>
  )
}

export default AdminCards
