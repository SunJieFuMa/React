import React from "react";

// React component
export default class Counter extends React.Component {
    render() {
        const {value, text, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value + "" + text}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}
