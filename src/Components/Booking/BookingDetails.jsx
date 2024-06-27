import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import { GetBookingDetails } from "../../adminHttpServices/dashHttpService";
import moment from "moment";

const BookingDetails = () => {
  const [details, setDetails] = useState();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    getBookingDetails();
  }, [state]);

  const getBookingDetails = async () => {
    try {
      let { data } = await GetBookingDetails(state);
      if (data && !data.error) {
        setDetails(data?.results?.book);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout activeSlide={"Booking"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Booking Details</h6>
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
                          value={details?.user?.fullName}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Email<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="email"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.user?.email}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Mobile No.<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.user?.mobileNumber}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Booking Status<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={
                            details?.status === "Complete || Completed"
                              ? "Completed"
                              : details?.status === "upComing"
                              ? "Upcoming"
                              : "Cancelled"
                          }
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Booking Amount<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.package?.price}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
                          Local Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.local?.fullName}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Booking Date<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={moment(details?.trip?.createdAt).format(
                            "MMM Do, YYYY"
                          )}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Total Guests<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.trip?.noGuest}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Package<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.package?.packageName}
                        />
                      </div>
                      {/* <div class="col-md-5 m-b30">
											<label class="form-label">Destination<sup
													class="mandatesign">*</sup></label>
											<div class="d-flex justify-content-between">
												<div class="bg-body-secondary pt-1 px-3 rounded d-flex flex-column">
													<span class="fw-bolder">From:</span>
													<input type="text"
														class="bg-body-secondary text-dark border-0 fw-bold fs-5"
														value="Delhi">
												</div>
												<div class="bg-body-secondary py-1 px-3 rounded">
													<p class="fw-bolder">To</p>
													<input type="text"
														class="bg-body-secondary text-dark border-0 fw-bold"
														value="Banglore">
												</div>
											</div>
										</div> */}
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Destination<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex">
                          <div className="bg-body-secondary p-2 pt-2 rounded">
                            <label className="form-label">From : </label>
                            <input
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary"
                              defaultValue="Delhi"
                            />
                          </div>
                          <div className="bg-body-secondary p-2 pt-2 rounded ms-3">
                            <label className="form-label">To : </label>
                            <input
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary"
                              defaultValue="Banglore"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 m-b30">
                      <label className="form-label">
                        Guest Activities<sup className="mandatesign">*</sup>
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
                        <div className="border p-2">
                          <h5 className="text-center bg-body-secondary p-1">
                            Hiking
                          </h5>
                          <img
                            src="/images/family-small-children-hiking-outdoors-600nw-1927128746.webp"
                            alt="act"
                            className="activity_image"
                          />
                        </div>
                        <div className="border p-2">
                          <h5 className="text-center bg-body-secondary p-1">
                            Bornfire
                          </h5>
                          <img
                            src="/images/vertical-shot-of-small-bonfire-with-beautiful-flames-on-the-rocks-2C4T18J.jpg"
                            alt="act"
                            className="activity_image"
                          />
                        </div>
                        <div className="border p-2">
                          <h5 className="text-center bg-body-secondary p-1">
                            Boat Touring
                          </h5>
                          <img
                            src="/images/boat.jpg"
                            alt="act"
                            className="activity_image"
                          />
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

export default BookingDetails;
