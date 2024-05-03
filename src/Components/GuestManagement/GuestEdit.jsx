import React from "react";
import Layout from "../Layout/Layout";
import TripBooking from "../TripBooking/TripBooking";

const GuestEdit = () => {
  return (
    <Layout activeSlide={"Guest"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Edit Guest Details</h6>
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
                    </div>
                    <div className="row border p-4 m-b30 rounded">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Password<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue={123456789}
                        />
                      </div>
                      <div className="col-md-5 m-b30">
                        <label className="form-label">
                          Confirm Password<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue={123456789}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Save</button>
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

export default GuestEdit;
