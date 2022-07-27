import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class viewStudentProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            studentIdFk: 0,
            standardIdFk: 0,
            studentMname: "",
            mediumIdFk: 0,
            classIdFk: 0,
        }
    }

    refreshList(id) {
        fetch(Variables.STUD_API_URL + "studentList/" + id)
            .then((response) => response.json())
            .then((res) => {
                if (res.result === "success") {
                    console.log(res);
                    this.setState({ students: res.data });
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
            students,
            studentIdFk,
        } = this.state;


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
                                                            src={Variables.PHOTO_URL + students.studentImage}
                                                            className="img-thumbnail img-fluid profile"
                                                            height="300px"
                                                            width="300px"
                                                            itemprop="thumbnail"
                                                        />
                                                       
                                                        <br /> 
                                                        <h3><u>  Academic Information</u> </h3> <br /><br />
                                                        <p><b>  Roll No. : </b> {students.studentRollNo} </p>
                                                        <p><b> Gr No. : </b> {students.studentGrNo} </p>
                                                        <p><b> Standard : </b> {students.standardName} </p>
                                                        <p><b> Division : </b> {students.divisionName} </p>
                                                        <p><b> Medium : </b> {students.mediumName} </p>
                                                        <br />  <br />
                                                        <h3><u>  Personal Information</u> </h3> <br /><br />
                                                        <p><b> Name : </b> {students.studentFname} {students.studentMname} {students.studentLname} </p>

                                                        <p><b> Gender : </b> {students.studentGender} </p>
                                                        <p><b> Birth Date : </b> {students.studentDob} </p>
                                                        <p><b> Mother Mobile Number : </b> {students.motherMobile} </p>
                                                        <p><b> Father Mobile Number : </b> {students.fatherMobile} </p>
                                                   
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

export default viewStudentProfile;
