import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {
    render() {
        return <h1>Hello,{this.props.text}</h1>
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome text="1"/>
                <Welcome text="2"/>
                <Welcome text="3"/>
            </div>
        )
    }
}

export default function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
}

