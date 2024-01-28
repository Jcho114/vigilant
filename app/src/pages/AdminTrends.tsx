import Map from '../components/Map'
import AdminNavBar from '../components/AdminNavBar'
import SideBar from '../components/trends/SideBar'

// Replace and Remove
import TrendForm from '../components/trends/TrendForm'

const AdminTrends = () => {
  return (
    <div className = "admin-trends">
        <AdminNavBar email = "adityashelke2014@gmail.com" />

        <div className="content">
            <SideBar />
            <Map name = {"minimap"}/>
            <TrendForm />
        </div>
    </div>
  )
}

export default AdminTrends