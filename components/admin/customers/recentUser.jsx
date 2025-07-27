
import React from 'react'
import '../admin.css'

const RecentUsers = ({allUsers}) => {
  return (
        <div class='recentCustomers'>
      <div class='cardHeader'>
        <h2>Recent Customers</h2>
      </div>

      <table>
        {allUsers?.map((user) => (
          <tr>
            <td width='60px'>
              <div class='imgBx'>
                <img src={user?.avatar} alt={user?.name} />
              </div>
            </td>
            <td>
              <h4>
                {user?.name}
                <br /> <span>{user?.email}</span>
              </h4>
            </td>
          </tr>
        ))}

      </table>
    </div>
  )
}

export default RecentUsers