import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewAttendence extends Component {

  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      atts: [],
      modelTitle: "",
      classIdFk: 0,
    };
    // this.onSubmit = this.onSubmit.bind(this);
  }

  getClass() {
    fetch(Variables.API_URL + "classList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ classes: res.data });
        }
      });
  }

  getAttendence(id) {
    fetch(Variables.API_URL + "classAttendenceList/" + id, {
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
            this.setState({ atts: res.data });
            console.log({ atts: res.data });
          }
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  changeClass = (e) => {
    console.log(e.target.value);
    this.setState({ classIdFk: e.target.value });
    this.getAttendence(e.target.value);
  };

  componentDidMount() {
    this.getClass();
  }



  render() {
    const { classes, classIdFk, atts } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Attendence List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Attendence List
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="content-body">

              <section id="google-bar-charts">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Attendance List</h4>
                        <a class="heading-elements-toggle">
                          <i class="icon-ellipsis font-medium-3"></i>
                        </a>
                        <br /><br />
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <h5>
                                Select Class :{" "}
                                <span className="required"></span>
                              </h5> <br />
                              <div className="controls">
                                <select
                                  name="div"
                                  id="div"
                                  className="form-control"
                                  onChange={this.changeClass}
                                  value={classIdFk}
                                >
                                  <option value="0">Select Class</option>
                                  {classes.map((cls) => (
                                    <option
                                      value={cls.classIdPk}
                                      selected={
                                        classIdFk === cls.classIdPk
                                      }
                                    >
                                      {cls.standardName} - {cls.divisionName}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />


                        <table className="table table-striped table-bordered ">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th> Date </th>
                              <th>Student RollNo </th>
                              <th>Student Name</th>
                              <th>Attendance Status </th>
                            </tr>
                          </thead>
                          <tbody>
                            {atts.map((att, index) => (
                              <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {att.attendenceDate} </td> 
                                <td> {att.studentRollNo} </td>
                                <td>  {att.studentMname}  {att.studentFname}  </td>
                                <td style={{ color: "blue" }}> {att.attendenceStatus} </td>


                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <th>#</th>
                            <th> Date </th>
                            <th>Student RollNo </th>
                            <th>Student Name</th>
                            <th>Remark </th>
                          </tfoot>
                        </table>
                        <br />
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ViewAttendence;
