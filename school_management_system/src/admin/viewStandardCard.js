import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./includes/footer";
import Header from "./includes/header";

export class ViewStandardCard extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="robust-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12">
                                <h2 className="content-header-title mb-0">Standard List</h2>
                                <div className="row breadcrumbs-top">
                                    <div className="breadcrumb-wrapper col-xs-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Standard List
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            {/* <!-- Basic example section start --> */}
                            <section id="basic-examples">
            
                                <div className="row match-height">
                                    <div className="col-xl-3 col-md-6 col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div class ="card-block">
                                                <h4 class ="card-title">Standard - 1</h4>
                                                <Link to="/" class ="btn btn-outline-info">View Student</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- // Basic example section end --> */}

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ViewStandardCard;
