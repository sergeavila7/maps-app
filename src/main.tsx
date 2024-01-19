import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_REACT_MAPBOX_TOKEN;
if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
