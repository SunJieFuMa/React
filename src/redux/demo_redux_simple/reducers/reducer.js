export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
};
/*
  Action
  Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置
  Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store
*/

/*
  Reducer :为什么这个函数叫做 Reducer 呢？因为它可以作为数组的reduce方法的参数
  Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出

  Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer
  Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});
  reducer函数收到名为ADD的 Action 以后，就返回一个新的 State，作为加法的计算结果


实际应用中，Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。
为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
const store = createStore(reducer);
createStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象
最好把 State 对象设成只读。你没法改变它，要得到新的 State，唯一办法就是生成一个新对象。这样的好处是，任何时候，与某个 View 对应的 State 总是一个不变的对象(Immutable.js)



*/