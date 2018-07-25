import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    return <div>D{props.children}D</div>
}

export default function () {
    ReactDOM.render(
        <Welcome>
           XXXXX
        </Welcome>,
        document.getElementById('root')
    );
}
