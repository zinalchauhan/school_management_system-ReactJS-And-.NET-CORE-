import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewSubject extends Component {
  constructor(props) {
    super(props);

    this.state = {
        tt: [],
        tts:[],
        mediums: [],
        classes:[],
        subtechs:[],
        modelTitle: "",
        timeTableIdPk:0,
        mediumIdFk : 0,
        classIdFk:0,
        subjectTeacherIdFk: 0,
        periodNo :0,
        settingIdFk: 0,
        isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "timetableList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result == "success") {
          this.setState({ tt: res.data });
        }
      });
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteTimetableList/" + id, {
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
        tt,
        tts,
        mediums,
        classes,
        subtechs,
        modelTitle,
        timeTableIdPk,      
        mediumIdFk, 
        classIdFk,      
        subjectTeacherIdFk,
        periodNo,       
        settingIdFk
       } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Time Table List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Time Table List</li>
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
                        <h4 className="card-title">Time Table List</h4>
                        <br />
                        <Link
                          to="/admin/addTimeTable"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Time Table
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
                                <th>Medium Name</th>
                                <th> Subject </th> 
                                <th> Period No. </th>
                                <th> Day </th>
                                <th> Edit </th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tt.map((ttbl, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{ttbl.mediumName}</td>
                                  <td> {ttbl.subjectName} </td>
                                  <td> {ttbl.periodNo} </td>
                                  <td> {ttbl.day}</td> 
                                  <td>
                                    <button class="btn btn-outline-primary edit-item-btn">
                                      <Link
                                        to={{
                                          pathname: `/edit-timetable/${ttbl.timeTableIdPk}`,
                                        }}
                                      >
                                        Edit
                                      </Link>{" "}
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.delete(ttbl.timeTableIdPk)
                                      }
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
                                <th>Medium Name</th>
                                <th> Subject </th> 
                                <th> Period No. </th>
                                <th> Day </th>
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

export default ViewSubject;
