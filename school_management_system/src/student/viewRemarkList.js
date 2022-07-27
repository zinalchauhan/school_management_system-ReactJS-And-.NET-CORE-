import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class viewRemarkList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            remarks: [],

            isActive: 0,
        };
    }

    refreshList(id) {
        fetch(Variables.STUD_API_URL + "remarkList/" + id)
            .then((response) => response.json())
            .then((res) => {
                if (res.result === "success") {
                    console.log(res);
                    this.setState({ remarks: res.data });
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
            remarks,
        }= this.state;
        return (
            <div>
                <Header></Header>
                <div className="robust-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12">
                                <h2 className="content-header-title mb-0">Remark List</h2>
                                <div className="row breadcrumbs-top">
                                    <div className="breadcrumb-wrapper col-xs-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Remark List</li>
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
                                                <h4 className="card-title">Remark List</h4>
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
                                                {remarks.map((r, index) => (
                                                    <div class="row">
                                                   
                                                        <div class="col-xs-12">
                                                            <div class="card">
                                                                <div class="card-header">
                                                                    <h5 class="card-title">{index+1} - Remark By : {r.teacherName}</h5>
                                                                    <hr/>
                                                                    <a class="heading-elements-toggle"><i class="icon-ellipsis font-medium-3"></i></a>
                                                                    
                                                                        
                                                                        <p> {r.remarkDetail} </p>
                                                                        <p> {r.remarkDate} </p>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                   
                                                    </div>
                                                     ))}
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

export default viewRemarkList;