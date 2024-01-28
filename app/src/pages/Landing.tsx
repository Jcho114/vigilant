import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import './Landing.css';
import NavBar from "../components/CivilianNavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

Aos.init();

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLoading, isAuthenticated, user }: any = useAuth0();

  if (isLoading) return "Loading..."

  return (
    <>
      <NavBar email={user?.email}/>
      <div className="landing">
        <h1 data-aos="fade-up">Vigilent</h1>
        <div data-aos="fade-up">
          {!isAuthenticated ? <LoginButton /> : <Link to="/dashboard"><button>Dashboard</button></Link>}
        </div>
      </div>
    </>
  )
}

export default App;