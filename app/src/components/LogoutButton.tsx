import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { logout }: any = useAuth0();
  return <button onClick={() => logout({
    logoutParams: { returnTo: window.location.origin }
  })}>Log Out</button>
}

export default LogoutButton;