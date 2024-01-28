import { useAuth0 } from '@auth0/auth0-react';
import './AdminWarfront.css';
import { useQuery } from '@tanstack/react-query';
import AdminNavBar from '../components/AdminNavBar';
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import AdminWarfrontMap from '../components/AdminWarfront/AdminWarfrontMap';
import AdminWarfrontRightBar from '../components/AdminWarfront/AdminWarfrontRightBar';

// On a given day (chosen with filter) map out a warfront
const AdminWarfront = () => {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [reports, setReports] = useState([]);
  const [selectedReports, setSelectedReports] = useState([]);

  useEffect(() => {
    async function action() {
      setReports(await fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report`).then(res => res.json()));
    }
    action();
  }, []);

  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE,
        },
      });
      const users = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/user?user_id=${
          user?.sub
        }`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ).then((res) => res.json());
      if (user && JSON.stringify(users) == "[]") {
        console.log("creating user");
        return await fetch(
          `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/user/add`,
          {
            method: "POST",
            body: JSON.stringify({
              user_id: user.sub,
              privilege: 2,
              name: user.nickname,
              location: null,
              phone: null,
              date_registered: new Date(),
              reports: [],
              validated_reports: 0,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      return users;
    },
    enabled: !!user,
  });

  if (isLoading || isPending) return "Loading...";

  if (!isAuthenticated || !data) return "Not Authenticated";

  if (error) return `Error: ${error}`;

  return (
    <div>
      <AdminNavBar email={String(user?.email)} />
      <div className="content">
        <SideBar setReports={setReports} />
        <AdminWarfrontMap setSelectedReports={setSelectedReports} selectedReports={selectedReports} reports={reports} name="minimap" />
        <AdminWarfrontRightBar selectedReports={selectedReports} reports={reports} />
      </div>
    </div>
  )
}

export default AdminWarfront;