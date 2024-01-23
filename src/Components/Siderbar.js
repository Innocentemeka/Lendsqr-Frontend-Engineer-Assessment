import { Link } from 'react-router-dom';
import BriefcaseIcon from '../Images/briefcase -icon.png';
import ArrowDown from '../Images/arrow-down.png';
import HomeIcon from '../Images/home.png';
import UserFriendsIcon from '../Images/user-friends.png';
import UserIcon from '../Images/users.png';
import SackIcon from '../Images/sack.png';
import HandshakeIcon from '../Images/handshake.png';
import PiggyBankIcon from '../Images/piggy-bank.png';
import GroupIcon from '../Images/Group.png';
import UserCheckIcon from '../Images/user-check.png';
import UserTimeIcon from '../Images/user-times.png';
import BankIcon from '../Images/np_bank_.png';
import CoinsIcon from '../Images/coins-solid.png';
import TransactionIcon from '../Images/icon.png';
import GalaxyIcon from '../Images/galaxy.png';
import UserCogIcon from '../Images/user-cog.png';
import ScrollIcon from '../Images/scroll.png';
import ChartBarIcon from '../Images/chart-bar.png';
import SlidersIcon from '../Images/sliders.png';
import BadgePercentIcon from '../Images/badge-percent.png';
import ClipboardIcon from '../Images/badge-percent.png';
import SignOutIcon from '../Images/sign-out.png';

import React from 'react'

export const Siderbar = () => {
  return (
    <div className='side-bar'>
      <ul className='menu'>
        <div className='Dashboard'>
          <li>
            <Link className='header'>
              <img src={BriefcaseIcon} alt="siderbar-icon" />
              <span>Switch Organization</span>
              <img src={ArrowDown} alt="siderbar-icon" />
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={HomeIcon} alt="siderbar-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
        </div>


        <div className='customers'>
          <h1>CUSTOMERS</h1>
          <li>
            <Link className='header active'>
              <img src={UserFriendsIcon} alt="siderbar-icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserIcon} alt="siderbar-icon" />
              <span>Guarantors</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={SackIcon} alt="siderbar-icon" />
              <span>Loans</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={HandshakeIcon} alt="siderbar-icon" />
              <span>Decision Models</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={PiggyBankIcon} alt="siderbar-icon" />
              <span>Savings</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={GroupIcon} alt="siderbar-icon" />
              <span>Loan Requests</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserCheckIcon} alt="siderbar-icon" />
              <span>Whitelist</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserTimeIcon} alt="siderbar-icon" />
              <span>Karma</span>
            </Link>
          </li>
        </div>

        <div className='businesses'>
          <h1>BUSINESSES</h1>
          <li>
            <Link className='header'>
              <img src={BriefcaseIcon} alt="siderbar-icon" />
              <span>Organization</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={GroupIcon} alt="siderbar-icon" />
              <span>Loan Products</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={BankIcon} alt="siderbar-icon" />
              <span>Savings Products</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={CoinsIcon} alt="siderbar-icon" />
              <span>Fees and Charges</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={TransactionIcon} alt="siderbar-icon" />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={GalaxyIcon} alt="siderbar-icon" />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserCogIcon} alt="siderbar-icon" />
              <span>Service Account</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={ScrollIcon} alt="siderbar-icon" />
              <span>Settlements</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={ChartBarIcon} alt="siderbar-icon" />
              <span>Reports</span>
            </Link>
          </li>
        </div>


        <div className='settings'>
          <h1>SETTINGS</h1>
          <li>
            <Link className='header'>
              <img src={SlidersIcon} alt="siderbar-icon" />
              <span>Preferences</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={BadgePercentIcon} alt="siderbar-icon" />
              <span>Fees and Pricing</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={ClipboardIcon} alt="siderbar-icon" />
              <span>Audit Logs</span>
            </Link>
          </li>

          <div className='line-divider'></div>

          <li>
            <Link className='header' to='/'>
              <img src={SignOutIcon} alt="siderbar-icon" />
              <span>Logout</span>
            </Link>
          </li>
        </div>

        <div className="line"></div>
      </ul>
      <p>v1.2.0</p>
    </div>
  )
}

export default Siderbar;
