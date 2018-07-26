import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handleClick' + this.props.text);
    };

    render() {
        return <div onClick={this.handleClick}>Hello,World</div>
    }
}

export default function () {
    ReactDOM.render(
        <Welcome text={'天上下，唯我独尊'}/>,
        document.getElementById('root')
    );
}
