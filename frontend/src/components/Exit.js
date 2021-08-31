import React, { Component } from "react";

import "./styles/ExitStyle.css";

export class Exit extends Component {
  handleClick = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={this.handleClick}
        >
          x
        </button>
      </div>
    );
  }
}

export default Exit;
