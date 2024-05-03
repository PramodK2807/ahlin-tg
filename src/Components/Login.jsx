import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="authincation h-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
            <div className="login-form">
              <div className="text-center">
                <h3 className="title">Login for Admin Panel</h3>
                <p>Please enter your email and password</p>
              </div>
              <form action>
                <div className="mb-4">
                  <label className="mb-1 text-dark">Email</label>
                  <input
                    type="email"
                    className="form-control form-control"
                    defaultValue="hello@example.com"
                  />
                </div>
                <div className="mb-4 position-relative">
                  <label className="mb-1 text-dark">Password</label>
                  <input
                    type="password"
                    id="dz-password"
                    className="form-control"
                    defaultValue={123456}
                  />
                  <span className="show-pass eye">
                    <i className="fa fa-eye-slash" />
                    <i className="fa fa-eye" />
                  </span>
                </div>
                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                  <div className="mb-4">
                    <div className="form-check custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox1"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox1"
                      >
                        Remember my preference
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <a
                      href="forgot-password.html"
                      className="btn-link text-primary"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <Link
                    to={'/Dashboard'}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Sign In
                  </Link>
                </div>
                <h6 className="login-title">
                  <span>Or continue with</span>
                </h6>
                <div className="mb-3">
                  <ul className="d-flex align-self-center justify-content-center">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/"
                        className="fab fa-facebook-f btn-facebook"
                      />
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.google.com/"
                        className="fab fa-google-plus-g btn-google-plus mx-2"
                      />
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/"
                        className="fab fa-linkedin-in btn-linkedin me-2"
                      />
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/"
                        className="fab fa-twitter btn-twitter"
                      />
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="authincation_bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
