import TrendReportCard from './TrendReportCard'
import "./TrendForm.css";

import {useState} from 'react'; 

const ReportForm = ({clickedMarkers} : {clickedMarkers : any}) => {

  return (
  
  <div className="trend-form-container">
      <div className="trend-form-reportform">
        <div className = "trend-form-header">
          <p className="trend-form-title">New Trend</p>
          <div className="trend-form-submit">Submit</div>
        </div>
        
        <div className = "trend-form-scrollable-window">

          {clickedMarkers.map(
              (data : any) => {return (<TrendReportCard key = {data} report_id = {data}/>)}
          )}
        
        </div>

      </div>
    </div>
  );
};

export default ReportForm;
