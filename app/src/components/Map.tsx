import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

const Map = ({ name }: { name: string }) => {
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
      </MapContainer>
    </>
  )
}

export default Map;