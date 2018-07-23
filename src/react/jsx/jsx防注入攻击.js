import React from 'react';
import ReactDOM from 'react-dom';

const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
export default function execute() {
    ReactDOM.render(
        element,
        document.getElementById('root'));
}