import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

export class ViewAttendence extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Attendence List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Attendence List
                      </li>
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
                  <div className="form-group">
                    <h5>
                      Select Standard : <span className="required"></span>
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
                </div>
              </div>

              <button
                type="button"
                onclick="javascript:AttendanceList();"
                class="btn btn-outline-info btn-min-width mr-1 mb-1"
              >
                Show in Table
              </button>
              <br />

              <section id="google-bar-charts">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Attendance Chart</h4>
                        <a class="heading-elements-toggle">
                          <i class="icon-ellipsis font-medium-3"></i>
                        </a>
                        <div class="heading-elements">
                          <ul class="list-inline mb-0">
                            <li>
                              <a data-action="collapse">
                                <i class="icon-minus4"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="expand">
                                <i class="icon-expand2"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="close">
                                <i class="icon-cross2"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <br />
                        <div class="col-xs-3">
                          <input
                            type="date"
                            class="form-control"
                            id="date"
                            name="date"
                            value="2021-10-25"
                          />
                        </div>
                        <div class="col-xs-3">
                          <div class="col-xs-2 ">
                            <button
                              type="button"
                              class="btn btn-success"
                            ></button>
                          </div>
                          <div class="col-xs-1">Present</div>
                        </div>
                        <div class="col-xs-3">
                          <div class="col-xs-2 ">
                            <button
                              type="button"
                              class="btn btn-danger"
                            ></button>
                          </div>
                          <div class="col-xs-1">Absent</div>
                        </div>
                        <div class="col-xs-3">
                          <div class="col-xs-2">
                            <button
                              type="button"
                              class="btn btn-warning"
                            ></button>
                          </div>
                          <div class="col-xs-1">Total</div>
                        </div>
                      </div>
                      <div class="card-body collapse in">
                        <div class="card-block">
                          <div id="stacked-column-chart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ViewAttendence;
