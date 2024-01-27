import "./ReportForm.css";

const ReportForm = () => {
  return (
    <div className="reportformcontainer">
      <div className="reportform">
        <div className="title">
          <h1>New Report</h1>
        </div>
        <div className="infotype">
          <table>
            <tbody>
              <tr>
                <td>Warning</td>
                <td>Danger</td>
                <td>Info</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="reports">
          <div>
            <h1>Armor / Tanks</h1>
          </div>
          <div>
            <h1>Infantry</h1>
          </div>
          <div>
            <h1>Helicopter</h1>
          </div>
          <div>
            <h1>Plane</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
