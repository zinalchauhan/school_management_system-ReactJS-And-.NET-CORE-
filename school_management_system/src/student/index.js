import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class studentIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
            classIdFk: 0,
      students: [],
      studentIdFk: 0,
      standardIdFk: 0,
      studentMname: "",
      mediumIdFk: 0,
      classIdFk: 0,
      studImg: [],
    }
  }

//   refreshList(id) {
//     fetch(Variables.STUD_API_URL + "studentList/" + id)
//         .then((response) => response.json())
//         .then((res) => {
//             if (res.result === "success") {
//                 console.log(res);
//                 this.setState({ students: res.data });
//             }
//         });
// }

  componentDidMount() {
    this.OnGetData(sessionStorage.getItem("userId").toString());
  }

  OnGetData(id) {
    fetch(Variables.STUD_API_URL + "studentList/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            students: result.data ,
            classIdFk: result.data.classIdFk,
            standardIdFk: result.data.standardIdPk,
            studentMname: result.data.studentMname,
            mediumIdFk: result.data.mediumIdFk,
            studentImage: result.data.studentImage
          });
          sessionStorage.setItem("classId", result.data.classIdFk);
          sessionStorage.setItem("standardId", result.data.standardIdPk);
          sessionStorage.setItem("mname", result.data.studentMname);
          sessionStorage.setItem("medId", result.data.mediumIdFk);
          sessionStorage.setItem("studImg", result.data.studentImage);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {

    const {
      students,
      studentIdFk,
  }= this.state;


    return (
      <div>
        <Header></Header>
        <div class="robust-content content container-fluid">
          <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
              {/* <!-- Sales stats --> */}
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
        {/* <!-- ////////////////////////////////////////////////////////////////////////////--> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default studentIndex;
