import React from 'react'
import ReactDOM from 'react-dom'

let arr = ['a', 'b', 'c', 'd'];
let newArr = arr.map(
    (ele) => {
        return ele + ele
    }
);

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.liArr = props.arr.map(
            (ele,index) => {
                return <li key={index}>{ele}</li>
            });
    }

    render() {
        return (
            <ul>
                {this.liArr}
            </ul>
        )
    }
}

export default function () {
    console.log(newArr);
    ReactDOM.render(
        <ListComponent arr={arr}/>,
        document.getElementById('root')
    );
}
