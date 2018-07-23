import React from 'react';
import ReactDOM from 'react-dom';


let style = {
    h1Style: {
        background: "#ff0000",
        color: "#000000",
    }
};

// export default function execute() {
//
//     ReactDOM.render(
//         //  对象
//         <h1 style={style.h1Style}>
//             使用JSX
//         </h1>,
//         document.getElementById('root'));
// }


let h1Style = {
    background: "#ff0000",
    color: "#000000",
};
export default function execute() {
    ReactDOM.render(
        // 属性
        <h1 style={h1Style}>
            使用JSX
        </h1>,
        document.getElementById('root'));
}