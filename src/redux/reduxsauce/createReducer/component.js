import React from "react";

// React component
export default class Counter extends React.Component {
    render() {
        const {value=0, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}
