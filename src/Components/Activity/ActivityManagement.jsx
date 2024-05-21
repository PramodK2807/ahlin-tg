import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Activity from "./Activity";
import SubActivity from "./SubActivity";

const ActivityManagement = () => {
  const [activeTab, setActiveTab] = useState("activity");
  return (
    <Layout activeSlide={"Activities"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 wid-100">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="card-header flex-wrap border-0">
                  <div>
                    <h4 className="card-title">ACTIVITIES MANAGEMENT</h4>
                  </div>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "activity" ? "active" : ""
                        }`}
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected={activeTab === "activity"}
                        onClick={() => setActiveTab("activity")}
                      >
                        Activity
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "subActivity" ? "active" : ""
                        }`}
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected={activeTab === "subActivity"}
                        onClick={() => setActiveTab("subActivity")}
                      >
                        Sub Activity
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={`tab-pane fade ${
                        activeTab === "activity" ? "show active" : ""
                      }`}
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex={0}
                    >
                      {activeTab === "activity" && <Activity />}
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab === "subActivity" ? "show active" : ""
                      }`}
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex={0}
                    >
                      {activeTab === "subActivity" && <SubActivity />}
                    </div>
                  </div>
                  {/* <hr /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ActivityManagement;
