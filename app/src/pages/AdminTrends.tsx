import TrendMap from '../components/trends/TrendMap'
import AdminNavBar from '../components/AdminNavBar'
import SideBar from '../components/trends/SideBar'

// Replace and Remove
import TrendForm from '../components/trends/TrendForm'

import {useState} from 'react'

const AdminTrends = () => {

  const [lat, setLat] = useState(0); 
  const [long, setLong] = useState(0); 

  const [clickedMarkers, setClickedMarkers] = useState([]); 


  return (
    <div className = "admin-trends">
        <AdminNavBar email = "adityashelke2014@gmail.com" />

        <div className="content">
            <SideBar />
            <TrendMap name = {"minimap"} lat = {lat} setLat = {setLat} 
                      long = {long} setLong = {setLong} clickedMarkers = {clickedMarkers} 
                      setClickedMarkers = {setClickedMarkers} />
            <TrendForm />
        </div>
    </div>
  )
}

export default AdminTrends