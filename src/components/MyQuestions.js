import { PencilSquare } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
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

const MyQuestions = ({ places }) => {
  const { allIds, byId } = places;

  return (
    <section className="MyQuestions">
      <div className="container">
        <div className="row">
          {allIds.map((id) => {
            const place = byId[id];
            const { name, photoUrl, task, rightAnswerText } = place;

            if (!photoUrl) {
              return '';
            }

            return (
              <div key={id} className="col-12 pt-5 pt-lg-3">
                <div className="MyQuestions__item">
                  <div className="MyQuestions__content">
                    <button className="btn MyQuestions__btn-toggle">
                      <PencilSquare className="MyQuestions__icon" />
                    </button>
                    <button
                      className="MyQuestions__btn"
                      onClick={() =>
                        createPlacePopup({
                          place,
                        })
                      }
                    >
                      <h3 className="MyQuestions__title">{name}</h3>
                    </button>
                    <div className="MyQuestions__text">
                      <p>
                        Вопрос: <b>{task}</b>
                      </p>
                      <p>
                        Правильный ответ: <b>{rightAnswerText}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, actionCreators)(MyQuestions);
