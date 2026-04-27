import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import { TransactionList } from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";

const TransManag = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [transM, setTransM] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Invoice Id ",
        field: "id",
        width: 50,
        selected: false,
      },
      {
        label: "Booking Id ",
        field: "bookingId",
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
        label: "Guest Name",
        field: "gname",
        width: 50,
        selected: false,
      },
      {
        label: "Local Name",
        field: "lname",
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
        label: "Amount",
        field: "amount",
        width: 50,
        selected: false,
      },
      {
        label: "Ahlin Fees",
        field: "ahlainFee",
        width: 50,
        selected: false,
      },
      {
        label: "Vat Tax",
        field: "vat",
        width: 50,
        selected: false,
      },
      {
        label: "Total Amount",
        field: "total",
        width: 50,
        selected: false,
      },
      {
        label: "Payment Method",
        field: "payment",
        width: 50,
        selected: false,
      },

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
          returnData.bookingId = list?.bookingId || "NA";
          returnData.gname = list?.user?.fullName || "NA";
          returnData.id = list?.paymentId || "NA";
          returnData.lname = list?.local?.fullName || "NA";
          returnData.date = list?.createdAt
            ? new Date(list?.createdAt).toLocaleDateString()
            : "NA";
          returnData.amount = list?.amount || "0";
          returnData.ahlainFee = list?.adminFees || "0";
          returnData.status = list?.status || "Pending";
          returnData.payment = list?.paymentType || "NA";

          returnData.vat =
            Number(list?.totalAmountAfterCommission || 0) -
            Number(list?.amount || 0);

          returnData.total =
            Number(list?.totalAmountAfterCommission || 0) +
            Number(list?.adminFees || 0);
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
      setTransM({ ...transM, rows: newRows });
    }
  };
  return (
    <Layout activeSlide={"Transaction"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pt-4">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Transaction Management</h4>
                    <p className="ps-2">({transM.rows.length || 0})</p>
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
                      data={transM}
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
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        From:
                      </label>
                      <div class="searchh_box">
                        <form>
                          <input class="form-control ps-3" type="date" />
                          <button class="">
                            <i class="fa-regular fa-calendar"></i>
                          </button>
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
                          <input class="form-control ps-3" type="date" />
                          <button class="">
                            <i class="fa-regular fa-calendar"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
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
                          Complete
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
                          Pending
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
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

export default TransManag;
