import { Nav } from 'react-bootstrap';
import { Heart, Star, QuestionCircle, Person } from 'react-bootstrap-icons';
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
                <span className="App-header__link-text">Поулярное</span>
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
    </div>
  );
}

export default App;
