import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import * as actions from '../../actions';
import openPlacePopup from '../../common/openPlacePopup';
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
  const { byId, allIds } = places;
  console.log(places);
  return (
    <>
      {allIds.length > 0 && (
        <YMaps>
          <Map
            className="Map"
            defaultState={{ center: [50.591694, 36.587375], zoom: 16 }}
            // instanceRef={(ref) => {
            //   if (!ref) {
            //     return;
            //   }
            //   ref.behaviors.disable('scrollZoom');
            // }}
          >
            {allIds.map((placeId) => {
              const place = byId[placeId];
              const { name, coordinates } = place;
              console.log(byId[placeId]);
              const placeMarkProps = {
                modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
                geometry: coordinates,
                properties: {
                  hintContent: name,
                },
                options: {
                  iconLayout: 'default#image',
                  iconImageHref: 'https://faw-x80.com/media/img/map_marker.png',
                  iconImageSize: [60, 53],
                  iconImageOffset: [-22, -53],
                },
              };

              return (
                <Placemark
                  instanceRef={(ref) => {
                    if (!ref) {
                      return;
                    }
                    ref.events.add('click', (e) => {
                      openPlacePopup(place);
                    });
                  }}
                  key={uniqueId()}
                  {...placeMarkProps}
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
