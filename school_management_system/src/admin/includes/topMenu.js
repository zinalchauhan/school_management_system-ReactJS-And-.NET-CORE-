import React, { Component } from "react";
export class TopMenu extends Component {
  render() {
    return (
        <div className="navbar navbar-expand-md header-menu-one bg-light">
        <div className="nav-bar-header-one">
          <div className="header-logo">
            <a href="index.html">
              <img src="./assets/img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="toggle-button sidebar-toggle">
            <button type="button" className="item-link">
              <span className="btn-icon-wrap">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        <div className="d-md-none mobile-nav-bar">
          <button
            className="navbar-toggler pulse-animation"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-navbar"
            aria-expanded="false"
          >
            <i className="far fa-arrow-alt-circle-down"></i>
          </button>
          <button type="button" className="navbar-toggler sidebar-toggle-mobile">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className="header-main-menu collapse navbar-collapse"
          id="mobile-navbar"
        >
          <ul className="navbar-nav">
            <li className="navbar-item header-search-bar">
              <div className="input-group stylish-input-group">
                <span className="input-group-addon">
                  <button type="submit">
                    <span className="flaticon-search" aria-hidden="true"></span>
                  </button>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find Something . . ."
                />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="navbar-item dropdown header-admin">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="admin-title">
                  <h5 className="item-title">Stevne Zone</h5>
                  <span>Admin</span>
                </div>
                <div className="admin-img">
                  <img src="./assets/img/figure/admin.jpg" alt="Admin" />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="item-header">
                  <h6 className="item-title">Steven Zone</h6>
                </div>
                <div className="item-content">
                  <ul className="settings-list">
                    <li>
                      <a href="#">
                        <i className="flaticon-user"></i>My Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-list"></i>Task
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>
                        Message
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-gear-loading"></i>Account Settings
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="flaticon-turn-off"></i>Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown header-message">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="far fa-envelope"></i>
                <div className="item-title d-md-none text-16 mg-l-10">Message</div>
                <span>5</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="item-header">
                  <h6 className="item-title">05 Message</h6>
                </div>
                <div className="item-content">
                  <div className="media">
                    <div className="item-img bg-skyblue author-online">
                      <img src="./assets/img/figure/student11.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Maria Zaman</span>
                          <span className="item-time">18:30</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-img bg-yellow author-online">
                      <img src="./assets/img/figure/student12.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Benny Roy</span>
                          <span className="item-time">10:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-img bg-pink">
                      <img src="./assets/img/figure/student13.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Steven</span>
                          <span className="item-time">02:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-img bg-violet-blue">
                      <img src="./assets/img/figure/student11.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Joshep Joe</span>
                          <span className="item-time">12:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown header-notification">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="far fa-bell"></i>
                <div className="item-title d-md-none text-16 mg-l-10">
                  Notification
                </div>
                <span>8</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="item-header">
                  <h6 className="item-title">03 Notifiacations</h6>
                </div>
                <div className="item-content">
                  <div className="media">
                    <div className="item-icon bg-skyblue">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="media-body space-sm">
                      <div className="post-title">Complete Today Task</div>
                      <span>1 Mins ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-icon bg-orange">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="media-body space-sm">
                      <div className="post-title">Director Metting</div>
                      <span>20 Mins ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-icon bg-violet-blue">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <div className="media-body space-sm">
                      <div className="post-title">Update Password</div>
                      <span>45 Mins ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown header-language">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-globe-americas"></i>EN
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  English
                </a>
                <a className="dropdown-item" href="#">
                  Spanish
                </a>
                <a className="dropdown-item" href="#">
                  Franchis
                </a>
                <a className="dropdown-item" href="#">
                  Chiness
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopMenu;