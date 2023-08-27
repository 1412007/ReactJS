import { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default BaiTapThucHanhLayout;
