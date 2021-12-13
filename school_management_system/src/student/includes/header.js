import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        {/* <!-- navbar-fixed-top--> */}
        <nav class="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-dark navbar-shadow navbar-border">
          <div class="navbar-wrapper">
            <div class="navbar-header">
              <ul class="nav navbar-nav">
                <li class="nav-item mobile-menu hidden-md-up float-xs-left">
                  <a class="nav-link nav-menu-main menu-toggle hidden-xs">
                    <i class="icon-menu5 font-large-1"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/student" class="navbar-brand nav-link">
                    <img
                      alt="branding logo"
                      src="../assets/logo.png"
                      height="80px"
                      width="80px"
                      class="brand-logo"
                    />
                  </a>
                </li>
                <li class="nav-item hidden-md-up float-xs-right">
                  <a
                    data-toggle="collapse"
                    data-target="#navbar-mobile"
                    class="nav-link open-navbar-container"
                  >
                    <i class="icon-ellipsis pe-2x icon-icon-rotate-right-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar-container content container-fluid">
              <div id="navbar-mobile" class="collapse navbar-toggleable-sm">
                <ul class="nav navbar-nav">
                  <li class="nav-item hidden-sm-down">
                    <a class="nav-link nav-menu-main menu-toggle hidden-xs">
                      <i class="icon-menu5"></i>
                    </a>
                  </li>
                </ul>
                <ul class="nav navbar-nav float-xs-right">
                  <li class="dropdown dropdown-notification nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      class="nav-link nav-link-label"
                    >
                      <i class="ficon icon-bell4"></i>
                      <span class="tag tag-pill tag-default tag-danger tag-default tag-up">
                        5
                      </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li class="dropdown-menu-header">
                        <h6 class="dropdown-header m-0">
                          <span class="grey darken-2">Notifications</span>
                          <span class="notification-tag tag tag-default tag-danger float-xs-right m-0">
                            5 New
                          </span>
                        </h6>
                      </li>
                      <li class="list-group scrollable-container">
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left valign-middle">
                              <i class="icon-cart3 icon-bg-circle bg-cyan"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">You have new order!</h6>
                              <p class="notification-text font-small-3 text-muted">
                                Lorem ipsum dolor sit amet, consectetuer elit.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  30 minutes ago
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left valign-middle">
                              <i class="icon-monitor3 icon-bg-circle bg-red bg-darken-1"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading red darken-1">
                                99% Server load
                              </h6>
                              <p class="notification-text font-small-3 text-muted">
                                Aliquam tincidunt mauris eu risus.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Five hour ago
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left valign-middle">
                              <i class="icon-server2 icon-bg-circle bg-yellow bg-darken-3"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading yellow darken-3">
                                Warning notifixation
                              </h6>
                              <p class="notification-text font-small-3 text-muted">
                                Vestibulum auctor dapibus neque.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Today
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left valign-middle">
                              <i class="icon-check2 icon-bg-circle bg-green bg-accent-3"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">Complete the task</h6>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Last week
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left valign-middle">
                              <i class="icon-bar-graph-2 icon-bg-circle bg-teal"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">
                                Generate monthly report
                              </h6>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Last month
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-menu-footer">
                        <a
                          
                          class="dropdown-item text-muted text-xs-center"
                        >
                          Read all notifications
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown dropdown-notification nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      class="nav-link nav-link-label"
                    >
                      <i class="ficon icon-mail6"></i>
                      <span class="tag tag-pill tag-default tag-info tag-default tag-up">
                        8
                      </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li class="dropdown-menu-header">
                        <h6 class="dropdown-header m-0">
                          <span class="grey darken-2">Messages</span>
                          <span class="notification-tag tag tag-default tag-info float-xs-right m-0">
                            4 New
                          </span>
                        </h6>
                      </li>
                      <li class="list-group scrollable-container">
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left">
                              <span class="avatar avatar-sm avatar-online rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-1.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">Margaret Govan</h6>
                              <p class="notification-text font-small-3 text-muted">
                                I like your portfolio, let's start the project.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Today
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left">
                              <span class="avatar avatar-sm avatar-busy rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-2.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">Bret Lezama</h6>
                              <p class="notification-text font-small-3 text-muted">
                                I have seen your work, there is
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Tuesday
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left">
                              <span class="avatar avatar-sm avatar-online rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-3.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">Carie Berra</h6>
                              <p class="notification-text font-small-3 text-muted">
                                Can we have call in this week ?
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  Friday
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                        <a  class="list-group-item">
                          <div class="media">
                            <div class="media-left">
                              <span class="avatar avatar-sm avatar-away rounded-circle">
                                <img
                                  src="./assets/robust-assets/images/portrait/small/avatar-s-6.png"
                                  alt="avatar"
                                />
                                <i></i>
                              </span>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">Eric Alsobrook</h6>
                              <p class="notification-text font-small-3 text-muted">
                                We have project party this saturday night.
                              </p>
                              <small>
                                <time
                                  dateTime="2015-06-11T18:29:20+08:00"
                                  class="media-meta text-muted"
                                >
                                  last month
                                </time>
                              </small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-menu-footer">
                        <a
                          
                          class="dropdown-item text-muted text-xs-center"
                        >
                          Read all messages
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown dropdown-user nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle nav-link dropdown-user-link"
                    >
                      <span class="avatar avatar-online">
                        <img
                          src="./assets/robust-assets/images/portrait/small/avatar-s-1.png"
                          alt="avatar"
                        />
                        <i></i>
                      </span>
                      <span class="user-name">John Doe</span>
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
        <div class="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
          {/* <!-- main menu header--> */}
          {/* <!-- / main menu header--> */}
          {/* <!-- main menu content--> */}
          <div class="main-menu-content">
            <ul
              id="main-menu-navigation"
              data-menu="menu-navigation"
              class="navigation navigation-main"
            >
              <li class=" nav-item">
                <Link to="/">
                  <i class="icon-home3"></i>
                  <span data-i18n="nav.dash.main" class="menu-title">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">STUDENT</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>

              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Student
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewStudentProfile"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Profile
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Remark
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewRemarkList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Remark
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Attendence
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="admin/viewAttendenceList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Attendence
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Notice
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewNoticeList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Notice
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">
                  TEACHER
                </span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Teacher
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewTeacherList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Teacher
                    </Link>
                  </li>
                </ul>
              </li>
             
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">TIMETABLE</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Time-Table
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewTimeTableList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Time-Table
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">EXAM & RESULT</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Exam Time-Table
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewExamTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Exam Time-Table
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Result
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/viewStandardCard"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Result
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Question Paper
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewQuestionPaperList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Question Paper
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">
                  EVENTS & ACTIVITIES
                </span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Event
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewEventList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Event
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">Feedback</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Feedback
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/addFeedback"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Give Feedback
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">Leave Request</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Leave Request
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/addLeaveRequest"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Add Leave Request
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student/viewLeaveRequest"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Leave Request
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
