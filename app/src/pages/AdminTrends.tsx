import TrendMap from '../components/trends/TrendMap';
import AdminNavBar from '../components/AdminNavBar';
import TrendSideBar from '../components/trends/TrendSideBar';
import TrendForm from '../components/trends/TrendForm';
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import './AdminTrends.css';

const AdminTrends = () => {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [clickedMarkers, setClickedMarkers] = useState([]);
  const [trends, setTrends] = useState([0,1,2]);
  const [markers, setMarkers] = useState([]);
  const [daysBefore, setDaysBefore] = useState(0);

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
    <div className = "admin-trends">
        <AdminNavBar email={user?.email} />
        <div className="content">
            <TrendSideBar trends={trends} />
            <TrendMap markers = {markers} setMarkers = {setMarkers}
                      name = {"minimap"} clickedMarkers = {clickedMarkers} 
                      setClickedMarkers = {setClickedMarkers} />
            <TrendForm trends={trends} setTrends={setTrends} markers = {markers} clickedMarkers = {clickedMarkers}/>
            <div className="admin-trends-slider">
              Days Before ({daysBefore}):
              <input onChange={async (e) => {
                const sampleDate = new Date();
                const newDaysBefore = Number(e.target.value);
                console.log( Number(sampleDate.getDay())-newDaysBefore);
                const startDate = new Date(sampleDate.getFullYear(), sampleDate.getMonth(), Number(sampleDate.getDate())-newDaysBefore, 0, 0, 0, 0);
                const endDate = new Date(sampleDate.getFullYear(), sampleDate.getMonth(), Number(sampleDate.getDate())-newDaysBefore, 23, 59, 59, 59);
                const url = `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report?start=${startDate.toISOString()}&end=${endDate.toISOString()}&validation=${false}`;
                console.log(url);
                // &validation=${verified if you want to put this in
                const new_markers = await fetch(url).then(res => res.json());
                console.log(new_markers);
                setMarkers(new_markers);
                setDaysBefore(newDaysBefore);
              }} type="range" defaultValue="0" min="0" max="7" step="1"></input>
            </div>
        </div>
    </div>
  )
}

export default AdminTrends