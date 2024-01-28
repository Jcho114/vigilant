import "./AdminWarfrontRightBar.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminWarfrontRightBar = ({selectedReports, reports}: any) => {
  async function createWarfront() {

  }

  return (
    <div className="admin-warfront-rightbar">
      <div className="admin-warfront-rightbar-title">
        <h1>Selection</h1>
      </div>
      <div className="admin-warfront-rightbar-selection">
        {selectedReports.map((el: string, index: number) => <h1>{index+1}. {el}</h1>)}
      </div>
      <div className="admin-warfront-rightbar-create">
        <button onClick={() => createWarfront()}>Create Warfront</button>
      </div>
    </div>
  )
}

export default AdminWarfrontRightBar;