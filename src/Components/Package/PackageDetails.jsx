import React from "react";
import Layout from "../Layout/Layout";

const PackageDetails = () => {
  return (
    <Layout activeSlide={"Package"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Package Management Details</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Package Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Package 1"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Local Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Tom"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Package Price<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="75 SAR"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Booked By<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="100 Guests"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Added On<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="28 September 2023"
                        />
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Discription (Optional)
                        </label>
                        <textarea
                          name
                          id
                          cols={30}
                          rows={4}
                          className="form-control"
                          placeholder="A supplier is a person or a company who provides goods or services to another person or entity. For every business transaction, there are two parties."
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Package Include<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Rock Climbing , Hiking , Wildlife Viewing"
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Package Excludes<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="All Meals , Personal Expenses"
                        />
                      </div>
                      <div className="col-md-9 m-b30">
                        <label className="form-label">
                          Package Activities<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex justify-content-between">
                          <div className="border p-2">
                            <h5 className="text-center bg-info-subtle p-1">
                              Wildlife Viewing
                            </h5>
                            <img
                              src="images/wild-life.jpeg"
                              alt
                              className="activity_image"
                            />
                          </div>
                          <div className="border p-2">
                            <h5 className="text-center bg-info-subtle p-1">
                              Hiking
                            </h5>
                            <img
                              src="images/family-small-children-hiking-outdoors-600nw-1927128746.webp"
                              alt
                              className="activity_image"
                            />
                          </div>
                          <div className="border p-2">
                            <h5 className="text-center bg-info-subtle p-1">
                              Bornfire
                            </h5>
                            <img
                              src="images/vertical-shot-of-small-bonfire-with-beautiful-flames-on-the-rocks-2C4T18J.jpg"
                              alt
                              className="activity_image"
                            />
                          </div>
                          <div className="border p-2">
                            <h5 className="text-center bg-info-subtle p-1">
                              Boat Touring
                            </h5>
                            <img
                              src="images/boat.jpg"
                              alt
                              className="activity_image"
                            />
                          </div>
                        </div>
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

export default PackageDetails;
