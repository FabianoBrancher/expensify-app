import { createStore } from 'redux';

// Action generators - functions that return action objects
// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// 
// REDUCERS
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' : 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET' :
            return {
                count: 0
            };
        case 'SET' :
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

// I'd like to decrement the count

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount({ decrementBy: 10}));
store.dispatch(decrementCount());

// I'd like to reset the count to zero
// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount( { count: 101 }));
