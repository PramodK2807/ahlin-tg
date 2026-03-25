import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  ChangeBannerStatus,
  ChangeTicketStatus,
  DeleteBanner,
  GetBannerList,
  GetTickets,
} from "../../adminHttpServices/dashHttpService";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BannerList = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [bannerList, setBannerList] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Banner Name",
        field: "name",
        width: 50,
        selected: false,
      },

      {
        label: "Banner File",
        field: "file",
        width: 50,
        selected: false,
      },

      {
        label: "Created Date",
        field: "date",
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
    getTickets();
  }, []);

  const handleDeleteItem = async (id) => {
    let confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirm?.isConfirmed) {
      let { data } = await DeleteBanner(id);
      if (data && !data?.error) {
        getTickets();
      }
    }
  };

  const changeStatus = async (id, status) => {
    let { data } = await ChangeBannerStatus(id, !status);
    if (data && !data?.error) {
      getTickets();
    }
  };

  const getTickets = async () => {
    let { data } = await GetBannerList(filterFields);
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.banners;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.id = list?.tripId || "NA";
          returnData.name = list?.name || "NA";
          returnData.date =
            moment(list?.createdAt).format("DD/MM/YYYY") || "NA";

          returnData.file = (
            <div>
              <img width={40} height={40} src={list?.image} alt={list?.name} />
            </div>
          );
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
              <Link
                to={`/Banner-Management/Edit`}
                state={list}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-pen"></i>
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
      setBannerList({ ...bannerList, rows: newRows });
    }
  };

  return (
    <Layout activeSlide={"Banner"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Banner Management</h4>
                    {/* <p className="ps-2 d-none">(14,555)</p> */}
                  </div>

                  <div className="search_icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="d-flex filter_modal">
                    <Link
                      className="btn btn-primary rounded "
                      to={"/Banner-Management/Add"}
                      state={{
                        isNew: true,
                        title: "Create New Banner",
                      }}
                    >
                      Create New Banner
                    </Link>
                  </div>

                  <div className="table-responsive mdb_table">
                    <MDBDataTable
                      bordered
                      displayEntries={true}
                      entries={10}
                      className="text-nowrap"
                      hover
                      data={bannerList}
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
      </div>
    </Layout>
  );
};

export default BannerList;
