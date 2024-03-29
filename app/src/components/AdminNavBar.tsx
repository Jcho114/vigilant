import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import './CivilianNavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link style={{ textDecoration: "none", color: "white" }} to="/"><h1>Vigilant</h1></Link>
      <div className="vl" />
      <div className="description">
        <h1>Wartime Civilian</h1>
        <h1>Reporting Service</h1>
      </div>
      <div className="misc-stuff">
        <Link style={{ textDecoration: "none", color: "white" }} to="/admin-dashboard/trends"><h2>Trends</h2></Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/admin-dashboard/reports"><h2>Reports</h2></Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/admin-dashboard/warfront"><h2>Warfront</h2></Link>
      </div>
      {userMenu ? <UserMenu /> : null}
      <div className="email" onClick={() => setUserMenu(!userMenu)}>
        <h1>{email}</h1>
      </div>
    </div>
  )
}

export default NavBar;