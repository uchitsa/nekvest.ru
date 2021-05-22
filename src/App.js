import { Nav } from 'react-bootstrap';
import {
  Heart,
  Star,
  QuestionCircle,
  Person,
  PencilSquare,
} from 'react-bootstrap-icons';
import avatar from './images/avatar.jpg';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__container">
          <a className="App-header__logo" href="/">
            Nekvest.ru
          </a>
          <Nav className="App-header__nav" activeKey="/popular">
            <Nav.Item className="App-header__nav-item">
              <Nav.Link className="App-header__nav-link" href="/top">
                <Star className="App-header__icon" />
                <span className="App-header__link-text">Топ-рейтинг</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="App-header__nav-item">
              <Nav.Link className="App-header__nav-link" href="/popular">
                <Heart className="App-header__icon" />
                <span className="App-header__link-text">Лучшие</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="App-header__nav-item">
              <Nav.Link className="App-header__nav-link" href="/questions">
                <QuestionCircle className="App-header__icon" />
                <span className="App-header__link-text">Мои вопросы</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="App-header__nav-item">
              <Nav.Link className="App-header__nav-link" href="/profile">
                <Person className="App-header__icon" />
                <span className="App-header__link-text">Профиль</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </header>
      <div className="App-top">
        <div className="App-top__container container-md">
          <h2 className="App-top__title">Профиль</h2>
          <div class="App-top__end">
            <a>
              <PencilSquare className="App-top__icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="Profile pt-3">
        <div className="container-md">
          <div className="Profile__content">
            <img className="Profile__avatar Avatar" src={avatar} alt="Аватар" />
            <div className="Profile__name">Дмитрий Бердников</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
