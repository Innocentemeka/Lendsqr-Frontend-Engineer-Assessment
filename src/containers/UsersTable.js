import React, { useEffect, useState } from 'react';
import userData from "../mock/mock";
import Pagination from '../Components/Pagination ';
import { MenuList, Organization } from '../Components/MenuList';
import { Link } from 'react-router-dom';


const tableHeaders = [
  'organization', "username", 'email', "Phone number", "Date Joined", "Status", ""
]

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const fetchUsers = async () => {
    setUsers(userData)
    console.log(userData)
  }

  useEffect(() => {
    fetchUsers()
  }, []);


  return (
    <div className='users'>
      <table>
        <thead>
          <tr >
            {tableHeaders.map((item, i) => <td>
              <div key={i} style={{ display: 'flex', marginRight: '15px' }}>
                <span style={{ marginRight: '5px' }}>{item}</span>
                {i !== tableHeaders.length - 1 && <Organization />}
              </div>
            </td>)}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, i) =>
            <tr key={i}>
              <td>Lendsqr</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td className='status-inactive'><span>Active</span></td>
              <td><Link><MenuList /></Link></td>
            </tr>)}
        </tbody>

      </table>
      <Pagination setCurrentItems={setCurrentItems} data={users} />
    </div>
  )
}

export default UsersTable