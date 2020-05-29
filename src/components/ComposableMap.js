import React from "react";
import ReactDOM from "react-dom";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import "./styles.css";
import {GoogleMap, useLoadScript,Marker, InfoWindow} from "@react-google-maps/api"

const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
}

const centerMedellin = {
    lat: 6.244203,
    lng: -75.581215

}

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
    ></GoogleMap>
</div>)
}


