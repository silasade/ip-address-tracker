import React, { useRef, useEffect } from 'react';
import icon from "./icon-location.svg"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map(props) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      // Create a Leaflet map if it's not already initialized
      mapInstance.current = L.map(mapRef.current).setView([props.lat, props.lng], 13);

      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);

      // Define a custom icon
      const customIcon = L.icon({
        iconUrl: icon, // Path to your custom marker icon image
        iconSize: [32, 32], // Adjust the icon size as needed
      });

      // Add a marker with a custom icon and popup
      L.marker([props.lat, props.lng], { icon: customIcon }).addTo(mapInstance.current).openPopup();
    }

    // Cleanup function to remove the map instance when component is unmounted
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [props.lat, props.lng]);

  return <div ref={mapRef} className='map' style={{ width: '100%', height: '50vh' }} />;
}

export default Map;
