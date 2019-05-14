import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import Display from "./components/display";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    message: ""
  };
  render() {
    return (
      <div className="App">
        <h2>This is the Baseball App</h2>

        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          message={this.state.message}
        />
        <Dashboard
          balls={this.state.balls}
          strikes={this.state.strikes}
          strikeMade={this.strikeMade}
          ballMade={this.ballMade}
          foul={this.foul}
          clear={this.clear}
        />
      </div>
    );
  }

  strikeMade = () => {
    const addStrike = this.state.strikes + 1;
    if (this.state.strikes === 3) {
      return;
    } else if (this.state.balls === 4) {
      return this.setState({ message: "The player was already walked!" });
    } else if (this.state.strikes === 2) {
      return this.setState({ strikes: 3, message: "You're outta there!" });
    } else {
      return this.setState({ strikes: addStrike, message: "" });
    }
  };

  ballMade = () => {
    const addBall = this.state.balls + 1;
    if (this.state.balls === 4) {
      return;
    } else if (this.state.strikes === 3) {
      return this.setState({ message: "The player was already struck out!" });
    } else if (this.state.balls === 3) {
      return this.setState({ balls: 4, message: "Walk to first base!" });
    } else {
      return this.setState({ balls: addBall, message: "" });
    }
  };
  foul = () => {
    const addStrike = this.state.strikes + 1;
    if (this.state.strikes === 2) {
      return this.setState({ message: "Foul Ball!" });
    } else if (this.state.strikes === 3) {
      return this.setState({ message: "The player was already struck out!" });
    } else if (this.state.balls === 4) {
      return this.setState({ message: "The player was already walked!" });
    } else {
      return this.setState({ strikes: addStrike, message: "Foul Ball!" });
    }
  };
  clear = () => {
    return this.setState({ strikes: 0, balls: 0, message: "" });
  };
}

export default App;
