import React, { Component } from "react";

class ClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  //   componentDidMount() {
  //     this.startTimer(); // for this, the timer will start automatically when the component is first rendered on the UI
  //   }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return { timer: prevState.timer + 1 };
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>Timer - {this.state.timer} </h1>
        <button onClick={this.startTimer}>Start Class Timer</button>
        <button onClick={() => clearInterval(this.interval)}>
          Stop Class Timer
        </button>
      </div>
    );
  }
}

export default ClassTimer;
