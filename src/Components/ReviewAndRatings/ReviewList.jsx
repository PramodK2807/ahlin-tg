import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";

import Swal from "sweetalert2";
import Layout from "../Layout/Layout";
import moment from "moment";
import { GetAllUserRatings } from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";

const ReviewList = () => {
  const [open, setOpen] = useState(false);
  const [ratingsDetails, setRatingsDetails] = useState();

  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        width: 50,
        selected: false,
      },

      {
        label: "Product Name",
        field: "title",
        width: 50,
        selected: false,
      },

      {
        label: "User Name",
        field: "user",
        width: 50,
        selected: false,
      },
      {
        label: "User Email",
        field: "email",
        width: 50,
        selected: false,
      },
      {
        label: "Mobile Number",
        field: "mobileNumber",
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
  const [filterData, setFilterData] = useState({
    search: "",
    from: "",
    to: "",
    pageSize: 10,
    page: 1,
  });
  const [pageInformation, setPageInformation] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    let signal = controller.signal;
    getReviews(signal);

    return () => {
      controller.abort();
    };
  }, [filterData]);

  const handleCloseDrawer = () => {
    setOpen(false);
  };
  const getReviews = async (signal) => {
    let { data } = await GetAllUserRatings(filterData, { signal });
    const newRows = [];
    if (!data?.error) {
      setPageInformation({
        page: data?.results?.page,
        totalData: data?.results?.total,
        totalPages: data?.results?.totalPage,
        total: data?.results?.total,
      });
      let page = +data?.results?.page;
      let values = data?.results?.rating;
      values?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt));
      values?.map((data, i) => {
        let returnData = {};
        returnData.sn = (page - 1) * 10 + (i + 1);
        returnData.title = data?.product?.title_en;
        returnData.user = data?.user?.firstName;
        returnData.email = data?.user?.email;
        returnData.mobileNumber = data?.user?.mobileNumber;
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
        returnData.description = (
          <span className="description_text text-truncate">
            {data?.description_en}
          </span>
        );
        returnData.actions = (
          <ul className="d-flex justify-content-center">
            <li onClick={() => setRatingsDetails(data)}>
              <Link className="mx-2" onClick={() => setOpen(true)}>
                <i className="ri-eye-line" />
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  setRatingsDetails(data);
                  handleItemDelete(data?._id);
                }}
                className="cursor_pointer"
                alt="i"
                type="button"
              >
                <i className="ri-delete-bin-line" />
              </a>
            </li>
          </ul>
        );
        newRows.push(returnData);
      });
      setDataTable({ ...dataTable, rows: newRows });
    }
  };

  const handleItemDelete = async (id) => {
    console.log(id);
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete ratings",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    // if (confirmResult.isConfirmed) {
    //   try {
    //     let { data } = await DeleteRating(id || ratingsDetails?._id);
    //     if (data && !data?.error) {
    //       Swal.fire({
    //         toast: true,
    //         icon: "success",
    //         position: "top-end",
    //         title: "Rating Deleted",
    //         showConfirmButton: false,
    //         timerProgressBar: true,
    //         timer: 3000,
    //       });
    //       getReviews();
    //       handleCloseDrawer();
    //     }
    //   } catch (error) {
    //     //    console.log(error);
    //   }
    // }
  };

  return (
    <>
      <Layout activeSlide={"Rating"}>
        <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 pt-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="title-header option-title d-sm-flex d-block">
                        <h5>Review & Ratings Management</h5>
                      </div>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                      {/* <a
                              className="filter_btn"
                              data-bs-toggle="modal"
                              data-bs-target="#filter"
                              href="javascript:;"
                            >
                              <i className="fas fa-filter" />
                            </a> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mdb_table mdb2 mt-3 ">
                      <div className="table-responsive">
                        <MDBDataTable
                          bordered
                          // hover
                          striped
                          displayEntries={false}
                          entries={10}
                          className="text-nowrap border-none"
                          data={dataTable}
                          noBottomColumns
                          paginationLabel={"«»"}
                          sortable={false}
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
    </>
  );
};

export default ReviewList;
