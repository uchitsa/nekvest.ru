import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import ScoreBasic from '../libs/score-basic';
import avatar from '../images/avatar.jpg';

const levelsConfig = [
  {
    checkmark: 0,
    status: 'Начинающий',
  },
  {
    checkmark: 500,
    status: 'Знаток',
  },
  {
    checkmark: 1500,
    status: 'Чемпион',
  },
];

const score = new ScoreBasic({
  persistant: false,
  multiplier: 1,
  levels: levelsConfig,
});

const initialScorecard = score.scorecard();

const userInfo = {
  name: 'Дмитрий Бердников',
  city: 'Белгород',
  avatar,
};

const user = handleActions(
  {
    [actions.incrementUserScore](state, { payload }) {
      score.increment(payload.score);
      const scorecard = score.scorecard();
      return { ...scorecard, ...userInfo };
    },
  },
  { ...initialScorecard, ...userInfo },
);

export default user;
