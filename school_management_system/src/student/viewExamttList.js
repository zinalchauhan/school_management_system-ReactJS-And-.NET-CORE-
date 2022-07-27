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
            exams: [],
            examtts: [],
            examId: 0,
        };
    }

    // getExam(id) {
    //     fetch(Variables.STUD_API_URL + "examList/" + id, {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then(
    //         (res) => {
    //           console.log(res);
    //           if (res.result === "success") {
    //             this.setState({ exams: res.data });
    //             res.data.forEach(element => {
                  
    //                 console.log(sessionStorage.getItem("standardId")?.toString());
    //                 console.log(element.settingIdPk);
    //                 this.getExamTimeTable(sessionStorage.getItem("standardId")?.toString(), element.examIdPk);
                 
    //             });
    //           }
    //         },
    //         (error) => {
    //           alert("Failed");
    //         }
    //       );
    //   }
    
    //   getExamTimeTable(id, eid,) {
    //     console.log("ID::::"+id);
    //     fetch(Variables.STUD_API_URL + "examtimetableList/" + id + "/" + eid, {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then(
    //         (res) => {
    //           console.log(res);
    //           if (res.result === "success") {
    //             this.setState({ examtts: res.data });
    //           }
    //         },
    //         (error) => {
    //           alert("Failed");
    //         }
    //       );
    //   }
    

      componentDidMount() {
        console.log(sessionStorage.getItem("isLogin"));
        if (sessionStorage.getItem("isLogin") === null) {
          window.location.href = `/`;
        } else {
        //this.getExam(sessionStorage.getItem("medId")?.toString());
        //this.getTimeTable(sessionStorage.getItem("semId")?.toString());
        }
      }

    
    render() {

        const { examtts, exams } = this.state;

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
                            {examtts.map((t, index) => (
                                <div class="col-xl-2 col-lg-6 col-xs-12">
                                    <div className="timetable" onClick={() => this.getExamTimeTable(sessionStorage.getItem("standardId")?.toString(),t.examIdPk)}>
                                        <div class="card-body" className={"timetable-item my-card"} style={{padding:"5px"}}>
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>{t.examName}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                
                                <div class="col-xl-12 col-lg-6 col-xs-12">
                                    <div class="row" id="contingent">

                                        <div class="card-body collapse in">

                                            <div class="table-responsive">
                                                <table class="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th> # </th>
                                                            <th>Date</th>
                                                            <th>Subject</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {examtts.map((tt, index) => (
                                                            <tr >
                                                                <td> {tt.examDate} </td>
                                                                <td> {tt.subjectName} </td>
                                                            </tr>
                                                        ))}
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