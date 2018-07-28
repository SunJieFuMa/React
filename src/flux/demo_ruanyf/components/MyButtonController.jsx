import React from 'react'
import MyButton from './MyButton'
import ButtonActions from '../actions/ButtonActions'
import ListStore from '../stores/ListStore'


class MyButtonController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ListStore.getAll()};
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        ListStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({items: ListStore.getAll()})
    }

     createNewItem(event) {
        ButtonActions.addNewItem('new item');
    }

    render() {
        return <MyButton items={this.state.items} onClick={this.createNewItem}/>
    }
}
export default MyButtonController;
