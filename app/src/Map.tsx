import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className="map">
      <MapContainer
        className="mini-map"
        center={[49, 31]}
        zoom={5.5}
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_REACT_APP_MAP_TILER_KEY}`}
        />
      </MapContainer>
    </div>
  )
}

export default Map;