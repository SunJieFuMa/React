import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    return (
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    );
}

export default function () {
    ReactDOM.render(
        <Welcome left={<h1>left</h1>} right={<h1>right</h1>}/>,
        document.getElementById('root')
    );
}
