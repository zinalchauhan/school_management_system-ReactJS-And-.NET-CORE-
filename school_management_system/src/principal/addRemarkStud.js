import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "../admin/includes/footer";
import { Variables } from "../Variables";
import { data } from "jquery";

export class addRemarkStud extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          classes: [],
          studs: [],
          remarkDetail: "",
          modelTitle: "",
          classIdFk: 0,
        };
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      getClass() {
        fetch(Variables.API_URL + "classList")
          .then((response) => response.json())
          .then((res) => {
            if (res.result === "success") {
              this.setState({ classes: res.data });
            }
          });
      }
    
      changeRemark = (e) => {
        this.setState({ remarkDetail: e.target.value });
      }
    
      getStudent(id) {
        fetch(Variables.PRINCIPAL_API_URL + "classStudList/" + id , {
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
                this.setState({ studs: res.data });
                console.log({ studs: res.data });
              }
            },
            (error) => {
              alert("Failed");
            }
          );
      }
    
      changeClass= (e) => {
        console.log(e.target.value);
        this.setState({ classIdFk: e.target.value });
        this.getStudent(e.target.value);
      };
    
      componentDidMount() {
        console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
        this.getClass();
    }
      }
    
      onSubmit = (sid) => {
          return event => {
            event.preventDefault()
            console.log(sid)
            this.insert(sid)
          }
      };
    
      insert(sid) {
        //alert("in");
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    
        fetch(Variables.PRINCIPAL_API_URL + "insertRemarkList", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectTeacherIdFk: sessionStorage.getItem("userId")?.toString(),
            userType: "principal",
            remarkDetail: this.state.remarkDetail,
            studentIdFk: sid,
            remarkDate: date
          }),
        })
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              this.props.history.push("/principal");
            },
            (error) => {
              alert("Failed");
            }
          );
      }
    
    

  render() {

    const { classes, classIdFk, studs } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Student List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Student List</li>
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
                        <h4 className="card-title"> Class </h4>
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
                        <form className="form-horizontal">
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                  <h5>
                                    Select Class :{" "}
                                    <span className="required"></span>
                                  </h5>
                                  <div className="controls">
                                    <select
                                      name="div"
                                      id="div"
                                      className="form-control"
                                      onChange={this.changeClass}
                                      value={classIdFk}
                                    >
                                      <option value="0">Select Class</option>
                                      {classes.map((cls) => (
                                        <option
                                          value={cls.classIdPk}
                                          selected={
                                            classIdFk === cls.classIdPk
                                          }
                                        >
                                          {cls.standardName} - {cls.divisionName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          
                          </form>
                          <br />
                          <br />
                          <table className="table table-striped table-bordered ">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Student RollNo </th>
                                <th>Student Name</th>
                                <th>Remark </th>
                              </tr>
                            </thead>
                            <tbody>
                              {studs.map((stud, index) => (
                                <tr key={index}>
                                  <td> {index + 1} </td>
                                  <td> {stud.studentRollNo} </td>
                                  <td> {stud.studentFname} {stud.studentMname} {stud.studentLname}  </td>
                                  <td>
                                  <button type="button" class="btn  btn-success block btn-lg" data-toggle="modal"
                                        data-target="#GiveRemark">
                                        Give Remark
                                        </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <th>#</th>
                              <th>Student RollNo </th>
                              <th>Student Name</th>
                              <th>Remark </th>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {studs.map((stud, index) => (
              <div class="modal fade text-xs-left" id="GiveRemark" tabindex="-1" role="dialog" aria-labelledby="myModalLabel34"
              aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="modal-title" id="myModalLabel34">Give Remark</h3>
                  </div>

                  <form onSubmit={this.onSubmit(stud.studentIdPk)}>
                    <div class="modal-body">
                      <div class="form-group">

                        <div class="controls">
                        <textarea 
                        placeholder="Remark Details.."
                        rows="3" cols="70"
                        onChange={this.changeRemark}
                        
                        >

                        </textarea>
                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <input type="reset" class="btn btn-outline-secondary btn-lg" data-dismiss="modal" value="close" /> &nbsp;&nbsp;&nbsp;
                      <input type="submit" class="btn btn-outline-primary btn-lg" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            ))}
              {/* <!-- File export table --> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default addRemarkStud;