import { FC } from 'react';
import { PlacesState } from './PlacesProvider';

type PlacesAction = {
    type: 'setUserLocation', payload:[number,number]
}

export const placesReducer:FC<PlacesState> = (state: PlacesState, action:PlacesAction)=>{
    switch (action.type) {
        case 'setUserLocation':
            
      return{
        ...state,
        isLoading:false,
        userLocation: action.payload
      }
    
        default:
            return state
    }
}