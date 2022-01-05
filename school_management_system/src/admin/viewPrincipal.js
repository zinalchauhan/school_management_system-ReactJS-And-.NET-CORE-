import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class ViewPrincipal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      principals: [],
      cities: [],
      states: [],
      mediums: [],
      standards: [],
      modelTitle: "",
      principalIdPk: 0,
      principalName: "",
      principalEmail: "",
      principalMobile: "",
      principalQualification: "",
      principalImage: "",
      cityIdFk: 0,
      principalAddress: "",
      mediumIdFk: 0,
      isActive: 0,
    };
  }

  refreshList() {
    fetch(Variables.API_URL + "principalList")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ principals: res.data });
        }
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deletePrincipalList/" + id, {
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
      principals,
      cities,
      states,
      mediums,
      standards,
      modelTitle,
      principalIdPk,
      principalName,
      principalEmail,
      principalMobile,
      principalQualification,
      principalImage,
      cityIdFk,
      principalAddress,
      mediumIdFk,
    } = this.state;

    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Principal List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Principal List</li>
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
                        <h4 className="card-title">Principal List</h4>
                        <br />
                        <Link
                          to="/admin/addPrincipal"
                          class="btn btn-outline-primary edit-item-btn"
                        >
                          Add New Principal
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
                        <div
                          className="card-block card-dashboard"
                          style={{ overflow: "scroll" }}
                        >
                          <table className="table table-striped table-bordered file-export">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th> Edit / Delete</th>
                                <th> Principal Photo </th>
                                <th> Academic Details </th>
                                <th>Personal Details </th>
                              </tr>
                            </thead>
                            <tbody>
                              {principals.map((prs, index) => (
                                <tr key={index}>
                                  <td> {index + 1} </td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-outline-primary edit-item-btn"
                                    >
                                      Edit
                                    </button>{" "}
                                    <br /> <br />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.delete(prs.principalIdPk)
                                      }
                                      class="btn btn-outline-danger remove-item-btn"
                                    >
                                      {" "}
                                      Delete{" "}
                                    </button>
                                  </td>
                                  <td>
                                    {" "}
                                    <img
                                      src="../assets/img.png"
                                      className="img"
                                    />{" "}
                                  </td>
                                  <td>
                                    <b> Medium : </b> <br/>&nbsp;&nbsp;&nbsp;{prs.mediumName} <br/>
                                    <b> Standards : </b><br/>&nbsp;&nbsp;&nbsp; {prs.standards}
                                  </td>
                                  <td>
                                    <b> Name : </b> <br/>&nbsp;&nbsp;&nbsp;{prs.principalName} <br/>
                                    <b> Email : </b> <br/>&nbsp;&nbsp;&nbsp;{prs.principalEmail} <br/>
                                    <b> Qualification : </b><br/>&nbsp;&nbsp;&nbsp;
                                    {prs.principalQualification}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th> Edit / Delete</th>
                                <th> Principal Photo </th>
                                <th> Academic Details </th>
                                <th>Personal Details </th>
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

export default ViewPrincipal;
