import React, { Component } from "react";

export default class ItemComponent extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ minHeight: 500 + "px" }}>
          <div
            style={{ minHeight: 200 + "px", lineHeight: 200 + "px" }}
            className="bg-secondary bg-opacity-25 text-center fs-3"
          >
            500 x 325
          </div>
          <div className="card-body text-center">
            <h5 className="card-title fs-3">Card title</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              tenetur illo, aliquid repellendus numquam doloribus libero quasi
              fugiat sequi suscipit in odit alias, optio quos nesciunt. Laborum
              rem velit eligendi tempora, mollitia voluptate.
            </p>
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
