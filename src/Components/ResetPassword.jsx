import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminResetPassword } from "../adminHttpServices/adminLoginHttpServie";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [passVisible2, setPassVisible2] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = async (info) => {
    try {
      let { data } = await AdminResetPassword({
        newPassword: info?.password,
        email: location?.state,
      });
      if (data && !data?.error) {
        navigate("/login");
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
          <div className="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
            <div className="login-form">
              <div className="text-center">
                <h3 className="title">Reset Password</h3>
                <p>Enter New Password</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 position-relative">
                  <label className="mb-1 text-dark">New Password</label>
                  <input
                    type={passVisible ? "text" : "password"}
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
                <div className="mb-4 position-relative">
                  <label className="mb-1 text-dark">Confirm New Password</label>
                  <input
                    type={passVisible2 ? "text" : "password"}
                    className={`form-control ${
                      errors.cpassword ? "is-invalid" : ""
                    }`}
                    {...register("cpassword", {
                      required: "* Enter password again",
                      validate: (value) =>
                        value === password || "Password does not match",
                    })}
                  />
                  {errors?.cpassword && (
                    <p className="errorText mt-1">{errors.cpassword.message}</p>
                  )}{" "}
                  <span
                    onClick={() => setPassVisible2(!passVisible2)}
                    className="show-pass eye"
                  >
                    <i className="fa fa-eye-slash" />
                    <i className="fa fa-eye" />
                  </span>
                </div>
                <div className="text-center mb-4">
                  <button
                    disabled={!isValid}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Save
                  </button>
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

export default ResetPassword;
