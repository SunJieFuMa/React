import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    return (
        <div>
            <h1>Hello!</h1>
            {props.boo ? <h2>SJ</h2> : <h2>World</h2>}
        </div>
    );
}

export default function () {
    ReactDOM.render(
        <Welcome boo={true}/>,
        document.getElementById('root')
    );
}
