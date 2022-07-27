import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cnt1: 0,
      cnt2: 0,
    };
  }

  refreshList1() {
    fetch(Variables.API_URL + "studentCount")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ cnt1: res.data });
        }
      });
  }

  refreshList2() {
    fetch(Variables.API_URL + "teacherCount")
      .then((response) => response.json())
      .then((res) => {
        if (res.result === "success") {
          console.log(res);
          this.setState({ cnt2: res.data });
        }
      });
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    console.log("User Id :: ",sessionStorage.getItem("userId").toString());
    this.refreshList1();
    this.refreshList2();
    }
  }


  render() {
    const {
      cnt1,
      cnt2,
    } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              {/* <!-- Sales stats --> */}
              <div className="row">
                <div className="col-xs-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-block">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-sm-12 ">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 info">
                                 {cnt1}
                                </span>
                              </div>
                              <p className="text-muted">
                                Total Students {" "}
                              </p>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-block">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-sm-12 ">
                            <div className="media px-1">
                              <div className="media-left media-middle">
                                <i className="icon-android-person  font-large-1 blue-grey"></i>
                              </div>
                              <div className="media-body text-xs-right">
                                <span className="font-large-2 text-bold-300 info">
                                  {cnt2}
                                </span>
                              </div>
                              <p className="text-muted" >
                                Total Teachers {" "}
                              </p>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               
            </div>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
