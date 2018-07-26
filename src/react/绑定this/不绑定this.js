import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {

    componentWillMount(){
        console.log('挂载：'+this.props.text);
    }
    handleClick() {
        console.log('handleClick'+this.props.text);
    }
    render() {
        return <div onClick={this.handleClick}>Hello,World</div>
    }
}

export default function () {
    ReactDOM.render(
        <Welcome text={'天上地下，唯我独尊'}/>,
        document.getElementById('root')
    );
}
