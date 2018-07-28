import React, {Component} from 'react';
import AddItem from './AddItem';
import List from './List';

export default class ListContainer extends Component {
    state = {
        list: []
    };

    handleAddItem = (newItem) => {
        let list = this.state.list;
        list.push(newItem);
        this.setState({
            list: list
        });
    };

    handleRemoveItem = (index) => {
        this.state.list.splice(index, 1);
        this.setState({
            list: this.state.list
        });
    };

    render = () => {
        return (
            <div>
                <AddItem add={this.handleAddItem}/>
                <List items={this.state.list} remove={this.handleRemoveItem}/>
            </div>
        )
    }
}