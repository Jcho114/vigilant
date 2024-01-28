import './TrendCard.css'

import {useState} from 'react'

const TrendCard = ({activeTrend, trend_id, setActiveTrend}: 
    {activeTrend : String, trend_id : String, setActiveTrend : any}) => {

    const isActive = activeTrend == trend_id ? true : false; 

    const [report_ids, setReportIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  
        return (
    
    <div    className = {isActive ? "active-trend-card" : "inactive-trend-card"}
            onClick = {() => setActiveTrend(trend_id)}>
        <p className = "trend-card-title">Trend:</p>
        <hr className = "trend-card-horizontal"></hr>

        <p className = "trend-card-creation-date">
            Creation Date: 
        </p>
        <p className = "trend-card-time-period">
            Time Period: 
        </p>
        
            <div className = {isActive ? "active-report-window" : "inactive-report-window"}>
                {report_ids.map(
                    (data) => {return (<div>{data}</div>)}
                )}
        </div>
    </div>


  )
}

export default TrendCard