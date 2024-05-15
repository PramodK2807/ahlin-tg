import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AdminLogin } from "../adminHttpServices/adminLoginHttpServie";
const Login = () => {
  const [passRemember, setPassRemember] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const rememberData = JSON.parse(localStorage.getItem("ahl-remember"));
    console.log(rememberData);
    setValue("email", rememberData?.email || "");
    setValue("password", rememberData?.password || "");
  }, []);

  const onSubmit = async (info) => {
    localStorage.removeItem("ahl-admin-token");
    console.log(passRemember);
    if (passRemember) {
      localStorage.setItem(
        "ahl-remember",
        JSON.stringify({ email: info?.email, password: info?.password })
      );
    }
    try {
      let { data } = await AdminLogin({
        email: info.email,
        password: info.password,
      });
      if (data && !data?.error) {
        navigate("/Dashboard");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="mb-1 text-dark">Email</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors?.email && (
                    <p className="errorText mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-4 position-relative">
                  <label className="mb-1 text-dark">Password</label>
                  <input
                    type={passVisible ? "text" : "password"}
                    id="dz-password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password", {
                      required: "* Please Enter Your Password",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                      },
                    })}
                  />
                  {errors?.password && (
                    <p className="errorText mt-1">{errors.password.message}</p>
                  )}

                  <span
                    onClick={() => setPassVisible(!passVisible)}
                    className="show-pass eye"
                  >
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
                        name="passRemeber"
                        value={passRemember}
                        onClick={() => setPassRemember(!passRemember)}
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
                    <Link
                      to="/forgot-password"
                      className="btn-link text-primary"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <button
                    // disabled={!isValid}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Sign In
                  </button>
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
