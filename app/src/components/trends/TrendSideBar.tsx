import './TrendSideBar.css'
import TrendCard from './TrendCard.tsx'
import {useState} from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrendSideBar = ({ trends }: any) => {
  const [activeTrend, setActiveTrend] = useState(0);

  return (
    <div className = "sidebar">
        <div className = "trend-title">
            <p>Trend Identification</p>
            <hr className = "horizontal-line"></hr>
        </div>

        <div className = "scroll-container">
          {trends.map(
              (data: number) => {return (<TrendCard 
                  key = {data}
                  trend_id = {data} 
                  activeTrend = {activeTrend} 
                  setActiveTrend = {setActiveTrend}></TrendCard>)}
          )}
        </div>
    </div>
  )
}

export default TrendSideBar