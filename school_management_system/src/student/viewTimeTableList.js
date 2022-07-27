import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class viewTimeTableList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ttSettings: [],
            tts: [],
            settingId: 0,
            currentDay: "",
        };
    }

    getTimeTableSetting(id) {
        fetch(Variables.STUD_API_URL + "timetableSettingList/" + id, {
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
                this.setState({ ttSettings: res.data });
                console.log(this.state.currentDay);
                res.data.forEach(element => {
                  if(this.state.currentDay === element.day)
                  {
                    console.log(sessionStorage.getItem("classId")?.toString());
                    console.log(element.settingIdPk);
                    this.getTimeTable(sessionStorage.getItem("classId")?.toString(), element.settingIdPk,element.day);
                  }
                });
              }
            },
            (error) => {
              alert("Failed");
            }
          );
      }
    
      getTimeTable(id, tid,day) {
        console.log("ID::::"+id);
        this.setState({ currentDay: day });
        fetch(Variables.STUD_API_URL + "timeTableList/" + id + "/" + tid, {
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
                this.setState({ tts: res.data });
              }
            },
            (error) => {
              alert("Failed");
            }
          );
      }
    
      getWeekDay()
      {
        var day = new Date();
        if(day.getDay() === 1)
        {
          this.setState({ currentDay: "monday" });
        }
        if(day.getDay() === 2)
        {
          this.setState({ currentDay: "tuesday" });
        }
        if(day.getDay() === 3)
        {
          this.setState({ currentDay: "wednesday" });
        }
        if(day.getDay() === 4)
        {
          this.setState({ currentDay: "thursday" });
        }
        if(day.getDay() === 5)
        {
          this.setState({ currentDay: "friday" });
        }
        if(day.getDay() === 6)
        {
          this.setState({ currentDay: "saturday" });
        }
      }
    
      componentDidMount() {
        console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
        this.getWeekDay();
        this.getTimeTableSetting(sessionStorage.getItem("medId")?.toString());
        //this.getTimeTable(sessionStorage.getItem("semId")?.toString());
    }
      }

    render() {

        const { tts, ttSettings, currentDay } = this.state;

        return (
            <div>
                <Header></Header>
                <div className="robust-content content container-fluid">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12">
                                <h2 className="content-header-title mb-0">Time Table List</h2>
                                <div className="row breadcrumbs-top">
                                    <div className="breadcrumb-wrapper col-xs-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Time Table List</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <section id="minimal-statistics-bg">

                            <div class="row">
                            {ttSettings.map((t, index) => (
                                <div class="col-xl-2 col-lg-6 col-xs-12">
                                    <div className="timetable" onClick={() => this.getTimeTable(sessionStorage.getItem("classId")?.toString(),t.settingIdPk,t.day)}>
                                        <div class="card-body" className={"timetable-item my-card"+(currentDay === t.day ? "-active" :"")} style={{padding:"5px"}}>
                                            <div class="card-block">
                                                <div class="media">
                                                    <div class="media-body white text-xs-center">
                                                        <h3>{t.day}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                <br/><br/><br/>
                                <div class="col-xl-12 col-lg-6 col-xs-12">
                                    <div class="row" id="contingent">

                                        <div class="card-body collapse in">

                                            <div class="table-responsive">
                                              <br/><br/>                                                <table class="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Period No.</th>
                                                            <th>Subject</th>
                                                            <th>Teacher</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tts.map((tt, index) => (
                                                            <tr >
                                                                <td> {index + 1}  </td>
                                                                <td> {tt.subjectName} </td>
                                                                <td> {tt.teacherName} </td>
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

export default viewTimeTableList;
