import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import {
  ChangeSubscriptionStatus,
  DeleteSubscription,
  GetAllSubscription,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";

const SubscriptionManag = () => {
  const [subscriptionM, setSubscriptionM] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Subscription Name ",
        field: "name",
        width: 50,
        selected: false,
      },
      {
        label: "Plan cost",
        field: "cost",
        width: 50,
        selected: false,
      },
      {
        label: " Number of Subscribers",
        field: "number",
        width: 50,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
        width: 50,
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
    getSubscription();
  }, []);

  const getSubscription = async () => {
    let { data } = await GetAllSubscription();
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.groupedPlan[0]?.plan;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.name = list?.plan || "NA";
          returnData.date = moment(list?.createdAt).format("Do MMMM YYYY");
          returnData.cost = list?.price || "NA";
          returnData.number = list?.number || "0";

          returnData.status = (
            <div className="check_toggle text-center" key={list?._id}>
              <input
                type="checkbox"
                defaultChecked={list?.status}
                name="check1"
                id={list?._id}
                className="d-none"
                onClick={() => {
                  changeStatus(list?._id, list?.status);
                }}
              />
              <label for={list?._id}></label>
            </div>
          );
          returnData.actions = (
            <div className="d-flex">
              {/* <Link
                to={`/Subscription-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Subscription Details",
                  isEdit: true,
                  data: list,
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i>
              </Link> */}
              <Link
                to={`/Subscription-Management/Details/${list?._id}`}
                state={{
                  title: "View Subscription Details",
                  isEdit: false,
                  data: list,
                }}
                // state={list}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-eye"></i>
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteItem(list?._id)}
                className="btn btn-danger shadow btn-xs sharp"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          );

          newRows.push(returnData);
        });
      setSubscriptionM({ ...subscriptionM, rows: newRows });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeleteSubscription(id);
      if (data && !data.error) {
        getSubscription();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id) => {
    try {
      let { data } = await ChangeSubscriptionStatus(id);
      if (data && !data.error) {
        getSubscription();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout activeSlide={"Subscription"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pt-4">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="d-flex align-items-center justify-content-end mt-2 me-2">
                  {/* <Link
                    to={"/Add-Subscription"}
                    state={{ title: "Add Subscription", data: null }}
                    className="btn btn-primary "
                    style={{ width: "200px" }}
                  >
                    Add New Subscription
                  </Link> */}
                </div>

                <div className="col-12 card-body position-relative card-body-2">
                  <div className="card_title_container">
                    <h4 className="card-title">Subscription Plan Management</h4>
                  </div>
                  <div className="search_icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="d-flex filter_modal">
                    <button
                      type="button"
                      className="btn filter_manage px-3 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      <i className="fa-solid fa-filter" />
                    </button>
                  </div>
                  <div className="table-responsive mdb_table">
                    <MDBDataTable
                      bordered
                  displayEntries={true}
                      entries={10}
                      className="text-nowrap"
                      hover
                      data={subscriptionM}
                      noBottomColumns
                      sortable={true}
                      paginationLabel={"«»"}
                      // navigate to view ==== /Dashboard/Guests-Details/:123
                    />
                  </div>
                  <div className="table-responsive mdb_table2"></div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-3 fw-semibold" id="exampleModalLabel">
                  Filter
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-7 pt-2">
                    <label for="message-text" class="col-form-label">
                      Status
                    </label>
                    <div class="d-flex justify-content-between">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Active
                        </label>
                      </div>
                      <div class="form-check ms-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-5"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubscriptionManag;
