import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";
import { Link } from "react-router-dom";

export class AddExam extends Component {

  constructor(props) {
    super(props);

    this.state = {
      exams: [],
      mediums: [],
      modelTitle: "",
      examIdPk: 0,
      mediumIdFk: 0,
      examName: "",
      examStartDate: "",
      examEndDate: "",
      resultDate: "",
      examTotalMarks: 0,
      academicYear: 0,
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

  changeMediumName = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  changeExamName = (e) => {
    console.log(e.target.value);
    this.setState({ examName: e.target.value });
  };

  changeExamStartDate = (e) => {
    console.log(e.target.value);
    this.setState({ examStartDate: e.target.value });
  };
  
  changeExamEndDate = (e) => {
    console.log(e.target.value);
    this.setState({ examEndDate: e.target.value });
  };
  
  changeResultDate = (e) => {
    console.log(e.target.value);
    this.setState({ resultDate: e.target.value });
  };
  
  changeExamTotalMarks = (e) => {
    console.log(e.target.value);
    this.setState({ examTotalMarks: e.target.value });
  };
  
  changeAcademicYear = (e) => {
    console.log(e.target.value);
    this.setState({ academicYear: e.target.value });
  };

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.getMediumList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ examIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ examIdPk: 0 });
    }
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.examIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    console.log("in Insert");
    fetch(Variables.API_URL + "insertExamList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mediumIdFk: this.state.mediumIdFk,
        examName: this.state.examName,
        examStartDate: this.state.examStartDate,
        examEndDate: this.state.examEndDate,
        resultDate: this.state.resultDate,
        examTotalMarks: this.state.examTotalMarks,
        academicYear: this.state.academicYear,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewExam");
        },
        (error) => {
          
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateExamList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        examIdPk: this.state.examIdPk,
        mediumIdFk: this.state.mediumIdFk,
        examName: this.state.examName,
        examStartDate: this.state.examStartDate,
        examEndDate: this.state.examEndDate,
        resultDate: this.state.resultDate,
        examTotalMarks: this.state.examTotalMarks,
        academicYear: this.state.academicYear,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewExam");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables
      .API_URL + "getExam/" + id, {
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
            examName: result.data.examName,
            mediumIdFk: result.data.mediumIdFk,
            examStartDate: result.data.examStartDate,
            examEndDate: result.data.examEndDate,
            resultDate: result.data.resultDate,
            academicYear: result.data.academicYear,
            examTotalMarks: result.data.examTotalMarks,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {

    const {
      exams,
      mediums,
      modelTitle,
      examIdPk,
      mediumIdFk,
      examName,
      examStartDate,
      examEndDate,
      resultDate,
      examTotalMarks,
      academicYear,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
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
                        <h4 className="card-title">Exam </h4>
                        
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
                          <form className="form-horizontal" novalidate onSubmit={this.onSubmit.bind(this)}>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Select Medium :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                  <select
                                      name="select"
                                      id="select"
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
                            <br />
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Exam Name :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Exam Name"
                                      value={examName}
                                      onChange={this.changeExamName}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Exam Start Date : </h5>
                                  <div className="controls">
                                    <input
                                    type="date"
                                      name="date"
                                      value={examStartDate}
                                      onChange={this.changeExamStartDate}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Result Date : </h5>
                                  <div className="controls">
                                    <input
                                      type="date"
                                      name="res"
                                      placeholder="Result Date"
                                      value={resultDate}
                                      onChange={this.changeResultDate}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                  <h5>Exam Total Marks : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Exam Total Marks"
                                      value={examTotalMarks}
                                      onChange={this.changeExamTotalMarks}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Exam End Date : </h5>
                                  <div className="controls">
                                    <input
                                      type="date"
                                      name="text"
                                      value={examEndDate}
                                      onChange={this.changeExamEndDate}
                                      placeholder="Academic Year"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Academic Year : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Academic Year"
                                      value={academicYear}
                                      onChange={this.changeAcademicYear}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="text-xs-right">
                              <button type="submit" className="btn btn-success">
                                Submit{" "}
                                <i className="icon-thumbs-up position-right"></i>
                              </button>{" "}
                              &nbsp;&nbsp;&nbsp;
                              <button type="reset" className="btn btn-danger">
                                Reset{" "}
                                <i className="icon-refresh position-right"></i>
                              </button>
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

export default AddExam;
