import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {
    render() {
        return <h1>Hello,类</h1>
    }
}

export default function () {
    ReactDOM.render(
        <Welcome/>,
        document.getElementById('root')
    )
}

