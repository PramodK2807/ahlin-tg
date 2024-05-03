import React from "react";
import Layout from "../Layout/Layout";

const TransDetails = () => {
  return (
    <Layout activeSlide={"Transaction"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Transaction Details</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-primary-subtle text-dark"
                          defaultValue="James"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Payment Mode<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-primary-subtle text-dark"
                          defaultValue="Paypal"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Date<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-primary-subtle text-dark"
                          defaultValue="21 Non 2024"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Amount<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-primary-subtle text-dark"
                          defaultValue="200 SAR"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Status<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-primary-subtle text-dark"
                          defaultValue="Complete"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransDetails;
