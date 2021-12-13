import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class studentIndex extends Component {

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
            classIdFk: result.data.classIdFk,
            standardIdFk: result.data.standardIdPk,
            studentMname: result.data.studentMname,
            mediumIdFk: result.data.mediumIdFk,
          });
          sessionStorage.setItem("classId", result.data.classIdFk);
          sessionStorage.setItem("standardId", result.data.standardIdPk);
          sessionStorage.setItem("mname", result.data.studentMname);
          sessionStorage.setItem("medId", result.data.mediumIdFk);
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
