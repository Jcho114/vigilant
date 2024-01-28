/* eslint-disable @typescript-eslint/no-explicit-any */
import TrendReportCard from "./TrendReportCard";
import "./TrendForm.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrendForm = ({ trends, setTrends, markers, clickedMarkers }: any) => {
  console.log(clickedMarkers);
  
  async function createTrend() {
    const trend = await fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/v1/trend/add`,
    {
      method: "POST",
      body: JSON.stringify({
        data: clickedMarkers
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json());
    setTrends([...trends, trend]);
  }

  return (
    <div className="trend-form-container">
      <div className="trend-form-reportform">
        <div className="trend-form-header">
          <p className="trend-form-title">New Trend</p>
          <div onClick={() => createTrend()} className="trend-form-submit">Submit</div>
        </div>
        <div className="trend-form-scrollable-window">
          {clickedMarkers.map((data: any) => {
            return <TrendReportCard key={data} report_id={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendForm;
