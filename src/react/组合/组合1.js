import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    return <div>D{props.children}D</div>
}

export default function () {
    ReactDOM.render(
        <Welcome>
            <h1>H1</h1>
            <h2>H2</h2>
        </Welcome>,
        document.getElementById('root')
    );
}
