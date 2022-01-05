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
    this.OnGetData(sessionStorage.getItem("userId").toString());
    console.log(sessionStorage.getItem("userId").toString());
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
