import { FC, useReducer } from 'react';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { Map } from 'mapbox-gl';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  return (
    <MapContext.Provider value={{ ...state }}>{children}</MapContext.Provider>
  );
};
