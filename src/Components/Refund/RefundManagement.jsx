import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import { GetAllRefundList } from "../../adminHttpServices/dashHttpService";
import moment from "moment";

const RefundManagement = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });

  const [refundData, setRefundData] = useState({
    columns: [
      { label: "S.No.", field: "sno", width: 50 },
      { label: "Refund ID", field: "refundId", width: 80 },
      { label: "Booking ID", field: "bookingId", width: 80 },
      { label: "Payment ID", field: "paymentId", width: 120 },
      { label: "Guest Name", field: "userName", width: 100 },
      { label: "Guest Email", field: "userEmail", width: 150 },
      { label: "Local Name", field: "localName", width: 100 },
      { label: "Local Email", field: "localEmail", width: 150 },
      { label: "Canceled By", field: "canceledBy", width: 120 },
      { label: "Total Amount", field: "totalAmount", width: 80 },
      { label: "Refund Amount", field: "refundAmount", width: 80 },
      { label: "Refund %", field: "refundPercentage", width: 60 },
      { label: "Currency", field: "currency", width: 60 },
      { label: "Booking Status", field: "bookingStatus", width: 80 },
      { label: "Refund Status", field: "refundStatus", width: 80 },
      { label: "Reason", field: "reason", width: 200 },
      { label: "Cancelled On", field: "createdAt", width: 120 },
    ],
    rows: [],
  });

  useEffect(() => {
    const controller = new AbortController();
    getRefunds(controller.signal);
    return () => controller.abort();
  }, [filterFields]);

  const getRefunds = async (signal) => {
    let { data } = await GetAllRefundList(filterFields, { signal });
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.refunds;
      values
        ?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))
        ?.map((list, index) => {
          const row = {};
          row.sno = index + 1;
          row.refundId = list?.refundId || "NA";
          row.bookingId = list?.booking?.bookingId || "NA";
          row.paymentId = list?.paymentId || "NA";
          row.userName = list?.user?.fullName || "NA";
          row.userEmail = list?.user?.email || "NA";
          row.localName = list?.local?.fullName || "NA";
          row.localEmail = list?.local?.email || "NA";
          row.canceledBy = list?.canceledBy?.fullName || "NA";
          row.totalAmount = list?.totalAmount
            ? `${list?.currency} ${list?.totalAmount}`
            : "NA";
          row.refundAmount = list?.refundAmount
            ? `${list?.currency} ${list?.refundAmount}`
            : "NA";
          row.refundPercentage = list?.refundPercentage
            ? `${list?.refundPercentage}%`
            : "NA";
          row.currency = list?.currency || "NA";
          row.bookingStatus = (
            <span
              className={`badge ${
                list?.booking?.status === "Canceled"
                  ? "bg-danger"
                  : "bg-success"
              }`}
            >
              {list?.booking?.status || "NA"}
            </span>
          );
          row.refundStatus = (
            <span
              className={`badge ${
                list?.status === "success" ? "bg-success" : "bg-warning"
              }`}
            >
              {list?.status || "NA"}
            </span>
          );
          row.reason = list?.reason || "NA";
          row.createdAt = moment(list?.createdAt).format("ll");
          newRows.push(row);
        });
      setRefundData({ ...refundData, rows: newRows });
    }
  };

  return (
    <Layout activeSlide={"Refund"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pt-4">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="card_title_container">
                    <h4 className="card-title">Refund Management</h4>
                  </div>
                  <div className="search_icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
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
                      data={refundData}
                      noBottomColumns
                      sortable={true}
                      paginationLabel={"«»"}
                    />
                  </div>
                  <div className="table-responsive mdb_table2"></div>
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
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="col-form-label">From:</label>
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
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="col-form-label">To:</label>
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
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label className="col-form-label">Status</label>
                          <div className="d-flex gx-5">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                onClick={() =>
                                  setFilterFields({
                                    ...filterFields,
                                    status: true,
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
                            <div className="form-check ms-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="Inactive"
                                onClick={() =>
                                  setFilterFields({
                                    ...filterFields,
                                    status: false,
                                  })
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Inactive"
                              >
                                Inactive
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
                            setFilterFields({ from: "", to: "", status: "" })
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

export default RefundManagement;
