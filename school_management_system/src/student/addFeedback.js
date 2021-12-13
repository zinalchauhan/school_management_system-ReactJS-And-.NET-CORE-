import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddFeedback extends Component {

  render() {
    
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Feedback</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Give Feedback</li>
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
                        <h4 className="card-title">Feedback </h4>
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
                          <form
                            className="form-horizontal"
                            // onSubmit={this.onSubmit.bind(this)}
                          >
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Subject:{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="subname"
                                      placeholder="Subject"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Description :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">

                                    <textarea rows="5" cols="65" placeholder="Description"  data-validation-required-message="This field is required">

                                    </textarea>
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
                              <button
                                type="reset"
                                className="btn btn-danger"
                                // onClick={this.reset()}
                              >
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

export default AddFeedback;
