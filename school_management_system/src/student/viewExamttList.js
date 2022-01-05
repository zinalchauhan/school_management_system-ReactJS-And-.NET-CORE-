import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class viewExamttList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quepapers: [],
            isActive: 0,
        };
    }

    refreshList(id) {
        fetch(Variables.STUD_API_URL + "questionpaperList/" + id)
            .then((response) => response.json())
            .then((res) => {
                if (res.result === "success") {
                    console.log(res);
                    this.setState({ quepapers: res.data });
                }
            });
    }

    componentDidMount() {
        console.log(sessionStorage.getItem("standardId")?.toString());
        this.refreshList(sessionStorage.getItem("standardId")?.toString());
    }

    render(){

        const {
            quepapers,
        } = this.state;

        return (
            <div>
                <Header></Header>
                <div className="robust-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12">
                                <h2 className="content-header-title mb-0">Exam Time Table List</h2>
                                <div className="row breadcrumbs-top">
                                    <div className="breadcrumb-wrapper col-xs-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Exam Time Table List</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <section id="minimal-statistics-bg">

                            <div class="row">
                            
                                <div class="col-xl-3 col-lg-6 col-xs-12">
                                    <div class="card bg-purple" >
                                        <div class="card-body" className="timetable-item my-card">
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>Priliminary</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-xs-12">
                                    <div class="card bg-purple" >
                                        <div class="card-body" className="timetable-item my-card">
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>SA - 1</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-xs-12">
                                    <div class="card bg-purple" >
                                        <div class="card-body" className="timetable-item my-card">
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>Unit Test</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-xs-12">
                                    <div class="card bg-purple" >
                                        <div class="card-body" className="timetable-item my-card">
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>Formative</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-xs-12">
                                    <div class="card bg-purple" >
                                        <div class="card-body" className="timetable-item my-card">
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>Final</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                
                                <div class="col-xl-12 col-lg-6 col-xs-12">
                                    <div class="row" id="contingent">

                                        <div class="card-body collapse in">

                                            <div class="table-responsive">
                                                <table class="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th> # </th> 
                                                            <th>Exam Date </th>
                                                            <th>Subject</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                            <tr >
                                                                <td> 1 </td>
                                                                <td> 12-12-2021 </td>
                                                                <td>Gujarati </td>
                                                            </tr>

                                                            <tr >
                                                                <td> 2 </td>
                                                                <td> 13-12-2021 </td>
                                                                <td>Hindi </td>
                                                            </tr>

                                                            <tr >
                                                                <td> 3 </td>
                                                                <td> 14-12-2021 </td>
                                                                <td>English </td>
                                                            </tr>

                                                            <tr >
                                                                <td> 4 </td>
                                                                <td> 15-12-2021 </td>
                                                                <td>Maths </td>
                                                            </tr>

                                                            <tr >
                                                                <td> 5 </td>
                                                                <td> 16-12-2021 </td>
                                                                <td>Sanskrit </td>
                                                            </tr>

                                                            <tr >
                                                                <td> 6 </td>
                                                                <td> 17-12-2021 </td>
                                                                <td>Science </td>
                                                            </tr>
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }

}

export default viewExamttList