import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import Leaflet from "leaflet";

const selected = new Leaflet.Icon({
  iconUrl: "../../public/red-icon.png",
  iconSize: [25, 40],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetCoords = ({ setLat, setLong }: any) => {
  const map = useMap();

  useEffect(() => {
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      setLat(lat);
      setLong(lng);
    })
  }, [map, setLat, setLong]);

  return null;
}

type Report = {
  report_id: string,
  validation: boolean,
  latitude: number,
  longitude: number,
  type: string,
  unit: string,
  amount: number,
  date: Date,
  description: string,
  image: string,
}

// add cluster or uninstall supercluster use-supercluster
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Map = ({ reports, name, lat, long, setLat, setLong }: any) => {
  console.log(reports);
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
        <GetCoords setLat={setLat} setLong={setLong} />
        {reports.map((el: Report) => 
          <Marker key={el.report_id} position={[el.latitude, el.longitude]}>
            <Popup className="popup">
              <h1>{el.unit.toUpperCase()} ({el.amount} {el.amount === 1 ? "Unit" : "Units"})</h1>
              <h2>Coordinates:</h2>
              <h2>{`[${el.latitude}, ${el.longitude}]`}</h2>
              <h2>Verified: {el.validation ? "TRUE" : "FALSE"}</h2>
              <h2>Description: {el.description}</h2>
              <h2>Date: {String(new Date(el.date))}</h2>
            </Popup>
          </Marker>
        )}
        <Marker position={[lat, long]} icon={selected}></Marker>
      </MapContainer>
    </>
  )
}

export default Map;