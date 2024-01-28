import './AdminSideBar.css'
import { useState } from 'react'


const AdminSideBar = ({ page }: { page: string }) => {
    const [active, setActive] = useState(page)
    return (
        <div className="sidebar">
            {active === "Reports" ? <div className="sidebar-item-active">Reports</div> : <div className="sidebar-item">Reports</div>}
            {active === "Trends" ? <div className="sidebar-item-active">Trends</div> : <div className="sidebar-item">Trends</div>}
            {active === "Archived" ? <div className="sidebar-item-active">Archived</div> : <div className="sidebar-item">Archived</div>}
        </div>
    )
}
export default AdminSideBar