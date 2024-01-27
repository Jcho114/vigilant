import { useQuery } from '@tanstack/react-query';
import './Filter.css';
import { useState } from "react";

const Filter = () => {
  const [location, setLocation] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [federal, setFederal] = useState<boolean>(false);
  const [local, setLocal] = useState<boolean>(false);
  const [unverified, setUnverified] = useState<boolean>(false);

  console.log(location, startTime, endTime, federal, local, unverified)

  const { isPending, error, data } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      // Add later
      return "";
    }
  });

  if (isPending) return "Loading...";

  if (error) return `Error: ${error}`;

  return (
    <div className="filter">
      <div className="filter-tag">
        <h1>Filters</h1>
      </div>
      <hr />
      <div className="block location-region">
        <h1>Location / Region</h1>
        <select onChange={(e) => setLocation(e.target.value)}>
          {null /* Render this via frontend next */}
        </select>
      </div>
      <div className="block timeline">
        <h1>Timeline</h1>
        <div className="timeline-ui">
          <input type="text" maxLength={4} onBlur={(e) => setStartTime(e.target.value)}/>
          <h3>--</h3>
          <input type="text" maxLength={4} onBlur={(e) => setEndTime(e.target.value)}/>
        </div>
      </div>
      <div className="block status">
        <h1>Status</h1>
        <input type="checkbox" onClick={() => setFederal(!federal)} id="federal"/>
        <label htmlFor="federal">Federal Validated Reports</label><br/>
        <input type="checkbox" onClick={() => setLocal(!local)} id="local"/>
        <label htmlFor="local">Local Gov. Validated Reports</label><br/>
        <input type="checkbox" onClick={() => setUnverified(!unverified)} id="unverified"/>
        <label htmlFor="unverified">Unverified (Civilian) Reports</label><br/>
      </div>
      <hr />
    </div>
  )
}

export default Filter;