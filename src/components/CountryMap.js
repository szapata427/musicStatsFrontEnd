import React, {useEffect} from 'react'


function PlayListCountries() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/musicstats/api/v1.0/getPlaylists')
        .then(data => data.json())
        .then(playLists => {
            setState(playLists)
        }, [])
    })

    return (
        <>
        <ComposableMap countryPlaylists={state}/>
        </>
    )

}

export default PlayListCountries;