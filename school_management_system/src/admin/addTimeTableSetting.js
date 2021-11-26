import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddTimeTableSetting extends Component {

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

  changeDay = (e) => {
    console.log(e.target.value);
    this.setState({ day: e.target.value });
  };

  changeSchoolStartTime = (e) => {
    console.log(e.target.value);
    this.setState({ schoolStartTime: e.target.value });
  };

  changeLectureNo = (e) => {
    console.log(e.target.value);
    this.setState({ lectureNo: e.target.value });
  };

  changeLectureTime = (e) => {
    console.log(e.target.value);
    this.setState({ lectureTime: e.target.value });
  };

  changeBreakNo = (e) => {
    console.log(e.target.value);
    this.setState({ breakNo: e.target.value });
  };

  changeAfterLecture = (e) => {
    console.log(e.target.value);
    this.setState({ afterLecture: e.target.value });
  };

  changeAcademicYear = (e) => {
    console.log(e.target.value);
    this.setState({ academicYear: e.target.value });
  };

  componentDidMount() {
    this.getMediumList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ settingIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ settingIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.settingIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    console.log("in Insert");
    fetch(Variables.API_URL + "insertTtsettingList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mediumIdFk: this.state.mediumIdFk,
        day: this.state.day,
        schoolStartTime: this.state.schoolStartTime,
        lectureNo: this.state.lectureNo,
        lectureTime: this.state.lectureTime,
        afterLecture: this.state.afterLecture,
        breakNo: this.state.breakNo,
        academicYear: this.state.academicYear,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewTimeTableSetting");
        },
        (error) => {
          
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateTtsettingList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        settingIdPk: this.state.settingIdPk,
        mediumIdFk: this.state.mediumIdFk,
        day: this.state.day,
        schoolStartTime: this.state.schoolStartTime,
        lectureNo: this.state.lectureNo,
        lectureTime: this.state.lectureTime,
        afterLecture: this.state.afterLecture,
        breakNo: this.state.breakNo,
        academicYear: this.state.academicYear,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewTimeTableSetting");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables
      .API_URL + "getTtsetting/" + id, {
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
            day: result.data.day,
            mediumIdFk: result.data.mediumIdFk,
            schoolStartTime: result.data.schoolStartTime,
            lectureNo: result.data.lectureNo,
            lectureTime: result.data.lectureTime,
            afterLecture: result.data.afterLecture,
            academicYear: result.data.academicYear,
            breakNo: result.data.breakNo,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
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
                        <h4 className="card-title">Time Table Setting</h4>
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
                            <br />
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Day :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Day"
                                      value={day}
                                      onChange={this.changeDay}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>School Start Time : </h5>
                                  <div className="controls">
                                    <input
                                    type="time"
                                      name="sttime"
                                      value={schoolStartTime}
                                      onChange={this.changeSchoolStartTime}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Lecture No. : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="lacno"
                                      placeholder="Lecture No."
                                      value={lectureNo}
                                      onChange={this.changeLectureNo}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Break No. : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Break No."
                                      value={breakNo}
                                      onChange={this.changeBreakNo}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                  <h5>After Lecture : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="After Lecture"
                                      value={afterLecture}
                                      onChange={this.changeAfterLecture}
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
                                <div className="form-group">
                                  <h5>Lecture Time (Minutes) : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Lecture Time"
                                      value={lectureTime}
                                      onChange={this.changeLectureTime}
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

export default AddTimeTableSetting;
