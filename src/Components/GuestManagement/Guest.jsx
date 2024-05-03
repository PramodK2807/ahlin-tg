import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";

const Guest = () => {
  const [guest, setGuest] = useState({
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
        label: "Country",
        field: "country",
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

  return (
    <>
      <div className="col-xl-12 pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="card-header flex-wrap border-0 d-none">
            <div>
              <h4 className="card-title">GUEST LIST</h4>
            </div>
            <div className="searchh_box">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
              />
              <button>
                <i className="fas fa-search" />
              </button>
            </div>
          </div>

          <div className="col-12 card-body position-relative card-body-2">
            <div className="card_title_container">
              <h4 className="card-title">GUEST LIST</h4>
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
                data={guest}
                noBottomColumns
                sortable={false}
                paginationLabel={"«»"}
                // navigate to view ==== /Dashboard/Guests-Details/:123
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
