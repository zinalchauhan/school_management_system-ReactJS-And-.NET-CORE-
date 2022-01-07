import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewRemark extends Component {

  constructor(props) {
    super(props);

    this.state = {
      remarks: [],
      students: [],
      teachers: [],
      subjects: [],
      modelTitle: "",
      remarkIdPk: 0,
      studentIdFk: 0,
      teacherIdFk: 0,
      subjectIdFk: 0,
      userType : "",
      remarkDetail: "",
      remarkDate: "",
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "remarkList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ remarks: res.data });
        }
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteRemarkList/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === "success") {
            this.refreshList();
          }
        });
    }
  }

  render() {

    const {
      remarks,
      students,
      teachers,
      subjects,
      modelTitle,
      remarkIdPk,
      studentIdFk,
      teacherIdFk,
      subjectIdFk,
      userType ,
      remarkDetail,
      remarkDate,
    } = this.state;

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
                        <div className="card-block card-dashboard">
                          <table className="table table-striped table-bordered file-export">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Subject</th>
                                <th>Given By</th>
                                <th>Details</th>
                                <th> Date</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                            {remarks.map((rmk, index) => (
                                <tr key={index}>
                                  <td> {index + 1} </td>
                                  <td> {rmk.studentMname} {rmk.studentFname} </td>
                                  <td> {rmk.subjectName} </td>
                                  <td> {rmk.teacherName} <br/> ({rmk.userType})</td>
                                  <td> {rmk.remarkDetail} </td>
                                  <td> {rmk.remarkDate} </td>
                                  <td> 
                                  <button
                                      type="button"
                                      onClick={() =>
                                        this.delete(rmk.remarkIdPk)
                                      }
                                      class="btn btn-outline-danger remove-item-btn"
                                    >
                                      {" "}
                                      Delete{" "}
                                    </button>
                                  </td>
                                </tr>
                            ))}
                              </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Subject</th>
                                <th>Given By</th>
                                <th>Details</th>
                                <th> Date</th>
                                <th>Delete</th>
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

export default ViewRemark;
