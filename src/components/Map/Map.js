import { useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import * as actions from '../../actions';
import './Map.scss';

const mapStateToProps = (state) => {
  const props = {
    places: state.places,
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: actions.fetchPlaces,
};

const AppMap = ({ places }) => {
  useEffect(() => {
    // loadData();
  }, []);

  const { byId, allIds } = places;

  return (
    <>
      {allIds.length > 0 && (
        <YMaps>
          <Map
            className="Map"
            defaultState={{ center: [50.595694, 36.587375], zoom: 9 }}
            instanceRef={(ref) => {
              ref && ref.behaviors.disable('scrollZoom');
            }}
          >
            {allIds.map((placeId) => {
              return (
                <Placemark
                  key={uniqueId()}
                  geometry={byId[placeId].coordinates}
                />
              );
            })}
          </Map>
        </YMaps>
      )}
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(AppMap);
