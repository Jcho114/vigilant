import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import './Landing.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isAuthenticated }: any = useAuth0();

  return (
    <div className="landing">
      <div className="topnav">
        <div className="topnav-left">
          <a href="#home">Vigilant | Wartime Civilian Reporting Services</a>
        </div>

        <div className="topnav-right">
          <a href="#signup">Sign up</a>
          <a href="#signin">Sign in</a>
          <a href="#support">Support</a>
        </div>
      </div>

      {!isAuthenticated ? <LoginButton /> : null}
    </div>
    
  )
}

export default App;