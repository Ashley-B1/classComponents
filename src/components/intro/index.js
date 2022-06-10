import { Component } from "react";
import { Link } from "react-router-dom";
import './intro.css';

class CreateClassComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Class Component</h1>
        <Link to='/other-example' className="link">
          <button className="link-button">
            Click me!
          </button>
        </Link>
      </div>
    );
  }
}

export default CreateClassComponent;
