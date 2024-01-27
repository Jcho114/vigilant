import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { loginWithRedirect }: any = useAuth0();

  
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default LoginButton;