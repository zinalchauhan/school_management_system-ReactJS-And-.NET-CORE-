import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewExamTt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examtts: [],
      exams: [],
      mediums :[],
      subjects :[],
      standards: [],
      mediumIdFk:0,
      modelTitle: "",
      examTtIdPk: 0,
      examIdFk: 0,
      standardIdFk:0,
      subjectIdFk:0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "examttList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result == "success") {
          this.setState({ examtts: res.data });
        }
      });
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteExamttList/" + id, {
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

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const {
        examtts,
        exams,
        mediums,
        subjects,
        standards,
        mediumIdFk,
        modelTitle,
        examTtIdPk,
        examIdFk,
        standardIdFk,
        subjectIdFk,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Exam Time Table List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Exam Time Table List</li>
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
                        <h4 className="card-title">Exam Time Table List</h4>
                        <br />
                        <Link
                          to="/addExamTimeTable"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Exam Time Table
                        </Link>
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
                                <th>Exam Name </th>
                                <th>Subject Name </th>
                                <th>Exam Date</th>
                                <th> Edit </th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {examtts.map((exmtt, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td> {exmtt.examName} </td>
                                  <td> {exmtt.subjectName}</td>
                                  <td> {exmtt.examDate} </td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-outline-primary edit-item-btn"
                                    >
                                      <Link
                                        to={{
                                          pathname: `/edit-examTimeTable/${exmtt.examTtIdPk}`,
                                        }}
                                      >
                                        Edit
                                      </Link>{" "}
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() => this.delete(exmtt.examTtIdPk)}
                                      class="btn btn-outline-danger remove-item-btn"
                                    >
                                      {" "}
                                      Delete{" "}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                              <th>#</th>
                                <th>Exam Name </th>
                                <th>Subject Name </th>
                                <th>Exam Date</th>
                                <th> Edit </th>
                                <th>Delete</th>
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

export default ViewExamTt;
