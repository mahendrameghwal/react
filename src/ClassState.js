// ! state in Class Component...!!

import React ,{ Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      data: "mahendra",
    };
  }
// ! we can also do this  for change state
  // mks() {
  //   this.setState({ data: this.state.data + " " + `${this.state.data}`});
  // }
  render() {
    return (
      <div className="stateclass">
        <p>state in Class Component...</p>
        <p>{this.state.data}</p>

        <button
          onClick={() => {
            this.mks( this.setState({ data: this.state.data + " " + `${this.state.data}`}));
          }}
        >
          Click to change class of a state
        </button>
      </div>
    );
  }
}
export default User;
