// import React from "react";
import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import "./styles.css";
import {GoogleMap, useLoadScript,Marker, InfoWindow} from "@react-google-maps/api"
import MapStyles from './MapStyles'
import SpotifyImageIcon from '../Images/spotifyIcon.png'
// import PlayListCountries from './CountryMap'
import countriesLocation from '../JSON/CountryLatLng.json'

const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
}

const centerColombia = {
    lat:4.570868, lng:-74.297333

}

const options = {
    styles: MapStyles,
    disableDefaultUI:true,
    zoomControl: true
}

// const markers = [{id: 1, lat:4.570868, lng:-74.297333, country: "Colombia"},{id: 2, lat: -38.416097, lng:-63.616672, country: "Argentina"}]
const arrayCountry = []

export default function GoogleMaps() {
const [countriesState, setState] = useState([])
const [hoverPlaylist, setHoverPlaylist] = useState([])
const [providerState, setProvider] = ("Spotify")

useEffect(() => {
    fetch('http://127.0.0.1:5000/musicstats/api/v1.0/getPlaylists')
    .then(data => data.json())
    .then(playLists => {
        // let arrayCountry = []

        playLists.results.forEach(c => {
            let playlistCountry = c.name
            countriesLocation.map(m => {
                        let mapCountry = m.country
                        if (playlistCountry.includes(mapCountry)) {
                            arrayCountry.push(m)
                        }
                })

            })
            setState(arrayCountry)
        })
    },[])

const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
})

if (loadError) return "Error loading maps"
if (!isLoaded) return "loading maps"



console.log(countriesState)
return (<div>

    <GoogleMap mapContainerStyle={mapContainerStyle}
    zoom={4}
    center={centerColombia}
    options={options}

    >
     {arrayCountry.map(marker => {
         console.log(marker)
         return <Marker key={marker.id}
         position={{lat: marker.lat, lng: marker.lng}}
         icon={{url: SpotifyImageIcon, scaledSize: new window.google.maps.Size(20,20), origin: new window.google.maps.Point(0,0), anchor: new window.google.maps.Point(15,15)}}
         onClick={() => {
            console.log(marker)
            setHoverPlaylist(marker)
        }}
         />
         
     })}  



    </GoogleMap>
</div>)
}


