import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import { TransactionList } from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";

const PayoutManag = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [dataList, setDataList] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Booking Id ",
        field: "id",
        width: 50,
        selected: false,
      },
      {
        label: "Invoice Id ",
        field: "invoiceId",
        width: 50,
        selected: false,
      },
      {
        label: "Guest Name",
        field: "gName",
        width: 50,
        selected: false,
      },
      {
        label: "Local Name",
        field: "lName",
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
        width: 50,
        selected: false,
      },
      // {
      //   label: "Vat Amount",
      //   field: "vat",
      //   width: 50,
      //   selected: false,
      // },
      {
        label: "Ahlain Fees",
        field: "ahlainFee",
        width: 50,
        selected: false,
      },
      {
        label: "Total Amount",
        field: "total",
        width: 50,
        selected: false,
      },

      // {
      //   label: "Status",
      //   field: "status",
      //   width: 50,
      //   selected: false,
      // },

      // {
      //   label: "Actions",
      //   field: "actions",
      //   width: 100,
      //   selected: false,
      // },
    ],
    rows: [],
  });

  useEffect(() => {
    const controller = new AbortController();
    let signal = controller.signal;
    getPayout(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getPayout = async (signal) => {
    let { data } = await TransactionList(filterFields, { signal });
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.transactions;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.id = list?.bookingId || "NA";
          returnData.invoiceId = list?.paymentId || "NA";
          returnData.gName = list?.user?.fullName || "NA";
          returnData.lName = list?.local?.fullName || "NA";
          returnData.date = list?.createdAt
            ? new Date(list?.createdAt).toLocaleDateString()
            : "NA";
          returnData.amount = list?.amount || "0";
          returnData.vat = list?.vatAmount || "0";
          returnData.ahlainFee = list?.adminFees || "0";
          returnData.total =
            Number(list?.amount || 0) - Number(list?.adminFees || 0);

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
              {/* <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Guest Details",
                  isEdit: false,
                  type: "User",
                  api: "editUser",
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i> 
              </Link>*/}
              <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "View Guest Details",
                  isEdit: false,
                  type: "User",
                }}
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
      setDataList({ ...dataList, rows: newRows });
    }
  };
  return (
    <Layout activeSlide={"Payout"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pt-4">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Payout Guide Management</h4>
                    <p className="ps-2">(14,555)</p>
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
                      data={dataList}
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
                                status: true,
                              })
                            }
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Active
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
                                status: false,
                              })
                            }
                          />
                          <label class="form-check-label" for="Inactive">
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

export default PayoutManag;
