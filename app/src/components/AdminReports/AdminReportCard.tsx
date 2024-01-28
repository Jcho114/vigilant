import './AdminReportCard.css';

const AdminReportCard= ({activeReport, report_id, setActiveReport}: 
    {activeReport : String, report_id : String, setActiveReport : any}) => {

    const isActive = activeReport == report_id ? true : false; 
  
        return (
    
    <div    className = {isActive ? "active-admin-report-card" : "inactive-admin-report-card"}
            onClick = {() => setActiveReport(report_id)}>
        <div>   
            <div className = "title">
                Location:
            </div>
            <div className = "text">
                285 Fulton St, New York, NY 10007
            </div>
            <div className = "title">
                Reported By:
            </div>
            <div className = "text">
                John Doe
            </div>

            <div className = "title">
                Type
            </div>
            {/* alert svg or smth depending on type */}

            <div className = "text">
                {/* Bottom right corner datetime */}
                12/17/2024 5:29 pm
            </div>
            <div className = "troop-container">
                <div className = "tank-container">
                    {/* tank svg */}
                    <div className = "text">
                        300
                    </div>
                </div>
                <div className = "soldier-container">
                    {/* soldier svg */}
                    <div className = "text">
                        300
                    </div>
                </div>
                <div className = "helicopter-container">
                    {/* helicopter svg */}
                    <div className = "text">
                        300
                    </div>
                </div>
                <div className = "plane-container">
                    {/* plane svg */}
                    <div className = "text">
                        300
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default AdminReportCard;
