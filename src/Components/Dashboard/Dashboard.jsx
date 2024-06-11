import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import { GetState, TotalUsers } from "../../adminHttpServices/dashHttpService";
import Guest from "../GuestManagement/Guest";

const Dashboard = () => {
  const [guestsCount, setGuestsCount] = useState(0);
  const [guideCount, setGuideCount] = useState(0);

  useEffect(() => {
    getStateList();
  }, []);

  const getStateList = async () => {
    let { data } = await GetState();
    if (data && !data?.error) {
      setGuestsCount(data?.results?.totalUsers);
      setGuideCount(data?.results?.totalGuide);
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
                          <h3>{guestsCount} +</h3>
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
                          <h3>{guideCount} +</h3>
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
                          <h3>20000 SAR</h3>
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
                          <h3>150 +</h3>
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
                          <h3>5</h3>
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

            <Guest latest={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
