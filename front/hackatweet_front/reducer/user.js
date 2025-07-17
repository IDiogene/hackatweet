
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
value: 0,
};

export const counterSlice = createSlice({
name: 'counter',
 initialState,
reducers: {
addToCounter: (state, action) => {
state.value = Math.max(state.value + action.payload, 0)
 },
},
});
export const { addToCounter } = counterSlice.actions;
export default counterSlice.reducer;

/*
// partie composants : 
import { useDispatch } from 'react-redux'; // utilisé pour dispatcher les fonction
import { addToCounter } from '../reducers/counter' // import des fonctions
import { useSelector } from 'react-redux'; // utilisé pour lire les values
// a l'interieur du composant : 
const dispatch = useDispatch(); // pour use une fonction
const counter = useSelector((state) => state.counter.value) // pour lire une value, doit correspondre au name
dispatch(addToCounter(-1)) // exemple d'utilisation d'une fonction
*/