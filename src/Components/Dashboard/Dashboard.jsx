import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [guests, setGuests] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Guest Id",
        field: "id",
        width: 50,
        selected: false,
      },
      {
        label: "Name",
        field: "name",
        width: 50,
        selected: false,
      },

      {
        label: "Email",
        field: "email",
        width: 50,
        selected: false,
      },
      {
        label: "Mobile No.",
        field: "mobile",
        width: 100,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
  });

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
                          <h3>1000 +</h3>
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
                          <h3>200 +</h3>
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
            <div className="col-xl-12 ">
              <div
                className="card dz-card position-relative"
                id="bootstrap-table1"
              >
              
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Guests</h4>
                    <p className="ps-2">(14,555)</p>
                  </div>
                  <div className="search_icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="table-responsive mdb_table">
                    <MDBDataTable
                      bordered
                      displayEntries={false}
                      entries={10}
                      className="text-nowrap"
                      hover
                      data={guests}
                      noBottomColumns
                      sortable={false}
                      paginationLabel={"«»"}
                      // navigate to view ==== /Dashboard/Guests-Details/:123
                    />
                  </div>
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
