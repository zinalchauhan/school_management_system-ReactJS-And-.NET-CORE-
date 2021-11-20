import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./includes/footer";
import Header from "./includes/header";

export class OldStudent extends Component {
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
                      Select Year : <span className="required"></span>
                    </h5>
                    <div className="controls">
                      <select
                        name="select"
                        id="select"
                        required
                        className="form-control"
                      >
                        <option value="">Select Year</option>
                        <option value="1">2001</option>
                        <option value="2">2002</option>
                        <option value="3">2003</option>
                        <option value="4">2004</option>
                        <option value="5">2005</option>
                        <option value="6">2006</option>
                        <option value="7">2007</option>
                        <option value="8">2008</option>
                        <option value="9">2009</option>
                        <option value="10">2010</option>
                        <option value="11">2011</option>
                        <option value="12">2012</option>
                        <option value="13">2013</option>
                        <option value="14">2014</option>
                        <option value="15">2015</option>
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

export default OldStudent;
