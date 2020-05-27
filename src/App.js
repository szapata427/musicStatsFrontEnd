import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import SearchBar from './components/SearchBarField'
import MapWorld from './components/ComposableMap'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar/>
      <MapWorld/>
    </div>
  );
}

export default App;
