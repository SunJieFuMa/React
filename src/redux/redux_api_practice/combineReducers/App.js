import {createStore} from 'redux'
import reducer from './reducers/index'

let store = createStore(reducer);
console.log(store.getState());  // ﻿ {todos: Array(0), counter: 0}

store.dispatch({
    type: 'ADD_TODO',
    text: 'Use Redux'
});
console.log(store.getState());  //   { todos: ['Use Redux'] ,counter: 0 }

store.dispatch({
    type: 'INCREMENT',
});
console.log(store.getState()); //   { todos: ['Use Redux'] ,counter: 1 }

