import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { GetState, TotalUsers } from "../../adminHttpServices/dashHttpService";
import Guest from "../GuestManagement/Guest";
import LocalAndGuestGraph from "../Graph/LocalAndGuestGraph";
import RechartLocalAndGuest from "../Graph/RechartLocalAndGuest";

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
                          <h6>Total Locals</h6>
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
                <div className="col-xl-6 col-sm-6">
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
                <div className="col-xl-6 col-sm-6">
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
              </div>
            </div>

            {/* <Guest latest={true} /> */}

            <div className="row">
              <div className="col-md-6">
                {/* <LocalAndGuestGraph /> */}
                <RechartLocalAndGuest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
