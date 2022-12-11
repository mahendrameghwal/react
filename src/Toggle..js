import { Component } from "react";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      DisplayContent: true,
    };
  }

  changers() {
    this.setState({
      DisplayContent: !this.state.DisplayContent,
    });
  }

  render() {
    return (
      <div>
        {this.state.DisplayContent ? (
          <h1>Toggle in react js class component</h1>
        ) : null}

        <button onClick={() => this.changers()}>Toggle</button>
      </div>
    );
  }
}
export default Toggle;
