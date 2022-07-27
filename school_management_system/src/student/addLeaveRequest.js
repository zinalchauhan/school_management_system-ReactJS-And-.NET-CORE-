import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class AddLeaveRequest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: [],
      leave: [],
      modelTitle: "",
      leaveRequestIdPk: 0,
      leaveRequestTitle: "",
      leaveRequestDetail: "",
      classId: 0,
      isActive: 0,
    };
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.refreshList(sessionStorage.getItem("userId")?.toString());
    //this.refreshList(sessionStorage.getItem("classId")?.toString());
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    //this.setState({ dept_name: event.target.departmentname.value });
    if (this.state.leaveRequestIdPk !== 0) {
      this.update();
    } else {
      this.insert();
    }
  };

  refreshList(id) {
    fetch(Variables.STUD_API_URL + "studentList/" + id)
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ students: res.data });
        }
      });
  }

  changeTitle = (e) => {
    this.setState({ leaveRequestTitle: e.target.value });
  };

  changeDetail = (e) => {
    this.setState({ leaveRequestDetail: e.target.value });
  };

  insert(userId, classId) {
    fetch(Variables.STUD_API_URL + "insertLeaveReqList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentIdFk: sessionStorage.getItem("userId"),
        classIdFk: sessionStorage.getItem("classId"),
        userType: sessionStorage.getItem("userType"),
        leaveRequestTitle: this.state.leaveRequestTitle,
        leaveRequestDetail: this.state.leaveRequestDetail,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/student/viewLeaveRequest");
        },
        (error) => {
          alert("Failed");
        }
      );
  }


  render() {

    const { leave,
      modelTitle,
      leaveRequestIdPk,
      leaveRequestTitle,
      leaveRequestDetail,
      classId } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">LeaveRequest</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Add LeaveRequest</li>
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
                        <h4 className="card-title">LeaveRequest </h4>
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
                                    Title :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="leave"
                                      value={leaveRequestTitle}
                                      onChange={this.changeTitle}
                                      placeholder="Title"
                                      className="form-control"
                                      required
                                      data-validation-required-message="This field is required"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                  <h5>
                                    Details :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">

                                    <textarea rows="5" cols="65" onChange={this.changeDetail} value={leaveRequestDetail} placeholder="Details" data-validation-required-message="This field is required">

                                    </textarea>
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
                              // onClick={this.reset()}
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

export default AddLeaveRequest;
