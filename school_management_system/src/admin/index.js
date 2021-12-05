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
        <div class="robust-content content container-fluid">
          <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
              {/* <!-- Sales stats --> */}
              <div class="row">
                <div class="col-xs-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-block">
                        <div class="row">
                          <div class="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 info">
                                  4,704
                                </span>
                              </div>
                              <p class="text-muted">
                                Total Students {" "}
                              </p>
                            </div>
                          </div>
                          <div class="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 deep-orange">
                                  2,657
                                </span>
                              </div>
                              <p class="text-muted">
                                Total English Medium Students
                              </p>
                            </div>
                          </div>
                          <div class="col-xl-4 col-lg-6 col-sm-12 border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 danger">
                                  2,050
                                </span>
                              </div>
                              <p class="text-muted">
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
              <div class="row">
                <div class="col-xs-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-block">
                        <div class="row">
                          <div class="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 info">
                                  194
                                </span>
                              </div>
                              <p class="text-muted">
                                Total Teachers {" "}
                              </p>
                            </div>
                          </div>
                          <div class="col-xl-4 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 deep-orange">
                                  108
                                </span>
                              </div>
                              <p class="text-muted">
                                Total English Medium Teachers
                              </p>
                            </div>
                          </div>
                          <div class="col-xl-4 col-lg-6 col-sm-12 border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 danger">
                                  86
                                </span>
                              </div>
                              <p class="text-muted">
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
