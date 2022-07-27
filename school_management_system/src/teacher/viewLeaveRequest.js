import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "../admin/includes/footer";
import { Variables } from "../Variables";

export class teacherViewLeaveRequest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reqs: [],
      classes: [],
      studs: [],
      classid : 0,
      status: "",
      leaveRequestIdPk: 0,
      classTeacherIdFk: 0
    };
  }

  getClassTeacher(id){
    fetch(Variables.TECH_API_URL + "checkClassTeacher/" + id,{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          if (res.result === "success") {
            this.setState({ classes: res.data });
            console.log("teacherId : ", + res.data.teacherIdFk);
            this.setState({ classid: res.data.classIdFk});
            this.getLeaveRequests(res.data.classIdFk);
          }
        },
        (error) => {
          alert("Failed...");
        }
      );
  }

  
  getLeaveRequests(classid) {
    fetch(Variables.TECH_API_URL + "classLeaveList/" + classid, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          if (res.result === "success") {
            this.setState({ reqs: res.data });
          }
          else{
            this.setState({reqs: []});
          }
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  componentDidMount() {
    //this.getLeaveRequests();
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.getClassTeacher(sessionStorage.getItem("userId")?.toString());
    }
  }

  update(leaveRequestIdPk,Status) {
    fetch(Variables.PRINCIPAL_API_URL + "updateLeaveReqList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        leaveRequestIdPk: leaveRequestIdPk,
        Status: Status,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.getLeaveRequests(this.state.classid);
          //this.props.history.push("/headOfDepartment/showLeaveRequest");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  onClick(leaveRequestIdPk, Status)
  {
    console.log("ID: ",leaveRequestIdPk);
    console.log("Status : ", Status);
    this.update(leaveRequestIdPk,Status);
  }

  render() {
    const { reqs, leaveRequestIdPk, status } = this.state;
    return (
      <div>
          <Header></Header>
          <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Leave Request List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Leave Request List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              {/* <!-- File export table --> */}
              <section id="file-export">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title"> Leave Request List </h4>
                        <a className="heading-elements-toggle">
                          <i className="icon-ellipsis font-medium-3"></i>
                        </a>
                        <br />
                        <div className="heading-elements">
                          <ul className="list-inline mb-0">
                            <li>
                              <a data-action="collapse">
                                <i className="icon-m	inus4"></i>
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
                        <div className="card-block card-dashboard">
                        
                        <div class="inner-item">
                        {reqs.map((r, index) => (
                          <div class="msg-item">
                            <div class="col-xs-10">
                              <p class="title"><b>Title : </b>{r.leaveRequestTitle}</p>
                              <p class="sent-by"><b>From : </b>{r.studentMname} </p>
                              <p class="msg-desc">
                                <b>Description : </b>{r.leaveRequestDetail}
                              </p>
                              <p class="msg-desc">
                                <b>Status : </b>{" "}
                                {r.status === 1
                                  ? "Accepted"
                                  : r.status === 2
                                  ? "Rejected"
                                  : "Waiting For Response"}
                              </p>
                              <p class="timestamp"> <b> Added On : </b>
                                <i class="fa fa-clock-o"></i> <i>{r.addedOn}</i>
                              </p>
                              {r.status === 0 ? <p> 
                                <button
                                class="btn btn-outline-primary remove-item-btn"
                                  onClick={() => this.onClick(
                                    r.leaveRequestIdPk,
                                    "1"
                                  )}
                                >
                                  Accept
                                </button>{" "}
                                &nbsp;&nbsp;&nbsp;
                                <button
                                class="btn btn-outline-danger remove-item-btn"
                                  onClick={() => this.onClick(
                                    r.leaveRequestIdPk,
                                    "2"
                                  )}
                                >
                                  Reject
                                </button>
                              </p>:""}
                            </div>
                            <div class="clearfix"></div>
                            <hr />
                          </div>
                        ))}
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
             
            </div>
          </div>
        </div>
          <Footer></Footer>
      </div>
    );
  }
}

export default teacherViewLeaveRequest;