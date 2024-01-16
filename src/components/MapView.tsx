import { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context';
import { Loading } from './';
import mapboxgl from 'mapbox-gl';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation,
        zoom: 14,
      });
    }
  }, [isLoading, userLocation]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
      }}
    >
      {userLocation?.join(',')}
    </div>
  );
};
