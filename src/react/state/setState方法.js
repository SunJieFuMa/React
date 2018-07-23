import React from 'react'
import ReactDOM from 'react-dom'


class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {name: "Welcome"}
    }

    componentDidMount() {
        this.state.name = "W";
        this.setState({name: "W"});
    }

    render() {
        return (<h1>Hello,{this.state.name}</h1>)
    }
}

export default function () {
    ReactDOM.render(
        <Welcome/>,
        document.getElementById('root')
    )
}