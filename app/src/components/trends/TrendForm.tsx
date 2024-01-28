import ReportCard from './ReportCard'
import "./TrendForm.css";

import {useState} from 'react'; 

const ReportForm = () => {

  const [reportIds, setReportids] = useState(["d", "e", "f", "g", "h"])

  return (
  
  <div className="trendformcontainer">
      <div className="reportform">
        <div className="title">
          <h1>New Trend</h1>
        </div>
        
        {reportIds.map(
            (data) => {return (<ReportCard key = {data} >

            </ReportCard>)}
        )}

      </div>
    </div>
  );
};

export default ReportForm;
