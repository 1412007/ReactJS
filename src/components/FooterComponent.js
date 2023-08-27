import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer
          className="bg-secondary text-center text-white"
          style={{ height: 50 + "px", lineHeight: 50 + "px" }}
        >
          <p>Copyright Your Website 2019</p>
        </footer>
      </div>
    );
  }
}
