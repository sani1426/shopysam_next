
import './admin.css'


const AllUsers = ({allUsers}) => {
  
  return (
    <div class='recentCustomers'>
      <div class='cardHeader'>
        <h2>All Customers</h2>
      </div>

      <table>
        {allUsers.map((user) => (
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
        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer02.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              David <br /> <span>Italy</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer01.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              Amit <br /> <span>India</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer02.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              David <br /> <span>Italy</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer01.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              Amit <br /> <span>India</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer02.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              David <br /> <span>Italy</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer01.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              Amit <br /> <span>India</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer01.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              David <br /> <span>Italy</span>
            </h4>
          </td>
        </tr>

        <tr>
          <td width='60px'>
            <div class='imgBx'>
              <img src='assets/imgs/customer02.jpg' alt='' />
            </div>
          </td>
          <td>
            <h4>
              Amit <br /> <span>India</span>
            </h4>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AllUsers
