import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Images/logo.png';
import Icon from '../Images/sign-in-icon.png';



const Login = () => {

  const navigate = useNavigate();

  function handleClik() {
    navigate('/dashboard');
  };

  return (
    <div className='login-form'>
      <div>
        <div>
          <img src={Logo} alt='logo-icon' className='logo' />
        </div>
        <div>
          <img src={Icon} alt='login-page-icon' className='sign-in-icon' />
        </div>
      </div>
      <div className='form_container'>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form>
          <div className='input-box'>
            <input type="text" placeholder='Email' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' />
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link className='forgot-password'>forgot password?</Link>
          </div>
          <button onClick={handleClik}>LOG IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login;