import React, {Component} from 'react';

export default class List extends Component {
    static defaultProps = {
        items: [],
        remove: () => {
        }
    };


    render = () => {
        let listItems = this.props.items.map(function (item, index) {
            return (
                <li key={index}>
                    <span onClick={this.props.remove.bind(null, index)}/>
                    <span>{item}</span>
                </li>
            )
        }.bind(this));

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
};
