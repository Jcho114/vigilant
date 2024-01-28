import { useState } from 'react';
import './AdminReportFilterBar.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminReportsFilterBar = ({ setReports }: any) => {
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [verified, setVerified] = useState(false);

    async function filterReports() {
        let url;
        if (startDate !== "" && startTime !== "" && endDate !== "" && endTime !== "") {
          url = `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report?start=${startDate + startTime}&end=${endDate + endTime}&validation=${verified}`
        } else {
          url = `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report?validation=${verified}`
        }
        const reports = await fetch(url).then(res => res.json());
        setReports(reports);
    }

    return (
      <div className="admin-reports-filter-bar">
        <div className="admin-reports-filter-bar-title">
            <h1>Filters</h1>
        </div>
        <hr />
        <div className="admin-reports-block admin-reports-timeline">
          <h1>Start Date & Time</h1>
          <div className="admin-reports-timeline-ui">
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
            <input
              type="time"
              onChange={(e) => setStartTime(`T${e.target.value}:00`)}
            />
          </div>
          <h1>End Date & Time</h1>
          <div className="admin-reports-timeline-ui">
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
            <input
              type="time"
              onChange={(e) => setEndTime(`T${e.target.value}:00`)}
            />
          </div>
        </div>
        <div className="admin-reports-block">
            <h1>Status</h1>
            <input type="checkbox" onClick={() => setVerified(!verified)} id="verified"/>
            <label htmlFor="verified">Verified (Civilian) Reports</label>
        </div>
        <div className="admin-reports-filter-button">
            <button onClick={() => filterReports()}>Filter</button>
        </div>
      </div>
    );
}
export default AdminReportsFilterBar;