import './SideBar.css'
import TrendCard from './TrendCard.tsx'

import {useState} from 'react'

const SideBar = () => {

  const [activeTrend, setActiveTrend] = useState("2")

  const trends = ["1", "2", "3", "4", "5"]

  return (
    <div className = "sidebar">
        <div className = "title">
            <p>Trend Identification</p>
            <hr className = "horizontal-line"></hr>
        </div>

        {trends.map(
            (data) => {return (<TrendCard 
                key = {data}
                report_id = {data} 
                activeTrend = {activeTrend} 
                setActiveTrend = {setActiveTrend}></TrendCard>)}
        )}
    </div>
  )
}

export default SideBar