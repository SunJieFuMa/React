import React from 'react';
import ReactDOM from 'react-dom';

export default function execute() {
    ReactDOM.render(
        <div style={{background: "#ff0000"}}>
            div
            <h4>嵌套一个H4</h4>
        </div>,
        document.getElementById('root'));
}