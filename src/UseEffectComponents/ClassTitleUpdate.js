import React, { Component } from "react";

export default class ClassTitleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
    this.nameUpdate = this.nameUpdate.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Dom updated");
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  nameUpdate(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
    console.log("name updated");
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.nameUpdate(e)}
        ></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}
