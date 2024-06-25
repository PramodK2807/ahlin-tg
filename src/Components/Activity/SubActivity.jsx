import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import {
  ChangeSubActivityStatus,
  CreateSubActivity,
  DeleteSubActivity,
  GetAllActivity,
  GetAllSubActivity,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";

const SubActivity = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [errors, setErrors] = useState({});
  const [activity, setActivity] = useState([]);
  const [activityId, setActivityId] = useState();

  const [subActivity, setSubActivity] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },

      {
        label: "Sub Activity",
        field: "subActivity",
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
        label: "Activity",
        field: "activity",
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
    getSubActivity();
    getActivity();
  }, []);

  const getActivity = async () => {
    try {
      let { data } = await GetAllActivity();
      if (data && !data?.error) {
        setActivity(data?.results?.listActivity);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSubActivity = async () => {
    let { data } = await GetAllSubActivity();
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.subactivities;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.subActivity = list?.subactivityName || "NA";
          returnData.activity = list?.activity?.activityName || "NA";
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
                  title: "Edit Sub Activity Details",
                  isEdit: true,
                  type: "subActivity",
                  api: "editSubActivity",
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i>
              </Link>
              <Link
                to={`/Activity-Management/Details/${list?._id}`}
                state={{
                  title: "View Sub Activity Details",
                  isEdit: false,
                  type: "subActivity",
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
      setSubActivity({ ...subActivity, rows: newRows });
    }
  };

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
  const handleSelectChange = (e) => {
    let value = e.target.value;
    setActivityId(value);
    if (value === undefined || value === "") {
      setErrors((prev) => ({
        ...prev,
        selectError: {
          isError: true,
          message: "Please select a option",
        },
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        selectError: {
          isError: false,
        },
      }));
    }
  };
  const isFormValid =
    !errors.nameError?.isError &&
    !errors.fileError?.isError &&
    name.trim().length > 0 &&
    !errors.selectError?.isError;

  const handleAddSubActivity = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      console.log(file);
      formData.append("subactivityName", name);
      formData.append("activityId", activityId);
      formData.append("uploadImage", file);
      let { data } = await CreateSubActivity(formData);
      if (data && !data?.error) {
        setName("");
        document.getElementById("resetSub").click();
        setFile([]);
        getSubActivity();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(name, file, activityId);
  };

  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeleteSubActivity(id);
      if (data && !data.error) {
        getSubActivity();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id) => {
    try {
      let { data } = await ChangeSubActivityStatus(id);
      if (data && !data.error) {
        getSubActivity();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleAddSubActivity}>
        <div className="p-4 mt-4 border rounded">
          <h4>ADD NEW SUB ACTIVITY</h4>
          <div className="row py-3">
            <div className="col-md-3 m-b30">
              <select
                className="form-select py-3"
                aria-label="Default select example"
                onChange={handleSelectChange}
              >
                <option selected value={""}>
                  Select Activity
                </option>
                {activity.length &&
                  activity?.map((item) => (
                    <>
                      <option value={item?._id}>{item?.activityName}</option>
                    </>
                  ))}
              </select>
              {errors?.selectError?.isError && (
                <p className="text-danger">{errors?.selectError?.message}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 m-b30">
              <label className="form-label">
                Enter Sub Activity Name
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
                Upload Image (Upload a 20*20 image for the best display)
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={handleFileChange}
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
              >
                Save
              </button>
              <button className="d-none" id="resetSub" type="reset">
                r
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="col-xl-12 pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="col-12 card-body position-relative card-body-2">
            <div className="card_title_container">
              <h4 className="card-title">SUB ACTIVITY LIST</h4>
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
                data={subActivity}
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

export default SubActivity;
