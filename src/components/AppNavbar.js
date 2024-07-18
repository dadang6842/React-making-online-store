import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './../App.css';

function AppNavbar() {
  let navigate = useNavigate();

  return (
    <Navbar bg="light" data-bs-theme="light">   {/* 배경색과 전체적인 테마를 라이트 모드로. 나중에 테마 변경 기능도 구현해보기 */}
      <Container>
        <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/Cart') }}>Cart</Nav.Link>
          <Nav.Link onClick={() => { navigate('/Event') }}>Event</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" id="search-button">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
