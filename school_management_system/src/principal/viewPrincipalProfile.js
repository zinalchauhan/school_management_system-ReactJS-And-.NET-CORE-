import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "../admin/includes/footer";
import { Variables } from "../Variables";

export class viewPrincipalProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prs: [],
      principalIdFk: 0,
      mediumIdFk: 0,
    }
    }

refreshList(id) {
    fetch(Variables.PRINCIPAL_API_URL + "principalList/" + id)
        .then((response) => response.json())
        .then((res) => {
            if (res.result === "success") {
                console.log(res);
                this.setState({ prs: res.data });
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
                                        <div class="card-body  collapse in">
                                            <div class="card-block">
                                                <div className="row">
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

export default viewPrincipalProfile;