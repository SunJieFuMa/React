import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import Counter from './Counter'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware();
let middlewares = [];
middlewares.push(sagaMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);


function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
            onDecrementAsync={() => store.dispatch({type: 'ONDECREMENT_ASYNC'})}
            onIncrementAsync={() => store.dispatch({type: 'INCREMENT_ASYNC'})}
            onReset={() => store.dispatch({type: 'ONRESET', text: "我就给你重置"})}
        />,
        document.getElementById('root')
    )
}

render();

store.subscribe(render);

