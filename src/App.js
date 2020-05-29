import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import SearchBar from './components/SearchBarField'
import GoogleMaps from './components/ComposableMap'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar/> */}
  <GoogleMaps />
    </div>
  );
}

export default App;
