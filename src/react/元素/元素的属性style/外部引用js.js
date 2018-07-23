import React from 'react';
import ReactDOM from 'react-dom';
import {Style, h1Style} from './StyleObject';

export default function execute() {
    ReactDOM.render(
        <h1 style={Style.h1Style}>
            使用JSX
        </h1>,
        document.getElementById('root'));
}

// export default function execute() {
//     ReactDOM.render(
//         <h1 style={h1Style}>
//             使用JSX
//         </h1>,
//         document.getElementById('root'));
// }