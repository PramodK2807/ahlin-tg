import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import {
  ChangePackageStatus,
  DeletePackage,
  GetAllPackage,
} from "../../adminHttpServices/dashHttpService";
import moment from "moment";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async () => {
    let { data } = await GetAllPackage();
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.list;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.name = list?.packageName || "NA";
          returnData.localName = list?.local?.fullName || "NA";
          returnData.activity = list?.Activities?.map(
            (activity) => <p className="mb-0 p-0">• {activity}</p>
          );

          returnData.price = list?.price || "NA";
          // returnData.date = moment(list?.createdAt).format("Do MMMM YYYY");

          returnData.status = (
            <div className="check_toggle text-center" key={list?._id}>
              <input
                type="checkbox"
                defaultChecked={list?.status}
                name="check1"
                id={list?._id}
                className="d-none"
                onClick={() => {
                  changeStatus(list?._id, list?.status);
                }}
              />
              <label for={list?._id}></label>
            </div>
          );
          returnData.actions = (
            <div className="d-flex">
              {/* <Link
                to={`/Activity-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Activity Details",
                  isEdit: true,
                  type: "activity",
                  api: "editActivity",
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i>
              </Link> */}
              <Link
                to={`/Package-Management/Details/${list?._id}`}
                // state={{
                //   title: "View Activity Details",
                //   isEdit: false,
                //   type: "activity",
                // }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-eye"></i>
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteItem(list?._id)}
                className="btn btn-danger shadow btn-xs sharp"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          );

          newRows.push(returnData);
        });
      setPackageManag({ ...packageManag, rows: newRows });
    }
  };
  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeletePackage(id);
      if (data && !data.error) {
        getPackage();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeStatus = async (id) => {
    try {
      let { data } = await ChangePackageStatus(id);
      if (data && !data.error) {
        getPackage();
      }
    } catch (error) {
      console.log(error);
    }
  };
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
