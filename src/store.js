import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addCount(state, action){
            let num = state.findIndex((a)=> {return a.id==action.payload})
            state[num].count++
        },
        subCount(state, action){
            let num = state.findIndex((a)=> {return a.id==action.payload})
            state[num].count--
        },
        addItem(state, action) {
            let itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                alert('이미 장바구니에 있는 상품입니다.');
                state[itemIndex].count++;
            } else {
                state.push(action.payload);
            }
        },
        deleteItem(state, action){
            let num = state.findIndex((a)=> {return a.id==action.payload})
            state.splice(num, 1)
        },
        }
    })

export let { addCount, subCount, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer
   }
})