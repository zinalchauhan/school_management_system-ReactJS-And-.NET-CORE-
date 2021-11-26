import react from "react";
import { Component } from "react/cjs/react.production.min";

export class Login extends Component {
  render() {
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
                        >
                          <fieldset class="form-group has-feedback has-icon-left mb-0">
                            <input
                              type="text"
                              class="form-control form-control-lg input-lg"
                              id="user-name"
                              placeholder="Your Username"
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
