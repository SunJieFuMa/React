import React from 'react'

function MyButton(props) {
    let items = props.items;
    let itemHtml = items.map(function (listItem, i) {
        return <li key={i}>{listItem}</li>;
    });

    return <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onClick}>New Item</button>
    </div>;
};

export default MyButton;
