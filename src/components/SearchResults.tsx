import { useContext } from 'react';
import { PlacesContext } from '../context';
import { Spinner } from '.';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

  if (isLoadingPlaces) {
    return (
      <div className='flex-center my-5'>
        <Spinner />
      </div>
    );
  }

  return (
    <ul className={`${places.length > 0 ? 'p-2' : 'p-0'}`}>
      {places.map((place) => (
        <li key={place.id} className='border-b-2 border-slate-200 pb-4 mt-3'>
          <h6 className='font-semibold'>{place.text_es}</h6>
          <p className='text-sm mt-2'>{place.place_name}</p>
          <button className='border-2 rounded-md border-blue-400 hover:bg-blue-400 hover:text-white p-2 mt-3'>
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
