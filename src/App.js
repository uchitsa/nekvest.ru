import { Container, Row, Col } from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <header className="test">
          <nav>
            <HeartFill />
          </nav>
        </header>
      </Container>
    </div>
  );
}

export default App;
