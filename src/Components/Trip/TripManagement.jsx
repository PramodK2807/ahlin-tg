import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import moment from "moment";
import { TripList } from "../../adminHttpServices/dashHttpService";

const TripManagement = () => {
  const [count, setCount] = useState(0);
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
    canceledBy: "",
  });
  const [trip, setTrip] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      // {
      //   label: "Trip Id",
      //   field: "id",
      //   width: 50,
      //   selected: false,
      // },
      {
        label: "Guest Name",
        field: "name",
        width: 50,
        selected: false,
      },
      {
        label: "Local Name",
        field: "localName",
        width: 50,
        selected: false,
      },

      {
        label: "trip Date",
        field: "date",
        width: 50,
        selected: false,
      },
      {
        label: "No. Of Guests",
        field: "noOfGuests",
        width: 100,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
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
    const controller = new AbortController();
    let signal = controller.signal;

    getTrips(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getTrips = async (signal) => {
    let { data } = await TripList(filterFields, { signal });
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.list;
      setCount(values?.length || 0);
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.id = list?.tripId || "NA";
          returnData.name = list?.user?.fullName || "NA";
          returnData.localName = list?.local?.fullName || "NA";
          returnData.noOfGuests = list?.noGuest || "NA";
          returnData.status =
            list?.bookingType && list?.bookingType === "completed" ? (
              <span className="badge light badge-success">Completed</span>
            ) : list?.bookingType === "UpComing" ? (
              <span className="badge light badge-info">Upcoming</span>
            ) : list?.bookingType === "Pending" ? (
              <span className="badge light badge-warning">Pending</span>
            ) : list?.bookingType === "Canceled" ? (
              <span className="badge light badge-danger">Cancelled</span>
            ) : (
              list?.bookingType
            );
          returnData.date =
            moment(list?.startDate).format("MMM Do YYYY") || "NA";

          // returnData.status = (
          //   <div className="check_toggle text-center" key={list?._id}>
          //     <input
          //       type="checkbox"
          //       defaultChecked={list?.bookingType}
          //       name="check1"
          //       id={list?._id}
          //       className="d-none"
          //       // onClick={() => {
          //       //   changeStatus(list?._id, list?.bookingType);
          //       // }}
          //     />
          //     <label for={list?._id}></label>
          //   </div>
          // );
          returnData.actions = (
            <div className="d-flex">
              <Link
                to={`/Trip-Management/Details`}
                state={list}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-eye"></i>
              </Link>
              {/* <button
                  type="button"
                  onClick={() => handleDeleteItem(list?._id)}
                  className="btn btn-danger shadow btn-xs sharp"
                >
                  <i className="fa fa-trash"></i>
                </button> */}
            </div>
          );

          newRows.push(returnData);
        });
      setTrip({ ...trip, rows: newRows });
    }
  };

  //   const handleDeleteItem = async (id) => {
  //     try {
  //       let { data } = await Deletetrip(id);
  //       if (data && !data.error) {
  //         gettrips();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // const changeStatus = async (id) => {
  //   try {
  //     let { data } = await ChangeUserStatus(id);
  //     if (data && !data.error) {
  //       gettrips();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Layout activeSlide={"Trip"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Trip Management</h4>
                    <p className="ps-2">{`(${count})`}</p>
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
                      maxWidth="100%"
                      data={trip}
                      noBottomColumns
                      sortable={true}
                      paginationLabel={"«»"}
                    />
                  </div>
                  <div className="table-responsive mdb_table2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER MODAL */}

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
                    <div class="col-md-12">
                      <label for="message-text" class="col-form-label">
                        Status
                      </label>
                      <div class="d-flex gx-5">
                        <div class="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            onClick={() =>
                              setFilterFields({
                                ...filterFields,
                                status: "upComing",
                              })
                            }
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Upcoming
                          </label>
                        </div>
                        <div class="form-check ms-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="Inactive"
                            onClick={() =>
                              setFilterFields({
                                ...filterFields,
                                status: "pending",
                              })
                            }
                          />
                          <label class="form-check-label" for="Inactive">
                            Pending
                          </label>
                        </div>
                        <div class="form-check ms-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="Inactive"
                            onClick={() =>
                              setFilterFields({
                                ...filterFields,
                                status: "completed",
                              })
                            }
                          />
                          <label class="form-check-label" for="Inactive">
                            Completed
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
      </div>
    </Layout>
  );
};

export default TripManagement;
