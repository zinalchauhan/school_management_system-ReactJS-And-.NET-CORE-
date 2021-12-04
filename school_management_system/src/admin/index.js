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
                          <div class="col-xl-3 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-box font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 info">
                                  5,879
                                </span>
                              </div>
                              <p class="text-muted">
                                Total Products{" "}
                                <span class="info float-xs-right">
                                  <i class="icon-arrow-up4 info"></i> 16.89%
                                </span>
                              </p>
                              <progress
                                class="progress progress-sm progress-info"
                                value="80"
                                max="100"
                              ></progress>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-tag3 font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 deep-orange">
                                  423
                                </span>
                              </div>
                              <p class="text-muted">
                                New Orders
                                <span class="deep-orange float-xs-right">
                                  <i class="icon-arrow-up4 deep-orange"></i>{" "}
                                  5.14%
                                </span>
                              </p>
                              <progress
                                class="progress progress-sm progress-deep-orange"
                                value="45"
                                max="100"
                              ></progress>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-6 col-sm-12 border-right-blue-grey border-right-lighten-5">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-shuffle3 font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 danger">
                                  61%
                                </span>
                              </div>
                              <p class="text-muted">
                                Conversion Rate
                                <span class="danger float-xs-right">
                                  <i class="icon-arrow-down4 danger"></i> 2.24%
                                </span>
                              </p>
                              <progress
                                class="progress progress-sm progress-danger"
                                value="75"
                                max="100"
                              ></progress>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-6 col-sm-12">
                            <div class="media px-1">
                              <div class="media-left media-middle">
                                <i class="icon-dollar font-large-1 blue-grey"></i>
                              </div>
                              <div class="media-body text-xs-right">
                                <span class="font-large-2 text-bold-300 success">
                                  $6,87M
                                </span>
                              </div>
                              <p class="text-muted">
                                Total Profit
                                <span class="success float-xs-right">
                                  <i class="icon-arrow-up4 success"></i> 43.84%
                                </span>
                              </p>
                              <progress
                                class="progress progress-sm progress-success"
                                value="60"
                                max="100"
                              ></progress>
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
