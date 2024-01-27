import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import './Landing.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isAuthenticated }: any = useAuth0();

  return (
    <div className="landing">
      <h1>Vigilant</h1>
      {!isAuthenticated ? <LoginButton /> : null}
    </div>
  )
}

export default App;