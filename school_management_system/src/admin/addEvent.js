import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddEvent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      mediums: [],
      modelTitle: "",
      eventIdPk: 0,
      mediumIdFk: 0,
      eventName: "",
      eventDetail: "",
      eventDate: "",
      eventImage: "",
      isActive: 0,
      files: [],
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

  changeMediumName = (e) => {
    console.log(e.target.value);
    this.setState({ mediumIdFk: e.target.value });
  };

  changeEventName = (e) => {
    console.log(e.target.value);
    this.setState({ eventName: e.target.value });
  };

  changeEventDetail = (e) => {
    console.log(e.target.value);
    this.setState({ eventDetail: e.target.value });
  };

  changeEventDate = (e) => {
    console.log(e.target.value);
    this.setState({ eventDate: e.target.value });
  };

  changeEventImage = (e) => {
    this.setState({ files: e.target.fiels });
  };

  componentDidMount() {
    this.getMediumList();
    if (this.props.match.params.id !== undefined) {
      this.setState({ eventIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ eventIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.eventIdPk !== 0) {
      this.update(event);
    } else {
      this.insert(event);
    }
  };

  insertImage(file, eventId) {

    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("eventIdFk", eventId);

    fetch(Variables.API_URL + "insertEventImgList", {
      method: "POST",
      body: formData,
    });
  }

  insert() {
    fetch(Variables.API_URL + "insertEventList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: this.state.eventName,
        eventDate: this.state.eventDate,
        mediumIdFk: this.state.mediumIdFk,
        eventDetail: this.state.eventDetail,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(this.state.files.length);
          for (let index = 0; index < this.state.files.length; index++) {
            this.insertImage(this.state.files[index], result.data);
          }
          this.props.history.push("/viewEvent");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  update() {
    fetch(Variables.API_URL + "updateEventList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventIdPk: this.state.eventIdPk,
        eventName: this.state.eventName,
        eventDate: this.state.eventDate,
        mediumIdFk: this.state.mediumIdFk,
        eventDetail: this.state.eventDetail,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/viewEvent");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onGetData(id) {
    fetch(Variables
      .API_URL + "getEvents/" + id, {
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
            eventName: result.data.eventName,
            eventDetail: result.data.eventDetail,
            eventDate: result.data.eventDate,
            eventImage: result.data.eventImage,
          });
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {

    const {
      events,
      mediums,
      modelTitle,
      eventIdPk,
      mediumIdFk,
      eventName,
      eventDetail,
      eventDate,
      eventImage,
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
                        <h4 className="card-title">Event</h4>
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
                          <form className="form-horizontal" onSubmit={this.onSubmit.bind(this)} novalidate>
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
                                  <h5>Event Name : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Event Name"
                                      value={this.state.eventName}
                                      onChange={this.changeEventName}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <h5>Event Date : </h5>
                                  <div className="controls">
                                    <input
                                      type="date"
                                      name="text"
                                      className="form-control"
                                      value={this.state.eventDate}
                                      onChange={this.changeEventDate}
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>Event Detail : </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="text"
                                      placeholder="Event Detail"
                                      value={this.state.eventDetail}
                                      onChange={this.changeEventDetail}
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                                {this.state.eventIdPk === 0 ? (
                                  <div className="form-group">
                                    <h5>
                                      Event Image :{" "}
                                      <span className="required"></span>
                                    </h5>
                                    <div className="controls">
                                      <input
                                        type="file"
                                        name="img"
                                        multiple
                                        onChange={(e) => this.setFile(e)}
                                        className="form-control"
                                        aria-invalid="false"
                                        required
                                      />
                                    </div>
                                  </div>
                                ) : (<></>)}
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

export default AddEvent;
