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
          <div className="tank">
            <h1>Armor / Tanks</h1>
            <div className="amounts">
              <input type="checkbox" />
              # <input type="number" min={0}/>
            </div>
          </div>
          <div className="infantry">
            <h1>Infantry</h1>
            <div className="amounts">
              <input type="checkbox" />
              # <input type="number" min={0}/>
            </div>
          </div>
          <div className="helicopter">
            <h1>Helicopter</h1>
            <div className="amounts">
              <input type="checkbox" />
              # <input type="number" min={0}/>
            </div>
          </div>
          <div className="plane">
            <h1>Plane</h1>
            <div className="amounts">
              <input type="checkbox" />
              # <input type="number" min={0}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
