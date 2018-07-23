import React from 'react';
import ReactDOM from 'react-dom';
import '../元素/元素的属性style/index.css';
import App from './App';
import registerServiceWorker from '../.././registerServiceWorker';

const element = <div style={{background: "#ff0000"}} tabIndex="0">div</div>;
export default function execute() {
    ReactDOM.render(element, document.getElementById('root'));
    registerServiceWorker();
}