import Filter from './Filter';
import './SideBar.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideBar = ({setReports}: any) => {
  return (
    <div className="sidebar">
      <Filter setReports={setReports} />
    </div>
  )
}

export default SideBar;