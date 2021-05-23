import { HeartFill } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import cn from 'classnames';
import createPlacePopup from '../common/createPlacePopup';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    places: state.places,
  };
  return props;
};

const actionCreators = {
  completePlace: actions.completePlace,
};

const Favorites = ({ places }) => {
  const { allIds, byId } = places;

  return (
    <section className="Favorites">
      <div className="container">
        <div className="row">
          {allIds.map((id) => {
            const place = byId[id];
            const { name, photoUrl, address } = place;

            if (!photoUrl) {
              return '';
            }

            const classNames = cn('Favorites__item', {
              'Favorites__item--with-photo': !!photoUrl,
            });
            return (
              <div key={id} className="col-12 col-md-8 col-lg-4 pt-5 pt-lg-0">
                <div
                  className={classNames}
                  style={{ backgroundImage: `url(${photoUrl})` }}
                >
                  <button className="btn Favorites__btn-toggle">
                    <HeartFill className="Favorites__icon" />
                  </button>
                  <button
                    className="Favorites__btn"
                    onClick={() =>
                      createPlacePopup({
                        place,
                      })
                    }
                  >
                    <h3 className="Favorites__title">{name}</h3>
                    <p>Адрес: {address}</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, actionCreators)(Favorites);
