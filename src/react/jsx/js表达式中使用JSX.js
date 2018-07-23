import React from 'react';
import ReactDOM from 'react-dom';


function getElement(boo) {
    if (boo) {
        return <h1>给你H1</h1>
    }
    return <h2 style={{color: "#ff0000"}}>给你红色H2</h2>
}

export default function execute() {
    ReactDOM.render(
        getElement(false),
        document.getElementById('root'));
}