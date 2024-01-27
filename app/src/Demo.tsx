import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import LogoutButton from "./components/LogoutButton";

const Demo = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { getAccessTokenSilently, user }: any = useAuth0();

  const { isPending, error, data } = useQuery({
    queryKey: ['placeholderData'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE
        }
      });
      return fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/protected`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res => res.json());
    }
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <p>{data.message}</p>
      <p>{user.sub}</p>
      <p>{user.email}</p>
      <LogoutButton />
    </>
  )
}

export default Demo;