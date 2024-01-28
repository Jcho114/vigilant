import './AdminReports.css';
import AdminReportCard from './AdminReportCard.tsx'

import {useState} from 'react'

const AdminReports = () => {

  const [activeReport, setActiveReport] = useState("0")

  const reports = ["1", "2", "3", "4", "5", "6", "7"]

  return (
    <div className = "reports">
        {reports.map(
            (data) => {return (<AdminReportCard 
                key = {data}
                report_id = {data} 
                activeReport = {activeReport} 
                setActiveReport = {setActiveReport}></AdminReportCard>)}
        )}
        <div className = "sort-by-container" >
            <div className = "sort-by-text">
                Sort By
            </div>
            <div className = "sort-by-dropdown">
                <select>
                    <option value="date">Date</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default AdminReports