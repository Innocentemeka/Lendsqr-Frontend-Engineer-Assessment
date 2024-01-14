import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';
import SearchIcon from '../Images/Search-icon.png';
import NotifyIcon from '../Images/Notification-icon.png';
import ProfilePhoto from '../Images/Profile-photo.png';
import DropDownIcon from '../Images/Drop-down.png';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div>
        <img src={Logo} alt='navbar-icon' className='logo' />
      </div>
      <div className='search-box'>
        <input type="text" placeholder='Search for anything' />
        <label className='search-icon'>
          <img src={SearchIcon} alt="navbar-icon" />
        </label>
      </div>
      <div className='info-box'>
        <Link className='docs'>Docs</Link>
        <img src={NotifyIcon} alt="navbar-icon" className='notify-icon' />
        <div>
          <img src={ProfilePhoto} alt="navbar-icon" className='profile-photo' />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>Adedeji</h1>
          <img src={DropDownIcon} alt="navbar-icon" className='arrow-down-icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;