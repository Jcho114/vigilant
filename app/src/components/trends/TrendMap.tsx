import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./TrendMap.css";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

import Leaflet from 'leaflet';

// add cluster or uninstall supercluster use-supercluster
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminMap = ({ markers, setMarkers, name, clickedMarkers, setClickedMarkers}: any) => {
  useEffect(() => {
    async function displayReports() {
      const reports = await fetch("http://localhost:3001/api/v1/report").then(res => res.json());
      console.log(reports);
      setMarkers(reports);  
    }
    displayReports();
  }, []);

  const greyIcon = new Leaflet.Icon({
    iconUrl: "../../public/grey-icon.png",
    iconSize: [25, 40],
  });

  const redIcon = new Leaflet.Icon({
    iconUrl: "../../public/red-icon.png",
    iconSize: [25, 40],
  });

  const iconColor = (id : string) => {
    if (clickedMarkers.includes(id)) {
      return redIcon;
    }
    else {
      return greyIcon;
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

        {markers.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (data: any) => {
              const lat = data["latitude"];
              const long = data["longitude"];
              const report_id = data["report_id"]; 

              return (
                <Marker 
                  key = {report_id}
                  position = {[lat, long]} 
                  icon = {iconColor(report_id)}
                  eventHandlers = {{
                    click: () => {
                      if (clickedMarkers.includes(report_id)) {
                        setClickedMarkers(clickedMarkers.filter((a : string) => a !== report_id));
                      }
                      else {
                        setClickedMarkers([...clickedMarkers, report_id])
                      }
                    }
                  }}
                ></Marker>
              )
            })
        }
      </MapContainer>
    </>
  )
}

export default AdminMap;