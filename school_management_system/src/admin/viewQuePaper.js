import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewQuePaper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quepapers: [],
      mediums: [],
      standards: [],
      subjects: [],
      modelTitle: "",
      questionPaperIdPk: 0,
      mediumIdFk: 0,
      subjectIdFk: 0,
      standardIdFk: 0,
      academicYear: 0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "quePaperList")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.result == "success") {
          this.setState({ quepapers: res.data });
        }
      });
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteQuePaperList/" + id, {
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
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.refreshList();
    }
  }

  render() {

    const {
      quepapers,
      mediums,
      standards,
      subjects,
      modelTitle,
      questionPaperIdPk,
      mediumIdFk,
      subjectIdFk,
      standardIdFk,
      academicYear,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Question Paper List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Question Paper List</li>
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
                        <h4 className="card-title">Question Paper List</h4>
                        <br />
                        <Link
                          to="/admin/addQuePaper"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Question Paper
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
                          <table className="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Medium Name</th>
                                <th>Paper Year</th>
                                <th>Subject Name</th>
                                <th>Paper Image</th>
                                <th> Edit </th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {quepapers.map((que, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td> {que.mediumName} </td>
                                  <td> {que.academicYear} </td>
                                  <td> {que.subjectName} </td>
                                  <td>
                                    <Link to={{
                                      pathname: `/admin/edit-quePaperImage/${que.questionPaperIdPk}`,
                                    }}>
                                      Galary
                                    </Link>{" "}  </td>
                                  <td>
                                    <button class="btn btn-outline-primary edit-item-btn">
                                      <Link
                                        to={{
                                          pathname: `/admin/edit-quepaper/${que.questionPaperIdPk}`,
                                        }}
                                      >
                                        Edit
                                      </Link>{" "}
                                    </button> </td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.delete(que.questionPaperIdPk)
                                      }
                                      class="btn btn-outline-danger remove-item-btn"
                                    >
                                      {" "}
                                      Delete{" "}
                                    </button> </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th>Medium Name</th>
                                <th>Paper Year</th>
                                <th>Subject Name</th>
                                <th>Paper Image</th>
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

export default ViewQuePaper;
