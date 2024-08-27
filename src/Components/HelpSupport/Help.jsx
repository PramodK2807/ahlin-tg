import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  ChangeTicketStatus,
  GetTickets,
} from "../../adminHttpServices/dashHttpService";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Help = () => {
  const [ticketObject, setTicketObject] = useState();
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [helpM, setHelpM] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "User Name",
        field: "name",
        width: 50,
        selected: false,
      },
      {
        label: "User Type",
        field: "type",
        width: 50,
        selected: false,
      },
      // {
      //   label: "Attachment",
      //   field: "file",
      //   width: 50,
      //   selected: false,
      // },
      {
        label: "Booking Id",
        field: "id",
        width: 50,
        selected: false,
      },

      {
        label: "Date",
        field: "date",
        width: 50,
        selected: false,
      },
      {
        label: "Query",
        field: "query",
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
    getTickets();
  }, []);

  const getTickets = async () => {
    let { data } = await GetTickets(filterFields);
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results;
      // setCount(values?.length || 0);
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.id = list?.tripId || "NA";
          returnData.name =
            list?.guest?.fullName ||
            list?.local?.fullName ||
            list?.guest?.fullName;
          // returnData.localName = list?.local?.fullName || list?.guest?.fullName;
          returnData.noOfGuests = list?.noGuest || "NA";
          returnData.status =
            list?.status && list?.status === "solve" ? (
              <span className="badge light badge-success">Solved</span>
            ) : list?.status === "pending" ? (
              <span className="badge light badge-warning">Pending</span>
            ) : list?.status === "Inprogress" ? (
              <span className="badge light badge-info">In Progress</span>
            ) : (
              list?.status
            );
          returnData.date =
            moment(list?.createdAt).format("MMM Do YYYY") || "NA";

          returnData.query = list?.concern;
          returnData.type = list?.type;

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
                // to={`/Trip-Management/Details`}
                // state={list}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1"
                className="btn btn-primary shadow btn-xs sharp me-2"
                onClick={() =>
                  setTicketObject({
                    concern: list?.concern,
                    status: list?.status,
                    id: list?._id,
                    subject: list?.subject,
                  })
                }
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
      setHelpM({ ...helpM, rows: newRows });
    }
  };

  const handleQueryChange = async (e) => {
    e.preventDefault();
    try {
      let { data } = await ChangeTicketStatus(ticketObject?.id, {
        status: ticketObject?.status,
      });
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Ticket status changed successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getTickets();
        setTicketObject();
        document.getElementById("closeQueryModal").click();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout activeSlide={"Help"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pt-4">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Help & Support Management</h4>
                    {/* <p className="ps-2">(14,555)</p> */}
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
                      data={helpM}
                      noBottomColumns
                      sortable={true}
                      paginationLabel={"«»"}
                    />
                  </div>
                  <div className="table-responsive mdb_table2"></div>
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
                              <label
                                htmlFor="message-text"
                                className="col-form-label"
                              >
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-center">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Query
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeQueryModal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xl-12 mb-4">
                  <label class="form-label">Query</label>
                  <textarea
                    className="form-control"
                    style={{ minHeight: "120px" }}
                    value={ticketObject?.subject}
                    disabled
                  ></textarea>
                </div>
                <div class="col-xl-12">
                  <label class="form-label">Update Status</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setTicketObject({
                        ...ticketObject,
                        status: e.target.value,
                      })
                    }
                  >
                    <option
                      selected={ticketObject?.status === "Inprogress"}
                      value={"Inprogress"}
                    >
                      In Progress
                    </option>
                    <option
                      selected={ticketObject?.status === "solve"}
                      value={"solve"}
                    >
                      Solve
                    </option>
                    <option
                      selected={ticketObject?.status === "pending"}
                      value={"pending"}
                    >
                      Pending
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              {ticketObject?.status !== "solve" && (
                <button
                  type="button"
                  onClick={handleQueryChange}
                  class="btn btn-primary"
                >
                  Save
                </button>
              )}
              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
