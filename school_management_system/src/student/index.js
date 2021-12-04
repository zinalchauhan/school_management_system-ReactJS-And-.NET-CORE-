import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class studentIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students : [],
      studentIdFk : 0,
      standardIdFk: 0,
      classIdFk : 0,
    }
  }

  componentDidMount(){
    this.OnGetData(sessionStorage.getItem("userId").toString());
  }

  OnGetData(id) {
    fetch(Variables.STUD_API_URL + "studentList/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            classIdFk: result.data.classIdFk,
            standardIdFk : result.data.standardIdFk,
          });
           sessionStorage.setItem("classId",result.data.classIdFk);
           sessionStorage.setItem("standardId",result.data.studentIdPk);
        },
        (error) => {
          alert("Failed");
        }
      );
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
              {/* <!--/ Sales stats --> */}
              {/* <!-- Sales by Campaigns & Year --> */}
              <div class="row">
                <div class="col-xl-8 col-lg-12">
                  <div class="card">
                    <div class="card-header no-border-bottom">
                      <h4 class="card-title pb-1">Sales by Campaigns</h4>
                      <a class="heading-elements-toggle">
                        <i class="icon-ellipsis font-medium-3"></i>
                      </a>
                      <div class="heading-elements">
                        <ul class="list-inline mb-0">
                          <li>
                            <a data-action="reload">
                              <i class="icon-reload"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card-body collapse in">
                      <div class="card-block">
                        <div
                          id="sales-campaigns"
                          class="height-300 echart-container"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12">
                  <div class="card card-inverse bg-danger">
                    <div class="card-header no-border-bottom">
                      <h4 class="card-title">Yearly Sales</h4>
                    </div>
                    <div class="card-body">
                      <div class="chartjs">
                        <canvas
                          id="yearly-sales"
                          class="height-350 px-2 pt-2"
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Sales by Campaigns & Year --> */}
              {/* <!-- Top Selling Phones & Customer Browser's Stats --> */}
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="card card-inverse bg-gradient-y-danger">
                    <div class="card-header no-border-bottom">
                      <h4 class="card-title">Customer Browser's Stats</h4>
                    </div>
                    <div class="card-body collapse in">
                      <div class="card-block">
                        <div
                          id="browser-stats"
                          class="height-300 echart-container"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="card card-inverse bg-success">
                    <div class="card-header no-border-bottom">
                      <h4 class="card-title">Top Selling Phones</h4>
                    </div>
                    <div class="card-body collapse in">
                      <div class="card-block">
                        <div
                          id="top-selling-phones-doughnut"
                          class="height-300 echart-container"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Top Selling Phones & Customer Browser's Stats --> */}
              {/* <!-- Recent Orders --> */}
              <div class="row">
                <div class="col-xl-4 col-lg-12">
                  <div class="card card-inverse card-primary text-xs-center">
                    <div class="card-body">
                      <div class="card-block pt-3">
                        <img
                          src="./assets/robust-assets/images/elements/01.png"
                          alt="element 01"
                          width="140"
                          class="float-xs-left"
                        />
                        <h4 class="card-title mt-3">Brand Minute</h4>
                        <p class="card-text">Donut toffee candy brownie.</p>
                        <button class="btn btn-primary btn-darken-3">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-primary">
                    <div class="card-body">
                      <div class="card-block">
                        <div class="media">
                          <div class="media-left media-middle">
                            <i class="icon-bar-graph white font-large-2 float-xs-left"></i>
                          </div>
                          <div class="media-body white text-xs-right">
                            <h3>1,278</h3>
                            <span>Most Loved</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Recent Orders</h4>
                      <a class="heading-elements-toggle">
                        <i class="icon-ellipsis font-medium-3"></i>
                      </a>
                      <div class="heading-elements">
                        <ul class="list-inline mb-0">
                          <li>
                            <a data-action="reload">
                              <i class="icon-reload"></i>
                            </a>
                          </li>
                          <li>
                            <a data-action="expand">
                              <i class="icon-expand2"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="card-block">
                        <p>
                          Total paid invoices 240, unpaid 150.{" "}
                          <span class="float-xs-right">
                            <a href="project-summary.html" target="_blank">
                              Invoice Summary <i class="icon-arrow-right2"></i>
                            </a>
                          </span>
                        </p>
                      </div>
                      <div class="table-responsive">
                        <table
                          id="recent-orders"
                          class="table table-hover mb-0"
                        >
                          <thead>
                            <tr>
                              <th>SKU</th>
                              <th>Invoice#</th>
                              <th>Customer Name</th>
                              <th>Status</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-truncate">PO-10521</td>
                              <td class="text-truncate">
                                <a href="#">INV-001001</a>
                              </td>
                              <td class="text-truncate">Elizabeth W.</td>
                              <td class="text-truncate">
                                <span class="tag tag-default tag-success">
                                  Paid
                                </span>
                              </td>
                              <td class="text-truncate">$ 1200.00</td>
                            </tr>
                            <tr>
                              <td class="text-truncate">PO-532521</td>
                              <td class="text-truncate">
                                <a href="#">INV-01112</a>
                              </td>
                              <td class="text-truncate">Doris R.</td>
                              <td class="text-truncate">
                                <span class="tag tag-default tag-warning">
                                  Overdue
                                </span>
                              </td>
                              <td class="text-truncate">$ 5685.00</td>
                            </tr>
                            <tr>
                              <td class="text-truncate">PO-05521</td>
                              <td class="text-truncate">
                                <a href="#">INV-001012</a>
                              </td>
                              <td class="text-truncate">Andrew D.</td>
                              <td class="text-truncate">
                                <span class="tag tag-default tag-success">
                                  Paid
                                </span>
                              </td>
                              <td class="text-truncate">$ 152.00</td>
                            </tr>
                            <tr>
                              <td class="text-truncate">PO-15521</td>
                              <td class="text-truncate">
                                <a href="#">INV-001401</a>
                              </td>
                              <td class="text-truncate">Megan S.</td>
                              <td class="text-truncate">
                                <span class="tag tag-default tag-success">
                                  Paid
                                </span>
                              </td>
                              <td class="text-truncate">$ 1450.00</td>
                            </tr>
                            <tr>
                              <td class="text-truncate">PO-32521</td>
                              <td class="text-truncate">
                                <a href="#">INV-008101</a>
                              </td>
                              <td class="text-truncate">Walter R.</td>
                              <td class="text-truncate">
                                <span class="tag tag-default tag-warning">
                                  Overdue
                                </span>
                              </td>
                              <td class="text-truncate">$ 685.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Recent Orders --> */}
              {/* <!-- Map Based Selling --> */}
              <div class="row">
                <div class="col-xs-12">
                  <div class="card box-shadow-0">
                    <div class="card-body collapse in">
                      <div class="row">
                        <div class="col-xl-8 col-lg-12">
                          <div id="world-map-markers" class="height-450"></div>
                        </div>
                        <div class="col-xl-4 col-lg-12">
                          <div class="card-block">
                            <h4 class="card-title py-1 text-xs-center">
                              Sales All Over The World
                            </h4>
                            <div class="row">
                              <div class="col-xl-12 col-lg-4 col-sm-12">
                                <div class="media">
                                  <div class="media-body">
                                    <span>
                                      Total Profit{" "}
                                      <i class="icon-arrow-up4 success"></i>{" "}
                                      <span class="teal accent-3">6.89%</span>
                                    </span>
                                    <h2 class="mb-0">$47.8K</h2>
                                  </div>
                                  <div class="media-right media-top pr-2">
                                    <i class="icon-dollar font-large-1"></i>
                                  </div>
                                </div>
                                <div
                                  id="map-total-profit"
                                  class="height-75"
                                ></div>
                              </div>
                              <div class="col-xl-12 col-lg-4 col-sm-12">
                                <div class="media">
                                  <div class="media-body">
                                    <span>
                                      Total Orders{" "}
                                      <i class="icon-arrow-down4 deep-orange accent-3"></i>{" "}
                                      <span class="deep-orange accent-3">
                                        4.27%
                                      </span>
                                    </span>
                                    <h2 class="mb-0">789</h2>
                                  </div>
                                  <div class="media-right media-top pr-2">
                                    <i class="icon-cart font-large-1"></i>
                                  </div>
                                </div>
                                <div
                                  id="map-total-orders"
                                  class="height-75"
                                ></div>
                              </div>
                              <div class="col-xl-12 col-lg-4 col-sm-12">
                                <div class="sales pr-2">
                                  <div class="sales-today mb-1">
                                    <p class="m-0">
                                      Today{" "}
                                      <span class="sucess float-xs-right">
                                        <i class="icon-arrow-up4 success"></i>{" "}
                                        6.89%
                                      </span>
                                    </p>
                                    <progress
                                      class="progress progress-sm progress-success progress-accent-3 mb-0"
                                      value="70"
                                      max="100"
                                    ></progress>
                                  </div>
                                  <div class="sales-yesterday">
                                    <p class="m-0">
                                      Yesterday{" "}
                                      <span class="deep-orange accent-2 float-xs-right">
                                        <i class="icon-arrow-down4 deep-orange accent-3"></i>{" "}
                                        4.18%
                                      </span>
                                    </p>
                                    <progress
                                      class="progress progress-sm progress-deep-orange progress-accent-2 mb-0"
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
              {/* <!--/ Map Based Selling --> */}
              {/* <!-- weather & product stats --> */}
              <div class="row">
                <div class="col-xl-6 col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="weather-img position-relative">
                        <div class="weather-date position-absolute">
                          <div class="date-info bg-grey bg-darken-4 white p-1 text-xs-center">
                            <span class="month block">Nov</span>
                            <span class="date block">14</span>
                          </div>
                        </div>
                        <img
                          class="card-img-top img-fluid height-250"
                          src="./assets/robust-assets/images/backgrounds/snow_rain.gif"
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-block text-xs-center">
                        <div class="row">
                          <div class="col-xs-2">
                            <span class="block">Now</span>
                            <i class="icon-cloudy block font-large-1 my-1"></i>
                            <span class="block">13&deg;</span>
                          </div>
                          <div class="col-xs-2">
                            <span class="block">2pm</span>
                            <i class="icon-lightning2 block font-large-1 my-1"></i>
                            <span class="block">12&deg;</span>
                          </div>
                          <div class="col-xs-2">
                            <span class="block">3pm</span>
                            <i class="icon-windy3 block font-large-1 my-1"></i>
                            <span class="block">10&deg;</span>
                          </div>
                          <div class="col-xs-2">
                            <span class="block">4pm</span>
                            <i class="icon-lightning3 block font-large-1 my-1"></i>
                            <span class="block">12&deg;</span>
                          </div>
                          <div class="col-xs-2">
                            <span class="block">5pm</span>
                            <i class="icon-cloud4 block font-large-1 my-1"></i>
                            <span class="block">9&deg;</span>
                          </div>
                          <div class="col-xs-2">
                            <span class="block">6pm</span>
                            <i class="icon-snowy3 block font-large-1 my-1"></i>
                            <span class="block">6&deg;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media bg-danger white">
                        <div class="media-left p-2 media-middle">
                          <h1>$76,456.00</h1>
                        </div>
                        <div class="media-body p-2">
                          <h4>Total Sales</h4>
                          <span>Monthly sales amount</span>
                        </div>
                        <div class="media-right bg-danger bg-darken-2 p-2 media-middle">
                          <i class="icon-heart-o font-large-2 white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card-inverse bg-gradient-y-danger text-xs-center">
                    <div class="card-body">
                      <img
                        src="./assets/robust-assets/images/carousel/29.png"
                        alt="Relax"
                        width="230"
                        class="img-fluid"
                      />
                      <div class="card-block px-1">
                        <h4 class="card-title mb-0">Brand Minute</h4>
                        <p class="card-text">
                          Donut toffee candy brownie soufflé macaroon.
                        </p>
                        <button class="btn bg-white bg-darken-3 danger">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ weather & product stats --> */}
              {/* <!-- social updates --> */}
              <div class="row">
                <div class="col-xl-4 col-md-12 col-sm-12">
                  <div class="card bg-twitter white">
                    <div class="card-body p-2">
                      <div class="card-block">
                        <div class="text-xs-center mb-1">
                          <i class="icon-twitter3 font-large-3"></i>
                        </div>
                        <div class="tweet-slider">
                          <ul class="text-xs-center">
                            <li>
                              Congratulations to Rob Jones in accounting for
                              winning our <span class="yellow">#NFL</span>{" "}
                              football pool!
                            </li>
                            <li>
                              Contests are a great thing to partner on.
                              Partnerships immediately{" "}
                              <span class="yellow">#DOUBLE</span> the reach.
                            </li>
                            <li>
                              Puns, humor, and quotes are great content on{" "}
                              <span class="yellow">#Twitter</span>. Find some
                              related to your business.
                            </li>
                            <li>
                              Are there{" "}
                              <span class="yellow">#common-sense</span> facts
                              related to your business? Combine them with a
                              great photo.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-12 col-sm-12">
                  <div class="card card-outline-info text-xs-center box-shadow-0">
                    <div class="card-body">
                      <img
                        src="./assets/robust-assets/images/elements/07.png"
                        alt="element 04"
                        class="float-xs-left mt-3 img-fluid"
                        width="140"
                      />
                      <div class="card-block pt-3">
                        <h4 class="card-title mt-3">New Arriaval</h4>
                        <p class="card-text">
                          Donut toffee candy brownie soufflé macaroon.
                        </p>
                        <button class="btn btn-info">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-12 col-sm-12">
                  <div class="card bg-facebook white">
                    <div class="card-body p-2">
                      <div class="card-block">
                        <div class="text-xs-center mb-1">
                          <i class="icon-facebook3 font-large-3"></i>
                        </div>
                        <div class="fb-post-slider">
                          <ul class="text-xs-center">
                            <li>
                              Congratulations to Rob Jones in accounting for
                              winning our #NFL football pool!
                            </li>
                            <li>
                              Contests are a great thing to partner on.
                              Partnerships immediately #DOUBLE the reach.
                            </li>
                            <li>
                              Puns, humor, and quotes are great content on
                              #Twitter. Find some related to your business.
                            </li>
                            <li>
                              Are there #common-sense facts related to your
                              business? Combine them with a great photo.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ social updates --> */}
              {/* <!-- most selling products --> */}
              <div class="row">
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <div class="card-body">
                      <img
                        class="card-img-top img-fluid"
                        src="./assets/robust-assets/images/carousel/25.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-block">
                        <h4 class="card-title">Smart Wearable</h4>
                        <p class="card-text">
                          Oat cake ice cream candy chocolate cake.
                        </p>
                      </div>
                    </div>
                    <div class="card-footer text-muted">
                      <span class="float-xs-left">$349</span>
                      <span class="float-xs-right">
                        Add To Cart <i class="icon-cart31"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="card text-xs-center">
                    <div class="card-body">
                      <img
                        class="card-img-top img-fluid"
                        src="./assets/robust-assets/images/carousel/24.png"
                        alt="Card image cap"
                      />
                      <div class="card-block">
                        <h4 class="card-title">Formal Shoes</h4>
                        <p class="card-text">Some quick example text.</p>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <span class="btn btn-outline-grey">$159</span>
                          <button type="button" class="btn btn-outline-grey">
                            Shop Now <i class="icon-cart3"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <div class="card-body">
                      <img
                        class="card-img-top img-fluid"
                        src="./assets/robust-assets/images/carousel/22.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-block">
                        <h4 class="card-title">Sunglass</h4>
                        <p class="card-text">Some quick example text.</p>
                      </div>
                    </div>
                    <div class="card-footer text-muted">
                      <span class="float-xs-left">
                        <del class="grey">$99</del>
                        <span class="ml-1">$49</span>
                      </span>
                      <span class="float-xs-right">
                        <i class="icon-heart6"></i> Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ most selling products--> */}
            </div>
          </div>
        </div>
        {/* <!-- ////////////////////////////////////////////////////////////////////////////--> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default studentIndex;
