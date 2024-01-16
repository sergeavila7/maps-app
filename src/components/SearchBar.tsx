import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from '.';

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout | undefined>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 500);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        className='outline-none focus:ring focus:border-blue-400 border-gray-300 rounded-md p-2'
        placeholder='Buscar lugar...'
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};
