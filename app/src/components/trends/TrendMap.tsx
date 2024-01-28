import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "./TrendMap.css";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import {useState} from 'react'; 

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
const AdminMap = ({ name, lat, setLat, long, setLong, clickedMarkers, setClickedMarkers}: any) => {

  const [renderedMarkers, setRenderedMarkers] = useState([]); 

  useEffect(() => {
    async function displayReports() {
      const response = await fetch("http://localhost:3001/api/v1/report");
      const reports = await response.json();
      console.log(reports);

      let markers : any = []; 

      for (let i = 0; i < reports.length; i++) {
        markers.push(reports[i]); 
      }

      setRenderedMarkers(markers); 
      
    }

    displayReports()
  }, []);

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

        {renderedMarkers.map(
            (data) => {
              let lat = data[" latitude"];
              let long = data[" longitude"];
              let _id = data["_id"]; 



              return (
                <Marker key = {_id} position = {[lat, long]}
                
                eventHandlers = {{
                  click: () => {
                    console.log(lat); 
                    
                  }
                }}
                
                ></Marker>
              )
            })
        }

        <Marker position={[lat, long]}></Marker>
      </MapContainer>
    </>
  )
}

export default AdminMap;