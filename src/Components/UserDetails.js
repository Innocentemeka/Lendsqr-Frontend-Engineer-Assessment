import { Link } from 'react-router-dom';
import ArrowRightIcon from '../Images/np_back.png';
import UserIcon from '../Images/np_user.png';
import StarIcon1 from '../Images/np_star_1.png';
import StarIcon from '../Images/np_star.png';


const userDetails = () => {
  return (
    <div className='details-container'>
      <div className='header'>
        <Link className='arrow-back' to='/dashboard'>
          <img src={ArrowRightIcon} alt="details-icon" />
          <span><p>Back to Users</p></span>
        </Link>

        <div className='title'>
          <h1>User Details</h1>
          <div>
            <button className='blacklist-btn'>Blacklist User</button>
            <button className='activate-btn'>Activate User</button>
          </div>
        </div>
      </div>

      <div className='user-info-container'>
        <div className='user-info'>
          <div className='user-profile'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle opacity="0.16" cx="50" cy="50" r="50" fill="#213F7D" />
            </svg>
            <img src={UserIcon} alt="user-details-icon" />
            <span>
              <h2>Grace Effiom</h2>
              <p>LSQFf587g90</p>
            </span>
          </div>

          <div className='line'></div>

          <div className='user-tier'>
            <p>User’s Tier</p>
            <img src={StarIcon1} alt="user-details-icon" />
            <img src={StarIcon} alt="user-details-icon" />
            <img src={StarIcon} alt="user-details-icon" />
          </div>

          <div className='line'></div>

          <div className='user-balance'>
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className='accounting-records'>
          <Link className='record active'>General Details</Link>
          <Link className='record'>Documents</Link>
          <Link className='record'>Bank Details</Link>
          <Link className='record'>Loans</Link>
          <Link className='record'>Savings</Link>
          <Link className='record'>App and System</Link>
        </div>
        <div class="tab-line"></div>
      </div>

      <div className='user-personal-info'>
        <h1>Personal Information</h1>
        <div>
          <div className='details'>
            <div className='info'>
              <p>Full Name</p>
              <h3>Grace Effiom</h3>
              <div style={{ margin: '30px 0 0 0' }}>
                <p>Marital status</p>
                <h3>Single</h3>
              </div>
            </div>
            <div className='info'>
              <p>Phone Number</p>
              <h3>07060780922</h3>
              <div style={{ margin: '30px 0 0 0' }}>
                <p>Children</p>
                <h3>None</h3>
              </div>
            </div>
            <div className='info'>
              <p>Email Address</p>
              <h3>grace@gmail.com</h3>
              <div style={{ margin: '30px 0 0 0' }}>
                <p>Type of residence</p>
                <h3>Parent’s Apartment</h3>
              </div>
            </div>
            <div className='info'>
              <p>BVN</p>
              <h3>07060780922</h3>
            </div>
            <div className='info'>
              <p>Gender</p>
              <h3>Female</h3>
            </div>

          </div>
        </div>

        <div className='line'></div>

        <h1>Education and Employment</h1>
        <div>
          <div className='details'>
            <div className='info'>
              <p>level of education</p>
              <h3>B.Sc</h3>
              <div style={{ margin: '30px 0 0 0' }}>
                <p>office email</p>
                <h3>grace@lendsqr.com</h3>
              </div>
            </div>
            <div className='info'>
              <p>Employment Status</p>
              <h3>Employed</h3>
              <div style={{ margin: '30px 0 0 0' }}>
                <p>Monthly income</p>
                <h3>₦200,000.00- ₦400,000.00</h3>
              </div>
            </div>
            <div className='info'>
              <p>sector of employment</p>
              <h3>FinTech</h3>
              <div style={{ margin: '30px 0 0 0' }}>
                <p>loan repayment</p>
                <h3>40,000</h3>
              </div>
            </div>
            <div className='info'>
              <p>Duration of employment</p>
              <h3>2 years</h3>
            </div>

          </div>
          <div style={{ marginTop: '30px' }}>
            <div className='details'>



            </div>
          </div>
        </div>

        <div className='line'></div>

        <div>
          <h1>Socials</h1>
          <div className='details'>
            <div className='info'>
              <p>Twitter</p>
              <h3>@grace_effiom</h3>
            </div>
            <div className='info'>
              <p>Facebook</p>
              <h3>Grace Effiom</h3>
            </div>
            <div className='info'>
              <p>Instagram</p>
              <h3>@grace_effiom</h3>
            </div>
          </div>
        </div>

        <div className='line'></div>

        <div>
          <h1>Guarantor</h1>
          <div className='details'>
            <div className='info'>
              <p>full Name</p>
              <h3>Debby Ogana</h3>
            </div>
            <div className='info'>
              <p>Phone Number</p>
              <h3>07060780922</h3>
            </div>
            <div className='info'>
              <p>Email Address</p>
              <h3>debby@gmail.com</h3>
            </div>
            <div className='info'>
              <p>Relationship</p>
              <h3>Sister</h3>
            </div>
          </div>
        </div>

        <div className='line'></div>

        <div style={{ marginTop: '50px' }}>
          <div className='details'>
            <div className='info'>
              <p>full Name</p>
              <h3>Debby Ogana</h3>
            </div>
            <div className='info'>
              <p>Phone Number</p>
              <h3>07060780922</h3>
            </div>
            <div className='info'>
              <p>Email Address</p>
              <h3>debby@gmail.com</h3>
            </div>
            <div className='info'>
              <p>Relationship</p>
              <h3>Sister</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userDetails;