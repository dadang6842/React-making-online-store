import { lazy, Suspense, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data.js';
import Home from './pages/Home.js';
import AppNavbar from './components/AppNavbar';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';


const Detail = lazy(() => import('./pages/Detail.js'));
const Cart = lazy(() => import('./pages/Cart.js'));
const Event = lazy(() => import('./pages/Event.js'));

function App() {

  const [shoes, setShoes] = useState(data);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMoreShoes = (url) => {
    setLoading(true);
    axios.get(url)
      .then((result) => {
        setShoes([...shoes, ...result.data]);
        setLoading(false);
      })
      .catch(() => {
        alert('상품을 불러오는데 실패했습니다.');
        setLoading(false);
      });
  };

  const handleFetchMoreShoes = () => {
    if (count === 1) {
      fetchMoreShoes('./data.json');
    // } else if (count === 2) {
    //   fetchMoreShoes('https://codingapple1.github.io/shop/data3.json');
    } else {
      alert('상품이 없습니다.');
    }
    setCount(count + 1);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar />
        <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Home shoes={shoes} />
              {loading && <Spinner animation="border" />}
              <button onClick={handleFetchMoreShoes}>더보기</button>
            </>
          } />
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/event" element={<Event />}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;