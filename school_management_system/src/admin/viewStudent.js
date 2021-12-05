import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class ViewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      mediums: [],
      classes: [],
      categories: [],
      modelTitle: "",
      studentIdPk: 0,
      studentRollNo: 0,
      studentGrNo: 0,
      mediumIdFk: 0,
      classIdFk: 0,
      studentFname: "",
      studentMname: "",
      studentLname: "",
      studentImage: "",
      studentDob: "",
      studentGender: "",
      motherMobile: "",
      categoryIdFk: 0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "studentList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ students: res.data });
        }
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteStudentList/" + id, {
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
      students,
      mediums,
      classes,
      categories,
      modelTitle,
      studentIdPk,
      studentRollNo,
      studentGrNo,
      mediumIdFk,
      classIdFk,
      studentFname,
      studentMname,
      studentLname,
      studentImage,
      studentDob,
      studentGender,
      motherMobile,
      categoryIdFk,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Student List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Student List</li>
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
                        <h4 className="card-title">Class </h4>
                        <a className="heading-elements-toggle">
                          <i className="icon-ellipsis font-medium-3"></i>
                        </a>
                        <br />
                        <Link
                          to="/admin/addStudentManually"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Student
                        </Link>
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
                        <div className="card-block card-dashboard">
                          <button
                            type="submit"
                            className="btn btn-primary mr-1 inputs-submin"
                          >
                            <i className="icon-send-o"> </i>
                            &nbsp; Update RollNo
                          </button>
                          <br />
                          <br />
                          <table className="table table-striped table-bordered ">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Edit / Delete </th>
                                <th>Student Photo</th>
                                <th>Class Details </th>
                                <th> Personal Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {students.map((stud, index) => (
                                <tr key={index}>
                                  <td> {index + 1} </td>
                                  <td>
                                      <Link
                                      class="btn btn-outline-primary edit-item-btn"
                                        to={{
                                          pathname: `/admin/edit-student/${stud.studentIdPk}`,
                                        }}
                                      >
                                        Edit
                                      </Link>{" "}
                                    <br />
                                    <br />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.delete(stud.studentIdPk)
                                      }
                                      class="btn btn-outline-danger remove-item-btn"
                                    >
                                      {" "}
                                      Delete{" "}
                                    </button>
                                  </td>
                                  <td>
                                    <img
                                      src={Variables.PHOTO_URL + stud.studentImage}
                                      className="img"
                                    />
                                  </td>
                                  <td>
                                    <b> Roll No. : </b>
                                    <input
                                      class="form-control round rno"
                                      value={stud.studentRollNo}
                                      type="number"
                                    />
                                    <b> GR No. : </b> {stud.studentGrNo}
                                    <br />
                                    <b> Class : </b> {stud.standardName} -{" "}
                                    {stud.divisionName}
                                    <br />
                                    <b> Medium : </b> {stud.mediumName}
                                  </td>
                                  <td>
                                    <b> Name : </b> {stud.studentFname}{" "}
                                    {stud.studentMname} {stud.studentLname}
                                    <br />
                                    <b> DOB : </b> {stud.studentDob}
                                    <br />
                                    <b> Gender : </b> {stud.studentGender}
                                    <br />
                                    <b> Category : </b> {stud.categoryName}
                                    <br />
                                    <b> Phone No. : </b> {stud.motherMobile}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <th>#</th>
                              <th>Edit / Delete </th>
                              <th>Student Photo</th>
                              <th>Class Details </th>
                              <th> Personal Details</th>
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

export default ViewStudent;
