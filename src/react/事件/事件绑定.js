import React from 'react'
import ReactDOM from 'react-dom'

function con() {
    alert("弹窗");
}

export default function () {
    ReactDOM.render(
        <div>
            <h1 onClick={alert("H1弹窗")}>点我弹窗</h1>
            <div onClick={con}>点我弹窗</div>
        </div>,
        document.getElementById('root'))
}