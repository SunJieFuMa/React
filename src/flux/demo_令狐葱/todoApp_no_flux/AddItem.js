import React, {Component} from 'react';

export default class AddItem extends Component {
    static defaultProps = {
        add: () => {
        }
    };

    handleSubmit = (e) => {
        if (e.keyCode === 13) {
            let newItem = this.myTextInput.value;
            this.myTextInput.value = '';
            this.props.add(newItem);
        }
    };

    render = () => {
        return (
            <div>
                <input
                    type="text"
                    ref={(ref) => this.myTextInput = ref}
                    placeholder="输入，确定"
                    onKeyDown={this.handleSubmit}
                />
            </div>
        )
    }
};