import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const removePlace = createAction('PLACE_REMOVE');

export const fetchPlacesRequest = createAction('PLACES_FETCH_REQUEST');
export const fetchPlacesSuccess = createAction('PLACES_FETCH_SUCCESS');
export const fetchPlacesFailure = createAction('PLACES_FETCH_FAILURE');

export const fetchPlaces = () => async (dispatch) => {
  dispatch(fetchPlacesRequest());
  try {
    const url = routes.placesUrl();
    const response = await axios.get(url);
    dispatch(fetchPlacesSuccess({ places: response.data }));
  } catch (e) {
    dispatch(fetchPlacesFailure());
    throw e;
  }
};
