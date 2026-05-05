import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import {
  AllGuidesList,
  ChangeGuideStatus,
  DeleteGuide,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";
import FilterModal from "../Common/Filter/FilterModal";
import StatusFilter from "../Common/Filter/StatusFilter";
import Swal from "sweetalert2";

const Local = () => {
  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
  });
  const [modalShow, setModalShow] = useState(false);
  const [local, setLocal] = useState({
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
        label: "Subscription Plan",
        field: "plan",
        width: 50,
        selected: false,
      },
      {
        label: "Rating",
        field: "rating",
        width: 50,
        selected: false,
      },
      {
        label: "Reviews",
        field: "reviews",
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
    const controller = new AbortController();
    let signal = controller.signal;

    getGuides(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getGuides = async (signal) => {
    let { data } = await AllGuidesList(filterFields, { signal });
    console.log(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.list;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.name = list?.fullName;
          returnData.mobile = +list?.mobileNumber || "NA";
          returnData.email = list?.email || "NA";
          returnData.plan = list?.plan || "None";
          returnData.rating = list?.rating || "NA";
          returnData.reviews = list?.reviews || "NA";
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
            <div class="d-flex">
              {/* <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Local Details",
                  isEdit: false,
                  type: "Guide",
                  api:"editGuide"
                }}
                class="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i class="fa fa-edit"></i>
              </Link> */}
              <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "View Local Details",
                  isEdit: false,
                  updateCommision: true,
                  type: "Guide",
                }}
                class="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i class="fa fa-eye"></i>
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteItem(list?._id)}
                class="btn btn-danger shadow btn-xs sharp"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          );

          newRows.push(returnData);
        });
      setLocal({ ...local, rows: newRows });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
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
        let { data } = await DeleteGuide(id);
        if (data && !data.error) {
          getGuides();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id) => {
    try {
      let { data } = await ChangeGuideStatus(id);
      if (data && !data.error) {
        getGuides();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleApplyFilters = (newFilters) => {
    setFilterFields({
      from: newFilters.from || "",
      to: newFilters.to || "",
      status: newFilters.status === false ? false : newFilters.status || "",
    });
  };
  return (
    <>
      <div className="col-xl-12 pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="col-12 card-body position-relative card-body-2">
            <div className="card_title_container">
              <h4 className="card-title">Local List</h4>
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
                data={local}
                noBottomColumns
                sortable={true}
                paginationLabel={"«»"}
              />
            </div>
            <div className="table-responsive mdb_table2"></div>
          </div>
        </div>
      </div>

      <FilterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onApply={handleApplyFilters}
        initialFilters={filterFields}
      >
        {({ filters, setFilter, resetFilters }) => (
          <StatusFilter filters={filters} setFilter={setFilter} />
        )}
      </FilterModal>
    </>
  );
};

export default Local;
