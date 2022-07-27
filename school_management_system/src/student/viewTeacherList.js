import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Variables } from "../Variables";

export class viewTeacherList extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            subtech: [],
          
          isActive: 0,
        };
      }
    
      refreshList(id) {
        fetch(Variables.STUD_API_URL + "teacherList/" + id )
          .then((response) => response.json())
          .then((res) => {
            if (res.result === "success") {
              console.log(res);
              this.setState({ subtech: res.data });
            }
          });
      }
    
      componentDidMount() {
        console.log(sessionStorage.getItem("isLogin"));
        if (sessionStorage.getItem("isLogin") === null) {
          window.location.href = `/`;
        } else {
        this.refreshList(sessionStorage.getItem("classId")?.toString());
        }
      }

    render() {

        const {
            subtech,
        }= this.state;
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
                                                    <table className="table table-striped table-bordered file-export">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th> Teacher Name </th>
                                                                <th> Subject Name </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {subtech.map((st, index) => (
                                                            <tr key={index}>
                                                                <td>  {index+1} </td>
                                                                <td> {st.teacherName} </td>
                                                                <td> {st.subjectName} </td>
                                                                </tr>
                                                            ))} 
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th>#</th>
                                                                <th> Teacher Name </th>
                                                                <th> Subject Name </th>
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

export default viewTeacherList;