import React, { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      timeline: []
    };
  }
  render() {
    return (
      <div>
        <p>何しとん?</p>
        <p>{this.state.text}</p>
        <input
          type="text"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
      </div>
    );
  }
}
