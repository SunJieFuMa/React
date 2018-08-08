import React from 'react'

export default class Counter extends React.Component {
    componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps:  " + props);
    }

    render() {
        let {
            value, onIncrement, onDecrement,
            onIncrementAsync, onDecrementAsync,
            onReset
        } = this.props;
        return <div>
            <button onClick={onIncrement}>
                增加
            </button>
            <button onClick={onDecrement}>
                减少
            </button>
            <button onClick={onIncrementAsync}>
                1s后增加
            </button>
            <button onClick={onDecrementAsync}>
                1s后减少
            </button>
            <button onClick={onReset}>
                重置
            </button>
            <hr/>
            <div>
                数量: {value}
            </div>
        </div>;
    }
}

