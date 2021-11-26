import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";
import { Link } from "react-router-dom";

export class ViewTimeTableSetting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tts: [],
      mediums: [],
      modelTitle: "",
      settingIdPk:0,
      day : "",
      schoolStartTime:"",
      lectureNo: 0,
      lectureTime : "",
      mediumIdFk: 0,
      breakNo: 0,
      afterLecture : 0,
      academicYear: 0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "ttsettingList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result == "success") {
          this.setState({ tts: res.data });
        }
      });
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteTtsettingList/" + id, {
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
      tts,
      mediums,
      modelTitle,
      settingIdPk,
      day ,
      schoolStartTime,
      lectureNo,
      lectureTime ,
      mediumIdFk,
      breakNo,
      afterLecture ,
      academicYear,
     } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Time Table Setting List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Time Table Setting List</li>
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
                        <h4 className="card-title">Time Table Setting List</h4>
                        <br />
                        <Link
                          to="/addTimeTableSetting"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Time Table Setting
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
                        <div className="card-block card-dashboard" style={{overflow:"scroll"}}>
                          <table className="table table-striped table-bordered file-export">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Medium</th>
                                <th>Day</th>
                                <th>School Start Time</th>
                                <th>Lecture No</th>
                                <th>Lecture Time</th>
                                <th>Break No</th>
                                <th>After Lacture</th>
                                <th>Academic Year</th>
                                <th> Edit </th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                            {tts.map((tt, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td> {tt.mediumName} </td>
                                  <td> {tt.day} </td>
                                  <td> {tt.schoolStartTime} </td>
                                  <td> {tt.lectureNo} </td>
                                  <td> {tt.lectureTime} </td>
                                  <td> {tt.breakNo} </td>
                                  <td>  {tt.afterLecture} </td>
                                  <td> {tt.academicYear} </td>
                                  <td>
                                    <button class="btn btn-outline-primary edit-item-btn">
                                      <Link
                                        to={{
                                          pathname: `/edit-timeTableSetting/${tt.settingIdPk}`,
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
                                        this.delete(tt.settingIdPk)
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
                                <th>Medium</th>
                                <th>Day</th>
                                <th>School Start Time</th>
                                <th>Lecture No</th>
                                <th>Lecture Time</th>
                                <th>Break No</th>
                                <th>After Lacture</th>
                                <th>Academic Year</th>
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

export default ViewTimeTableSetting;
