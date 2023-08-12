function Address(props){
    return(
        <div className="address">
            <div className="seccondary-address">
                    <p>IP Address</p>
                    <h3>{props.ip}</h3>
            </div>
            <div className="seccondary-address">
                    <p>Location</p>
                    <h3>{props.country}, {props.region}, {props.geonameId}</h3>
            </div>
            <div className="seccondary-address">
                    <p>Timezone</p>
                    <h3>UTC {props.timezone}</h3>
            </div>
            <div className="seccondary-address">
                    <p>ISP</p>
                    <h3>UTC {props.isp}</h3>
            </div>
        </div>
    )
}
export default Address