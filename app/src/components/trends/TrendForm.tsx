import TrendReportCard from './TrendReportCard'
import "./TrendForm.css";

import {useState} from 'react'; 

const ReportForm = () => {

  const [reportIds, setReportids] = useState(["d", "e", "f", "g", "h"])

  return (
  
  <div className="trend-form-container">
      <div className="trend-form-reportform">
        <div className="trend-form-title">
          <h1>New Trend</h1>
        </div>
        
        {reportIds.map(
            (data) => {return (<TrendReportCard key = {data} />)}
        )}

      </div>
    </div>
  );
};

export default ReportForm;
