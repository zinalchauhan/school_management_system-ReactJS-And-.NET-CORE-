import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class AddClassTeacher extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clstech: [],
      teachers: [],
      classes: [],
      mediums: [],
      modelTitle: "",
      classTeacherIdPk: 0,
      classIdFk: 0,
      mediumIdFk: 0,
      teacherIdFk: 0,
      isActive: 0,
    };
  }

  getTeacherList() {
    fetch(Variables.API_URL + "teacherList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ teachers: res.data });
        }
      });
  }

  getClassList() {
    fetch(Variables.API_URL + "classList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ classes: res.data });
        }
      });
  }

  getMediumList() {
    fetch(Variables.API_URL + "mediumList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ mediums: res.data });
        }
      });
  }

  changeTeacherName = (e) => {
    console.log(e.target.value);
    this.setState({ teacherIdFk: e.target.value });
  };

  changeClassName = (e) => {
    console.log(e.target.value);
    this.setState({ classIdFk: e.target.value });
  };

  changeMediumName = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.getClassList();
    this.getMediumList();
    this.getTeacherList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ classTeacherIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ classTeacherIdPk: 0 });
    }
  }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.classTeacherIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    console.log("in Insert");
    fetch(Variables.API_URL + "insertClassTechList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classIdFk: this.state.classIdFk,
        teacherIdFk: this.state.teacherIdFk,
        mediumIdFk: this.state.mediumIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewClassTeacher");
        },
        (error) => {
          console.log(error);
          alert("Failed");
        }
      );
  }

  update() {
    console.log("in update");
    fetch(Variables.API_URL + "updateClassTechList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classTeacherIdPk: this.state.classTeacherIdPk,
        mediumIdFk: this.state.mediumIdFk,
        classIdFk: this.state.classIdFk,
        teacherIdFk: this.state.teacherIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewClassTeacher");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables
      .API_URL + "getClassTech/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            teacherIdFk: result.data.teacherIdFk,
            mediumIdFk: result.data.mediumIdFk,
            classIdFk: result.data.classIdFk,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {

    const {
      clstech,
      teachers,
      classes,
      mediums,
      modelTitle,
      classTeacherIdPk,
      classIdFk,
      mediumIdFk,
      teacherIdFk
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Class Teacher</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add Class Teacher</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="content-header-right text-md-right col-md-6 col-xs-12">
                <div className="form-group"></div>
                {/* <!-- Round Outline Icon Buttons--> */}
              </div>
              <div className="content-header-lead col-xs-12 mt-2"></div>
            </div>
            <div className="content-body">
              {/* <!-- Input Validation start --> */}
              <section className="input-validation">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Class Teacher Form </h4>
                        <a className="heading-elements-toggle">
                          <i className="icon-ellipsis font-medium-3"></i>
                        </a>
                        <div className="heading-elements">
                          <ul className="list-inline mb-0">
                            <li>
                              <a data-action="collapse">
                                <i className="icon-minus4"></i>
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
                        <div className="card-block ">
                          <form onSubmit={this.onSubmit} className="form-horizontal" novalidate>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Select Medium :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                  <select
                                      name="med"
                                      id="med"
                                      className="form-control"
                                      onChange={this.changeMediumName}
                                      value={mediumIdFk}
                                    >
                                      <option value="0">Select Medium</option>
                                      {mediums.map((med) => (
                                        <option
                                          value={med.mediumIdPk}
                                          selected={
                                            mediumIdFk === med.mediumIdPk
                                          }
                                        >
                                          {med.mediumName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <h5>
                                    Select Class :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                  <select
                                      name="cls"
                                      id="cls"
                                      className="form-control"
                                      onChange={this.changeClassName}
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

                              <div className="col-md-6">
                                <div className="form-group">
                                  <h5>
                                    Select Teacher :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                  <select
                                      name="std"
                                      id="std"
                                      className="form-control"
                                      onChange={this.changeTeacherName}
                                      value={teacherIdFk}
                                    >
                                      <option value="0">Select Teacher</option>
                                      {teachers.map((tech) => (
                                        <option
                                          value={tech.teacherIdPk}
                                          selected={
                                            teacherIdFk === tech.teacherIdPk
                                          }
                                        >
                                          {tech.teacherName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                            <div className="text-xs-right">
                                  <button
                                    type="submit"
                                    className="btn btn-success"
                                  >
                                    Submit{" "}
                                    <i className="icon-thumbs-up position-right"></i>
                                  </button>{" "}
                                  &nbsp;&nbsp;&nbsp;
                                  <button
                                    type="reset"
                                    className="btn btn-danger"
                                  >
                                    Reset{" "}
                                    <i className="icon-refresh position-right"></i>
                                  </button>
                                </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- Input Validation end --> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default AddClassTeacher;
