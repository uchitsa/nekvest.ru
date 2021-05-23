import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    user: state.user,
  };
  return props;
};

const actionCreators = {
  incrementUserScore: actions.incrementUserScore,
};

const Profile = ({ incrementUserScore, user }) => {
  const {
    name,
    city,
    avatar,
    status,
    level,
    levelprogress,
    levelscore,
    leveltotal,
  } = user;

  return (
    <div className="Profile pt-3">
      <div className="container-md">
        <div className="Profile__content">
          <img className="Profile__avatar Avatar" src={avatar} alt="Аватар" />
          <div className="Profile__name">{name}</div>
          <div className="Profile__city">{city}</div>
        </div>
        <div className="Profile__info">
          <div className="Profile__score">
            <div className="Profile__level-progoress-wrapper">
              {' '}
              <div
                className="Profile__level-progoress"
                style={{
                  width: leveltotal === 0 ? '100%' : `${levelprogress}%`,
                }}
              ></div>
            </div>
            {leveltotal === 0 ? (
              ''
            ) : (
              <div className="Profile__score-value">
                {levelscore}/{leveltotal}
              </div>
            )}
          </div>
          <div>Уровень: {level}</div>
          <div>Статус: {status}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Profile);
