import React, { useEffect } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Map.scss';

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
};

const map = ({ text, addTask, updateNewTaskText }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { text, id: _.uniqueId(), state: 'active' };
    addTask({ task });
  };

  const handleUpdateNewTaskText = (e) => {
    updateNewTaskText({ text: e.target.value });
  };

  return (
    <>
      {/* <form action="" className="form-inline" onSubmit={handleAddTask}>
        <div className="form-group mx-sm-3">
          <input
            type="text"
            required
            value={text}
            onChange={handleUpdateNewTaskText}
          />
        </div>
        <input type="submit" className="btn btn-primary btn-sm" value="Add" />
      </form> */}
      <YMaps>
        <Map
          className="Map"
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          instanceRef={(ref) => {
            ref && ref.behaviors.disable('scrollZoom');
          }}
        />
      </YMaps>
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(map);
