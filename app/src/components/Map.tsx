import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

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
          <Marker key={el.report_id} position={[el.latitude, el.longitude]}></Marker>
        )}
        <Marker position={[lat, long]} icon={selected}></Marker>
      </MapContainer>
    </>
  )
}

export default Map;