import { useState } from "react"
import AdminReports from "../components/AdminReports/AdminReports"
import AdminNavBar from "../components/AdminNavBar"
import AdminSideBar from "../components/AdminSideBar"


const AdminDashboard = () => {
  const [pageState, setPageState] = useState("Reports")

  return (
    <div className= 'admin-dashboard'>
      <AdminNavBar email = "adityashelke2014@gmail.com" />
      <div className="content">
        <AdminSideBar page = {pageState}/>
          {pageState === "Reports" ? <AdminReports /> : null}
          {/* {page === "Trends" ? <div>Admin Trends</div> : null}
          {page === "Archived" ? <div>Admin Settings</div> : null} */}
      </div>
    </div>
  )
}

export default AdminDashboard