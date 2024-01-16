import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout | undefined>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      console.log('debpunce', event.target.value);
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
    </div>
  );
};
