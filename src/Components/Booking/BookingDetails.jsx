import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import { GetBookingDetails } from "../../adminHttpServices/dashHttpService";
import moment from "moment";
import ActivityCard from "../Common/ActivityCard";
const staticDestinations = [
  {
    _id: "1",
    destination: "Dubai",
    startDate: "2026-05-01",
  },
  {
    _id: "2",
    destination: "Abu Dhabi",
    startDate: "2026-05-03",
  },
  {
    _id: "3",
    destination: "Sharjah",
    startDate: "2026-05-05",
  },
  {
    _id: "4",
    destination: "Ajman",
    startDate: "2026-05-07",
  },
  {
    _id: "5",
    destination: "Fujairah",
    startDate: "2026-05-09",
  },
  {
    _id: "6",
    destination: "Ras Al Khaimah",
    startDate: "2026-05-11",
  },
  {
    _id: "7",
    destination: "Doha",
    startDate: "2026-05-13",
  },
  {
    _id: "8",
    destination: "Muscat",
    startDate: "2026-05-15",
  },
  {
    _id: "9",
    destination: "Bahrain",
    startDate: "2026-05-17",
  },
  {
    _id: "10",
    destination: "Kuwait",
    startDate: "2026-05-19",
  },
];

const BookingDetails = () => {
  const [details, setDetails] = useState();
  const { state } = useLocation();

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

  console.log(details);
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
                          disabled={true}
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
                          disabled={true}
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
                          disabled={true}
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
                          disabled={true}
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.status}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Booking Amount<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled={true}
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={details?.totalAmount || 0}
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
                          disabled={true}
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
                          disabled={true}
                          type="text"
                          className="form-control bg-body-secondary text-dark"
                          value={moment(details?.trip?.createdAt).format(
                            "MMM Do, YYYY",
                          )}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Number of Guests<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled={true}
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
                          disabled={true}
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
                      {/* <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Destination<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex">
                          <div className="bg-body-secondary p-2 pt-2 rounded">
                            <label className="form-label">From : </label>
                            <input
                              disabled={true}
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary"
                              defaultValue="Delhi"
                            />
                          </div>
                          <div className="bg-body-secondary p-2 pt-2 rounded ms-3">
                            <label className="form-label">To : </label>
                            <input
                              disabled={true}
                              type="text"
                              className=" border-0 ms-2 fs-5 bg-body-secondary"
                              defaultValue="Banglore"
                            />
                          </div>
                        </div>
                      </div> */}

                      <div className="col-auto m-b30">
                        <label className="form-label">
                          Destination<sup className="mandatesign">*</sup>
                        </label>

                        <div className="d-flex align-items-center flex-wrap gap-2">
                          {details?.trip?.destinations?.map((item, index) => (
                            <React.Fragment key={item._id}>
                              <div className="form-control bg-body-secondary text-dark w-auto">
                                <div className="fw-semibold">
                                  {item?.destination}
                                </div>

                                <p className="mb-0 small">
                                  {moment(item?.startDate).format("ll")}
                                </p>
                              </div>

                              {index !==
                                details?.trip?.destinations.length - 1 && (
                                <span className="fs-4 fw-bold">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>{" "}
            {/* <div className="col-md-9 m-b30">
              <label className="form-label">
                Guest Activities<sup className="mandatesign">*</sup>
              </label>
              {(details?.Activity && <ActivityCard />) || "NA"}
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingDetails;
