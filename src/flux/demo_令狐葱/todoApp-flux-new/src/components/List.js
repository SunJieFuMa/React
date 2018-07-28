import React from "react"

export default class List extends React.Component {
    static defaultProps = {
        items: [],
    };

    render = () => {
        let listItems = this.props.items.map(
            function (item, index) {
                return (
                    <li key={index}>
                        <span onClick={this.props.remove.bind(null, index)}>点我删除  </span>
                        <span>{item}</span>
                    </li>
                );
            }.bind(this)
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    };
}
