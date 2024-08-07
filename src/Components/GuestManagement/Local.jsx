import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import {
  AllGuidesList,
  ChangeGuideStatus,
  DeleteGuide,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";

const Local = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [local, setLocal] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
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
        label: "Contact No.",
        field: "mobile",
        width: 100,
        selected: false,
      },
      {
        label: "Email",
        field: "email",
        width: 50,
        selected: false,
      },
      {
        label: "Subscription Plan",
        field: "plan",
        width: 50,
        selected: false,
      },
      {
        label: "Rating",
        field: "rating",
        width: 50,
        selected: false,
      },
      {
        label: "Reviews",
        field: "reviews",
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
    const controller = new AbortController();
    let signal = controller.signal;

    getGuides(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getGuides = async (signal) => {
    let { data } = await AllGuidesList(filterFields, { signal });
    console.log(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.list;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.name = list?.fullName;
          returnData.mobile = +list?.mobileNumber || "NA";
          returnData.email = list?.email || "NA";
          returnData.plan = list?.plan || "None";
          returnData.rating = list?.rating || "NA";
          returnData.reviews = list?.reviews || "NA";
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
            <div class="d-flex">
              {/* <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Local Details",
                  isEdit: false,
                  type: "Guide",
                  api:"editGuide"
                }}
                class="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i class="fa fa-edit"></i>
              </Link> */}
              <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "View Local Details",
                  isEdit: false,
                  updateCommision: true,
                  type: "Guide",
                }}
                class="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i class="fa fa-eye"></i>
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteItem(list?._id)}
                class="btn btn-danger shadow btn-xs sharp"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          );

          newRows.push(returnData);
        });
      setLocal({ ...local, rows: newRows });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeleteGuide(id);
      if (data && !data.error) {
        getGuides();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id) => {
    try {
      let { data } = await ChangeGuideStatus(id);
      if (data && !data.error) {
        getGuides();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="col-xl-12 pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="col-12 card-body position-relative card-body-2">
            <div className="card_title_container">
              <h4 className="card-title">Local List</h4>
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
                data={local}
                noBottomColumns
                sortable={true}
                paginationLabel={"«»"}
              />
            </div>
            <div className="table-responsive mdb_table2"></div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 fw-semibold"
                id="exampleModalLabel"
              >
                Filter
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        From:
                      </label>
                      <div className="searchh_box">
                        <div>
                          <input
                            className="form-control ps-3"
                            type="date"
                            value={filterFields?.to}
                            onChange={(e) =>
                              setFilterFields({
                                ...filterFields,
                                to: e.target.value,
                              })
                            }
                          />
                          {/* <button type="button" className>
                              <i className="fa-regular fa-calendar" />
                            </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        To:
                      </label>
                      <div className="searchh_box">
                        <div>
                          <input
                            className="form-control ps-3"
                            type="date"
                            value={filterFields?.from}
                            onChange={(e) =>
                              setFilterFields({
                                ...filterFields,
                                from: e.target.value,
                              })
                            }
                          />
                          {/* <button className>
                            <i className="fa-regular fa-calendar" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message-text" className="col-form-label">
                      Status
                    </label>
                    <div className="d-flex justify-content-around">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onClick={() =>
                            setFilterFields({
                              ...filterFields,
                              status: "active",
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Active
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onClick={() =>
                            setFilterFields({
                              ...filterFields,
                              status: "inActive",
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          InActive
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer p-0 pt-2">
                  <button
                    type="reset"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() =>
                      setFilterFields({
                        from: "",
                        to: "",
                        status: "",
                        canceledBy: "",
                      })
                    }
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Local;
