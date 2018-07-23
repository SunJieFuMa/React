import React from 'react';
import ReactDOM from 'react-dom';

export default function execute() {

    ReactDOM.render(
        <h1 style={{background: "#000000", color: "#ff0000"}}>
            使用JSX
        </h1>,
        document.getElementById('root'));
}
