import React from 'react';
import ReactDOM from 'react-dom';

let str = "strings";

function add(a, b) {
    return a + b;
}

let h1 = <h1>w{2 + 2} t{str} f{add("hehe", "haha")}</h1>;
export default function execute() {
    ReactDOM.render(
        h1,
        document.getElementById('root'));
}
