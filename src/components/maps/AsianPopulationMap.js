import React from 'react';

// React-Leaflet
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';

// data
import { data } from '../../data/asian_city_populations';

// leaflet styles (from node_modules)
import 'leaflet/dist/leaflet.css';
// local styles
import '../../styles/asian-population-map.css';

function AsianPopulationMap() {
  const tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <div className="map-container">
      <MapContainer center={[25, 85]} zoom={3.45}>
        <TileLayer url={tileUrl} />
        {data.cities.map((city, i) => (
          <CircleMarker
            center={[city['coordinates'][1], city['coordinates'][0]]}
            radius={20 * Math.log(city['population'] / 10000000)}
            key={i}
            fillOpacity={0.55}
            stroke={false}
          >
            <Tooltip direction="right" offset={[-8, -2]} opacity={0.7}>
              <span>{`${city['name']}: Population ${city['population']}`}</span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default AsianPopulationMap;
