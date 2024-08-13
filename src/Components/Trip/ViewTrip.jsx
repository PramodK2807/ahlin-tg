import React from "react";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";

const ViewTrip = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <Layout activeSlide={"Trip"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Trip Details</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Guest Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={state?.guest?.fullName}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Local Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={state?.local?.fullName}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          No. of Guests<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={state?.noGuest}
                        />
                      </div>
                      <div className="col-auto m-b30">
                        <label className="form-label">
                          Destination<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex w-100">
                          <div className="bg-body-secondary p-2 pt-2 rounded ">
                            <label className="form-label">From : </label>
                            <input
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary"
                              value={state?.destinations[0]?.destination}
                            />
                          </div>
                          {/* <div className="bg-body-secondary p-2 pt-2 rounded ">
                            <label className="form-label">From : </label>
                            <input
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary text-wrap"
                              value={state?.destinations[0]?.destination}
                              value={"Tokyo, Japan"}
                            />
                          </div> */}
                          {state?.destinations?.length > 2 &&
                            state?.destinations?.filter((data, i) => {
                              if (
                                i !== 0 &&
                                i !== state.destinations.length - 1
                              ) {
                                return false;
                              } else {
                                <div
                                  key={i}
                                  className="bg-body-secondary p-2 pt-2 rounded ms-3 h-100"
                                >
                                  <p className="">{data?.destination}</p>
                                </div>;
                              }
                            })}

                          <div className="bg-body-secondary p-2 pt-2 rounded ms-3 ">
                            <label className="form-label">To : </label>
                            <input
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary"
                              value={state?.destinations.at(-1).destination}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Request<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={state?.request}
                        />
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Notes<sup className="mandatesign">*</sup>
                        </label>
                        <textarea
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={state?.notes || "NA"}
                        />
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Needs<sup className="mandatesign">*</sup>
                        </label>

                        <div className="d-flex justify-content-start flex-wrap">
                          {(state?.needs &&
                            state?.needs?.map((act) => (
                              <div className="px-2 ">
                                <h5 className="text-center text-nowrap bg-body-secondary py-1 pe-3 ps-1 border rounded">
                                  <img
                                    height={30}
                                    width={30}
                                    src={act?.logo}
                                    alt={act?.name}
                                    className="activity_image object-fit-cover "
                                  />
                                  <span className="ms-3">{act?.name}</span>
                                </h5>
                              </div>
                            ))) ||
                            "NA"}
                        </div>
                      </div>

                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Package Activities<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex justify-content-start flex-wrap">
                          {(state?.activities &&
                            state?.activities?.map((act) => (
                              <div className="px-2 ">
                                <h5 className="text-center text-nowrap bg-body-secondary py-1 pe-3 ps-1 border rounded">
                                  <img
                                    height={30}
                                    width={30}
                                    src={act?.uploadImage}
                                    alt="act"
                                    className="activity_image object-fit-cover "
                                  />
                                  <span className="ms-3">
                                    {act?.activityName}
                                  </span>
                                </h5>
                              </div>
                            ))) ||
                            "NA"}
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

export default ViewTrip;
