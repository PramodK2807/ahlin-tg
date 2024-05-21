import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ActivityDetails,
  GetAllActivity,
  SubActivityDetails,
  UpdateActivity,
} from "../../adminHttpServices/dashHttpService";
import Swal from "sweetalert2";

const ActivityEdit = () => {
  const [activityName, setActivityName] = useState("");
  const [date, setDate] = useState("");
  const [activityimages, setActivityimages] = useState([]);
  const [files, setFiles] = useState([]);
  const [activityId, setActivityId] = useState();
  const [subActDetails, setSubActDetails] = useState();
  const [activity, setActivity] = useState([]);
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.type === "activity") {
      getActivityDetails();
    }
    if (state?.type === "subActivity") {
      getActivity();
      getSubActivityDetails();
    }
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

  const getActivityDetails = async () => {
    try {
      let { data } = await ActivityDetails(id);
      if (data && !data?.error) {
        console.log(data);
        let values = data?.results?.details;
        setActivityName(values?.activityName);
        setActivityimages(values?.uploadImage || []);
        setDate(values?.createdAt?.split("T")[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getSubActivityDetails = async () => {
    try {
      let { data } = await SubActivityDetails(id);
      if (data && !data?.error) {
        console.log(data);
        let values = data?.results?.subactivity;
        setSubActDetails(values);
        setActivityName(values?.subactivityName);
        setActivityimages(values?.uploadImage || []);
        setActivityId(values?.activity?._id || []);
        setDate(values?.createdAt?.split("T")[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelection = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const filePreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setActivityimages((prevImages) => [...prevImages, ...filePreviews]);
  };

  const handleUpdateActivity = async (e) => {
    e.preventDefault();
    if (activityName?.trim() === "") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Name is required",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    if (!date) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Date is required",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }

    try {
      const formData = new FormData();
      if (state?.type === "activity") {
        formData.append("activityName", activityName.trim());
      }
      if (state?.type === "subActivity") {
        formData.append("subactivityName", activityName.trim());
        formData.append("activity", activityId);
      }

      if (files) {
        files.forEach((file) => {
          formData.append("uploadImage", file);
        });
      }
      let { data } = await UpdateActivity(state?.api, id, formData);
      if (data && !data?.error) {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout activeSlide={"Activities"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">{state?.title}</h6>
                </div>
                <form className="profile-form" onSubmit={handleUpdateActivity}>
                  <div className="card-body">
                    <div className="row">
                      {state?.type === "subActivity" && (
                        <div className="col-md-6 m-b30">
                          <label className="form-label">
                            Activity <sup className="mandatesign">*</sup>
                          </label>
                          <select
                            className="form-select py-3"
                            aria-label="Default select example"
                            onChange={(e) => setActivityId(e.target.value)}
                            disabled={!state?.isEdit}
                          >
                            {activity &&
                              activity?.map((item) => (
                                <>
                                  <option
                                    selected={
                                      subActDetails?.activity?._id === item?._id
                                    }
                                    value={item?._id}
                                    key={item?._id}
                                  >
                                    {item?.activityName}
                                  </option>
                                </>
                              ))}
                          </select>
                        </div>
                      )}
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={activityName}
                          onChange={(e) => setActivityName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Added On<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      {!state?.isEdit && (
                        <div className="col-md-3 m-b30">
                          <label className="form-label">
                            Activities<sup className="mandatesign">*</sup>
                          </label>
                          <div className="d-flex justify-content-between flex-wrap">
                            <div className="border p-2">
                              <h5 className="text-center bg-body-secondary p-1">
                                Wildlife Viewing
                              </h5>
                              <div className="row">
                                {activityimages &&
                                  activityimages?.map((images, index) => (
                                    <div className="col-3" key={index}>
                                      <img
                                        src={images}
                                        alt="act"
                                        className="activity_image w-100"
                                      />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {state?.isEdit && (
                        <>
                          <div className="col-12 m-b30">
                            <p className="form-label">Upload Images</p>
                            <label
                              htmlFor="images"
                              className="p-2 upload_label text-center m-auto w-100"
                            >
                              <div className="mt-1">
                                <i
                                  className="fa fa-cloud-upload-alt"
                                  aria-hidden="true"
                                ></i>
                                <span> Upload multiple images</span>
                              </div>
                              <div className="row">
                                {activityimages &&
                                  activityimages.map((image, index) => (
                                    <div className="col-3" key={index}>
                                      <img
                                        src={image}
                                        alt="preview"
                                        className="activity_image w-100"
                                      />
                                    </div>
                                  ))}
                              </div>
                              <input
                                type="file"
                                multiple
                                className="d-none w-100"
                                name="images"
                                id="images"
                                onChange={handleFileSelection}
                              />
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {state?.isEdit && (
                    <div className="card-footer">
                      <button className="btn btn-primary">Save</button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityEdit;
