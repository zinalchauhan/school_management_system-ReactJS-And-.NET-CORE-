import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";
import $ from "jquery";

export class AddExamTimeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examtt: [],
      exams: [],
      mediums: [],
      examnames:[],
      dates: [],
      subject: [],
      standards: [],
      modelTitle: "",
      examStartDate: "",
      examIdFk: 0,
      exam_date: "",
      mediumIdFk: 0,
      examTtIdPk: 0,
      subjectIdFk: [],
      standardIdFk: 0,
      isActive: 0,
    };
  }

  getExamList() {
    fetch(Variables.API_URL + "examList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ exams: res.data });
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
          this.setState({ subject: res.data });
        }
      });
  }

  changeMediumName = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  changeSubject = (e, index) => {
    console.log(e.target.value);
    this.setState((state) => {
      state.subjectIdFk[index] = e.target.value;
    });
  };

  changeStandard = (e) => {
    console.log(e.target.value);
    this.setState({ standardIdFk: e.target.value });
  };

  changeExam = (e) => {
    console.log(e.target.value);
    //console.log("Before :: "+e.day);
    this.setState({
      examIdFk: e.target.value,
    });
    fetch(Variables.API_URL + "getExam/" + e.target.value)
      .then((res) => res.json())
      .then((response) => {
        
        this.setState((state) => {
          state.dates[0] =response.data.examStartDate; 
        });

        console.log(response.data.examStartDate);
        console.log(response.data.examEndDate);
        var dates = this.getDates(
          new Date(response.data.examStartDate),
          new Date(response.data.examEndDate)
        );

        //$("#examdate01").val(response.data.examStartDate);

        var numRepeat = dates.length;

        console.log("No Of Dates" + numRepeat);

        for (var i = 1; i <= numRepeat -1; i++) {
          //	var newEl = $(el).after(el.cloneNode(true));

          var today = this.GetFormattedDate(dates[i]);

          console.log(today);

          this.setState((state) => {
            state.dates[i] =today; 
          });
          this.nextElement($("#startdate"), i);
        }
      })
      .catch((err) => console.log(err));
    //console.log("Aafter :: "+ day);
  };

  GetFormattedDate(today) {
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    var today = yyyy + "-" + mm + "-" + dd;
    return today;
  }

  getDates(startDate, endDate) {
    var dates = [],
      currentDate = startDate,
      addDays = function (days) {
        var date = new Date(this.valueOf());

        date.setDate(date.getDate() + days);

        return date;
      };

    while (currentDate <= endDate) {
      dates.push(currentDate);

      currentDate = addDays.call(currentDate, 1);
    }

    return dates;
  }

  nextElement(element, i) {
    var _ = this;
    var newElement = element.clone();
    var id = this.state.current_id + 1;
    this.state.current_id = id;
    if (id < 10) id = "0" + id;
    newElement.attr("name", element.attr("id").split("01")[0] + id);
    var field = $("input", newElement).attr("id");
    $("input", newElement).attr("name", field.split("01")[0] + id);
    $("input", newElement).val(this.state.dates[i]);

    var field1 = $("select", newElement).attr("id");
    $("select", newElement).attr("id", field1.split("01")[0] + id);
    $("select", newElement).attr("name", field1.split("01")[0] + id);
    $("select", newElement).on("change", (e) => _.changeSubject(e, i));
    $("select", newElement).val(this.state.subjectIdFk[i]);
    newElement.appendTo($("#exam_tab"));
    //
  }

  change = (e) => {
    console.log(e.target.value);
    this.setState({ examStartDate: e.target.value });
  };

  componentDidMount() {
    this.loadMedium();
    this.getStandardList();
    this.getSubjectList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ examTtIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ examTtIdPk: 0 });
    }
    this.setState((state) => {
      var date =new Date();
      var today = date.getFullYear()+"-"+ (date.getMonth()+1)+"-"+date.getDate();
      state.dates[0]=today;
    });
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

  loadexam (mediumId) {
    console.log("Medium ID ::: " + mediumId);
    this.setState({
      mediumIdFk: mediumId,
    });
    fetch(Variables.API_URL + "getExamByMedium/" + mediumId)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          exams: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  // loadSubject = (e) => {
  //   console.log("Class ID ::: " + e.target.value);
  //   this.setState({
  //     classIdFk: e.target.value,
  //   });
  //   fetch(Variables.API_URL + "subTeachList/" + e.target.value)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         subtechs: response.data,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.examTtIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    //alert("in insert..");
    for (let index = 0; index < this.state.dates.length; index++) {
      console.log(this.state.dates[index]);
      console.log(this.state.mediumIdFk);
      console.log(this.state.standardIdFk);
      console.log(this.state.subjectIdFk[index]);

      fetch(Variables.API_URL + "insertExamttList", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          examIdFk: this.state.examIdFk,
          subjectIdFk: this.state.subjectIdFk[index],
          examDate: this.state.dates[index],
          standardIdFk: this.state.standardIdFk,
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

   this.props.history.push("/viewExamTimeTable");
  }

  update() {
    alert("in update..");
    fetch(Variables.API_URL + "updateExamttList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        examTtIdPk: this.state.examTtIdPk,
        mediumIdFk: this.state.mediumIdFk,
        subjectIdFk: this.state.subjectIdFk[0],
        examDate: this.state.dates[0],
        standardIdFk: this.state.standardIdFk,
        examIdFk: this.state.examIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewExamTimeTable");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables.API_URL + "getExamtt/" + id, {
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
          this.setState((state)=>{
           state.subjectIdFk[0]= result.data.subjectIdFk
           state.mediumIdFk= result.data.mediumIdFk
           state.dates[0]= result.data.examDate
           state.standardIdFk= result.data.standardIdFk
           state.examIdFk=result.data.examIdFk
          });
          this.loadexam(result.data.mediumIdFk);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    const {
      examtt,
      exams,
      mediums,
      dates,
      subject,
      standards,
      examnames,
      modelTitle,
      examStartDate,
      examIdFk,
      exam_date,
      mediumIdFk,
      examTtIdPk,
      subjectIdFk,
      standardIdFk,
      standardIdPk,
      examIdPk,
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
                        <h4 className="card-title">Exam Time Table</h4>
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
                                      onChange={(e) => this.loadexam(e.target.value)}
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
                              <div className="col-md-12">
                                <div className="col-lg-6 col-md-6">
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
                                        onChange={this.changeStandard}
                                        value={standardIdFk}
                                      >
                                        <option value="0">
                                          Select Standard
                                        </option>
                                        {standards.map((std) => (
                                          <option
                                            value={std.standardIdPk}
                                            selected={
                                              standardIdPk === std.standardIdPk
                                            }
                                          >
                                            {std.standardName}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <h5>
                                      Select Exam :{" "}
                                      <span className="required"></span>
                                    </h5>
                                    <div className="controls">
                                      <select
                                        name="exam"
                                        id="exam"
                                        className="form-control"
                                        onChange={this.changeExam}
                                        value={examIdFk}
                                      >
                                        <option value="0">Select Exam</option>
                                        {exams.map((exm) => (
                                          <option
                                            value={exm.examIdPk}
                                            selected={examIdFk === exm.examIdPk}
                                          >
                                            {exm.examName}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  </div>
                              
                              </div>
                            </div>

                            <div id="exam_tab" className="row">
                              <div id="startdate" className="col-md-12">
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <h5>Exam Date : </h5>
                                    <div className="controls">
                                      <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={this.state.dates[0]}
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
                                          this.changeSubject(e, 0)
                                        }
                                        value={this.state.subjectIdFk[0]}
                                      >
                                        <option value="0"> Select Subject </option>
                                    {this.state.subject.map((sub, index) => (
                                      <option
                                        key={index}
                                        value={sub.subjectIdPk}
                                        selected={
                                          this.state.subjectIdFk[0] === sub.subjectIdPk
                                        }
                                      >
                                        {sub.subjectName}
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

export default AddExamTimeTable;
