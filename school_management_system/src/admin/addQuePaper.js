import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";

export class AddQuePaper extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                  </div>
                </div>
              </div>
              <div className="content-header-right text-md-right col-md-6 col-xs-12">
                <div className="form-group"></div>
                {/* <!-- Round Outline Icon Buttons--> */}
              </div>
              <div className="content-header-lead col-xs-12 mt-2"></div>
            </div>
            <div className="content-body">
              {/* <!-- Input Validation start --> */}
              <section className="input-validation">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Question Paper</h4>
                        <a className="heading-elements-toggle">
                          <i className="icon-ellipsis font-medium-3"></i>
                        </a>
                        <div className="heading-elements">
                          <ul className="list-inline mb-0">
                            <li>
                              <a data-action="collapse">
                                <i className="icon-minus4"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="reload">
                                <i className="icon-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="expand">
                                <i className="icon-expand2"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="close">
                                <i className="icon-cross2"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body collapse in">
                        <div className="card-block ">
                          <form className="form-horizontal" novalidate>
                            <div className="row">
                              <div className="col-md-9">
                                <div className="form-group">
                                  <h5>
                                    Select Medium :{" "}
                                    <span className="required"></span>
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
                            <br />
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                  <h5>
                                    Select Standard :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select Standard</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                    </select>
                                  </div>
                                </div>
                                
                              <div className="form-group">
                                  <h5>
                                    Select Subject :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select Subject</option>
                                      <option value="1">Hindi</option>
                                      <option value="2">Gujarati</option>
                                      <option value="3">English</option>
                                      <option value="4">Polity  </option>
                                      <option value="5">History</option>
                                      <option value="6">Geography</option>
                                      <option value="7">Science</option>
                                      <option value="8">Maths</option>
                                      <option value="9">Computer</option>
                                      <option value="10">Yoga</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                  <h5>Paper Year : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Paper Year"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Paper images :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="file"
                                      name="img"
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                              
                              </div>
                            </div>
                            <hr />
                            <div className="text-xs-right">
                              <button type="submit" className="btn btn-success">
                                Submit{" "}
                                <i className="icon-thumbs-up position-right"></i>
                              </button>{" "}
                              &nbsp;&nbsp;&nbsp;
                              <button type="reset" className="btn btn-danger">
                                Reset{" "}
                                <i className="icon-refresh position-right"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- Input Validation end --> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default AddQuePaper;
