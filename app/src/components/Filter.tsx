import './Filter.css';
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Filter = ({ setReports }: any) => {
  const [, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);

  async function startFilter() {
    let url;
    if (startDate !== "" && startTime !== "" && endDate !== "" && endTime !== "") {
      url = `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report?start=${new Date(Date.parse(`${startDate} ${startTime}`)).toISOString()}&end=${new Date(Date.parse(`${endDate} ${endTime}`)).toISOString()}&validation=${verified}`
    } else {
      url = `${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/report?validation=${verified}`
    }
    console.log(url);
    const reports = await fetch(url)
                            .then(res => res.json());
    setReports(reports);
  }


  return (
    <div className="filter">
      <div className="filter-tag">
        <h1>Filters</h1>
      </div>
      <hr />
      <div className="block location-region">
        <h1>Location / Region (TBD)</h1>
        <select disabled={true} onChange={(e) => setLocation(e.target.value)}>
          {null /* Render this via frontend next */}
        </select>
      </div>
      <div className="block timeline">
        <h1>Start Date & Time</h1>
        <div className="timeline-ui">
          <input type="date" onChange={(e) => setStartDate(e.target.value)}/>
          <input type="time" onChange={(e) => setStartTime(e.target.value)}/>
        </div>
        <h1>End Date & Time</h1>
        <div className="timeline-ui">
          <input type="date" onChange={(e) => setEndDate(e.target.value)}/>
          <input type="time" onChange={(e) => setEndTime(e.target.value)}/>
        </div>
      </div>
      <div className="block status">
        <h1>Status</h1>
        <input type="checkbox" onClick={() => setVerified(!verified)} id="unverified"/>
        <label htmlFor="unverified">Verified (Civilian) Reports</label><br/>
      </div>
      <button style={{marginBottom: "1rem", fontSize: "0.85rem"}} onClick={() => startFilter()}>Filter</button>
      <hr />
    </div>
  )
}

export default Filter;