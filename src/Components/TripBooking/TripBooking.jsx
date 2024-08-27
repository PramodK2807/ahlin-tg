import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import moment from "moment";

const TripBooking = ({ bookings }) => {
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
        label: "Local Name",
        field: "name",
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
      // {
      //   label: "Action",
      //   field: "action",
      //   width: 100,
      //   selected: false,
      // },
    ],
    rows: [],
  });

  useEffect(() => {
    showBookings();
  }, [bookings]);

  const showBookings = () => {
    const newRows = [];
    bookings?.map((list, index) => {
      const returnData = {};
      returnData.sno = index + 1;
      returnData.name = list?.packageName || "NA";
      returnData.id = list?.bookingId || "NA";
      returnData.name = list?.local?.fullName || "NA";
      returnData.mobile = list?.local?.mobileNumber || "NA";
      returnData.amount = list?.package?.price || "NA";
      returnData.date = moment(list?.createdAt).format("L") || "NA";

      newRows.push(returnData);
    });
    setTrip({ ...trip, rows: newRows });
  };
  return (
    <div className="col-xl-12 pt-4">
      <div className="card dz-card" id="bootstrap-table1">
        <div className="col-12 card-body position-relative card-body-2">
          <div className="card_title_container">
            <h4 className="card-title">Trip Booking History</h4>
          </div>
          <div className="search_icon search_icon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="table-responsive mdb_table mdb_table_new mdb2">
            <MDBDataTable
              bordered
              displayEntries={true}
              entries={10}
              className="text-nowrap"
              hover
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
  );
};

export default TripBooking;
