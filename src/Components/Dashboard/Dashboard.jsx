import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { GetState, TotalUsers } from "../../adminHttpServices/dashHttpService";
import Guest from "../GuestManagement/Guest";
import LocalAndGuestGraph from "../Graph/LocalAndGuestGraph";
import RechartLocalAndGuest from "../Graph/RechartLocalAndGuest";
import TotalRevenue from "../Graph/TotalRevenue";

const Dashboard = () => {
  const [dashCount, setDashCount] = useState(0);

  useEffect(() => {
    getStateList();
  }, []);

  const getStateList = async () => {
    let { data } = await TotalUsers();
    console.log(data);
    if (data && !data?.error) {
      setDashCount(data?.results);
      // setGuideCount(data?.results?.totalGuide);
    }
  };

  return (
    <Layout activeSlide={"Dashboard"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 wid-100">
              <div className="row">
                <div className="col-xl-4 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Number of Guests</h6>
                          <h3>{dashCount?.totalGuest} </h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i className="fas fa-users" />
                        </div>
                      </div>
                      <div id="NewCustomers" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Number of Locals</h6>
                          <h3>{dashCount?.totalLocal} </h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i className="fa-solid fa-person-military-pointing" />
                        </div>
                      </div>
                      <div id="NewCustomers" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Total revenue</h6>
                          <h3>{dashCount?.totalRevenue}</h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i className="fas fa-dollar-sign" />
                        </div>
                      </div>
                      <div id="NewExperience" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Total Pending Booking Requests</h6>
                          <h3>{dashCount?.totalPendingBookings}</h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i className="fa-solid fa-hourglass-half" />
                        </div>
                      </div>
                      <div id="NewExperience" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Total Pending Trip Offers</h6>
                          <h3>{dashCount?.totalPendingTrips}</h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i className="fa-solid fa-plane" />
                        </div>
                      </div>
                      <div id="NewExperience" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Total Completed Bookings</h6>
                          <h3>{dashCount?.totalCompletedBookings}</h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i class="fa-solid fa-square-check"></i>
                        </div>
                      </div>
                      <div id="NewExperience" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Cancelled Booking by Guests</h6>
                          <h3>{dashCount?.totalBookingCancelByGuest || 0}</h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i class="fa-solid fa-plane-slash"></i>
                        </div>
                      </div>
                      <div id="NewExperience" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="card chart-grd same-card">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Cancelled Booking by Local</h6>
                          <h3>{dashCount?.totalBookingCancelByLocal || 0}</h3>
                        </div>
                        <div className="icon-box icon_bg">
                          <i class="fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                      <div id="NewExperience" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Guest latest={true} /> */}

            <div id="revenue" className="col-xl-6 d-flex align-items-stretch">
              <div className="card w-100 o-hidden card-hover">
                <div className="card-header border-0 pb-1">
                  <div className="card-header-title">
                    <h4>Total Guests & Locals</h4>
                  </div>
                </div>
                <div className="card-body p-0">
                  <LocalAndGuestGraph />
                </div>
              </div>
            </div>
            <div id="revenue" className="col-xl-6 d-flex align-items-stretch">
              <div className="card w-100 o-hidden card-hover">
                <div className="card-header border-0 pb-1">
                  <div className="card-header-title">
                    <h4>Total Revenue & Trips</h4>
                  </div>
                </div>
                <div className="card-body p-0">
                  <TotalRevenue />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
