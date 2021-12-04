import react from "react";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: [],
      modelTitle: "",
      userName: "",
      userPassword: "",
      userIdFk: 0,
      isActive: 0,
      authIdPk: 0,
    };
  }

  changeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  changeUserPassword = (e) => {
    this.setState({ userPassword: e.target.value });
  };

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.setState({ authIdPk: this.props.match.params.id });
      this.onGetData(this.props.match.params.id);
    } else {
      this.setState({ authIdPk: 0 });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch(Variables.API_URL + "Login/" , {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify ({
        userName : this.state.userName,
        userPassword : this.state.userPassword,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          sessionStorage.setItem("isLogin","true");
          sessionStorage.setItem("userId",result.data.userIdFk);
          sessionStorage.setItem("userType",result.data.userType);

          if(result.data.userType === "admin")
          {
            this.props.history.push("/admin");
          }
          else if(result.data.userType === "student")
          {
            this.props.history.push("/student");
          }
          else if(result.data.userType === "teacher")
          {
            this.props.history.push("/teacher");
          }
          else if(result.data.userType === "principal")
          {
            this.props.history.push("/principal");
          }
          else 
          {
            this.props.history.push("/");
          }
        },
        (error) => {
          alert("Failed");
        }
      );
  };


  render() {

    const { 
      login,
      modelTitle,
      userName,
      userIdFk,
      userPassword,
    } = this.state;

    return (
      <div>
        <div class="robust-content content container-fluid">
          <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
              <section class="flexbox-container">
                <div class="col-md-5 offset-md-2 col-xs-10 offset-xs-1  box-shadow-2 p-0">
                  <div class="card border-grey border-lighten-3 m-0">
                    <div class="card-header no-border">
                      <div class="card-title text-xs-center">
                        <div class="p-1">
                          <img
                            src="../assets/logo.png"
                            className="logo"
                            alt="branding logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="card-body collapse in">
                      <div class="card-block">
                        <form
                          class="form-horizontal form-simple"
                          action="http://demo.pixinvent.com/robust-admin/ltr/vertical-multi-level-menu-template/index.html"
                          novalidate
                          onSubmit={this.onSubmit.bind(this)}
                        >
                          <fieldset class="form-group has-feedback has-icon-left mb-0">
                            <input
                              type="text"
                              class="form-control form-control-lg input-lg"
                              id="user-name"
                              placeholder="Your Username"
                              value={userName}
                              onChange={this.changeUserName}
                              required
                            />
                            <div class="form-control-position">
                              <i class="icon-head"></i>
                            </div>
                          </fieldset>
                          <br />
                          <fieldset class="form-group has-feedback has-icon-left">
                            <input
                              type="password"
                              class="form-control form-control-lg input-lg"
                              id="user-password"
                              placeholder="Enter Password"
                              value={userPassword}
                              onChange={this.changeUserPassword}
                              required
                            />
                            <div class="form-control-position">
                              <i class="icon-key3"></i>
                            </div>
                          </fieldset>
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg btn-block"
                          >
                            <i class="icon-unlock2"></i> Login
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
