import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class viewLeaveRequestList extends Component {

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

    refreshList(id) {
        fetch(Variables.STUD_API_URL + "leaveRequestList/" + id)
            .then((response) => response.json())
            .then((res) => {
                if (res.result === "success") {
                    console.log(res);
                    this.setState({ leave: res.data });
                }
            });
    }

    componentDidMount() {

        console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
        this.refreshList(sessionStorage.getItem("userId")?.toString());
    }
    }

    render() {
        const {
            leave,
        } = this.state;

        return (
            <div>
                <Header></Header>
                <div className="robust-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12">
                                <h2 className="content-header-title mb-0">LeaveRequest List</h2>
                                <div className="row breadcrumbs-top">
                                    <div className="breadcrumb-wrapper col-xs-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">LeaveRequest List</li>
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
                                                <h4 className="card-title">LeaveRequest List</h4>
                                                <br />
                                                <Link
                                                    to="/student/addLeaveRequest"
                                                    class="btn btn-outline-primary edit-item-btn"
                                                >
                                                    Add New Leave Request
                                                </Link>
                                                <a className="heading-elements-toggle">
                                                    <i className="icon-ellipsis font-medium-3"></i>
                                                </a>
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
                                                <div className="card-block card-dashboard" style={{ overflow: "scroll" }}>

                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="card-block">
                                                                {leave.map((lv, index) => (
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <div class="card-block">
                                                                                <h4 class="card-title">{index + 1}. </h4>
                                                                                <b> Date : </b> {lv.addedOn} <br />
                                                                                <b> title : </b> {lv.leaveRequestTitle} <br />
                                                                                <b> Details : </b>{lv.leaveRequestDetail} <br />
                                                                                <b> Status : </b>  {lv.status === 1
                                                                                        ? "Accepted"
                                                                                        : lv.status === 2
                                                                                        ? "Rejected"
                                                                                        : "Waiting For Response"}
                                                                            </div>

                                                                        </div>
                                                                    </div> 
                                                                ))}
                                                            </div>

                                                            <div class="card-block">

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- File export table --> */}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default viewLeaveRequestList;