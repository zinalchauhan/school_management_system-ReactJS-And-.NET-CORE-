import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "../admin/includes/footer";
import { Variables } from "../Variables";
import { data } from "jquery";

export class teacherTakeAttendance extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: [],
      classname: "",
      classid: 0,
      studid: 0,
      attendenceIdPk: 0,
      classtechid: 0,
      classTeacherIdFk: 0,
      attendenceDate: "",
      attendanceStatus: [],
    };
  }

  refreshList(tech) {
    fetch(Variables.TECH_API_URL + "checkClassTeacher/" + tech)
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ classid: res.data.classIdFk });
          this.setState({ classtechid: res.data.classTeacherIdPk })
          this.setState({ classname: res.data.standardName + "-" + res.data.divisionName });
          console.log("Class ID" + res.data.classIdFk);
          console.log("Class Teacher ID" + res.data.classTeacherIdPk);
          this.getStudent(res.data.classIdFk,res.data.classTeacherIdPk);
        }
      });
  }

  getStudent(classid, classtechid) {
    fetch(Variables.TECH_API_URL + "classStudList/" + classid, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          if (res.result === "success") {
            res.data.forEach((student, index) => {
              this.setState((state, props) => {
                state.attendanceStatus[index] = "P";
              });
              this.insert(student.studentIdPk, classid, classtechid, "P");
            });
            this.setState({ students: res.data });
            console.log(this.state.attendanceStatus);

          } else {
            // this.setState({ students: [] });
          }
        },
        (error) => {
          alert("Failed In Student List");
        }
      );
  }


  // getStudent(classid , userid ) {
  //   fetch(Variables.TECH_API_URL + "classStudList/" + classid)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       if (res.result === "success") {
  //         res.data.forEach((stud,index) => {
  //           this.setState((state, props) => {
  //             state.ttendanceStatus[index] = "P";
  //           });
  //           this.insert(students.studentIdPk, classid, userid , "P");
  //         });
  //         this.setState({ students: res.data });
  //         this.setState({ studid: res.data.studentIdPk });
  //         console.log(this.state.attendanceStatus);

  //       } else {
  //         //this.setState({ students : [] });
  //       }
  //         console.log(res);
  //       }
  //     });
  // }

  componentDidMount() {
    this.refreshList(sessionStorage.getItem("userId")?.toString());
  }

  insert(studid, classid, classtechid, status) {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    fetch(Variables.TECH_API_URL + "insertAttendence", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentIdFk: studid,
        classIdFk: classid,
        classTeacherIdFk: classtechid,
        attendenceDate: date,
        attendenceStatus: status,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          //this.props.history.push("/admin/viewSubject");
        },
        (error) => {
          alert("Failed IN Insert");
        }
      );
  }

  onClick(studid, Status, index) {
    console.log("student Id: ", studid);
    console.log("Status: ", Status);
    console.log("index: ", index);
    console.log("classid: ", this.state.classid);
    console.log("classtechid: ", this.state.classtechid);
    this.setState((state, props) => {
      state.attendanceStatus[index] = Status;
    });
    this.insert(studid, this.state.classid, this.state.classtechid, Status);
    fetch(Variables.TECH_API_URL + "classStudList/" + this.state.classid, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          if (res.result === "success") {

            this.setState({ students: res.data });

          } else {
            // this.setState({ studs: [] });
          }
        },
        (error) => {
          alert("Failed In Student List");
        }
      );
  }


  render() {

    const {
      students,
      classname,
      attendanceStatus
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
                        <h4 className="card-title"> Class : {classname} </h4>
                        <a className="heading-elements-toggle">
                          <i className="icon-ellipsis font-medium-3"></i>
                        </a>
                        <br />
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
                          <br />
                          <br />
                          <table className="table table-striped table-bordered ">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Student RollNo </th>
                                <th>Student Name</th>
                                <th>Status </th>
                              </tr>
                            </thead>
                            <tbody>
                              {students.map((stud, index) => (
                                <tr key={index}>
                                  <td> {index + 1} </td>
                                  <td> {stud.studentRollNo} </td>
                                  <td> {stud.studentFname} {stud.studentMname} {stud.studentLname}  </td>
                                  <td>
                                    {(attendanceStatus[index] === "P" ? <button class="btn btn-outline-danger remove-item-btn" onClick={() => this.onClick(stud.studentIdPk, "A", index)}>Absent</button> : <button class="btn btn-outline-primary edit-item-btn" onClick={() => this.onClick(stud.studentIdPk, "P", index)}>Present</button>)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <th>#</th>
                              <th>Student RollNo </th>
                              <th>Student Name</th>
                              <th>Status </th>
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

export default teacherTakeAttendance;