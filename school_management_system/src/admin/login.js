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
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <section className="flexbox-container">
                <div className="col-md-5 offset-md-2 col-xs-10 offset-xs-1  box-shadow-2 p-0">
                  <div className="card border-grey border-lighten-3 m-0">
                    <div className="card-header no-border">
                      <div className="card-title text-xs-center">
                        <div className="p-1">
                          <img
                            src="../assets/logo.png"
                            className="logo"
                            alt="branding logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-body collapse in">
                      <div className="card-block">
                        <form
                          className="form-horizontal form-simple"
                          noValidate
                          onSubmit={this.onSubmit.bind(this)}
                        >
                          <fieldset className="form-group has-feedback has-icon-left mb-0">
                            <input
                              type="text"
                              className="form-control form-control-lg input-lg"
                              id="user-name"
                              placeholder="Your Username"
                              value={userName}
                              onChange={this.changeUserName}
                              required
                            />
                            <div className="form-control-position">
                              <i className="icon-head"></i>
                            </div>
                          </fieldset>
                          <br />
                          <fieldset className="form-group has-feedback has-icon-left">
                            <input
                              type="password"
                              className="form-control form-control-lg input-lg"
                              id="user-password"
                              placeholder="Enter Password"
                              value={userPassword}
                              onChange={this.changeUserPassword}
                              required
                            />
                            <div className="form-control-position">
                              <i className="icon-key3"></i>
                            </div>
                          </fieldset>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            <i className="icon-unlock2"></i> Login
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
