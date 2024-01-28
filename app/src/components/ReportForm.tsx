import { useState } from "react";
import "./ReportForm.css";
import { useAuth0 } from "@auth0/auth0-react";

// Change schema for types in reports
const ReportForm = ({lat, long}: {lat: number, long: number}) => {
  const [type, setType] = useState<string>("info");
  const [tank, setTanks] = useState<number>(0);
  const [infantry, setInfantry] = useState<number>(0);
  const [helicopter, setHelicopters] = useState<number>(0);
  const [plane, setPlanes] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const { isLoading, user, getAccessTokenSilently } = useAuth0();

  if (isLoading) return "Loading...";

  const addReport = async (accessToken: string, unit_type: string, unit_amount: number) => {
    return await fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report/add`, {
      method: "POST",
      body: JSON.stringify({
        validation: false,
        latitude: lat,
        longitude: long,
        type: type,
        unit: unit_type,
        amount: unit_amount,
        date: new Date(),
        description: description,
        image: null
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }
    }).then(async (res) => (await res.clone().json()).new_report).catch(error => console.error(error));
  }

  const addReportToUserList = async (id: string) => {
    await fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/user/report`, {
      method: "PUT",
      body: JSON.stringify({
        user_id: user?.sub,
        report_id: id
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  async function fileReports() {
    const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE
      }
    });
    if (tank > 0) {
      const { report_id:tank_report_id } = await addReport(accessToken, "tank", tank);
      await addReportToUserList(tank_report_id);
    }
    if (infantry > 0) {
      const { report_id:infantry_report_id } = await addReport(accessToken, "infantry", infantry);
      await addReportToUserList(infantry_report_id);
    }
    if (helicopter > 0) {
      const { report_id:helicopter_report_id } = await addReport(accessToken, "helicopter", helicopter);
      await addReportToUserList(helicopter_report_id);
    }
    if (plane > 0) {
      const { report_id:plane_report_id } = await addReport(accessToken, "plane", plane);
      await addReportToUserList(plane_report_id);
    }
    setType("info");
    setTanks(0);
    setInfantry(0);
    setHelicopters(0);
    setPlanes(0);
    setDescription("");
    window.location.reload();
  }

  return (
    <div className="reportformcontainer">
      <div className="reportform">
        <div className="title">
          <h1>New Report</h1>
        </div>
        <div className="infotype">
          <table>
            <tbody>
              <tr>
                <td style={type === "warning" ? {color : "gray"} : {}} onClick={() => setType("warning")}>Warning</td>
                <td style={type === "danger" ? {color : "gray"} : {}} onClick={() => setType("danger")}>Danger</td>
                <td style={type === "info" ? {color : "gray"} : {}} onClick={() => setType("info")}>Info</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="reports">
          <div className="tank">
            <h1>Armor / Tanks</h1>
            <div className="amounts">
              <input type="checkbox" checked={tank !== 0} onClick={() => {
                if (tank !== 0) setTanks(0);
              }}/>
              # <input value={tank} type="number" min={0} onChange={(e) => setTanks(Number(e.target.value))}/>
            </div>
          </div>
          <div className="infantry">
            <h1>Infantry</h1>
            <div className="amounts">
              <input type="checkbox" checked={infantry !== 0} onClick={() => {
                if (infantry !== 0) setInfantry(0);
              }}/>
              # <input value={infantry} type="number" step={10} min={0} onChange={(e) => setInfantry(Number(e.target.value))}/>
            </div>
          </div>
          <div className="helicopter">
            <h1>Helicopter</h1>
            <div className="amounts">
              <input type="checkbox" checked={helicopter !== 0} onClick={() => {
                if (helicopter !== 0) setHelicopters(0);
              }}/>
              # <input value={helicopter} type="number" min={0} onChange={(e) => setHelicopters(Number(e.target.value))}/>
            </div>
          </div>
          <div className="plane">
            <h1>Plane</h1>
            <div className="amounts">
              <input type="checkbox" checked={plane !== 0} onClick={() => {
                if (plane !== 0) setPlanes(0);
              }}/>
              # <input value={plane} type="number" min={0} onChange={(e) => setPlanes(Number(e.target.value))}/>
            </div>
          </div>
        </div>
        <div className="location">
          <p>Location: Latitude:{lat}</p>
          <p>Longitute:{long}</p>
        </div>
        <div className="description">
          <h1>Description of report:</h1>
          <textarea onBlur={(e) => setDescription(e.target.value)}/>
        </div>
        <button onClick={() => fileReports()}>Submit</button>
      </div>
    </div>
  );
};

export default ReportForm;
