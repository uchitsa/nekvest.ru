import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const placesFetchingState = handleActions(
  {
    [actions.fetchPlacesRequest]() {
      return 'requested';
    },
    [actions.fetchPlacesFailure]() {
      return 'failed';
    },
    [actions.fetchPlacesSuccess]() {
      return 'finished';
    },
  },
  'none',
);

const places = handleActions(
  {
    [actions.fetchPlacesSuccess](state, { payload }) {
      const placesMapped = payload.places.map((place) => {
        const {
          _id,
          name,
          mapPosition: { coordinates },
        } = place;
        return {
          _id,
          name,
          coordinates,
        };
      });
      return {
        byId: _.keyBy(placesMapped, '_id'),
        allIds: placesMapped.map((t) => t._id), // eslint-disable-line no-underscore-dangle
      };
    },
    // [actions.addTaskSuccess](state, { payload: { task } }) {
    //   const { byId, allIds } = state;
    //   return {
    //     byId: { ...byId, [task.id]: task },
    //     allIds: [task.id, ...allIds],
    //   };
    // },
    // [actions.removeTaskSuccess](state, { payload: { id } }) {
    //   const { byId, allIds } = state;
    //   return {
    //     byId: _.omit(byId, id),
    //     allIds: _.without(allIds, id),
    //   };
    // },
  },
  { byId: {}, allIds: [] },
);

export default combineReducers({
  places,
  placesFetchingState,
});
