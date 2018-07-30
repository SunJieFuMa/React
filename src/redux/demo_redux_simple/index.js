import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/Counter'
import reducers from './reducers/reducer'

const store = createStore(reducers);

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
);

render();
store.subscribe(render);


/*
Store对象包含所有数据。
store.getState(): 如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
当前时刻的 State，可以通过store.getState()拿到,Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然

store.dispatch(): 是 View 发出 Action 的唯一方法,store.dispatch接受一个 Action 对象作为参数，将它发送出去
store.subscribe() 设置监听函数，一旦 State 发生变化，就自动执行这个函数,显然，只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
store.subscribe方法返回一个函数，调用这个函数就可以解除监听
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
unsubscribe();

*/


/*
const store = createStore(reducers); // createStore函数接受另一个函数(reducers)作为参数，返回新生成的 Store 对象

createStore内部实现原理
1 内部存储state。getState就返回state
2 subscribe函数，将回调函数保存
3 dispatch方法，调用reducer，将保存的state和action传递过去，返回新的state，然后调用回调函数，刷新UI
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};
*/