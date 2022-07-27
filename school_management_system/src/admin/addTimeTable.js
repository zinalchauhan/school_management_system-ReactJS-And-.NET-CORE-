import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";
import $ from 'jquery';

export class AddTimeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tt: [],
      tts: [],
      mediums: [],
      days: [],
      classes: [],
      subtechs: [],
      subjectTeacherIdFk: [],
      periodNo: [],
      modelTitle: "",
      lec_no: 0,
      timeTableIdPk: 0,
      mediumIdFk: 0,
      classIdFk: 0,
      settingIdFk: 0,
      isActive: 0,
    };
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

  changeMediumName = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  changeSubjectTeacher = (e, index) => {
    console.log(e.target.value);
    this.setState((state) => {
      state.subjectTeacherIdFk[index] = e.target.value;
    });
  };

  changeClass = (e) => {
    console.log(e.target.value);
    this.setState({ classIdFk: e.target.value });
  };

  changeTimeTableSetting = (e) => {
    console.log(e.target.value);
    this.setState({ settingIdFk: e.target.value });
    fetch(Variables.API_URL + "getTtsetting/" + e.target.value)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        this.setState({ lec_no: response.data.lectureNo });
        for (var i = 1; i <= response.data.lectureNo - 1; i++) {
          //	var newEl = $(el).after(el.cloneNode(true));
          this.setState((state) => {
            var period = i + 1;
            state.periodNo[i] = period.toString();
          });
          this.nextElement($("#period"), i);
        }
      })
      .catch((err) => console.log(err));
  };

  nextElement(element, i) {
    var _ = this;
    var newElement = element.clone();
    var id = this.state.current_id + 1;
    this.state.current_id = id;
    if (id < 10) id = "0" + id;
    newElement.attr("name", element.attr("id").split("01")[0] + id);
    var field = $("input", newElement).attr("id");
    $("input", newElement).attr("name", field.split("01")[0] + id);
    $("input", newElement).val(this.state.periodNo[i]);

    var field1 = $("select", newElement).attr("id");
    $("select", newElement).attr("id", field1.split("01")[0] + id);
    $("select", newElement).attr("name", field1.split("01")[0] + id);
    $("select", newElement).on("change", (e) => _.changeSubjectTeacher(e, i));
    $("select", newElement).val(this.state.subjectTeacherIdFk[i]);
    newElement.appendTo($("#period_tab"));
    //
  }

  changePeriodNo = (e) => {
    console.log(e.target.value);
    this.setState({ periodNo: e.target.value });
  };

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.loadMedium();
    this.getClassList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ timeTableIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ timeTableIdPk: 0 });
    }
    this.setState((state)=>{
      state.periodNo[0]='1';
    });
  }
  }

  loadMedium() {
    fetch(Variables.API_URL + "mediumList/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log(result);
          this.setState({ mediums: result.data });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  loadDay = (e) => {
    console.log("Medium ID ::: " + e.target.value);
    this.setState({
      mediumIdFk: e.target.value,
    });
    fetch(Variables.API_URL + "getTtsettingByMedium/" + e.target.value)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          days: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  loadSubject = (e) => {
    console.log("Class ID ::: " + e.target.value);
    this.setState({
      classIdFk: e.target.value,
    });
    fetch(Variables.API_URL + "subTeachList/" + e.target.value)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          subtechs: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.timeTableIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };


  insert() {

    //alert("in insert..");
    for (let index = 0; index < this.state.lec_no; index++) {
      console.log(this.state.periodNo[index]);
      console.log(this.state.subjectTeacherIdFk[index]);
      console.log(this.state.mediumIdFk);
      console.log(this.state.classIdFk);
      console.log(this.state.settingIdFk);

      fetch(Variables.API_URL + "insertTimetableList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classIdFk: this.state.classIdFk,
        subjectTeacherIdFk: this.state.subjectTeacherIdFk[index],
        periodNo: this.state.periodNo[index],
        mediumIdFk: this.state.mediumIdFk,
        settingIdFk: this.state.settingIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    this.props.history.push("/admin/viewTimeTable");
    
  }

  update() {
    fetch(Variables.API_URL + "updateTimetableList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timeTableIdPk: this.state.timeTableIdPk,
        mediumIdFk: this.state.mediumIdFk,
        classIdFk: this.state.classIdFk,
        subjectTeacherIdFk: this.state.subjectTeacherIdFk,
        settingIdFk: this.state.settingIdFk,
        periodNo: this.state.periodNo,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin /viewTimeTable");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables.API_URL + "getTimetable/" + id, {
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
            classIdFk: result.data.classIdFk,
            mediumIdFk: result.data.mediumIdFk,
            subjectTeacherIdFk: result.data.subjectTeacherIdFk,
            settingIdFk: result.data.settingIdFk,
            periodNo: result.data.periodNo,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    const {
      tt,
      tts,
      mediums,
      classes,
      subtechs,
      modelTitle,
      days,
      timeTableIdPk,
      mediumIdFk,
      classIdFk,
      subjectTeacherIdFk,
      periodNo,
      settingIdFk,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12"></div>
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
                        <h4 className="card-title">Time Table</h4>
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
                          <form
                            className="form-horizontal"
                            novalidate
                            onSubmit={this.onSubmit.bind(this)}
                          >
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
                                      onChange={this.loadDay}
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
                                    Select Class :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="cls"
                                      id="cls"
                                      className="form-control"
                                      onChange={this.loadSubject}
                                      value={classIdFk}
                                    >
                                      <option value="0">Select Class</option>
                                      {classes.map((cls) => (
                                        <option
                                          value={cls.classIdPk}
                                          selected={classIdFk === cls.classIdPk}
                                        >
                                          {cls.standardName} -{" "}
                                          {cls.divisionName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Select Day :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="day"
                                      id="day"
                                      className="form-control"
                                      onChange={this.changeTimeTableSetting}
                                      value={settingIdFk}
                                    >
                                      <option value="0">Select Day</option>
                                      {days.map((ttsday) => (
                                        <option
                                          value={ttsday.settingIdPk}
                                          selected={
                                            settingIdFk === ttsday.settingIdPk
                                          }
                                        >
                                          {ttsday.day}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="period_tab" className="row">
                              <div id="period" className="col-md-12">
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <h5>Period No. : </h5>
                                    <div className="controls">
                                      <input
                                        type="text"
                                        id="periodno01"
                                        name="periodno01"
                                        placeholder="Period No."
                                        value={this.state.periodNo[0]}
                                        className="form-control"
                                        required
                                        data-validation-required-message="This field is required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <h5>
                                      Select Subject :{" "}
                                      <span className="required"></span>
                                    </h5>
                                    <div className="controls">
                                      <select
                                        name="subjectname01"
                                        id="subjectname01"
                                        className="form-control"
                                        onChange={(e) =>
                                          this.changeSubjectTeacher(e, 0)
                                        }
                                        value={this.state.subjectTeacherIdFk[0]}
                                      >
                                        <option value="0">
                                          Select Subject{" "}
                                        </option>
                                        {subtechs.map((sub) => (
                                          <option
                                            value={sub.subjectTeacherIdPk}
                                            selected={
                                              subjectTeacherIdFk ===
                                              sub.subjectTeacherIdPk
                                            }
                                          >
                                            {sub.subjectName} -{" "}
                                            {sub.teacherName}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
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

export default AddTimeTable;
