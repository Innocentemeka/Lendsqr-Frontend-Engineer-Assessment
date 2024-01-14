
import NpUsersIcon from '../Images/np_users.png';
import NpUsersGroupIcon from '../Images/np-users-group.png';
import NpLoanIcon from '../Images/np_loan.png';
import NpCoinIcon from '../Images/np_money-coin.png';
import UsersTable from '../containers/UsersTable';


const Dashboard = () => {

  return (
    <div className='users-details'>
      <h1>Users</h1>
      <div className='users-base'>
        <div className='base'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="#DF18FF" />
          </svg>
          <div className='image'>
            <img src={NpUsersIcon} alt="#" />
          </div>
          <h3>Users</h3>
          <p>2,453</p>
        </div>

        <div className='base'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="#5718FF" />
          </svg>
          <div className='image'>
            <img src={NpUsersGroupIcon} alt="#" />
          </div>
          <h3>Active Users</h3>
          <p>2,453</p>
        </div>

        <div className='base'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="#F55F44" />
          </svg>
          <div className='image'>
            <img src={NpLoanIcon} alt="#" />
          </div>
          <h3>Users with Loans</h3>
          <p>12,453</p>
        </div>

        <div className='base'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="#FF3366" />
          </svg>
          <div className='image'>
            <img src={NpCoinIcon} alt="#" />
          </div>
          <h3>Users with Savings</h3>
          <p>102,453</p>
        </div>
      </div>
      <div>
        <UsersTable />
      </div>
    </div>
  )
}

export default Dashboard;