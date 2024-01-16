import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const ButtonMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Mapa no esta listo');
    if (!userLocation) throw new Error('No hay ubicacion de usuario');

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };
  return (
    <div>
      <button
        className='block text-white  rounded-md bg-blue-400 p-3'
        style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 999 }}
        onClick={onClick}
      >
        Mi Ubicación
      </button>
    </div>
  );
};
