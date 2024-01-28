import './SideBar.css'
import TrendCard from './TrendCard.tsx'

import {useState} from 'react'

const SideBar = () => {

  const [activeTrend, setActiveTrend] = useState("2")

  const trends = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

  return (
    <div className = "sidebar">
        <div className = "title">
            <p>Trend Identification</p>
            <hr className = "horizontal-line"></hr>
        </div>

        <div className = "scroll-container">
          {trends.map(
              (data) => {return (<TrendCard 
                  key = {data}
                  trend_id = {data} 
                  activeTrend = {activeTrend} 
                  setActiveTrend = {setActiveTrend}></TrendCard>)}
          )}
        </div>
    </div>
  )
}

export default SideBar