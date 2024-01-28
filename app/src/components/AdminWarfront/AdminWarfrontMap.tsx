import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

type Report = {
  report_id: string,
  validation: boolean,
  latitude: number,
  longitude: number,
  type: string,
  tanks: number,
  infantry: number,
  helicopters: number,
  planes: number,
  date: Date,
  description: string,
  image: string,
}

const redIcon = new Leaflet.Icon({
  iconUrl: "../../public/red-icon.png",
  iconSize: [25, 40],
});

const greyIcon = new Leaflet.Icon({
  iconUrl: "../../public/grey-icon.png",
  iconSize: [25, 40],
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminWarfrontMap = ({ setSelectedReports, selectedReports, reports, name }: any) => {
  function flipReport(el: Report) {
    if (!selectedReports.includes(el.report_id)) {
      setSelectedReports([...selectedReports, el.report_id]);
    } else {
      const new_list = selectedReports.filter((item: string) => item !== el.report_id);
      setSelectedReports([...new_list]);
    }
  }

  return (
    <>
      <MapContainer
        className={name}
        center={[49, 31]}
        zoom={5.5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
          url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_REACT_APP_MAP_TILER_KEY}`}
        />
        {reports.map((el: Report) => 
          <Marker 
            key={el.report_id} position={[el.latitude, el.longitude]}
            icon={selectedReports.includes(el.report_id) ? redIcon : greyIcon}
            eventHandlers={{
              click: () => flipReport(el)
            }
          }>
          </Marker>
        )}
      </MapContainer>
    </>
  )
}

export default AdminWarfrontMap;