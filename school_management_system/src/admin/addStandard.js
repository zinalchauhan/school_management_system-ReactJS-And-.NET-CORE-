import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddStandard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      standards: [],
      modelTitle: "",
      standardName: "",
      standardIdPk: 0,
      isActive: 0,
    };
  }

  changeStandardName = (e) => {
    this.setState({ standardName: e.target.value });
  };


  componentDidMount() {
    console.log("Params:::", this.props.match.params.id);
    if (this.props.match.params.id !== undefined) {
      this.setState({ standardIdPk: this.props.match.params.id });
      this.OnGetData(this.props.match.params.id);
    } else {
      this.setState({ standardIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    //this.setState({ standardName: event.target.standardName.value });
    if (this.state.standardIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  insert() {
    console.log(this.state.standardName);
    fetch(Variables.API_URL + "insertStandardList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        standardName: this.state.standardName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
       //'/   this.props.history.push("/viewStandard");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateStandardList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        standardIdPk: this.state.standardIdPk,
        standardName: this.state.standardName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewStandard");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  OnGetData(id) {
    fetch(Variables.API_URL + "getStandard/" + id, {
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
          this.setState({ standardName: result.data.standardName });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  reset() {
    this.state.standardName = "";
  }

  render() {
    const { modelTitle, standardIdPk, standardName } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Standard</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add Standard</li>
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
                        <h4 className="card-title">Standard </h4>
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
                                    Standard Name:{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="subname"
                                      value={this.state.standardName}
                                      onChange={this.changeStandardName}
                                      placeholder="Standard Name"
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
                              <button
                                type="reset"
                                className="btn btn-danger"
                                onClick={this.reset()}
                              >
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

export default AddStandard;
