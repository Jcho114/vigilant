import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import './CivilianNavBar.css';
import { useState } from 'react';

const UserMenu = () => {
  const { user } = useAuth0();

  return (
    <div className="user-menu">
      <div className="user-menu-block">
        <h1>User:</h1>
        <h1>{user?.nickname}</h1>
      </div>
      <div className="user-menu-block">
        <h1>Email:</h1>
        <h1>{user?.email}</h1>
      </div>
      <div className="logout">
        <LogoutButton />
      </div>
    </div>
  )
}

const NavBar = ({ email }: { email: string }) => {
  const [userMenu, setUserMenu] = useState<boolean>(false);
  return (
    <div className="navbar">
      <h1>Vigilant</h1>
      <div className="vl" />
      <div className="description">
        <h1>Wartime Civilian</h1>
        <h1>Reporting Service</h1>
      </div>
      <div>
      <svg width="19.23" height="25" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4615 4.84619H2.92308C1.861 4.84619 1 5.70719 1 6.76927V24.0769C1 25.1391 1.861 26 2.92308 26H14.4615C15.5236 26 16.3846 25.1391 16.3846 24.0769V6.76927C16.3846 5.70719 15.5236 4.84619 14.4615 4.84619Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.84619 9.65387H12.5385" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.84619 14.4615H12.5385" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.84619 19.2692H8.69234" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.80762 1H18.3076C18.8176 1 19.3068 1.20261 19.6674 1.56326C20.028 1.9239 20.2307 2.41304 20.2307 2.92308V21.1923" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <div className="description">
          <h1>Reports</h1>
        </div>
      </div>
      {userMenu ? <UserMenu /> : null}
      <div className="email" onClick={() => setUserMenu(!userMenu)}>
        <h1>{email}</h1>
      </div>
    </div>
  )
}

export default NavBar;