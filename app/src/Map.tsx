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
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map;