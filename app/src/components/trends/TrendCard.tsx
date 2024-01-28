import "./TrendCard.css";
import { useState } from "react";

const TrendCard = ({ activeTrend, trend_id, setActiveTrend }:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { activeTrend: number; trend_id: number; setActiveTrend: any }) => {
  
    const isActive = activeTrend == trend_id ? true : false;
    const [report_ids, setReportIds] = useState([]);

    return (
        <div
            className={isActive ? "active-trend-card" : "inactive-trend-card"}
            onClick={() => setActiveTrend(trend_id)}
        >
        <p className="trend-card-title">Trend:</p>
        <hr className="trend-card-horizontal"></hr>
        <p className="trend-card-creation-date">Creation Date:</p>
        <p className="trend-card-time-period">Time Period:</p>

        <div className={isActive ? "active-report-window" : "inactive-report-window"}>
            {report_ids.map((data) => {
                return <div>{data}</div>;
            })}
        </div>
        </div>
    );
};

export default TrendCard;
