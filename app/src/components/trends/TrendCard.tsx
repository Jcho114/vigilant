import './TrendCard.css'

const TrendCard = ({activeTrend, report_id, setActiveTrend}: 
    {activeTrend : String, report_id : String, setActiveTrend : any}) => {

    const isActive = activeTrend == report_id ? true : false; 
  
        return (
    
    <div    className = {isActive ? "active-trend-card" : "inactive-trend-card"}
            onClick = {() => setActiveTrend(report_id)}>
                Hello
    </div>


  )
}

export default TrendCard