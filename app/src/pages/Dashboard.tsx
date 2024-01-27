import Map from '../components/Map';
import NavBar from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import './Dashboard.css';
import SideBar from '../components/SideBar';

const Dashboard = () => {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE
        }
      });
      const users = await fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/user?user_id=${user?.sub}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res => res.json());
      if (user && JSON.stringify(users) == "[]") {
        console.log("creating user");
        return await fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/user/add`, {
          method: "POST",
          body: JSON.stringify({
            user_id: user.sub,
            privilege: 2,
            name: user.nickname,
            location: null,
            phone: null,
            date_registered: new Date(),
            reports: [],
            validated_reports: 0
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        });
      }
      return users;
    },
    enabled: !!user
  });

  if (isLoading || isPending) return "Loading...";

  if (!isAuthenticated || !data) return "Not Authenticated";

  if (error) return `Error: ${error}`;

  return (
    <div className="dashboard">
      <NavBar email={user ? String(user.email) : ""}/>
      <div className="content">
        <SideBar />
        <Map name={"minimap"}/>
      </div>
    </div>
  )
}

export default Dashboard;