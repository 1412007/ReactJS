import React, { Component } from "react";

export default class BannerComponent extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="pt-5 pb-5 ps-2 pe-2 bg-secondary bg-opacity-25">
            <h1>A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              qui recusandae illum libero odit voluptatum quam! Iure
              voluptatibus, neque repellendus libero sint illo voluptate amet
              molestiae earum perferendis ex voluptatem!
            </p>
            <button type="button" className="btn btn-primary">
              Call to action!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
