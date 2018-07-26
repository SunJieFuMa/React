import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {

    handleClick() {
        console.log('handleClick'+this.props.text);
    }
    render() {
        return <div onClick={this.handleClick.bind(this)}>Hello,World</div>
    }
}

export default function () {
    ReactDOM.render(
        <Welcome text={'天上地下，唯我独尊'}/>,
        document.getElementById('root')
    );
}
