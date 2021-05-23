import {
  Heart,
  QuestionCircle,
  GeoAlt,
  PencilSquare,
} from 'react-bootstrap-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import logo from '../images/logo.svg';
import Map from './Map/Map';
import Favorites from './Favorites';
import Profile from './Profile';
import MyQuestions from './MyQuestions';
import avatar from '../images/avatar.jpg';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App__inner">
          <header className="App-header">
            <div className="App-header__container">
              <NavLink className="App-header__logo" to="/">
                <img className="" alt="Логотип" src={logo} width="50" />
              </NavLink>
              <nav className="App-header__nav">
                <ul className="App-header__list">
                  {/* <li className="App-header__nav-item">
                    <NavLink className="App-header__nav-link" to="/about">
                      <Star className="App-header__icon" />
                      <span className="App-header__link-text">Топ-рейтинг</span>
                    </NavLink>
                  </li> */}
                  <li className="App-header__nav-item">
                    <NavLink className="App-header__nav-link" to="/favorites">
                      <Heart className="App-header__icon" />
                      <span className="App-header__link-text">Избранное</span>
                    </NavLink>
                  </li>
                  <li className="App-header__nav-item">
                    <NavLink className="App-header__nav-link" to="/">
                      <GeoAlt className="App-header__icon" />
                      <span className="App-header__link-text">Карта</span>
                    </NavLink>
                  </li>
                  <li className="App-header__nav-item">
                    <NavLink
                      className="App-header__nav-link"
                      to="/my-questions"
                    >
                      <QuestionCircle className="App-header__icon" />
                      <span className="App-header__link-text">Мои вопросы</span>
                    </NavLink>
                  </li>
                  <li className="App-header__nav-item">
                    <NavLink className="App-header__nav-link" to="/profile">
                      <img
                        className="App-header__avatar Avatar"
                        src={avatar}
                        alt="Аватар"
                      />
                      <span className="App-header__link-text">Профиль</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <Switch>
            <Route path="/my-questions">
              <div className="App-top">
                <div className="App-top__container">
                  <h2 className="App-top__title">Мои вопросы</h2>
                </div>
              </div>
              <MyQuestions />
            </Route>
            <Route path="/favorites">
              <div className="App-top">
                <div className="App-top__container">
                  <h2 className="App-top__title">Избранное</h2>
                </div>
              </div>
              <Favorites />
            </Route>
            <Route path="/profile">
              <div className="App-top">
                <div className="App-top__container">
                  <h2 className="App-top__title">Профиль</h2>
                  <div className="App-top__end">
                    <a href="/edit" onClick={(e) => e.preventDefault()}>
                      <PencilSquare className="App-top__icon" />
                    </a>
                  </div>
                </div>
              </div>
              <Profile />
            </Route>
            <Route path="/">
              <Map />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
