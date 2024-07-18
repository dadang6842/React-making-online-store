import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, subCount, deleteItem } from './../store.js'
import { useFadeEffect } from './../functions/fade.js';

function Cart() {

    let fade = useFadeEffect([]);
    let state = useSelector((state => {return state}))
    let dispatch = useDispatch()

    return (
        <div className={"start " + fade}>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.cart.map((a, i) => {
                      return (
                      <tr key={i}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.count}</td>
                        <td><button onClick={()=>
                            {dispatch(subCount(a.id))}
                        }>-</button>수량<button onClick={()=>
                            {dispatch(addCount(a.id))}
                        }>+</button></td>
                        <td><button onClick={()=>
                            {dispatch(deleteItem(a.id))}
                        }>X</button></td>
                      </tr>
                )})}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;