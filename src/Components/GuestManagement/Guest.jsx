import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import {
  AllUsersList,
  ChangeUserStatus,
  DeleteUser,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import FilterModal from "../Common/Filter/FilterModal";
import StatusFilter from "../Common/Filter/StatusFilter";
import Swal from "sweetalert2";

const Guest = ({ latest }) => {
  const [modalShow, setModalShow] = useState(false);

  const [filterFields, setFilterFields] = useState({
    from: "",
    to: "",
    status: "",
    countryName: "",
  });
  const [user, setUser] = useState({
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

  useEffect(() => {
    const controller = new AbortController();
    let signal = controller.signal;

    getUsers(signal);

    return () => {
      controller.abort();
    };
  }, [filterFields]);

  const getUsers = async (signal) => {
    let { data } = await AllUsersList(filterFields, { signal });
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values;
      values =
        latest && latest
          ? data?.results?.list.slice(0, 10)
          : data?.results?.list;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.name = list?.fullName || "NA";
          returnData.mobile = +list?.mobileNumber || "NA";
          returnData.email = list?.email || "NA";
          returnData.country = list?.countryName || "NA";

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
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Guest Details",
                  isEdit: false,
                  type: "User",
                  api: "editUser",
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i> 
              </Link>*/}
              <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "View Guest Details",
                  isEdit: false,
                  type: "User",
                }}
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
      setUser({ ...user, rows: newRows });
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
        let { data } = await DeleteUser(id);
        if (data && !data.error) {
          getUsers();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id) => {
    try {
      let { data } = await ChangeUserStatus(id);
      if (data && !data.error) {
        getUsers();
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
              <h4 className="card-title">Guests List</h4>
            </div>
            <div className="search_icon">
              <i className="fa-solid fa-magnifying-glass"></i>
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
                data={user}
                noBottomColumns
                sortable={true}
                paginationLabel={"«»"}
              />
            </div>
            <div className="table-responsive mdb_table2"></div>
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
      </div>
    </>
  );
};

export default Guest;
