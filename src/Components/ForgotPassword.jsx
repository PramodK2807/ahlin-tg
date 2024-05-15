import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";
import {
  AdminForgotPassword,
  AdminVerifyOTP,
} from "../adminHttpServices/adminLoginHttpServie";

const ForgotPassword = () => {
  const [pageShow, setPageShow] = useState("Email");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  const renderButton = (buttonProps) => {
    return (
      <button
        {...buttonProps}
        style={{
          textAlign: "center",
          color: "#888888",
          border: "none",
          background: "transparent",
          marginLeft: "5px",
        }}
      >
        Resend OTP
      </button>
    );
  };

  const renderTime = (remainingTime) => {
    return <span>Didn't received the OTP? Wait {remainingTime} seconds</span>;
  };

  const handleSubmitEmail = async () => {
    console.log(email);
    try {
      let { data } = await AdminForgotPassword({ email });
      if (data && !data?.error) {
        console.log(data);
        setPageShow("OTP");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOtp = async () => {
    console.log(email);
    try {
      let { data } = await AdminVerifyOTP({ email, otp: OTP });
      if (data && !data?.error) {
        console.log(data);
        navigate("/reset-password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="authincation h-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
            {pageShow === "Email" && (
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Forgot password</h3>
                  <p>
                    Please enter your registered Email Address to receive the
                    OTP
                  </p>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="mb-1 text-dark">Email</label>
                    <input
                      type="email"
                      className=" form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <button
                      onClick={handleSubmitEmail}
                      className="btn btn-primary btn-block"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
            {pageShow === "OTP" && (
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Verification</h3>
                  <p>Please enter the OTP received on your Email Address</p>
                </div>
                <form action>
                  <div className="mb-4">
                    <label className="mb-1 text-dark">OTP</label>
                    <OTPInput
                      value={OTP}
                      onChange={setOTP}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      secure
                    />
                  </div>
                  <div className="text-center mb-4">
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={!OTP.length === 4}
                      className="btn btn-primary btn-block"
                    >
                      Confirm
                    </button>
                  </div>
                  <h6 className="login-title">
                    <span>
                      <ResendOTP
                        renderButton={renderButton}
                        renderTime={renderTime}
                        maxTime={10}
                        onResendClick={handleSubmitEmail}
                      />
                    </span>
                  </h6>
                </form>
              </div>
            )}
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="authincation_bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
