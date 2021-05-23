import { keyBy, omit, without } from 'lodash';
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
      return {
        byId: keyBy(payload.places, 'id'),
        allIds: payload.places.map((t) => t.id), // eslint-disable-line no-underscore-dangle
      };
    },
    [actions.removePlace](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        byId: omit(byId, id),
        allIds: without(allIds, id),
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
