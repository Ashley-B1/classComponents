import { Component } from "react";

class OtherClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        fName: 'Skye',
        lName: 'Brown'
      },
      color: 'lavender'
    };
  }

  render() {
    return (
      <div className="us-wrapper">
        <span
          className="square"
          style={{ backgroundColor: this.state.color }}
        />
        <h2>
          by {this.state.name.fName} {this.state.name.lName}
        </h2>
      </div>
    )
  }
}

export default OtherClassComponent;
