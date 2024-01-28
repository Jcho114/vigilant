import "./AdminReports.css";
import { useEffect, useState } from "react";
import AdminNavBar from "../AdminNavBar.tsx";
import AdminReportSideBar from "./AdminReportSideBar.tsx";
import AdminReportsFilterBar from "./AdminReportFilterBar.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

const AdminReports = () => {
  const [reports, setReports] = useState([]);
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function action() {
      setReports(
        await fetch(
          `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report`
        ).then((res) => res.json())
      );
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

  type Report = {
    report_id: string,
    validation: boolean,
    latitude: number,
    longitude: number,
    type: string,
    tanks: number,
    infantry: number,
    helicopters: number,
    planes: number,
    date: Date,
    description: string,
    image: string,
  }

  return (
    <div>
      <AdminNavBar email={String(user?.email)} />
      <div className="admin-reports">
        <AdminReportSideBar />
        <div className="admin-reports-cards">
            {reports.sort((a: Report, b: Report) => a.date > b.date ? -1 : 1).map((el: Report) => {
                return <div key={el.report_id} className="admin-reports-card">
                    <h1><strong>Date:</strong> {(new Date(el.date)).toLocaleString()}</h1>
                    <h1>Type: {el.type.toUpperCase()}</h1>
                    <h1>Tanks: {el.tanks} Infantry: {el.infantry} Helicopters: {el.helicopters} Planes: {el.planes}</h1>
                    <h1>Descpription: {el.description}</h1>
                </div>
            })}
        </div>
        <AdminReportsFilterBar setReports={setReports} />
      </div>
    </div>
  );
};

export default AdminReports;
