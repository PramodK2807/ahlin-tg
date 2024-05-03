import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";

const TripBooking = () => {
  const [trip, setTrip] = useState({
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
        label: "Customer Name",
        field: "name",
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
        label: "Booking Amount",
        field: "amount",
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
        label: "Action",
        field: "action",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
  });
  return (
    <div className="col-xl-12 pt-4">
      <div className="card dz-card" id="bootstrap-table1">
        <div className="col-12 card-body position-relative card-body-2">
          <div className="card_title_container">
            <h4 className="card-title">Trip Booking History</h4>
          </div>
          <div className="search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="table-responsive mdb_table">
            <MDBDataTable
              bordered
              displayEntries={false}
              entries={10}
              className="text-nowrap"
              hover
              data={trip}
              noBottomColumns
              sortable={false}
              paginationLabel={"«»"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBooking;
