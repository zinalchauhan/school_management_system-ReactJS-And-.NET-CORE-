import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "../admin/includes/footer";

export class teacherViewNotice extends Component {
  render() {
    return (
      <div>
          <Header></Header>
            
          <Footer></Footer>
      </div>
    );
  }
}

export default teacherViewNotice;