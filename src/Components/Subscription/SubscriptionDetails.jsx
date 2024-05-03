import React from "react";
import Layout from "../Layout/Layout";

const SubscriptionDetails = () => {
  return (
    <Layout activeSlide={"Subscription"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Subscription Plan Details</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Subscription Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Tinzo"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Plan Cost<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="100 SAR"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Valitidy<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="30 Days"
                        />
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Features<sup className="mandatesign">*</sup>
                        </label>
                        <textarea
                          name
                          id
                          cols={30}
                          rows={4}
                          className="form-control"
                          placeholder="Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre, film, stand-up comedy, television, radio, books, or any other entertainment medium."
                          defaultValue={""}
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

export default SubscriptionDetails;
