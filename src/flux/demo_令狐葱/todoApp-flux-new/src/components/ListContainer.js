import React from "react";
import AddItem from "./AddItem";
import List from "./List";
import todoStore from "../stores/todoStore";
import todoActions from "../actions/todoActions";
import AppDispatcher from "../dispatcher/AppDispatcher";

export default class ListContainer extends React.Component {
    state = {
        list: todoStore.getList()
    };

    componentDidMount() {
        todoStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        todoStore.removeChangeListener(this._onChange);
    };

    handleAddItem = newItem => {
        AppDispatcher.dispatch(todoActions.addItem(newItem));
    };

    handleRemoveItem (index) {
        AppDispatcher.dispatch(todoActions.removeItem(index));
    };

    _onChange = () => {
        this.setState({
            list: todoStore.getList()
        });
    };

    render = () => {
        return (
            <div>
                <AddItem add={this.handleAddItem}/>
                <List items={this.state.list} remove={this.handleRemoveItem}/>
            </div>
        );
    };
}
