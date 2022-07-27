import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewFeedbackPr extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fbs: [],
      students: [],
      teachers: [],
      subjects: [],
      modelTitle: "",
      feedbackIdPk: 0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "feedbackList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ fbs: res.data });
        }
      });
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.refreshList();
    }
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteFeebackList/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === "success") {
            this.refreshList();
          }
        });
    }
  }

  render() {
    const {
      fbs
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Feedback List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Feedback List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              {/* <!-- File export table --> */}
              <section id="file-export">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Feedback List</h4>
                        <br />
                        <a className="heading-elements-toggle">
                          <i className="icon-ellipsis font-medium-3"></i>
                        </a>
                        <div className="heading-elements">
                          <ul className="list-inline mb-0">
                            <li>
                              <a data-action="collapse">
                                <i className="icon-m	inus4"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="reload">
                                <i className="icon-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="expand">
                                <i className="icon-expand2"></i>
                              </a>
                            </li>
                            <li>
                              <a data-action="close">
                                <i className="icon-cross2"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body collapse in">
                        <div
                          className="card-block card-dashboard"
                          style={{ overflow: "scroll" }}
                        >
                          <table className="table table-striped table-bordered file-export">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>User Type</th>
                                <th>Subject</th>
                                <th>Details</th>
                                <th>Added On</th>
                              </tr>
                            </thead>
                            <tbody>
                            {fbs.map((fb, index) => (
                              <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {fb.userType}</td>
                                <td> {fb.feedbackSubject} </td>
                                <td> {fb.feedbackDetail} </td>
                                <td> {fb.addedOn} </td>
                              </tr>
                            ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th>User Type</th>
                                <th>Subject</th>
                                <th>Details</th>
                                <th>Added On</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- File export table --> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ViewFeedbackPr;
