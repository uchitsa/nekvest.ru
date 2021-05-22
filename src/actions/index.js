import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const fetchPlacesRequest = createAction('Places_FETCH_REQUEST');
export const fetchPlacesSuccess = createAction('Places_FETCH_SUCCESS');
export const fetchPlacesFailure = createAction('Places_FETCH_FAILURE');

export const fetchPlaces = () => async (dispatch) => {
  dispatch(fetchPlacesRequest());
  try {
    const url = routes.placesUrl();
    const response = await axios.get(url);
    dispatch(fetchPlacesSuccess({ places: response.data.places }));
  } catch (e) {
    dispatch(fetchPlacesFailure());
    throw e;
  }
};
