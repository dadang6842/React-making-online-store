import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

function Product(props) {
  return (
    <Col md={4}>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" alt={props.shoes.title} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default Product;
