import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Product from './../components/Product.js'

function Home(props) {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.shoes.map((shoes, i) => (
            <Product key={i} shoes={shoes} i={i} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
