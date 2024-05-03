import React from "react";
import Layout from "../Layout/Layout";
import TripBooking from "../TripBooking/TripBooking";

const LocalDetails = () => {
  return (
    <Layout activeSlide={"Guest"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Local Details</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          defaultValue="Tom"
                        />
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Contact Number<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          defaultValue="+91 88665544512"
                        />
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          EMAIL ID<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          defaultValue="tom@gmail.com"
                        />
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Date of birth<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          defaultValue="01 August 2017"
                        />
                      </div>
                      <div className="col-md-5 m-b30">
                        <label className="form-label">
                          Passport Image<sup className="mandatesign">*</sup>
                        </label>
                        <div>
                          <img
                            src="/images/0_91v0rV9LQBJdPX7s.jpg"
                            className="passport_photo_manage"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Tourist Licence<sup className="mandatesign">*</sup>
                        </label>
                        <div>
                          <img
                            src="/images/tourist-license.jpeg"
                            className="passport_photo_manage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <TripBooking />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocalDetails;
