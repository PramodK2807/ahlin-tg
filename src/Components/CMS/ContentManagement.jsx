import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";

const ContentManagement = () => {

  const [contentM, setContentM] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Title",
        field: "title",
        width: 50,
        selected: false,
      },
   
      {
        label: "Status",
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
    <Layout activeSlide={"Content"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Guests</h4>
                    <p className="ps-2">(14,555)</p>
                  </div>
                  <div className="search_icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="mdb_table">
                    <div className="table-responsive ">
                      <MDBDataTable
                        bordered
                        displayEntries={false}
                        entries={10}
                        className="text-nowrap"
                        hover
                        data={contentM}
                        noBottomColumns
                        sortable={false}
                        paginationLabel={"«»"}
                        // navigate to view ==== /Dashboard/Guests-Details/123
                      />
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

export default ContentManagement;
