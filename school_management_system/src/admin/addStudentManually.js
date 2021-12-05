import react from "react";
import { Component } from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Variables } from "../Variables";

export class AddStudentManually extends Component {
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
      file: "",
    };
  }

  setFile(e) {
    this.setState({ file: e.target.files[0] });
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
    console.log(e.target.value);
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
    console.log(e.target.value);
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
    alert("Load");
    this.getMediumList();
    this.getClassList();
    this.getCategoryList();
   
    if (this.props.match.params.id !== undefined) {
      console.log("ID ::: "+this.props.match.params.id);
      this.setState({ studentIdPk: this.props.match.params.id });
      this.OnGetData(this.props.match.params.id);
    } else {
      this.setState({ studentIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    //this.setState({ dept_name: event.target.departmentname.value });
    if (this.state.studentIdPk !== 0) {
      this.update(event);
    } else {
      this.insert(event);
    }
  };

  insert(e) {
    // console.log(this.state.file);
    const formData = new FormData();
    formData.append("file", this.state.file, this.state.file.name);
    formData.append("studentRollNo", this.state.studentRollNo);
    formData.append("studentGrNo", this.state.studentGrNo);
    formData.append("mediumIdFk", this.state.mediumIdFk);
    formData.append("classIdFk", this.state.classIdFk);
    formData.append("studentFname", this.state.studentFname);
    formData.append("studentMname", this.state.studentMname);
    formData.append("studentLname", this.state.studentLname);
    formData.append("studentImage",this.state.studentImage);
    if(this.state.file != ''){
    formData.append("file", this.state.file, this.state.file.name);
    }
    formData.append("studentDob", this.state.studentDob);
    formData.append("studentGender", this.state.studentGender);
    formData.append("motherMobile", this.state.motherMobile);
    formData.append("fatherMobile", this.state.fatherMobile);
    formData.append("categoryIdFk", this.state.categoryIdFk);

    fetch(Variables.API_URL + "insertStudentList", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewStudent");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  update(e) {

    const formData = new FormData();
    formData.append("file", this.state.file, this.state.file.name);
    formData.append("studentIdPk", this.state.studentIdPk);
    formData.append("studentRollNo", this.state.studentRollNo);
    formData.append("studentGrNo", this.state.studentGrNo);
    formData.append("mediumIdFk", this.state.mediumIdFk);
    formData.append("classIdFk", this.state.classIdFk);
    formData.append("studentFname", this.state.studentFname);
    formData.append("studentMname", this.state.studentMname);
    formData.append("studentLname", this.state.studentLname);
    formData.append("studentImage",this.state.studentImage);
    if(this.state.file != ''){
    formData.append("file", this.state.file, this.state.file.name);
    }
    formData.append("studentDob", this.state.studentDob);
    formData.append("studentGender", this.state.studentGender);
    formData.append("motherMobile", this.state.motherMobile);
    formData.append("fatherMobile", this.state.fatherMobile);
    formData.append("categoryIdFk", this.state.categoryIdFk);

    fetch(Variables.API_URL + "updateStudentList", {
      method: "POST",
      body: formData, })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewStudent");
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

  // reset() {
  //   this.state.studentRollNo = 0;
  //   this.state.studentGrNo = 0;
  //   this.state.studentFname = 0;
  //   this.state.studentMname = 0;
  //   this.state.studentLname = 0;
  //   this.state.studentDob = 0;
  //   this.state.studentGender = 0;
  //   this.state.motherMobile = 0;
  //   this.state.fatherMobile = 0;
  // }

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
      categoryIdFk,
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
                        <a >Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Add Student Manually
                      </li>
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
                          <form
                            className="form-horizontal"
                            onSubmit={this.onSubmit.bind(this)}
                          >
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Student Roll No. :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="rno"
                                      value={studentRollNo}
                                      onChange={this.changeRollno}
                                      placeholder="Student Roll No."
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Student GR No. :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="grno"
                                      value={studentGrNo}
                                      onChange={this.changeGrno}
                                      placeholder="Student Gr No."
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Student First Name : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="fname"
                                      placeholder="Student First Name"
                                      value={studentFname}
                                      onChange={this.changeStudentFname}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Student Middle Name : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="mname"
                                      placeholder="Student Middle Name"
                                      value={studentMname}
                                      onChange={this.changeStudentMname}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Student Last Name : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="lname"
                                      placeholder="Student Last Name"
                                      value={studentLname}
                                      onChange={this.changeStudentLname}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Mother Mobile No. : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="mothermobile"
                                      placeholder="Mother Mobile No."
                                      value={motherMobile}
                                      onChange={this.changeMotherMobile}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Father Mobile No. : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="fathermobile"
                                      placeholder="Father Mobile No."
                                      value={fatherMobile}
                                      onChange={this.changeFatherMobile}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Gender : <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="radio"
                                      value="male"
                                      checked={"male" === studentGender}
                                      onChange={this.changeStudentGender}
                                      name="gender"
                                    />{" "}
                                    &nbsp; Male &nbsp;&nbsp;&nbsp;
                                    <input
                                      type="radio"
                                      value="female"
                                      checked={"female" === studentGender}
                                      onChange={this.changeStudentGender}
                                      name="gender"
                                    />{" "}
                                    &nbsp; Female &nbsp;&nbsp;&nbsp;
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Student Image :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="file"
                                      name="img"
                                      onChange={(e) => this.setFile(e)}
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>
                                    Date of Birth :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="date"
                                      className="form-control"
                                      placeholder="MM/DD/YYYY"
                                      onChange={this.changeStudentDob}
                                    />
                                  </div>
                                </div>
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
                                <div className="form-group">
                                  <h5>
                                    Select Class :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      className="form-control"
                                      onChange={this.changeClass}
                                      value={classIdFk}
                                    >
                                      <option value="0">Select Class </option>
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
                                <div className="form-group">
                                  <h5>
                                    Select Category :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="select"
                                      id="select"
                                      className="form-control"
                                      onChange={this.changeCategory}
                                      value={categoryIdFk}
                                    >
                                      <option value="0">Select Category</option>
                                      {categories.map((ctg) => (
                                        <option
                                          value={ctg.categoryIdPk}
                                          selected={
                                            categoryIdFk === ctg.categoryIdPk
                                          }
                                        >
                                          {ctg.categoryName}
                                        </option>
                                      ))}
                                    </select>
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

export default AddStudentManually;
