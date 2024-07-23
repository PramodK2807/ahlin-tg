import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import {
  DeleteBooking,
  GetBookings,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";

const BookingManagement = () => {
  const [count, setCount] = useState(0);
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
    canceledBy: "",
  });
  const [booking, setBooking] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Booking Id",
        field: "id",
        width: 50,
        selected: false,
      },
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
        label: "Booking Date",
        field: "date",
        width: 50,
        selected: false,
      },
      {
        label: "Booking Amount",
        field: "amount",
        width: 100,
        selected: false,
      },
      {
        label: "Booking Status",
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

    getBookings(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getBookings = async (signal) => {
    let { data } = await GetBookings(filterFields, { signal });
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.bookingList;
      setCount(values?.length || 0);
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.id = list?.bookingId || "NA";
          returnData.name = list?.user?.fullName || "NA";
          returnData.localName = list?.local?.fullName || "NA";
          returnData.amount = list?.package?.price || "NA";
          returnData.status =
            list?.status && list?.status === "completed" ? (
              <span className="badge light badge-success">Completed</span>
            ) : list?.status === "upComing" ? (
              <span className="badge light badge-info">Upcoming</span>
            ) : list?.status === "Pending" ? (
              <span className="badge light badge-warning">Pending</span>
            ) : list?.status === "Canceled" ? (
              <span className="badge light badge-danger">Cancelled</span>
            ) : (
              list?.status
            );
          returnData.date =
            moment(list?.createdAt).format("MMM Do YYYY") || "NA";

          // returnData.status = (
          //   <div className="check_toggle text-center" key={list?._id}>
          //     <input
          //       type="checkbox"
          //       defaultChecked={list?.status}
          //       name="check1"
          //       id={list?._id}
          //       className="d-none"
          //       // onClick={() => {
          //       //   changeStatus(list?._id, list?.status);
          //       // }}
          //     />
          //     <label for={list?._id}></label>
          //   </div>
          // );
          returnData.actions = (
            <div className="d-flex">
              <Link
                to={`/Booking-Management/Details`}
                state={list?._id}
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
      setBooking({ ...booking, rows: newRows });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeleteBooking(id);
      if (data && !data.error) {
        getBookings();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const changeStatus = async (id) => {
  //   try {
  //     let { data } = await ChangeUserStatus(id);
  //     if (data && !data.error) {
  //       getBookings();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Layout activeSlide={"Booking"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Booking Management</h4>
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
                      data={booking}
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
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          From:
                        </label>
                        <div class="searchh_box">
                          <form>
                            <input
                              class="form-control ps-3"
                              type="date"
                              value={filterFields?.from}
                              onChange={(e) =>
                                setFilterFields({
                                  ...filterFields,
                                  from: e.target.value,
                                })
                              }
                            />
                            {/* <button class="">
                              <i class="fa-regular fa-calendar"></i>
                            </button> */}
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          To:
                        </label>
                        <div class="searchh_box">
                          <form>
                            <input
                              class="form-control ps-3"
                              type="date"
                              value={filterFields?.to}
                              onChange={(e) =>
                                setFilterFields({
                                  ...filterFields,
                                  to: e.target.value,
                                })
                              }
                            />
                            {/* <button class="">
                              <i class="fa-regular fa-calendar"></i>
                            </button> */}
                          </form>
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
                                status: "completed",
                              })
                            }
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Complete
                          </label>
                        </div>
                        <div class="form-check ms-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="upcoming"
                            onClick={() =>
                              setFilterFields({
                                ...filterFields,
                                status: "upComing",
                              })
                            }
                          />
                          <label class="form-check-label" for="upcoming">
                            Upcoming
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <label for="message-text" class="col-form-label">
                        Cancelled By:
                      </label>
                      <div class="d-flex ">
                        <div class="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="cancel"
                            id="local"
                            onClick={() =>
                              setFilterFields({
                                ...filterFields,
                                canceledBy: "local",
                              })
                            }
                          />
                          <label class="form-check-label" for="local">
                            Local
                          </label>
                        </div>
                        <div class="form-check ms-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="cancel"
                            id="guest"
                            onClick={() =>
                              setFilterFields({
                                ...filterFields,
                                canceledBy: "guest",
                              })
                            }
                          />
                          <label class="form-check-label" for="guest">
                            Guest
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer pe-0">
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

export default BookingManagement;
