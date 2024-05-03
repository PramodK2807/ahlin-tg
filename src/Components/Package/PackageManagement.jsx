import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";

const PackageManagement = () => {
  const [packageManag, setPackageManag] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Package Name ",
        field: "name",
        width: 50,
        selected: false,
      },
      {
        label: "Local Name ",
        field: "localName",
        width: 50,
        selected: false,
      },
      {
        label: "Package Activity",
        field: "activity",
        width: 50,
        selected: false,
      },
      {
        label: "Price",
        field: "price",
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
    <Layout activeSlide={"Package"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pt-4">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="card_title_container">
                    <h4 className="card-title">Package Management</h4>
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
                      data={packageManag}
                      noBottomColumns
                      sortable={false}
                      paginationLabel={"«»"}
                      // navigate to view ==== /Dashboard/Guests-Details/:123
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

export default PackageManagement;
