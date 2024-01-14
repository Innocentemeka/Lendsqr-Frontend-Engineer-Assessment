import './Scss/App.scss';
import './Scss/Login.scss';
import './Scss/Dashboard.scss';
import './Scss/Navbar.scss';
import './Scss/UserDetails.scss';
import './Scss/Siderbar.scss';
import './Scss/UsersTable.scss';
import './Scss/Pagination.scss';
import './Scss/SelectLimit.scss';
import './Scss/MenuList.scss';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import UserDetails from './Components/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Siderbar from './Components/Siderbar';

function App() {
  const currentPath = window.location.pathname;
  return (
    <BrowserRouter>
      <div>
        <nav>
          {currentPath !== '/login' && <Navbar />}
        </nav>
        <div className='container'>
          {currentPath !== '/login' && <Siderbar />}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/userDetails' element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
