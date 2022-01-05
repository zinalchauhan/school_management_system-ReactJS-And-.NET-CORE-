import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class viewAttendanceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notices: [],
            isActive: 0,
        };
    }

    refreshList(std) {
        fetch(Variables.STUD_API_URL + "noticeList/" + std)
            .then((response) => response.json())
            .then((res) => {
                if (res.result === "success") {
                    console.log(res);
                    this.setState({ notices: res.data });
                }
            });
    }

    componentDidMount() {
        this.refreshList(sessionStorage.getItem("standardId")?.toString());
    }

    render() {

        const {
            notices,
        }= this.state;

        return (
            <div>
                <Header></Header>
                <div className="robust-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12">
                                <h2 className="content-header-title mb-0">Attendance List</h2>
                                <div className="row breadcrumbs-top">
                                    <div className="breadcrumb-wrapper col-xs-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Attendance List</li>
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
                                                <h4 className="card-title">Attendance List</h4>
                                                <br />
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
                                                <table className="table table-striped table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            
                                                                <tr >
                                                                    <td>1</td>
                                                                    <td> 12-12-2021 </td>
                                                                    <td> P </td>  
                                                                </tr>

                                                                <tr >
                                                                    <td>2</td>
                                                                    <td> 13-12-2021 </td>
                                                                    <td> P </td>  
                                                                </tr>

                                                                <tr >
                                                                    <td>3</td>
                                                                    <td> 14-12-2021 </td>
                                                                    <td> A </td>  
                                                                </tr>

                                                                <tr >
                                                                    <td>4</td>
                                                                    <td> 15-12-2021 </td>
                                                                    <td> P </td>  
                                                                </tr>

                                                                <tr >
                                                                    <td>5</td>
                                                                    <td> 16-12-2021 </td>
                                                                    <td> P </td>  
                                                                </tr>
                                                           
                                                        </tbody>
                                                        <tfoot>
                                                        <tr>
                                                                <th>#</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
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

export default viewAttendanceList;