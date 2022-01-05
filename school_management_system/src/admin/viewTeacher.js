import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewTeacher extends Component {

  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
      cities: [],
      states: [],
      mediums: [],
      subjects: [],
      modelTitle: "",
      teacherIdPk: 0,
      teacherName: "",
      teacherEmail: "",
      teacherMobile: "",
      teacherQualification: "",
      teacherImage: "",
      cityIdFk: 0,
      teacherAddress: "",
      mediumIdFk: 0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "teacherList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ teachers: res.data });
        }
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteTeacherList/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === "success") {
            this.props.history.push("/admin/viewTeacher");
          }
        });
    }
  }

  render() {

    const {
      teachers,
      cities,
      states,
      mediums,
      subjects,
      modelTitle,
      teacherIdPk,
      teacherName,
      teacherEmail,
      teacherMobile,
      teacherQualification,
      teacherImage,
      cityIdFk,
      teacherAddress,
      mediumIdFk,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Teacher List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Teacher List</li>
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
                        <h4 className="card-title">Teacher List</h4>
                        <br />
                        <Link
                          to="/admin/addTeacher"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Teacher
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
                                <th> Edit / Delete</th>
                                <th> teacher Photo </th>
                                <th> Academic Details </th>
                                <th>Personal Details </th>
                              </tr>
                            </thead>
                            <tbody>
                              {teachers.map((tech, index) => (
                                <tr key={index}>
                                  <td> {index + 1} </td>
                                  <td>
                                  <Link
                                      className="btn btn-outline-primary edit-item-btn"
                                      to={{
                                        pathname: `/admin/edit-teacher/${tech.teacherIdPk}`,
                                      }}
                                    >
                                      Edit  
                                    </Link>{" "}
                                    <br /> <br />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.delete(tech.teacherIdPk)
                                      }
                                      class="btn btn-outline-danger remove-item-btn"
                                    >
                                      {" "}
                                      Delete{" "}
                                    </button>
                                  </td>
                                  <td>
                                    {" "}
                                    <img
                                      src={Variables.PHOTO_URL + tech.teacherImage}
                                      className="img"
                                    />{" "}
                                  </td>
                                  <td>
                                    <b> Medium : </b> <br/> &nbsp;&nbsp;&nbsp;  {tech.mediumName} <br/>
                                    <b> Subjects : </b> <br/> &nbsp;&nbsp;&nbsp;{tech.subjects}
                                  </td>
                                  <td>
                                    <b> Name : </b> <br/>&nbsp;&nbsp;&nbsp;{tech.teacherName} <br/>
                                    <b> Email : </b><br/>&nbsp;&nbsp;&nbsp; {tech.teacherEmail} <br/>
                                    <b> Qualification : </b><br/>&nbsp;&nbsp;&nbsp;
                                    {tech.teacherQualification}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th> Edit / Delete</th>
                                <th> teacher Photo </th>
                                <th> Academic Details </th>
                                <th>Personal Details </th>
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

export default ViewTeacher;
