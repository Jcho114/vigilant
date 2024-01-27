import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import './NavBar.css';
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
      {userMenu ? <UserMenu /> : null}
      <div className="email" onClick={() => setUserMenu(!userMenu)}>
        <h1>{email}</h1>
      </div>
    </div>
  )
}

export default NavBar;