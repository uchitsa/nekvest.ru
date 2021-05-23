import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import * as actions from '../../actions';
import createPlacePopup from '../../common/createPlacePopup';
import './Map.scss';

const mapStateToProps = (state) => {
  const props = {
    places: state.places,
  };
  return props;
};

const actionCreators = {
  completePlace: actions.completePlace,
  incrementUserScore: actions.incrementUserScore,
};

const AppMap = ({ places, completePlace, incrementUserScore }) => {
  const { byId, allIds } = places;

  return (
    <>
      {allIds.length > 0 && (
        <YMaps>
          <Map
            className="Map"
            defaultState={{ center: [50.591694, 36.588375], zoom: 17 }}
          >
            {allIds.map((placeId) => {
              const place = byId[placeId];
              const { name, coordinates, type } = place;

              const placeMarkProps = {
                modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
                geometry: coordinates,
                properties: {
                  hintContent: name,
                },
                options: {
                  iconLayout: 'default#image',
                  iconImageHref: `https://nekvest.ru/icons/${type}.svg`,
                  iconImageSize: [60, 60],
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
                      createPlacePopup({
                        place,
                        completePlace,
                        incrementUserScore,
                      });
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
