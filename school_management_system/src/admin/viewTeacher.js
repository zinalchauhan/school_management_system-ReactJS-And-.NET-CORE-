import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

export class ViewTeacher extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Teacher List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Teacher List</li>
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
                        <h4 className="card-title">Teacher List</h4>
                        <br />
                        <Link
                          to="/addTeacher"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Teacher
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
                        <div className="card-block card-dashboard" style={{overflow:"scroll"}}>
                          <table className="table table-striped table-bordered file-export">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Medium & Section</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Class Teacher</th>
                                <th>Subjects</th>
                                <th> Edit </th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#iconFormShowSubject12"
                                    class="btn btn-outline-danger remove-item-btn"
                                  >
                                    Show Subject
                                  </a>
                                </td>

                                <td class="edit">
                                  <a
                                    href=""
                                    class="btn btn-outline-primary edit-item-btn"
                                  >
                                    Edit
                                  </a>
                                </td>

                                <td class="Delete">
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#iconFormDelete12"
                                    class="btn btn-outline-danger remove-item-btn"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Michael Bruce</td>
                                <td>Javascript Developer</td>
                                <td>Singapore</td>
                                <td>29</td>
                                <td>2011/06/27</td>
                                <td>
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#iconFormShowSubject12"
                                    class="btn btn-outline-danger remove-item-btn"
                                  >
                                    Show Subject
                                  </a>
                                </td>

                                <td class="edit">
                                  <a
                                    href=""
                                    class="btn btn-outline-primary edit-item-btn"
                                  >
                                    Edit
                                  </a>
                                </td>

                                <td class="Delete">
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#iconFormDelete12"
                                    class="btn btn-outline-danger remove-item-btn"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Donna Snider</td>
                                <td>Customer Support</td>
                                <td>New York</td>
                                <td>27</td>
                                <td>2011/01/25</td>
                                <td>
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#iconFormShowSubject12"
                                    class="btn btn-outline-danger remove-item-btn"
                                  >
                                    Show Subject
                                  </a>
                                </td>

                                <td class="edit">
                                  <a
                                    href=""
                                    class="btn btn-outline-primary edit-item-btn"
                                  >
                                    Edit
                                  </a>
                                </td>

                                <td class="Delete">
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#iconFormDelete12"
                                    class="btn btn-outline-danger remove-item-btn"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th>Medium & Section</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Class Teacher</th>
                                <th>Subjects</th>
                                <th> Edit </th>
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

export default ViewTeacher;
