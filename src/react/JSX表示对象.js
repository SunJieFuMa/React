import React from 'react';
import ReactDOM from 'react-dom';


const element = <h1 className={'h1'}>what the F</h1>;

let createElement = React.createElement(
    'h1',
    {className:'h1'} ,
    'what the F');

export default function execute() {
    ReactDOM.render(
        createElement,
        document.getElementById('root'));
}

