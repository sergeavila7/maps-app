import { ButtonMyLocation, MapView, SearchBar } from '../components';
import { ReactIcon } from '../components/ReactIcon';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <ButtonMyLocation />
      <ReactIcon />
      <SearchBar />
    </div>
  );
};
