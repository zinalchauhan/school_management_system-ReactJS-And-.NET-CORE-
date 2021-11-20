import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddStudent extends Component {
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
      fatherMobile: "",
      categoryIdFk: 0,
      isActive: 0,
    };
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

  getClassList() {
    fetch(Variables.API_URL + "classList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ classes: res.data });
        }
      });
  }

  getCategoryList() {
    fetch(Variables.API_URL + "categoryList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ categories: res.data });
        }
      });
  }

  changeRollno = (e) => {
    this.setState({ studentRollNo: e.target.value });
  };

  changeGrno = (e) => {
    this.setState({ studentGrNo: e.target.value });
  };

  changeMedium = (e) => {
    this.setState({ mediumIdFk: e.target.value });
  };

  changeClass = (e) => {
    this.setState({ classIdFk: e.target.value });
  };

  changeStudentFname = (e) => {
    this.setState({ studentFname: e.target.value });
  };

  changeStudentMname = (e) => {
    this.setState({ studentMname: e.target.value });
  };

  changeStudentLname = (e) => {
    this.setState({ studentLname: e.target.value });
  };

  changeStudentImage = (e) => {
    this.setState({ studentImage: e.target.value });
  };

  changeStudentDob = (e) => {
    this.setState({ studentDob: e.target.value });
  };

  changeStudentGender = (e) => {
    this.setState({ studentGender: e.target.value });
  };

  changeMotherMobile = (e) => {
    this.setState({ motherMobile: e.target.value });
  };

  changeFatherMobile = (e) => {
    this.setState({ fatherMobile: e.target.value });
  };

  changeCategory = (e) => {
    this.setState({ categoryIdFk: e.target.value });
  };

  componentDidMount() {
    this.getMediumList();
    this.getClassList();
    this.getCategoryList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ studentIdPk: this.props.match.params.id });
      this.getClass(this.props.match.params.id);
    } else {
      this.setState({ studentIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    //this.setState({ dept_name: event.target.departmentname.value });
    if (this.state.studentIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    fetch(Variables.API_URL + "insertStudentList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentRollNo: this.state.studentRollNo,
        studentGrNo: this.state.studentGrNo,
        mediumIdFk: this.state.mediumIdFk,
        classIdFk: this.state.classIdFk,
        studentFname: this.state.studentFname,
        studentMname: this.state.studentMname,
        studentLname: this.state.studentLname,
        studentImage: this.state.studentImage,
        studentDob: this.state.studentDob,
        studentGender: this.state.studentGender,
        motherMobile: this.state.motherMobile,
        fatherMobile: this.state.fatherMobile,
        categoryIdFk: this.state.categoryIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewStudent");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateStudentList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentIdPk: this.state.studentIdPk,
        studentRollNo: this.state.studentRollNo,
        studentGrNo: this.state.studentGrNo,
        mediumIdFk: this.state.mediumIdFk,
        classIdFk: this.state.classIdFk,
        studentFname: this.state.studentFname,
        studentMname: this.state.studentMname,
        studentLname: this.state.studentLname,
        studentImage: this.state.studentImage,
        studentDob: this.state.studentDob,
        studentGender: this.state.studentGender,
        motherMobile: this.state.motherMobile,
        fatherMobile: this.state.fatherMobile,
        categoryIdFk: this.state.categoryIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewStudent");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  OnGetData(id) {
    fetch(Variables.API_URL + "getStudent/" + id, {
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
            studentRollNo: result.data.studentRollNo,
            studentGrNo: result.data.studentGrNo,
            mediumIdFk: result.data.mediumIdFk,
            classIdFk: result.data.classIdFk,
            studentFname: result.data.studentFname,
            studentMname: result.data.studentMname,
            studentLname: result.data.studentLname,
            studentImage: result.data.studentImage,
            studentDob: result.data.studentDob,
            studentGender: result.data.studentGender,
            motherMobile: result.data.motherMobile,
            fatherMobile: result.data.fatherMobile,
            categoryIdFk: result.data.categoryIdFk,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  reset() {
    this.state.subjectName = "";
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
      fatherMobile,
      categoryIdFk
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Student</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add Student</li>
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
                        <h4 className="card-title">Student Form</h4>
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
                          <form className="form-horizontal" novalidate>
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Select Medium :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select Medium</option>
                                      <option value="1">Gujarati</option>
                                      <option value="2">Hindi</option>
                                      <option value="3">English</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>
                                    Select Standard :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select Standard</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Select Division :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      className="form-control"
                                    >
                                      <option value="">Select Division</option>
                                      <option value="1">A</option>
                                      <option value="2">B</option>
                                      <option value="3">C</option>
                                      <option value="4">D</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>
                                    Excel file :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="file"
                                      name="img"
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
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

export default AddStudent;
