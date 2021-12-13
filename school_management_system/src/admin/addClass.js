import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      standards: [],
      divisions: [],
      classes: [],
      modelTitle: "",
      classIdPk: 0,
      standardIdFk: 0,
      divisionIdFk: 0,
      isActive: 0,
    };
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

  getDivisionList() {
    fetch(Variables.API_URL + "divisionList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          this.setState({ divisions: res.data });
        }
      });
  }

  changeStandardName = (e) => {
    console.log(e.target.value);
    this.setState({ standardIdFk: e.target.value });
  };

  changeDivisionName = (e) => {
    console.log(e.target.value);
    this.setState({ divisionIdFk: e.target.value });
  };

  componentDidMount() {
    this.getStandardList();
    this.getDivisionList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ classIdPk: this.props.match.params.id });
      this.getClass(this.props.match.params.id);
    } else {
      this.setState({ classIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.classIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    console.log("in Insert");
    fetch(Variables.API_URL + "insertClassList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        standardIdFk: this.state.standardIdFk,
        divisionIdFk: this.state.divisionIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewClass");
        },
        (error) => {
          
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateClassList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classIdPk: this.state.classIdPk,
        standardIdFk: this.state.standardIdFk,
        divisionIdFk: this.state.divisionIdFk,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/admin/viewClass");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  getClass(id) {
    fetch(Variables
      .API_URL + "getClass/" + id, {
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
            standardIdFk: result.data.standardIdFk,
            divisionIdFk: result.data.divisionIdFk,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    const {
      standards,
      divisions,
      classes,
      modelTitle,
      classIdPk,
      standardIdFk,
      divisionIdFk,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Class </h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a>Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add Class</li>
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
                        <h4 className="card-title">Class</h4>
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
                            novalidate
                          >
                            <div className="row">
                              <div className="col-md-6">
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
                              </div>

                              <div className="col-md-6">
                              <div className="form-group">
                                  <h5>
                                    Select Division :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="div"
                                      id="div"
                                      className="form-control"
                                      onChange={this.changeDivisionName}
                                      value={divisionIdFk}
                                    >
                                      <option value="0">Select Division</option>
                                      {divisions.map((div) => (
                                        <option
                                          value={div.divisionIdPk}
                                          selected={
                                            divisionIdFk === div.divisionIdPk
                                          }
                                        >
                                          {div.divisionName}
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
                                <button type="reset" className="btn btn-danger">
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

export default AddClass;
