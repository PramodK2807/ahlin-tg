import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

const Help = () => {
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

                  <div className="table-responsive mdb_table">
                    <MDBDataTable
                      bordered
                      displayEntries={false}
                      entries={10}
                      className="text-nowrap"
                      hover
                      data={helpM}
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
      </div>
    </Layout>
  );
};

export default Help;
