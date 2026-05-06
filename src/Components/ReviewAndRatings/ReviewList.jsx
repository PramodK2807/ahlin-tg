import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";

import Swal from "sweetalert2";
import Layout from "../Layout/Layout";
import moment from "moment";
import {
  DeleteRating,
  GetAllUserRatings,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import FilterModal from "../Common/Filter/FilterModal";

const ReviewList = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [modalShow, setModalShow] = useState(false);

  const [dataList, setDataList] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        width: 50,
        selected: false,
      },

      {
        label: "Local Name",
        field: "local",
        width: 50,
        selected: false,
      },

      {
        label: "Guest Name",
        field: "guest",
        width: 50,
        selected: false,
      },
      {
        label: "Comment",
        field: "comment",
        width: 50,
        selected: false,
      },
      {
        label: "Ratings",
        field: "ratings",
        width: 50,
        selected: false,
      },
      {
        label: "Date & Time",
        field: "date",
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

  useEffect(() => {
    const controller = new AbortController();
    let signal = controller.signal;
    getReviews(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getReviews = async (signal) => {
    let { data } = await GetAllUserRatings(filterFields, { signal });
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.list;
      values?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt));
      values?.map((data, i) => {
        let returnData = {};
        returnData.sn = i + 1;
        returnData.local = data?.guide?.fullName;
        returnData.guest = data?.user?.fullName;
        returnData.comment = (
          <span
            title={data?.comment}
            style={{ width: "100px", display: "inline-block" }}
            className="text-truncate"
          >
            {data?.comment}
          </span>
        );
        returnData.ratings =
          (data?.rating && (
            <span>
              {data?.rating} <i class="fa-solid fa-star text-warning"></i>
            </span>
          )) ||
          0;
        returnData.date = moment(data?.createdAt).format(
          "MMM Do YYYY : HH:mm A",
        );

        returnData.actions = (
          <div className="d-flex">
            <button
              type="button"
              onClick={() => {
                handleItemDelete(data?._id);
              }}
              className="btn btn-danger shadow btn-xs sharp"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        );
        newRows.push(returnData);
      });
      setDataList({ ...dataList, rows: newRows });
    }
  };

  const handleItemDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete ratings",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirmResult.isConfirmed) {
      try {
        let { data } = await DeleteRating(id);
        if (data && !data?.error) {
          Swal.fire({
            toast: true,
            icon: "success",
            position: "top-end",
            title: "Rating Deleted",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
          });
          getReviews();
        }
      } catch (error) {
        //    console.log(error);
      }
    }
  };

  const handleApplyFilters = (newFilters) => {
    setFilterFields({
      from: newFilters.from || "",
      to: newFilters.to || "",
      // status: newFilters.status === false ? false : newFilters.status || "",
    });
  };
  return (
    <>
      <Layout activeSlide={"Rating"}>
        <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 pt-4">
                <div className="card dz-card" id="bootstrap-table1">
                  <div className="col-12 card-body position-relative card-body-2">
                    <div className="d-flex card_title_container">
                      <h4 className="card-title">Ratings & Reviews</h4>
                    </div>
                    <div className="search_icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="d-flex filter_modal">
                      <button
                        type="button"
                        className="btn filter_manage px-3 py-2"
                        onClick={() => setModalShow(true)}
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
                        data={dataList}
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

        <FilterModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onApply={handleApplyFilters}
          initialFilters={filterFields}
        >
          {/* {({ filters, setFilter, resetFilters }) => (
            <StatusFilter filters={filters} setFilter={setFilter} />
          )} */}
        </FilterModal>
      </Layout>
    </>
  );
};

export default ReviewList;
