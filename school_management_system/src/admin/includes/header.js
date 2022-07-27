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

  componentDidMount() { 

  }

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


                  <li className="dropdown dropdown-user nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav-link dropdown-user-link"
                    >
                      <span className="avatar avatar-online">
                        <img
                          src="./assets/robust-assets/images/portrait/small/logo1.png"
                          alt="avatar"
                        />
                        <i></i>
                      </span>
                      <span className="user-name"> Admin </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="dropdown-divider"></div>
                      <a onClick={() => this.logout()}  class="dropdown-item">
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
        <div style={{ "position": "fixed" }} className="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
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
                <Link to="/admin">
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
