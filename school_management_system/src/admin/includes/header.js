import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {

  constructor(props) {
    super(props);
  }

  logout() {
    sessionStorage.clear();
    window.location.href = `/`;
  }

  componentDidMount(){}

  render() {
    return (
      <div>
        {/* <!-- navbar-fixed-top--> */}
        <nav className="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-dark navbar-shadow navbar-border">
          <div className="navbar-wrapper">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li className="nav-item mobile-menu hidden-md-up float-xs-left">
                  <a className="nav-link nav-menu-main menu-toggle hidden-xs">
                    <i className="icon-menu5 font-large-1"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin" className="navbar-brand nav-link">
                    <img
                      alt="branding logo"
                      src="../assets/logo.png"
                      height="80px"
                      width="80px"
                      data-expand="./assets/robust-assets/images/logo/robust-logo-light.png"
                      data-collapse="./assets/robust-assets/images/logo/robust-logo-small.png"
                      className="brand-logo"
                    />
                  </a>
                </li>
                <li className="nav-item hidden-md-up float-xs-right">
                  <a
                    data-toggle="collapse"
                    data-target="#navbar-mobile"
                    className="nav-link open-navbar-container"
                  >
                    <i className="icon-ellipsis pe-2x icon-icon-rotate-right-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-container content container-fluid">
              <div id="navbar-mobile" className="collapse navbar-toggleable-sm">
                <ul className="nav navbar-nav">
                  <li className="nav-item hidden-sm-down">
                    <a className="nav-link nav-menu-main menu-toggle hidden-xs">
                      <i className="icon-menu5"></i>
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav float-xs-right">
                  <li className="dropdown dropdown-notification nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="nav-link nav-link-label"
                    >
                      <i className="ficon icon-bell4"></i>
                      <span className="tag tag-pill tag-default tag-danger tag-default tag-up">
                        5
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li className="dropdown-menu-header">
                        <h6 className="dropdown-header m-0">
                          <span className="grey darken-2">Notifications</span>
                          <span className="notification-tag tag tag-default tag-danger float-xs-right m-0">
                            5 New
                          </span>
                        </h6>
                      </li>
                      <li className="list-group scrollable-container">
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left valign-middle">
                              <i className="icon-cart3 icon-bg-circle bg-cyan"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">You have new order!</h6>
                              <p className="notification-text font-small-3 text-muted">
                                Lorem ipsum dolor sit amet, consectetuer elit.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  30 minutes ago
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left valign-middle">
                              <i className="icon-monitor3 icon-bg-circle bg-red bg-darken-1"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading red darken-1">
                                99% Server load
                              </h6>
                              <p className="notification-text font-small-3 text-muted">
                                Aliquam tincidunt mauris eu risus.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Five hour ago
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left valign-middle">
                              <i className="icon-server2 icon-bg-circle bg-yellow bg-darken-3"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading yellow darken-3">
                                Warning notifixation
                              </h6>
                              <p className="notification-text font-small-3 text-muted">
                                Vestibulum auctor dapibus neque.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Today
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left valign-middle">
                              <i className="icon-check2 icon-bg-circle bg-green bg-accent-3"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Complete the task</h6>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Last week
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left valign-middle">
                              <i className="icon-bar-graph-2 icon-bg-circle bg-teal"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">
                                Generate monthly report
                              </h6>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Last month
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="dropdown-menu-footer">
                        <a
                          
                          className="dropdown-item text-muted text-xs-center"
                        >
                          Read all notifications
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-notification nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="nav-link nav-link-label"
                    >
                      <i className="ficon icon-mail6"></i>
                      <span className="tag tag-pill tag-default tag-info tag-default tag-up">
                        8
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li className="dropdown-menu-header">
                        <h6 className="dropdown-header m-0">
                          <span className="grey darken-2">Messages</span>
                          <span className="notification-tag tag tag-default tag-info float-xs-right m-0">
                            4 New
                          </span>
                        </h6>
                      </li>
                      <li className="list-group scrollable-container">
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm avatar-online rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-1.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Margaret Govan</h6>
                              <p className="notification-text font-small-3 text-muted">
                                I like your portfolio, let's start the project.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Today
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm avatar-busy rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-2.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Bret Lezama</h6>
                              <p className="notification-text font-small-3 text-muted">
                                I have seen your work, there is
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Tuesday
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm avatar-online rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-3.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Carie Berra</h6>
                              <p className="notification-text font-small-3 text-muted">
                                Can we have call in this week ?
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  Friday
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  className="list-group-item">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm avatar-away rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-6.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Eric Alsobrook</h6>
                              <p className="notification-text font-small-3 text-muted">
                                We have project party this saturday night.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  className="media-meta text-muted"
                                >
                                  last month
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="dropdown-menu-footer">
                        <a
                          
                          className="dropdown-item text-muted text-xs-center"
                        >
                          Read all messages
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-user nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav-link dropdown-user-link"
                    >
                      <span className="avatar avatar-online">
                        <img
                          src="./assets/robust-assets/images/portrait/small/avatar-s-1.png"
                          alt="avatar"
                        />
                        <i></i>
                      </span>
                      <span className="user-name"> Admin </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="icon-power3"></i> Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- ////////////////////////////////////////////////////////////////////////////--> */}

        {/* <!-- main menu--> */}
        <div style={{"position":"fixed"}} className="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
          {/* <!-- main menu header--> */}
          {/* <!-- / main menu header--> */}
          {/* <!-- main menu content--> */}
          <div className="main-menu-content">
            <ul
              id="main-menu-navigation"
              data-menu="menu-navigation"
              className="navigation navigation-main"
            >
              <li className=" nav-item">
                <Link to="/">
                  <i className="icon-home3"></i>
                  <span data-i18n="nav.dash.main" className="menu-title">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">STUDENTS</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>

              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Student
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addStudentManually"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Student 
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/admin/viewStudent"
                      data-i18n="nav.page_layouts.2_columns"
                      className="menu-item"
                    >
                      View Student
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Remark
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewRemark"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Remark
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Attendence
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewAttendence"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Attendence
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">
                  TEACHER & PRINCIPAL
                </span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Teacher
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addTeacher"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Teacher
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewTeacher"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Teacher
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Class Teacher
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addClassTeacher"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Class Teacher
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewClassTeacher"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Class Teacher
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Principal
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addPrincipal"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Principal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewPrincipal"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Principal
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">SUBJECT</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Subject
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewSubject"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Subject
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Standard Subject
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewStandardCard"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Standard Subject
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/addSubjectTeacher"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Subject Teacher
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">TIMETABLE</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Time-Table Setting
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addTimeTableSetting"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Time-Table Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewTimeTableSetting"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Time-Table Setting
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Time-Table
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Time-Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Time-Table
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">EXAM & RESULT</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Exam
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addExam"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Exam
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewExam"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Exam
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Exam Time-Table
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addExamTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Exam Time-Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewExamTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Exam Time-Table
                    </Link>
                  </li>
                </ul>
              </li>
             
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Question Paper
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addQuePaper"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Question Paper
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewQuePaper"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Question Paper
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">
                  EVENTS & ACTIVITIES
                </span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Event
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addEvent"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Event
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewEvent"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Event
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">CLASS & STANDARD</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Standard
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewStandard"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Standard
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Division
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewDivision"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Division
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Class
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/addClass"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      Add Class
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/viewClass"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Class
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header">
                <span data-i18n="nav.category.layouts">ADMIN</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  className="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Feedback
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewFeedback"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Feedback
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" className="menu-title">
                    Medium
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link
                      to="/admin/viewMedium"
                      data-i18n="nav.page_layouts.1_column"
                      className="menu-item"
                    >
                      View Medium
                    </Link>
                  </li>
                </ul>
              </li>
             
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Header;
