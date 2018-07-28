import React, { Component } from "react";

export default class AddItem extends Component {
  static defaultProps = {
    add: () => {}
  };


  handleSubmit = e => {
    if (e.keyCode === 13) {
      let newItem = this.myTextInput.value;
      this.myTextInput.value = "";
      this.props.add(newItem);
    }
  };

  render = () => {
    return (
      <div>
        <input
          type="text"
          ref={ref => (this.myTextInput = ref)}
          className="form-control"
          placeholder="New Item"
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  };
}
