import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import {
  ChangeActivityStatus,
  CreateActivity,
  DeleteActivity,
  GetAllActivity,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";

const Activity = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [errors, setErrors] = useState({});

  const [activity, setActivity] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Activity",
        field: "activity",
        width: 50,
        selected: false,
      },
      {
        label: "Logo",
        field: "logo",
        width: 50,
        selected: false,
      },
      {
        label: "Added On",
        field: "date",
        width: 100,
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
    getActivity();
  }, []);

  const handleNameChange = (e) => {
    let value = e.target.value;
    setName(value);
    if (value.trim().length <= 3) {
      setErrors({
        ...errors,
        nameError: {
          isError: true,
          message: "Please enter more than 3 characters",
        },
      });
    } else {
      setErrors({
        ...errors,
        nameError: {
          isError: false,
        },
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          fileError: {
            isError: true,
            message: "Only JPEG, PNG, or GIF files are allowed.",
          },
        }));
      } else if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          fileError: {
            isError: true,
            message: "File size must be under 2MB.",
          },
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          fileError: {
            isError: false,
          },
        }));
      }
    } else {
      setErrors((prev) => ({
        ...prev,
        fileError: {
          isError: true,
          message: "Please upload a file.",
        },
      }));
    }
  };
  const isFormValid =
    !errors.nameError?.isError &&
    !errors.fileError?.isError &&
    name.trim().length > 0 &&
    file !== null;

  const handleAddActivity = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      console.log(file);
      formData.append("activityName", name);
      formData.append("uploadImage", file);
      let { data } = await CreateActivity(formData);
      if (data && !data?.error) {
        setName("");
        document.getElementById("reset").click();
        setFile([]);
        getActivity();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getActivity = async () => {
    let { data } = await GetAllActivity();
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.listActivity;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.activity = list?.activityName || "NA";
          returnData.date = moment(list?.createdAt).format("Do MMMM YYYY");
          returnData.logo = (
            <span>
              <img
                height={25}
                width={25}
                className="rounded border"
                src={list?.uploadImage[0]}
                alt=""
              />
            </span>
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
              </Link>
              <Link
                to={`/Activity-Management/Details/${list?._id}`}
                state={{
                  title: "View Activity Details",
                  isEdit: false,
                  type: "activity",
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
      setActivity({ ...activity, rows: newRows });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeleteActivity(id);
      if (data && !data.error) {
        getActivity();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id) => {
    try {
      let { data } = await ChangeActivityStatus(id);
      if (data && !data.error) {
        getActivity();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleAddActivity}>
        <div className="p-4 mt-4 border rounded">
          <h4>ADD NEW ACTIVITY</h4>
          <div className="row pt-4">
            <div className="col-md-6 m-b30">
              <label className="form-label">
                Enter Activity Name
                <sup className="mandatesign">*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleNameChange(e)}
              />
              {errors?.nameError?.isError && (
                <p className="text-danger">{errors?.nameError?.message}</p>
              )}
            </div>
            <div className="col-md-6 m-b30">
              <label htmlFor="formFile" className="form-label">
                Upload Image (Please upload a 20px * 20px image.)
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={handleFileChange}
                multiple
              />
              {errors?.fileError?.isError && (
                <p className="text-danger">{errors?.fileError?.message}</p>
              )}
            </div>
            <div className="col-md-2 m-b30 pt-3">
              <button
                disabled={!isFormValid}
                type="submit"
                className="btn btn-primary rounded"
                // onClick={handleAddActivity}
              >
                Save
              </button>
              <button className="d-none" type="reset" id="reset">
                reset
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="col-xl-12 pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="col-12 card-body position-relative card-body-2">
            <div className="card_title_container">
              <h4 className="card-title">ACTIVITY LIST</h4>
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
                data={activity}
                noBottomColumns
                sortable={false}
                paginationLabel={"«»"}
                // navigate to view ==== /Dashboard/Guests-Details/:123
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
