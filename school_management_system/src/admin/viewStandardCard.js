import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./includes/footer";
import Header from "./includes/header";
import ViewStudent from "./viewStudent";

export class ViewStandardCard extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Standard List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Standard List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="content-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <h5>
                      Select Medium : <span className="required"></span>
                    </h5>
                    <div className="controls">
                      <select
                        name="select"
                        id="select"
                        required
                        className="form-control"
                      >
                        <option value="">Select Medium</option>
                        <option value="1">Gujarati</option>
                        <option value="2">Hindi</option>
                        <option value="3">English</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <h5>
                      Select Division : <span className="required"></span>
                    </h5>
                    <div className="controls">
                      <select
                        name="select"
                        id="select"
                        required
                        className="form-control"
                      >
                        <option value="">Select Division</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              {/* <!-- Basic example section start --> */}
              <section id="basic-examples">
                <div className="row match-height">
                  <div className="col-xl-3 col-md-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div class="card-block">
                          <h4 class="card-title">Standard - 1</h4>
                          <Link to="/view" class="btn btn-outline-info">
                            View Student
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- // Basic example section end --> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ViewStandardCard;
