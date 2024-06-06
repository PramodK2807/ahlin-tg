import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import {
  AllUsersList,
  ChangeUserStatus,
  DeleteUser,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";

const Guest = () => {
  const [user, setUser] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "First Name",
        field: "firstName",
        width: 50,
        selected: false,
      },
      {
        label: "Last Name",
        field: "lastName",
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
    getUsers();
  }, []);

  const getUsers = async () => {
    let { data } = await AllUsersList();
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.list;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.firstName = list?.firstName || "NA";
          returnData.lastName = list?.lastName || "NA";
          returnData.mobile = list?.mobileNumber || "NA";
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
              <Link
                to={`/Guest-Management/Details/${list?._id}`}
                state={{
                  title: "Edit Guest Details",
                  isEdit: true,
                  type: "User",
                  api:"editUser"
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i>
              </Link>
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
      let { data } = await DeleteUser(id);
      if (data && !data.error) {
        getUsers();
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
            <div className="table-responsive mdb_table">
              <MDBDataTable
                bordered
                displayEntries={false}
                entries={10}
                className="text-nowrap"
                hover
                data={user}
                noBottomColumns
                sortable={false}
                paginationLabel={"«»"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
