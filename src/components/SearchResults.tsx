import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Spinner } from '.';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activateId, setActiveId] = useState('');

  const onPlaceClicked = (place: Feature) => {
    setActiveId(place.id);
    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return (
      <div className='flex-center my-5'>
        <Spinner />
      </div>
    );
  }

  return (
    <ul className={`${places.length > 0 ? 'p-0' : 'p-0'}`}>
      {places.map((place) => (
        <li
          key={place.id}
          className={`border-b-2 border-slate-200 p-2 pb-4 mt-3 pointer ${
            activateId === place.id && 'bg-blue-400 text-white'
          }`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6 className='font-semibold'>{place.text_es}</h6>
          <p className='text-sm mt-2'>{place.place_name}</p>
          <button
            onClick={() => getRoute(place)}
            className={`${
              activateId === place.id
                ? 'border-white hover:bg-blue-500 hover:text-white'
                : 'border-blue-400 hover:bg-blue-400 hover:text-white'
            } border-2 rounded-md  p-2 mt-3`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
