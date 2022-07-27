import react from "react";
import { Component } from "react";
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Variables } from "../Variables";

export class principalIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prs: [],
      principalIdFk: 0,
      mediumIdFk: 0,
    }
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin") === null) {
      window.location.href = `/`;
    } else {
    this.OnGetData(sessionStorage.getItem("userId").toString());
    console.log(sessionStorage.getItem("userId").toString());
    }
  }

  OnGetData(id) {
    fetch(Variables.PRINCIPAL_API_URL + "principalList/" + id, {
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
            prs: result.data,
            mediumIdFk: result.data.mediumIdFk,
          });
          sessionStorage.setItem("medId", result.data.mediumIdFk);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    const {
      prs,
      principalIdFk,
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
                    <div class="card-body">
                      <div class="card-block">
                        <div class="row">
                        <img
                                                            //src={Variables.PHOTO_URL + prs.principalImage}
                                                            src="../assets/img.png" 
                                                            className="img-thumbnail img-fluid profile"
                                                            height="300px"
                                                            width="300px"
                                                            itemprop="thumbnail"
                                                        />
                                                        <br /> 
                                                        <p><b> Name : </b> {prs.principalName} </p>
                                                        <p><b> Email : </b> {prs.principalEmail} </p>
                                                        <p><b> Mobile Number : </b> {prs.principalMobile} </p>
                                                        <p><b> Address : </b> {prs.principalAddress} </p>
                                                        <p><b> City : </b> {prs.cityName} - {prs.stateName} </p>
                                                        <p><b> Medium : </b> {prs.mediumName} </p>
                                                        <p><b> Standards : </b> {prs.standards} </p>
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

export default principalIndex;
