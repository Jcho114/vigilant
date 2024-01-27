import Map from '../components/Map'
import AdminNavBar from '../components/AdminNavBar'
import SideBar from '../components/trends/SideBar'

const AdminTrends = () => {
  return (
    <div className = "admin-trends">
        <AdminNavBar email = "adityashelke2014@gmail.com" />

        <div className="content">
            <SideBar />
            <Map name = {"minimap"}/>
        </div>
    </div>
  )
}

export default AdminTrends