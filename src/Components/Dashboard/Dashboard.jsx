import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import { GetState } from "../../adminHttpServices/dashHttpService";

const Dashboard = () => {
  const [guestsCount, setGuestsCount] = useState(0);
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

  useEffect(() => {
    getStateList();
  }, []);

  const getStateList = async () => {
    let { data } = await GetState();
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      setGuestsCount(data?.results?.totalUsers);
      let values = data?.results?.userList;

      console.log(values);
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.name = list?.userName || "NA";
          // returnData.lastName = list?.lastName || "NA";
          returnData.mobile = list?.mobileNumber || "NA";
          returnData.email = list?.email || "NA";

          returnData.actions = (
            <div className="d-flex">
              {/* <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "Edit User Details",
                  isEdit: true,
                  type: "User",
                  api: "editUser",
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i>
              </Link> */}
              <Link
                // to={`/Guest-Management/Details/${list?._id}`}
                // state={{
                //   title: "View User Details",
                //   isEdit: false,
                //   type: "User",
                // }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-eye"></i>
              </Link>
              <button
                type="button"
                // onClick={() => handleDeleteItem(list?._id)}
                className="btn btn-danger shadow btn-xs sharp"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          );

          newRows.push(returnData);
        });
      setGuests({ ...guests, rows: newRows });
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
                    <p className="ps-2">{`(${guestsCount})`}</p>
                  </div>
                  <div className="search_icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="mdb_table">
                    <div className="table-responsive ">
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
                        // navigate to view ==== /Dashboard/Guests-Details/123
                      />
                    </div>
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
