import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    if (props.boo) {
        return <h2>给你H2</h2>
    } else {
        return <h1>给你H1</h1>
    }
}


export default function () {
    ReactDOM.render(
        <Welcome boo={false}/>,
        document.getElementById('root')
    );
}


