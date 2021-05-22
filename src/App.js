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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

function App() {
  return (
    <div className="App">
      <div className="App__inner">
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
                  <span className="App-header__link-text">Избранное</span>
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
            <div className="App-top__end">
              <a href="/edit">
                <PencilSquare className="App-top__icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="Profile pt-3">
          <div className="container-md">
            <div className="Profile__content">
              <img
                className="Profile__avatar Avatar"
                src={avatar}
                alt="Аватар"
              />
              <div className="Profile__name">Дмитрий Бердников</div>
              <div className="Profile__city">Белгород</div>
              <p>
                Почему он используется? Давно выяснено, что при оценке дизайна и
                композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
                используют потому, что тот обеспечивает более или менее
                стандартное заполнение шаблона, а также реальное распределение
                букв и пробелов в абзацах, которое не получается при простой
                дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш
                текст.." Многие программы электронной вёрстки и редакторы HTML
                используют Lorem Ipsum в качестве текста по умолчанию, так что
                поиск по ключевым словам "lorem ipsum" сразу показывает, как
                много веб-страниц всё ещё дожидаются своего настоящего рождения.
                За прошедшие годы текст Lorem Ipsum получил много версий.
                Некоторые версии появились по ошибке, некоторые - намеренно
                (например, юмористические варианты).
              </p>
              <p>
                Почему он используется? Давно выяснено, что при оценке дизайна и
                композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
                используют потому, что тот обеспечивает более или менее
                стандартное заполнение шаблона, а также реальное распределение
                букв и пробелов в абзацах, которое не получается при простой
                дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш
                текст.." Многие программы электронной вёрстки и редакторы HTML
                используют Lorem Ipsum в качестве текста по умолчанию, так что
                поиск по ключевым словам "lorem ipsum" сразу показывает, как
                много веб-страниц всё ещё дожидаются своего настоящего рождения.
                За прошедшие годы текст Lorem Ipsum получил много версий.
                Некоторые версии появились по ошибке, некоторые - намеренно
                (например, юмористические варианты).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
