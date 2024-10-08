import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Guest from "./Guest";
import Local from "./Local";

const GuestHome = () => {
  const [active, setActive] = useState("Guest");

  return (
    <Layout activeSlide={"Guest"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 wid-100">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="card-header flex-wrap border-0">
                  <div>
                    <h4 className="card-title">Guest / Local Management</h4>
                  </div>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      {/* <button
                        className="nav-link "
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Guest
                      </button> */}
                      <button
                        className={`nav-link ${
                          active === "Guest" ? "active" : ""
                        }`}
                        onClick={() => setActive("Guest")}
                      >
                        Guest
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      {/* <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Local
                      </button> */}
                      <button
                        className={`nav-link ${
                          active === "Local" ? "active" : ""
                        }`}
                        onClick={() => setActive("Local")}
                      >
                        Local
                      </button>
                    </li>
                  </ul>
                  {/* <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex={0}
                    >
                      <Guest />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex={0}
                    >
                      <Local />
                    </div>
                  </div> */}
                  <div>
                    {active === "Guest" && <Guest />}
                    {active === "Local" && <Local />}
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

export default GuestHome;
