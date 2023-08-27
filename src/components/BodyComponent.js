import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import ItemComponent from "./ItemComponent";

export default class BodyComponent extends Component {
  render() {
    return (
      <div>
        <BannerComponent />
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-3">
              <ItemComponent />
            </div>
            <div className="col-3">
              <ItemComponent />
            </div>
            <div className="col-3">
              <ItemComponent />
            </div>
            <div className="col-3">
              <ItemComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
