import { Component } from "react";
import { Link } from "react-router-dom";
import './useState.css';

class OtherClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        fName: 'Skye',
        lName: 'Brown'
      },
      color: '#9C73B3'
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
        <Link className="link" to='/'>
          <button>Home</button>
        </Link>
      </div>
    )
  }
}

export default OtherClassComponent;
