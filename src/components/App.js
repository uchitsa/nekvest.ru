import {
  Heart,
  Star,
  QuestionCircle,
  Person,
  GeoAlt,
} from 'react-bootstrap-icons';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import logo from '../images/logo.svg';
// import Form from './Form';
import Map from './Map/Map';
import Profile from './Profile';
import debounce from '../helpers/debounce';
import avatar from '../images/avatar.jpg';

const setCssVhProperty = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const App = () => {
  useEffect(() => {
    setCssVhProperty();
    window.addEventListener('resize', debounce(setCssVhProperty, 200));
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="App__inner">
          <header className="App-header">
            <div className="App-header__container">
              <a className="App-header__logo" href="/">
                <img
                  className="App-header__logo"
                  alt="Логотип"
                  src={logo}
                  width="50"
                />
              </a>
              <nav className="App-header__nav">
                <ul className="App-header__list">
                  {/* <li className="App-header__nav-item">
                    <NavLink className="App-header__nav-link" to="/about">
                      <Star className="App-header__icon" />
                      <span className="App-header__link-text">Топ-рейтинг</span>
                    </NavLink>
                  </li> */}
                  <li className="App-header__nav-item">
                    <NavLink className="App-header__nav-link" to="/popular">
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
                    <NavLink className="App-header__nav-link" to="/questions">
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
          {/* <div className="App-top">
            <div className="App-top__container">
              <h2 className="App-top__title">Профиль</h2>
              <div className="App-top__end">
                <a href="/edit">
                  <PencilSquare className="App-top__icon" />
                </a>
              </div>
            </div>
          </div> */}
          <Switch>
            {/* <Route path="/about">
              <Form />
            </Route> */}
            <Route path="/profile">
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
