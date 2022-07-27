import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "../admin/includes/footer";
import { Variables } from "../Variables";

export class viewTeacherProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      teacherIdFk: 0,
      mediumIdFk: 0,
    }
    }

refreshList(id) {
    fetch(Variables.TECH_API_URL + "teacherList/" + id)
        .then((response) => response.json())
        .then((res) => {
            if (res.result === "success") {
                console.log(res);
                this.setState({ teachers: res.data });
            }
        });
}

componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.refreshList(sessionStorage.getItem("userId")?.toString());
    }
}

  render() {

    const {
      teachers,
      teacherIdFk,
  }= this.state;

    return (
      <div>
          <Header></Header>
            <div class="robust-content content container-fluid">
                    <div class="content-wrapper">
                        <div class="content-header row"></div>
                        <div class="content-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="card">
                                        <div class="card-body  collapse in">
                                            <div class="card-block">
                                                <div className="row">
                                                        <img
                                                            src={Variables.PHOTO_URL + teachers.teacherImage}
                                                            className="img-thumbnail img-fluid profile"
                                                            height="300px"
                                                            width="300px"
                                                            itemprop="thumbnail"
                                                        />
                                                        <br /> 
                                                        <p><b> Name : </b> {teachers.teacherName} </p>
                                                        <p><b> Email : </b> {teachers.teacherEmail} </p>
                                                        <p><b> Mobile Number : </b> {teachers.teacherMobile} </p>
                                                        <p><b> Address : </b> {teachers.teacherAddress} </p>
                                                        <p><b> City : </b> {teachers.cityName} - {teachers.stateName} </p>
                                                        <p><b> Medium : </b> {teachers.mediumName} </p>
                                                        <p><b> Subjects : </b> {teachers.subjects} </p>
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

export default viewTeacherProfile;