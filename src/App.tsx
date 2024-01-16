import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './pages/HomeScreen';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
}

export default App;
