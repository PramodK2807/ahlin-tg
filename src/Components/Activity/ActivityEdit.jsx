import React from "react";
import Layout from "../Layout/Layout";

const ActivityEdit = ({ editBtn = true, title = "Edit Activity Details" }) => {
  return (
    <Layout activeSlide={"Activities"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">{title}</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Activity Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Hiking"
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Added On<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="01 August 2017"
                        />
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Activities<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="border p-2">
                            <h5 className="text-center bg-body-secondary p-1">
                              Wildlife Viewing
                            </h5>
                            <img
                              src="/images/wild-life.jpeg"
                              alt="act"
                              className="activity_image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {editBtn && (
                    <div className="card-footer">
                      <button className="btn btn-primary">Save</button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityEdit;
