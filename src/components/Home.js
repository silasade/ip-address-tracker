import React, { useEffect, useState } from "react";
import Address from './Address';
import Map from "./Map"; 
import 'leaflet/dist/leaflet.css';
import submit from './icon-arrow.svg'
function Home() {
    const [api, setApi] = useState({
        ip: "8.8.8.8",
        location: {
            country: "US",
            region: "California",
            lat: 37.40599,
            lng: -122.078514,
            timezone: "-07:00",
            geonameId: 5375481
        },
        isp: "Google LLC"
    });
    const [mapCoordinates, setMapCoordinates] = useState({
        lat: 37.40599,
        lng: -122.078514
    });
    const [Addre, setIP] = useState("8.8.8.8");
    const [mapComponent, setMapComponent] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_z2Rujiq1Aw01F0YNGnkTZ8FYVvDU5&ipAddress=${Addre}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setApi(json);
                setMapCoordinates({
                    lat: json.location.lat,
                    lng: json.location.lng
                });
            } catch (error) {
                console.error('Error fetching API data:', error);
            }
        };
        fetchData();
    }, [Addre]);
    
    const ip = ["5.10.10.3", "3.5.5.7", "9.9.99.9", "3.9.99.9", "4.9.99.9", "2.9.99.9"];
    const option = ip.map(items => {
        return <option key={items} value={items} />;
    });
    
    function handleSubmit() {
        const selectedIp = document.getElementById("list").value;
        setIP(selectedIp);
    }
    
    useEffect(() => {
        setMapComponent(<Map lat={Number(mapCoordinates.lat)} lng={Number(mapCoordinates.lng)} ip={api.ip} />);
    }, [mapCoordinates, api.ip]);

    return (
        <div>

            <header>
             <div className="head">
                <h2>IP Address Tracker</h2>
                <form>
                    <input placeholder="Search for any IP address" id="list" list="ip" name="ip" />
                    <datalist id="ip">
                        {option}
                    </datalist>
                    
                    <button onClick={handleSubmit}  type="button"><img  src={submit} alt="not found"/> </button>
                    {api.id}
                </form>
                </div>
                {api && <Address ip={api.ip} country={api.location.country} region={api.location.region} geonameId={api.location.geonameId} isp={api.isp} timezone={api.location.timezone} />}
            </header>
            {mapComponent}
        </div>
    );
}

export default Home;
