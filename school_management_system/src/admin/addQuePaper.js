import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddQuePaper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quepapers: [],
      mediums: [],
      standards: [],
      subjects: [],
      modelTitle: "",
      questionPaperIdPk: 0,
      questionPaperIdFk: 0,
      mediumIdFk: 0,
      subjectIdFk: 0,
      standardIdFk: 0,
      academicYear: 0,
      paperImageName : "",
      files: [],
      isActive: 0,
    };
  }

  setFile(e) {
    this.setState({ files: e.target.files });
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

  getStandardList() {
    fetch(Variables.API_URL + "standardList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ standards: res.data });
        }
      });
  }

  getSubjectList() {
    fetch(Variables.API_URL + "subjectList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ subjects: res.data });
        }
      });
  }

  changeMediumName = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  changeSubjectName = (e) => {
    console.log(e.target.value);
    this.setState({ subjectIdFk: e.target.value });
  };

  changeStandardName = (e) => {
    console.log(e.target.value);
    this.setState({ standardIdFk: e.target.value });
  };

  changeAcademicYear = (e) => {
    console.log(e.target.value);
    this.setState({ academicYear: e.target.value });
  };

  changePaperImage = (e) => {
    this.setState({ files: e.target.fiels });
  };

  componentDidMount() {
    this.getMediumList();
    this.getStandardList();
    this.getSubjectList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ questionPaperIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ questionPaperIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.questionPaperIdPk !== 0) {
      this.update(event);
    } else {
      this.insert(event);
    }
  };

  insertImage(file,paperId) {

    const formData = new FormData();
    formData.append("file",file,file.name);
    formData.append("questionPaperIdFk",paperId);

    fetch(Variables.API_URL + "insertQueImgList", {
      method: "POST",
      body:formData,
    });
  }

  insert() {
    fetch(Variables.API_URL + "insertQuePaperList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectIdFk: this.state.subjectIdFk,
        standardIdFk: this.state.standardIdFk,
        mediumIdFk: this.state.mediumIdFk,
        academicYear: this.state.academicYear,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(this.state.files.length);
          for(let index = 0; index < this.state.files.length ; index++){
            this.insertImage(this.state.files[index] , result.data); 
          }
          this.props.history.push("/admin/viewQuePaper");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateQuePaperList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionPaperIdPk: this.state.questionPaperIdPk,
        subjectIdFk: this.state.subjectIdFk,
        standardIdFk: this.state.standardIdFk,
        mediumIdFk: this.state.mediumIdFk,
        academicYear: this.state.academicYear,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewQuePaper");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables
      .API_URL + "getQuePaper/" + id, {
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
            mediumIdFk: result.data.mediumIdFk,
            standardIdFk: result.data.standardIdFk,
            subjectIdFk: result.data.subjectIdFk,
            academicYear: result.data.academicYear,
            paperImageName: result.data.paperImageName,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {

    const {
      quepapers,
      mediums,
      standards,
      subjects,
      modelTitle,
      questionPaperIdPk,
      questionPaperIdFk,
      mediumIdFk,
      subjectIdFk,
      standardIdFk,
      academicYear,
      paperImageName ,
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
                        <h4 className="card-title">Question Paper</h4>
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
                          <form className="form-horizontal" novalidate onSubmit={this.onSubmit.bind(this)} >
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
                                    Select Standard :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                  <select
                                      name="std"
                                      id="std"
                                      className="form-control"
                                      onChange={this.changeStandardName}
                                      value={standardIdFk}
                                    >
                                      <option value="0">Select Standard</option>
                                      {standards.map((std) => (
                                        <option
                                          value={std.standardIdPk}
                                          selected={
                                            standardIdFk === std.standardIdPk
                                          }
                                        >
                                          {std.standardName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                
                              <div className="form-group">
                                  <h5>
                                    Select Subject :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                  <select
                                      name="sub"
                                      id="sub"
                                      className="form-control"
                                      onChange={this.changeSubjectName}
                                      value={subjectIdFk}
                                    >
                                      <option value="0">Select Subject</option>
                                      {subjects.map((sub) => (
                                        <option
                                          value={sub.subjectIdPk}
                                          selected={
                                            subjectIdFk === sub.subjectIdFk
                                          }
                                        >
                                          {sub.subjectName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                  <h5>Paper Year : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Paper Year"
                                      value={this.state.academicYear}
                                      onChange={this.changeAcademicYear}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                {this.state.questionPaperIdPk === 0 ? (
                                <div className="form-group">
                                  <h5>
                                    Paper images :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="file"
                                      name="img"
                                      multiple
                                      onChange={(e) => this.setFile(e)}
                                      className="form-control"
                                      aria-invalid = "false"
                                      required
                                    />
                                  </div>
                                </div>
                                ):(<></>)}
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

export default AddQuePaper;
