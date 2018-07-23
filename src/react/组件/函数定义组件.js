import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    return <h1>Hello,函数</h1>
}

export default function () {
    ReactDOM.render(
        <Welcome/>,
        document.getElementById('root')
    )
}

