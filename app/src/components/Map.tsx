import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

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

// add cluster or uninstall supercluster use-supercluster
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Map = ({ name, lat, long, setLat, setLong }: any) => {
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
        <Marker position={[lat, long]}></Marker>
      </MapContainer>
    </>
  )
}

export default Map;