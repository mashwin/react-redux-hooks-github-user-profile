import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./components/Header";
import SearchBox from './components/SearchBox';
import UserProfile from './components/UserProfile';
import { getUserProfile } from './store/user/action';

function App() {
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleSearchUserName = () => {
    dispatch(getUserProfile(userName));
  }

  const data = useSelector((state) => state.userProfile.user);

  return (
    <div>
      <Header />
      <Container style={{ marginTop: '20px' }}>
        <Row className="justify-content-md-center">
          <Col md="4">
            <SearchBox
              userName={userName}
              handleUserNameChange={handleUserNameChange}
              handleSearchUserName={handleSearchUserName}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="4">
            {Object.keys(data).length > 0 && <UserProfile />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
