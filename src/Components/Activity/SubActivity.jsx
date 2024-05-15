import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";

const SubActivity = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [errors, setErrors] = useState({});

  const [subActivity, setSubActivity] = useState({
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
        label: "Sub Activity",
        field: "subActivity",
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
    
  return (
    <>
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
              <option value={1}>Hiking</option>
              <option value={2}>Wildlife Viewing</option>
              <option value={3}>Bornfire</option>
            </select>
            {errors?.selectError?.isError && (
              <p className="text-danger">{errors?.selectError?.message}</p>
            )}
          </div>
        </div>
        <div className="row">
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
              Upload Image
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
              type="button"
              className="btn btn-primary rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
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
