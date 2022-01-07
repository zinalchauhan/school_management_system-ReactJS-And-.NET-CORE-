import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Variables } from "../../Variables";

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        students: [],
        studentIdFk: 0,
        standardIdFk: 0,
        studentMname: "",
        mediumIdFk: 0,
        classIdFk: 0,
    }
}

refreshList(id) {
    fetch(Variables.STUD_API_URL + "studentList/" + id)
        .then((response) => response.json())
        .then((res) => {
            if (res.result === "success") {
                console.log(res);
                this.setState({ students: res.data });
            }
        });
}

componentDidMount() {
    this.refreshList(sessionStorage.getItem("userId")?.toString());
}

  render() {
    const {
      students,
      studentIdFk,
  } = this.state;
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
                <li class="dropdown dropdown-user nav-item">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle nav-link dropdown-user-link"
                    >
                      <span class="avatar avatar-online">
                        <img
                         src={Variables.PHOTO_URL + students.studentImage}
                          alt="avatar"
                        />
                        <i></i>
                      </span>
                      <span class="user-name"> {students.studentMname} {students.studentFname}</span>
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
                <Link to="/student">
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
                      to="/student/viewAttendanceList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Attendance
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
                      to="/student/viewExamttList"
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
