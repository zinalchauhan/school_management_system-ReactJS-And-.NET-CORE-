import React, { Component } from "react";
import Footer from "./includes/footer";
import SideMenu from "./includes/sideMenu";
import TopMenu from "./includes/topMenu";

export class Index extends Component {
  render() {
    return (
      <>
        <TopMenu></TopMenu>
        <div className="dashboard-page-one">
          <SideMenu> </SideMenu>
          <div className="dashboard-content-one">
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
              <h3>Admin Dashboard</h3>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Admin</li>
              </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Dashboard summery Start Here --> */}
            <div className="row gutters-20">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="dashboard-summery-one mg-b-20">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="item-icon bg-light-green ">
                        <i className="flaticon-classmates text-green"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item-content">
                        <div className="item-title">Students</div>
                        <div className="item-number">
                          <span className="counter" data-num="150000">
                            1,50,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="dashboard-summery-one mg-b-20">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="item-icon bg-light-blue">
                        <i className="flaticon-multiple-users-silhouette text-blue"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item-content">
                        <div className="item-title">Teachers</div>
                        <div className="item-number">
                          <span className="counter" data-num="2250">
                            2,250
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="dashboard-summery-one mg-b-20">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="item-icon bg-light-yellow">
                        <i className="flaticon-couple text-orange"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item-content">
                        <div className="item-title">Parents</div>
                        <div className="item-number">
                          <span className="counter" data-num="5690">
                            5,690
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="dashboard-summery-one mg-b-20">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="item-icon bg-light-red">
                        <i className="flaticon-money text-red"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item-content">
                        <div className="item-title">Earnings</div>
                        <div className="item-number">
                          <span>$</span>
                          <span className="counter" data-num="193000">
                            1,93,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Dashboard summery End Here --> */}
            {/* <!-- Dashboard Content Start Here --> */}
            <div className="row gutters-20">
              <div className="col-12 col-xl-8 col-6-xxxl">
                <div className="card dashboard-card-one pd-b-20">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Earnings</h3>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ...
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-times text-orange-red"></i>
                            Close
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs text-dark-pastel-green"></i>
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-redo-alt text-orange-peel"></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="earning-report">
                      <div className="item-content">
                        <div className="single-item pseudo-bg-blue">
                          <h4>Total Collections</h4>
                          <span>75,000</span>
                        </div>
                        <div className="single-item pseudo-bg-red">
                          <h4>Fees Collection</h4>
                          <span>15,000</span>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="date-dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Jan 20, 2019
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            Jan 20, 2019
                          </a>
                          <a className="dropdown-item" href="#">
                            Jan 20, 2021
                          </a>
                          <a className="dropdown-item" href="#">
                            Jan 20, 2020
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="earning-chart-wrap">
                      <canvas
                        id="earning-line-chart"
                        width="660"
                        height="320"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-4 col-3-xxxl">
                <div className="card dashboard-card-two pd-b-20">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Expenses</h3>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ...
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-times text-orange-red"></i>
                            Close
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs text-dark-pastel-green"></i>
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-redo-alt text-orange-peel"></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="expense-report">
                      <div className="monthly-expense pseudo-bg-Aquamarine">
                        <div className="expense-date">Jan 2019</div>
                        <div className="expense-amount">
                          <span>$</span> 15,000
                        </div>
                      </div>
                      <div className="monthly-expense pseudo-bg-blue">
                        <div className="expense-date">Feb 2019</div>
                        <div className="expense-amount">
                          <span>$</span> 10,000
                        </div>
                      </div>
                      <div className="monthly-expense pseudo-bg-yellow">
                        <div className="expense-date">Mar 2019</div>
                        <div className="expense-amount">
                          <span>$</span> 8,000
                        </div>
                      </div>
                    </div>
                    <div className="expense-chart-wrap">
                      <canvas
                        id="expense-bar-chart"
                        width="100"
                        height="300"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 col-3-xxxl">
                <div className="card dashboard-card-three pd-b-20">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Students</h3>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ...
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-times text-orange-red"></i>
                            Close
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs text-dark-pastel-green"></i>
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-redo-alt text-orange-peel"></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doughnut-chart-wrap">
                      <canvas
                        id="student-doughnut-chart"
                        width="100"
                        height="300"
                      ></canvas>
                    </div>
                    <div className="student-report">
                      <div className="student-count pseudo-bg-blue">
                        <h4 className="item-title">Female Students</h4>
                        <div className="item-number">45,000</div>
                      </div>
                      <div className="student-count pseudo-bg-yellow">
                        <h4 className="item-title">Male Students</h4>
                        <div className="item-number">1,05,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 col-4-xxxl">
                <div className="card dashboard-card-four pd-b-20">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Event Calender</h3>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ...
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-times text-orange-red"></i>
                            Close
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs text-dark-pastel-green"></i>
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-redo-alt text-orange-peel"></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="calender-wrap">
                      <div id="fc-calender" className="fc-calender"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-4-xxxl">
                <div className="card dashboard-card-five pd-b-20">
                  <div className="card-body pd-b-14">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Website Traffic</h3>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ...
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-times text-orange-red"></i>
                            Close
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs text-dark-pastel-green"></i>
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-redo-alt text-orange-peel"></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6 className="traffic-title">Unique Visitors</h6>
                    <div className="traffic-number">2,590</div>
                    <div className="traffic-bar">
                      <div
                        className="direct"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Direct"
                      ></div>
                      <div
                        className="search"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Search"
                      ></div>
                      <div
                        className="referrals"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Referrals"
                      ></div>
                      <div
                        className="social"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Social"
                      ></div>
                    </div>
                    <div className="traffic-table table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="t-title pseudo-bg-Aquamarine">
                              Direct
                            </td>
                            <td>12,890</td>
                            <td>50%</td>
                          </tr>
                          <tr>
                            <td className="t-title pseudo-bg-blue">Search</td>
                            <td>7,245</td>
                            <td>27%</td>
                          </tr>
                          <tr>
                            <td className="t-title pseudo-bg-yellow">
                              Referrals
                            </td>
                            <td>4,256</td>
                            <td>8%</td>
                          </tr>
                          <tr>
                            <td className="t-title pseudo-bg-red">Social</td>
                            <td>500</td>
                            <td>7%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-4-xxxl">
                <div className="card dashboard-card-six pd-b-20">
                  <div className="card-body">
                    <div className="heading-layout1 mg-b-17">
                      <div className="item-title">
                        <h3>Notice Board</h3>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ...
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-times text-orange-red"></i>
                            Close
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs text-dark-pastel-green"></i>
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-redo-alt text-orange-peel"></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="notice-box-wrap">
                      <div className="notice-list">
                        <div className="post-date bg-skyblue">
                          16 June, 2019
                        </div>
                        <h6 className="notice-title">
                          <a href="#">
                            Great School manag mene esom text of the printing.
                          </a>
                        </h6>
                        <div className="entry-meta">
                          {" "}
                          Jennyfar Lopez / <span>5 min ago</span>
                        </div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-yellow">16 June, 2019</div>
                        <h6 className="notice-title">
                          <a href="#">Great School manag printing.</a>
                        </h6>
                        <div className="entry-meta">
                          {" "}
                          Jennyfar Lopez / <span>5 min ago</span>
                        </div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-pink">16 June, 2019</div>
                        <h6 className="notice-title">
                          <a href="#">Great School manag meneesom.</a>
                        </h6>
                        <div className="entry-meta">
                          {" "}
                          Jennyfar Lopez / <span>5 min ago</span>
                        </div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-skyblue">
                          16 June, 2019
                        </div>
                        <h6 className="notice-title">
                          <a href="#">
                            Great School manag mene esom text of the printing.
                          </a>
                        </h6>
                        <div className="entry-meta">
                          {" "}
                          Jennyfar Lopez / <span>5 min ago</span>
                        </div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-yellow">16 June, 2019</div>
                        <h6 className="notice-title">
                          <a href="#">Great School manag printing.</a>
                        </h6>
                        <div className="entry-meta">
                          {" "}
                          Jennyfar Lopez / <span>5 min ago</span>
                        </div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-pink">16 June, 2019</div>
                        <h6 className="notice-title">
                          <a href="#">Great School manag meneesom.</a>
                        </h6>
                        <div className="entry-meta">
                          {" "}
                          Jennyfar Lopez / <span>5 min ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Dashboard Content End Here --> */}
            {/* <!-- Social Media Start Here --> */}
            <div className="row gutters-20">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="card dashboard-card-seven">
                  <div className="social-media bg-fb hover-fb">
                    <div className="media media-none--lg">
                      <div className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                      </div>
                      <div className="media-body space-sm">
                        <h6 className="item-title">Like us on facebook</h6>
                      </div>
                    </div>
                    <div className="social-like">30,000</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="card dashboard-card-seven">
                  <div className="social-media bg-twitter hover-twitter">
                    <div className="media media-none--lg">
                      <div className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="media-body space-sm">
                        <h6 className="item-title">Follow us on twitter</h6>
                      </div>
                    </div>
                    <div className="social-like">1,11,000</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="card dashboard-card-seven">
                  <div className="social-media bg-gplus hover-gplus">
                    <div className="media media-none--lg">
                      <div className="social-icon">
                        <i className="fab fa-google-plus-g"></i>
                      </div>
                      <div className="media-body space-sm">
                        <h6 className="item-title">Follow us on googleplus</h6>
                      </div>
                    </div>
                    <div className="social-like">19,000</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="card dashboard-card-seven">
                  <div className="social-media bg-linkedin hover-linked">
                    <div className="media media-none--lg">
                      <div className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </div>
                      <div className="media-body space-sm">
                        <h6 className="item-title">Follow us on linked</h6>
                      </div>
                    </div>
                    <div className="social-like">45,000</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Social Media End Here --> */}
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
