import React, { Component } from "react";

export class SideMenu extends Component {
  render() {
    return (
      <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
        <div className="mobile-sidebar-header d-md-none">
          <div className="header-logo">
            <a href="index.html">
              <img src="./assets/img/logo1.png" alt="logo" />
            </a>
          </div>
        </div>
        <div className="sidebar-menu-content">
          <ul className="nav nav-sidebar-menu sidebar-toggle-view">
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link" >
                <i className="flaticon-dashboard"></i>
                <span>Dashboard</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="index.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Admin
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index3.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Students
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index4.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Parents
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index5.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Teachers
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-classmates"></i>
                <span>Students</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="all-student.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Students
                  </a>
                </li>
                <li className="nav-item">
                  <a href="student-details.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Student Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="admit-form.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Admission Form
                  </a>
                </li>
                <li className="nav-item">
                  <a href="student-promotion.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Student Promotion
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-multiple-users-silhouette"></i>
                <span>Teachers</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="all-teacher.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Teachers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="teacher-details.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Teacher Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="add-teacher.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add Teacher
                  </a>
                </li>
                <li className="nav-item">
                  <a href="teacher-payment.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Payment
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-couple"></i>
                <span>Parents</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="all-parents.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Parents
                  </a>
                </li>
                <li className="nav-item">
                  <a href="parents-details.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Parents Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="add-parents.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add Parent
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-books"></i>
                <span>Library</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="all-book.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Book
                  </a>
                </li>
                <li className="nav-item">
                  <a href="add-book.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add New Book
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-technological"></i>
                <span>Acconunt</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="all-fees.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Fees Collection
                  </a>
                </li>
                <li className="nav-item">
                  <a href="all-expense.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Expenses
                  </a>
                </li>
                <li className="nav-item">
                  <a href="add-expense.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add Expenses
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                <span>Class</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="all-class.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Classes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="add-class.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add New Class
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="all-subject.html" className="nav-link">
                <i className="flaticon-open-book"></i>
                <span>Subject</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="class-routine.html" className="nav-link">
                <i className="flaticon-calendar"></i>
                <span>Class Routine</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="student-attendence.html" className="nav-link">
                <i className="flaticon-checklist"></i>
                <span>Attendence</span>
              </a>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-shopping-list"></i>
                <span>Exam</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="exam-schedule.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Exam Schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a href="exam-grade.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Exam Grades
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="transport.html" className="nav-link">
                <i className="flaticon-bus-side-view"></i>
                <span>Transport</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="hostel.html" className="nav-link">
                <i className="flaticon-bed"></i>
                <span>Hostel</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="notice-board.html" className="nav-link">
                <i className="flaticon-script"></i>
                <span>Notice</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="messaging.html" className="nav-link">
                <i className="flaticon-chat"></i>
                <span>Messeage</span>
              </a>
            </li>
            <li className="nav-item sidebar-nav-item">
              <a href="#" className="nav-link">
                <i className="flaticon-menu-1"></i>
                <span>UI Elements</span>
              </a>
              <ul className="nav sub-group-menu">
                <li className="nav-item">
                  <a href="notification-alart.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Alart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="button.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Button
                  </a>
                </li>
                <li className="nav-item">
                  <a href="grid.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Grid
                  </a>
                </li>
                <li className="nav-item">
                  <a href="modal.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Modal
                  </a>
                </li>
                <li className="nav-item">
                  <a href="progress-bar.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Progress Bar
                  </a>
                </li>
                <li className="nav-item">
                  <a href="ui-tab.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Tab
                  </a>
                </li>
                <li className="nav-item">
                  <a href="ui-widget.html" className="nav-link">
                    <i className="fas fa-angle-right"></i>Widget
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="map.html" className="nav-link">
                <i className="flaticon-planet-earth"></i>
                <span>Map</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="account-settings.html" className="nav-link">
                <i className="flaticon-settings"></i>
                <span>Account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
