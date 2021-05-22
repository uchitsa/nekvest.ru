import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const tasks = handleActions(
  {
    [actions.addTask](state, { payload: { task } }) {
      const { byId, allIds } = state;
      return {
        byId: { ...byId, [task.id]: task },
        allIds: [task.id, ...allIds],
      };
    },
    [actions.removeTask](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        byId: _.omit(byId, id),
        allIds: _.without(allIds, id),
      };
    },
    // BEGIN (write your solution here)
    [actions.toggleTaskState](state, { payload: { id } }) {
      const { byId, allIds } = state;
      const updateTaskState = (taskState) =>
        taskState === 'active' ? 'finish' : 'active';
      const updated = _.update(byId, `[${id}].state`, updateTaskState);
      return {
        byId: updated,
        allIds,
      };
    },
    // END
  },
  { byId: {}, allIds: [] },
);

const text = handleActions(
  {
    [actions.addTask]() {
      return '';
    },
    [actions.updateNewTaskText](_state, { payload }) {
      return payload.text;
    },
  },
  '',
);

export default combineReducers({
  tasks,
  text,
});
