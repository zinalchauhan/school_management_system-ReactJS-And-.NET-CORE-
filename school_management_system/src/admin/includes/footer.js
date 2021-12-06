import react from "react";
import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer footer-dark footer-transparent navbar-fixed-bottom">
          <p className="clearfix text-muted text-sm-center mb-0 px-2">
            <span className="float-md-left d-xs-block d-md-inline-block">
              Copyright &copy; 2017{" "}
              <a
                href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                target="_blank"
                className="text-bold-800 grey darken-2"
              >
                PIXINVENT{" "}
              </a>
              , All rights reserved.{" "}
            </span>
            <span className="float-md-right d-xs-block d-md-inline-block">
              Hand-crafted and Made with <i className="icon-heart5 pink"></i>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
