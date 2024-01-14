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
              <img src={BriefcaseIcon} alt="#" />
              <span>Switch Organization</span>
              <img src={ArrowDown} alt="#" />
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={HomeIcon} alt="#" />
              <span>Dashboard</span>
            </Link>
          </li>
        </div>


        <div className='customers'>
          <h1>CUSTOMERS</h1>
          <li>
            <Link className='header active'>
              <img src={UserFriendsIcon} alt="#" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserIcon} alt="#" />
              <span>Guarantors</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={SackIcon} alt="#" />
              <span>Loans</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={HandshakeIcon} alt="#" />
              <span>Decision Models</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={PiggyBankIcon} alt="#" />
              <span>Savings</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={GroupIcon} alt="#" />
              <span>Loan Requests</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserCheckIcon} alt="#" />
              <span>Whitelist</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserTimeIcon} alt="#" />
              <span>Karma</span>
            </Link>
          </li>
        </div>

        <div className='businesses'>
          <h1>BUSINESSES</h1>
          <li>
            <Link className='header'>
              <img src={BriefcaseIcon} alt="#" />
              <span>Organization</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={GroupIcon} alt="#" />
              <span>Loan Products</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={BankIcon} alt="#" />
              <span>Savings Products</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={CoinsIcon} alt="#" />
              <span>Fees and Charges</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={TransactionIcon} alt="#" />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={GalaxyIcon} alt="#" />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={UserCogIcon} alt="#" />
              <span>Service Account</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={ScrollIcon} alt="#" />
              <span>Settlements</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={ChartBarIcon} alt="#" />
              <span>Reports</span>
            </Link>
          </li>
        </div>


        <div className='settings'>
          <h1>SETTINGS</h1>
          <li>
            <Link className='header'>
              <img src={SlidersIcon} alt="#" />
              <span>Preferences</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={BadgePercentIcon} alt="#" />
              <span>Fees and Pricing</span>
            </Link>
          </li>
          <li>
            <Link className='header'>
              <img src={ClipboardIcon} alt="#" />
              <span>Audit Logs</span>
            </Link>
          </li>

          <div className='line-divider'></div>

          <li>
            <Link className='header' to='/login'>
              <img src={SignOutIcon} alt="#" />
              <span>Logout</span>
            </Link>
          </li>
        </div>

        <div class="line"></div>
      </ul>
      <p>v1.2.0</p>
    </div>
  )
}

export default Siderbar;
