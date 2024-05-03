import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";

const SubActivity = () => {
  const [subActivity, setSubActivity] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Activity",
        field: "activity",
        width: 50,
        selected: false,
      },
      {
        label: "Sub Activity",
        field: "subActivity",
        width: 50,
        selected: false,
      },
      {
        label: "Added On",
        field: "date",
        width: 100,
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
      <div className="p-4 mt-4 border rounded">
        <h4>ADD NEW SUB ACTIVITY</h4>
        <div className="row py-3">
          <div className="col-md-3 m-b30">
            <select
              className="form-select py-3"
              aria-label="Default select example"
            >
              <option selected>Select Activity</option>
              <option value={1}>Hiking</option>
              <option value={2}>Wildlife Viewing</option>
              <option value={3}>Bornfire</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 m-b30">
            <label className="form-label">
              Enter Sub Activity Name
              <sup className="mandatesign">*</sup>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 m-b30">
            <label htmlFor="formFile" className="form-label">
              Upload Image
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="col-md-2 m-b30 pt-3">
            <a href className="btn btn-primary rounded">
              Save
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-12 pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="col-12 card-body position-relative card-body-2">
            <div className="card_title_container">
              <h4 className="card-title">SUB ACTIVITY LIST</h4>
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
                data={subActivity}
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

export default SubActivity;
