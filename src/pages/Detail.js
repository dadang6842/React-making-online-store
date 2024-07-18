import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../store.js';
import { useFadeEffect } from './../functions/fade.js';

function Detail(props) {
    let dispatch = useDispatch();
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState("");
    let [tab, setTab] = useState(0);
    let { id } = useParams();
    let product = props.shoes.find(x => x.id == id);

    let fade = useFadeEffect([]); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

    useEffect(() => {
        setTimeout(() => { setAlert(false); }, 2000);
    }, []);

    useEffect(() => {
        if (isNaN(num)) {
            window.alert('숫자를 입력하세요.');
        }
    }, [num]);

    useEffect(() => {
        let item = localStorage.getItem('watched');
        item = item ? JSON.parse(item) : [];
        item.push(product.id);
        item = Array.from(new Set(item));
        localStorage.setItem('watched', JSON.stringify(item));
    }, [product.id]);

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <div className={"container start " + fade}>
            {alert && (
                <div className="alert alert-warning">
                    2초 이내 구매 시 할인
                </div>
            )}
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${product.id + 1}.jpg`} width="100%" alt={product.title} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <input onChange={(e) => setNum(e.target.value)} placeholder="수량을 입력하세요" />
                    <button className="btn btn-danger" onClick={() => {
                        if (num < 1) {
                            alert('1 이상의 숫자만 입력할 수 있습니다.');
                        } else {
                            dispatch(addItem({ id: product.id, name: product.title, count: num }));
                        }
                    }}>장바구니</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab tab={tab} />
        </div>
    );
}

function Tab({ tab }) {
    let fade = useFadeEffect([tab]); // tab이 변경될 때마다 fade effect 적용

    return (
        <div className={'start ' + fade}>
            {[
                <div>내용0</div>,
                <div>내용1</div>,
                <div>내용2</div>
            ][tab]}
        </div>
    );
}

export default Detail;
