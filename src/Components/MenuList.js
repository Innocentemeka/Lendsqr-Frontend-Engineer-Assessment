import React, { useRef, useState } from 'react';
import MoreVertIcon from '../Images/ellipsis-vertical.png';
import ViewIcon from '../Images/np_view.png';
import BlackListIcon from '../Images/np_delete-friend.png';
import ActivateUserIcon from '../Images/np_user_.png';
import BarFilterIcoin from '../Images/bars-filter.png';
import { Link } from 'react-router-dom';

export const MenuList = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false)
    }
  })

  return (
    <div>
      <img src={MoreVertIcon} alt="open-menu-icon"
        onClick={() => setOpen(!open)}
        ref={imgRef}
      />
      {open && (

        <div ref={menuRef} className='menu-item'>
          <Link onClick={() => setOpen(false)}
            className='item'
            to='/userDetails'
          ><img src={ViewIcon} alt="menu-icon" />
            <span>View Details</span>
          </Link>

          <Link onClick={() => setOpen(false)}
            className='item'
          ><img src={BlackListIcon} alt="menu-icon" />
            <span>Blacklist User</span>
          </Link>

          <Link onClick={() => setOpen(false)}
            className='item'
          ><img src={ActivateUserIcon} alt="menu-icon" />
            <span>Activate User</span>
          </Link>
        </div>
      )}
    </div>
  )
}


export const Organization = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false)
    }
  })

  return (
    <div className='organization'>
      <img src={BarFilterIcoin} alt="table-icon"
        onClick={() => setOpen(!open)}
        ref={imgRef}
      />
      {open && (
        <div ref={menuRef} className='form-wrapper'>
          <div>
            <p>Organization</p>
            <select>
              <option>Select</option>
            </select>
          </div>
          <form>
            <label for="name">Username</label>
            <input type='text' className='input-box' placeholder='User' />
            <label for="email">Email</label>
            <input type='email' className='input-box' placeholder='Email' />
            <label for="date">Date</label>
            <input type='date' className='input-box' placeholder='Date' />
            <label for="number">Phone Number</label>
            <input type='number' className='input-box' placeholder='Phone Number' />
          </form>
          <div>
            <p>Status</p>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className='btn-container'>
            <button className='reset-btn'>Reset</button>
            <button className='filter-btn'>Filter</button>
          </div>
        </div>
      )}
    </div>
  )
}
