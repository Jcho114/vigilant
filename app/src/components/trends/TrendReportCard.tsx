import './TrendReportCard.css'

const TrendReportCard = ({key} : {key : any}) => {

    const id = 291; 

  return (
    <div className = "trend-report-card">
        <p className = "trend-report-card-title">Report: {id.toString()}</p>
    </div>
  )
}

export default TrendReportCard