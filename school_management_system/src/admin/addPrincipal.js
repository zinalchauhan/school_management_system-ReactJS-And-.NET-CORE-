import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";

export class AddPrincipal extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Principal Form</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add Principal</li>
                    </ol>
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
                        <h4 className="card-title">Principal Form</h4>
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
                              <div className="col-md-12">
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
                                    Principal Name :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Principal Name"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Principal Mobile : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="mobile"
                                      placeholder="Principal Mobile"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Principal Email : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="email"
                                      placeholder="Principal Email"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Principal Qualification : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Principal Qualification"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Principal Image :{" "}
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
                              <div className="col-lg-6 col-md-12">
                                <div class="form-group">
                                  <h5>
                                    Principal Address :{" "}
                                    <span class="required"></span>
                                  </h5>
                                  <div class="controls">
                                    <textarea
                                      name="textarea"
                                      id="textarea"
                                      cols="4"
                                      rows="7"
                                      class="form-control"
                                      required
                                      placeholder="Principal Address"
                                    ></textarea>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>
                                    Select State :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select State</option>
                                      <option value="1">gujrat</option>
                                      <option value="2">maharastra</option>
                                      <option value="3">madhyapradesh</option>
                                      <option value="4">uttarpradesh</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Select City :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select City</option>
                                      <option value="1">surat</option>
                                      <option value="2">ahmedabad</option>
                                      <option value="3">mumbai</option>
                                      <option value="4">pune</option>
                                      <option value="5">bihar</option>
                                      <option value="6">haryana</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div class="form-group">
                                <div className="col-lg-6 col-md-12">
                                  <h5>
                                    {" "}
                                    Standards : <span class="required"></span>
                                  </h5>{" "}
                                  <br />
                                  <div class="controls">
                                      <div className="col-md-4">
                                      <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          1
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="y"
                                          name="styled_checkbox"
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          2
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          3
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          4
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          5
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          6
                                        </span>
                                      </label>
                                    </fieldset>
                                          </div>
                                    <div className="col-md-6"><fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          7
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          8
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          9
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          10
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          11
                                        </span>
                                      </label>
                                    </fieldset>
                                    <fieldset>
                                      <label class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value="x"
                                          name="styled_checkbox"
                                          required
                                          class="custom-control-input"
                                        />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">
                                          {" "}
                                          12
                                        </span>
                                      </label>
                                    </fieldset>
                                        </div>
                                    
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

export default AddPrincipal;
