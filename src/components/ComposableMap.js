import React from "react";
import ReactDOM from "react-dom";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import "./styles.css";
import {GoogleMap, useLoadScript,Marker, InfoWindow} from "@react-google-maps/api"
import MapStyles from './MapStyles'
import SpotifyImageIcon from '../Images/spotifyIcon.png'

const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
}

const centerMedellin = {
    lat: 6.244203,
    lng: -75.581215

}

const options = {
    styles: MapStyles,
    disableDefaultUI:true,
    zoomControl: true
}

const markers = [{id: 1, lat:4.570868, lng:-74.297333, country: "Colombia"},{id: 2, lat: -38.416097, lng:-63.616672, country: "Argentina"}]

export default function GoogleMaps() {

const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
})

if (loadError) return "Error loading maps"
if (!isLoaded) return "loading maps"


return (<div>
    <GoogleMap mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={centerMedellin}
    options={options}
    >
     {markers.map(marker => {
         console.log(marker)
         return <Marker key={marker.id}
         position={{lat: marker.lat, lng: marker.lng}}
         icon={{url: SpotifyImageIcon, scaledSize: new window.google.maps.Size(30,30)}}
         />
     })}  



    </GoogleMap>
</div>)
}


