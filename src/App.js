import React from 'react';

// child components
import AsianPopulationMap from './components/maps/AsianPopulationMap';

// styles
import './styles/globals.css';

function App() {
  return (
    <div>
      <header className="map-header">
        <h1>Population Bubble Map</h1>
      </header>
      <AsianPopulationMap />
    </div>
  );
}

export default App;
