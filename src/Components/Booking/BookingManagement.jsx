import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";

const BookingManagement = () => {
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
                    <p className="ps-2">( 2,35,545 )</p>
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
                      displayEntries={false}
                      entries={10}
                      className="text-nowrap"
                      hover
                      data={booking}
                      noBottomColumns
                      sortable={false}
                      paginationLabel={"«»"}
                    />
                  </div>
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
                        <form>
                          <input className="form-control ps-3" type="date" />
                          <button className>
                            <i className="fa-regular fa-calendar" />
                          </button>
                        </form>
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
                        <form>
                          <input className="form-control ps-3" type="date" />
                          <button className>
                            <i className="fa-regular fa-calendar" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <label htmlFor="message-text" className="col-form-label">
                      Status
                    </label>
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Complete
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Upcoming
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
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

export default BookingManagement;
