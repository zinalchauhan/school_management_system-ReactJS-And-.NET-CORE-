import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";

export class Index extends Component {

  componentDidMount() {
    console.log("User Id :: ",sessionStorage.getItem("userId").toString());
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              {/* <!-- Sales stats --> */}
              <div className="row">
                <div className="col-xs-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-block">
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 info">
                                  4,704
                                </span>
                              </div>
                              <p className="text-muted">
                                Total Students {" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 deep-orange">
                                  2,657
                                </span>
                              </div>
                              <p className="text-muted">
                                Total English Medium Students
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-12 border-right-lighten-5">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 danger">
                                  2,050
                                </span>
                              </div>
                              <p className="text-muted">
                              Total Gujarati Medium Students
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-block">
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 info">
                                  194
                                </span>
                              </div>
                              <p className="text-muted">
                                Total Teachers {" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 deep-orange">
                                  108
                                </span>
                              </div>
                              <p className="text-muted">
                                Total English Medium Teachers
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-12 border-right-lighten-5">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 danger">
                                  86
                                </span>
                              </div>
                              <p className="text-muted">
                              Total Gujarati Medium Teachers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               
            </div>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
