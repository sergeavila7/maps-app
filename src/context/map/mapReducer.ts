import { FC } from 'react';
import { MapState } from './MapProvider';
import { Map } from 'mapbox-gl';

type MapAction = {
    type: 'setMap', payload: Map
}

export const mapReducer:FC<MapState> = (state: MapState, action:MapAction)=>{
    switch (action.type) {
        case 'setMap':
            
      return state
    
        default:
            return state
    }
}