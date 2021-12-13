import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddTeacher extends Component {

  constructor(props) {
    super(props);

    this.state = {
      states: [],
      cities: [],
      teachers: [],
      subjects: [],
      mediums: [],
      modelTitle: "",
      teacherIdPk: 0,
      mediumIdFk: 0,
      cityIdFk: 0,
      stateIdFk: 0,
      file: "",
      sub: "",
      name: "",
      teacherSubject: "",
      teacherName: "",
      teacherEmail: "",
      teacherMobile: "",
      teacherQualification: "",
      teacherImage: "",
      teacherAddress: "",
      isActive: 0,
    };
  }

  setFile(e) {
    this.setState({ file: e.target.files[0] });
  }

  loadState() {
    fetch(Variables.API_URL + "stateList/", {
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
          this.setState({ states: result.data });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  loadCity = (e) => {
    console.log("State ID ::: " + e.target.value);
    this.setState({
      stateIdFk: e.target.value,
    });
    fetch(Variables.API_URL + "cityList/" + e.target.value)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          cities: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  getTeacherList() {
    fetch(Variables.API_URL + "teacherList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ teachers: res.data });
        }
      });
  }

  getSubject() {
    fetch(Variables.API_URL + "subjectList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ subjects: res.data });
        }
      });
  }

  getMedium() {
    fetch(Variables.API_URL + "mediumList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ mediums: res.data });
        }
      });
  }

  changeSubject = (e) => {
    console.log(e.target.value);
    this.setState({ subjectIdFk: e.target.value });
  };

  changeCity = (e) => {
    console.log(e.target.value);
    this.setState({ cityIdFk: e.target.value });
  };

  changeMedium = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  changeTechName = (e) => {
    this.setState({ teacherName: e.target.value });
  };

  changeMobile = (e) => {
    this.setState({ teacherMobile: e.target.value });
  };

  changeQualification = (e) => {
    this.setState({ teacherQualification: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ teacherEmail: e.target.value });
  };

  changeImage(e) {
    this.setState({ file: e.target.files[0] });
  }

  changeAddress = (e) => {
    this.setState({ teacherAddress: e.target.value });
  };

  onSubjectCheck = (i, subjectId) => (event) => {
    this.setState((state, props) => {
      var string = subjectId.toString() + ",";
      var prevString = state.teacherSubject;
      console.log(prevString);
      if (state.subjects[i].subjectIdPk === subjectId) {
        if (state.teacherSubject.includes(string)) {
          console.log("Checked");
          //state.proffSubject = prevString.replace(string, '');
        } else {
          state.teacherSubject = state.teacherSubject.concat(string);
        }
      }
      console.log(state.teacherSubject);
    });
  };


  componentDidMount() {
    //this.getProfessorList();
    this.loadState();
    this.getMedium();
    this.getSubject();
    if (this.props.match.params.id !== undefined) {
      this.setState({ teacherIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ emp_id: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.teacherIdPk !== 0) {
      this.update();
    } else {
      console.log("Insert");
      this.insert();
    }
  };

  insert(e) {
    alert("in");
    const formData = new FormData();
    formData.append("teacherName", this.state.teacherName);
    formData.append("teacherEmail", this.state.teacherEmail);
    formData.append("teacherMobile", this.state.teacherMobile);
    formData.append("teacherQualification", this.state.teacherQualification);
    formData.append("teacherAddress", this.state.teacherAddress);
    formData.append("cityIdFk", this.state.cityIdFk);
    formData.append("mediumIdFk", this.state.mediumIdFk);
    formData.append("sub", this.state.teacherSubject);
    formData.append("file", this.state.file, this.state.file.name);

    fetch(Variables.API_URL + "insertTeacherList", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
    //      this.props.history.push("/admin/viewTeacher");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  update(e) {
    alert("in");
    const formData = new FormData();
    formData.append("teacherName", this.state.teacherName);
    formData.append("teacherEmail", this.state.teacherEmail);
    formData.append("teacherMobile", this.state.teacherMobile);
    formData.append("teacherQualification", this.state.teacherQualification);
    formData.append("teacherAddress", this.state.teacherAddress);
    formData.append("cityIdFk", this.state.cityIdFk);
    formData.append("mediumIdFk", this.state.mediumIdFk);
    formData.append("sub", this.state.teacherSubject);
    formData.append("teacherImage", this.state.teacherImage);
    if (this.state.file != "") {
      formData.append("file", this.state.file, this.state.file.name);
    }

    fetch(Variables.API_URL + "updateTeacherList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewTeacher");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables.API_URL + "getTeacher/" + id, {
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

          this.setState({ teacherName: result.data.teacherName });
          this.setState({ teacherQualification: result.data.teacherQualification });
          this.setState({ teacherMobile: result.data.teacherMobile });
          this.setState({ teacherEmail: result.data.teacherEmail });
          this.setState({ teacherAddress: result.data.teacherAddress });
          this.setState({ mediumIdFk: result.data.mediumIdFk });
          this.setState({ teacherIdPk: result.data.teacherIdPk });
          this.setState({ teacherImage: result.data.teacherImage });
          this.setState({ stateIdFk: result.data.stateIdFk });
          this.setState({ sub: result.data.sub });
          this.setState({ cityIdFk: result.data.cityIdFk });

          console.log(this.state.stateIdFk);
          fetch(Variables.API_URL + "cityList/" + this.state.stateIdFk)
            .then((res) => res.json())
            .then((response) => {
              console.log(response);
              this.setState({
                cities: response.data,
              });
            })
            .catch((err) => console.log(err));
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {

      const {
        teachers: [],
        states,
        cities,
        mediums,
        subjects,
        modelTitle,
        teacherName,
        teacherMobile,
        teacherEmail,
        teacherQualification,
        teacherImage,
        teacherAddress,
        cityIdFk,
        stateIdFk,
        mediumIdFk,
        subjectIdFk,
        sub,
        name,
        file
      } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Teacher Form</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add Teacher</li>
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
                        <h4 className="card-title">Teacher Form</h4>
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
                                      onChange={this.changeMedium}
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
                                    Teacher Name :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Teacher Name"
                                      value={teacherName}
                                onChange={this.changeTechName}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Teacher Mobile : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="mobile"
                                      placeholder="Teacher Mobile"
                                      value={teacherMobile}
                                onChange={this.changeMobile}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>Teacher Email : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="email"
                                      placeholder="Teacher Email"
                                      value={teacherEmail}
                                onChange={this.changeEmail}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Teacher Qualification : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Teacher Qualification"
                                      value={teacherQualification}
                                onChange={this.changeQualification}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Teacher Image :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="file"
                                      name="img"
                                      onChange={(e) => this.changeImage(e)}
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div class="form-group">
                                  <h5>
                                    Teacher Address :{" "}
                                    <span class="required"></span>
                                  </h5>
                                  <div class="controls">
                                    <textarea
                                      name="textarea"
                                      id="textarea"
                                      cols="4"
                                      rows="7"
                                      class="form-control"
                                      value={this.teacherAddress}
                                onChange={this.changeAddress}
                                      required
                                      placeholder="Teacher Address"
                                    ></textarea>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <h5>
                                    Select State :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      value={stateIdFk}
                                onChange={this.loadCity}
                                      required
                                      className="form-control"
                                    >
                                      <option>Select State</option>
                                {this.state.states.map((e, key) => {
                                  //console.log(e);
                                  return (
                                    <option
                                      key={key}
                                      value={e.stateIdPk}
                                      selected={stateIdFk === e.stateIdPk}
                                    >
                                      {e.stateName}{" "}
                                    </option>
                                  );
                                })}
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Select City :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      required
                                      value={cityIdFk} onChange={this.changeCity}
                                      className="form-control"
                                    >
                                      <option>Select City</option>
                                {this.state.cities.map((e, key) => {
                                  return (
                                    <option
                                      key={key}
                                      value={e.cityIdPk}
                                      selected={cityIdFk === e.cityIdPk}
                                    >
                                      {e.cityName}
                                    </option>
                                  );
                                })}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div class="form-group">
                                <div className="col-lg-6 col-md-12">
                                  <h5>
                                    {" "}
                                    Subjects : <span class="required"></span>
                                  </h5>{" "}
                                  <br />
                                  {subjects.map((sub, index) =>
                                index % 2 === 0 ? (
                                  <div className="col-md-6">
                                    <input
                                      type="checkbox"
                                      id="checkid"
                                      onChange={this.onSubjectCheck(
                                        index,
                                        sub.subjectIdPk
                                      )} 
                                      value="{sub.subjectIdPk}"
                                    /> &nbsp;&nbsp;&nbsp;
                                    {sub.subjectName}
                                  </div>
                                ) : (
                                  <div className="col-md-6">
                                    <input
                                      type="checkbox"
                                      id="checkid"
                                      onChange={this.onSubjectCheck(
                                        index,
                                        sub.subjectIdPk
                                      )}
                                      value="{sub.subjectIdPk}"
                                    />{" "} &nbsp;&nbsp;&nbsp;
                                    {sub.subjectName}
                                  </div>
                                )
                              )}
                                  {/* <div class="controls">
                                    <div className="col-md-4">
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="x"
                                            name="styled_checkbox"
                                            required
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            Maths
                                          </span>
                                        </label>
                                      </fieldset>
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="y"
                                            name="styled_checkbox"
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            English
                                          </span>
                                        </label>
                                      </fieldset>
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="x"
                                            name="styled_checkbox"
                                            required
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            Hindi
                                          </span>
                                        </label>
                                      </fieldset>
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="x"
                                            name="styled_checkbox"
                                            required
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            Gujarati
                                          </span>
                                        </label>
                                      </fieldset>
                                    </div>
                                    <div className="col-md-4">
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="x"
                                            name="styled_checkbox"
                                            required
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            Polity
                                          </span>
                                        </label>
                                      </fieldset>
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="x"
                                            name="styled_checkbox"
                                            required
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            History
                                          </span>
                                        </label>
                                      </fieldset>
                                      <fieldset>
                                        <label class="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            value="x"
                                            name="styled_checkbox"
                                            required
                                            class="custom-control-input"
                                          />
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">
                                            {" "}
                                            Geography
                                          </span>
                                        </label>
                                      </fieldset>
                                    </div>
                                  </div> */}
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

export default AddTeacher;
