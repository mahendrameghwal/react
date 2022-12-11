import React from "react";

class Laptops extends React.Component {
  render() {
    return (
      <div className="props">
        <p>
          my {this.props.statuss} Laptop {this.props.name}
        </p>
      </div>
    );
  }
}

export default Laptops;
